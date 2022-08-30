import { Ordering, Ord, Display } from "../basic";
import '../stdExt/array';
export declare class Tuple2<T1, T2> implements Ord<Tuple2<T1, T2>>, Display {
    readonly _1: T1;
    readonly _2: T2;
    constructor(_1: T1, _2: T2);
    eq: (other: Tuple2<T1, T2>) => boolean;
    ne: (other: Tuple2<T1, T2>) => boolean;
    compare: (other: Tuple2<T1, T2>) => Ordering;
    lt: (other: Tuple2<T1, T2>) => boolean;
    le: (other: Tuple2<T1, T2>) => boolean;
    ge: (other: Tuple2<T1, T2>) => boolean;
    gt: (other: Tuple2<T1, T2>) => boolean;
    max: (other: Tuple2<T1, T2>) => Tuple2<T1, T2>;
    min: (other: Tuple2<T1, T2>) => Tuple2<T1, T2>;
    isDisplay: boolean;
    display: () => string;
}
export declare class Tuple3<T1, T2, T3> implements Ord<Tuple3<T1, T2, T3>>, Display {
    readonly _1: T1;
    readonly _2: T2;
    readonly _3: T3;
    constructor(_1: T1, _2: T2, _3: T3);
    eq: (other: Tuple3<T1, T2, T3>) => boolean;
    ne: (other: Tuple3<T1, T2, T3>) => boolean;
    compare: (other: Tuple3<T1, T2, T3>) => Ordering;
    lt: (other: Tuple3<T1, T2, T3>) => boolean;
    le: (other: Tuple3<T1, T2, T3>) => boolean;
    ge: (other: Tuple3<T1, T2, T3>) => boolean;
    gt: (other: Tuple3<T1, T2, T3>) => boolean;
    max: (other: Tuple3<T1, T2, T3>) => Tuple3<T1, T2, T3>;
    min: (other: Tuple3<T1, T2, T3>) => Tuple3<T1, T2, T3>;
    isDisplay: boolean;
    display: () => string;
}
export declare class Tuple4<T1, T2, T3, T4> implements Ord<Tuple4<T1, T2, T3, T4>>, Display {
    readonly _1: T1;
    readonly _2: T2;
    readonly _3: T3;
    readonly _4: T4;
    constructor(_1: T1, _2: T2, _3: T3, _4: T4);
    eq: (other: Tuple4<T1, T2, T3, T4>) => boolean;
    ne: (other: Tuple4<T1, T2, T3, T4>) => boolean;
    compare: (other: Tuple4<T1, T2, T3, T4>) => Ordering;
    lt: (other: Tuple4<T1, T2, T3, T4>) => boolean;
    le: (other: Tuple4<T1, T2, T3, T4>) => boolean;
    ge: (other: Tuple4<T1, T2, T3, T4>) => boolean;
    gt: (other: Tuple4<T1, T2, T3, T4>) => boolean;
    max: (other: Tuple4<T1, T2, T3, T4>) => Tuple4<T1, T2, T3, T4>;
    min: (other: Tuple4<T1, T2, T3, T4>) => Tuple4<T1, T2, T3, T4>;
    isDisplay: boolean;
    display: () => string;
}
export declare class Tuple5<T1, T2, T3, T4, T5> implements Ord<Tuple5<T1, T2, T3, T4, T5>>, Display {
    readonly _1: T1;
    readonly _2: T2;
    readonly _3: T3;
    readonly _4: T4;
    readonly _5: T5;
    constructor(_1: T1, _2: T2, _3: T3, _4: T4, _5: T5);
    eq: (other: Tuple5<T1, T2, T3, T4, T5>) => boolean;
    ne: (other: Tuple5<T1, T2, T3, T4, T5>) => boolean;
    compare: (other: Tuple5<T1, T2, T3, T4, T5>) => Ordering;
    lt: (other: Tuple5<T1, T2, T3, T4, T5>) => boolean;
    le: (other: Tuple5<T1, T2, T3, T4, T5>) => boolean;
    ge: (other: Tuple5<T1, T2, T3, T4, T5>) => boolean;
    gt: (other: Tuple5<T1, T2, T3, T4, T5>) => boolean;
    max: (other: Tuple5<T1, T2, T3, T4, T5>) => Tuple5<T1, T2, T3, T4, T5>;
    min: (other: Tuple5<T1, T2, T3, T4, T5>) => Tuple5<T1, T2, T3, T4, T5>;
    isDisplay: boolean;
    display: () => string;
}
export declare class Tuple6<T1, T2, T3, T4, T5, T6> implements Ord<Tuple6<T1, T2, T3, T4, T5, T6>>, Display {
    readonly _1: T1;
    readonly _2: T2;
    readonly _3: T3;
    readonly _4: T4;
    readonly _5: T5;
    readonly _6: T6;
    constructor(_1: T1, _2: T2, _3: T3, _4: T4, _5: T5, _6: T6);
    eq: (other: Tuple6<T1, T2, T3, T4, T5, T6>) => boolean;
    ne: (other: Tuple6<T1, T2, T3, T4, T5, T6>) => boolean;
    compare: (other: Tuple6<T1, T2, T3, T4, T5, T6>) => Ordering;
    lt: (other: Tuple6<T1, T2, T3, T4, T5, T6>) => boolean;
    le: (other: Tuple6<T1, T2, T3, T4, T5, T6>) => boolean;
    ge: (other: Tuple6<T1, T2, T3, T4, T5, T6>) => boolean;
    gt: (other: Tuple6<T1, T2, T3, T4, T5, T6>) => boolean;
    max: (other: Tuple6<T1, T2, T3, T4, T5, T6>) => Tuple6<T1, T2, T3, T4, T5, T6>;
    min: (other: Tuple6<T1, T2, T3, T4, T5, T6>) => Tuple6<T1, T2, T3, T4, T5, T6>;
    isDisplay: boolean;
    display: () => string;
}
export declare class Tuple7<T1, T2, T3, T4, T5, T6, T7> implements Ord<Tuple7<T1, T2, T3, T4, T5, T6, T7>>, Display {
    readonly _1: T1;
    readonly _2: T2;
    readonly _3: T3;
    readonly _4: T4;
    readonly _5: T5;
    readonly _6: T6;
    readonly _7: T7;
    constructor(_1: T1, _2: T2, _3: T3, _4: T4, _5: T5, _6: T6, _7: T7);
    eq: (other: Tuple7<T1, T2, T3, T4, T5, T6, T7>) => boolean;
    ne: (other: Tuple7<T1, T2, T3, T4, T5, T6, T7>) => boolean;
    compare: (other: Tuple7<T1, T2, T3, T4, T5, T6, T7>) => Ordering;
    lt: (other: Tuple7<T1, T2, T3, T4, T5, T6, T7>) => boolean;
    le: (other: Tuple7<T1, T2, T3, T4, T5, T6, T7>) => boolean;
    ge: (other: Tuple7<T1, T2, T3, T4, T5, T6, T7>) => boolean;
    gt: (other: Tuple7<T1, T2, T3, T4, T5, T6, T7>) => boolean;
    max: (other: Tuple7<T1, T2, T3, T4, T5, T6, T7>) => Tuple7<T1, T2, T3, T4, T5, T6, T7>;
    min: (other: Tuple7<T1, T2, T3, T4, T5, T6, T7>) => Tuple7<T1, T2, T3, T4, T5, T6, T7>;
    isDisplay: boolean;
    display: () => string;
}
export declare class Tuple8<T1, T2, T3, T4, T5, T6, T7, T8> implements Ord<Tuple8<T1, T2, T3, T4, T5, T6, T7, T8>>, Display {
    readonly _1: T1;
    readonly _2: T2;
    readonly _3: T3;
    readonly _4: T4;
    readonly _5: T5;
    readonly _6: T6;
    readonly _7: T7;
    readonly _8: T8;
    constructor(_1: T1, _2: T2, _3: T3, _4: T4, _5: T5, _6: T6, _7: T7, _8: T8);
    eq: (other: Tuple8<T1, T2, T3, T4, T5, T6, T7, T8>) => boolean;
    ne: (other: Tuple8<T1, T2, T3, T4, T5, T6, T7, T8>) => boolean;
    compare: (other: Tuple8<T1, T2, T3, T4, T5, T6, T7, T8>) => Ordering;
    lt: (other: Tuple8<T1, T2, T3, T4, T5, T6, T7, T8>) => boolean;
    le: (other: Tuple8<T1, T2, T3, T4, T5, T6, T7, T8>) => boolean;
    ge: (other: Tuple8<T1, T2, T3, T4, T5, T6, T7, T8>) => boolean;
    gt: (other: Tuple8<T1, T2, T3, T4, T5, T6, T7, T8>) => boolean;
    max: (other: Tuple8<T1, T2, T3, T4, T5, T6, T7, T8>) => Tuple8<T1, T2, T3, T4, T5, T6, T7, T8>;
    min: (other: Tuple8<T1, T2, T3, T4, T5, T6, T7, T8>) => Tuple8<T1, T2, T3, T4, T5, T6, T7, T8>;
    isDisplay: boolean;
    display: () => string;
}
export declare class Tuple9<T1, T2, T3, T4, T5, T6, T7, T8, T9> implements Ord<Tuple9<T1, T2, T3, T4, T5, T6, T7, T8, T9>>, Display {
    readonly _1: T1;
    readonly _2: T2;
    readonly _3: T3;
    readonly _4: T4;
    readonly _5: T5;
    readonly _6: T6;
    readonly _7: T7;
    readonly _8: T8;
    readonly _9: T9;
    constructor(_1: T1, _2: T2, _3: T3, _4: T4, _5: T5, _6: T6, _7: T7, _8: T8, _9: T9);
    eq: (other: Tuple9<T1, T2, T3, T4, T5, T6, T7, T8, T9>) => boolean;
    ne: (other: Tuple9<T1, T2, T3, T4, T5, T6, T7, T8, T9>) => boolean;
    compare: (other: Tuple9<T1, T2, T3, T4, T5, T6, T7, T8, T9>) => Ordering;
    lt: (other: Tuple9<T1, T2, T3, T4, T5, T6, T7, T8, T9>) => boolean;
    le: (other: Tuple9<T1, T2, T3, T4, T5, T6, T7, T8, T9>) => boolean;
    ge: (other: Tuple9<T1, T2, T3, T4, T5, T6, T7, T8, T9>) => boolean;
    gt: (other: Tuple9<T1, T2, T3, T4, T5, T6, T7, T8, T9>) => boolean;
    max: (other: Tuple9<T1, T2, T3, T4, T5, T6, T7, T8, T9>) => Tuple9<T1, T2, T3, T4, T5, T6, T7, T8, T9>;
    min: (other: Tuple9<T1, T2, T3, T4, T5, T6, T7, T8, T9>) => Tuple9<T1, T2, T3, T4, T5, T6, T7, T8, T9>;
    isDisplay: boolean;
    display: () => string;
}
export declare class Tuple10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10> implements Ord<Tuple10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>>, Display {
    readonly _1: T1;
    readonly _2: T2;
    readonly _3: T3;
    readonly _4: T4;
    readonly _5: T5;
    readonly _6: T6;
    readonly _7: T7;
    readonly _8: T8;
    readonly _9: T9;
    readonly _10: T10;
    constructor(_1: T1, _2: T2, _3: T3, _4: T4, _5: T5, _6: T6, _7: T7, _8: T8, _9: T9, _10: T10);
    eq: (other: Tuple10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>) => boolean;
    ne: (other: Tuple10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>) => boolean;
    compare: (other: Tuple10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>) => Ordering;
    lt: (other: Tuple10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>) => boolean;
    le: (other: Tuple10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>) => boolean;
    ge: (other: Tuple10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>) => boolean;
    gt: (other: Tuple10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>) => boolean;
    max: (other: Tuple10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>) => Tuple10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>;
    min: (other: Tuple10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>) => Tuple10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>;
    isDisplay: boolean;
    display: () => string;
}
export declare const tuple2: <T1, T2>(t1: T1, t2: T2) => Tuple2<T1, T2>;
export declare const tuple3: <T1, T2, T3>(t1: T1, t2: T2, t3: T3) => Tuple3<T1, T2, T3>;
export declare const tuple4: <T1, T2, T3, T4>(t1: T1, t2: T2, t3: T3, t4: T4) => Tuple4<T1, T2, T3, T4>;
export declare const tuple5: <T1, T2, T3, T4, T5>(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => Tuple5<T1, T2, T3, T4, T5>;
export declare const tuple6: <T1, T2, T3, T4, T5, T6>(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6) => Tuple6<T1, T2, T3, T4, T5, T6>;
export declare const tuple7: <T1, T2, T3, T4, T5, T6, T7>(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7) => Tuple7<T1, T2, T3, T4, T5, T6, T7>;
export declare const tuple8: <T1, T2, T3, T4, T5, T6, T7, T8>(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8) => Tuple8<T1, T2, T3, T4, T5, T6, T7, T8>;
export declare const tuple9: <T1, T2, T3, T4, T5, T6, T7, T8, T9>(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8, t9: T9) => Tuple9<T1, T2, T3, T4, T5, T6, T7, T8, T9>;
export declare const tuple10: <T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8, t9: T9, t10: T10) => Tuple10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>;
export declare type STTuple2<T> = Tuple2<T, T>;
export declare type STTuple3<T> = Tuple3<T, T, T>;
export declare type STTuple4<T> = Tuple4<T, T, T, T>;
export declare type STTuple5<T> = Tuple5<T, T, T, T, T>;
export declare type STTuple6<T> = Tuple6<T, T, T, T, T, T>;
export declare type STTuple7<T> = Tuple7<T, T, T, T, T, T, T>;
export declare type STTuple8<T> = Tuple8<T, T, T, T, T, T, T, T>;
export declare type STTuple9<T> = Tuple9<T, T, T, T, T, T, T, T, T>;
export declare type STTuple10<T> = Tuple10<T, T, T, T, T, T, T, T, T, T>;
