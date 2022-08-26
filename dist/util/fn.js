"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compose = exports.pipe = void 0;
function pipe(fn1, fn2) {
    return t => fn2(fn1(t));
}
exports.pipe = pipe;
function compose(fn1, fn2) {
    return t => fn1(fn2(t));
}
exports.compose = compose;
