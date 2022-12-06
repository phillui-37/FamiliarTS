import { Tuple10, tuple10, Tuple2, tuple2, Tuple3, tuple3, Tuple4, tuple4, Tuple5, tuple5, Tuple6, tuple6, Tuple7, tuple7, tuple8, Tuple8, tuple9, Tuple9 } from "../../src"

describe('test tuple create', () => {
    test('tuple2', () => {
        expect(tuple2(1, 2).toString()).toBe(new Tuple2(1, 2).toString())
    })
    test('tuple3', () => {
        expect(tuple3(1, 'a', true).toString()).toBe(new Tuple3(1, 'a', true).toString())
    })
    test('tuple4', () => {
        expect(tuple4(1, 'a', true, .1).toString()).toBe(new Tuple4(1, 'a', true, .1).toString())
    })
    test('tuple5', () => {
        expect(tuple5(1, 'a', true, .1, NaN).toString()).toBe(new Tuple5(1, 'a', true, .1, NaN).toString())
    })
    test('tuple6', () => {
        expect(tuple6(1, 'a', true, .1, NaN, undefined).toString()).toBe(new Tuple6(1, 'a', true, .1, NaN, undefined).toString())
    })
    test('tuple7', () => {
        expect(tuple7(1, 'a', true, .1, NaN, undefined, null).toString()).toBe(new Tuple7(1, 'a', true, .1, NaN, undefined, null).toString())
    })
    test('tuple8', () => {
        expect(tuple8(1, 'a', true, .1, NaN, undefined, null, /test/).toString()).toBe(new Tuple8(1, 'a', true, .1, NaN, undefined, null, /test/).toString())
    })
    test('tuple9', () => {
        expect(tuple9(1, 'a', true, .1, NaN, undefined, null, /test/, () => undefined).toString()).toBe(new Tuple9(1, 'a', true, .1, NaN, undefined, null, /test/, () => undefined).toString())
    })
    test('tuple10', () => {
        expect(tuple10(1, 'a', true, [], NaN, undefined, null, /test/, () => undefined, {}).toString()).toBe(new Tuple10(1, 'a', true, [], NaN, undefined, null, /test/, () => undefined, {}).toString())
    })
})

describe('test tuple eq', () => {
    // NaN, instance, closure, object, array will fail here
    test('tuple2', () => {
        expect(tuple2(1, 2).eq(new Tuple2(1, 2))).toBeTruthy()
    })
    test('tuple3', () => {
        expect(tuple3(1, 'a', true).eq(new Tuple3(1, 'a', true))).toBeTruthy()
    })
    test('tuple4', () => {
        expect(tuple4(1, 'a', true, .1).eq(new Tuple4(1, 'a', true, .1))).toBeTruthy()
    })
    test('tuple5', () => {
        expect(tuple5(1, 'a', true, .1, false).eq(new Tuple5(1, 'a', true, .1, false))).toBeTruthy()
    })
    test('tuple6', () => {
        expect(tuple6(1, 'a', true, .1, false, undefined).eq(new Tuple6(1, 'a', true, .1, false, undefined))).toBeTruthy()
    })
    test('tuple7', () => {
        expect(tuple7(1, 'a', true, .1, false, undefined, null).eq(new Tuple7(1, 'a', true, .1, false, undefined, null))).toBeTruthy()
    })
    test('tuple8', () => {
        expect(tuple8(1, 'a', true, .1, false, undefined, null, 1E10).eq(new Tuple8(1, 'a', true, .1, false, undefined, null, 1E10))).toBeTruthy()
    })
    const fn = () => undefined
    test('tuple9', () => {
        expect(tuple9(1, 'a', true, .1, false, undefined, null, 1E10, fn).eq(new Tuple9(1, 'a', true, .1, false, undefined, null, 1E10, fn))).toBeTruthy()
    })
    test('tuple10', () => {
        expect(
            tuple10(1, 'a', true, JSON.stringify([]), false, undefined, null, 1E10, fn, JSON.stringify({}))
                .eq(new Tuple10(1, 'a', true, JSON.stringify([]), false, undefined, null, 1E10, fn, JSON.stringify({})))
        ).toBeTruthy()
    })
})
