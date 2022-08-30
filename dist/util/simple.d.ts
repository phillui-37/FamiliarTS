export declare const flip: <T, U, V>(fn: (t: T, u: U) => V) => (u: U) => (t: T) => V;
export declare const constant: <T>(value: T) => (_: any) => T;
