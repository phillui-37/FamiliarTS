import { Left, Right, Either, constant } from '../../src'

describe('create', () => {
    test('left', () => {
        expect(Either.left(undefined).display()).toBe(new Left(undefined).display())
        expect(Either.left(null).display()).toBe(new Left(null).display())
        expect(Either.left(Either.right(1)).display()).toBe(new Left(new Right(1)).display())
        const checker = <T>(value: T) => expect(Either.left(value).display()).toBe(new Left(value).display())
        checker(1)
        checker('a')
        checker(true)
        checker({})
        checker([])
    })
    test('right', () => {
        expect(Either.right(undefined).display()).toBe(new Right(undefined).display())
        expect(Either.right(null).display()).toBe(new Right(null).display())
        expect(Either.right(Either.left(1)).display()).toBe(new Right(new Left(1)).display())
        const checker = <T>(value: T) => expect(Either.right(value).display()).toBe(new Right(value).display())
        checker(1)
        checker('a')
        checker(true)
        checker({})
        checker([])
    })
})

describe('type check', () => {
    test('Either function', () => {
        expect(Either.isLeft(Either.left(1))).toBeTruthy()
        expect(Either.isLeft(Either.right(1))).toBeFalsy()
        expect(Either.isRight(Either.left(1))).toBeFalsy()
        expect(Either.isRight(Either.right(1))).toBeTruthy()
    })
    test('method', () => {
        expect(Either.left(1).isLeft).toBeTruthy()
        expect(Either.left(1).isRight).toBeFalsy()
        expect(Either.right(1).isLeft).toBeFalsy()
        expect(Either.right(1).isRight).toBeTruthy()
    })
})

describe('method test', () => {
    test('mapRight', () => {
        expect(Either.left(1).mapRight(x => `${x + 1}`).display()).toBe(Either.left(1).display())
        expect(Either.right(1).mapRight(x => `${x + 1}`).display()).toBe(Either.right("2").display())
    })
    test('mapRightOr', () => {
        expect(Either.left(1).mapRightOr('test', x => `${x + 1}`)).toBe('test')
        expect(Either.right(1).mapRightOr('test', x => `${x + 1}`)).toBe('2')
    })
    test('mapRightOrElse', () => {
        expect(Either.left(1).mapRightOrElse(constant('test'), x => `${x + 1}`)).toBe('test')
        expect(Either.right(1).mapRightOrElse(constant('test'), x => `${x + 1}`)).toBe('2')
    })
    test('expectRight', () => {
        expect(() => Either.left(1).expectRight('test')).toThrowError('test')
        expect(Either.right(1).expectRight('test')).toBe(1)
    })
    test('getRight', () => {
        expect(() => Either.left(1).getRight()).toThrowError()
        expect(Either.right(1).getRight()).toBe(1)
    })
    test('getRightOr', () => {
        expect(Either.left(1).getRightOr('test')).toBe('test')
        expect(Either.right(1).getRightOr(2)).toBe(1) // have type check, cannot use other type
    })
    test('getRightOrElse', () => {
        expect(Either.left(1).getRightOrElse(constant('test'))).toBe('test')
        expect(Either.right(1).getRightOrElse(constant(3))).toBe(1)
    })
    test('andRight', () => {
        expect(Either.left(1).andRight(Either.left(2)).display()).toBe(Either.left(1).display())
        expect(Either.right(1).andRight(Either.left(2)).display()).toBe(Either.left(2).display())
    })
    test('flatMapRight', () => {
        expect(Either.left(1).flatMapRight(constant(Either.left(2))).display()).toBe(Either.left(1).display())
        expect(Either.right(1).flatMapRight(constant(Either.left(2))).display()).toBe(Either.left(2).display())
    })
    test('orRight', () => {
        expect(Either.left(1).orRight(Either.left(2)).display()).toBe(Either.left(2).display())
        expect(Either.right(1).orRight(Either.left(2)).display()).toBe(Either.right(1).display())
    })
    test('orRightElse', () => {
        expect(Either.left(1).orRightElse(x => Either.right(`${x + 1}`)).display()).toBe(Either.right('2').display()) // cannot change left type
        expect(Either.right(1).orRightElse(x => Either.right(x + 1)).display()).toBe(Either.right(1).display())
    })
    test('mapLeft', () => {
        expect(Either.left(1).mapLeft(x => `${x + 1}`).display()).toBe(Either.left('2').display())
        expect(Either.right(1).mapLeft(x => `${x + 1}`).display()).toBe(Either.right(1).display())
    })
    test('mapLeftOr', () => {
        expect(Either.left(1).mapLeftOr("test", constant('no'))).toBe('no')
        expect(Either.right(1).mapLeftOr('test', constant('no'))).toBe('test')
    })
    test('mapLeftOrElse', () => {
        expect(Either.left(1).mapLeftOrElse(x => x === 1, x => x !== 1)).toBeFalsy()
        expect(Either.right(1).mapLeftOrElse(x => x === 1, x => x !== 1)).toBeTruthy()
    })
    test('expectLeft', () => {
        expect(Either.left(1).expectLeft('test')).toBe(1)
        expect(() => Either.right(1).expectLeft('test')).toThrowError('test')
    })
    test('getLeft', () => {
        expect(Either.left(1).getLeft()).toBe(1)
        expect(() => Either.right(1).getLeft()).toThrowError()
    })
    test('getLeftOr', () => {
        expect(Either.left(1).getLeftOr(2)).toBe(1)
        expect(Either.right(1).getLeftOr(2)).toBe(2)
    })
    test('getLeftOrElse', () => {
        expect(Either.left(1).getLeftOrElse(x => x + 1)).toBe(1)
        expect(Either.right('2').getLeftOrElse(x => parseInt(x) - 1)).toBe(1)
    })
    test('andLeft', () => {
        expect(Either.left(1).andLeft(Either.right(2)).display()).toBe(Either.right(2).display())
        expect(Either.right(1).andLeft(Either.right(2)).display()).toBe(Either.right(1).display())
    })
    test('flatMapLeft', () => {
        expect(Either.left(1).flatMapLeft(x => Either.right(`${x + 1}`)).display()).toBe(Either.right('2').display())
        expect(Either.right(1).flatMapLeft(x => Either.right(x + 1)).display()).toBe(Either.right(1).display())
    })
    test('orLeft', () => {
        expect(Either.left(1).orLeft(Either.right('test')).display()).toBe(Either.left(1).display())
        expect(Either.right(1).orLeft(Either.left('test')).display()).toBe(Either.left('test').display())
    })
    test('orLeftElse', () => {
        expect(Either.left(1).orLeftElse(constant(Either.right('test'))).display()).toBe(Either.left(1).display())
        expect(Either.right(1).orLeftElse(constant(Either.left('test'))).display()).toBe(Either.left('test').display())
    })
})