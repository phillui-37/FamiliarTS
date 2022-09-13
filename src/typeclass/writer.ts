import { Monoid, TMonoidBase } from "../basic";
import { tuple2, Tuple2 } from "../collections";

/**
 * T: output, which is a monoid
 * A: result
 */
export class Writer<T extends TMonoidBase, A> {
    constructor(readonly a: A, readonly w: Monoid<T>) {}
    static of<T extends TMonoidBase, A>(a: A, w: T) {
        return new Writer(a, Monoid.toMonoid(w) as unknown as Monoid<T>)
    }
    run(): Tuple2<A, Monoid<T>> { return tuple2(this.a, this.w) }
    exec(): T {return this.w.v}
    map<B>(fn: (_: A) => B): Writer<T, B> { return new Writer(fn(this.a), this.w) }
    flatMap<B>(fn: (_: A) => Writer<T, B>): Writer<T, B> {
        const tmp = fn(this.a).run()
        return new Writer(tmp._1, this.w.mappend(tmp._2))
    }
    mapWriter<W extends TMonoidBase, B>(fn: (t2: Tuple2<A, Monoid<T>>) => Tuple2<B, Monoid<W>>): Writer<W, B> {
        const tmp = fn(this.run())
        return new Writer(tmp._1, tmp._2)
    }
    tell = (w: T) => new Writer(this.a, this.w.mappend(Monoid.toMonoid(w) as unknown as Monoid<T>))
    writer = (action: Tuple2<A, Monoid<T>>) => {
        return new Writer(action._1, this.w.mappend(action._2))
    }
}
