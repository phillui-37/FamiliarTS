"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strRangeLazy = exports.rangeLazy = exports.arrayToLazy = exports.strRange = exports.range = void 0;
const range = (start, end, step = 1) => {
    if (end < start)
        return [];
    const diff = Math.ceil((end - start) / step);
    return [...Array(diff).keys()].map((value, idx) => step * idx + start);
};
exports.range = range;
const strRange = (start, end, step = 1) => {
    if (start.length < 1 || end.length < 1)
        throw new Error('length of start/end is 0, empty string is not allowed');
    if (start.length > 1 || end.length > 1)
        console.warn('start/end length > 1, only first char will be used');
    const startNum = start.charCodeAt(0);
    const endNum = end.charCodeAt(0);
    const _rng = (0, exports.range)(startNum, endNum + 1, step);
    return String.fromCharCode(..._rng);
};
exports.strRange = strRange;
function* arrayToLazy(ls) {
    if (ls.length === 0)
        return ls;
    let idx = 0;
    while (idx !== ls.length) {
        yield ls[idx++];
    }
}
exports.arrayToLazy = arrayToLazy;
function* rangeLazy(start, end, step = 1) {
    if (end < start)
        return [];
    const diff = Math.ceil((end - start) / step);
    let idx = 0;
    while (idx !== diff) {
        yield start + step * idx++;
    }
}
exports.rangeLazy = rangeLazy;
function* strRangeLazy(start, end, step = 1) {
    if (start.length < 1 || end.length < 1)
        throw new Error('length of start/end is 0, empty string is not allowed');
    if (start.length > 1 || end.length > 1)
        console.warn('start/end length > 1, only first char will be used');
    const startNum = start.charCodeAt(0);
    const endNum = end.charCodeAt(0);
    if (endNum <= startNum)
        return '';
    const _rng = rangeLazy(startNum, endNum + 1, step);
    let _v;
    while (!(_v = _rng.next()).done) {
        yield String.fromCharCode(_v.value);
    }
}
exports.strRangeLazy = strRangeLazy;
