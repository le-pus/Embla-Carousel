"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[9165],{9165:function(n,e,i){i.r(e),e.default="\nexport const mockApiCall = (minWait, maxWait, callback) => {\n    const min = Math.ceil(minWait);\n    const max = Math.floor(maxWait);\n    const wait = Math.floor(Math.random() * (max - min + 1)) + min;\n    setTimeout(callback, wait);\n};\n\nexport const createHTMLFromString = (htmlString) => {\n    const div = document.createElement('div');\n    div.innerHTML = htmlString.trim();\n    return div.firstChild;\n};\n\nexport const SLIDE_TEMPLATE = `\n<div class=\"embla__slide\">\n  <div class=\"embla__slide__number\">\n    <span>__SLIDE_NUMBER__</span>\n  </div>\n  <img\n    class=\"embla__slide__img\"\n    src=\"src/images/slide-__IMG_NUMBER__.jpg\"\n    alt=\"Your alt text\"\n  />\n</div>\n`;\n\nexport const setupInfiniteScroll = (emblaApi, loadMoreCallback) => {\n    const loadingNode = (emblaApi.containerNode().querySelector('.embla-infinite-scroll'));\n    let hasMoreToLoad = true;\n    let slideCount = 0;\n    \n    const isLastSlideInView = () => {\n        const lastSlide = emblaApi.slideNodes().length - 1;\n        return emblaApi.slidesInView().indexOf(lastSlide) !== -1;\n    };\n    \n    const deactivateBounds = () => {\n        if (slideCount === emblaApi.slideNodes().length - 1)\n            return;\n        const engine = emblaApi.internalEngine();\n        const boundsActive = engine.limit.reachedMax(engine.target.get());\n        engine.scrollBounds.toggleActive(boundsActive);\n    };\n    \n    const reloadEngine = () => {\n        const oldEngine = emblaApi.internalEngine();\n        const pointerDown = oldEngine.dragHandler.pointerDown();\n        if (hasMoreToLoad && pointerDown)\n            return;\n        if (hasMoreToLoad && slideCount === emblaApi.slideNodes().length - 1)\n            return;\n        if (!hasMoreToLoad && !isLastSlideInView() && pointerDown)\n            return;\n        \n        emblaApi.reInit();\n        const newEngine = emblaApi.internalEngine();\n        const copyEngineModules = [\n            'scrollBody',\n            'location',\n            'target',\n        ];\n        copyEngineModules.forEach((engineModule) => Object.assign(newEngine[engineModule], oldEngine[engineModule]));\n        \n        newEngine.translate.to(oldEngine.location);\n        const { index } = newEngine.scrollTarget.byDistance(0, false);\n        newEngine.index.set(index);\n        newEngine.animation.start();\n        \n        if (!hasMoreToLoad)\n            removeInfiniteScroll();\n        else\n            emblaApi.on('scroll', onScroll);\n    };\n    \n    const removeLoadingSlide = () => {\n        const container = emblaApi.containerNode();\n        const lastSlide = container.querySelector('.embla-infinite-scroll');\n        if (lastSlide)\n            container.removeChild(lastSlide);\n    };\n    \n    const addMoreSlides = (newSlides) => {\n        const fragment = document.createDocumentFragment();\n        newSlides.forEach((slide) => fragment.appendChild(slide));\n        fragment.appendChild(loadingNode);\n        slideCount += newSlides.length;\n        emblaApi.containerNode().appendChild(fragment);\n        loadingNode.classList.remove('embla-infinite-scroll--loading-more');\n        deactivateBounds();\n    };\n    \n    const loadMore = (newSlides) => {\n        hasMoreToLoad = !!newSlides;\n        removeLoadingSlide();\n        if (newSlides)\n            addMoreSlides(newSlides);\n        reloadEngine();\n    };\n    \n    const onScroll = () => {\n        if (!isLastSlideInView())\n            return;\n        emblaApi.off('scroll', onScroll);\n        loadingNode.classList.add('embla-infinite-scroll--loading-more');\n        loadMoreCallback(loadMore, () => loadMore(), slideCount);\n    };\n    \n    const addInfiniteScroll = () => {\n        emblaApi.on('pointerUp', reloadEngine);\n        emblaApi.on('scroll', onScroll);\n        slideCount = emblaApi.slideNodes().length - 1;\n    };\n    \n    const removeInfiniteScroll = () => {\n        emblaApi.off('pointerUp', reloadEngine);\n        emblaApi.off('scroll', onScroll);\n    };\n    \n    return addInfiniteScroll;\n};\n"}}]);
//# sourceMappingURL=9165-3cb4518578402e8c0bf6.js.map