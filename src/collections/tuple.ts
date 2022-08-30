import { isEq, isOrd, Ordering, Ord, Display } from "../basic"
import { eq } from "../util"
import '../stdExt/array'

const eqChecker = <T>(item1: T, item2: T) => {
    return isEq(item1) && isEq(item2) ? item1.eq(item2) : item1 === item2
}

const orderChecker = <T>(obj1: T, obj2: T) => {
    if (isOrd(obj2) && isOrd(obj1)) {
        return obj2.compare(obj1)
    } else {
        return obj1 < obj2 ? Ordering.LT : obj1 > obj2 ? Ordering.GT : Ordering.EQ
    }
}

export class Tuple2<T1, T2> implements Ord<Tuple2<T1, T2>>, Display {
    constructor(readonly _1: T1, readonly _2: T2) { }
    eq = (other: Tuple2<T1, T2>) => eqChecker(this._1, other._1) && eqChecker(this._2, other._2)
    ne = (other: Tuple2<T1, T2>) => !this.eq(other)
    compare = (other: Tuple2<T1, T2>) => {
        const order = orderChecker(this._1, other._1)
        if (order !== Ordering.EQ) return order
        return orderChecker(this._2, other._2)
    }
    lt = (other: Tuple2<T1, T2>) => this.compare(other) === Ordering.LT
    le = (other: Tuple2<T1, T2>) => [Ordering.EQ, Ordering.LT].includes(this.compare(other))
    ge = (other: Tuple2<T1, T2>) => [Ordering.EQ, Ordering.GT].includes(this.compare(other))
    gt = (other: Tuple2<T1, T2>) => this.compare(other) === Ordering.GT
    max = (other: Tuple2<T1, T2>) => this.ge(other) ? this : other
    min = (other: Tuple2<T1, T2>) => this.le(other) ? this : other
    isDisplay = true
    display = () => `Tuple2(${Display.display(this._1)}, ${Display.display(this._2)})`
}

export class Tuple3<T1, T2, T3> implements Ord<Tuple3<T1, T2, T3>>, Display {
    constructor(readonly _1: T1, readonly _2: T2, readonly _3: T3) { }
    eq = (other: Tuple3<T1, T2, T3>) => eqChecker(this._1, other._1) && eqChecker(this._2, other._2) && eqChecker(this._3, other._3)
    ne = (other: Tuple3<T1, T2, T3>) => !this.eq(other)
    compare = (other: Tuple3<T1, T2, T3>) => {
        return [
            orderChecker(this._1, other._1),
            orderChecker(this._2, other._2),
            orderChecker(this._3, other._3)
        ].reduce((acc, item) => acc === Ordering.EQ ? acc : item)
    }
    lt = (other: Tuple3<T1, T2, T3>) => this.compare(other) === Ordering.LT
    le = (other: Tuple3<T1, T2, T3>) => [Ordering.EQ, Ordering.LT].includes(this.compare(other))
    ge = (other: Tuple3<T1, T2, T3>) => [Ordering.EQ, Ordering.GT].includes(this.compare(other))
    gt = (other: Tuple3<T1, T2, T3>) => this.compare(other) === Ordering.GT
    max = (other: Tuple3<T1, T2, T3>) => this.ge(other) ? this : other
    min = (other: Tuple3<T1, T2, T3>) => this.le(other) ? this : other
    isDisplay = true
    display = () => `Tuple3(${Display.display(this._1)}, ${Display.display(this._2)}, ${Display.display(this._3)})`
}

