export declare type Eq<T> = {
    eq: (other: T) => boolean;
    ne: (other: T) => boolean;
};
export declare enum Ordering {
    LT = -1,
    EQ = 0,
    GT = 1
}
export declare type Ord<T> = Eq<T> & {
    compare: (other: T) => Ordering;
    lt: (other: T) => boolean;
    le: (other: T) => boolean;
    ge: (other: T) => boolean;
    gt: (other: T) => boolean;
    max: (other: T) => T;
    min: (other: T) => T;
};
export declare enum PrimitiveType {
    Boolean = "boolean",
    Function = "function",
    Number = "number",
    String = "string",
    BigInt = "bigint",
    Object = "object",
    Symbol = "symbol",
    Undefined = "undefined",
    Null = "null",
    Array = "array"
}
