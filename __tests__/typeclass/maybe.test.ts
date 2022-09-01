import { constant, Just, just, Maybe, Nothing, nothing, tuple2 } from '../../src'

describe('create', () => {
  test('of', () => {
    const fn = Maybe.of
    // nothing, is a singleton, can be check equality directly
    expect(fn(undefined)).toBe(nothing)
    expect(fn(null)).toBe(nothing)
    expect(fn(nothing).display()).toBe(just(nothing).display())

    // just
    expect(fn(1).display()).toBe(just(1).display())
    expect(fn('a').display()).toBe(just('a').display())
    expect(fn(true).display()).toBe(just(true).display())
    expect(fn({}).display()).toBe(just({}).display())
    expect(fn([]).display()).toBe(just([]).display())
  })
  test('new', () => {
    // expect(new Nothing()) // directly disabled by tsc
    expect(new Just(1).display()).toBe(just(1).display())
    expect(new Just(nothing).display()).toBe(just(nothing).display())
    expect(new Just('a').display()).toBe(just('a').display())
    expect(new Just(true).display()).toBe(just(true).display())
    expect(new Just({}).display()).toBe(just({}).display())
    expect(new Just([]).display()).toBe(just([]).display())
  })
})

describe('type check', () => {
  test('Maybe function', () => {
    expect(Maybe.isNothing(nothing)).toBeTruthy()
    expect(Maybe.isNothing(just(1))).toBeFalsy()
    expect(Maybe.isJust(nothing)).toBeFalsy()
    expect(Maybe.isJust(just(1))).toBeTruthy()
  })
  test('method', () => {
    expect(nothing.isNothing).toBeTruthy()
    expect(nothing.isJust).toBeFalsy()
    expect(just(1).isNothing).toBeFalsy()
    expect(just(1).isJust).toBeTruthy()
  })
})

describe('method test', () => {
  test('map', () => {
    // just
    expect(just(1).map(x => x + 1).display()).toBe(just(2).display())
    expect(just(1).map(x => `${x}`).display()).toBe(just('1').display())
    expect(just(1).map(x => `${x}`).display()).not.toBe(just(1).display())

    // nothing
    expect(nothing.map(constant(3)).display()).toBe(nothing.display())
  })

  test('replace', () => {
    // just
    expect(just(1).replace(2).display()).toBe(just(2).display())
    expect(just(1).replace('1').display()).toBe(just('1').display())

    // nothing
    expect(nothing.replace(1).display()).toBe(nothing.display())
  })

  test('discardSelf', () => {
    expect(just(1).discardSelf(just('')).display()).toBe(just('').display())
    expect(just(1).discardSelf(nothing).display()).toBe(nothing.display())
    expect(nothing.discardSelf(just('')).display()).toBe(nothing.display())    
  })

  test('discardOther', () => {
    expect(just(1).discardOther(just('')).display()).toBe(just(1).display())
    expect(just(1).discardOther(nothing).display()).toBe(just(1).display())
    expect(nothing.discardOther(just('')).display()).toBe(nothing.display())
  })

  test('or', () => {
    expect(just(1).or(just(2)).display()).toBe(just(1).display())
    expect(just(1).or(nothing).display()).toBe(just(1).display())
    expect(nothing.or(just(2)).display()).toBe(just(2).display())
  })

  test('bind', () => {
    expect(just(1).bind(n => just(n+2)).display()).toBe(just(3).display())
    expect(just(1).bind(constant(nothing)).display()).toBe(nothing.display())
    expect(nothing.bind(n => just(n+2)).display()).toBe(nothing.display())
  })

  test('and', () => {
    expect(just(1).and(just('')).display()).toBe(just('').display())
    expect(just(1).and(nothing).display()).toBe(nothing.display())
    expect(nothing.and(just('')).display()).toBe(nothing.display())
  })

  test('xor', () => {
    expect(just(1).xor(just(2)).display()).toBe(nothing.display())
    expect(just(1).xor(nothing).display()).toBe(just(1).display())
    expect(nothing.xor(nothing).display()).toBe(nothing.display())
    expect(nothing.xor(just(1)).display()).toBe(just(1).display())
  })

  test('orElse', () => {
    expect(just(1).orElse(() => just(2)).display()).toBe(just(1).display())
    expect(just(1).orElse(() => nothing).display()).toBe(just(1).display())
    expect(nothing.orElse(() => just(1)).display()).toBe(just(1).display())
    expect(nothing.orElse(() => nothing).display()).toBe(nothing.display())
  })

  test('filter', () => {
    expect(just(1).filter(x => x === 1).display()).toBe(just(1).display())
    expect(just(1).filter(constant(false)).display()).toBe(nothing.display())
    expect(nothing.filter(constant(true)).display()).toBe(nothing.display())
  })

  test('zip', () => {
    expect(just(1).zip(just('')).display()).toBe(just(tuple2(1, '')).display())
    expect(just(1).zip(nothing).display()).toBe(nothing.display())
    expect(nothing.zip(just(1)).display()).toBe(nothing.display())
  })

  test('get', () => {
    expect(just(1).get()).toBe(1)
    expect(() => nothing.get()).toThrow(TypeError)
  })

  test('getOr', () => {
    expect(just(1).getOr(2)).toBe(1)
    expect(nothing.getOr(1)).toBe(1)
  })

  test('getOrElse', () => {
    expect(just(1).getOrElse(() => 2)).toBe(1)
    expect(nothing.getOrElse(() => 1)).toBe(1)
  })
})