"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[5929],{2253:function(e,t,n){n.r(t),n.d(t,{Head:function(){return y},default:function(){return A}});var l=n(5392),a=n(2784),o=n(1316),r=n(6854),c=n(4234);function i(e){const t=Object.assign({h1:"h1",p:"p",strong:"strong",a:"a",hr:"hr",h2:"h2",div:"div",code:"code",pre:"pre",h3:"h3"},(0,l.ah)(),e.components),{Admonition:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Admonition",!0),a.createElement(a.Fragment,null,a.createElement(t.h1,null,"Plugins"),"\n",a.createElement(t.p,null,"It's possible to ",a.createElement(t.strong,null,"extend")," Embla carousel with additional features using ",a.createElement(t.strong,null,"plugins"),". The complete list of official plugins can be found ",a.createElement(t.a,{href:"/plugins/"},"here"),"."),"\n",a.createElement(t.hr),"\n",a.createElement(t.h2,{id:"installation",style:{position:"relative"}},a.createElement(t.a,{href:"#installation","aria-label":"installation permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"Installation"),"\n",a.createElement(t.p,null,"All ",a.createElement(t.strong,null,"official plugins")," are separate ",a.createElement(t.strong,null,"NPM packages"),". They're all ",a.createElement(t.strong,null,"prefixed")," with ",a.createElement(t.code,null,"embla-carousel")," followed by its ",a.createElement(t.strong,null,"unique")," plugin ",a.createElement(t.strong,null,"name"),". For example, the ",a.createElement(t.code,null,"Autoplay")," plugin is installed like so:"),"\n",a.createElement(o.m,{groupId:c.JP.GROUP_ID},a.createElement(r.L,{tab:c.JP.TABS.CDN},a.createElement(t.pre,null,a.createElement(t.code,{className:"language-html"},'<script src="https://unpkg.com/embla-carousel-autoplay/embla-carousel-autoplay.umd.js"><\/script>\n'))),a.createElement(r.L,{tab:c.JP.TABS.NPM},a.createElement(t.pre,null,a.createElement(t.code,{className:"language-shell"},"npm install embla-carousel-autoplay --save\n"))),a.createElement(r.L,{tab:c.JP.TABS.YARN},a.createElement(t.pre,null,a.createElement(t.code,{className:"language-shell"},"yarn add embla-carousel-autoplay\n")))),"\n",a.createElement(t.h2,{id:"usage",style:{position:"relative"}},a.createElement(t.a,{href:"#usage","aria-label":"usage permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"Usage"),"\n",a.createElement(t.p,null,"The Embla Carousel ",a.createElement(t.strong,null,"constructor")," accepts an ",a.createElement(t.strong,null,"array of plugins"),". Each plugin might have its own ",a.createElement(t.a,{href:"/api/plugins/#constructor-options"},"options"),", ",a.createElement(t.a,{href:"/api/plugins/#calling-methods"},"methods")," and ",a.createElement(t.a,{href:"/api/plugins/#adding-event-listeners"},"events"),"."),"\n",a.createElement(t.h3,{id:"adding-a-plugin",style:{position:"relative"}},a.createElement(t.a,{href:"#adding-a-plugin","aria-label":"adding a plugin permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"Adding a plugin"),"\n",a.createElement(t.p,null,"The constructor plugin array is the default way of providing plugins to Embla Carousel. In the following example, the ",a.createElement(t.a,{href:"/plugins/autoplay/"},"Autoplay")," plugin is added to the carousel:"),"\n",a.createElement(o.m,{groupId:c.c9.GROUP_ID},a.createElement(r.L,{tab:c.c9.TABS.VANILLA},a.createElement(t.pre,null,a.createElement(t.code,{className:"language-js___highlight={2,4}"},"import EmblaCarousel from 'embla-carousel'\nimport Autoplay from 'embla-carousel-autoplay'\n\nconst embla = EmblaCarousel(emblaNode, { loop: true }, [Autoplay()])\n"))),a.createElement(r.L,{tab:c.c9.TABS.REACT},a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx___highlight={2,5}"},"import useEmblaCarousel from 'embla-carousel-react'\nimport Autoplay from 'embla-carousel-autoplay'\n\nexport function EmblaCarousel() {\n  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])\n  // ...\n}\n"))),a.createElement(r.L,{tab:c.c9.TABS.VUE},a.createElement(t.pre,null,a.createElement(t.code,{className:"language-html___highlight={3,5}"},"<script setup>\n  import emblaCarouselVue from 'embla-carousel-vue'\n  import Autoplay from 'embla-carousel-autoplay'\n\n  const [emblaNode] = emblaCarouselVue({ loop: true }, [Autoplay()])\n  // ...\n<\/script>\n")))),"\n",a.createElement(n,null,a.createElement(t.p,null,"Note that it's possible to ",a.createElement(t.strong,null,"change plugins")," passed to the Embla Carousel\nconstructor ",a.createElement(t.strong,null,"after initialization")," with the ",a.createElement(t.a,{href:"/api/methods/#reinit"},"reInit"),"\nmethod.")),"\n",a.createElement(t.h3,{id:"constructor-options",style:{position:"relative"}},a.createElement(t.a,{href:"#constructor-options","aria-label":"constructor options permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"Constructor options"),"\n",a.createElement(t.p,null,"Plugins have their own specific ",a.createElement(t.strong,null,"options")," which is the first argument of the plugin constructor. This allows for configuring the plugin to your liking:"),"\n",a.createElement(o.m,{groupId:c.c9.GROUP_ID},a.createElement(r.L,{tab:c.c9.TABS.VANILLA},a.createElement(t.pre,null,a.createElement(t.code,{className:"language-js___highlight={5}"},"import EmblaCarousel from 'embla-carousel'\nimport Autoplay from 'embla-carousel-autoplay'\n\nconst embla = EmblaCarousel(emblaNode, { loop: true }, [\n  Autoplay({ delay: 4000 })\n])\n"))),a.createElement(r.L,{tab:c.c9.TABS.REACT},a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx___highlight={6}"},"import useEmblaCarousel from 'embla-carousel-react'\nimport Autoplay from 'embla-carousel-autoplay'\n\nexport function EmblaCarousel() {\n  const [emblaRef] = useEmblaCarousel({ loop: true }, [\n    Autoplay({ delay: 4000 })\n  ])\n  // ...\n}\n"))),a.createElement(r.L,{tab:c.c9.TABS.VUE},a.createElement(t.pre,null,a.createElement(t.code,{className:"language-html___highlight={6}"},"<script setup>\n  import emblaCarouselVue from 'embla-carousel-vue'\n  import Autoplay from 'embla-carousel-autoplay'\n\n  const [emblaNode] = emblaCarouselVue({ loop: true }, [\n    Autoplay({ delay: 4000 })\n  ])\n  // ...\n<\/script>\n")))),"\n",a.createElement(t.h3,{id:"global-options",style:{position:"relative"}},a.createElement(t.a,{href:"#global-options","aria-label":"global options permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"Global options"),"\n",a.createElement(t.p,null,"All ",a.createElement(t.a,{href:"/plugins/"},"official plugins")," allows you to set ",a.createElement(t.strong,null,"global options")," that will be applied to all instances. This allows for overriding the default plugin options with your own:"),"\n",a.createElement(o.m,{groupId:c.c9.GROUP_ID},a.createElement(r.L,{tab:c.c9.TABS.VANILLA},a.createElement(t.pre,null,a.createElement(t.code,{className:"language-js___highlight={4}"},"import EmblaCarousel from 'embla-carousel'\nimport Autoplay from 'embla-carousel-autoplay'\n\nAutoplay.globalOptions = { delay: 4000 }\n\nconst embla = EmblaCarousel(emblaNode, { loop: true }, [Autoplay()])\n"))),a.createElement(r.L,{tab:c.c9.TABS.REACT},a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx___highlight={4}"},"import useEmblaCarousel from 'embla-carousel-react'\nimport Autoplay from 'embla-carousel-autoplay'\n\nAutoplay.globalOptions = { delay: 4000 }\n\nexport function EmblaCarousel() {\n  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])\n  // ...\n}\n"))),a.createElement(r.L,{tab:c.c9.TABS.VUE},a.createElement(t.pre,null,a.createElement(t.code,{className:"language-html___highlight={5}"},"<script setup>\n  import emblaCarouselVue from 'embla-carousel-vue'\n  import Autoplay from 'embla-carousel-autoplay'\n\n  Autoplay.globalOptions = { delay: 4000 }\n\n  const [emblaNode] = emblaCarouselVue({ loop: true }, [Autoplay()])\n  // ...\n<\/script>\n")))),"\n",a.createElement(n,{type:"warning"},a.createElement(t.p,null,"Make sure to assign global options ",a.createElement(t.strong,null,"before")," initializing any carousel and\n",a.createElement(t.strong,null,"only assign it once"),". Re-assigning global options might lead to confusing\ncode and unexpected behaviour.")),"\n",a.createElement(t.h3,{id:"calling-methods",style:{position:"relative"}},a.createElement(t.a,{href:"#calling-methods","aria-label":"calling methods permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"Calling methods"),"\n",a.createElement(t.p,null,"Additionally, some plugins expose their own ",a.createElement(t.strong,null,"API methods"),". You can access plugin methods by calling the ",a.createElement(t.a,{href:"/api/methods/#plugins"},"plugin")," method like demonstrated below:"),"\n",a.createElement(o.m,{groupId:c.c9.GROUP_ID},a.createElement(r.L,{tab:c.c9.TABS.VANILLA},a.createElement(t.pre,null,a.createElement(t.code,{className:"language-js___highlight={6}"},"import EmblaCarousel from 'embla-carousel'\nimport Autoplay from 'embla-carousel-autoplay'\n\nconst emblaApi = EmblaCarousel(emblaNode, { loop: true }, [Autoplay()])\n\nemblaApi.plugins().autoplay.stop()\n"))),a.createElement(r.L,{tab:c.c9.TABS.REACT},a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx___highlight={9}"},"import { useEffect } from 'react'\nimport useEmblaCarousel from 'embla-carousel-react'\nimport Autoplay from 'embla-carousel-autoplay'\n\nexport function EmblaCarousel() {\n  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])\n\n  useEffect(() => {\n    if (emblaApi) emblaApi.plugins().autoplay.stop()\n  }, [emblaApi])\n\n  // ...\n}\n"))),a.createElement(r.L,{tab:c.c9.TABS.VUE},a.createElement(t.pre,null,a.createElement(t.code,{className:"language-html___highlight={11}"},"<script setup>\n  import { watchEffect } from 'vue'\n  import emblaCarouselVue from 'embla-carousel-vue'\n  import Autoplay from 'embla-carousel-autoplay'\n\n  const [emblaNode, emblaApi] = emblaCarouselVue({ loop: true }, [\n    Autoplay()\n  ])\n\n  watchEffect(() => {\n    if (emblaApi.value) emblaApi.value.plugins().autoplay.stop()\n  })\n\n  // ...\n<\/script>\n")))),"\n",a.createElement(t.h3,{id:"adding-event-listeners",style:{position:"relative"}},a.createElement(t.a,{href:"#adding-event-listeners","aria-label":"adding event listeners permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"Adding event listeners"),"\n",a.createElement(t.p,null,"Some plugins fire their own ",a.createElement(t.strong,null,"events"),". Plugin events are structured as follows ",a.createElement(t.code,null,"<plugin-name>:eventname"),". ",a.createElement(t.a,{href:"/api/events/#adding-event-listeners"},"Adding")," and ",a.createElement(t.a,{href:"/api/events/#removing-event-listeners"},"removing")," plugin event listeners is done the same way as native Embla events. Here's an example where an event is added to the autoplay plugin:"),"\n",a.createElement(o.m,{groupId:c.c9.GROUP_ID},a.createElement(r.L,{tab:c.c9.TABS.VANILLA},a.createElement(t.pre,null,a.createElement(t.code,{className:"language-js___highlight={10}"},"import EmblaCarousel from 'embla-carousel'\nimport Autoplay from 'embla-carousel-autoplay'\n\nconst emblaApi = EmblaCarousel(emblaNode, { loop: true }, [Autoplay()])\n\nfunction logPluginEvent(emblaApi, eventName) {\n  console.log('Autoplay plugin stopped playing!')\n}\n\nemblaApi.on('autoplay:stop', logPluginEvent)\n"))),a.createElement(r.L,{tab:c.c9.TABS.REACT},a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx___highlight={15}"},"import { useEffect, useCallback } from 'react'\nimport useEmblaCarousel from 'embla-carousel-react'\nimport Autoplay from 'embla-carousel-autoplay'\n\nexport function EmblaCarousel() {\n  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])\n\n  const logAutoplayStopEvent = useCallback(() => {\n    console.log('Autoplay plugin stopped playing!')\n  }, [])\n\n  useEffect(() => {\n    if (!emblaApi) return\n\n    emblaApi.on('autoplay:stop', logAutoplayStopEvent) // add\n  }, [emblaApi, logAutoplayStopEvent])\n\n  // ...\n}\n"))),a.createElement(r.L,{tab:c.c9.TABS.VUE},a.createElement(t.pre,null,a.createElement(t.code,{className:"language-html___highlight={16}"},"<script setup>\n  import { watchEffect, onBeforeUnmount } from 'vue'\n  import emblaCarouselVue from 'embla-carousel-vue'\n  import Autoplay from 'embla-carousel-autoplay'\n\n  const [emblaNode, emblaApi] = emblaCarouselVue({ loop: true }, [\n    Autoplay()\n  ])\n\n  function logAutoplayStopEvent() {\n    console.log('Autoplay plugin stopped playing!')\n  }\n\n  watchEffect(() => {\n    if (emblaApi.value) {\n      emblaApi.value.on('autoplay:stop', logAutoplayStopEvent) // add\n    }\n  })\n\n  // ...\n<\/script>\n")))),"\n",a.createElement(t.h3,{id:"typescript",style:{position:"relative"}},a.createElement(t.a,{href:"#typescript","aria-label":"typescript permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"TypeScript"),"\n",a.createElement(t.p,null,"The ",a.createElement(t.code,null,"EmblaPluginType")," is obtained directly from the ",a.createElement(t.strong,null,"core package")," ",a.createElement(t.code,null,"embla-carousel")," and used like so:"),"\n",a.createElement(o.m,{groupId:c.c9.GROUP_ID},a.createElement(r.L,{tab:c.c9.TABS.VANILLA},a.createElement(t.pre,null,a.createElement(t.code,{className:"language-ts___highlight={3,8}"},"import EmblaCarousel, {\n  EmblaOptionsType,\n  EmblaPluginType\n} from 'embla-carousel'\nimport Autoplay from 'embla-carousel-autoplay'\n\nconst options: EmblaOptionsType = { loop: true }\nconst plugins: EmblaPluginType[] = [Autoplay()]\nconst emblaApi = EmblaCarousel(emblaNode, options, plugins)\n"))),a.createElement(r.L,{tab:c.c9.TABS.REACT},a.createElement(t.pre,null,a.createElement(t.code,{className:"language-tsx___highlight={2,7}"},"import React from 'react'\nimport { EmblaOptionsType, EmblaPluginType } from 'embla-carousel'\nimport useEmblaCarousel from 'embla-carousel-react'\nimport Autoplay from 'embla-carousel-autoplay'\n\nconst options: EmblaOptionsType = { loop: true }\nconst plugins: EmblaPluginType[] = [Autoplay()]\n\nexport function EmblaCarousel() {\n  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins)\n  // ...\n}\n")),a.createElement(n,{type:"warning"},a.createElement(t.p,null,"If you're using ",a.createElement(t.code,null,"pnpm"),", you need to install ",a.createElement(t.code,null,"embla-carousel")," as a ",a.createElement(t.strong,null,"devDependency")," when importing types from it like demonstrated above."),a.createElement("br"),a.createElement(t.p,null,"This is because even though ",a.createElement(t.code,null,"embla-carousel-react")," has ",a.createElement(t.code,null,"embla-carousel")," as a dependency, ",a.createElement(t.code,null,"pnpm")," makes nested dependencies inaccessible by design."))),a.createElement(r.L,{tab:c.c9.TABS.VUE},a.createElement(t.pre,null,a.createElement(t.code,{className:"language-html___highlight={2,7}"},"<script setup lang=\"ts\">\n  import { EmblaOptionsType, EmblaPluginType } from 'embla-carousel'\n  import emblaCarouselVue from 'embla-carousel-vue'\n  import Autoplay from 'embla-carousel-autoplay'\n\n  const options: EmblaOptionsType = { loop: true }\n  const plugins: EmblaPluginType[] = [Autoplay()]\n  const [emblaNode] = emblaCarouselVue(options, plugins)\n  // ...\n<\/script>\n")),a.createElement(n,{type:"warning"},a.createElement(t.p,null,"If you're using ",a.createElement(t.code,null,"pnpm"),", you need to install ",a.createElement(t.code,null,"embla-carousel")," as a ",a.createElement(t.strong,null,"devDependency")," when importing types from it like demonstrated above."),a.createElement("br"),a.createElement(t.p,null,"This is because even though ",a.createElement(t.code,null,"embla-carousel-vue")," has ",a.createElement(t.code,null,"embla-carousel")," as a dependency, ",a.createElement(t.code,null,"pnpm")," makes nested dependencies inaccessible by design.")))))}var m=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(i,e)):i(e)};var s=n(4810),u=n(3785),p=n(8116),g=n(3559),d=n(7377),E=n(286),h=n(1429),b=n(8944),f=n(4241);const y=e=>{const{data:t,pageContext:n}=e,{siteUrl:l,author:o}=(0,p.$)(),{title:r="",description:c,date:i}=t.mdx.frontmatter,m=(0,a.useMemo)((()=>new Date(i+" UTC").toISOString()),[i]);return a.createElement(s.p,{title:r,description:c,url:""+l+n.slug},a.createElement("script",{type:"application/ld+json"},'\n      {\n        "@context": "https://schema.org",\n        "@type": "TechArticle",\n        "name": "'+(0,b.P)(l)+'",\n        "description": "'+c+'",\n        "url": "'+l+n.slug+'",\n        "headline": "'+r+'",\n        "image": "'+l+'/share-image.png",\n        "datePublished": "'+m+'",\n        "dateModified": "'+m+'",\n        "author": {\n          "@type": "Person",\n          "name": "'+o+'"\n        },\n        "publisher": {\n          "@type": "Organization",\n          "name": "'+o+'",\n          "logo": {\n            "@type": "ImageObject",\n            "width": "512",\n            "height": "512",\n            "url": "'+l+u.Z+'"\n          }\n        }\n      }\n    '))},v=e=>{const{pageContext:t,children:n}=e,{next:l,previous:o,filePath:r,id:c}=t;return a.createElement(a.Fragment,null,a.createElement(E.V,{id:c}),a.createElement("article",{id:h.O},a.createElement(f.i,null,n)),a.createElement(g.l,{pageUrl:r}),a.createElement(d.R,{previous:o,next:l}))};function A(e){return a.createElement(v,e,a.createElement(m,e))}},286:function(e,t,n){n.d(t,{V:function(){return b}});var l=n(2784),a=n(1195),o=n(9900),r=(n(7694),n(4049)),c=n(5211);var i=n(6807),m=n(3792),s=n(727),u=n(127);const p=a.default.nav.withConfig({displayName:"PageBreadcrumbs__PageBreadcrumbsWrapper",componentId:"sc-1mlty1z-0"})(["display:flex;align-items:center;font-size:",";margin-bottom:",";"],s.u.COMPLEMENTARY,u.v.THREE),g=(0,a.css)(["color:",";padding:"," 0;"],m.DM.TEXT_LOW_CONTRAST,u.v.ONE),d=(0,a.default)(o.t).withConfig({displayName:"PageBreadcrumbs__Link",componentId:"sc-1mlty1z-1"})(["",";"],g),E=a.default.span.withConfig({displayName:"PageBreadcrumbs__ActiveTitle",componentId:"sc-1mlty1z-2"})(["",";"],g),h=(0,a.default)(i.J).withConfig({displayName:"PageBreadcrumbs__Separator",componentId:"sc-1mlty1z-3"})(["color:",";margin:0 ",";"],m.DM.TEXT_LOW_CONTRAST,u.v.ONE),b=e=>{const{id:t}=e,n=(e=>{const{flat:t}=(0,c.V)(),n=t.find((t=>t.id===e));return t.filter((e=>(0,r.D)(e.slug,(null==n?void 0:n.slug)||""))).sort(((e,t)=>e.level-t.level))})(t);return 0===n.length?null:l.createElement(p,{"aria-label":"Breadcrumb Navigation"},n.map(((e,t)=>{let{id:a,slug:o,title:r}=e;return t!==n.length-1?l.createElement(l.Fragment,{key:a},l.createElement(d,{to:o},r),l.createElement(h,{size:"0.6rem",svg:"chevronRight",role:"presentation","aria-hidden":"false"})):l.createElement(E,{key:a},r)})))}},3559:function(e,t,n){n.d(t,{l:function(){return p}});var l=n(2784),a=n(1195),o=n(9900),r=n(3792),c=n(727),i=n(127),m=n(2657),s=n(6722);const u=(0,a.default)(o.t).withConfig({displayName:"PageEditThisPage__PageEditThisPageWrapper",componentId:"sc-15acsrz-0"})(["display:inline-flex;align-items:center;text-decoration:none;font-size:",";padding-top:",";padding-bottom:",";margin-top:",";color:",";"],c.u.COMPLEMENTARY,i.v.ONE,i.v.ONE,i.v.EIGHT,r.DM.TEXT_LOW_CONTRAST),p=e=>{const{pageUrl:t}=e,n=m.n.GITHUB_DOCUMENTATION+"/"+t;return l.createElement(u,{to:n},l.createElement(s.M5,{iconSvg:"pen",iconSize:"1.5rem"},"Edit this page on GitHub"))}},7377:function(e,t,n){n.d(t,{R:function(){return b}});var l=n(2784),a=n(1195),o=n(9900),r=n(4097),c=n(3792),i=n(127),m=n(727),s=n(6722),u=n(6991);const p=i.v.FOUR,g=a.default.nav.withConfig({displayName:"PagePagination__PagePaginationWrapper",componentId:"sc-3ejrow-0"})(["",";display:flex;justify-content:space-between;margin-top:",";"],(0,u.h)(p,"","div"),i.v.EIGHT),d=a.default.div.withConfig({displayName:"PagePagination__Item",componentId:"sc-3ejrow-1"})(["> a{color:",";}&:nth-child(2) > a{text-align:right;color:",";}"],c.DM.BRAND_PRIMARY,c.DM.BRAND_SECONDARY),E=a.default.div.withConfig({displayName:"PagePagination__ItemLabel",componentId:"sc-3ejrow-2"})(["color:",";padding-bottom:",";"],c.DM.TEXT_LOW_CONTRAST,i.v.ONE),h=a.default.div.withConfig({displayName:"PagePagination__ItemTitle",componentId:"sc-3ejrow-3"})(["display:inline-flex;align-items:center;font-weight:",";","{",";}"],m.X.MEDIUM,s.EG,r.V),b=e=>{const{next:t,previous:n}=e;return l.createElement(g,{"aria-label":"Pagination Navigation"},l.createElement(d,null,n&&l.createElement(o.t,{to:n.slug},l.createElement(E,null,"Previous"),l.createElement(h,null,l.createElement(s.M5,{iconSvg:"arrowLeft"},n.title)))),l.createElement(d,null,t&&l.createElement(o.t,{to:t.slug},l.createElement(E,null,"Next"),l.createElement(h,null,l.createElement(s.M5,{iconSvg:"arrowRight",iconSide:"right"},t.title)))))}},4810:function(e,t,n){n.d(t,{p:function(){return c}});var l=n(2784),a=n(8116),o=n(8944),r=n(3471);const c=e=>{const{title:t,description:n,lang:c="en",url:i,children:m}=e,s=(0,a.$)(),u=t+" | "+(0,r.g)(s.title),p=n||s.description;return l.createElement(l.Fragment,null,l.createElement("html",{lang:c}),l.createElement("title",null,u),l.createElement("link",{rel:"canonical",href:i}),l.createElement("meta",{name:"description",content:p}),l.createElement("meta",{name:"og:title",content:t}),l.createElement("meta",{name:"og:description",content:p}),l.createElement("meta",{name:"og:type",content:"article"}),l.createElement("meta",{name:"og:locale",content:"en_EN"}),l.createElement("meta",{name:"og:url",content:i}),l.createElement("meta",{name:"og:site_name",content:(0,o.P)(s.siteUrl)}),l.createElement("meta",{name:"twitter:card",content:"summary"}),l.createElement("meta",{name:"twitter:creator",content:s.author}),l.createElement("meta",{name:"twitter:title",content:t}),l.createElement("meta",{name:"twitter:description",content:p}),m)}},3471:function(e,t,n){n.d(t,{g:function(){return l}});const l=function(e,t){return void 0===e&&(e=""),void 0===t&&(t=""),e.replace(/(^\w|-\w)/g,(e=>e.replace(/-/,t).toUpperCase()))}},8944:function(e,t,n){n.d(t,{P:function(){return l}});const l=e=>e.replace(/(^\w+:|^)\/\//,"")},3785:function(e,t,n){t.Z=n.p+"static/maskable-36b9e327abc26d5d02e9350d184a058f.png"}}]);
//# sourceMappingURL=component---src-templates-default-tsx-content-file-path-users-davidjerleke-sites-embla-carousel-packages-embla-carousel-docs-src-content-pages-api-plugins-mdx-a61b41605804c4263d89.js.map