"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[1933],{8025:function(e,t,n){n.r(t),n.d(t,{Head:function(){return h},default:function(){return v}});var a=n(5392),r=n(2784);function l(e){const t=Object.assign({h1:"h1",p:"p",a:"a",hr:"hr",h2:"h2",div:"div"},(0,a.ah)(),e.components),{PageChildLinks:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("PageChildLinks",!0),r.createElement(r.Fragment,null,r.createElement(t.h1,null,"Example Setups"),"\n",r.createElement(t.p,null,"Get started instantly with Embla Carousel by finding an example setup that suits your needs. Browse basic to advanced setups. All examples are created with ",r.createElement(t.a,{href:"https://codesandbox.io/"},"CodeSandbox")," which makes it a breeze to fork and start experimenting with Embla Carousel instantly."),"\n",r.createElement(t.hr),"\n",r.createElement(t.h2,{id:"choose-type-of-examples",style:{position:"relative"}},r.createElement(t.a,{href:"#choose-type-of-examples","aria-label":"choose type of examples permalink",className:"anchor before"},r.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"Choose type of examples"),"\n",r.createElement(t.p,null,"Choose what type of examples you would like to browse:"),"\n",r.createElement(n))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.createElement(t,e,r.createElement(l,e)):l(e)};var o=n(4234),c=n(3785),m=n(8116),s=n(3559),d=n(7377),u=n(286),p=n(1429),g=n(8944),E=n(9387);const h=e=>{const{data:t,pageContext:n}=e,{siteUrl:a,author:l}=(0,m.$)(),{title:i,description:s,date:d}=t.mdx.frontmatter,u=(0,r.useMemo)((()=>new Date(d+" UTC").toISOString()),[d]);return r.createElement(o.p,{title:i,description:s,url:""+a+n.slug},r.createElement("script",{type:"application/ld+json"},'\n      {\n        "@context": "https://schema.org",\n        "@type": "TechArticle",\n        "name": "'+(0,g.P)(a)+'",\n        "description": "'+s+'",\n        "url": "'+a+n.slug+'",\n        "headline": "'+i+'",\n        "image": "'+a+'/share-image.png",\n        "datePublished": "'+u+'",\n        "dateModified": "'+u+'",\n        "author": {\n          "@type": "Person",\n          "name": "'+l+'"\n        },\n        "publisher": {\n          "@type": "Organization",\n          "name": "'+l+'",\n          "logo": {\n            "@type": "ImageObject",\n            "width": "512",\n            "height": "512",\n            "url": "'+a+c.Z+'"\n          }\n        }\n      }\n    '))},f=e=>{const{pageContext:t,children:n}=e,{next:a,previous:l,filePath:i,id:o}=t;return r.createElement(r.Fragment,null,r.createElement(u.V,{id:o}),r.createElement("article",{id:p.O},r.createElement(E.i,null,n)),r.createElement(s.l,{pageUrl:i}),r.createElement(d.R,{previous:l,next:a}))};function v(e){return r.createElement(f,e,r.createElement(i,e))}},286:function(e,t,n){n.d(t,{V:function(){return f}});var a=n(2784),r=n(1195),l=n(9196),i=(n(7694),n(4049)),o=n(5211);var c=n(6807),m=n(7042),s=n(727),d=n(127);const u=r.default.nav.withConfig({displayName:"PageBreadcrumbs__PageBreadcrumbsWrapper",componentId:"sc-1mlty1z-0"})(["display:flex;align-items:center;font-size:",";margin-bottom:",";"],s.u.COMPLEMENTARY,d.v.THREE),p=(0,r.css)(["color:",";padding:"," 0;"],m.DM.TEXT_LOW_CONTRAST,d.v.ONE),g=(0,r.default)(l.Z).withConfig({displayName:"PageBreadcrumbs__Link",componentId:"sc-1mlty1z-1"})(["",";"],p),E=r.default.span.withConfig({displayName:"PageBreadcrumbs__ActiveTitle",componentId:"sc-1mlty1z-2"})(["",";"],p),h=(0,r.default)(c.J).withConfig({displayName:"PageBreadcrumbs__Separator",componentId:"sc-1mlty1z-3"})(["color:",";margin:0 ",";"],m.DM.TEXT_LOW_CONTRAST,d.v.ONE),f=e=>{const{id:t}=e,n=(e=>{const{flat:t}=(0,o.V)(),n=t.find((t=>t.id===e));return t.filter((e=>(0,i.D)(e.slug,(null==n?void 0:n.slug)||""))).sort(((e,t)=>e.level-t.level))})(t);return 0===n.length?null:a.createElement(u,{"aria-label":"Breadcrumb Navigation"},n.map(((e,t)=>{let{id:r,slug:l,title:i}=e;return t!==n.length-1?a.createElement(a.Fragment,{key:r},a.createElement(g,{to:l},i),a.createElement(h,{size:"0.6rem",svg:"chevronRight",role:"presentation","aria-hidden":"false"})):a.createElement(E,{key:r},i)})))}},3559:function(e,t,n){n.d(t,{l:function(){return u}});var a=n(2784),r=n(1195),l=n(9196),i=n(7042),o=n(727),c=n(127),m=n(2657),s=n(6722);const d=(0,r.default)(l.Z).withConfig({displayName:"PageEditThisPage__PageEditThisPageWrapper",componentId:"sc-15acsrz-0"})(["display:inline-flex;align-items:center;text-decoration:none;font-size:",";padding-top:",";padding-bottom:",";margin-top:",";color:",";"],o.u.COMPLEMENTARY,c.v.ONE,c.v.ONE,c.v.EIGHT,i.DM.TEXT_LOW_CONTRAST),u=e=>{const{pageUrl:t}=e,n=m.n.GITHUB_DOCUMENTATION+"/"+t;return a.createElement(d,{to:n},a.createElement(s.M,{iconSvg:"pen",iconSize:"1.5rem"},"Edit this page on GitHub"))}},7377:function(e,t,n){n.d(t,{R:function(){return h}});var a=n(2784),r=n(1195),l=n(9196),i=n(7697),o=n(7042),c=n(127),m=n(6722);const s=c.v.FOUR,d=r.default.nav.withConfig({displayName:"PagePagination__PagePaginationWrapper",componentId:"sc-3ejrow-0"})(["display:flex;justify-content:space-between;margin-top:",";margin-left:-",";"],c.v.EIGHT,s),u=r.default.div.withConfig({displayName:"PagePagination__Item",componentId:"sc-3ejrow-1"})(["padding-left:",";> a{color:",";}&:nth-child(2) > a{text-align:right;color:",";}"],s,o.DM.BRAND_PRIMARY,o.DM.BRAND_SECONDARY),p=r.default.div.withConfig({displayName:"PagePagination__ItemLabel",componentId:"sc-3ejrow-2"})(["color:",";padding-bottom:",";"],o.DM.TEXT_LOW_CONTRAST,c.v.ONE),g=r.default.div.withConfig({displayName:"PagePagination__ItemTitle",componentId:"sc-3ejrow-3"})(["display:inline-flex;align-items:center;font-weight:500;"]),E=r.default.span.withConfig({displayName:"PagePagination__GradientText",componentId:"sc-3ejrow-4"})(["",";"],i.W),h=e=>{const{next:t,previous:n}=e;return a.createElement(d,{"aria-label":"Pagination Navigation"},a.createElement(u,null,n&&a.createElement(l.Z,{to:n.slug},a.createElement(p,null,"Previous"),a.createElement(g,null,a.createElement(m.M,{iconSvg:"arrowLeft"},a.createElement(E,null,n.title))))),a.createElement(u,null,t&&a.createElement(l.Z,{to:t.slug},a.createElement(p,null,"Next"),a.createElement(g,null,a.createElement(m.M,{iconSvg:"arrowRight",iconSide:"right"},a.createElement(E,null,t.title))))))}},4234:function(e,t,n){n.d(t,{p:function(){return o}});var a=n(2784),r=n(8116),l=n(8944),i=n(3471);const o=e=>{const{title:t,description:n,lang:o="en",url:c,children:m}=e,s=(0,r.$)(),d=t+" | "+(0,i.g)(s.title),u=n||s.description;return a.createElement(a.Fragment,null,a.createElement("html",{lang:o}),a.createElement("title",null,d),a.createElement("link",{rel:"canonical",href:c}),a.createElement("meta",{name:"description",content:u}),a.createElement("meta",{name:"og:title",content:t}),a.createElement("meta",{name:"og:description",content:u}),a.createElement("meta",{name:"og:type",content:"article"}),a.createElement("meta",{name:"og:locale",content:"en_EN"}),a.createElement("meta",{name:"og:url",content:c}),a.createElement("meta",{name:"og:site_name",content:(0,l.P)(s.siteUrl)}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:s.author}),a.createElement("meta",{name:"twitter:title",content:t}),a.createElement("meta",{name:"twitter:description",content:u}),m)}},3471:function(e,t,n){n.d(t,{g:function(){return a}});const a=function(e,t){return void 0===e&&(e=""),void 0===t&&(t=""),e.replace(/(^\w|-\w)/g,(e=>e.replace(/-/,t).toUpperCase()))}},8944:function(e,t,n){n.d(t,{P:function(){return a}});const a=e=>e.replace(/(^\w+:|^)\/\//,"")},3785:function(e,t,n){t.Z=n.p+"static/maskable-36b9e327abc26d5d02e9350d184a058f.png"}}]);
//# sourceMappingURL=component---src-templates-page-tsx-content-file-path-users-davidjerleke-sites-embla-carousel-packages-embla-carousel-docs-src-content-pages-examples-index-mdx-8608d762ae932506ebb2.js.map