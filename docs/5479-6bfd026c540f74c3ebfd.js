"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[5479],{5479:function(n,e,s){s.r(e),e.default='import React, { useCallback, useEffect, useState } from \'react\'\nimport useEmblaCarousel, { EmblaOptionsType } from \'embla-carousel-react\'\nimport { flushSync } from \'react-dom\'\nimport imageByIndex from \'../imageByIndex\'\n\nconst TWEEN_FACTOR = 4.2\n\nconst numberWithinRange = (number: number, min: number, max: number): number =>\n  Math.min(Math.max(number, min), max)\n\ntype PropType = {\n  slides: number[]\n  options?: EmblaOptionsType\n}\n\nconst EmblaCarousel: React.FC<PropType> = (props) => {\n  const { slides, options } = props\n  const [emblaRef, emblaApi] = useEmblaCarousel(options)\n  const [tweenValues, setTweenValues] = useState<number[]>([])\n\n  const onScroll = useCallback(() => {\n    if (!emblaApi) return\n\n    const engine = emblaApi.internalEngine()\n    const scrollProgress = emblaApi.scrollProgress()\n\n    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {\n      let diffToTarget = scrollSnap - scrollProgress\n\n      if (engine.options.loop) {\n        engine.slideLooper.loopPoints.forEach((loopItem) => {\n          const target = loopItem.target()\n          if (index === loopItem.index && target !== 0) {\n            const sign = Math.sign(target)\n            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress)\n            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress)\n          }\n        })\n      }\n      const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR)\n      return numberWithinRange(tweenValue, 0, 1)\n    })\n    setTweenValues(styles)\n  }, [emblaApi, setTweenValues])\n\n  useEffect(() => {\n    if (!emblaApi) return\n\n    onScroll()\n    emblaApi.on(\'scroll\', () => {\n      flushSync(() => onScroll())\n    })\n    emblaApi.on(\'reInit\', onScroll)\n  }, [emblaApi, onScroll])\n\n  return (\n    <div className="embla">\n      <div className="embla__viewport" ref={emblaRef}>\n        <div className="embla__container">\n          {slides.map((index) => (\n            <div\n              className="embla__slide"\n              key={index}\n              style={{\n                ...(tweenValues.length && { opacity: tweenValues[index] })\n              }}\n            >\n              <div className="embla__slide__number">\n                <span>{index + 1}</span>\n              </div>\n              <img\n                className="embla__slide__img"\n                src={imageByIndex(index)}\n                alt="Your alt text"\n              />\n            </div>\n          ))}\n        </div>\n      </div>\n    </div>\n  )\n}\n\nexport default EmblaCarousel\n'}}]);
//# sourceMappingURL=5479-6bfd026c540f74c3ebfd.js.map