declare global {
    interface String {
        remove(pattern: RegExp | string): String;
    }
}
export {};
