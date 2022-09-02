import { Display } from "../basic";

type TRightChange<L, R, R2> = ThisType<L & R> extends Right<R> ? ThisType<L & R2> : ThisType<L & R>
type TLeftChange<L, L2, R> = ThisType<L & R> extends Left<L> ? ThisType<L2 & R> : ThisType<L & R>

type IEither<L, R> = Display & {
  isLeft: boolean
  isRight: boolean

  mapRight<U>(fn: (_: R) => U): TRightChange<L, R, U>
  mapRightOr<U>(fallback: U, fn: (_: R) => U): U
  mapRightOrElse<U>(getFallback: (_: L) => U, fn: (_: R) => U): U
  expectRight(msg: string): R | never
  getRight(): R | never
  getRightOr(fallback: R): R
  getRightOrElse(fn: (_: L) => R): R
  andRight<U>(other: IEither<L, U>): TRightChange<L, R, U>
  flatMapRight<U>(fn: (_: R) => IEither<L, U>): TRightChange<L, R, U>
  orRight(other: IEither<L, R>): IEither<L, R>
  orRightElse(fn: (_: L) => IEither<L, R>): IEither<L, R>

  mapLeft<U>(fn: (_: L) => U): TLeftChange<L, U, R>
  mapLeftOr<U>(fallback: U, fn: (_: L) => U): U
  mapLeftOrElse<U>(getFallback: (_: R) => U, fn: (_: L) => U): U
  expectLeft(msg: string): L | never
  getLeft(): L | never
  getLeftOr(fallback: L): L
  getLeftOrElse(fn: (_: R) => L): L
  andLeft<U>(other: IEither<U, R>): TLeftChange<L, U, R>
  flatMapLeft<U>(fn: (_: L) => IEither<U, R>): TLeftChange<L, U, R>
  orLeft(other: IEither<L, R>): IEither<L, R>
  orLeftElse(fn: (_: R) => IEither<L, R>): IEither<L, R>
}

export class Left<L> implements IEither<L, any> {
  constructor(readonly value: L) { }

  isDisplay = true
  display = () => `Left(${this.value})`

  isLeft = true
  isRight = false

  mapRight<U>(fn: (_: any) => U) { return this }
  mapRightOr<R, U>(fallback: U, fn: (_: R) => U) { return fallback }
  mapRightOrElse<U>(getFallback: (_: L) => U, fn: (_: any) => U) { return getFallback(this.value) }
  expectRight(msg: string) { throw new Error(msg) }
  getRight() { throw new Error("cannot getRight from Left") }
  getRightOr<U>(fallback: U) { return fallback }
  getRightOrElse<U>(fn: (_: L) => U) { return fn(this.value) }
  andRight<U>(other: IEither<L, U>) { return this }
  flatMapRight<R, U>(fn: (_: R) => IEither<L, U>) { return this }
  orRight<U>(other: IEither<L, U>) { return other }
  orRightElse<U>(fn: (_: L) => IEither<L, U>) { return fn(this.value) }

  mapLeft<U>(fn: (_: L) => U) { return Either.left(fn(this.value)) }
  mapLeftOr<U>(fallback: U, fn: (_: L) => U) { return fn(this.value) }
  mapLeftOrElse<R, U>(getFallback: (_: R) => U, fn: (_: L) => U) { return fn(this.value) }
  expectLeft(msg: string) { return this.value }
  getLeft() { return this.value }
  getLeftOr(fallback: L) { return this.value }
  getLeftOrElse(fn: (_: any) => L) { return this.value }
  andLeft<R,U>(other: IEither<U, R>) { return other }
  flatMapLeft<R, U>(fn: (_: L) => IEither<U, R>) { return fn(this.value) }
  orLeft<R>(other: IEither<L, R>) { return this }
  orLeftElse<R>(fn: (_: any) => IEither<L, R>) { return this }
}

export class Right<R> implements IEither<any, R> {
  constructor(readonly value: R) { }
}

export type Either<L, R> = Left<L> | Right<R>

namespace Either {
  export function left<L>(l: L) { return new Left(l) }
  export function right<R>(r: R) { return new Right(r) }
  export function isLeft<L, R>(e: Either<L, R>): e is Left<L> { return e.isLeft }
  export function isRight<L, R>(e: Either<L, R>): e is Right<R> { return e.isRight }
}