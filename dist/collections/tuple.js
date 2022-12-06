"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tuple10 = exports.tuple9 = exports.tuple8 = exports.tuple7 = exports.tuple6 = exports.tuple5 = exports.tuple4 = exports.tuple3 = exports.tuple2 = exports.Tuple10 = exports.Tuple9 = exports.Tuple8 = exports.Tuple7 = exports.Tuple6 = exports.Tuple5 = exports.Tuple4 = exports.Tuple3 = exports.Tuple2 = void 0;
const basic_1 = require("../basic");
const util_1 = require("../util");
const ramda_1 = require("ramda");
const eqChecker = (item1, item2) => {
    return item1 === item2;
};
const listEqChecker = (() => {
    const _fn = (0, ramda_1.all)((0, util_1.eq)(true));
    return (ls) => _fn(ls);
})();
class Tuple2 {
    constructor(_1, _2) {
        this._1 = _1;
        this._2 = _2;
        this.eq = (other) => eqChecker(this._1, other._1) && eqChecker(this._2, other._2);
        this.ne = (other) => !this.eq(other);
        this.isDisplay = true;
        this.display = () => `Tuple2(${basic_1.Display.display(this._1)}, ${basic_1.Display.display(this._2)})`;
    }
}
exports.Tuple2 = Tuple2;
class Tuple3 {
    constructor(_1, _2, _3) {
        this._1 = _1;
        this._2 = _2;
        this._3 = _3;
        this.eq = (other) => eqChecker(this._1, other._1) && eqChecker(this._2, other._2) && eqChecker(this._3, other._3);
        this.ne = (other) => !this.eq(other);
        this.isDisplay = true;
        this.display = () => `Tuple3(${basic_1.Display.display(this._1)}, ${basic_1.Display.display(this._2)}, ${basic_1.Display.display(this._3)})`;
    }
}
exports.Tuple3 = Tuple3;
class Tuple4 {
    constructor(_1, _2, _3, _4) {
        this._1 = _1;
        this._2 = _2;
        this._3 = _3;
        this._4 = _4;
        this.eq = (other) => listEqChecker([eqChecker(this._1, other._1), eqChecker(this._2, other._2), eqChecker(this._3, other._3), eqChecker(this._4, other._4)]);
        this.ne = (other) => !this.eq(other);
        this.isDisplay = true;
        this.display = () => `Tuple4(${basic_1.Display.display(this._1)}, ${basic_1.Display.display(this._2)}, ${basic_1.Display.display(this._3)}, ${basic_1.Display.display(this._4)})`;
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
        this.eq = (other) => listEqChecker([eqChecker(this._1, other._1), eqChecker(this._2, other._2), eqChecker(this._3, other._3), eqChecker(this._4, other._4), eqChecker(this._5, other._5)]);
        this.ne = (other) => !this.eq(other);
        this.isDisplay = true;
        this.display = () => `Tuple5(${basic_1.Display.display(this._1)}, ${basic_1.Display.display(this._2)}, ${basic_1.Display.display(this._3)}, ${basic_1.Display.display(this._4)}, ${basic_1.Display.display(this._5)})`;
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
        this.eq = (other) => listEqChecker([eqChecker(this._1, other._1), eqChecker(this._2, other._2), eqChecker(this._3, other._3), eqChecker(this._4, other._4), eqChecker(this._5, other._5), eqChecker(this._6, other._6)]);
        this.ne = (other) => !this.eq(other);
        this.isDisplay = true;
        this.display = () => `Tuple6(${basic_1.Display.display(this._1)}, ${basic_1.Display.display(this._2)}, ${basic_1.Display.display(this._3)}, ${basic_1.Display.display(this._4)}, ${basic_1.Display.display(this._5)}, ${basic_1.Display.display(this._6)})`;
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
        this.eq = (other) => listEqChecker([eqChecker(this._1, other._1), eqChecker(this._2, other._2), eqChecker(this._3, other._3), eqChecker(this._4, other._4), eqChecker(this._5, other._5), eqChecker(this._6, other._6), eqChecker(this._7, other._7)]);
        this.ne = (other) => !this.eq(other);
        this.isDisplay = true;
        this.display = () => `Tuple7(${basic_1.Display.display(this._1)}, ${basic_1.Display.display(this._2)}, ${basic_1.Display.display(this._3)}, ${basic_1.Display.display(this._4)}, ${basic_1.Display.display(this._5)}, ${basic_1.Display.display(this._6)}, ${basic_1.Display.display(this._7)})`;
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
        this.eq = (other) => listEqChecker([
            eqChecker(this._1, other._1),
            eqChecker(this._2, other._2),
            eqChecker(this._3, other._3),
            eqChecker(this._4, other._4),
            eqChecker(this._5, other._5),
            eqChecker(this._6, other._6),
            eqChecker(this._7, other._7),
            eqChecker(this._8, other._8),
        ]);
        this.ne = (other) => !this.eq(other);
        this.isDisplay = true;
        this.display = () => `Tuple8(${basic_1.Display.display(this._1)}, ${basic_1.Display.display(this._2)}, ${basic_1.Display.display(this._3)}, ${basic_1.Display.display(this._4)}, ${basic_1.Display.display(this._5)}, ${basic_1.Display.display(this._6)}, ${basic_1.Display.display(this._7)}, ${basic_1.Display.display(this._8)})`;
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
        this.eq = (other) => listEqChecker([
            eqChecker(this._1, other._1),
            eqChecker(this._2, other._2),
            eqChecker(this._3, other._3),
            eqChecker(this._4, other._4),
            eqChecker(this._5, other._5),
            eqChecker(this._6, other._6),
            eqChecker(this._7, other._7),
            eqChecker(this._8, other._8),
            eqChecker(this._9, other._9)
        ]);
        this.ne = (other) => !this.eq(other);
        this.isDisplay = true;
        this.display = () => `Tuple9(${basic_1.Display.display(this._1)}, ${basic_1.Display.display(this._2)}, ${basic_1.Display.display(this._3)}, ${basic_1.Display.display(this._4)}, ${basic_1.Display.display(this._5)}, ${basic_1.Display.display(this._6)}, ${basic_1.Display.display(this._7)}, ${basic_1.Display.display(this._8)}, ${basic_1.Display.display(this._9)})`;
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
        this.eq = (other) => listEqChecker([
            eqChecker(this._1, other._1),
            eqChecker(this._2, other._2),
            eqChecker(this._3, other._3),
            eqChecker(this._4, other._4),
            eqChecker(this._5, other._5),
            eqChecker(this._6, other._6),
            eqChecker(this._7, other._7),
            eqChecker(this._8, other._8),
            eqChecker(this._9, other._9),
            eqChecker(this._10, other._10),
        ]);
        this.ne = (other) => !this.eq(other);
        this.isDisplay = true;
        this.display = () => `Tuple10(${basic_1.Display.display(this._1)}, ${basic_1.Display.display(this._2)}, ${basic_1.Display.display(this._3)}, ${basic_1.Display.display(this._4)}, ${basic_1.Display.display(this._5)}, ${basic_1.Display.display(this._6)}, ${basic_1.Display.display(this._7)}, ${basic_1.Display.display(this._8)}, ${basic_1.Display.display(this._9)}, ${basic_1.Display.display(this._10)})`;
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
