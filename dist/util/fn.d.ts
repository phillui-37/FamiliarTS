export declare function pipe<T, R, U>(fn1: (t: T) => R, fn2: (r: R) => U): (t: T) => U;
export declare function compose<T, R, U>(fn1: (r: R) => U, fn2: (t: T) => R): (t: T) => U;
