"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flip = exports.not = exports.compose = exports.pipe = void 0;
function pipe(fn1, fn2) {
    return t => fn2(fn1(t));
}
exports.pipe = pipe;
function compose(fn1, fn2) {
    return t => fn1(fn2(t));
}
exports.compose = compose;
const not = (fn) => (t) => !fn(t);
exports.not = not;
const flip = (fn) => (u) => (t) => fn(t, u);
exports.flip = flip;
