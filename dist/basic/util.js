"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOrd = exports.isEq = void 0;
require("../stdExt/array");
const _fnTypeChecker = (obj, paramLength = 1) => typeof obj === 'function' && obj.length === paramLength;
function isEq(obj) {
    if (obj === undefined || obj === null)
        return false;
    return _fnTypeChecker(obj.eq) && _fnTypeChecker(obj.ne);
}
exports.isEq = isEq;
function isOrd(obj) {
    if (obj === undefined || obj === null)
        return false;
    return [
        obj.compare,
        obj.lt,
        obj.le,
        obj.ge,
        obj.gt,
        obj.max,
        obj.min
    ].all(_fnTypeChecker);
}
exports.isOrd = isOrd;
