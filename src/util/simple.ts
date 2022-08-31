export const constant = <T>(value: T) => (_: any) => value 
export const id = <T>(t: T) => t