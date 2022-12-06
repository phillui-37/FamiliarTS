import { Display } from "../basic"
import { eq } from "../util"
import {all} from 'ramda'

const eqChecker = <T>(item1: T, item2: T) => {
    return item1 === item2
}

const listEqChecker = (() => {
    const _fn = all(eq(true))
    return (ls: boolean[]) => _fn(ls)
})()

export class Tuple2<T1, T2> implements Display {
    constructor(readonly _1: T1, readonly _2: T2) { }
    eq = (other: Tuple2<T1, T2>) => eqChecker(this._1, other._1) && eqChecker(this._2, other._2)
    ne = (other: Tuple2<T1, T2>) => !this.eq(other)
    isDisplay = true
    display = () => `Tuple2(${Display.display(this._1)}, ${Display.display(this._2)})`
}

export class Tuple3<T1, T2, T3> implements Display {
    constructor(readonly _1: T1, readonly _2: T2, readonly _3: T3) { }
    eq = (other: Tuple3<T1, T2, T3>) => eqChecker(this._1, other._1) && eqChecker(this._2, other._2) && eqChecker(this._3, other._3)
    ne = (other: Tuple3<T1, T2, T3>) => !this.eq(other)
    isDisplay = true
    display = () => `Tuple3(${Display.display(this._1)}, ${Display.display(this._2)}, ${Display.display(this._3)})`
}

export class Tuple4<T1, T2, T3, T4> implements Display {
    constructor(readonly _1: T1, readonly _2: T2, readonly _3: T3, readonly _4: T4) { }
    eq = (other: Tuple4<T1, T2, T3, T4>) => listEqChecker([eqChecker(this._1, other._1), eqChecker(this._2, other._2), eqChecker(this._3, other._3), eqChecker(this._4, other._4)])
    ne = (other: Tuple4<T1, T2, T3, T4>) => !this.eq(other)
    isDisplay = true
    display = () => `Tuple4(${Display.display(this._1)}, ${Display.display(this._2)}, ${Display.display(this._3)}, ${Display.display(this._4)})`
}

export class Tuple5<T1, T2, T3, T4, T5> implements Display {
    constructor(readonly _1: T1, readonly _2: T2, readonly _3: T3, readonly _4: T4, readonly _5: T5) { }
    eq = (other: Tuple5<T1, T2, T3, T4, T5>) => listEqChecker([eqChecker(this._1, other._1), eqChecker(this._2, other._2), eqChecker(this._3, other._3), eqChecker(this._4, other._4), eqChecker(this._5, other._5)])
    ne = (other: Tuple5<T1, T2, T3, T4, T5>) => !this.eq(other)
    isDisplay = true
    display = () => `Tuple5(${Display.display(this._1)}, ${Display.display(this._2)}, ${Display.display(this._3)}, ${Display.display(this._4)}, ${Display.display(this._5)})`
}

export class Tuple6<T1, T2, T3, T4, T5, T6> implements Display {
    constructor(readonly _1: T1, readonly _2: T2, readonly _3: T3, readonly _4: T4, readonly _5: T5, readonly _6: T6) { }
    eq = (other: Tuple6<T1, T2, T3, T4, T5, T6>) => listEqChecker([eqChecker(this._1, other._1), eqChecker(this._2, other._2), eqChecker(this._3, other._3), eqChecker(this._4, other._4), eqChecker(this._5, other._5), eqChecker(this._6, other._6)])
    ne = (other: Tuple6<T1, T2, T3, T4, T5, T6>) => !this.eq(other)
    isDisplay = true
    display = () => `Tuple6(${Display.display(this._1)}, ${Display.display(this._2)}, ${Display.display(this._3)}, ${Display.display(this._4)}, ${Display.display(this._5)}, ${Display.display(this._6)})`
}

export class Tuple7<T1, T2, T3, T4, T5, T6, T7> implements Display {
    constructor(readonly _1: T1, readonly _2: T2, readonly _3: T3, readonly _4: T4, readonly _5: T5, readonly _6: T6, readonly _7: T7) { }
    eq = (other: Tuple7<T1, T2, T3, T4, T5, T6, T7>) => listEqChecker([eqChecker(this._1, other._1), eqChecker(this._2, other._2), eqChecker(this._3, other._3), eqChecker(this._4, other._4), eqChecker(this._5, other._5), eqChecker(this._6, other._6), eqChecker(this._7, other._7)])
    ne = (other: Tuple7<T1, T2, T3, T4, T5, T6, T7>) => !this.eq(other)
    isDisplay = true
    display = () => `Tuple7(${Display.display(this._1)}, ${Display.display(this._2)}, ${Display.display(this._3)}, ${Display.display(this._4)}, ${Display.display(this._5)}, ${Display.display(this._6)}, ${Display.display(this._7)})`
}

export class Tuple8<T1, T2, T3, T4, T5, T6, T7, T8> implements Display {
    constructor(readonly _1: T1, readonly _2: T2, readonly _3: T3, readonly _4: T4, readonly _5: T5, readonly _6: T6, readonly _7: T7, readonly _8: T8) { }
    eq = (other: Tuple8<T1, T2, T3, T4, T5, T6, T7, T8>) => listEqChecker([
        eqChecker(this._1, other._1),
        eqChecker(this._2, other._2),
        eqChecker(this._3, other._3),
        eqChecker(this._4, other._4),
        eqChecker(this._5, other._5),
        eqChecker(this._6, other._6),
        eqChecker(this._7, other._7),
        eqChecker(this._8, other._8),
    ])
    ne = (other: Tuple8<T1, T2, T3, T4, T5, T6, T7, T8>) => !this.eq(other)
    isDisplay = true
    display = () => `Tuple8(${Display.display(this._1)}, ${Display.display(this._2)}, ${Display.display(this._3)}, ${Display.display(this._4)}, ${Display.display(this._5)}, ${Display.display(this._6)}, ${Display.display(this._7)}, ${Display.display(this._8)})`
}

export class Tuple9<T1, T2, T3, T4, T5, T6, T7, T8, T9> implements Display {
    constructor(readonly _1: T1, readonly _2: T2, readonly _3: T3, readonly _4: T4, readonly _5: T5, readonly _6: T6, readonly _7: T7, readonly _8: T8, readonly _9: T9) { }
    eq = (other: Tuple9<T1, T2, T3, T4, T5, T6, T7, T8, T9>) => listEqChecker([
        eqChecker(this._1, other._1),
        eqChecker(this._2, other._2),
        eqChecker(this._3, other._3),
        eqChecker(this._4, other._4),
        eqChecker(this._5, other._5),
        eqChecker(this._6, other._6),
        eqChecker(this._7, other._7),
        eqChecker(this._8, other._8),
        eqChecker(this._9, other._9)
    ])
    ne = (other: Tuple9<T1, T2, T3, T4, T5, T6, T7, T8, T9>) => !this.eq(other)
    isDisplay = true
    display = () => `Tuple9(${Display.display(this._1)}, ${Display.display(this._2)}, ${Display.display(this._3)}, ${Display.display(this._4)}, ${Display.display(this._5)}, ${Display.display(this._6)}, ${Display.display(this._7)}, ${Display.display(this._8)}, ${Display.display(this._9)})`
}

export class Tuple10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10> implements Display {
    constructor(readonly _1: T1, readonly _2: T2, readonly _3: T3, readonly _4: T4, readonly _5: T5, readonly _6: T6, readonly _7: T7, readonly _8: T8, readonly _9: T9, readonly _10: T10) { }
    eq = (other: Tuple10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>) => listEqChecker([
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
    ])
    ne = (other: Tuple10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>) => !this.eq(other)
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
