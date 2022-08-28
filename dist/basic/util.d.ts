import { Eq, Ord } from "./typing";
export declare function isEq<T extends Eq<T>>(obj: any): obj is Eq<T>;
export declare function isOrd<T extends Ord<T>>(obj: any): obj is Ord<T>;
