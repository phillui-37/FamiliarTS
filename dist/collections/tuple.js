"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tuple10 = exports.tuple9 = exports.tuple8 = exports.tuple7 = exports.tuple6 = exports.tuple5 = exports.tuple4 = exports.tuple3 = exports.tuple2 = exports.Tuple10 = exports.Tuple9 = exports.Tuple8 = exports.Tuple7 = exports.Tuple6 = exports.Tuple5 = exports.Tuple4 = exports.Tuple3 = exports.Tuple2 = void 0;
const lib_1 = require("../basic/lib");
const lib_2 = require("../util/lib");
require("../stdExt/array");
const eqChecker = (ls1, ls2) => {
    return ls1.zip(ls2)
        .map(t2 => {
        if ((0, lib_1.isEq)(t2._1))
            return t2._1.eq(t2._2);
        else
            return t2._1 === t2._2;
    })
        .all((0, lib_2.eq)(true));
};
const orderChecker = (obj1, obj2) => {
    if ((0, lib_1.isOrd)(obj2) && (0, lib_1.isOrd)(obj1)) {
        return obj2.compare(obj1);
    }
    else {
        return obj1 < obj2 ? lib_1.Ordering.LT : obj1 > obj2 ? lib_1.Ordering.GT : lib_1.Ordering.EQ;
    }
};
class Tuple2 {
    constructor(_1, _2) {
        this._1 = _1;
        this._2 = _2;
        this.eq = (other) => {
            return eqChecker(this.toList(), other.toList());
        };
        this.ne = (other) => !this.eq(other);
        this.compare = (other) => {
            const order = orderChecker(this._1, other._1);
            if (order !== lib_1.Ordering.EQ)
                return order;
            return orderChecker(this._2, other._2);
        };
        this.lt = (other) => {
            return this.compare(other) === lib_1.Ordering.LT;
        };
        this.le = (other) => {
            return this.compare(other) in [lib_1.Ordering.EQ, lib_1.Ordering.LT];
        };
        this.ge = (other) => {
            return this.compare(other) in [lib_1.Ordering.EQ, lib_1.Ordering.GT];
        };
        this.gt = (other) => {
            return this.compare(other) === lib_1.Ordering.GT;
        };
        this.max = (other) => {
            return this.ge(other) ? this : other;
        };
        this.min = (other) => {
            return this.le(other) ? this : other;
        };
        this.toString = () => `Tuple2(${this._1}, ${this._2})`;
    }
    toList() { return [this._1, this._2]; }
}
exports.Tuple2 = Tuple2;
class Tuple3 {
    constructor(_1, _2, _3) {
        this._1 = _1;
        this._2 = _2;
        this._3 = _3;
        this.toString = () => `Tuple3(${this._1}, ${this._2}, ${this._3})`;
    }
}
exports.Tuple3 = Tuple3;
class Tuple4 {
    constructor(_1, _2, _3, _4) {
        this._1 = _1;
        this._2 = _2;
        this._3 = _3;
        this._4 = _4;
        this.toString = () => `Tuple4(${this._1}, ${this._2}, ${this._3}, ${this._4})`;
    }
}
exports.Tuple4 = Tuple4;
class Tuple5 {
    constructor(_1, _2, _3, _4, _5) {
        this._1 = _1;
        this._2 = _2;
        this._3 = _3;
        this._4 = _4;
        this._5 = _5;
        this.toString = () => `Tuple5(${this._1}, ${this._2}, ${this._3}, ${this._4}, ${this._5})`;
    }
}
exports.Tuple5 = Tuple5;
class Tuple6 {
    constructor(_1, _2, _3, _4, _5, _6) {
        this._1 = _1;
        this._2 = _2;
        this._3 = _3;
        this._4 = _4;
        this._5 = _5;
        this._6 = _6;
        this.toString = () => `Tuple6(${this._1}, ${this._2}, ${this._3}, ${this._4}, ${this._5}, ${this._6})`;
    }
}
exports.Tuple6 = Tuple6;
class Tuple7 {
    constructor(_1, _2, _3, _4, _5, _6, _7) {
        this._1 = _1;
        this._2 = _2;
        this._3 = _3;
        this._4 = _4;
        this._5 = _5;
        this._6 = _6;
        this._7 = _7;
        this.toString = () => `Tuple7(${this._1}, ${this._2}, ${this._3}, ${this._4}, ${this._5}, ${this._6}, ${this._7})`;
    }
}
exports.Tuple7 = Tuple7;
class Tuple8 {
    constructor(_1, _2, _3, _4, _5, _6, _7, _8) {
        this._1 = _1;
        this._2 = _2;
        this._3 = _3;
        this._4 = _4;
        this._5 = _5;
        this._6 = _6;
        this._7 = _7;
        this._8 = _8;
        this.toString = () => `Tuple8(${this._1}, ${this._2}, ${this._3}, ${this._4}, ${this._5}, ${this._6}, ${this._7}, ${this._8})`;
    }
}
exports.Tuple8 = Tuple8;
class Tuple9 {
    constructor(_1, _2, _3, _4, _5, _6, _7, _8, _9) {
        this._1 = _1;
        this._2 = _2;
        this._3 = _3;
        this._4 = _4;
        this._5 = _5;
        this._6 = _6;
        this._7 = _7;
        this._8 = _8;
        this._9 = _9;
        this.toString = () => `Tuple9(${this._1}, ${this._2}, ${this._3}, ${this._4}, ${this._5}, ${this._6}, ${this._7}, ${this._8}, ${this._9})`;
    }
}
exports.Tuple9 = Tuple9;
class Tuple10 {
    constructor(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10) {
        this._1 = _1;
        this._2 = _2;
        this._3 = _3;
        this._4 = _4;
        this._5 = _5;
        this._6 = _6;
        this._7 = _7;
        this._8 = _8;
        this._9 = _9;
        this._10 = _10;
        this.toString = () => `Tuple10(${this._1}, ${this._2}, ${this._3}, ${this._4}, ${this._5}, ${this._6}, ${this._7}, ${this._8}, ${this._9}, ${this._10})`;
    }
}
exports.Tuple10 = Tuple10;
const tuple2 = (t1, t2) => new Tuple2(t1, t2);
exports.tuple2 = tuple2;
const tuple3 = (t1, t2, t3) => new Tuple3(t1, t2, t3);
exports.tuple3 = tuple3;
const tuple4 = (t1, t2, t3, t4) => new Tuple4(t1, t2, t3, t4);
exports.tuple4 = tuple4;
const tuple5 = (t1, t2, t3, t4, t5) => new Tuple5(t1, t2, t3, t4, t5);
exports.tuple5 = tuple5;
const tuple6 = (t1, t2, t3, t4, t5, t6) => new Tuple6(t1, t2, t3, t4, t5, t6);
exports.tuple6 = tuple6;
const tuple7 = (t1, t2, t3, t4, t5, t6, t7) => new Tuple7(t1, t2, t3, t4, t5, t6, t7);
exports.tuple7 = tuple7;
const tuple8 = (t1, t2, t3, t4, t5, t6, t7, t8) => new Tuple8(t1, t2, t3, t4, t5, t6, t7, t8);
exports.tuple8 = tuple8;
const tuple9 = (t1, t2, t3, t4, t5, t6, t7, t8, t9) => new Tuple9(t1, t2, t3, t4, t5, t6, t7, t8, t9);
exports.tuple9 = tuple9;
const tuple10 = (t1, t2, t3, t4, t5, t6, t7, t8, t9, t10) => new Tuple10(t1, t2, t3, t4, t5, t6, t7, t8, t9, t10);
exports.tuple10 = tuple10;
