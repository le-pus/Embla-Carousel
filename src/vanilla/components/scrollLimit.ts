import { Limit } from './limit'
import { arrayLast } from './utils'

type Params = {
  contentSize: number
  loop: boolean
}

export type ScrollLimit = {
  measure: (scrollSnaps: number[]) => Limit
}

export function ScrollLimit(params: Params): ScrollLimit {
  const { contentSize, loop } = params

  function measure(scrollSnaps: number[]): Limit {
    const startSnap = scrollSnaps[0]
    const endSnap = arrayLast(scrollSnaps)
    const min = loop ? startSnap - contentSize : endSnap
    const max = startSnap
    return Limit({ min, max })
  }

  const self: ScrollLimit = {
    measure,
  }
  return self
}
