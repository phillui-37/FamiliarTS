export declare type Display = {
  isDisplay: boolean
  display(): string
}

export namespace Display {
  export const isDisplay = (obj: any): obj is Display => {
    if (obj === undefined || obj === null) return false
    return obj.isDisplay === true && typeof obj.display === 'function' && obj.display.length === 0
  }

  /**
   * generic toString handler
   */
  export const display = (obj: any): string => {
    if (Array.isArray(obj))
      return `[${obj.reduce((acc, item) => acc ? `${acc},${display(item)}` : display(item), '')}]`
    if (typeof obj === 'string')
      return `"${obj}"`
    if (isDisplay(obj))
      return obj.display()
    if (typeof obj === 'object')
      return `{${Object.entries(obj).reduce((acc, [k, v]) => acc ? `${acc},${k}:${display(v)}` : `${k}:${display(v)}`, '')}}`
    return `${obj}`
  }
}