export class Tuple4<T1, T2, T3, T4> implements Ord<Tuple4<T1, T2, T3, T4>>, Display {
    constructor(readonly _1: T1, readonly _2: T2, readonly _3: T3, readonly _4: T4) { }
    eq = (other: Tuple4<T1, T2, T3, T4>) => [eqChecker(this._1, other._1), eqChecker(this._2, other._2), eqChecker(this._3, other._3), eqChecker(this._4, other._4)].all(eq(true))
    ne = (other: Tuple4<T1, T2, T3, T4>) => !this.eq(other)
    compare = (other: Tuple4<T1, T2, T3, T4>) => {
        return [
            orderChecker(this._1, other._1),
            orderChecker(this._2, other._2),
            orderChecker(this._3, other._3),
            orderChecker(this._4, other._4),
        ].reduce((acc, item) => acc === Ordering.EQ ? acc : item)
    }
    lt = (other: Tuple4<T1, T2, T3, T4>) => this.compare(other) === Ordering.LT
    le = (other: Tuple4<T1, T2, T3, T4>) => [Ordering.EQ, Ordering.LT].includes(this.compare(other))
    ge = (other: Tuple4<T1, T2, T3, T4>) => [Ordering.EQ, Ordering.GT].includes(this.compare(other))
    gt = (other: Tuple4<T1, T2, T3, T4>) => this.compare(other) === Ordering.GT
    max = (other: Tuple4<T1, T2, T3, T4>) => this.ge(other) ? this : other
    min = (other: Tuple4<T1, T2, T3, T4>) => this.le(other) ? this : other
    isDisplay = true
    display = () => `Tuple4(${Display.display(this._1)}, ${Display.display(this._2)}, ${Display.display(this._3)}, ${Display.display(this._4)})`
}

export class Tuple5<T1, T2, T3, T4, T5> implements Ord<Tuple5<T1, T2, T3, T4, T5>>, Display {
    constructor(readonly _1: T1, readonly _2: T2, readonly _3: T3, readonly _4: T4, readonly _5: T5) { }
    eq = (other: Tuple5<T1, T2, T3, T4, T5>) => [eqChecker(this._1, other._1), eqChecker(this._2, other._2), eqChecker(this._3, other._3), eqChecker(this._4, other._4), eqChecker(this._5, other._5)].all(eq(true))
    ne = (other: Tuple5<T1, T2, T3, T4, T5>) => !this.eq(other)
    compare = (other: Tuple5<T1, T2, T3, T4, T5>) => {
        return [
            orderChecker(this._1, other._1),
            orderChecker(this._2, other._2),
            orderChecker(this._3, other._3),
            orderChecker(this._4, other._4),
            orderChecker(this._5, other._5),
        ].reduce((acc, item) => acc === Ordering.EQ ? acc : item)
    }
    lt = (other: Tuple5<T1, T2, T3, T4, T5>) => this.compare(other) === Ordering.LT
    le = (other: Tuple5<T1, T2, T3, T4, T5>) => [Ordering.EQ, Ordering.LT].includes(this.compare(other))
    ge = (other: Tuple5<T1, T2, T3, T4, T5>) => [Ordering.EQ, Ordering.GT].includes(this.compare(other))
    gt = (other: Tuple5<T1, T2, T3, T4, T5>) => this.compare(other) === Ordering.GT
    max = (other: Tuple5<T1, T2, T3, T4, T5>) => this.ge(other) ? this : other
    min = (other: Tuple5<T1, T2, T3, T4, T5>) => this.le(other) ? this : other
    isDisplay = true
    display = () => `Tuple5(${Display.display(this._1)}, ${Display.display(this._2)}, ${Display.display(this._3)}, ${Display.display(this._4)}, ${Display.display(this._5)})`
}

export class Tuple6<T1, T2, T3, T4, T5, T6> implements Ord<Tuple6<T1, T2, T3, T4, T5, T6>>, Display {
    constructor(readonly _1: T1, readonly _2: T2, readonly _3: T3, readonly _4: T4, readonly _5: T5, readonly _6: T6) { }
    eq = (other: Tuple6<T1, T2, T3, T4, T5, T6>) => [eqChecker(this._1, other._1), eqChecker(this._2, other._2), eqChecker(this._3, other._3), eqChecker(this._4, other._4), eqChecker(this._5, other._5), eqChecker(this._6, other._6)].all(eq(true))
    ne = (other: Tuple6<T1, T2, T3, T4, T5, T6>) => !this.eq(other)
    compare = (other: Tuple6<T1, T2, T3, T4, T5, T6>) => {
        return [
            orderChecker(this._1, other._1),
            orderChecker(this._2, other._2),
            orderChecker(this._3, other._3),
            orderChecker(this._4, other._4),
            orderChecker(this._5, other._5),
            orderChecker(this._6, other._6),
        ].reduce((acc, item) => acc === Ordering.EQ ? acc : item)
    }
    lt = (other: Tuple6<T1, T2, T3, T4, T5, T6>) => this.compare(other) === Ordering.LT
    le = (other: Tuple6<T1, T2, T3, T4, T5, T6>) => [Ordering.EQ, Ordering.LT].includes(this.compare(other))
    ge = (other: Tuple6<T1, T2, T3, T4, T5, T6>) => [Ordering.EQ, Ordering.GT].includes(this.compare(other))
    gt = (other: Tuple6<T1, T2, T3, T4, T5, T6>) => this.compare(other) === Ordering.GT
    max = (other: Tuple6<T1, T2, T3, T4, T5, T6>) => this.ge(other) ? this : other
    min = (other: Tuple6<T1, T2, T3, T4, T5, T6>) => this.le(other) ? this : other
    isDisplay = true
    display = () => `Tuple6(${Display.display(this._1)}, ${Display.display(this._2)}, ${Display.display(this._3)}, ${Display.display(this._4)}, ${Display.display(this._5)}, ${Display.display(this._6)})`
}

