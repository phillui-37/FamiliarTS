import { Display } from "../basic";

type IEither<L, R> = Display & {
  isLeft: boolean
  isRight: boolean
  mapRight<U>(fn: (_: R) => U): IEither<L, U>
  mapRightOr<U>(fallback: U, fn: (_: R) => U): IEither<L, U>
  mapRightOrElse<U>(getFallback: (_: L) => U, fn: (_: R) => U): IEither<L, U>
  mapLeft<U>(fn: (_: L) => U): IEither<U, R>
  mapLeftOr<U>(fallback: U, fn: (_: L) => U): IEither<U, R>
  mapLeftOrElse<U>(getFallback: (_: R) => U, fn: (_: L) => U): IEither<U, R>
  applyLeft<T, U>(mt: IEither<T, R>): IEither<U, R>
  applyRight<T, U>(mt: IEither<L, T>): IEither<L, U>
  expectLeft(msg: string): L | never
  expectRight(msg: string): R | never
  getLeft(): L | never
  getLeftOr(fallback: L): L
  getLeftOrElse(fn: (_: R) => L): L
  getRight(): R | never
  getRightOr(fallback: R): R
  getRightOrElse(fn: (_: L) => R): R
  andRight<U>(other: IEither<L, U>): IEither<L, U>
  andLeft<U>(other: IEither<U, R>): IEither<U, R>
  flatMapRight<U>(fn: (_: R) => IEither<L, U>): IEither<L, U>
  flatMapLeft<U>(fn: (_: L) => IEither<U, R>): IEither<U, R>
  orLeft<U>(other: IEither<L, U>): IEither<L, U>
  orLeftElse<U>(fn: (_: R) => IEither<L, U>): IEither<L, U>
  orRight<U>(other: IEither<U, R>): IEither<U, R>
  orRightElse<U>(fn: (_: L) => IEither<U, R>): IEither<U, R>
}

class Left<L> implements IEither<L, any> {

}

class Right<R> implements IEither<any, R> {

}

// TODO
// type Either<L, R> = Left<L> | Right<R>