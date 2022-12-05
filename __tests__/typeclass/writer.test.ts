import { Monoid, range, tuple2, Writer } from '../../src'

describe('try logging with writer', () => {
    type LogEntry = string
    test('write/read logs', () => {
        const monoid = (s?: string) => Monoid.array<LogEntry>(s ? [s] : undefined)
        let writer = new Writer(0, monoid())
        const output = (s: string) => writer.tell([s])

        writer = output("start")
        let x = range(1, 1E3).reduce((a, b) => a + b)
        writer = output(`${x}`)
        writer = output('done')
        expect(writer.exec()).toEqual(['start', `${x}`, 'done'])
        expect(writer.run().display()).toBe(tuple2(0, ['start', `${x}`, 'done']).display())

        let writer2 = writer.map(x => `${x}`)
        expect(writer2.exec()).toEqual(writer.exec())
        writer2 = writer2.flatMap(x => Writer.of(`${x} for writer2`, ['writer2 flatmap']))
        expect(writer2.exec()).toEqual([...writer.exec(), 'writer2 flatmap'])

        let writer3 = writer.mapWriter(t2 => {
            return tuple2(
                (t2._1 & 1) === 0,
                Monoid.string(t2._2.v.reduce((acc, item) => {
                    return acc ? `${acc},${item}` : item
                }, ''))
            )
        })
        expect(writer3.exec()).toBe(`start,${x},done`)

        const writer4 = writer.writer(tuple2(10, Monoid.array<LogEntry>(['test'])))
        expect(writer4.exec()).toEqual(['start', `${x}`, 'done', 'test'])
    })
})