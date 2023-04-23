import { AnimationType } from './Animation'
import { CounterType } from './Counter'
import { DirectionType } from './Direction'
import { DragTrackerType, PointerEventType } from './DragTracker'
import { EventHandlerType } from './EventHandler'
import { AxisType } from './Axis'
import { EventStore } from './EventStore'
import { ScrollBodyType } from './ScrollBody'
import { ScrollTargetType } from './ScrollTarget'
import { ScrollToType } from './ScrollTo'
import { Vector1D, Vector1DType } from './Vector1d'
import { deltaAbs, factorAbs, mathAbs, mathSign } from './utils'
import { PercentOfViewType } from './PercentOfView'
import { Limit } from './Limit'

export type DragHandlerType = {
  init: () => void
  destroy: () => void
  pointerDown: () => boolean
}

export function DragHandler(
  axis: AxisType,
  direction: DirectionType,
  rootNode: HTMLElement,
  target: Vector1DType,
  dragTracker: DragTrackerType,
  location: Vector1DType,
  animation: AnimationType,
  scrollTo: ScrollToType,
  scrollBody: ScrollBodyType,
  scrollTarget: ScrollTargetType,
  index: CounterType,
  eventHandler: EventHandlerType,
  percentOfView: PercentOfViewType,
  dragFree: boolean,
  skipSnaps: boolean,
  baseFriction: number,
): DragHandlerType {
  const { cross: crossAxis } = axis
  const focusNodes = ['INPUT', 'SELECT', 'TEXTAREA']
  const nonPassiveEvent = { passive: false }
  const dragStartPoint = Vector1D(0)
  const initEvents = EventStore()
  const dragEvents = EventStore()
  const goToNextThreshold = Limit(50, 225).constrain(percentOfView.measure(20))
  const snapForceBoost = { mouse: 300, touch: 400 }
  const freeForceBoost = { mouse: 500, touch: 600 }
  const baseSpeed = dragFree ? 43 : 25

  let startScroll = 0
  let startCross = 0
  let pointerIsDown = false
  let preventScroll = false
  let preventClick = false
  let isMouse = false

  function init(): void {
    const node = rootNode
    initEvents
      .add(node, 'dragstart', (evt) => evt.preventDefault(), nonPassiveEvent)
      .add(node, 'touchmove', () => undefined, nonPassiveEvent)
      .add(node, 'touchend', () => undefined)
      .add(node, 'touchstart', down)
      .add(node, 'mousedown', down)
      .add(node, 'touchcancel', up)
      .add(node, 'contextmenu', up)
      .add(node, 'click', click, true)
  }

  function destroy(): void {
    initEvents.clear()
    dragEvents.clear()
  }

  function addDragEvents(): void {
    const node = isMouse ? document : rootNode
    dragEvents
      .add(node, 'touchmove', move, nonPassiveEvent)
      .add(node, 'touchend', up)
      .add(node, 'mousemove', move, nonPassiveEvent)
      .add(node, 'mouseup', up)
  }

  function isFocusNode(node: Element): boolean {
    const nodeName = node.nodeName || ''
    return focusNodes.includes(nodeName)
  }

  function forceBoost(): number {
    const boost = dragFree ? freeForceBoost : snapForceBoost
    const type = isMouse ? 'mouse' : 'touch'
    return boost[type]
  }

  function allowedForce(force: number, targetChanged: boolean): number {
    const next = index.clone().add(mathSign(force) * -1)
    const baseForce = scrollTarget.byDistance(force, !dragFree).distance

    if (dragFree || mathAbs(force) < goToNextThreshold) return baseForce
    if (skipSnaps && targetChanged) return baseForce * 0.5

    return scrollTarget.byIndex(next.get(), 0).distance
  }

  function down(evt: PointerEventType): void {
    isMouse = !dragTracker.isTouchEvent(evt)
    if (isMouse && (evt as MouseEvent).button !== 0) return
    if (isFocusNode(evt.target as Element)) return

    const isMoving = deltaAbs(target.get(), location.get()) >= 2
    const clearPreventClick = isMouse || !isMoving

    pointerIsDown = true
    dragTracker.pointerDown(evt)
    dragStartPoint.set(target)
    scrollBody.useFriction(0).useDuration(0)
    target.set(location)
    addDragEvents()
    startScroll = dragTracker.readPoint(evt)
    startCross = dragTracker.readPoint(evt, crossAxis)
    eventHandler.emit('pointerDown')

    if (clearPreventClick) preventClick = false
  }

  function move(evt: PointerEventType): void {
    if (!preventScroll && !isMouse) {
      if (!evt.cancelable) return up(evt)
      const lastScroll = dragTracker.readPoint(evt)
      const lastCross = dragTracker.readPoint(evt, crossAxis)
      const diffScroll = deltaAbs(lastScroll, startScroll)
      const diffCross = deltaAbs(lastCross, startCross)
      preventScroll = diffScroll > diffCross
      if (!preventScroll && !preventClick) return up(evt)
    }
    const diff = dragTracker.pointerMove(evt)
    if (!preventClick && diff) preventClick = true

    scrollBody.useFriction(0.3).useDuration(1)
    animation.start()
    target.add(direction.apply(diff))
    evt.preventDefault()
  }

  function up(evt: PointerEventType): void {
    const currentLocation = scrollTarget.byDistance(0, false)
    const targetChanged = currentLocation.index !== index.get()
    const rawForce = dragTracker.pointerUp(evt) * forceBoost()
    const force = allowedForce(direction.apply(rawForce), targetChanged)
    const forceFactor = factorAbs(rawForce, force)
    const isMoving = deltaAbs(target.get(), dragStartPoint.get()) >= 0.5
    const speed = baseSpeed - 10 * forceFactor
    const friction = baseFriction + forceFactor / 50

    if (isMoving && !isMouse) preventClick = true
    preventScroll = false
    pointerIsDown = false
    dragEvents.clear()
    scrollBody.useDuration(speed).useFriction(friction)
    scrollTo.distance(force, !dragFree)
    isMouse = false
    eventHandler.emit('pointerUp')
  }

  function click(evt: MouseEvent): void {
    if (preventClick) {
      evt.stopPropagation()
      evt.preventDefault()
    }
  }

  function pointerDown(): boolean {
    return pointerIsDown
  }

  const self: DragHandlerType = {
    init,
    pointerDown,
    destroy,
  }
  return self
}
