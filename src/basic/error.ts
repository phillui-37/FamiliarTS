export class IndexOutOfBoundError extends Error {
    static of(msg?: string) { return new IndexOutOfBoundError(msg) }
}