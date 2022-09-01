import '../../src/stdExt'
import { eq, ge, isType, PrimitiveType, tuple2 } from '../../src'

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

  test('zip', () => {
    expect(['a', 'b', 'c'].zip([1,2,3])).toEqual([tuple2('a', 1), tuple2('b', 2), tuple2('c', 3)])
    expect([1,2,3].zip(['a', 'b'])).toEqual([tuple2(1, 'a'), tuple2(2, 'b')])
    expect([1,2,3].zip([])).toEqual([])
  })

  test('first', () => {
    expect([1,2,3].first(x => x < 3)).toBe(1)
    expect([1,2,3].first(x => x > 4)).toBe(undefined)
  })

  test('last', () => {
    expect([1,2,3].last(x => x < 3)).toBe(2)
    expect([1,2,3].last(x => x > 4)).toBe(undefined)
  })
})