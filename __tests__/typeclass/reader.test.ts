import {Reader, runReader} from '../../src'

// example from hackage

/// https://hackage.haskell.org/package/mtl-2.3/docs/Control-Monad-Reader.html#g:4
test('simple reader usage', () => {
    type Bindings = Record<string, number>

    const sampleBindings = {
        count: 3,
        "1": 1,
        b: 2
    }

    const lookupVar = (name: string) => (bindings: Bindings) => name in bindings ? bindings[name] : 0

    const calc_isCountCorrect = new Reader<Bindings, boolean>(bindings => {
        const count = lookupVar('count')(bindings)
        return count === Object.keys(bindings).length
    })

    const isCountCorrect = (bindings: Bindings) => runReader(calc_isCountCorrect)(bindings)

    expect(isCountCorrect(sampleBindings)).toBe(true)
})

/// https://hackage.haskell.org/package/mtl-2.3/docs/Control-Monad-Reader.html#g:5
test("modifying reader content with local", () => {
    const calculateContent = new Reader<string, number>(content => content.length)
    const calculateModifiedContentLen = calculateContent.local(s => `Prefix ${s}`)

    const raw = '12345'
    expect(runReader(calculateModifiedContentLen)(raw)).toBe(12)
    expect(runReader(calculateContent)(raw)).toBe(5)
})
