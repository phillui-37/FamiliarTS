"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constant = exports.flip = void 0;
const flip = (fn) => (u) => (t) => fn(t, u);
exports.flip = flip;
const constant = (value) => (_) => value;
exports.constant = constant;
