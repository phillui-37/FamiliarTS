import { Display } from "./display"

export abstract class Monoid<T> implements Display {
    protected constructor(readonly v: T) { }
    isDisplay = true
    abstract display(): string
    abstract mappend(m: Monoid<T>): Monoid<T>
    abstract mempty: T
}

export class NumberMonoid extends Monoid<number> {
    display(): string {
        return this.v.toString()
    }
    static of = (v?: number):Monoid<number> => new NumberMonoid(v ?? 0)
    mappend(m: NumberMonoid) {
        return NumberMonoid.of(this.v + m.v)
    }
    mempty = 0
}

export class BigIntMonoid extends Monoid<bigint> {
    display(): string {
        return this.v.toString()
    }
    static of = (v?: bigint): Monoid<bigint> => new BigIntMonoid(v ?? BigInt(0))
    mappend(m: BigIntMonoid) {
        return BigIntMonoid.of(this.v + m.v)
    }
    mempty = BigInt(0)
}

export class StringMonoid extends Monoid<string> {
    display(): string {
        return this.v
    }
    static of = (v?: string): Monoid<string> => new StringMonoid(v ?? '')
    mappend(m: StringMonoid) {
        return StringMonoid.of(this.v + m.v)
    }
    mempty = ''
}

export class ArrayMonoid<T> extends Monoid<T[]> {
    display(): string {
        return Display.display(this.v)
    }
    static of = <T>(v?: T[]): Monoid<T[]> => new ArrayMonoid<T>(v ?? [])
    mappend(m: ArrayMonoid<T>) {
        return ArrayMonoid.of([...this.v, ...m.v])
    }
    mempty = []
}

export type TMonoidBase = number | string | bigint | any[]
export type TMonoid<T extends TMonoidBase> = T extends number
    ? Monoid<number>
    : T extends bigint
    ? Monoid<bigint>
    : T extends string
    ? Monoid<string>
    : T extends any[]
    ? Monoid<any[]>
    : never

export namespace Monoid {
    export const number = NumberMonoid.of
    export const bigint = BigIntMonoid.of
    export const string = StringMonoid.of
    export const array = ArrayMonoid.of
    export const isMonoid = (obj: any): obj is Monoid<any> => {
        const t = typeof obj
        if (t === 'bigint' || t === 'number' || t === 'string' || Array.isArray(obj)) return true
        return t === 'object' && 'mappend' in obj && 'mempty' in obj
    }
    export const toMonoid = <T extends number | string | bigint | Array<any>>(obj: T|Monoid<T>): TMonoid<T> => {
        if (Array.isArray(obj))
            // @ts-ignore
            return ArrayMonoid.of(obj)
        switch (typeof obj) {
            case 'bigint':
                // @ts-ignore
                return BigIntMonoid.of(obj)
            case 'number':
                // @ts-ignore
                return NumberMonoid.of(obj)
            case 'string':
                // @ts-ignore
                return StringMonoid.of(obj)
            default:
                // @ts-ignore
                if (isMonoid(obj)) return obj
                throw TypeError(`${obj} not a suitable monoid type`)
        }
    }
}