export function pipe<T, R, U>(fn1: (t: T) => R, fn2: (r: R) => U): (t: T) => U {
  return t => fn2(fn1(t))
}

export function compose<T, R, U>(fn1: (r: R) => U, fn2: (t: T) => R): (t: T) => U {
  return t => fn1(fn2(t))
}