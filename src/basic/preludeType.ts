export abstract class Monoid<T> {
    protected constructor(readonly v: T) { }
    abstract mappend(m: Monoid<T>): Monoid<T>
    abstract mempty: T
}

export class NumberMonoid extends Monoid<number> {
    static of = (v: number) => new NumberMonoid(v)
    mappend(m: NumberMonoid): NumberMonoid {
        return NumberMonoid.of(this.v + m.v)
    }
    mempty = 0
}

export class BigIntMonoid extends Monoid<bigint> {
    static of = (v: bigint) => new BigIntMonoid(v)
    mappend(m: BigIntMonoid): BigIntMonoid {
        return BigIntMonoid.of(this.v + m.v)
    }
    mempty = BigInt(0)
}

export class StringMonoid extends Monoid<string> {
    static of = (v: string) => new StringMonoid(v)
    mappend(m: StringMonoid): StringMonoid {
        return StringMonoid.of(this.v + m.v)
    }
    mempty = ''
}

export class ArrayMonoid<T> extends Monoid<T[]> {
    static of = <T>(v: T[]) => new ArrayMonoid<T>(v)
    mappend(m: ArrayMonoid<T>): ArrayMonoid<T> {
        return ArrayMonoid.of([...this.v, ...m.v])
    }
    mempty = []
}

export namespace Monoid {
    export const number = NumberMonoid.of
    export const bigint = BigIntMonoid.of
    export const string = StringMonoid.of
    export const array = ArrayMonoid.of
}