"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexOutOfBoundError = void 0;
class IndexOutOfBoundError extends Error {
    static of(msg) { return new IndexOutOfBoundError(msg); }
}
exports.IndexOutOfBoundError = IndexOutOfBoundError;
