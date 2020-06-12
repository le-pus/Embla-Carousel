import { Axis, AxisOption } from './axis'
import { PxToPercent } from './pxToPercent'
import { Vector1D } from './vector1d'

type Params = {
  axis: Axis
  pxToPercent: PxToPercent
}

export type DragTracker = {
  pointerDown: (evt: Event) => number
  pointerMove: (evt: Event) => number
  pointerUp: () => number
  readPoint: (evt: any, axis: AxisOption) => Vector1D
}

export function DragTracker(params: Params): DragTracker {
  const { axis, pxToPercent } = params
  const { scroll: scrollAxis } = axis
  const coords = { x: 'clientX', y: 'clientY' }
  const startDrag = Vector1D(0)
  const diffDrag = Vector1D(0)
  const lastDrag = Vector1D(0)
  const pointValue = Vector1D(0)
  const trackInterval = 10
  let trackPoints: number[] = []
  let trackTime = new Date().getTime()
  let isMouse = false

  function readPoint(evt: any, type: AxisOption): Vector1D {
    isMouse = !evt.touches
    const c = coords[type]
    const value = isMouse ? evt[c] : evt.touches[0][c]
    return pointValue.set(value)
  }

  function pointerDown(evt: Event): number {
    const point = readPoint(evt, scrollAxis)
    startDrag.set(point)
    lastDrag.set(point)
    return pxToPercent.measure(startDrag.get())
  }

  function pointerMove(evt: Event): number {
    const point = readPoint(evt, scrollAxis)
    const time2 = new Date().getTime()
    const time1 = trackTime

    if (time2 - time1 >= trackInterval) {
      trackPoints.push(point.get())
      trackTime = time2
    }

    diffDrag.set(point).subtract(lastDrag)
    lastDrag.set(point)
    return pxToPercent.measure(diffDrag.get())
  }

  function pointerUp(): number {
    const currentPoint = lastDrag.get()
    const trackLength = isMouse ? 5 : 4
    const point = trackPoints
      .slice(-trackLength)
      .map(trackPoint => currentPoint - trackPoint)
      .sort((p1, p2) => {
        return Math.abs(p1) < Math.abs(p2) ? 1 : -1
      })[0]

    lastDrag.set(point || 0)
    trackPoints = []
    return pxToPercent.measure(lastDrag.get())
  }

  const self: DragTracker = {
    pointerDown,
    pointerMove,
    pointerUp,
    readPoint,
  }
  return self
}
