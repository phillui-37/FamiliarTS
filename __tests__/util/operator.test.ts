import { isType, PrimitiveType } from "../../src"

describe('test util/operator', () =>{
  // basic operator will not be tested as their functionality is obvious
  test('isType', () => {
    expect(isType(PrimitiveType.Array)([])).toBeTruthy()
    expect(isType(PrimitiveType.Array)({})).toBeFalsy()
    expect(isType(PrimitiveType.Array)('')).toBeFalsy()
    expect(isType(PrimitiveType.Null)(null)).toBeTruthy()
    expect(isType(PrimitiveType.Null)(undefined)).toBeFalsy()
    // js primitive type will not be checked...
  })
})