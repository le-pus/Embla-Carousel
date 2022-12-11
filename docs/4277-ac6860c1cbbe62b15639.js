"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[4277],{4277:function(e,n,l){l.r(n),n.default="\nconst TWEEN_FACTOR = 3;\n\nconst numberWithinRange = (number, min, max) => Math.min(Math.max(number, min), max);\n\nconst calculateTweenValuesScale = (emblaApi) => {\n    const engine = emblaApi.internalEngine();\n    const scrollProgress = emblaApi.scrollProgress();\n    \n    return emblaApi.scrollSnapList().map((scrollSnap, index) => {\n        if (!emblaApi.slidesInView().includes(index))\n            return 0;\n        let diffToTarget = scrollSnap - scrollProgress;\n        \n        if (engine.options.loop) {\n            engine.slideLooper.loopPoints.forEach((loopItem) => {\n                const target = loopItem.target().get();\n                if (index === loopItem.index && target !== 0) {\n                    const sign = Math.sign(target);\n                    if (sign === -1)\n                        diffToTarget = scrollSnap - (1 + scrollProgress);\n                    if (sign === 1)\n                        diffToTarget = scrollSnap + (1 - scrollProgress);\n                }\n            });\n        }\n        const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR);\n        return numberWithinRange(tweenValue, 0, 1);\n    });\n};\n\nexport const setupTweenScale = (emblaApi) => {\n    const tweenNodes = (emblaApi\n        .slideNodes()\n        .map((slideNode) => slideNode.querySelector('.embla__scale')));\n    \n    const applyTweenScale = () => {\n        const tweenValues = calculateTweenValuesScale(emblaApi);\n        tweenValues.forEach((tweenValue, index) => {\n            tweenNodes[index].style.transform = `scale(${tweenValue})`;\n        });\n    };\n    \n    const removeTweenScale = () => {\n        tweenNodes.forEach((slide) => slide.removeAttribute('style'));\n    };\n    \n    return {\n        applyTweenScale,\n        removeTweenScale,\n    };\n};\n"}}]);
//# sourceMappingURL=4277-ac6860c1cbbe62b15639.js.map