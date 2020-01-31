!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("EmblaCarousel",[],t):"object"==typeof exports?exports.EmblaCarousel=t():e.EmblaCarousel=t()}("undefined"!=typeof self?self:this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Vector1D=function(e){var t={value:e};function n(){return t.value}function r(e){return t.value/=e,i}function o(){return n()}var i={add:function(e){return t.value+=e.get(),i},addNumber:function(e){return t.value+=e,i},divide:r,get:n,magnitude:o,multiply:function(e){return t.value*=e,i},normalize:function(){var e=o();return 0!==e&&r(e),i},set:function(e){return t.value=e.get(),i},setNumber:function(e){return t.value=e,i},subtract:function(e){return t.value-=e.get(),i},subtractNumber:function(e){return t.value-=e,i}};return Object.freeze(i)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Limit=function(e){var t=e.min,n=e.max,r={min:n,max:t},o={min:t,max:n};function i(e){return e<t}function u(e){return e>n}function a(e){var t=i(e)&&"min",n=u(e)&&"max";return t||n||""}var c={constrain:function(e){var t=a(e);return t?o[t]:e},loop:function(e){var t=a(e);return t?r[t]:e},max:n,min:t,reachedAny:function(e){return i(e)||u(e)},reachedMax:u,reachedMin:i};return Object.freeze(c)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.rectWidth=function(e){return e.getBoundingClientRect().width},t.map=function(e,t,n,r,o){return r+(e-t)/(n-t)*(o-r)},t.arrayFromCollection=function(e){return Array.prototype.slice.call(e)},t.debounce=function(e,t){var n={id:0};return function(){window.clearTimeout(n.id),n.id=window.setTimeout(e,t)||0}},t.groupNumbers=function(e,t){for(var n=[],r=0;r<e.length;r+=t)n.push(e.slice(r,r+t));return n},t.roundToDecimals=function(e){var t=Math.pow(10,e);return function(e){return Math.round(e*t)/t}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.Direction=function(e){var t=r.Vector1D(n(e));function n(e){return 0===e?0:e/Math.abs(e)}var o={get:t.get,set:function(e){var r=n(e.get());return 0!==r&&t.setNumber(r),o}};return Object.freeze(o)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Counter=function e(t){var n=t.start,r=t.limit,o=t.loop,i=r.min,u=r.max,a=o?"loop":"constrain",c={value:d(n)};function s(){return c.value}function l(e){return c.value=d(e),f}function d(e){return r[a](e)}var f={add:function e(t){if(0!==t){var n=t/Math.abs(t);return l(s()+n),e(t+-1*n)}return f},clone:function(){return e({start:s(),limit:r,loop:o})},get:s,max:u,min:i,set:l};return Object.freeze(f)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EventStore=function(){var e={listeners:[]},t={add:function(n,r,o){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return n.addEventListener(r,o,i),e.listeners.push((function(){return n.removeEventListener(r,o,i)})),t},removeAll:function(){return e.listeners.filter((function(e){return e()})),t}};return Object.freeze(t)}},function(e,t,n){e.exports=n(7)},function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(8),i=n(26),u=n(5),a=n(27),c=n(2);function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={active:!1,windowWidth:0},s=r({},a.defaultOptions,t),l=i.EventDispatcher(),d=u.EventStore(),f=c.debounce((function(){var e=window.innerWidth;e!==n.windowWidth&&(n.windowWidth=e,y(),l.dispatch("resize"))}),500),v=y,m={},p={},g=l.on,b=l.off;function S(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=!n.active;if(n.windowWidth=window.innerWidth,function(){if(!e)throw new Error("No root element provided 😢");var t=s.containerSelector,r=e.querySelector(t);if(!r)throw new Error("No valid container element found 😢");p.root=e,p.container=r,p.slides=c.arrayFromCollection(r.children),n.active=!0}(),p.slides.length>0){var u=p.root,a=p.container,v=p.slides,g=r(s,t),b=o.Engine(u,a,v,g,l);r(m,b);if(d.add(window,"resize",f),v.forEach(h),m.translate.to(m.mover.location),s.loop&&1===v.length)return S({loop:!1});s.draggable&&function(){var e=p.root.classList,t=s.draggingClass,n=s.draggableClass;m.pointer.addActivationEvents(),l.on("dragStart",(function(){return e.add(t)})),l.on("dragEnd",(function(){return e.remove(t)})),e.add(n)}(),s.loop&&m.slideLooper.loop(v),i&&(l.on("select",x),l.on("init",x),setTimeout((function(){return l.dispatch("init")}),0))}}function x(){var e=p.slides,t=m.index,n=m.indexPrevious,r=m.indexGroups,o=s.selectedClass,i=r[n.get()],u=r[t.get()];i.forEach((function(t){return e[t].classList.remove(o)})),u.forEach((function(t){return e[t].classList.add(o)}))}function h(t,n){d.add(t,"focus",(function(){var t=Math.floor(n/s.slidesToScroll),r=n?t:n;e.scrollLeft=0,O(r)}),!0)}function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(n.active){var t=r({startIndex:m.index.get()},e);M(),S(t)}}function M(){var e=p.root,t=p.container,n=p.slides;m.pointer.removeAllEvents(),m.animation.stop(),d.removeAll(),e.classList.remove(s.draggableClass),t.style.transform="",n.forEach((function(e){return e.style.left=""}))}function O(e){m.mover.useDefaultMass().useDefaultSpeed(),m.scrollTo.index(e,0)}S(s);var j={canScrollNext:function(){var e=m.index;return s.loop||e.get()!==e.max},canScrollPrev:function(){var e=m.index;return s.loop||e.get()!==e.min},changeOptions:v,clickAllowed:function(){return m.pointer.clickAllowed()},containerNode:function(){return p.container},destroy:function(){n.active=!1,M(),l.dispatch("destroy")},off:b,on:g,previousScrollSnap:function(){return m.indexPrevious.get()},scrollBy:function(e){var t=m.scrollBy.distance(e);m.mover.useDefaultMass().useDefaultSpeed(),m.scrollTo.distance(t,!1)},scrollNext:function(){var e=m.index.clone().add(1);m.mover.useDefaultMass().useDefaultSpeed(),m.scrollTo.index(e.get(),-1)},scrollPrev:function(){var e=m.index.clone().add(-1);m.mover.useDefaultMass().useDefaultSpeed(),m.scrollTo.index(e.get(),1)},scrollProgress:function(){return m.scrollProgress.get()},scrollSnapList:function(){return m.indexGroups.map((function(e){return{slideIndexes:e,slideNodes:e.map((function(e){return p.slides[e]}))}}))},scrollTo:O,selectedScrollSnap:function(){return m.index.get()},slideNodes:function(){return p.slides}};return Object.freeze(j)}t.EmblaCarousel=s,t.default=s,e.exports=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9),o=n(10),i=n(11),u=n(4),a=n(12),c=n(1),s=n(13),l=n(14),d=n(15),f=n(16),v=n(17),m=n(18),p=n(19),g=n(20),b=n(21),S=n(22),x=n(23),h=n(24),y=n(25),M=n(2),O=n(0);t.Engine=function(e,t,n,j,z){var _=j.align,w=j.startIndex,P=j.loop,D=j.speed,T=j.dragFree,E=j.slidesToScroll,C=j.containScroll,k=M.rectWidth(t),L=i.ChunkSize(k),N=L.root,A=Object.keys(n).map(Number),V=n.map(M.rectWidth).map(L.measure),F=M.groupNumbers(V,E).map((function(e){return e.reduce((function(e,t){return e+t}))})),B=V.reduce((function(e,t){return e+t})),I=r.AlignSize({align:_,viewSize:N}),W=b.ScrollSnap({snapSizes:F,alignSize:I,loop:P}),G=v.ScrollContain({alignSize:I,contentSize:B,slideIndexes:A,slidesToScroll:E,viewSize:N}),q=!P&&C,R=F.map(W.measure),X=G.snaps(R),U=q?X:R,Y=M.groupNumbers(A,E),H=G.indexes(R),J=U.length-1,K=q?H:Y,Q=c.Limit({min:0,max:J}),Z=u.Counter({limit:Q,start:w,loop:P}),$=Z.clone(),ee=m.ScrollLimit({loop:P,contentSize:B}).measure(U),te=o.Animation((function(){ce.mover.seek(oe).update(),ae.isDown()||(P||ce.scrollBounds.constrain(oe),ce.mover.settle(oe)&&ce.animation.stop()),P&&(ce.scrollLooper.loop(ae.isDown()?ae.direction.get():ce.mover.direction.get()),ce.slideLooper.loop(n)),ce.mover.location.get()!==oe.get()&&z.dispatch("scroll"),ce.translate.to(ce.mover.location),ce.animation.proceed()})),ne=U[Z.get()],re=O.Vector1D(ne),oe=O.Vector1D(ne),ie=s.Mover({location:re,speed:D,mass:1}),ue=x.ScrollTo({animation:te,events:z,index:Z,indexPrevious:$,scrollTarget:S.ScrollTarget({align:_,contentSize:B,index:Z,limit:ee,loop:P,scrollSnaps:U,snapSizes:F,target:oe}),target:oe}),ae=a.DragBehaviour({animation:te,dragFree:T,element:e,events:z,index:Z,limit:ee,location:re,loop:P,mover:ie,pointer:l.Pointer(L),scrollTo:ue,snapSizes:F,target:oe}),ce={animation:te,index:Z,indexGroups:K,indexPrevious:$,mover:ie,pointer:ae,scrollBounds:d.ScrollBounds({animation:te,limit:ee,location:re,mover:ie,tolerance:50}),scrollBy:f.ScrollBy({limit:ee,location:re,loop:P}),scrollLooper:p.ScrollLooper({chunkSize:L,contentSize:B,limit:ee,location:re,vectors:[re,oe]}),scrollProgress:g.ScrollProgress({limit:ee,location:re}),scrollTo:ue,slideLooper:h.SlideLooper({contentSize:B,location:re,scrollSnaps:U,slideSizes:V,viewSize:N}),target:oe,translate:y.Translate(t)};return Object.freeze(ce)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AlignSize=function(e){var t=e.viewSize,n=e.align,r={start:function(e){return 0*e},center:function(e){return(t-e)/2},end:function(e){return t-e}},o={measure:function(e){return r[n](e)}};return Object.freeze(o)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Animation=function(e){var t=requestAnimationFrame.bind(window),n=cancelAnimationFrame.bind(window),r={animationFrame:0};function o(e,t){return function(){e===!!r.animationFrame&&t()}}function i(){r.animationFrame=t(e)}var u={proceed:o(!0,i),start:o(!1,i),stop:o(!0,(function(){n(r.animationFrame),r.animationFrame=0}))};return Object.freeze(u)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChunkSize=function(e){var t={root:e},n={measure:function(e){return e/t.root*100},root:100};return Object.freeze(n)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),o=n(5),i=n(0);t.DragBehaviour=function(e){var t=e.target,n=e.mover,u=e.dragFree,a=e.animation,c=e.element,s=e.pointer,l=e.location,d=e.events,f=e.limit,v=s.direction,m=["INPUT","SELECT","TEXTAREA"],p=i.Vector1D(0),g=i.Vector1D(0),b=i.Vector1D(0),S=o.EventStore(),x=o.EventStore(),h={mouse:2.5,touch:3.5},y={mouse:4,touch:7},M={mouse:12,touch:14},O={mouse:6,touch:5},j=4,z={isDown:!1,isMouse:!1,preventClick:!1,preventScroll:!1};function _(e){var r,o,i="mousedown"===e.type,u=t.get()-l.get(),f=Math.abs(u)>=2,v=i||!f,S=(r=e.target,o=r.nodeName||"",!(m.indexOf(o)>-1)),h=f||i&&S;i&&0!==e.button||(z.isDown=!0,z.isMouse=i,s.down(e),b.set(t),t.set(l),n.useDefaultMass().useSpeed(80),function(){var e=z.isMouse?document:c;x.add(e,"touchmove",w).add(e,"touchend",P).add(e,"mousemove",w).add(e,"mouseup",P)}(),a.start(),p.set(s.read(e,"x")),g.set(s.read(e,"y")),d.dispatch("dragStart"),v&&(z.preventClick=!1),h&&e.preventDefault())}function w(n){if(!z.preventScroll&&!z.isMouse){var r=s.read(n,"x").get(),o=s.read(n,"y").get(),i=Math.abs(r-p.get()),u=Math.abs(o-g.get());if(z.preventScroll=i>u,!z.preventScroll&&!z.preventClick)return P()}var a=s.move(n),c=f.reachedAny(l.get()),d=!e.loop&&c?2:1;!z.preventClick&&a&&(z.preventClick=!0),t.addNumber(a/d),n.preventDefault()}function P(){var o=s.up()*(u?y:h)[z.isMouse?"mouse":"touch"],i=t.get()-b.get();Math.abs(i)>=.5&&!z.isMouse&&(z.preventClick=!0),z.isMouse=!1,z.preventScroll=!1,z.isDown=!1,x.removeAll(),n.useSpeed((u?O:M)[z.isMouse?"mouse":"touch"]),function(n){var o=e.scrollTo,i=e.snapSizes,a=e.index,c=Math.abs(n),s=i[a.get()]/2,l=f.reachedAny(t.get()+n);if(u||l||!(c>j&&c<s))o.distance(n,!u);else{var d=-1*r.Direction(n).get(),v=a.clone().add(d);o.index(v.get(),0)}}(o),d.dispatch("dragEnd")}function D(e){z.preventClick&&e.preventDefault()}var T={addActivationEvents:function(){var e=c;S.add(e,"touchmove",(function(){})).add(e,"touchend",(function(){})).add(e,"touchstart",_).add(e,"mousedown",_).add(e,"touchcancel",P).add(e,"contextmenu",P).add(e,"click",D)},clickAllowed:function(){return!z.preventClick},direction:v,isDown:function(){return z.isDown},removeAllEvents:function(){S.removeAll(),x.removeAll()}};return Object.freeze(T)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),o=n(2),i=n(0);t.Mover=function(e){var t=o.roundToDecimals(2),n=e.location,u=e.speed,a=e.mass,c=i.Vector1D(0),s=i.Vector1D(0),l=i.Vector1D(0),d=r.Direction(0),f={speed:u,mass:a};function v(e){return f.speed=e,p}function m(e){return f.mass=e,p}var p={direction:d,location:n,seek:function(e){l.set(e).subtract(n);var t,r=l.magnitude(),i=o.map(r,0,100,0,f.speed);return d.set(l),l.normalize().multiply(i).subtract(c),(t=l).divide(f.mass),s.add(t),p},settle:function(e){var r=e.get()-n.get(),o=!t(r);return o&&n.set(e),o},update:function(){c.add(s),n.add(c),s.multiply(0)},useDefaultMass:function(){return m(a),p},useDefaultSpeed:function(){return v(u),p},useMass:m,useSpeed:v};return Object.freeze(p)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),o=n(0);t.Pointer=function(e){var t={x:"clientX",y:"clientY"},n=o.Vector1D(0),i=o.Vector1D(0),u=o.Vector1D(0),a=o.Vector1D(0),c=r.Direction(0),s=10,l={isMouse:!1,trackPoints:[],trackTime:(new Date).getTime()};function d(e,n){var r=l.isMouse,o=t[n],i=r?e[o]:e.touches[0][o];return a.setNumber(i)}var f={direction:c,down:function(t){l.isMouse=!!t.type.match(/mouse/);var r=d(t,"x");return n.set(r),u.set(r),e.measure(n.get())},move:function(t){var n=d(t,"x"),r=(new Date).getTime();return r-l.trackTime>=s&&(l.trackPoints.push(n.get()),l.trackTime=r),i.set(n).subtract(u),c.set(i),u.set(n),e.measure(i.get())},read:d,up:function(){var t=u.get(),n=l.isMouse?5:4;return u.setNumber(l.trackPoints.slice(-n).map((function(e){return t-e})).sort((function(e,t){return Math.abs(e)<Math.abs(t)?1:-1}))[0]||0),l.trackPoints=[],e.measure(u.get())}};return Object.freeze(f)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ScrollBounds=function(e){var t=e.limit,n=e.location,r=e.mover,o=e.animation,i=e.tolerance,u=t.min,a=t.max,c=t.reachedMin,s=t.reachedMax,l={timeout:0},d={constrain:function(e){if(!l.timeout&&function(e){var t=c(n.get())&&e.get()!==u,r=s(n.get())&&e.get()!==a;return t||r}(e)){var d=t.constrain(e.get());l.timeout=window.setTimeout((function(){e.setNumber(d),r.useSpeed(10).useMass(3),o.start(),l.timeout=0}),i)}}};return Object.freeze(d)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ScrollBy=function(e){var t=e.loop,n=e.limit,r=e.location,o=n.min,i=n.max,u=n.reachedMin,a=n.reachedMax,c=o-i,s={distance:function(e){var n=c*e;return t?n:function(e){var t=r.get()+e;return a(t)?i-r.get():u(t)?o-r.get():e}(n)}};return Object.freeze(s)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=n(2);t.ScrollContain=function(e){var t=e.alignSize,n=e.contentSize,i=e.viewSize,u=e.slideIndexes,a=e.slidesToScroll,c=o.groupNumbers(u,a),s=n>i,l=r.Limit({min:-n+i,max:0});function d(e,t){return c.slice(e,t).reduce((function(e,t){return e.concat(t)}),[])}function f(e){var t=e[0],n=e[e.length-1],o=e.lastIndexOf(t)+1,i=e.indexOf(n);return r.Limit({min:o,max:i})}var v={indexes:function(e){if(!s)return[u];var t=f(e.map(l.constrain)),n=t.min,r=t.max,o=d(0,n),i=c.slice(n,r),a=d(r,e.length);return[o].concat(i.concat([a]))},snaps:function(e){if(!s)return[t.measure(n)];var r=e.map(l.constrain),o=f(r),i=o.min,u=o.max;return r.slice(i-1,u+1)}};return Object.freeze(v)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);t.ScrollLimit=function(e){var t=e.contentSize,n=e.loop,o={measure:function(e){var o=e[0],i=e[e.length-1],u=n?o-t:i,a=o;return r.Limit({min:u,max:a})}};return Object.freeze(o)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);t.ScrollLooper=function(e){var t=e.limit,n=e.location,o=e.chunkSize,i=e.contentSize,u=e.vectors,a=t.min+o.measure(.1),c=t.max+o.measure(.1),s=r.Limit({min:a,max:c}),l=s.reachedMin,d=s.reachedMax,f={loop:function(e){if(function(e){return 0!==e&&(-1===e?l:d)(n.get())}(e)){var t=i*(-1*e);u.forEach((function(e){return e.addNumber(t)}))}}};return Object.freeze(f)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ScrollProgress=function(e){var t=e.location,n=e.limit,r=n.min,o=n.max,i=r-o,u={get:function(){return(t.get()-o)/i}};return Object.freeze(u)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),o=n(1);t.ScrollSnap=function(e){var t,n,i=e.snapSizes,u=e.alignSize,a=e.loop,c=i.map(u.measure),s=(t=o.Limit({min:0,max:i.length-1}),n=r.Counter({limit:t,start:0,loop:a}),i.map((function(e,t){var r=n.clone().set(t+1);return e+c[t]-c[r.get()]}))),l={measure:function(e,t){return s.slice(0,t).reduce((function(e,t){return e-t}),c[0])}};return Object.freeze(l)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ScrollTarget=function(e){var t,n,r,o=e.loop,i=e.limit,u=e.scrollSnaps,a=e.contentSize,c=i.reachedMin,s=i.reachedMax,l=i.reachedAny,d=(t=e.align,n=e.snapSizes,r=e.index.clone(),n.reduce((function(e,o,i){var a=r.set(i).add("end"===t?1:0),c=u[i]-n[a.get()]/2,s=i?e[i-1].end:u[0];return e.concat([{start:s,end:c}])}),[]));function f(e,t){return Math.abs(e)<Math.abs(t)?e:t}var v={byDistance:function(t,n){var r=e.target,i=e.index,f=r.get()+t,v=function(e){for(;s(e);)e-=a;for(;c(e);)e+=a;var t=d.reduce((function(t,n,r){return e<=n.start&&e>n.end?r:t}),0);return{distance:e,index:t}}(f),m=!o&&l(f);if(m||!n){var p=i.min,g=i.max,b=s(f)?p:g;return{distance:t,index:m?b:v.index}}var S={distance:f,index:i.get()},x=0===t?S:v;return{distance:t+function(t){var n=t.distance,r=t.index,i=u[e.index.max],c=o&&n<i&&0===r?n+a:n;return u[r]-c}(x),index:x.index}},byIndex:function(t,n){var r=e.target.get(),i=u[t]-r,c={distance:i,index:t};if(o){var s=i,l=a+i,d=i-a;if(n&&1===e.index.max){var v=f(s,1===n?l:d);c.distance=Math.abs(v)*n}else c.distance=f(f(s,l),d)}return c}};return Object.freeze(v)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ScrollTo=function(e){var t=e.index,n=e.scrollTarget,r=e.animation,o=e.indexPrevious,i=e.events,u=e.target;function a(e){var n=e.distance,a=e.index!==t.get();n&&(r.start(),u.addNumber(n)),a&&(o.set(t.get()),t.set(e.index),i.dispatch("select"))}var c={distance:function(e,t){a(n.byDistance(e,t))},index:function(e,r){var o=t.clone().set(e);a(n.byIndex(o.get(),r))}};return Object.freeze(c)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.SlideLooper=function(e){var t,n,o,i=e.contentSize,u=e.viewSize,a=e.slideSizes,c=e.scrollSnaps,s=Object.keys(a).map(Number),l=s.slice().reverse(),d=(t=c[0]-1,n=v(t,l),o=m(t,n,0),p(n,o,1)).concat(function(){var e=v(u-c[0]-1,s),t=m(i,s,-u);return p(e,-t,0)}());function f(e,t){return e.reduce((function(e,t){return e-a[t]}),t)}function v(e,t){return t.reduce((function(t,n){return f(t,e)>0?t.concat([n]):t}),[])}function m(e,t,n){return t.reduce((function(t,n){var r=t+a[n];return r<e?r:t}),n)}function p(e,t,n){var o=e.slice().sort((function(e,t){return e-t}));return o.map((function(e,u){var a=e,c=i*(n?-1:0),l=i*(n?0:1),d=function(e,t,n){var r=s.length-1;return f(e.map((function(e){return(e+n)%r})),t)}(o.slice(0,u),t,n),v=r.Vector1D(-1),m=r.Vector1D(0);return{point:d,findTarget:function(e){var t=e>d?c:l;return m.setNumber(0).setNumber(t)},location:v,index:a}}))}var g={loop:function(t){var n=e.location;d.forEach((function(e){var r=e.findTarget,o=e.location,i=e.index,u=r(n.get());u.get()!==o.get()&&(t[i].style.left="".concat(u.get(),"%"),o.set(u))}))},loopPoints:d};return Object.freeze(g)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2);t.Translate=function(e){var t=r.roundToDecimals(2),n=e.style,o={value:0},i={to:function(r){var i=t(r.get());o.value!==i&&(o.value=i,getComputedStyle(e).transform,n.transform="translate3d(".concat(i,"%,0px,0px)"))}};return Object.freeze(i)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EventDispatcher=function(){var e={destroy:[],dragEnd:[],dragStart:[],init:[],resize:[],scroll:[],select:[]},t={dispatch:function(n){return e[n].forEach((function(e){return e()})),t},off:function(n,r){var o=e[n];return e[n]=o.filter((function(e){return e!==r})),t},on:function(n,r){var o=e[n];return e[n]=o.concat([r]),t}};return Object.freeze(t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultOptions=Object.freeze({align:"center",containScroll:!1,containerSelector:"*",dragFree:!1,draggable:!0,draggableClass:"is-draggable",draggingClass:"is-dragging",loop:!1,selectedClass:"is-selected",slidesToScroll:1,speed:10,startIndex:0})}])}));