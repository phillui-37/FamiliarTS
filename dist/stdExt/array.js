"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = require("../collections/lib");
const lib_2 = require("../util/lib");
Array.prototype.all = function (predicate) {
    return this.filter(predicate).length === this.length;
};
Array.prototype.any = function (predicate) {
    return this.filter(predicate).length > 0;
};
Array.prototype.zip = function (other) {
    const length = Math.min(other.length, this.length);
    return (0, lib_2.range)(0, length).map(idx => (0, lib_1.tuple2)(this[idx], other[idx]));
};
