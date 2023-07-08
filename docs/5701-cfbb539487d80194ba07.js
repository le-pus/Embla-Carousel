"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[5701],{5701:function(n,e,o){o.r(e),e.default="import EmblaCarousel, {\n  EmblaCarouselType,\n  EmblaOptionsType\n} from 'embla-carousel'\n \nconst CIRCLE_DEGREES = 360\nconst WHEEL_ITEM_SIZE = 30\nconst WHEEL_ITEM_COUNT = 18\nconst WHEEL_ITEMS_IN_VIEW = 4\n \nconst WHEEL_ITEM_RADIUS = CIRCLE_DEGREES / WHEEL_ITEM_COUNT\nconst IN_VIEW_DEGREES = WHEEL_ITEM_RADIUS * WHEEL_ITEMS_IN_VIEW\nconst WHEEL_RADIUS = Math.round(\n  WHEEL_ITEM_SIZE / 2 / Math.tan(Math.PI / WHEEL_ITEM_COUNT)\n)\n \nconst slideIsInView = (wheelLocation: number, slidePosition: number): boolean =>\n  Math.abs(wheelLocation - slidePosition) < IN_VIEW_DEGREES\n \nconst rotateSlide = (\n  emblaApi: EmblaCarouselType,\n  index: number,\n  loop: boolean,\n  slideCount: number,\n  totalRadius: number\n): void => {\n  const slideNode = emblaApi.slideNodes()[index]\n  const wheelLocation = emblaApi.scrollProgress() * totalRadius\n  const positionDefault = emblaApi.scrollSnapList()[index] * totalRadius\n  const positionLoopStart = positionDefault + totalRadius\n  const positionLoopEnd = positionDefault - totalRadius\n \n  let inView = false\n  let angle = index * -WHEEL_ITEM_RADIUS\n \n  if (slideIsInView(wheelLocation, positionDefault)) {\n    inView = true\n  }\n \n  if (loop && slideIsInView(wheelLocation, positionLoopEnd)) {\n    inView = true\n    angle = -CIRCLE_DEGREES + (slideCount - index) * WHEEL_ITEM_RADIUS\n  }\n \n  if (loop && slideIsInView(wheelLocation, positionLoopStart)) {\n    inView = true\n    angle = -(totalRadius % CIRCLE_DEGREES) - index * WHEEL_ITEM_RADIUS\n  }\n \n  if (inView) {\n    slideNode.style.opacity = '1'\n    slideNode.style.transform = `rotateX(${angle}deg) translateZ(${WHEEL_RADIUS}px)`\n  } else {\n    slideNode.style.opacity = '0'\n    slideNode.style.transform = 'none'\n  }\n}\n \nconst rotateSlides = (\n  emblaApi: EmblaCarouselType,\n  loop: boolean,\n  slideCount: number,\n  totalRadius: number\n): (() => void) => {\n  return (): void => {\n    for (let index = 0; index < slideCount; index += 1) {\n      rotateSlide(emblaApi, index, loop, slideCount, totalRadius)\n    }\n  }\n}\n \nconst rotateWheel = (\n  emblaApi: EmblaCarouselType,\n  slideCount: number,\n  rotationOffset: number\n): (() => void) => {\n  return (): void => {\n    const rotation = slideCount * WHEEL_ITEM_RADIUS - rotationOffset\n    const wheelRotation = rotation * emblaApi.scrollProgress()\n    emblaApi.containerNode().style.transform = `translateZ(${WHEEL_RADIUS}px) rotateX(${wheelRotation}deg)`\n  }\n}\n \nconst inactivateEmblaTransform = (emblaApi: EmblaCarouselType): void => {\n  const { translate, slideLooper } = emblaApi.internalEngine()\n  translate.clear()\n  translate.toggleActive(false)\n  slideLooper.loopPoints.forEach(({ translate }) => {\n    translate.clear()\n    translate.toggleActive(false)\n  })\n}\n \nexport const setupIosPicker = (\n  iosPickerNode: HTMLElement,\n  options: EmblaOptionsType\n): EmblaCarouselType => {\n  const emblaApi = EmblaCarousel(iosPickerNode, options)\n  const rootNode = emblaApi.rootNode()\n  const slideCount = emblaApi.slideNodes().length\n  const {\n    options: { loop }\n  } = emblaApi.internalEngine()\n  const totalRadius = slideCount * WHEEL_ITEM_RADIUS\n  const rotationOffset = loop ? 0 : WHEEL_ITEM_RADIUS\n  const rotateWheelFunc = rotateWheel(emblaApi, slideCount, rotationOffset)\n  const rotateSlidesFunc = rotateSlides(emblaApi, loop, slideCount, totalRadius)\n  const readRootNodeSize = () => rootNode.getBoundingClientRect().height\n  const rotate = (): void => {\n    rotateWheelFunc()\n    rotateSlidesFunc()\n  }\n  let rootNodeSize = readRootNodeSize()\n \n  emblaApi.slideNodes().forEach((slideNode) => {\n    slideNode.style.position = 'absolute'\n  })\n \n  emblaApi.on('pointerUp', () => {\n    const { scrollTo, target, location } = emblaApi.internalEngine()\n    const diffToTarget = target.get() - location.get()\n    const factor = Math.abs(diffToTarget) < WHEEL_ITEM_SIZE / 2.5 ? 10 : 0.1\n    const distance = diffToTarget * factor\n    scrollTo.distance(distance, true)\n  })\n \n  emblaApi.on('scroll', rotate)\n \n  const resizeObserver = new ResizeObserver(() => {\n    const newRootNodeSize = readRootNodeSize()\n \n    if (newRootNodeSize !== rootNodeSize) {\n      rootNodeSize = newRootNodeSize\n \n      emblaApi.containerNode().style.transform = 'none'\n      emblaApi.slideNodes().forEach((slideNode) => {\n        slideNode.style.transform = 'none'\n        slideNode.style.position = 'static'\n      })\n \n      emblaApi.reInit()\n      inactivateEmblaTransform(emblaApi)\n \n      emblaApi.slideNodes().forEach((slideNode) => {\n        slideNode.style.position = 'absolute'\n      })\n      rotate()\n    }\n  })\n \n  resizeObserver.observe(rootNode)\n \n  inactivateEmblaTransform(emblaApi)\n  rotate()\n \n  return emblaApi\n}\n"}}]);
//# sourceMappingURL=5701-cfbb539487d80194ba07.js.map