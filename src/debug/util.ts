export const trace = <T>(logging: (t: T) => void = console.log) => (value: T) => {
  logging(value)
  return value
}