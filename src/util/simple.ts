export const flip = <T, U, V>(fn: (t: T, u: U) => V) => (u: U) => (t: T) => fn(t, u)
export const constant = <T>(value: T) => (_: any) => value