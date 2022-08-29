declare global {
  interface String {
    remove(pattern: RegExp | string): String
  }
}

String.prototype.remove = function (pattern) {
  return this.replaceAll(pattern, '')
}

export { }