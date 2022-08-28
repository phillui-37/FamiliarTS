"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.range = void 0;
const range = (start, end, step = 1) => {
    const diff = Math.ceil((end - start) / step);
    return [...Array(diff).keys()].map((value, idx) => step * idx + start);
};
exports.range = range;
