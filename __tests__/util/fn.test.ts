import { compose, flip, not, pipe } from "../../src"

describe('test util/fn', () => {
  test('pipe', () => {
    const fn = pipe(
      [
        (x: number) => x + 1,
        (x: number) => x / 2,
        (x: number) => Math.pow(10, x),
      ].reduce((acc, item) => pipe(acc, item)),
      (x: number) => `${x}`
    ) // cannot use reduce directly if return type varies...
    expect(fn(1)).toBe('10')
    expect(fn(3)).toBe('100')
  })

  test('compose', () => {
    const fn = compose(
      (x: number) => `${x}`,
      [
        (x: number) => x + 1,
        (x: number) => x / 2,
        (x: number) => Math.pow(10, x),
      ].reduce((acc, item) => compose(acc, item)),
    ) // cannot use reduce directly if return type varies...
    expect(fn(2)).toBe('51')
    expect(fn(3)).toBe('501')
  })

  test('not', () => {
    const fn = not(x => x !== 1)
    expect(fn(1)).toBeTruthy()
    expect(fn(2)).toBeFalsy()
  })

  test('flip', () => {
    const fn = flip((x: number, y: number) => x - y)
    expect(fn(1)(2)).toBe(1)
    expect(fn(2)(1)).toBe(-1)
  })
})