export class Tuple7<T1, T2, T3, T4, T5, T6, T7> implements Ord<Tuple7<T1, T2, T3, T4, T5, T6, T7>>, Display {
    constructor(readonly _1: T1, readonly _2: T2, readonly _3: T3, readonly _4: T4, readonly _5: T5, readonly _6: T6, readonly _7: T7) { }
    eq = (other: Tuple7<T1, T2, T3, T4, T5, T6, T7>) => [eqChecker(this._1, other._1), eqChecker(this._2, other._2), eqChecker(this._3, other._3), eqChecker(this._4, other._4), eqChecker(this._5, other._5), eqChecker(this._6, other._6), eqChecker(this._7, other._7)].all(eq(true))
    ne = (other: Tuple7<T1, T2, T3, T4, T5, T6, T7>) => !this.eq(other)
    compare = (other: Tuple7<T1, T2, T3, T4, T5, T6, T7>) => {
        return [
            orderChecker(this._1, other._1),
            orderChecker(this._2, other._2),
            orderChecker(this._3, other._3),
            orderChecker(this._4, other._4),
            orderChecker(this._5, other._5),
            orderChecker(this._6, other._6),
            orderChecker(this._7, other._7),
        ].reduce((acc, item) => acc === Ordering.EQ ? acc : item)
    }
    lt = (other: Tuple7<T1, T2, T3, T4, T5, T6, T7>) => this.compare(other) === Ordering.LT
    le = (other: Tuple7<T1, T2, T3, T4, T5, T6, T7>) => [Ordering.EQ, Ordering.LT].includes(this.compare(other))
    ge = (other: Tuple7<T1, T2, T3, T4, T5, T6, T7>) => [Ordering.EQ, Ordering.GT].includes(this.compare(other))
    gt = (other: Tuple7<T1, T2, T3, T4, T5, T6, T7>) => this.compare(other) === Ordering.GT
    max = (other: Tuple7<T1, T2, T3, T4, T5, T6, T7>) => this.ge(other) ? this : other
    min = (other: Tuple7<T1, T2, T3, T4, T5, T6, T7>) => this.le(other) ? this : other
    isDisplay = true
    display = () => `Tuple7(${Display.display(this._1)}, ${Display.display(this._2)}, ${Display.display(this._3)}, ${Display.display(this._4)}, ${Display.display(this._5)}, ${Display.display(this._6)}, ${Display.display(this._7)})`
}

