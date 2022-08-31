export function pipe<T, R, U>(fn1: (t: T) => R, fn2: (r: R) => U): (t: T) => U {
  return t => fn2(fn1(t))
}

export function compose<T, R, U>(fn1: (r: R) => U, fn2: (t: T) => R): (t: T) => U {
  return t => fn1(fn2(t))
}

export const not = <T>(fn: (t: T) => boolean) => (t: T) => !fn(t)
export const flip = <T, U, V>(fn: (t: T, u: U) => V) => (u: U) => (t: T) => fn(t, u)