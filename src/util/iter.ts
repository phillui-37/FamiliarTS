/**
 * generate a range like python range
 * 
 * [start,end)
 */
export const range = (start: number, end: number, step: number = 1) => {
    if (end < start) return []
    const diff = Math.ceil((end - start) / step)
    return [...Array(diff).keys()].map((value, idx) => step * idx + start)
}

/**
 * generate string range based on char code
 * 
 * [start,end]
 */
export const strRange = (start: string, end: string, step: number = 1) => {
    if (start.length < 1 || end.length < 1) throw new Error('length of start/end is 0, empty string is not allowed')
    if (start.length > 1 || end.length > 1) console.warn('start/end length > 1, only first char will be used')
    const startNum = start.charCodeAt(0)
    const endNum = end.charCodeAt(0)
    const _rng = range(startNum, endNum + 1, step)
    return String.fromCharCode(..._rng)
}

/**
 * transform an array to generator
 */
export function* arrayToLazy<T>(ls: T[]): Generator<T, T[]|undefined, undefined> {
    if (ls.length === 0) return ls
    let idx = 0
    while (idx !== ls.length) {
        yield ls[idx++]
    }
}

/**
 * generate a range like python range lazily
 * 
 * [start,end)
 * 
 * @throws {StopIteration} when iteration done
 */
export function* rangeLazy(start: number, end: number, step: number = 1): Generator<number, number[]|undefined, undefined> {
    if (end < start) return []
    const diff = Math.ceil((end - start) / step)
    let idx = 0
    while (idx !== diff) {
        yield start + step * idx++
    }
}

/**
 * generate string range based on char code lazily
 * 
 * [start,end]
 * 
 * @throws {StopIteration} when iteration done
 */
export function* strRangeLazy(start: string, end: string, step: number = 1): Generator<string, string|undefined, undefined> {
    if (start.length < 1 || end.length < 1) throw new Error('length of start/end is 0, empty string is not allowed')
    if (start.length > 1 || end.length > 1) console.warn('start/end length > 1, only first char will be used')
    const startNum = start.charCodeAt(0)
    const endNum = end.charCodeAt(0)
    if (endNum <= startNum) return ''
    const _rng = rangeLazy(startNum, endNum + 1, step)
    let _v
    while (!(_v = _rng.next()).done) {
        yield String.fromCharCode(_v.value)
    }
}