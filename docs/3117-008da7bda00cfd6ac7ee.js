"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[3117],{3117:function(e,n,a){a.r(n),n.default='import React from \'react\'\nimport useEmblaCarousel, { EmblaOptionsType } from \'embla-carousel-react\'\nimport ClassNames from \'embla-carousel-class-names\'\nimport imageByIndex from \'../imageByIndex\'\n\ntype PropType = {\n  slides: number[]\n  options?: EmblaOptionsType\n}\n\nconst EmblaCarousel: React.FC<PropType> = (props) => {\n  const { slides, options } = props\n  const [emblaRef] = useEmblaCarousel(options, [ClassNames()])\n\n  return (\n    <div className="embla">\n      <div className="embla__viewport" ref={emblaRef}>\n        <div className="embla__container">\n          {slides.map((index) => (\n            <div className="embla__slide embla__class-names" key={index}>\n              <div className="embla__slide__number">\n                <span>{index + 1}</span>\n              </div>\n              <img\n                className="embla__slide__img"\n                src={imageByIndex(index)}\n                alt="Your alt text"\n              />\n            </div>\n          ))}\n        </div>\n      </div>\n    </div>\n  )\n}\n\nexport default EmblaCarousel\n'}}]);
//# sourceMappingURL=3117-008da7bda00cfd6ac7ee.js.map