import '../../src'

describe('test string extension function', () => {
  test('replace all', () => {
    expect('test,test,test'.remove(',')).toBe('testtesttest')
  })
})