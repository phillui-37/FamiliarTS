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

  map<U>(fn: (t: T) => U): IMaybe<U> {
    return just(fn(this.t))
  }

  replace<U>(u: U): IMaybe<U> {
    return just(u)
  }

  apply<R, U>(mr: IMaybe<R>): IMaybe<U> {
    if (typeof this.t !== 'function')
      throw new TypeError("apply not applicable")
    return just(this.t(mr.get()))
  }

  discardSelf<U>(other: IMaybe<U>): IMaybe<U> {
    return other
  }

  discardOther<U>(other: IMaybe<U>): IMaybe<T> {
    return this
  }

  or(other: IMaybe<T>): IMaybe<T> {
    return this
  }

  bind<U>(fn: (t: T) => IMaybe<U>): IMaybe<U> {
    return fn(this.t)
  }

  and<U>(other: IMaybe<U>): IMaybe<U> {
    return other
  }

  xor(other: IMaybe<T>): IMaybe<T> {
    /* @ts-ignore */
    if (other.isJust) return nothing
    else return other
  }

  orElse(getOther: () => IMaybe<T>): IMaybe<T> {
    return this
  }

  filter(predicate: (t: T) => boolean): IMaybe<T> {
    /* @ts-ignore */
    return predicate(this.t) ? this : nothing
  }

  zip<U>(other: IMaybe<U>): IMaybe<Tuple2<T, U>> {
    /* @ts-ignore */
    if (other.isNothing) return nothing
    return just(tuple2(this.t, other.get()))
  }

  isJust = true
  isNothing = false
  get = () => this.t
  getOr(fallback: T): T {
    return this.t
  }

  getOrElse(getFallback: () => T): T {
    return this.t
  }

  toString = () => `Just(${this.t})`
}

export class Nothing implements IMaybe<never> {
  private constructor() {}

  static instance = new Nothing()

  map<U>(fn: (t: never) => U): IMaybe<never> {
    return this
  }

  replace<U>(u: U): IMaybe<U> {
    return this
  }

  apply<R, U>(mr: IMaybe<R>): IMaybe<U> {
    return this
  }

  discardSelf<U>(other: IMaybe<U>): IMaybe<U> {
    return this
  }

  discardOther<U>(other: IMaybe<U>): IMaybe<never> {
    return this
  }

  or<T>(other: IMaybe<T>): IMaybe<T> {
    return other
  }

  bind<U>(fn: (t: never) => IMaybe<U>): IMaybe<U> {
    return this
  }

  and<U>(other: IMaybe<U>): IMaybe<U> {
    return this
  }

  xor<T>(other: IMaybe<T>): IMaybe<T> {
    return other
  }

  orElse(getOther: () => IMaybe<never>): IMaybe<never> {
    return getOther()
  }

  filter(predicate: (t: never) => boolean): IMaybe<never> {
    return this
  }

  zip<U>(other: IMaybe<U>): IMaybe<Tuple2<never, U>> {
    return this
  }

  isJust = false
  isNothing = true
  get = () => {throw new TypeError("Cannot get value from Nothing")}
  getOr<T>(fallback: T): T {
    return fallback
  }
  getOrElse(getFallback: () => never): never {
    return getFallback()
  }

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
    else return new Just(t)
  }

  export function flatten<T>(m: Maybe<Maybe<T>>): Maybe<T> {
    /*  */
    if (isNothing(m)) return m
    else return m.get()
  }
}