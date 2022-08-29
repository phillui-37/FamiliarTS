"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Maybe = exports.just = exports.nothing = exports.Nothing = exports.Just = void 0;
const tuple_1 = require("../collections/tuple");
class Just {
    constructor(t) {
        this.t = t;
        this.map = (fn) => (0, exports.just)(fn(this.t));
        this.replace = (u) => (0, exports.just)(u);
        this.apply = (mr) => {
            if (typeof this.t !== 'function')
                throw new TypeError("apply not applicable");
            return (0, exports.just)(this.t(mr.get()));
        };
        this.discardSelf = (other) => other;
        this.discardOther = (other) => this;
        this.or = (other) => this;
        this.bind = (fn) => fn(this.t);
        this.and = (other) => other;
        this.xor = (other) => other.isJust ? exports.nothing : other;
        this.orElse = (getOther) => this;
        this.filter = (predicate) => predicate(this.t) ? this : exports.nothing;
        this.zip = (other) => other.isNothing ? exports.nothing : (0, exports.just)((0, tuple_1.tuple2)(this.t, other.get()));
        this.isJust = true;
        this.isNothing = false;
        this.get = () => this.t;
        this.getOr = (fallback) => this.t;
        this.getOrElse = (getFallback) => this.t;
        this.toString = () => `Just(${this.t})`;
    }
}
exports.Just = Just;
class Nothing {
    constructor() {
        this.map = (fn) => this;
        this.replace = (u) => this;
        this.apply = (mr) => this;
        this.discardSelf = (other) => this;
        this.discardOther = (other) => this;
        this.or = (other) => other;
        this.bind = (fn) => this;
        this.and = (other) => this;
        this.xor = (other) => other;
        this.orElse = (getOther) => getOther();
        this.filter = (predicate) => this;
        this.zip = (other) => this;
        this.isJust = false;
        this.isNothing = true;
        this.get = () => { throw new TypeError("Cannot get value from Nothing"); };
        this.getOr = (fallback) => fallback;
        this.getOrElse = (getFallback) => getFallback();
        this.toString = () => "Nothing";
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
        if (isNothing(m))
            return m;
        else
            return m.get();
    }
    Maybe.flatten = flatten;
})(Maybe = exports.Maybe || (exports.Maybe = {}));
