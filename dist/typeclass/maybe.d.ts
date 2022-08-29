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
    map: <U>(fn: (t: T) => U) => Maybe<U>;
    replace: <U>(u: U) => Maybe<U>;
    apply: <R, U>(mr: IMaybe<R>) => IMaybe<U>;
    discardSelf: <U>(other: IMaybe<U>) => IMaybe<U>;
    discardOther: <U>(other: IMaybe<U>) => this;
    or: (other: IMaybe<T>) => this;
    bind: <U>(fn: (t: T) => IMaybe<U>) => IMaybe<U>;
    and: <U>(other: IMaybe<U>) => IMaybe<U>;
    xor: (other: IMaybe<T>) => IMaybe<T> | Nothing;
    orElse: (getOther: () => IMaybe<T>) => this;
    filter: (predicate: (t: T) => boolean) => IMaybe<T>;
    zip: <U>(other: IMaybe<U>) => IMaybe<Tuple2<T, U>>;
    isJust: boolean;
    isNothing: boolean;
    get: () => T;
    getOr: (fallback: T) => T;
    getOrElse: (getFallback: () => T) => T;
    toString: () => string;
}
export declare class Nothing implements IMaybe<any> {
    private constructor();
    static instance: Nothing;
    map: <U>(fn: (t: any) => U) => this;
    replace: <U>(u: U) => this;
    apply: <R, U>(mr: IMaybe<R>) => this;
    discardSelf: <U>(other: IMaybe<U>) => this;
    discardOther: <U>(other: IMaybe<U>) => this;
    or: <T>(other: IMaybe<T>) => IMaybe<T>;
    bind: <U>(fn: (t: any) => IMaybe<U>) => this;
    and: <U>(other: IMaybe<U>) => this;
    xor: <T>(other: IMaybe<T>) => IMaybe<T>;
    orElse: <T>(getOther: () => IMaybe<T>) => IMaybe<T>;
    filter: (predicate: (t: any) => boolean) => this;
    zip: <U>(other: IMaybe<U>) => this;
    isJust: boolean;
    isNothing: boolean;
    get: () => never;
    getOr: <T>(fallback: T) => T;
    getOrElse: <T>(getFallback: () => T) => T;
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
