"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const collections_1 = require("../collections");
const util_1 = require("../util");
Array.prototype.all = function (predicate) {
    return this.filter(predicate).length === this.length;
};
Array.prototype.any = function (predicate) {
    return this.filter(predicate).length > 0;
};
Array.prototype.zip = function (other) {
    const length = Math.min(other.length, this.length);
    return (0, util_1.range)(0, length).map(idx => (0, collections_1.tuple2)(this[idx], other[idx]));
};
