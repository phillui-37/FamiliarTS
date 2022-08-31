import { range, strRange } from "../../src"

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
})