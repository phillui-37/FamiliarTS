import { arrayToLazy, range, rangeLazy, strRange, strRangeLazy } from "../../src"

describe('test util/iter', () => {
  test('range', () => {
    expect(range(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
    expect(range(10, 1)).toEqual([])
    expect(range(1, 10, 2)).toEqual([1, 3, 5, 7, 9])
  })

  test('strRange', () => {
    expect(strRange('a', 'z')).toBe('abcdefghijklmnopqrstuvwxyz')
    expect(() => strRange('', 'z')).toThrow(Error)
    expect(() => strRange('a', '')).toThrow(Error)
    expect(strRange('z', 'a')).toBe('')
    expect(strRange('astronaut', 'zeta')).toBe('abcdefghijklmnopqrstuvwxyz')
    expect(strRange('A', 'z')).toBe(String.fromCharCode(...range(65, 123)))
  })

  test('arrayToLazy', () => {
    const gen = arrayToLazy([1,2,3])
    expect(gen.next().value).toBe(1)
    expect(gen.next().value).toBe(2)
    expect(gen.next().value).toBe(3)
    expect(gen.next().done).toBeTruthy()
  })

  test('rangeLazy', () => {
    let gen = rangeLazy(1, 4)
    expect(gen.next().value).toBe(1)
    expect(gen.next().value).toBe(2)
    expect(gen.next().value).toBe(3)
    expect(gen.next().done).toBeTruthy()

    gen = rangeLazy(4, 1)
    expect(gen.next().value).toStrictEqual([])

    gen = rangeLazy(1, 4, 2)
    expect(gen.next().value).toBe(1)
    expect(gen.next().value).toBe(3)
    expect(gen.next().done).toBeTruthy()
  })

  test('strRangeLazy', () => {
    /**
     *     expect(strRange('a', 'z')).toBe('abcdefghijklmnopqrstuvwxyz')
    expect(() => strRange('', 'z')).toThrow(Error)
    expect(() => strRange('a', '')).toThrow(Error)
    expect(strRange('z', 'a')).toBe('')
    expect(strRange('astronaut', 'zeta')).toBe('abcdefghijklmnopqrstuvwxyz')
    expect(strRange('A', 'z')).toBe(String.fromCharCode(...range(65, 123)))
     */
    let gen = strRangeLazy('a', 'd')
    expect(gen.next().value).toBe('a')
    expect(gen.next().value).toBe('b')
    expect(gen.next().value).toBe('c')
    expect(gen.next().value).toBe('d')
    expect(gen.next().done).toBeTruthy()

    expect(() => strRangeLazy('', 'd').next()).toThrow(Error)
    expect(() => strRangeLazy('a', '').next()).toThrow(Error)
    expect(strRangeLazy('z', 'a').next().done).toBeTruthy()
    
    gen = strRangeLazy('abc', 'cba')
    expect(gen.next().value).toBe('a')
    expect(gen.next().value).toBe('b')
    expect(gen.next().value).toBe('c')
    expect(gen.next().done).toBeTruthy()
    
    gen = strRangeLazy('ABC', 'zyx')
    let _str = ''
    for (let s of gen) {
      _str += s
    }
    expect(_str).toBe(String.fromCharCode(...range(65, 123)))
  })
})