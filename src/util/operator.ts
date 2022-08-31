import { PrimitiveType } from "../basic"

// will ignore new type like Eq/Ord, will work as FILO like gt(a)(b) === b > a
export const eq = <T>(a: T) => (b: T) => a === b
export const ne = <T>(a: T) => (b: T) => a !== b
export const gt = <T>(a: T) => (b: T) => b > a
export const ge = <T>(a: T) => (b: T) => b >= a
export const le = <T>(a: T) => (b: T) => b <= a
export const lt = <T>(a: T) => (b: T) => b < a



export const isType = (expectedType: PrimitiveType) => <T>(t: T) => {
  switch (expectedType) {
    case PrimitiveType.Array:
      return Array.isArray(t)
    case PrimitiveType.Null:
      return t === null
    default:
      return typeof t === expectedType
  }
}