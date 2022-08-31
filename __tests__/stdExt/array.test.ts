import '../../src'
import { eq, ge, isType, PrimitiveType } from '../../src'

describe('test array extension function', () => {
  test('all', () => {
    expect([true,true,false].all(eq(true))).toBeFalsy()
    expect([true, true, true].all(eq(true))).toBeTruthy()
    expect([0,1,2].all(ge(0))).toBeTruthy()
  })

  test('any', () => {
    expect([true,true,false].any(eq(true))).toBeTruthy()
    expect([false,false,false].any(eq(true))).toBeFalsy()
    expect(['a',1,true,null].any(isType(PrimitiveType.Null))).toBeTruthy()
  })
})