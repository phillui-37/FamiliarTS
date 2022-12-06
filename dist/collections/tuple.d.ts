import { Display } from "../basic";
export declare class Tuple2<T1, T2> implements Display {
    readonly _1: T1;
    readonly _2: T2;
    constructor(_1: T1, _2: T2);
    eq: (other: Tuple2<T1, T2>) => boolean;
    ne: (other: Tuple2<T1, T2>) => boolean;
    isDisplay: boolean;
    display: () => string;
}
export declare class Tuple3<T1, T2, T3> implements Display {
    readonly _1: T1;
    readonly _2: T2;
    readonly _3: T3;
    constructor(_1: T1, _2: T2, _3: T3);
    eq: (other: Tuple3<T1, T2, T3>) => boolean;
    ne: (other: Tuple3<T1, T2, T3>) => boolean;
    isDisplay: boolean;
    display: () => string;
}
export declare class Tuple4<T1, T2, T3, T4> implements Display {
    readonly _1: T1;
    readonly _2: T2;
    readonly _3: T3;
    readonly _4: T4;
    constructor(_1: T1, _2: T2, _3: T3, _4: T4);
    eq: (other: Tuple4<T1, T2, T3, T4>) => boolean;
    ne: (other: Tuple4<T1, T2, T3, T4>) => boolean;
    isDisplay: boolean;
    display: () => string;
}
export declare class Tuple5<T1, T2, T3, T4, T5> implements Display {
    readonly _1: T1;
    readonly _2: T2;
    readonly _3: T3;
    readonly _4: T4;
    readonly _5: T5;
    constructor(_1: T1, _2: T2, _3: T3, _4: T4, _5: T5);
    eq: (other: Tuple5<T1, T2, T3, T4, T5>) => boolean;
    ne: (other: Tuple5<T1, T2, T3, T4, T5>) => boolean;
    isDisplay: boolean;
    display: () => string;
}
export declare class Tuple6<T1, T2, T3, T4, T5, T6> implements Display {
    readonly _1: T1;
    readonly _2: T2;
    readonly _3: T3;
    readonly _4: T4;
    readonly _5: T5;
    readonly _6: T6;
    constructor(_1: T1, _2: T2, _3: T3, _4: T4, _5: T5, _6: T6);
    eq: (other: Tuple6<T1, T2, T3, T4, T5, T6>) => boolean;
    ne: (other: Tuple6<T1, T2, T3, T4, T5, T6>) => boolean;
    isDisplay: boolean;
    display: () => string;
}
export declare class Tuple7<T1, T2, T3, T4, T5, T6, T7> implements Display {
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
    isDisplay: boolean;
    display: () => string;
}
export declare class Tuple8<T1, T2, T3, T4, T5, T6, T7, T8> implements Display {
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
    isDisplay: boolean;
    display: () => string;
}
export declare class Tuple9<T1, T2, T3, T4, T5, T6, T7, T8, T9> implements Display {
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
    isDisplay: boolean;
    display: () => string;
}
export declare class Tuple10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10> implements Display {
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
