import { Eq, Ord } from "./typing";
import '../stdExt/array'

const _fnTypeChecker = (obj: any, paramLength: number = 1) => typeof obj === 'function' && obj.length === paramLength

export function isEq<T>(obj: any): obj is Eq<T> {
    if (obj === undefined || obj === null) return false
    return _fnTypeChecker(obj.eq) && _fnTypeChecker(obj.ne)
}

export function isOrd<T>(obj: any): obj is Ord<T> {
    if (obj === undefined || obj === null) return false
    return [
        obj.compare,
        obj.lt,
        obj.le,
        obj.ge,
        obj.gt,
        obj.max,
        obj.min
    ].all(_fnTypeChecker)
}