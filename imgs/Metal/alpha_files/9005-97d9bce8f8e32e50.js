(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9005],{33e3:function(e,r,n){"use strict";n.d(r,{Z:function(){return _}});var o=n(85893),t=n(41664),s=n.n(t),a=e=>{let{id:r,data:n}=e;return(0,o.jsx)("a",{href:n.link,rel:"noopener",children:(0,o.jsx)("img",{src:"https://cdn.polyhaven.com/corporate_sponsors/".concat(n.logo),alt:n.name,title:n.name},r)})},l=n(2329),c=n(30527),i=n(5434),p=n(31372),h=n.n(p);let d=e=>{let{header:r,home:n,hideInfoBtn:t}=e,{data:p,error:d}=(0,c.Z)("/corporate",{revalidateOnFocus:!1});if(d)return(0,o.jsx)("div",{className:h().wrapper,children:"Error fetching corporate sponsors"});if(!p)return(0,o.jsx)("div",{className:h().wrapper,children:(0,o.jsx)(l.Z,{})});let _=Object.keys(p).sort((e,r)=>p[e].name.localeCompare(p[r].name)),m=_.filter(e=>3===p[e].rank),x=_.filter(e=>2===p[e].rank),u=[];return n||(u=_.filter(e=>1===p[e].rank)),(0,o.jsxs)("div",{className:h().wrapper,children:[(0,o.jsxs)("h2",{children:[r,!t&&(0,o.jsx)(s(),{href:"/corporate",children:(0,o.jsx)(i.eJU,{})})]}),m.length?(0,o.jsx)("div",{className:h().groupDiamond,children:m.map(e=>(0,o.jsx)(a,{id:e,data:p[e]},e))}):null,x.length?(0,o.jsx)("div",{className:h().groupGold,children:x.map(e=>(0,o.jsx)(a,{id:e,data:p[e]},e))}):null,u.length?(0,o.jsx)("div",{className:h().groupSilver,children:u.map(e=>(0,o.jsx)(a,{id:e,data:p[e]},e))}):null]})};d.defaultProps={header:"Also supported by:",home:!1,hideInfoBtn:!1};var _=d},18087:function(e,r,n){"use strict";n.d(r,{Z:function(){return j}});var o=n(85893),t=n(28276),s=n(11163),a=n(41664),l=n.n(a),c=n(31137),i=n(65062),p=n(6076),h=n(33e3),d=n(2329),_=n(30527),m=n(69197),x=n.n(m),u=()=>{let{data:e,error:r}=(0,_.Z)("/patrons",{revalidateOnFocus:!1});return r?(0,o.jsx)("div",{children:"Failed to fetch list of patrons :("}):e?(0,o.jsx)(o.Fragment,{children:e.map((e,r)=>(0,o.jsx)("p",{className:x()["patron-rank-".concat(e[1])],children:e[0]},r))}):(0,o.jsx)(d.Z,{})},j=()=>{let{t:e}=(0,t.$G)(["common"]),r=(0,s.useRouter)();return(0,o.jsxs)("div",{id:x().footer,dir:["ar","fa","he"].includes(r.locale)?"rtl":"ltr",children:[(0,o.jsxs)("h2",{children:[(0,o.jsx)(t.cC,{i18nKey:"common:footer.thanks",t:e,components:{lnk:(0,o.jsx)("a",{href:"https://www.patreon.com/polyhaven/overview"})}})," ",(0,o.jsx)(i.Z,{color:"#F96854"})]}),(0,o.jsx)("div",{className:x().patrons,children:(0,o.jsx)("div",{className:x().patronsScrollWrapper,children:(0,o.jsx)("div",{className:x().patronsScroll,children:(0,o.jsx)("div",{className:x().patronsSetA,children:(0,o.jsx)(u,{})})})})}),(0,o.jsx)(h.Z,{header:e("also-supported-by")}),(0,o.jsx)("div",{className:x().buttonWrapper,children:(0,o.jsx)(c.Z,{text:e("footer.join-ranks"),href:"https://www.patreon.com/polyhaven/overview"})}),(0,o.jsxs)("div",{className:x().linksWrapper,children:[(0,o.jsx)("a",{id:"social"}),(0,o.jsxs)("div",{className:x().links,children:[(0,o.jsx)(l(),{href:"/",children:(0,o.jsxs)("div",{className:x().logoWrapper,children:[(0,o.jsx)("img",{src:"/Logo 256.png",className:x().logo}),(0,o.jsx)("h1",{children:"Poly Haven"}),(0,o.jsx)("p",{children:e("common:tagline")})]})}),(0,o.jsx)("div",{className:x().linkListWrapper,children:(0,o.jsxs)("div",{className:x().linkList,children:[(0,o.jsx)(l(),{prefetch:!1,href:"/",children:e("common:nav.home")}),(0,o.jsx)(l(),{prefetch:!1,href:"https://docs.polyhaven.com/".concat(r.locale,"/faq"),children:e("common:nav.faq")}),(0,o.jsx)(l(),{prefetch:!1,href:"/about-contact",children:e("common:nav.about-contact")}),(0,o.jsx)(l(),{prefetch:!1,href:"/gallery",children:e("common:nav.gallery")}),(0,o.jsx)(l(),{prefetch:!1,href:"/map",children:e("common:nav.map")})]})}),(0,o.jsx)("div",{className:x().linkListWrapper,children:(0,o.jsxs)("div",{className:x().linkList,children:[(0,o.jsx)(l(),{prefetch:!1,href:"/license",children:e("common:nav.license")}),(0,o.jsx)(l(),{prefetch:!1,href:"/privacy",children:e("common:nav.privacy")}),(0,o.jsx)(l(),{prefetch:!1,href:"/logo",children:e("common:nav.logo")}),(0,o.jsx)(l(),{prefetch:!1,href:"/finance-reports",children:e("common:nav.finances")}),(0,o.jsx)(l(),{prefetch:!1,href:"/stats",children:e("common:nav.stats")})]})}),(0,o.jsx)("div",{className:x().linkListWrapper,children:(0,o.jsxs)("div",{className:x().linkList,children:[(0,o.jsx)(l(),{prefetch:!1,href:"https://blog.polyhaven.com",children:e("common:nav.blog")}),(0,o.jsx)(l(),{prefetch:!1,href:"https://docs.polyhaven.com",children:"Wiki"}),(0,o.jsx)(l(),{prefetch:!1,href:"/contribute",children:e("common:nav.contribute")}),(0,o.jsx)(l(),{prefetch:!1,href:"/our-api",children:e("common:nav.api")}),(0,o.jsx)(l(),{prefetch:!1,href:"https://github.com/Poly-Haven/polyhaven.com",children:e("common:nav.source")})]})}),(0,o.jsx)(p.Z,{})]})]})]})}},31137:function(e,r,n){"use strict";var o=n(85893),t=n(41664),s=n.n(t),a=n(82511),l=n.n(a);let c=e=>{let{text:r,href:n,color:t,icon:a,style:c}=e;return(0,o.jsx)(s(),{href:n,className:"".concat(l().button," ").concat(l()[t]),style:c,children:(0,o.jsxs)("div",{className:l().inner,children:[a&&(0,o.jsx)("div",{className:l().icon,children:a}),r]})})};c.defaultProps={color:"accent",icon:null,style:null},r.Z=c},6076:function(e,r,n){"use strict";var o=n(85893),t=n(97735),s=n(42130),a=n.n(s);r.Z=()=>(0,o.jsxs)("div",{className:a().communityIcons,children:[(0,o.jsx)("a",{href:"https://discord.gg/Dms7Mrs",children:(0,o.jsx)(t.Mqf,{})}),(0,o.jsx)("a",{href:"https://www.patreon.com/polyhaven/overview",children:(0,o.jsx)(t.AyT,{})}),(0,o.jsx)("a",{rel:"me",href:"https://masto.ai/@polyhaven",children:(0,o.jsx)(t.Sis,{})}),(0,o.jsx)("a",{href:"https://www.facebook.com/polyhaven",children:(0,o.jsx)(t.u5I,{})}),(0,o.jsx)("a",{href:"https://twitter.com/polyhaven",children:(0,o.jsx)(t.xMv,{})}),(0,o.jsx)("a",{href:"https://www.instagram.com/polyhaven",children:(0,o.jsx)(t.Pno,{})}),(0,o.jsx)("a",{href:"https://www.youtube.com/c/PolyHaven",children:(0,o.jsx)(t.JOL,{})})]})},2329:function(e,r,n){"use strict";var o=n(85893),t=n(36386),s=n.n(t);r.Z=e=>(0,o.jsx)("div",{className:"".concat(s().spinnerWrapper," ").concat(e.className||""),children:(0,o.jsxs)("svg",{className:s().spinner,width:"100%",height:"100%",viewBox:"0 0 100 100",version:"1.1",xmlns:"http://www.w3.org/2000/svg",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:1.5},children:[(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"M92,50c0,-13.934 -6.889,-26.347 -17.427,-34",style:{fill:"none",stroke:"#3abbd9",strokeWidth:"16px"}})}),(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"M50,92c13.934,0 26.347,-6.889 34,-17.427",style:{fill:"none",stroke:"#f28237",strokeWidth:"16px"}})}),(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"M8,50c0,13.934 6.889,26.347 17.427,34",style:{fill:"none",stroke:"#a1d04d",strokeWidth:"16px"}})}),(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"M50,8c-13.934,0 -26.347,6.889 -34,17.427",style:{fill:"none",stroke:"#be6ffd",strokeWidth:"16px"}})})]})})},30527:function(e,r,n){"use strict";n.d(r,{Z:function(){return a}});var o=n(59734);let t=async e=>{let r=await fetch(e),n=await r.json();return n};var s=n(83454);function a(e,r){let n=s.env.NEXT_PUBLIC_API_URL||"https://api.polyhaven.com";return(0,o.ZP)("".concat(n).concat(e),t,r)}},31372:function(e){e.exports={wrapper:"CorporateSponsors_wrapper__SnVMO",group:"CorporateSponsors_group__W6EYn",groupSilver:"CorporateSponsors_groupSilver__6vkIE",groupGold:"CorporateSponsors_groupGold__OGVwG",groupDiamond:"CorporateSponsors_groupDiamond__EY7G7"}},69197:function(e){e.exports={footer:"Footer_footer__e6iqw",buttonWrapper:"Footer_buttonWrapper__PRNmb",patrons:"Footer_patrons__9CYYR","patron-rank-1":"Footer_patron-rank-1__8Iv_P","patron-rank-2":"Footer_patron-rank-2__K6eV7","patron-rank-3":"Footer_patron-rank-3__fE27N","patron-rank-4":"Footer_patron-rank-4__KSVxB","patron-rank-5":"Footer_patron-rank-5__C4FSI","patron-rank-6":"Footer_patron-rank-6__c2rvS",button:"Footer_button__PL3Al",linksWrapper:"Footer_linksWrapper__laaOW",links:"Footer_links__ljyvp",logoWrapper:"Footer_logoWrapper__vhpBV",logo:"Footer_logo__8QJ_5",linkListWrapper:"Footer_linkListWrapper__MfJ6p",linkList:"Footer_linkList__mraaE"}},94278:function(e){e.exports={page:"Page_page__jLKW_",immersiveScroll:"Page_immersiveScroll__NnRsK",library:"Page_library__nRH_s",assetPage:"Page_assetPage___SQP7",pageContent:"Page_pageContent__9e_Vu",pageContentCentered:"Page_pageContentCentered__BmlEz"}},82511:function(e){e.exports={button:"Button_button__GeQ2O",inner:"Button_inner__63ypl",icon:"Button_icon__iawH_",accent:"Button_accent__N9N_t",blue:"Button_blue__bLQC5",orange:"Button_orange__zNWiI",green:"Button_green__Ci_jE",hollow:"Button_hollow__DlAZt",hollowFaded:"Button_hollowFaded__vDbZi"}},42130:function(e){e.exports={communityIcons:"SocialIcons_communityIcons__2sqxp"}},36386:function(e){e.exports={spinnerWrapper:"Spinner_spinnerWrapper__dpS8k",spinner:"Spinner_spinner__gcxKa",spawn:"Spinner_spawn__7s9RN"}}}]);