"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[4091],{4091:function(e,n,a){a.r(n),n.default='import React, { useState, useEffect, useCallback } from \'react\'\nimport useEmblaCarousel, { EmblaOptionsType } from \'embla-carousel-react\'\nimport { Thumb } from \'./EmblaCarouselThumbsButton\'\nimport imageByIndex from \'../imageByIndex\'\n \ntype PropType = {\n  slides: number[]\n  options?: EmblaOptionsType\n}\n \nconst EmblaCarousel: React.FC<PropType> = (props) => {\n  const { slides, options } = props\n  const [selectedIndex, setSelectedIndex] = useState(0)\n  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)\n  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({\n    containScroll: \'keepSnaps\',\n    dragFree: true\n  })\n \n  const onThumbClick = useCallback(\n    (index: number) => {\n      if (!emblaMainApi || !emblaThumbsApi) return\n      emblaMainApi.scrollTo(index)\n    },\n    [emblaMainApi, emblaThumbsApi]\n  )\n \n  const onSelect = useCallback(() => {\n    if (!emblaMainApi || !emblaThumbsApi) return\n    setSelectedIndex(emblaMainApi.selectedScrollSnap())\n    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())\n  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])\n \n  useEffect(() => {\n    if (!emblaMainApi) return\n    onSelect()\n    emblaMainApi.on(\'select\', onSelect)\n    emblaMainApi.on(\'reInit\', onSelect)\n  }, [emblaMainApi, onSelect])\n \n  return (\n    <div className="embla">\n      <div className="embla__viewport" ref={emblaMainRef}>\n        <div className="embla__container">\n          {slides.map((index) => (\n            <div className="embla__slide" key={index}>\n              <div className="embla__slide__number">\n                <span>{index + 1}</span>\n              </div>\n              <img\n                className="embla__slide__img"\n                src={imageByIndex(index)}\n                alt="Your alt text"\n              />\n            </div>\n          ))}\n        </div>\n      </div>\n \n      <div className="embla-thumbs">\n        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>\n          <div className="embla-thumbs__container">\n            {slides.map((index) => (\n              <Thumb\n                onClick={() => onThumbClick(index)}\n                selected={index === selectedIndex}\n                index={index}\n                imgSrc={imageByIndex(index)}\n                key={index}\n              />\n            ))}\n          </div>\n        </div>\n      </div>\n    </div>\n  )\n}\n \nexport default EmblaCarousel\n'}}]);
//# sourceMappingURL=4091-63a6051d0e1421f489c7.js.map