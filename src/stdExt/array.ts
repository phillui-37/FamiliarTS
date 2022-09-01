import { tuple2, Tuple2 } from "../collections"
import { range } from "../util"

declare global {
    interface Array<T> {
        all(predicate: (t: T) => boolean): boolean
        any(predicate: (t: T) => boolean): boolean
        zip<U>(other: Array<U>): Array<Tuple2<T,U>>
        first(predicate: (t: T) => boolean): T | undefined
        last(predicate: (t: T) => boolean): T | undefined
    }
}

Array.prototype.all = function (predicate) {
    return this.filter(predicate).length === this.length
}

Array.prototype.any = function (predicate) {
    return this.filter(predicate).length > 0
}

Array.prototype.zip = function (other) {
    const length = Math.min(other.length, this.length)
    return range(0, length).map(idx => tuple2(this[idx], other[idx]))
}

Array.prototype.first = function (predicate) {
    if (this.length === 0) return undefined
    return this.filter(predicate)[0]
}

Array.prototype.last = function (predicate) {
    if (this.length === 0) return undefined
    const ret = this.filter(predicate)
    return ret[ret.length - 1]
}

export {}