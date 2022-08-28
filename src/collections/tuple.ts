import { isEq, isOrd, Ordering, Eq, Ord } from "../basic/lib"
import { eq } from "../util/lib"
import '../stdExt/array'

const eqChecker = (ls1: any[], ls2: any[]) => {
    return ls1.zip(ls2)
        .map(t2 => {
            if (isEq(t2._1)) return t2._1.eq(t2._2)
            else return t2._1 === t2._2
        })
        .all(eq(true))
}

const orderChecker = <T>(obj1: T, obj2: T) => {
    if (isOrd(obj2) && isOrd(obj1)) {
        /* @ts-ignore */
        return obj2.compare(obj1)
    } else {
        return obj1 < obj2 ? Ordering.LT : obj1 > obj2 ? Ordering.GT : Ordering.EQ
    }
}

export class Tuple2<T1, T2> implements Ord<Tuple2<T1,T2>> {
    constructor(readonly _1: T1, readonly _2: T2) { }

    eq = (other: Tuple2<T1,T2>) => {
        return eqChecker(this.toList(), other.toList())
    }

    ne = (other: Tuple2<T1, T2>) => !this.eq(other)

    compare = (other: Tuple2<T1, T2>) => {
        const order = orderChecker(this._1, other._1)
        if (order !== Ordering.EQ) return order
        return orderChecker(this._2, other._2)
    }

    lt = (other: Tuple2<T1, T2>) => {
        return this.compare(other) === Ordering.LT
    }

    le = (other: Tuple2<T1, T2>) => {
        return this.compare(other) in [Ordering.EQ, Ordering.LT]
    }

    ge = (other: Tuple2<T1, T2>) => {
        return this.compare(other) in [Ordering.EQ, Ordering.GT]
    }

    gt = (other: Tuple2<T1, T2>) => {
        return this.compare(other) === Ordering.GT
    }

    max = (other: Tuple2<T1, T2>) => {
        return this.ge(other) ? this : other
    }

    min = (other: Tuple2<T1, T2>) => {
        return this.le(other) ? this : other
    }

    toString = () => `Tuple2(${this._1}, ${this._2})`
    toList(): [T1, T2] { return [this._1, this._2] }
}
export class Tuple3<T1, T2, T3> {
    constructor(readonly _1: T1, readonly _2: T2, readonly _3: T3) { }
    toString = () => `Tuple3(${this._1}, ${this._2}, ${this._3})`
}
export class Tuple4<T1, T2, T3, T4> {
    constructor(readonly _1: T1, readonly _2: T2, readonly _3: T3, readonly _4: T4) { }
    toString = () => `Tuple4(${this._1}, ${this._2}, ${this._3}, ${this._4})`
}
export class Tuple5<T1, T2, T3, T4, T5> {
    constructor(readonly _1: T1, readonly _2: T2, readonly _3: T3, readonly _4: T4, readonly _5: T5) { }
    toString = () => `Tuple5(${this._1}, ${this._2}, ${this._3}, ${this._4}, ${this._5})`
}
export class Tuple6<T1, T2, T3, T4, T5, T6> {
    constructor(readonly _1: T1, readonly _2: T2, readonly _3: T3, readonly _4: T4, readonly _5: T5, readonly _6: T6) { }
    toString = () => `Tuple6(${this._1}, ${this._2}, ${this._3}, ${this._4}, ${this._5}, ${this._6})`
}
export class Tuple7<T1, T2, T3, T4, T5, T6, T7> {
    constructor(readonly _1: T1, readonly _2: T2, readonly _3: T3, readonly _4: T4, readonly _5: T5, readonly _6: T6, readonly _7: T7) { }
    toString = () => `Tuple7(${this._1}, ${this._2}, ${this._3}, ${this._4}, ${this._5}, ${this._6}, ${this._7})`
}
export class Tuple8<T1, T2, T3, T4, T5, T6, T7, T8> {
    constructor(readonly _1: T1, readonly _2: T2, readonly _3: T3, readonly _4: T4, readonly _5: T5, readonly _6: T6, readonly _7: T7, readonly _8: T8) { }
    toString = () => `Tuple8(${this._1}, ${this._2}, ${this._3}, ${this._4}, ${this._5}, ${this._6}, ${this._7}, ${this._8})`
}
export class Tuple9<T1, T2, T3, T4, T5, T6, T7, T8, T9> {
    constructor(readonly _1: T1, readonly _2: T2, readonly _3: T3, readonly _4: T4, readonly _5: T5, readonly _6: T6, readonly _7: T7, readonly _8: T8, readonly _9: T9) { }
    toString = () => `Tuple9(${this._1}, ${this._2}, ${this._3}, ${this._4}, ${this._5}, ${this._6}, ${this._7}, ${this._8}, ${this._9})`
}
export class Tuple10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10> {
    constructor(readonly _1: T1, readonly _2: T2, readonly _3: T3, readonly _4: T4, readonly _5: T5, readonly _6: T6, readonly _7: T7, readonly _8: T8, readonly _9: T9, readonly _10: T10) { }
    toString = () => `Tuple10(${this._1}, ${this._2}, ${this._3}, ${this._4}, ${this._5}, ${this._6}, ${this._7}, ${this._8}, ${this._9}, ${this._10})`
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

export type STTuple2<T> = Tuple2<T,T>
export type STTuple3<T> = Tuple3<T,T,T>
export type STTuple4<T> = Tuple4<T,T,T,T>
export type STTuple5<T> = Tuple5<T,T,T,T,T>
export type STTuple6<T> = Tuple6<T,T,T,T,T,T>
export type STTuple7<T> = Tuple7<T,T,T,T,T,T,T>
export type STTuple8<T> = Tuple8<T,T,T,T,T,T,T,T>
export type STTuple9<T> = Tuple9<T,T,T,T,T,T,T,T,T>
export type STTuple10<T> = Tuple10<T,T,T,T,T,T,T,T,T,T>
