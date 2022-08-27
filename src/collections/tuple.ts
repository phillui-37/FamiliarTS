export class Tuple2<T1, T2> {
    constructor(readonly _1: T1, readonly _2: T2) { }
}
export class Tuple3<T1, T2, T3> {
    constructor(readonly _1: T1, readonly _2: T2, readonly _3: T3) { }
}
export class Tuple4<T1, T2, T3, T4> {
    constructor(readonly _1: T1, readonly _2: T2, readonly _3: T3, readonly _4: T4) { }
}
export class Tuple5<T1, T2, T3, T4, T5> {
    constructor(readonly _1: T1, readonly _2: T2, readonly _3: T3, readonly _4: T4, readonly _5: T5) { }
}
export class Tuple6<T1, T2, T3, T4, T5, T6> {
    constructor(readonly _1: T1, readonly _2: T2, readonly _3: T3, readonly _4: T4, readonly _5: T5, readonly _6: T6) { }
}
export class Tuple7<T1, T2, T3, T4, T5, T6, T7> {
    constructor(readonly _1: T1, readonly _2: T2, readonly _3: T3, readonly _4: T4, readonly _5: T5, readonly _6: T6, readonly _7: T7) { }
}
export class Tuple8<T1, T2, T3, T4, T5, T6, T7, T8> {
    constructor(readonly _1: T1, readonly _2: T2, readonly _3: T3, readonly _4: T4, readonly _5: T5, readonly _6: T6, readonly _7: T7, readonly _8: T8) { }
}
export class Tuple9<T1, T2, T3, T4, T5, T6, T7, T8, T9> {
    constructor(readonly _1: T1, readonly _2: T2, readonly _3: T3, readonly _4: T4, readonly _5: T5, readonly _6: T6, readonly _7: T7, readonly _8: T8, readonly _9: T9) { }
}
export class Tuple10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10> {
    constructor(readonly _1: T1, readonly _2: T2, readonly _3: T3, readonly _4: T4, readonly _5: T5, readonly _6: T6, readonly _7: T7, readonly _8: T8, readonly _9: T9, readonly _10: T10) { }
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
