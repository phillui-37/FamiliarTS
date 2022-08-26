declare type IMaybe = {
    isJust: () => boolean;
    isNone: () => boolean;
};
export declare class Just<T> implements IMaybe {
    isJust: () => boolean;
    isNone: () => boolean;
}
export declare class Nothing implements IMaybe {
    isJust: () => boolean;
    isNone: () => boolean;
}
export declare type Maybe<T> = Just<T> | Nothing;
export declare function isNothing<T>(m: Maybe<T>): m is Nothing;
export declare function isJust<T>(m: Maybe<T>): m is Just<T>;
export {};
