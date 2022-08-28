import { tuple2, Tuple2 } from "../collections/lib"
import { range } from "../util/lib"

declare global {
    interface Array<T> {
        all(predicate: (t: T) => boolean): boolean
        any(predicate: (t: T) => boolean): boolean
        zip<U>(other: Array<U>): Array<Tuple2<T,U>>
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

export {}