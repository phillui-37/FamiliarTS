"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isJust = exports.isNothing = exports.Nothing = exports.Just = void 0;
class Just {
    constructor() {
        this.isJust = () => true;
        this.isNone = () => false;
    }
}
exports.Just = Just;
class Nothing {
    constructor() {
        this.isJust = () => false;
        this.isNone = () => true;
    }
}
exports.Nothing = Nothing;
function isNothing(m) { return m.isNone(); }
exports.isNothing = isNothing;
function isJust(m) { return m.isJust(); }
exports.isJust = isJust;
