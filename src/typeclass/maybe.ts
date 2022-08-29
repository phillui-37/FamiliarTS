import { tuple2, Tuple2 } from "../collections/tuple"

type IMaybe<T> = {
  isJust: boolean
  isNothing: boolean
  get(): T
  getOr(fallback: T): T
  getOrElse(getFallback: () => T): T
  // Functor
  map<U>(fn: (t:T) => U): IMaybe<U>
  replace<U>(u: U): IMaybe<U>
  // Applicative
  apply<R, U>(mr: IMaybe<R>): IMaybe<U>
  discardSelf<U>(other: IMaybe<U>): IMaybe<U>
  discardOther<U>(other: IMaybe<U>): IMaybe<T>
  // Alternative
  or(other: IMaybe<T>): IMaybe<T>
  // Monad
  bind<U>(fn: (t: T) => IMaybe<U>): IMaybe<U>
  // other
  and<U>(other: IMaybe<U>): IMaybe<U>
  xor(other: IMaybe<T>): IMaybe<T>
  orElse(getOther: () => IMaybe<T>): IMaybe<T>
  filter(predicate: (t: T) => boolean): IMaybe<T>
  zip<U>(other: IMaybe<U>): IMaybe<Tuple2<T, U>>
}

export class Just<T> implements IMaybe<T> {
  constructor(readonly t: T) {}

  map = <U>(fn: (t: T) => U) => just(fn(this.t))
  replace = <U>(u: U) => just(u)

  apply = <R, U>(mr: IMaybe<R>): IMaybe<U> => {
    if (typeof this.t !== 'function')
      throw new TypeError("apply not applicable")
    return just(this.t(mr.get()))
  }

  discardSelf = <U>(other: IMaybe<U>) => other
  discardOther = <U>(other: IMaybe<U>) => this
  or = (other: IMaybe<T>) => this
  bind = <U>(fn: (t: T) => IMaybe<U>) => fn(this.t)
  and = <U>(other: IMaybe<U>) => other
  xor = (other: IMaybe<T>) => other.isJust ? nothing : other
  orElse = (getOther: () => IMaybe<T>) => this
  filter = (predicate: (t: T) => boolean): IMaybe<T> => predicate(this.t) ? this : nothing
  zip = <U>(other: IMaybe<U>): IMaybe<Tuple2<T, U>> => other.isNothing ? nothing : just(tuple2(this.t, other.get()))
  isJust = true
  isNothing = false
  get = () => this.t
  getOr = (fallback: T) => this.t
  getOrElse = (getFallback: () => T) => this.t
  toString = () => `Just(${this.t})`
}

export class Nothing implements IMaybe<any> {
  private constructor() {}

  static instance = new Nothing()

  map = <U>(fn: (t: any) => U) => this
  replace = <U>(u: U) => this
  apply = <R, U>(mr: IMaybe<R>) => this
  discardSelf = <U>(other: IMaybe<U>) => this
  discardOther = <U>(other: IMaybe<U>) => this
  or = <T>(other: IMaybe<T>) => other
  bind = <U>(fn: (t: any) => IMaybe<U>) => this
  and = <U>(other: IMaybe<U>) => this
  xor = <T>(other: IMaybe<T>) => other
  orElse = <T>(getOther: () => IMaybe<T>) =>getOther()
  filter = (predicate: (t: any) => boolean) => this
  zip = <U>(other: IMaybe<U>) => this
  isJust = false
  isNothing = true
  get = () => {throw new TypeError("Cannot get value from Nothing")}
  getOr = <T>(fallback: T) => fallback
  getOrElse = <T>(getFallback: () => T) => getFallback()
  toString = () => "Nothing"
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