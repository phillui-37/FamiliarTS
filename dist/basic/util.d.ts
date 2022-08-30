import { Eq, Ord } from "./typing";
import '../stdExt/array';
export declare function isEq<T>(obj: any): obj is Eq<T>;
export declare function isOrd<T>(obj: any): obj is Ord<T>;
