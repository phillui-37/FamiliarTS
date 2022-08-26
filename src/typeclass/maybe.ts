type IMaybe = {
  isJust: () => boolean
  isNone: () => boolean
}

export class Just<T> implements IMaybe {
  isJust = () => true
  isNone = () => false
}

export class Nothing implements IMaybe {
  isJust = () => false
  isNone = () => true
}

export type Maybe<T> = Just<T> | Nothing

export function isNothing<T>(m: Maybe<T>): m is Nothing { return m.isNone() }
export function isJust<T>(m: Maybe<T>): m is Just<T> { return m.isJust() }

