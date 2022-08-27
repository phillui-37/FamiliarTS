import { Tuple2 } from "../collections/tuple";
declare type IMaybe<T> = {
    isJust: boolean;
    isNothing: boolean;
    get(): T;
    getOr(fallback: T): T;
    getOrElse(getFallback: () => T): T;
    map<U>(fn: (t: T) => U): IMaybe<U>;
    replace<U>(u: U): IMaybe<U>;
    apply<R, U>(mr: IMaybe<R>): IMaybe<U>;
    discardSelf<U>(other: IMaybe<U>): IMaybe<U>;
    discardOther<U>(other: IMaybe<U>): IMaybe<T>;
    or(other: IMaybe<T>): IMaybe<T>;
    bind<U>(fn: (t: T) => IMaybe<U>): IMaybe<U>;
    and<U>(other: IMaybe<U>): IMaybe<U>;
    xor(other: IMaybe<T>): IMaybe<T>;
    orElse(getOther: () => IMaybe<T>): IMaybe<T>;
    filter(predicate: (t: T) => boolean): IMaybe<T>;
    zip<U>(other: IMaybe<U>): IMaybe<Tuple2<T, U>>;
};
export declare class Just<T> implements IMaybe<T> {
    readonly t: T;
    constructor(t: T);
    map<U>(fn: (t: T) => U): IMaybe<U>;
    replace<U>(u: U): IMaybe<U>;
    apply<R, U>(mr: IMaybe<R>): IMaybe<U>;
    discardSelf<U>(other: IMaybe<U>): IMaybe<U>;
    discardOther<U>(other: IMaybe<U>): IMaybe<T>;
    or(other: IMaybe<T>): IMaybe<T>;
    bind<U>(fn: (t: T) => IMaybe<U>): IMaybe<U>;
    and<U>(other: IMaybe<U>): IMaybe<U>;
    xor(other: IMaybe<T>): IMaybe<T>;
    orElse(getOther: () => IMaybe<T>): IMaybe<T>;
    filter(predicate: (t: T) => boolean): IMaybe<T>;
    zip<U>(other: IMaybe<U>): IMaybe<Tuple2<T, U>>;
    isJust: boolean;
    isNothing: boolean;
    get: () => T;
    getOr(fallback: T): T;
    getOrElse(getFallback: () => T): T;
    toString: () => string;
}
export declare class Nothing implements IMaybe<never> {
    private constructor();
    static instance: Nothing;
    map<U>(fn: (t: never) => U): IMaybe<never>;
    replace<U>(u: U): IMaybe<U>;
    apply<R, U>(mr: IMaybe<R>): IMaybe<U>;
    discardSelf<U>(other: IMaybe<U>): IMaybe<U>;
    discardOther<U>(other: IMaybe<U>): IMaybe<never>;
    or<T>(other: IMaybe<T>): IMaybe<T>;
    bind<U>(fn: (t: never) => IMaybe<U>): IMaybe<U>;
    and<U>(other: IMaybe<U>): IMaybe<U>;
    xor<T>(other: IMaybe<T>): IMaybe<T>;
    orElse(getOther: () => IMaybe<never>): IMaybe<never>;
    filter(predicate: (t: never) => boolean): IMaybe<never>;
    zip<U>(other: IMaybe<U>): IMaybe<Tuple2<never, U>>;
    isJust: boolean;
    isNothing: boolean;
    get: () => never;
    getOr<T>(fallback: T): T;
    getOrElse(getFallback: () => never): never;
    toString: () => string;
}
export declare type Maybe<T> = Just<T> | Nothing;
export declare const nothing: Nothing;
export declare const just: <T>(t: T) => Maybe<T>;
export declare namespace Maybe {
    function isNothing<T>(m: Maybe<T>): m is Nothing;
    function isJust<T>(m: Maybe<T>): m is Just<T>;
    function of<T>(t: T): Maybe<T>;
    function flatten<T>(m: Maybe<Maybe<T>>): Maybe<T>;
}
export {};
