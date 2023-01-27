"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[4623],{5625:function(e,n,t){t.r(n),t.d(n,{Head:function(){return E},default:function(){return v}});var a=t(5392),l=t(2784);function i(e){const n=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",div:"div",strong:"strong",pre:"pre",code:"code"},(0,a.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.h1,null,"Breakpoints"),"\n",l.createElement(n.p,null,"This guide demonstrates how to customize your carousels for different breakpoints using the ",l.createElement(n.a,{href:"/guides/slide-container/#using-flexbox"},"flexbox")," setup. Embla Carousel offers a convenient way to customize your carousels based on different breakpoints including changing ",l.createElement(n.a,{href:"/api/options/"},"options"),", using plain CSS."),"\n",l.createElement(n.h2,{id:"changing-slide-sizes",style:{position:"relative"}},l.createElement(n.a,{href:"#changing-slide-sizes","aria-label":"changing slide sizes permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"Changing slide sizes"),"\n",l.createElement(n.p,null,"Embla Carousel will ",l.createElement(n.strong,null,"automatically pick up")," any ",l.createElement(n.strong,null,"changes in slide sizes")," when the ",l.createElement(n.strong,null,"window is resized"),". It's a walk in the park to change slide sizes based on your breakpoints:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-css"},".embla__slide {\n  flex: 0 0 100%; /* Default slide covers 100% of the viewport */\n}\n@media (min-width: 768px) {\n  .embla__slide {\n    flex: 0 0 50%; /* Breakpoint SM slide covers 50% of the viewport */\n  }\n}\n")),"\n",l.createElement(n.h2,{id:"changing-slide-gaps",style:{position:"relative"}},l.createElement(n.a,{href:"#changing-slide-gaps","aria-label":"changing slide gaps permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"Changing slide gaps"),"\n",l.createElement(n.p,null,"Embla Carousel will ",l.createElement(n.strong,null,"automatically pick up")," any ",l.createElement(n.strong,null,"changes in gap sizes")," when the ",l.createElement(n.strong,null,"window is resized"),". It's very simple to change gap sizes based on your breakpoints:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-css"},".embla__slide {\n  margin-right: 10px; /* Default slide gap */\n}\n@media (min-width: 768px) {\n  .embla__slide {\n    margin-right: 20px; /* Breakpoint SM gap */\n  }\n}\n")),"\n",l.createElement(n.h2,{id:"changing-options",style:{position:"relative"}},l.createElement(n.a,{href:"#changing-options","aria-label":"changing options permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"Changing options"),"\n",l.createElement(n.p,null,"You can provide ",l.createElement(n.a,{href:"/api/options/"},"options")," that will be applied for specific breakpoints using the ",l.createElement(n.a,{href:"/api/options/#breakpoints"},"breakpoint")," option."),"\n",l.createElement(n.p,null,"Here's an example of a carousel that's only active when the screen width is less than 768px:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-js"},"const options = {\n  active: true,\n  breakpoints: {\n    '(min-width: 768px)': { active: false },\n  },\n}\n")),"\n",l.createElement(n.p,null,"Because the default ",l.createElement(n.a,{href:"/api/options/#active"},"active")," value is ",l.createElement(n.code,null,"true"),", we can omit it from the root level and achieve the same result as above like this:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-js"},"const options = {\n  breakpoints: {\n    '(min-width: 768px)': { active: false },\n  },\n}\n")),"\n",l.createElement(n.p,null,"When breakpoint options ",l.createElement(n.strong,null,"are in conflict"),", the last option in the breakpoints options will be applied:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-js"},"const options = {\n  loop: false,\n  breakpoints: {\n    '(min-width: 768px)': { loop: true },\n    '(min-width: 420px)': { loop: false }, // This will override the (min-width: 768px) breakpoint loop option\n  },\n}\n")),"\n",l.createElement(n.p,null,"If multiple queries match, they will be ",l.createElement(n.strong,null,"merged"),":"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-js"},"const options = {\n  loop: false, // --\x3e 419px screens and down will apply { loop: false }\n  breakpoints: {\n    '(min-width: 420px)': { align: 'start' }, // --\x3e 420px screens and up will apply { align: 'start', loop: false }\n    '(min-width: 768px)': { loop: true }, // --\x3e 768px screens and up will apply { align: 'start', loop: true }\n  },\n}\n")))}var r=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?l.createElement(n,e,l.createElement(i,e)):i(e)},o=t(4234),c=t(3785),s=t(8116),m=t(6892),p=t(4453),d=t(3376),u=t(6993),g=t(8944),h=t(9387);const E=e=>{const{data:n,pageContext:t}=e,{siteUrl:a,author:i}=(0,s.$)(),{title:r,description:m,date:p}=n.mdx.frontmatter,d=(0,l.useMemo)((()=>new Date(p+" UTC").toISOString()),[p]);return l.createElement(o.p,{title:r,description:m,url:""+a+t.slug},l.createElement("script",{type:"application/ld+json"},'\n      {\n        "@context": "https://schema.org",\n        "@type": "TechArticle",\n        "name": "'+(0,g.P)(a)+'",\n        "description": "'+m+'",\n        "url": "'+a+t.slug+'",\n        "headline": "'+r+'",\n        "image": "'+a+'/share-image.png",\n        "datePublished": "'+d+'",\n        "dateModified": "'+d+'",\n        "author": {\n          "@type": "Person",\n          "name": "'+i+'"\n        },\n        "publisher": {\n          "@type": "Organization",\n          "name": "'+i+'",\n          "logo": {\n            "@type": "ImageObject",\n            "width": "512",\n            "height": "512",\n            "url": "'+a+c.Z+'"\n          }\n        }\n      }\n    '))},f=e=>{const{pageContext:n,children:t}=e,{next:a,previous:i,filePath:r,id:o}=n;return l.createElement(l.Fragment,null,l.createElement(d.O,{id:o}),l.createElement("article",{id:u.X},l.createElement(h.i,null,t)),l.createElement(m.e,{pageUrl:r}),l.createElement(p.t,{previous:i,next:a}))};function v(e){return l.createElement(f,e,l.createElement(r,e))}},3376:function(e,n,t){t.d(n,{O:function(){return f}});var a=t(2784),l=t(1195),i=t(5668),r=(t(7694),t(4049)),o=t(5211);var c=t(6807),s=t(7042),m=t(727),p=t(127);const d=l.default.nav.withConfig({displayName:"Breadcrumbs__Wrapper",componentId:"sc-1peavte-0"})(["display:flex;align-items:center;font-size:",";margin-bottom:",";"],m.u.COMPLEMENTARY,p.v.THREE),u=(0,l.css)(["color:",";padding:"," 0;"],s.DM.TEXT_LOW_CONTRAST,p.v.ONE),g=(0,l.default)(i.S).withConfig({displayName:"Breadcrumbs__Link",componentId:"sc-1peavte-1"})(["",";"],u),h=l.default.span.withConfig({displayName:"Breadcrumbs__ActiveTitle",componentId:"sc-1peavte-2"})(["",";"],u),E=(0,l.default)(c.J).withConfig({displayName:"Breadcrumbs__Separator",componentId:"sc-1peavte-3"})(["color:",";margin:0 ",";"],s.DM.TEXT_LOW_CONTRAST,p.v.ONE),f=e=>{const{id:n}=e,t=(e=>{const{flat:n}=(0,o.V)(),t=n.find((n=>n.id===e));return n.filter((e=>(0,r.D)(e,(null==t?void 0:t.slug)||""))).sort(((e,n)=>e.level-n.level))})(n);return 0===t.length?null:a.createElement(d,{"aria-label":"Breadcrumb Navigation"},t.map(((e,n)=>{let{id:l,slug:i,title:r}=e;return n!==t.length-1?a.createElement(a.Fragment,{key:l},a.createElement(g,{to:i},r),a.createElement(E,{size:"0.6rem",svg:"chevronRight",role:"presentation","aria-hidden":"false"})):a.createElement(h,{key:l},r)})))}},6892:function(e,n,t){t.d(n,{e:function(){return d}});var a=t(2784),l=t(1195),i=t(5668),r=t(7042),o=t(727),c=t(127),s=t(2657),m=t(6722);const p=(0,l.default)(i.S).withConfig({displayName:"EditPage__Wrapper",componentId:"sc-1cx5u1t-0"})(["display:inline-flex;align-items:center;text-decoration:none;font-size:",";padding-top:",";padding-bottom:",";margin-top:",";color:",";"],o.u.COMPLEMENTARY,c.v.ONE,c.v.ONE,c.v.EIGHT,r.DM.TEXT_LOW_CONTRAST),d=e=>{const{pageUrl:n}=e,t=s.n.GITHUB_DOCUMENTATION+"/"+n;return a.createElement(p,{to:t},a.createElement(m.M,{iconSvg:"pen",iconSize:"1.5rem"},"Edit this page on GitHub"))}},4453:function(e,n,t){t.d(n,{t:function(){return E}});var a=t(2784),l=t(1195),i=t(5668),r=t(7697),o=t(7042),c=t(127),s=t(6722);const m=c.v.FOUR,p=l.default.nav.withConfig({displayName:"Pagination__Wrapper",componentId:"sc-gw2f46-0"})(["display:flex;justify-content:space-between;margin-top:",";margin-left:-",";"],c.v.EIGHT,m),d=l.default.div.withConfig({displayName:"Pagination__Item",componentId:"sc-gw2f46-1"})(["padding-left:",";> a{color:",";}&:nth-child(2) > a{text-align:right;color:",";}"],m,o.DM.BRAND_PRIMARY,o.DM.BRAND_SECONDARY),u=l.default.div.withConfig({displayName:"Pagination__ItemLabel",componentId:"sc-gw2f46-2"})(["color:",";padding-bottom:",";"],o.DM.TEXT_LOW_CONTRAST,c.v.ONE),g=l.default.div.withConfig({displayName:"Pagination__ItemTitle",componentId:"sc-gw2f46-3"})(["display:inline-flex;align-items:center;font-weight:500;"]),h=l.default.span.withConfig({displayName:"Pagination__GradientText",componentId:"sc-gw2f46-4"})(["",";"],r.W),E=e=>{const{next:n,previous:t}=e;return a.createElement(p,{"aria-label":"Pagination Navigation"},a.createElement(d,null,t&&a.createElement(i.S,{to:t.slug},a.createElement(u,null,"Previous"),a.createElement(g,null,a.createElement(s.M,{iconSvg:"arrowLeft"},a.createElement(h,null,t.title))))),a.createElement(d,null,n&&a.createElement(i.S,{to:n.slug},a.createElement(u,null,"Next"),a.createElement(g,null,a.createElement(s.M,{iconSvg:"arrowRight",iconSide:"right"},a.createElement(h,null,n.title))))))}},4234:function(e,n,t){t.d(n,{p:function(){return r}});var a=t(2784),l=t(8116),i=t(8944);const r=e=>{const{title:n,description:t,lang:r="en",url:o,children:c}=e,s=(0,l.$)(),m=t||s.description;return a.createElement(a.Fragment,null,a.createElement("html",{lang:r}),a.createElement("title",null,n," | Embla Carousel"),a.createElement("link",{rel:"canonical",href:o}),a.createElement("meta",{name:"description",content:m}),a.createElement("meta",{name:"og:title",content:n}),a.createElement("meta",{name:"og:description",content:m}),a.createElement("meta",{name:"og:type",content:"article"}),a.createElement("meta",{name:"og:locale",content:"en_EN"}),a.createElement("meta",{name:"og:url",content:o}),a.createElement("meta",{name:"og:site_name",content:(0,i.P)(s.siteUrl)}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:s.author}),a.createElement("meta",{name:"twitter:title",content:n}),a.createElement("meta",{name:"twitter:description",content:m}),c)}},8944:function(e,n,t){t.d(n,{P:function(){return a}});const a=e=>e.replace(/(^\w+:|^)\/\//,"")},3785:function(e,n,t){n.Z=t.p+"static/maskable-36b9e327abc26d5d02e9350d184a058f.png"}}]);
//# sourceMappingURL=component---src-templates-page-tsx-content-file-path-users-davidjerleke-sites-embla-carousel-packages-embla-carousel-docs-src-content-pages-guides-breakpoints-md-da4172c1b9790d024296.js.map