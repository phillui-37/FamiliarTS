declare global {
  interface String {
    test(): void
  }
}

String.prototype.test = function() {
  let v = String(this)
  console.log(v)
}

export {}