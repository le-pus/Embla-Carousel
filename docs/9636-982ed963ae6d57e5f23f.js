"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[9636],{9636:function(n,e,l){l.r(e),e.default="import React, { useCallback, useEffect, useRef, useState } from 'react';\nimport useEmblaCarousel from 'embla-carousel-react';\nimport imageByIndex from '../imageByIndex';\n\nconst mockApiCall = (minWait, maxWait, callback) => {\n    const min = Math.ceil(minWait);\n    const max = Math.floor(maxWait);\n    const wait = Math.floor(Math.random() * (max - min + 1)) + min;\n    setTimeout(callback, wait);\n};\n\nconst EmblaCarousel = (props) => {\n    const { options, slides: propSlides } = props;\n    const scrollListenerRef = useRef(() => undefined);\n    const listenForScrollRef = useRef(true);\n    const hasMoreToLoadRef = useRef(true);\n    const [slides, setSlides] = useState(propSlides);\n    const [hasMoreToLoad, setHasMoreToLoad] = useState(true);\n    const [loadingMore, setLoadingMore] = useState(false);\n    \n    const [emblaRef, emblaApi] = useEmblaCarousel({\n        ...options,\n        watchSlides: (emblaApi) => {\n            const reloadEmbla = () => {\n                const oldEngine = emblaApi.internalEngine();\n                \n                emblaApi.reInit();\n                const newEngine = emblaApi.internalEngine();\n                const copyEngineModules = [\n                    'location',\n                    'target',\n                    'scrollBody'\n                ];\n                copyEngineModules.forEach((engineModule) => {\n                    Object.assign(newEngine[engineModule], oldEngine[engineModule]);\n                });\n                \n                newEngine.translate.to(oldEngine.location.get());\n                const { index } = newEngine.scrollTarget.byDistance(0, false);\n                newEngine.index.set(index);\n                newEngine.animation.start();\n                \n                setLoadingMore(false);\n                listenForScrollRef.current = true;\n            };\n            \n            const reloadAfterPointerUp = () => {\n                emblaApi.off('pointerUp', reloadAfterPointerUp);\n                reloadEmbla();\n            };\n            \n            const engine = emblaApi.internalEngine();\n            \n            if (hasMoreToLoadRef.current && engine.dragHandler.pointerDown()) {\n                const boundsActive = engine.limit.reachedMax(engine.target.get());\n                engine.scrollBounds.toggleActive(boundsActive);\n                emblaApi.on('pointerUp', reloadAfterPointerUp);\n            }\n            else {\n                reloadEmbla();\n            }\n        }\n    });\n    \n    const onScroll = useCallback((emblaApi) => {\n        if (!listenForScrollRef.current)\n            return;\n        \n        setLoadingMore((loadingMore) => {\n            const lastSlide = emblaApi.slideNodes().length - 1;\n            const lastSlideInView = emblaApi.slidesInView().includes(lastSlide);\n            const loadMore = !loadingMore && lastSlideInView;\n            \n            if (loadMore) {\n                listenForScrollRef.current = false;\n                \n                mockApiCall(1000, 2000, () => {\n                    setSlides((currentSlides) => {\n                        if (currentSlides.length === 20) {\n                            setHasMoreToLoad(false);\n                            emblaApi.off('scroll', scrollListenerRef.current);\n                            return currentSlides;\n                        }\n                        const newSlideCount = currentSlides.length + 5;\n                        return Array.from(Array(newSlideCount).keys());\n                    });\n                });\n            }\n            \n            return loadingMore || lastSlideInView;\n        });\n    }, []);\n    \n    const addScrollListener = useCallback((emblaApi) => {\n        scrollListenerRef.current = () => onScroll(emblaApi);\n        emblaApi.on('scroll', scrollListenerRef.current);\n    }, [onScroll]);\n    \n    useEffect(() => {\n        if (!emblaApi)\n            return;\n        addScrollListener(emblaApi);\n        \n        const onResize = () => emblaApi.reInit();\n        window.addEventListener('resize', onResize);\n        emblaApi.on('destroy', () => window.removeEventListener('resize', onResize));\n    }, [emblaApi, addScrollListener]);\n    \n    useEffect(() => {\n        hasMoreToLoadRef.current = hasMoreToLoad;\n    }, [hasMoreToLoad]);\n    \n    return (<div className=\"embla\">\n      <div className=\"embla__viewport\" ref={emblaRef}>\n        <div className=\"embla__container\">\n          {slides.map((index) => (<div className=\"embla__slide\" key={index}>\n              <div className=\"embla__slide__number\">\n                <span>{index + 1}</span>\n              </div>\n              <img className=\"embla__slide__img\" src={imageByIndex(index)} alt=\"Your alt text\"/>\n            </div>))}\n          {hasMoreToLoad && (<div className={'embla-infinite-scroll'.concat(loadingMore ? ' embla-infinite-scroll--loading-more' : '')}>\n              <span className=\"embla-infinite-scroll__spinner\"/>\n            </div>)}\n        </div>\n      </div>\n    </div>);\n};\n\nexport default EmblaCarousel;\n"}}]);
//# sourceMappingURL=9636-982ed963ae6d57e5f23f.js.map