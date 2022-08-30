import { Display } from "../../src"

describe('type Display', () => {
  test('isDisplay', () => {
    const fn = Display.isDisplay
    expect(fn({ isDisplay: true })).toBeFalsy()
    expect(fn({ isDisplay: false })).toBeFalsy()
    expect(fn({ isDisplay: true, display: () => { } })).toBeTruthy()
    expect(fn({ isDisplay: false, display: () => { } })).toBeFalsy()
    expect(fn({ isDisplay: true, display: (_: any) => { } })).toBeFalsy()

    expect(fn(undefined)).toBeFalsy()
    expect(fn(null)).toBeFalsy()
    expect(fn(NaN)).toBeFalsy()
    expect(fn({})).toBeFalsy()
    expect(fn([])).toBeFalsy()
    expect(fn('')).toBeFalsy()
    expect(fn(true)).toBeFalsy()
  })

  const fn = Display.display
  test('display(string)', () => {
    expect(fn('test')).toBe('"test"')
    expect(fn('"test"')).toBe('""test""')
  })

  test('display(number)', () => {
    expect(fn(1)).toBe('1')
    expect(fn(NaN)).toBe('NaN')
    expect(fn(.1)).toBe('0.1')
  })

  test('display(boolean)', () => {
    expect(fn(true)).toBe('true')
    expect(fn(false)).toBe('false')
  })

  test('display(object)', () => {
    let obj: Record<string, any> = {test: 1, test2: '2', test3: true}
    expect(fn(obj)).toBe('{test:1,test2:"2",test3:true}')
  })

  test('display(list)', () => {
    let obj: any[] = [1, '2', true]
    expect(fn(obj)).toBe('[1,"2",true]')
  })

  test('display(composite structure)', () => {
    let obj: Record<string, any> = {test:[1,'2',true,{test2: []}]}
    expect(fn(obj)).toBe('{test:[1,"2",true,{test2:[]}]}')
  })
})