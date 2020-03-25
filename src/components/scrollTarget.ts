import { Alignments } from './alignment'
import { Counter } from './counter'
import { Limit } from './limit'
import { Vector1D } from './vector1d'

type Params = {
  align: Alignments
  index: Counter
  loop: boolean
  scrollSnaps: number[]
  contentSize: number
  limit: Limit
  target: Vector1D
}

export type Target = {
  distance: number
  index: number
}

export type ScrollTarget = {
  byIndex: (target: number, direction: number) => Target
  byDistance: (force: number, snap: boolean) => Target
}

export function ScrollTarget(params: Params): ScrollTarget {
  const { loop, limit, scrollSnaps, contentSize } = params
  const { reachedMin, reachedMax, reachedAny } = limit

  function minDistance(d1: number, d2: number): number {
    return Math.abs(d1) < Math.abs(d2) ? d1 : d2
  }

  function findTargetSnap(target: number): Target {
    while (reachedMin(target)) target += contentSize
    while (reachedMax(target)) target -= contentSize

    const ascDiffsToSnaps = scrollSnaps
      .map(scrollSnap => scrollSnap - target)
      .map(diffToSnap => shortestWay(diffToSnap, 0))
      .map((diff, i) => ({ diff, index: i }))
      .sort((d1, d2) => Math.abs(d1.diff) - Math.abs(d2.diff))

    const { index } = ascDiffsToSnaps[0]
    return { index, distance: target }
  }

  function shortestWay(target: number, direction: number): number {
    const t1 = target
    const t2 = target + contentSize
    const t3 = target - contentSize

    if (!loop) return t1
    if (!direction) return minDistance(minDistance(t1, t2), t3)

    const shortest = minDistance(t1, direction === 1 ? t2 : t3)
    return Math.abs(shortest) * direction
  }

  function findTargetIndex(target: number, index: number): number {
    const reachedBound = !loop && reachedAny(target)
    if (!reachedBound) return index

    const { min, max } = params.index
    return reachedMax(target) ? min : max
  }

  function byIndex(index: number, direction: number): Target {
    const diffToSnap = scrollSnaps[index] - params.target.get()
    const distance = shortestWay(diffToSnap, direction)
    return { index, distance }
  }

  function byDistance(distance: number, snap: boolean): Target {
    const target = params.target.get() + distance
    const targetSnap = findTargetSnap(target)
    const targetIndex = findTargetIndex(target, targetSnap.index)
    const index = snap && !distance ? params.index.get() : targetIndex
    const reachedBound = !loop && reachedAny(target)

    if (!snap || reachedBound) return { index, distance }

    const diffToSnap = scrollSnaps[index] - targetSnap.distance
    const snapDistance = distance + shortestWay(diffToSnap, 0)

    return { index, distance: snapDistance }
  }

  const self: ScrollTarget = {
    byDistance,
    byIndex,
  }
  return Object.freeze(self)
}
