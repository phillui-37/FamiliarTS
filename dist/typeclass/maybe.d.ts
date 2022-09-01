import { Display } from "../basic";
import { Tuple2 } from "../collections";
declare type TNothingCheck<T, R> = ThisType<T> extends Nothing ? ThisType<T> : ThisType<R>;
declare type TJustCheck<T, R> = ThisType<T> extends Nothing ? ThisType<R> : ThisType<T>;
interface IMaybe<T> extends Display {
    isJust: boolean;
    isNothing: boolean;
    get(): ThisType<T> extends Nothing ? never : T;
    getOr(fallback: T): T;
    getOrElse(getFallback: () => T): T;
    map<U>(fn: (t: T) => U): TNothingCheck<T, U>;
    replace<U>(u: U): TNothingCheck<T, U>;
    apply<U>(mr: IMaybe<T>): TNothingCheck<T, T extends ((_: IMaybe<T>) => IMaybe<U>) ? U : never>;
    discardSelf<U>(other: IMaybe<U>): TNothingCheck<T, U>;
    discardOther<U>(other: IMaybe<U>): TJustCheck<T, U>;
    or(other: IMaybe<T>): TNothingCheck<T, T>;
    bind<U>(fn: (t: T) => IMaybe<U>): TNothingCheck<T, U>;
    and<U>(other: IMaybe<U>): TJustCheck<T, U>;
    xor(other: IMaybe<T>): TJustCheck<T, T>;
    orElse(getOther: () => IMaybe<T>): TNothingCheck<T, T>;
    filter(predicate: (t: T) => boolean): TNothingCheck<T, T>;
    zip<U>(other: IMaybe<U>): TNothingCheck<T, Tuple2<T, U>>;
}
export declare class Just<T> implements IMaybe<T> {
    readonly t: T;
    constructor(t: T);
    map: <U>(fn: (t: T) => U) => Maybe<U>;
    replace: <U>(u: U) => Maybe<U>;
    apply: <U>(mr: IMaybe<T>) => Maybe<U>;
    discardSelf: <U>(other: IMaybe<U>) => IMaybe<U>;
    discardOther: <U>(other: IMaybe<U>) => this;
    or: (other: IMaybe<T>) => this;
    bind: <U>(fn: (t: T) => IMaybe<U>) => IMaybe<U>;
    and: <U>(other: IMaybe<U>) => IMaybe<U>;
    xor: (other: IMaybe<T>) => Maybe<T>;
    orElse: (getOther: () => IMaybe<T>) => this;
    filter: (predicate: (t: T) => boolean) => Maybe<T>;
    zip: <U>(other: IMaybe<U>) => Maybe<Tuple2<T, U>>;
    isJust: boolean;
    isNothing: boolean;
    get: () => T;
    getOr: (fallback: T) => T;
    getOrElse: (getFallback: () => T) => T;
    isDisplay: boolean;
    display: () => string;
}
export declare class Nothing implements IMaybe<any> {
    private constructor();
    static readonly instance: Nothing;
    map: <U>(fn: (t: any) => U) => this;
    replace: <U>(u: U) => this;
    apply: <U>(mr: IMaybe<any>) => this;
    discardSelf: <U>(other: IMaybe<U>) => this;
    discardOther: <U>(other: IMaybe<U>) => this;
    or: <T>(other: IMaybe<T>) => IMaybe<T>;
    bind: <U>(fn: (t: any) => IMaybe<U>) => this;
    and: <U>(other: IMaybe<U>) => this;
    xor: <T>(other: IMaybe<T>) => IMaybe<T>;
    orElse: <T>(getOther: () => IMaybe<T>) => IMaybe<T>;
    filter: <T>(predicate: (t: T) => boolean) => this;
    zip: <U>(other: IMaybe<U>) => this;
    isJust: boolean;
    isNothing: boolean;
    get: () => never;
    getOr: <T>(fallback: T) => T;
    getOrElse: <T>(getFallback: () => T) => T;
    isDisplay: boolean;
    display: () => string;
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