export class Tuple8<T1, T2, T3, T4, T5, T6, T7, T8> implements Ord<Tuple8<T1, T2, T3, T4, T5, T6, T7, T8>>, Display {
    constructor(readonly _1: T1, readonly _2: T2, readonly _3: T3, readonly _4: T4, readonly _5: T5, readonly _6: T6, readonly _7: T7, readonly _8: T8) { }
    eq = (other: Tuple8<T1, T2, T3, T4, T5, T6, T7, T8>) => [
        eqChecker(this._1, other._1),
        eqChecker(this._2, other._2),
        eqChecker(this._3, other._3),
        eqChecker(this._4, other._4),
        eqChecker(this._5, other._5),
        eqChecker(this._6, other._6),
        eqChecker(this._7, other._7),
        eqChecker(this._8, other._8),
    ].all(eq(true))
    ne = (other: Tuple8<T1, T2, T3, T4, T5, T6, T7, T8>) => !this.eq(other)
    compare = (other: Tuple8<T1, T2, T3, T4, T5, T6, T7, T8>) => {
        return [
            orderChecker(this._1, other._1),
            orderChecker(this._2, other._2),
            orderChecker(this._3, other._3),
            orderChecker(this._4, other._4),
            orderChecker(this._5, other._5),
            orderChecker(this._6, other._6),
            orderChecker(this._7, other._7),
            orderChecker(this._8, other._8),
        ].reduce((acc, item) => acc === Ordering.EQ ? acc : item)
    }
    lt = (other: Tuple8<T1, T2, T3, T4, T5, T6, T7, T8>) => this.compare(other) === Ordering.LT
    le = (other: Tuple8<T1, T2, T3, T4, T5, T6, T7, T8>) => [Ordering.EQ, Ordering.LT].includes(this.compare(other))
    ge = (other: Tuple8<T1, T2, T3, T4, T5, T6, T7, T8>) => [Ordering.EQ, Ordering.GT].includes(this.compare(other))
    gt = (other: Tuple8<T1, T2, T3, T4, T5, T6, T7, T8>) => this.compare(other) === Ordering.GT
    max = (other: Tuple8<T1, T2, T3, T4, T5, T6, T7, T8>) => this.ge(other) ? this : other
    min = (other: Tuple8<T1, T2, T3, T4, T5, T6, T7, T8>) => this.le(other) ? this : other
    isDisplay = true
    display = () => `Tuple8(${Display.display(this._1)}, ${Display.display(this._2)}, ${Display.display(this._3)}, ${Display.display(this._4)}, ${Display.display(this._5)}, ${Display.display(this._6)}, ${Display.display(this._7)}, ${Display.display(this._8)})`
}

export class Tuple9<T1, T2, T3, T4, T5, T6, T7, T8, T9> implements Ord<Tuple9<T1, T2, T3, T4, T5, T6, T7, T8, T9>>, Display {
    constructor(readonly _1: T1, readonly _2: T2, readonly _3: T3, readonly _4: T4, readonly _5: T5, readonly _6: T6, readonly _7: T7, readonly _8: T8, readonly _9: T9) { }
    eq = (other: Tuple9<T1, T2, T3, T4, T5, T6, T7, T8, T9>) => [
        eqChecker(this._1, other._1),
        eqChecker(this._2, other._2),
        eqChecker(this._3, other._3),
        eqChecker(this._4, other._4),
        eqChecker(this._5, other._5),
        eqChecker(this._6, other._6),
        eqChecker(this._7, other._7),
        eqChecker(this._8, other._8),
        eqChecker(this._9, other._9)
    ].all(eq(true))
    ne = (other: Tuple9<T1, T2, T3, T4, T5, T6, T7, T8, T9>) => !this.eq(other)
    compare = (other: Tuple9<T1, T2, T3, T4, T5, T6, T7, T8, T9>) => {
        return [
            orderChecker(this._1, other._1),
            orderChecker(this._2, other._2),
            orderChecker(this._3, other._3),
            orderChecker(this._4, other._4),
            orderChecker(this._5, other._5),
            orderChecker(this._6, other._6),
            orderChecker(this._7, other._7),
            orderChecker(this._8, other._8),
            orderChecker(this._9, other._9),
        ].reduce((acc, item) => acc === Ordering.EQ ? acc : item)
    }
    lt = (other: Tuple9<T1, T2, T3, T4, T5, T6, T7, T8, T9>) => this.compare(other) === Ordering.LT
    le = (other: Tuple9<T1, T2, T3, T4, T5, T6, T7, T8, T9>) => [Ordering.EQ, Ordering.LT].includes(this.compare(other))
    ge = (other: Tuple9<T1, T2, T3, T4, T5, T6, T7, T8, T9>) => [Ordering.EQ, Ordering.GT].includes(this.compare(other))
    gt = (other: Tuple9<T1, T2, T3, T4, T5, T6, T7, T8, T9>) => this.compare(other) === Ordering.GT
    max = (other: Tuple9<T1, T2, T3, T4, T5, T6, T7, T8, T9>) => this.ge(other) ? this : other
    min = (other: Tuple9<T1, T2, T3, T4, T5, T6, T7, T8, T9>) => this.le(other) ? this : other
    isDisplay = true
    display = () => `Tuple9(${Display.display(this._1)}, ${Display.display(this._2)}, ${Display.display(this._3)}, ${Display.display(this._4)}, ${Display.display(this._5)}, ${Display.display(this._6)}, ${Display.display(this._7)}, ${Display.display(this._8)}, ${Display.display(this._9)})`
}

