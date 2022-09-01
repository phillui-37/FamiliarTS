import { PrimitiveType } from "../basic";
export declare const eq: <T>(a: T) => (b: T) => boolean;
export declare const ne: <T>(a: T) => (b: T) => boolean;
export declare const gt: <T>(a: T) => (b: T) => boolean;
export declare const ge: <T>(a: T) => (b: T) => boolean;
export declare const le: <T>(a: T) => (b: T) => boolean;
export declare const lt: <T>(a: T) => (b: T) => boolean;
export declare const isType: (expectedType: PrimitiveType) => <T>(t: T) => boolean;
