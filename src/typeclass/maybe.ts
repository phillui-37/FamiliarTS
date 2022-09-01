import { Display } from "../basic"
import { tuple2, Tuple2 } from "../collections"

type TJustChange<T, R> = ThisType<T> extends Nothing ? ThisType<T> : ThisType<R>
type TNothingChange<T, R> = ThisType<T> extends Nothing ? ThisType<R> : ThisType<T>
interface IMaybe<T> extends Display {
  isJust: boolean
  isNothing: boolean
  get(): ThisType<T> extends Nothing ? never : T
  getOr(fallback: T): T
  getOrElse(getFallback: () => T): T
  map<U>(fn: (t:T) => U): TJustChange<T, U>
  replace<U>(u: U): TJustChange<T, U>
  discardSelf<U>(other: IMaybe<U>): TJustChange<T, U>
  discardOther<U>(other: IMaybe<U>): TNothingChange<T, U>
  or(other: IMaybe<T>): TJustChange<T, T>
  bind<U>(fn: (t: T) => IMaybe<U>): TJustChange<T, U>
  and<U>(other: IMaybe<U>): TNothingChange<T, U>
  xor(other: IMaybe<T>): TNothingChange<T, T>
  orElse(getOther: () => IMaybe<T>): TJustChange<T, T>
  filter(predicate: (t: T) => boolean): TJustChange<T, T>
  zip<U>(other: IMaybe<U>): TJustChange<T, Tuple2<T, U>>
}


export class Just<T> implements IMaybe<T> {
  constructor(readonly t: T) {}

  map = <U>(fn: (t: T) => U) => just(fn(this.t))
  replace = <U>(u: U) => just(u)
  discardSelf = <U>(other: IMaybe<U>) => other
  discardOther = <U>(other: IMaybe<U>) => this
  or = (other: IMaybe<T>) => this
  bind = <U>(fn: (t: T) => IMaybe<U>) => fn(this.t)
  and = <U>(other: IMaybe<U>) => other
  xor = (other: IMaybe<T>): Maybe<T> => other.isJust ? nothing : this
  orElse = (getOther: () => IMaybe<T>) => this
  filter = (predicate: (t: T) => boolean): Maybe<T> => predicate(this.t) ? this : nothing
  zip = <U>(other: IMaybe<U>): Maybe<Tuple2<T, U>> => other.isNothing ? nothing : just(tuple2(this.t, other.get()))
  isJust = true
  isNothing = false
  get = () => this.t
  getOr = (fallback: T) => this.t
  getOrElse = (getFallback: () => T) => this.t
  isDisplay = true
  display = () => `Just(${Display.display(this.t)})`
}

export class Nothing implements IMaybe<any> {
  private constructor() {}

  static readonly instance = new Nothing()

  map = <U>(fn: (t: any) => U) => this
  replace = <U>(u: U) => this
  discardSelf = <U>(other: IMaybe<U>) => this
  discardOther = <U>(other: IMaybe<U>) => this
  or = <T>(other: IMaybe<T>) => other
  bind = <U>(fn: (t: any) => IMaybe<U>) => this
  and = <U>(other: IMaybe<U>) => this
  xor = <T>(other: IMaybe<T>) => other
  orElse = <T>(getOther: () => IMaybe<T>) =>getOther()
  filter = <T>(predicate: (t: T) => boolean) => this
  zip = <U>(other: IMaybe<U>) => this
  isJust = false
  isNothing = true
  get = () => {throw new TypeError("Cannot get value from Nothing")}
  getOr = <T>(fallback: T) => fallback
  getOrElse = <T>(getFallback: () => T) => getFallback()
  isDisplay = true
  display = () => "Nothing"
}

export type Maybe<T> = Just<T> | Nothing

export const nothing = Nothing.instance
export const just = <T>(t: T) => Maybe.of(t)

export namespace Maybe {
  export function isNothing<T>(m: Maybe<T>): m is Nothing { return m.isNothing }
  export function isJust<T>(m: Maybe<T>): m is Just<T> { return m.isJust }
  export function of<T>(t: T): Maybe<T> {
    if (t === undefined || t === null) return nothing as Maybe<T>
    // need ignore to be compiled
    /* @ts-ignore */
    else return new Just(t)
  }

  export function flatten<T>(m: Maybe<Maybe<T>>): Maybe<T> {
    if (isNothing(m)) return m
    else return m.get()
  }
}