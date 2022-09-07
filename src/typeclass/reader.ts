import { compose, id } from "../util"

export class Reader<E, T> {
    constructor(readonly read: (env: E) => T) {}
    map = <U>(fn: (t: T) => U) => new Reader<E,U>(compose(fn, this.read))
    flatMap = <U>(fn: (t: T) => Reader<E, U>) => new Reader<E, U>(env => fn(this.read(env)).read(env))
    local = (fn: (t: E) => E) => new Reader<E, T>(env => this.read(fn(env)))
}

export function runReader<E,T>(reader: Reader<E, T>): (e: E) => T {
    return e => reader.read(e)
}