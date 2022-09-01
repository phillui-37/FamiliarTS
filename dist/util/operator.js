"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isType = exports.lt = exports.le = exports.ge = exports.gt = exports.ne = exports.eq = void 0;
const basic_1 = require("../basic");
const eq = (a) => (b) => a === b;
exports.eq = eq;
const ne = (a) => (b) => a !== b;
exports.ne = ne;
const gt = (a) => (b) => b > a;
exports.gt = gt;
const ge = (a) => (b) => b >= a;
exports.ge = ge;
const le = (a) => (b) => b <= a;
exports.le = le;
const lt = (a) => (b) => b < a;
exports.lt = lt;
const isType = (expectedType) => (t) => {
    switch (expectedType) {
        case basic_1.PrimitiveType.Array:
            return Array.isArray(t);
        case basic_1.PrimitiveType.Null:
            return t === null;
        default:
            return typeof t === expectedType;
    }
};
exports.isType = isType;
