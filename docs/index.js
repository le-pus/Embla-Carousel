!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("EmblaCarousel",[],t):"object"==typeof exports?exports.EmblaCarousel=t():e.EmblaCarousel=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Vector1D=function(e){var t={value:e};function n(){return t.value}function r(e){return t.value/=e,o}function i(){return n()}var o={add:function(e){return t.value+=e.get(),o},addNumber:function(e){return t.value+=e,o},divide:r,get:n,magnitude:i,multiply:function(e){return t.value*=e,o},normalize:function(){var e=i();return 0!==e&&r(e),o},set:function(e){return t.value=e.get(),o},setNumber:function(e){return t.value=e,o},subtract:function(e){return t.value-=e.get(),o},subtractNumber:function(e){return t.value-=e,o}};return Object.freeze(o)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.Direction=function(e){var t=r.Vector1D(n(e));function n(e){return 0===e?0:e/Math.abs(e)}var i={get:t.get,set:function(e){var r=n(e.get());return 0!==r&&t.setNumber(r),i}};return Object.freeze(i)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.rectWidth=function(e){return e.getBoundingClientRect().width},t.map=function(e,t,n,r,i){return r+(e-t)/(n-t)*(i-r)},t.arrayFromCollection=function(e){return Array.prototype.slice.call(e)},t.debounce=function(e,t){var n={id:0};return function(){window.clearTimeout(n.id),n.id=window.setTimeout(e,t)||0}},t.groupNumbers=function(e,t){for(var n=[],r=0;r<e.length;r+=t)n.push(e.slice(r,r+t));return n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EventStore=function(){var e={listeners:[]},t={add:function(n,r,i){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return n.addEventListener(r,i,o),e.listeners.push(function(){return n.removeEventListener(r,i,o)}),t},removeAll:function(){return e.listeners.filter(function(e){return e()}),t}};return Object.freeze(t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Limit=function(e){var t=e.min,n=e.max,r={max:t,min:n},i={min:t,max:n};function o(e){return e<t}function u(e){return e>n}function a(e){var t=o(e)&&"min",n=u(e)&&"max";return t||n||""}var c={constrain:function(e){var t=a(e);return t?i[t]:e},loop:function(e){var t=a(e);return t?r[t]:e},max:n,min:t,reachedAny:function(e){return o(e)||u(e)},reachedMax:u,reachedMin:o};return Object.freeze(c)}},function(e,t,n){e.exports=n(6)},function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(7),o=n(22),u=n(3),a=n(23),c=n(2);function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={active:!1,windowWidth:0},s=r({},a.defaultOptions,t),d=o.EventDispatcher(),l=u.EventStore(),f=c.debounce(function(){var e=window.innerWidth;e!==n.windowWidth&&(n.windowWidth=e,S(),d.dispatch("resize"))},500),v=S,m={},p={},g=d.on,b=d.off;function h(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=!n.active;if(n.windowWidth=window.innerWidth,function(){if(!e)throw new Error("No root element provided 😢");var t=s.containerSelector,r=e.querySelector(t);if(!r)throw new Error("No valid container element found 😢");p.root=e,p.container=r,p.slides=c.arrayFromCollection(r.children),n.active=!0}(),p.slides.length>0){var u=p.root,a=p.container,v=p.slides,g=r(s,t),b=i.Engine(u,a,v,g,d);r(m,b);if(l.add(window,"resize",f),v.forEach(y),m.translate.to(m.mover.location),s.loop&&1===v.length)return h({loop:!1});s.draggable&&function(){var e=p.root.classList,t=s.draggingClass,n=s.draggableClass;m.pointer.addActivationEvents(),d.on("dragStart",function(){return e.add(t)}),d.on("dragEnd",function(){return e.remove(t)}),e.add(n)}(),s.loop&&m.shifter.shiftInfinite(v),o&&(d.on("select",x),d.on("init",x),setTimeout(function(){return d.dispatch("init")},0))}}function x(){var e=p.slides,t=m.index,n=m.indexPrevious,r=m.indexGroups,i=s.selectedClass,o=r[n.get()],u=r[t.get()];o.forEach(function(t){return e[t].classList.remove(i)}),u.forEach(function(t){return e[t].classList.add(i)})}function y(t,n){l.add(t,"focus",function(){var t=Math.floor(n/s.slidesToScroll),r=n?t:n;e.scrollLeft=0,O(r)},!0)}function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(n.active){var t=r({startIndex:m.index.get()},e);M(),h(t)}}function M(){var e=p.root,t=p.container,n=p.slides;m.pointer.removeAllEvents(),m.animation.stop(),l.removeAll(),e.classList.remove(s.draggableClass),t.style.transform="",n.forEach(function(e){return e.style.left=""})}function O(e){m.mover.useDefaultMass().useDefaultSpeed(),m.scroll.toIndex(e)}h(s);var j={canScrollNext:function(){var e=m.index;return!s.loop&&e.get()!==e.max},canScrollPrev:function(){var e=m.index;return!s.loop&&e.get()!==e.min},changeOptions:v,containerNode:function(){return p.container},destroy:function(){n.active=!1,M(),d.dispatch("destroy")},off:b,on:g,previousScrollSnap:function(){return m.indexPrevious.get()},scrollNext:function(){m.mover.useDefaultMass().useDefaultSpeed(),m.scroll.toNext()},scrollPrev:function(){m.mover.useDefaultMass().useDefaultSpeed(),m.scroll.toPrevious()},scrollSnapList:function(){return m.indexGroups.map(function(e){return{slideIndexes:e,slideNodes:e.map(function(e){return p.slides[e]})}})},scrollTo:O,selectedScrollSnap:function(){return m.index.get()},slideNodes:function(){return p.slides}};return Object.freeze(j)}t.EmblaCarousel=s,t.default=s,e.exports=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(8),i=n(9),o=n(10),u=n(11),a=n(12),c=n(13),s=n(14),d=n(15),l=n(4),f=n(16),v=n(17),m=n(18),p=n(19),g=n(20),b=n(21),h=n(2),x=n(0);t.Engine=function(e,t,n,y,S){var M=y.align,O=y.startIndex,j=y.loop,z=y.speed,P=y.dragFree,_=y.slidesToScroll,D=y.containScroll,w=Math.ceil(n.length/_)-1,E=Object.keys(n).map(Number),T=h.groupNumbers(E,_),N=l.Limit({min:0,max:w}),C=u.Counter({limit:N,start:O,loop:j}),A=C.clone(),k=h.rectWidth(t),F=o.ChunkSize(k),L=F.root,V=n.map(h.rectWidth).map(F.measure),I=h.groupNumbers(V,_).map(function(e){return e.reduce(function(e,t){return e+t})}),W=I.reduce(function(e,t){return e+t}),G=r.AlignSize({align:M,viewSize:L}),B=!j&&D,X=p.SnapPosition({alignSize:G,contain:B,contentSize:W,index:C,snapSizes:I,viewSize:L}),q=I.map(X.measure),R=-W+F.measure(1),U=q[0],Y=j?U+R:q[C.max],H=l.Limit({max:U,min:Y}),J=i.Animation(function(){ne.mover.seek(Z).update(),te.isDown()||(j||ne.edgeGuard.constrain(Z),ne.mover.settle(Z)&&(ne.animation.stop(),ne.translate.useType("x"))),j&&(ne.edgeLooper.loop(te.isDown()?te.direction.get():ne.mover.direction.get()),ne.shifter.shiftInfinite(n)),ne.translate.to(ne.mover.location).useType("x3d"),ne.animation.proceed()}),K=q[C.get()],Q=x.Vector1D(K),Z=x.Vector1D(K),$=f.Mover({location:Q,speed:z,mass:1}),ee=m.Scroller({animation:J,events:S,findTarget:g.TargetFinder({align:M,contentSize:W,dragFree:P,index:C,limit:H,loop:j,snapPositions:q,snapSizes:I,target:Z}),index:C,indexPrevious:A,target:Z}),te=a.DragBehaviour({animation:J,dragFree:P,element:e,events:S,index:C,limit:H,location:Q,loop:j,mover:$,pointer:v.Pointer(F),scroll:ee,snapSizes:I,target:Z}),ne={animation:J,edgeGuard:c.EdgeGuard({animation:J,limit:H,location:Q,mover:$,tolerance:50}),edgeLooper:s.EdgeLooper({contentSize:W,limit:H,location:Q,vectors:[Q,Z]}),index:C,indexGroups:T,indexPrevious:A,mover:$,pointer:te,scroll:ee,shifter:d.InfiniteShifter({contentSize:W,location:Q,slideSizes:V,snapPositions:q,viewSize:L}),target:Z,translate:b.Translate(t)};return Object.freeze(ne)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AlignSize=function(e){var t=e.viewSize,n=e.align,r={start:function(e){return 0*e},center:function(e){return(t-e)/2},end:function(e){return t-e}},i={measure:function(e){return r[n](e)}};return Object.freeze(i)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Animation=function(e){var t=requestAnimationFrame.bind(window),n=cancelAnimationFrame.bind(window),r={animationFrame:0};function i(e,t){return function(){return e===!!r.animationFrame&&t(),u}}function o(){r.animationFrame=t(e)}var u={proceed:i(!0,o),start:i(!1,o),stop:i(!0,function(){n(r.animationFrame),r.animationFrame=0})};return Object.freeze(u)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChunkSize=function(e){var t={root:e},n={measure:function(e){return e/t.root*100},root:100};return Object.freeze(n)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Counter=function e(t){var n=t.start,r=t.limit,i=t.loop,o=r.min,u=r.max,a=i?"loop":"constrain",c={value:l(n)};function s(){return c.value}function d(e){return c.value=l(e),f}function l(e){return r[a](e)}var f={add:function e(t){if(0!==t){var n=t/Math.abs(t);return d(s()+n),e(t+-1*n)}return f},clone:function(){return e({start:s(),limit:r,loop:i})},get:s,max:u,min:o,set:d};return Object.freeze(f)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(3),o=n(0);t.DragBehaviour=function(e){var t=e.target,n=e.mover,u=e.dragFree,a=e.animation,c=e.element,s=e.pointer,d=e.location,l=e.events,f=e.limit,v=s.direction,m=["INPUT","SELECT","TEXTAREA"],p=o.Vector1D(0),g=o.Vector1D(0),b=o.Vector1D(0),h=i.EventStore(),x=i.EventStore(),y={mouse:2.5,touch:3.5},S={mouse:4,touch:7},M={mouse:12,touch:14},O={mouse:6,touch:5},j=4,z={isDown:!1,isMouse:!1,preventClick:!1,preventScroll:!1};function P(e){var r=e.target,i=t.get()-d.get(),o=Math.abs(i)>=2;z.isMouse=!!e.type.match(/mouse/),z.isDown=!0,s.down(e),b.set(t),t.set(d),n.useSpeed(80).useDefaultMass(),a.start(),function(){var e=z.isMouse?document:c;x.add(e,"touchmove",_).add(e,"touchend",D).add(e,"mousemove",_).add(e,"mouseup",D)}(),l.dispatch("dragStart"),o&&e.preventDefault(),o||(z.preventClick=!1),z.isMouse&&!function(e){var t=e.nodeName||"";return m.indexOf(t)>-1}(r)&&e.preventDefault(),z.isMouse||(p.set(s.read(e,"x")),g.set(s.read(e,"y")))}function _(n){if(z.preventScroll||z.isMouse){var r=s.move(n),i=f.reachedAny(d.get()),o=!e.loop&&i?2:1;t.addNumber(r/o),n.preventDefault()}else{var u=s.read(n,"x").get(),a=s.read(n,"y").get(),c=Math.abs(u-p.get()),l=Math.abs(a-g.get());z.preventScroll=c>l,z.preventScroll||z.preventClick||D()}}function D(){var i=s.up()*(u?S:y)[z.isMouse?"mouse":"touch"],o=t.get()-b.get();Math.abs(o)>=.5&&(z.preventClick=!0),z.isMouse=!1,z.preventScroll=!1,z.isDown=!1,x.removeAll(),n.useSpeed((u?O:M)[z.isMouse?"mouse":"touch"]),function(n){var i=e.scroll,o=e.snapSizes,a=e.index,c=Math.abs(n),s=o[a.get()]/2,d=f.reachedAny(t.get()+n);if(u||d||!(c>j&&c<s))i.toDistance(n);else{var l=-1*r.Direction(n).get(),v=a.clone().add(l);i.toIndex(v.get())}}(i),l.dispatch("dragEnd")}function w(e){z.preventClick&&e.preventDefault()}var E={addActivationEvents:function(){var e=c;h.add(e,"touchmove",function(){}).add(e,"touchend",function(){}).add(e,"touchstart",P).add(e,"touchcancel",D).add(e,"mousedown",P).add(e,"click",w)},direction:v,isDown:function(){return z.isDown},removeAllEvents:function(){h.removeAll(),x.removeAll()}};return Object.freeze(E)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EdgeGuard=function(e){var t=e.limit,n=e.location,r=e.mover,i=e.animation,o=e.tolerance,u=t.min,a=t.max,c=t.reachedMin,s=t.reachedMax,d={timeout:0},l={constrain:function(e){if(!d.timeout&&function(e){var t=n.get(),r=c(t)&&e.get()!==u,i=s(t)&&e.get()!==a;return r||i}(e)){var l=t.constrain(e.get());d.timeout=window.setTimeout(function(){e.setNumber(l),r.useSpeed(10).useMass(3),i.start(),d.timeout=0},o)}}};return Object.freeze(l)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EdgeLooper=function(e){var t=e.limit,n=e.location,r=e.contentSize,i=e.vectors,o=t.reachedMin,u=t.reachedMax,a={loop:function(e){if(function(e){return 0!==e&&(-1===e?o:u)(n.get())}(e)){var t=r*(-1*e);i.forEach(function(e){return e.addNumber(t)})}}};return Object.freeze(a)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.InfiniteShifter=function(e){var t,n,i,o=e.contentSize,u=e.viewSize,a=e.slideSizes,c=e.snapPositions,s=Object.keys(a).map(Number),d=s.slice().reverse(),l=(t=c[0]-1,n=v(t,d),i=m(t,n,0),p(n,i,1)).concat(function(){var e=v(u-c[0]-1,s),t=m(o,s,-u);return p(e,-t,0)}());function f(e,t){return e.reduce(function(e,t){return e-a[t]},t)}function v(e,t){return t.reduce(function(t,n){return f(t,e)>0?t.concat([n]):t},[])}function m(e,t,n){return t.reduce(function(t,n){var r=t+a[n];return r<e?r:t},n)}function p(e,t,n){var i=e.slice().sort(function(e,t){return e-t});return i.map(function(e,u){var a=e,c=o*(n?-1:0),d=o*(n?0:1),l=function(e,t,n){var r=s.length-1;return f(e.map(function(e){return(e+n)%r}),t)}(i.slice(0,u),t,n),v=r.Vector1D(-1);return{point:l,findTarget:function(e){var t=r.Vector1D(0),n=e>l?c:d;return t.setNumber(n)},location:v,index:a}})}var g={shiftInfinite:function(t){var n=e.location;l.forEach(function(e){var r=e.findTarget,i=e.location,o=e.index,u=r(n.get());u.get()!==i.get()&&(t[o].style.left="".concat(u.get(),"%"),i.set(u))})},shiftPoints:l};return Object.freeze(g)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(2),o=n(0);t.Mover=function(e){var t=e.location,n=e.speed,u=e.mass,a=o.Vector1D(0),c=o.Vector1D(0),s=o.Vector1D(0),d=r.Direction(0),l={speed:n,mass:u};function f(e){return l.speed=e,m}function v(e){return l.mass=e,m}var m={direction:d,location:t,seek:function(e){s.set(e).subtract(t);var n,r=s.magnitude(),o=i.map(r,0,100,0,l.speed);return d.set(s),s.normalize().multiply(o).subtract(a),(n=s).divide(l.mass),c.add(n),m},settle:function(e){var n=e.get()-t.get(),r=!(Math.round(100*n)/100);return r&&t.set(e),r},update:function(){return a.add(c),t.add(a),c.multiply(0),m},useDefaultMass:function(){return v(u),m},useDefaultSpeed:function(){return f(n),m},useMass:v,useSpeed:f};return Object.freeze(m)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(0);t.Pointer=function(e){var t={x:"clientX",y:"clientY"},n=i.Vector1D(0),o=i.Vector1D(0),u=i.Vector1D(0),a=i.Vector1D(0),c=r.Direction(0),s=10,d={isMouse:!1,trackPoints:[],trackTime:(new Date).getTime()};function l(e,n){var r=d.isMouse,i=t[n],o=r?e[i]:e.touches[0][i];return a.setNumber(o)}var f={direction:c,down:function(t){d.isMouse=!!t.type.match(/mouse/);var r=l(t,"x");return n.set(r),u.set(r),e.measure(n.get())},move:function(t){var n=l(t,"x"),r=(new Date).getTime();return r-d.trackTime>=s&&(d.trackPoints.push(n.get()),d.trackTime=r),o.set(n).subtract(u),c.set(o),u.set(n),e.measure(o.get())},read:l,up:function(){var t=u.get(),n=d.isMouse?5:4;return u.setNumber(d.trackPoints.slice(-n).map(function(e){return t-e}).sort(function(e,t){return Math.abs(e)<Math.abs(t)?1:-1})[0]||0),d.trackPoints=[],e.measure(u.get())}};return Object.freeze(f)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Scroller=function(e){var t=e.index,n=e.findTarget,r=e.animation;function i(n){var i=e.indexPrevious,o=e.events,a=e.target,c=n.distance,s=n.index!==t.get();return c&&(r.start(),a.addNumber(c)),s&&(i.set(t.get()),t.set(n.index),o.dispatch("select")),u}function o(e,t){return i(n.byIndex(e.get(),t)),u}var u={toDistance:function(e){return i(n.byDistance(e)),u},toIndex:function(e){return o(t.clone().set(e),0),u},toNext:function(){return o(t.clone().add(1),-1),u},toPrevious:function(){return o(t.clone().add(-1),1),u}};return Object.freeze(u)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4);t.SnapPosition=function(e){var t,n,i,o=e.alignSize,u=e.contentSize,a=e.snapSizes,c=e.viewSize,s=a.map(o.measure),d=u>=c,l=a.map(function(t,n){var r=e.index.clone().set(n+1);return t+s[n]-s[r.get()]}),f=(t=e.index.max,n=c-a[t]-s[t],i=v(t)+n,r.Limit({min:i,max:0}));function v(e){return l.slice(0,e).reduce(function(e,t){return e-t},s[0])}var m={measure:function(t,n){var r=v(n);return e.contain?function(e){if(d){var t=f.min,n=f.max;return e<t?t:e>n?n:e}return o.measure(u)}(r):r}};return Object.freeze(m)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TargetFinder=function(e){var t,n,r,i=e.loop,o=e.limit,u=e.snapPositions,a=e.contentSize,c=o.reachedMin,s=o.reachedMax,d=o.reachedAny,l=(t=e.align,n=e.snapSizes,r=e.index.clone(),n.reduce(function(e,i,o){var a=r.set(o).add("end"===t?1:0),c=u[o]-n[a.get()]/2,s=o?e[o-1].end:u[0];return e.concat([{start:s,end:c}])},[]));function f(e,t){return Math.abs(e)<Math.abs(t)?e:t}var v={byDistance:function(t){var n=e.target,r=e.dragFree,o=e.index,f=n.get()+t,v=function(e){for(;s(e);)e-=a;for(;c(e);)e+=a;var t=l.reduce(function(t,n,r){return e<n.start&&e>n.end?r:t},0);return{distance:e,index:t}}(f),m=!i&&d(f);if(m||r){var p=o.min,g=o.max,b=s(f)?p:g;return{distance:t,index:m?b:v.index}}var h={distance:f,index:o.get()},x=0===t?h:v;return{distance:t+function(t){var n=t.distance,r=t.index,o=u[e.index.max],c=i&&n<o&&0===r?n+a:n;return u[r]-c}(x),index:x.index}},byIndex:function(t,n){var r=e.target.get(),o=u[t]-r,c={distance:o,index:t};if(i){var s=o,d=a+o,l=o-a;if(n&&1===e.index.max){var v=f(s,1===n?d:l);c.distance=Math.abs(v)*n}else c.distance=f(f(s,d),l)}return c}};return Object.freeze(v)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Translate=function(e){var t={type:"x"},n={x:function(e){return"translateX(".concat(e,"%)")},x3d:function(e){return"translate3d(".concat(e,"%,0px,0px)")}},r={to:function(i){var o=t.type,u=i.get();return e.style.transform=n[o](u),r},useType:function(e){return t.type=e,r}};return Object.freeze(r)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EventDispatcher=function(){var e={destroy:[],dragEnd:[],dragStart:[],init:[],resize:[],select:[]},t={dispatch:function(n){return e[n].forEach(function(e){return e()}),t},off:function(n,r){var i=e[n];return e[n]=i.filter(function(e){return e!==r}),t},on:function(n,r){var i=e[n];return e[n]=i.concat([r]),t}};return Object.freeze(t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultOptions=Object.freeze({align:"center",containScroll:!1,containerSelector:"*",dragFree:!1,draggable:!0,draggableClass:"is-draggable",draggingClass:"is-dragging",loop:!1,selectedClass:"is-selected",slidesToScroll:1,speed:10,startIndex:0})}])});