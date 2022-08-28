import { Tuple2 } from "../collections/lib";
declare global {
    interface Array<T> {
        all(predicate: (t: T) => boolean): boolean;
        any(predicate: (t: T) => boolean): boolean;
        zip<U>(other: Array<U>): Array<Tuple2<T, U>>;
    }
}
export {};
