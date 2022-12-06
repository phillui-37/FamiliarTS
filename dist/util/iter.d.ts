export declare const range: (start: number, end: number, step?: number) => number[];
export declare const strRange: (start: string, end: string, step?: number) => string;
export declare function arrayToLazy<T>(ls: T[]): Generator<T, T[] | undefined, undefined>;
export declare function rangeLazy(start: number, end: number, step?: number): Generator<number, number[] | undefined, undefined>;
export declare function strRangeLazy(start: string, end: string, step?: number): Generator<string, string | undefined, undefined>;
