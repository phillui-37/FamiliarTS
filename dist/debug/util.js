"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trace = void 0;
const trace = (logging = console.log) => (value) => {
    logging(value);
    return value;
};
exports.trace = trace;
