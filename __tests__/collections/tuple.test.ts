import { Tuple2, tuple2 } from "../../src"

describe('test tuple create', () => {
    test('tuple2', () => {
        expect(tuple2(1,2).toString()).toStrictEqual(new Tuple2(1,2).toString())
        expect(tuple2(1,2).eq(new Tuple2(1,2))).toBeTruthy()
    })
})