export class Tuple10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10> implements Ord<Tuple10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>>, Display {
    constructor(readonly _1: T1, readonly _2: T2, readonly _3: T3, readonly _4: T4, readonly _5: T5, readonly _6: T6, readonly _7: T7, readonly _8: T8, readonly _9: T9, readonly _10: T10) { }
    eq = (other: Tuple10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>) => [
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
    ].all(eq(true))
    ne = (other: Tuple10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>) => !this.eq(other)
    compare = (other: Tuple10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>) => {
        return [
            orderChecker(this._1, other._1),
            orderChecker(this._2, other._2),
            orderChecker(this._3, other._3),
            orderChecker(this._4, other._4),
            orderChecker(this._5, other._5),
            orderChecker(this._6, other._6),
            orderChecker(this._7, other._7),
            orderChecker(this._8, other._8),
            orderChecker(this._9, other._9),
            orderChecker(this._10, other._10),
        ].reduce((acc, item) => acc === Ordering.EQ ? acc : item)
    }
    lt = (other: Tuple10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>) => this.compare(other) === Ordering.LT
    le = (other: Tuple10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>) => [Ordering.EQ, Ordering.LT].includes(this.compare(other))
    ge = (other: Tuple10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>) => [Ordering.EQ, Ordering.GT].includes(this.compare(other))
    gt = (other: Tuple10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>) => this.compare(other) === Ordering.GT
    max = (other: Tuple10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>) => this.ge(other) ? this : other
    min = (other: Tuple10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>) => this.le(other) ? this : other
    isDisplay = true
    display = () => `Tuple10(${Display.display(this._1)}, ${Display.display(this._2)}, ${Display.display(this._3)}, ${Display.display(this._4)}, ${Display.display(this._5)}, ${Display.display(this._6)}, ${Display.display(this._7)}, ${Display.display(this._8)}, ${Display.display(this._9)}, ${Display.display(this._10)})`
}

export const tuple2 = <T1, T2>(t1: T1, t2: T2) => new Tuple2(t1, t2)
export const tuple3 = <T1, T2, T3>(t1: T1, t2: T2, t3: T3) => new Tuple3(t1, t2, t3)
export const tuple4 = <T1, T2, T3, T4>(t1: T1, t2: T2, t3: T3, t4: T4) => new Tuple4(t1, t2, t3, t4)
export const tuple5 = <T1, T2, T3, T4, T5>(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => new Tuple5(t1, t2, t3, t4, t5)
export const tuple6 = <T1, T2, T3, T4, T5, T6>(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6) => new Tuple6(t1, t2, t3, t4, t5, t6)
export const tuple7 = <T1, T2, T3, T4, T5, T6, T7>(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7) => new Tuple7(t1, t2, t3, t4, t5, t6, t7)
export const tuple8 = <T1, T2, T3, T4, T5, T6, T7, T8>(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8) => new Tuple8(t1, t2, t3, t4, t5, t6, t7, t8)
export const tuple9 = <T1, T2, T3, T4, T5, T6, T7, T8, T9>(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8, t9: T9) => new Tuple9(t1, t2, t3, t4, t5, t6, t7, t8, t9)
export const tuple10 = <T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8, t9: T9, t10: T10) => new Tuple10(t1, t2, t3, t4, t5, t6, t7, t8, t9, t10)

export type STTuple2<T> = Tuple2<T, T>
export type STTuple3<T> = Tuple3<T, T, T>
export type STTuple4<T> = Tuple4<T, T, T, T>
export type STTuple5<T> = Tuple5<T, T, T, T, T>
export type STTuple6<T> = Tuple6<T, T, T, T, T, T>
export type STTuple7<T> = Tuple7<T, T, T, T, T, T, T>
export type STTuple8<T> = Tuple8<T, T, T, T, T, T, T, T>
export type STTuple9<T> = Tuple9<T, T, T, T, T, T, T, T, T>
export type STTuple10<T> = Tuple10<T, T, T, T, T, T, T, T, T, T>
