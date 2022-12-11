"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[2506],{2506:function(e,r,s){s.r(r),r.default="import { EmblaCarouselType } from 'embla-carousel'\n \nexport const setupProgressBar = (\n  emblaApi: EmblaCarouselType,\n  progressNode: HTMLElement,\n): {\n  applyProgress: () => void\n  removeProgress: () => void\n} => {\n  const applyProgress = (): void => {\n    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()))\n    progressNode.style.transform = `translateX(${progress * 100}%)`\n  }\n \n  const removeProgress = (): void => {\n    progressNode.removeAttribute('style')\n  }\n \n  return {\n    applyProgress,\n    removeProgress,\n  }\n}\n"}}]);
//# sourceMappingURL=2506-85f301ebc1800a3af0ec.js.map