(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4113],{58288:function(e,t,n){"use strict";var o=n(85893),r=n(28276),a=n(67294),l=n(31137),c=n(80402),s=n.n(c);let i=e=>{let{id:t,x:n,y:c,showRemoveBtn:i}=e,{t:u}=(0,r.$G)("common"),[d,h]=(0,a.useState)(!0),[p,m]=(0,a.useState)(!1),[f,_]=(0,a.useState)(!1),[x,g]=(0,a.useState)(1100),b=(0,a.useRef)(null);(0,a.useEffect)(()=>{if(!p&&!d&&b.current&&"yes"!==localStorage.getItem("hideAds"))try{(window.adsbygoogle=window.adsbygoogle||[]).push({}),m(!0)}catch(e){console.error(e)}},[b.current,d]),(0,a.useEffect)(()=>{function e(){x!==window.innerWidth&&g(window.innerWidth)}return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,a.useEffect)(()=>{!d&&x<1100?_(!0):f&&x>=1100&&_(!1)},[x]);let j=i?(0,o.jsx)(l.Z,{text:(0,o.jsxs)(o.Fragment,{children:[u("remove-ads")," ($1)"]}),href:"/account",style:{margin:"4px 0",padding:"0.2em 0",width:"".concat(n,"px")}}):null;return((0,a.useEffect)(()=>{h(!1)},[]),d||"yes"===localStorage.getItem("hideAds")||f)?null:localStorage.getItem("dummyAds")?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("img",{src:"https://picsum.photos/".concat(n,"/").concat(c),className:s().placeholder}),j]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("script",{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"}),(0,o.jsx)("ins",{className:"adsbygoogle",style:{display:"inline-block",width:"".concat(n,"px"),height:"".concat(c,"px")},"data-ad-client":"ca-pub-2284751191864068","data-ad-slot":t,ref:b}),j]})};i.defaultProps={showRemoveBtn:!1},t.Z=i},48155:function(e,t,n){"use strict";var o=n(85893),r=n(9008),a=n.n(r);let l=e=>{let{title:t,description:n,keywords:r,url:l,author:c,assetType:s,image:i,children:u}=e,d="Arch-viz,Game,Unreal,Unity,Blender,Maya,Max,free,cc0,creative commons";0===s&&(d="hdri,hdri haven,ibl,hdr,environment,exr,"+d),1===s&&(d="texture,pbr,scan,png,exr,material,tileable,seamless"+d),2===s&&(d="3D Model,Textured,pbr,gltf,fbx,usd,"+d);let h="https://polyhaven.com"+l;return window.allyourbasearebelongtous=function(){"yes"===localStorage.getItem("hideAds")?(localStorage.removeItem("hideAds"),window.location.reload()):(localStorage.setItem("hideAds","yes"),window.location.reload())},window.poweroverwhelming=function(){"yes"===localStorage.getItem("dummyAds")?(localStorage.removeItem("dummyAds"),window.location.reload()):(localStorage.setItem("dummyAds","yes"),window.location.reload())},(0,o.jsxs)(a(),{children:[(0,o.jsx)("title",{children:"Poly Haven"===t?t:"".concat(t," • Poly Haven")}),(0,o.jsx)("meta",{name:"description",content:n}),(0,o.jsx)("meta",{name:"keywords",content:"".concat(r).concat(r?",":"").concat(d)}),(0,o.jsx)("meta",{name:"author",content:c}),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,o.jsx)("meta",{name:"theme-color",content:"rgb(234, 91, 12)"}),(0,o.jsx)("link",{rel:"canonical",href:h}),(0,o.jsx)("meta",{property:"og:locale",content:"en_US"}),(0,o.jsx)("meta",{property:"og:type",content:"website"}),(0,o.jsx)("meta",{property:"og:title",content:"".concat(t," • Poly Haven")}),(0,o.jsx)("meta",{property:"og:description",content:n}),(0,o.jsx)("meta",{property:"og:url",content:h}),(0,o.jsx)("meta",{property:"og:site_name",content:"Poly Haven"}),i?(0,o.jsx)("meta",{property:"og:image",content:i}):null,(0,o.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,o.jsx)("meta",{property:"twitter:site",content:"@polyhaven"}),i?(0,o.jsx)("meta",{property:"twitter:image",content:i}):null,u]})};l.defaultProps={description:"The Public 3D Asset Library",keywords:"",author:"Poly Haven",assetType:null,image:null,children:null},t.Z=l},28368:function(e,t,n){"use strict";var o=n(85893),r=n(18087),a=n(94278),l=n.n(a);let c=e=>{let{children:t,immersiveScroll:n,library:a,assetPage:c}=e;return(0,o.jsxs)("div",{id:"page",className:"".concat(l().page," ").concat(n?l().immersiveScroll:""," ").concat(a?l().library:""," ").concat(c?l().assetPage:""),children:[(0,o.jsx)("div",{className:l().pageContent,children:t}),(0,o.jsx)(r.Z,{})]})};c.defaultProps={immersiveScroll:!1,library:!1,assetPage:!1},t.Z=c},32378:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var o=n(85893),r=n(28276),a=n(67294),l=n(41664),c=n.n(l),s=n(22316),i=n(5434),u=n(37106),d=n(92067);let h=e=>{let{color:t}=e;return(0,o.jsx)("svg",{width:"100%",height:"100%",viewBox:"0 0 20 20",version:"1.1",xmlns:"http://www.w3.org/2000/svg",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2},children:(0,o.jsxs)("g",{children:[(0,o.jsx)("path",{d:"M5.157,0c-1.224,0 -2.3,0.926 -2.3,2.143l0,4.286c0,1.217 1.076,2.142 2.3,2.142l6.829,0c1.224,0 2.3,-0.925 2.3,-2.142l-0,-4.286c-0,-1.217 -1.076,-2.143 -2.3,-2.143l-6.829,0Zm10.557,1.429l0,4.285c0.805,0 1.429,-0.72 1.429,-1.473l-0,-1.34c-0,-0.752 -0.624,-1.472 -1.429,-1.472Zm-10.764,4.285c0.017,-0 0.033,-0 0.05,0l7.143,0c0.392,0 0.714,0.323 0.714,0.715c0,0.391 -0.322,0.714 -0.714,0.714l-7.143,-0c-0.008,0 -0.017,0 -0.025,0c-0.392,0 -0.715,-0.322 -0.715,-0.714c0,-0.383 0.308,-0.701 0.69,-0.715Zm-2.651,5.715c-1.223,-0 -2.299,0.925 -2.299,2.142l-0,4.286c-0,1.217 1.076,2.143 2.3,2.143l6.829,0c1.224,0 2.3,-0.926 2.3,-2.143l-0,-4.286c-0,-1.217 -1.076,-2.142 -2.3,-2.142l-6.83,-0Zm10.558,2.857l0,4.285c0.804,0 1.429,-0.72 1.429,-1.472l-0,-1.34c-0,-0.753 -0.625,-1.473 -1.429,-1.473Zm-10.764,2.857c0.017,-0.001 0.033,-0.001 0.05,-0l7.143,-0c0.392,-0 0.714,0.322 0.714,0.714c-0,0.392 -0.322,0.714 -0.714,0.714l-7.143,0c-0.008,0.001 -0.017,0.001 -0.025,0.001c-0.392,-0 -0.715,-0.323 -0.715,-0.715c0,-0.383 0.307,-0.701 0.69,-0.714Z",style:{fill:t,fillRule:"nonzero"}}),(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"M16.429,2.857l-0,1.429c0.8,-0 1.297,0.204 1.618,0.524c0.32,0.321 0.524,0.82 0.524,1.619l0,7.142c0,0.8 -0.204,1.298 -0.524,1.619c-0.321,0.32 -0.82,0.524 -1.618,0.524l-2.858,0l0,1.429l2.858,-0c1.057,-0 1.984,-0.3 2.628,-0.943c0.643,-0.644 0.943,-1.571 0.943,-2.629l-0,-7.142c-0,-1.058 -0.3,-1.985 -0.943,-2.629c-0.644,-0.643 -1.571,-0.943 -2.628,-0.943Z",style:{fill:t,fillRule:"nonzero"}})})]})})};h.defaultProps={color:"currentColor"};var p=n(8086),m=n(65062),f=n(60584),_=n.n(f);let x=e=>{let{id:t,size:n,donated:r,short:a}=e;return(0,o.jsxs)("div",{className:_().author,children:[(0,o.jsx)(p.default,{id:t,size:n}),(0,o.jsx)("p",{children:a?t.split(" ")[0]:t}),r&&(0,o.jsx)(m.Z,{color:"#F96854"})]})};x.defaultProps={size:24,donated:!1,short:!1};var g=n(3797),b=n.n(g);let j=e=>{let t,{asset:n,assetID:l,onClick:p,blurUpcoming:m,thumbSize:f,showText:_}=e,{t:g}=(0,r.$G)("time"),{t:j}=(0,r.$G)("library"),w=(0,a.useRef)(null),v=(0,a.useRef)(null),y=Object.values({hdris:{small:[230,172],medium:[371,278],large:[510,382],huge:[790,592]},textures:{small:[188,188],medium:[284,284],large:[368,368],huge:[506,506]},models:{small:[297,198],medium:[450,300],large:[585,390],huge:[801,534]}})[n.type][f],I=m&&0>(0,s.wK)(n.date_published);0>(0,s.wK)(n.date_published)?t={text:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(d.Z,{}),j("early-access")]}),style:b().soon,tooltip:j("$3+ Patrons can log in to download early")}:7>(0,s.wK)(n.date_published)&&(t={text:j("new"),style:b().new});let S=[];n.backplates&&S.push({text:"✔ Backplates: ".concat(j("backplates")),icon:(0,o.jsx)(i.m4,{})}),n.tags.includes("non square")&&S.push({text:"⚠️ Non-square: ".concat(j("non-square")),icon:(0,o.jsx)(u.X_Q,{})}),n.categories.includes("rigged")&&S.push({text:"✔ Rigged: ".concat(j("rigged")),icon:(0,o.jsx)(u.p6G,{})}),n.categories.includes("aerial")&&S.push({text:"✔ Aerial: ".concat(j("aerial")),icon:(0,o.jsx)(u.kE8,{})}),n.lods&&S.push({text:"✔ LODs: ".concat(j("lods")),icon:(0,o.jsx)(u.XDo,{})}),n.geonodes&&S.push({text:"✔ Geometry Nodes: ".concat(j("geonodes")),icon:(0,o.jsx)(h,{})});let N=[];for(let[e,t]of Object.entries(n.authors))"All"===t&&N.push(e);0===N.length&&(N=Object.keys(n.authors));let k="https://cdn.polyhaven.com/asset_img/thumbs/".concat(l,".png?width=").concat(y[0],"&height=").concat(y[1]);return(0,o.jsxs)(c(),{href:"/a/[id]",as:"/a/".concat(l),className:"".concat(b().gridItem," ").concat(I?b().blur:""," ").concat(_?b().showText:""),onClick:p,ref:v,children:[(0,o.jsx)("div",{className:b().author,children:(0,o.jsx)("div",{className:b().authorInner,children:N.sort().map(e=>(0,o.jsx)(x,{id:e,donated:n.donated,short:N.length>1},e))})}),(0,o.jsx)("div",{className:b().thumb,children:(0,o.jsx)("img",{src:k,alt:n.name,ref:w})}),(0,o.jsxs)("div",{className:b().text,children:[(0,o.jsx)("h3",{children:n.name}),(0,o.jsx)("p",{children:(0,s.yV)(1e3*n.date_published,g)})]}),t?(0,o.jsx)("div",{className:"".concat(b().badge," ").concat(t.style),title:t.tooltip,children:t.text}):null,(0,o.jsx)("div",{className:b().indicators,children:S.map(e=>(0,o.jsx)("div",{title:e.text,className:b().indicator,children:e.icon},e.text))})]})};j.defaultProps={onClick:null,blurUpcoming:!0,thumbSize:"medium",showText:!1};var w=j},8086:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var o=n(85893),r=n(44847),a=n.n(r),l=n(71993);let c=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,n=["ef5350","ec407a","ab47bc","7e57c2","5c6bc0","42a5f5","29b6f6","26c6da","26a69a","66bb6a","9ccc65","d4e157","ffee58","ffca28","ffa726","ff7043","8d6e63","bdbdbd","78909c"];return"https://ui-avatars.com/api/?name=".concat(e,"&size=").concat(t,"&background=").concat(n[Math.abs((0,l.Cv)(e)%n.length)])};var s=e=>{let{id:t,size:n}=e;return(0,o.jsx)("img",{src:"https://cdn.polyhaven.com/people/".concat(t,".jpg?width=").concat(n),width:n,height:n,onError:e=>{let o=e.target;o.src=c(t,n)},className:a().avatar})}},14443:function(e,t,n){"use strict";var o=n(85893),r=n(90661),a=n.n(r);let l=e=>{let{icon:t,label:n,onClick:r,active:l,children:c}=e;return(0,o.jsxs)("div",{className:a().wrapper,children:[(0,o.jsxs)("div",{className:"".concat(a().button," ").concat(l?a().active:""),onClick:r,children:[(0,o.jsx)("div",{className:a().icon,children:t}),n&&(0,o.jsx)("div",{className:a().label,children:n})]}),c?(0,o.jsx)("div",{className:a().menu,children:c}):null]})};l.defaultProps={label:null,active:!1,onClick:null,children:null},t.Z=l},40133:function(e,t,n){"use strict";var o=n(85893),r=n(84436),a=n(80180),l=n.n(a);let c=e=>{let{disabled:t,tooltip:n,tooltipSide:a,style:c,children:s}=e;return t?(0,o.jsxs)("div",{className:l().disabled,"data-tip":n,style:c,children:[(0,o.jsx)("div",{className:l().contents,children:s}),(0,o.jsx)(r.Z,{place:a})]}):s};c.defaultProps={disabled:!0,style:{},tooltip:null,tooltipSide:null},t.Z=c},67571:function(e,t,n){"use strict";var o=n(85893),r=n(67294),a=n(5434),l=n(84436),c=n(55123),s=n.n(c);let i=e=>{let{value:t,options:n,label:c,sub:i,onChange:u,small:d,tooltipSide:h,tooltipID:p}=e,[m,f]=(0,r.useState)(!1),_=(0,r.useRef)(null),x=e=>{m&&_.current&&!_.current.contains(e.target)&&f(!1)},g=e=>{f(!1),u(e.target.dataset.value)};(0,r.useEffect)(()=>(document.addEventListener("click",x,!0),()=>{document.removeEventListener("click",x,!0)}));let b=(0,o.jsx)(o.Fragment,{children:Object.keys(n)[0]});return Object.keys(n).includes(t)&&(b=d?(0,o.jsx)(o.Fragment,{children:n[t].icon||n[t].label}):(0,o.jsxs)(o.Fragment,{children:[n[t].icon?n[t].icon:null,n[t].label]})),(0,o.jsxs)("div",{className:d?s().wrapperSmall:s().wrapper,ref:_,children:[(0,o.jsxs)("div",{className:d?s().buttonSmall:s().button,onClick:()=>{f(!m)},children:[c?"".concat(c,":"):null,(0,o.jsx)("div",{className:s().buttonValue,children:b}),(0,o.jsx)("div",{className:s().arrow,children:(0,o.jsx)(a.Yc6,{})})]}),(0,o.jsx)("div",{className:"".concat(s().menu," ").concat(m?s().show:null),children:Object.keys(n).map((e,r)=>(0,o.jsxs)("div",{"data-value":e,"data-tip":n[e].tooltip||null,"data-for":p,className:"".concat(s().option," ").concat(e===t?s().active:null),onClick:g,children:[n[e].icon?n[e].icon:null,(0,o.jsxs)("div",{className:s().label,children:[n[e].label,n[e].sub?(0,o.jsx)("span",{className:s().sub,children:n[e].sub}):null]})]},r))}),(0,o.jsx)(l.Z,{id:p,place:h})]})};i.defaultProps={label:null,sub:null,small:!1,tooltipSide:"right",tooltipID:"dropdown"},t.Z=i},92067:function(e,t,n){"use strict";var o=n(85893);let r=e=>{let{color:t}=e;return(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1080 1080",children:(0,o.jsx)("path",{fill:t,d:"M1033.05,324.45c-0.19-137.9-107.59-250.92-233.6-291.7c-156.48-50.64-362.86-43.3-512.28,27.2  C106.07,145.41,49.18,332.61,47.06,519.31c-1.74,153.5,13.58,557.79,241.62,560.67c169.44,2.15,194.67-216.18,273.07-321.33  c55.78-74.81,127.6-95.94,216.01-117.82C929.71,603.22,1033.27,483.3,1033.05,324.45z"})})};r.defaultProps={color:"#ffffff"},t.Z=r},41644:function(e,t,n){"use strict";var o=n(85893),r=n(5434),a=n(47307),l=n.n(a);let c=e=>{let{on:t,onClick:n,labelOn:r,labelOff:a}=e;return(0,o.jsxs)("div",{onClick:n,className:l().wrapper,children:[(0,o.jsx)("div",{className:"".concat(l().toggle," ").concat(t?l().on:"")}),(0,o.jsx)("div",{className:"".concat(l().label," ").concat(t?"":l().sel),children:a}),(0,o.jsx)("div",{className:"".concat(l().label," ").concat(t?l().sel:""),children:r})]})};c.defaultProps={labelOn:(0,o.jsx)(r.HhX,{}),labelOff:(0,o.jsx)(r.FU5,{})},t.Z=c},84436:function(e,t,n){"use strict";var o=n(85893),r=n(24762),a=n(92360),l=n.n(a);let c=e=>{let{id:t,place:n}=e;return(0,o.jsx)(r.Z,{id:t,place:n,delayShow:250,multiline:!0,border:!0,borderColor:"rgba(190, 111, 255, 0.5)",backgroundColor:"rgb(60, 60, 60)",className:l().tooltip})};c.defaultProps={id:null,place:null},t.Z=c},72806:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var o=n(67294);function r(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],[n,r]=(0,o.useState)(0),[a,l]=(0,o.useState)(0);return(0,o.useEffect)(()=>{function t(){e&&e.current&&(e.current.offsetWidth!==n&&r(e.current.offsetWidth),e.current.offsetHeight!==a&&l(e.current.offsetHeight))}return t(),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},t),{width:n,height:a}}},38099:function(e,t,n){"use strict";function o(e){return e[Math.floor(Math.random()*e.length)]}function r(e){for(let t=e.length-1;t>0;t--){let n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}function a(e){let t=Object.keys(e).sort(function(t,n){return e[n]-e[t]}),n={};for(let o of t)n[o]=e[o];return n}function l(e){let t={};for(let n of e){let e=parseInt(n);n.endsWith("k")&&(e*=1024),t[n]=e}return Object.keys(t).sort(function(e,n){return t[e]-t[n]})}function c(e){return e.sort((e,t)=>e.localeCompare(t,void 0,{sensitivity:"base"}))}function s(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return e.sort((e,o)=>{let r=t[e],a=t[o];for(let l of n)!r&&e.startsWith(l)&&(r=t[l]),!a&&o.startsWith(l)&&(a=t[l]);r=r||t["ANYTHING ELSE"];let l=0;return r!==(a=a||t["ANYTHING ELSE"])&&(l=r<a?-1:1),l})}function i(e,t){let n=[];for(let o=0;o<e.length;o+=t){let r=e.slice(o,o+t);n.push(r)}return n}n.d(t,{Mn:function(){return o},Rw:function(){return l},Sy:function(){return r},ej:function(){return a},nD:function(){return s},nl:function(){return c},qd:function(){return i}})},20199:function(e,t,n){"use strict";n.d(t,{i:function(){return a}});var o=n(92606),r=n(92700);function a(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1];return"all"===e?"All Assets":Number.isInteger(e)?r[e]+(t?"s":""):r[o[e]]+(t?"s":"")}},22316:function(e,t,n){"use strict";function o(e){return(Date.now()-1e3*e)/1e3/60/60/24}function r(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o={year:3154e7,month:2628e6,week:6048e5,day:864e5,hour:36e5,today:-1/0},r=Date.now()-e,a=r>0?"past":"future";r=Math.abs(r);let l=Object.keys(o)[Object.values(o).findIndex(e=>r>=e)],c=Math.floor(r/o[l]),s="today"===l?t("today"):t("".concat(a,".").concat(l),{count:c});return n?[c,s]:s}function a(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o={year:3154e7,month:2628e6,week:6048e5,day:864e5,hour:36e5,minute:6e4,second:1e3,millisecond:-1/0},r=e-t;r=Math.abs(r);let a=Object.keys(o)[Object.values(o).findIndex(e=>r>=e)];n&&(a="millisecond"===a?"millisecond":Object.keys(o)[Object.values(o).findIndex(e=>r>=e)+1]);let l=Math.floor(r/o[a]);return"".concat(l," ").concat(a).concat(1===l?"":"s")}function l(e,t,n){let o=Date.now();return o<(t*=1e3)?e=(e||0)+1e7:o-864e5<t&&(e=(e||0)+1e4),e/Math.pow(Math.abs(o-t)+1,1.7)}function c(e,t){let n=Date.now();return(e=e||0)/(n-(t*=1e3))}n.d(t,{j7:function(){return c},jB:function(){return l},qt:function(){return a},wK:function(){return o},yV:function(){return r}})},19522:function(e,t,n){"use strict";async function o(e){let t=null;return await fetch("/api/patronInfo",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({uuid:e})}).then(e=>e.json()).then(e=>{t=e}),t}async function r(e,t){t.uuid=e;let n=null;return await fetch("/api/setPatronInfo",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(e=>e.json()).then(e=>{n=e}),n}async function a(e,t){let n=null;return await fetch("/api/nextcloudInvite",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({uuid:e,email:t})}).then(e=>e.json()).then(e=>{n=e}),n}async function l(e,t){let n=null;return await fetch("/api/sponsorAsset",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({uuid:e,assetID:t})}).then(e=>e.json()).then(e=>{n=e}),n}n.d(t,{Cz:function(){return a},JS:function(){return r},h0:function(){return l},qS:function(){return o}})},71993:function(e,t,n){"use strict";function o(e){return e.toLowerCase().split(" ").map(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}).join(" ")}function r(e){return e.split("/").pop()}function a(e){let t=0;for(let n=0,o=e.length;n<o;n++)t=(t<<5)-t+e.charCodeAt(n)|0;return t}function l(e){return e<1e3?e.toString():e<1e6?Math.round(e/1e3)+"K":e<1e9?Math.round(e/1e6)+"M":e<1e12?Math.round(e/1e9)+"B":Math.round(e/1e12)+"T"}n.d(t,{Cv:function(){return a},Qs:function(){return o},sp:function(){return r},uf:function(){return l}})},80402:function(e){e.exports={placeholder:"Ads_placeholder__WdaRX"}},3797:function(e){e.exports={gridItem:"GridItem_gridItem__0cuEz",text:"GridItem_text__HzSp8",badge:"GridItem_badge__o1VhV",badgeSample:"GridItem_badgeSample__QRzsc",soon:"GridItem_soon__xmWuE",indicators:"GridItem_indicators__QSdju",authorInner:"GridItem_authorInner__7xwsr",blur:"GridItem_blur__30m7f",thumb:"GridItem_thumb__M8icc",skelly:"GridItem_skelly__0vtAV",turnaround:"GridItem_turnaround__3Suwu",showText:"GridItem_showText__Omf4U",new:"GridItem_new__I7hTW",indicator:"GridItem_indicator__8mc__",author:"GridItem_author__rjldT",small:"GridItem_small__aeYnn"}},60584:function(e){e.exports={author:"SimpleAuthorCredit_author__3jVMI"}},44847:function(e){e.exports={avatar:"Avatar_avatar__TXeVM",patron:"Avatar_patron__sC5HV",staffAvatar:"Avatar_staffAvatar__icK7F",staffInfoCompact:"Avatar_staffInfoCompact__jPP_f",staffInfo:"Avatar_staffInfo__OsmVo"}},90661:function(e){e.exports={wrapper:"IconButton_wrapper__oOa2E",menu:"IconButton_menu__tNIWL",button:"IconButton_button__RSJAG",label:"IconButton_label__Mkq8x",active:"IconButton_active__Z5xiw",icon:"IconButton_icon__s11cP"}},80180:function(e){e.exports={disabled:"Disabled_disabled__Fv72R",contents:"Disabled_contents__sFa7N"}},55123:function(e){e.exports={wrapper:"Dropdown_wrapper__Xa_YT",button:"Dropdown_button__yI6bB",arrow:"Dropdown_arrow__EbaGQ",wrapperSmall:"Dropdown_wrapperSmall__lMNH2",buttonSmall:"Dropdown_buttonSmall__QJHaL",buttonValue:"Dropdown_buttonValue__UWP5B",menu:"Dropdown_menu__e5EEZ",option:"Dropdown_option__cziu8",sub:"Dropdown_sub__5iePy",label:"Dropdown_label__KjTj7",active:"Dropdown_active__u5Aa5",show:"Dropdown_show__hH3TG"}},47307:function(e){e.exports={wrapper:"Switch_wrapper__QFtkD",label:"Switch_label__TCYCF",sel:"Switch_sel___PoN0",toggle:"Switch_toggle___69Dy",on:"Switch_on__8zGFq"}},92360:function(e){e.exports={tooltip:"Tooltip_tooltip__Dzryr"}},92700:function(e){"use strict";e.exports=JSON.parse('["HDRI","Texture","Model"]')},92606:function(e){"use strict";e.exports=JSON.parse('{"hdris":0,"textures":1,"models":2,"all":null}')}}]);