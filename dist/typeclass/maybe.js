"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Maybe = exports.just = exports.nothing = exports.Nothing = exports.Just = void 0;
const tuple_1 = require("../collections/tuple");
class Just {
    constructor(t) {
        this.t = t;
        this.isJust = true;
        this.isNothing = false;
        this.get = () => this.t;
        this.toString = () => `Just(${this.t})`;
    }
    map(fn) {
        return (0, exports.just)(fn(this.t));
    }
    replace(u) {
        return (0, exports.just)(u);
    }
    apply(mr) {
        if (typeof this.t !== 'function')
            throw new TypeError("apply not applicable");
        return (0, exports.just)(this.t(mr.get()));
    }
    discardSelf(other) {
        return other;
    }
    discardOther(other) {
        return this;
    }
    or(other) {
        return this;
    }
    bind(fn) {
        return fn(this.t);
    }
    and(other) {
        return other;
    }
    xor(other) {
        /* @ts-ignore */
        if (other.isJust)
            return exports.nothing;
        else
            return other;
    }
    orElse(getOther) {
        return this;
    }
    filter(predicate) {
        /* @ts-ignore */
        return predicate(this.t) ? this : exports.nothing;
    }
    zip(other) {
        /* @ts-ignore */
        if (other.isNothing)
            return exports.nothing;
        return (0, exports.just)((0, tuple_1.tuple2)(this.t, other.get()));
    }
    getOr(fallback) {
        return this.t;
    }
    getOrElse(getFallback) {
        return this.t;
    }
}
exports.Just = Just;
class Nothing {
    constructor() {
        this.isJust = false;
        this.isNothing = true;
        this.get = () => { throw new TypeError("Cannot get value from Nothing"); };
        this.toString = () => "Nothing";
    }
    map(fn) {
        return this;
    }
    replace(u) {
        return this;
    }
    apply(mr) {
        return this;
    }
    discardSelf(other) {
        return this;
    }
    discardOther(other) {
        return this;
    }
    or(other) {
        return other;
    }
    bind(fn) {
        return this;
    }
    and(other) {
        return this;
    }
    xor(other) {
        return other;
    }
    orElse(getOther) {
        return getOther();
    }
    filter(predicate) {
        return this;
    }
    zip(other) {
        return this;
    }
    getOr(fallback) {
        return fallback;
    }
    getOrElse(getFallback) {
        return getFallback();
    }
}
exports.Nothing = Nothing;
Nothing.instance = new Nothing();
exports.nothing = Nothing.instance;
const just = (t) => Maybe.of(t);
exports.just = just;
var Maybe;
(function (Maybe) {
    function isNothing(m) { return m.isNothing; }
    Maybe.isNothing = isNothing;
    function isJust(m) { return m.isJust; }
    Maybe.isJust = isJust;
    function of(t) {
        if (t === undefined || t === null)
            return exports.nothing;
        else
            return new Just(t);
    }
    Maybe.of = of;
    function flatten(m) {
        /*  */
        if (isNothing(m))
            return m;
        else
            return m.get();
    }
    Maybe.flatten = flatten;
})(Maybe = exports.Maybe || (exports.Maybe = {}));
