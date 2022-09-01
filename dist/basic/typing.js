"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrimitiveType = exports.Ordering = void 0;
var Ordering;
(function (Ordering) {
    Ordering[Ordering["LT"] = -1] = "LT";
    Ordering[Ordering["EQ"] = 0] = "EQ";
    Ordering[Ordering["GT"] = 1] = "GT";
})(Ordering = exports.Ordering || (exports.Ordering = {}));
var PrimitiveType;
(function (PrimitiveType) {
    PrimitiveType["Boolean"] = "boolean";
    PrimitiveType["Function"] = "function";
    PrimitiveType["Number"] = "number";
    PrimitiveType["String"] = "string";
    PrimitiveType["BigInt"] = "bigint";
    PrimitiveType["Object"] = "object";
    PrimitiveType["Symbol"] = "symbol";
    PrimitiveType["Undefined"] = "undefined";
    PrimitiveType["Null"] = "null";
    PrimitiveType["Array"] = "array";
})(PrimitiveType = exports.PrimitiveType || (exports.PrimitiveType = {}));
