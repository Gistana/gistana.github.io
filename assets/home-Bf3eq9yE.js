import{_ as p}from"./Sidebar.vue_vue_type_style_index_0_scoped_ec482c80_lang-BE0pJIIB.js";import{o as i,c as d,a as e,b as a,r as b,d as f,e as t,w as o,f as m,F as h,u as l}from"./index-CKDqvd_m.js";const g={},k={class:"border-t border-black py-4"},w=e("p",{class:"container text-sm"},[a(" Built with ♥ by "),e("a",{href:"https://github.com/gistana",class:"text-cyan-800 underline"},"Gisaster Team"),a(" © Copyright 2024 - Mahasiswa KKN MBKM ")],-1),v=[w];function $(r,n){return i(),d("footer",k,v)}const N=p(g,[["render",$]]),T="/img/LogoGIS.png",j=e("label",{class:"fixed right-4 top-4 z-20 flex h-8 w-8 cursor-pointer flex-col justify-center peer-checked:first:*:rotate-45 peer-checked:last:*:-rotate-45 peer-checked:odd:*:translate-y-0 peer-checked:even:*:scale-x-0 md:hidden",for:"menu-toggle"},[e("span",{class:"absolute block h-1 w-full -translate-y-2 rounded-full bg-yellow-600 transition-transform"}),e("span",{class:"absolute block h-1 w-full rounded-full bg-yellow-600 transition-transform"}),e("span",{class:"absolute block h-1 w-full translate-y-2 rounded-full bg-yellow-600 transition-transform"})],-1),B={class:"md:shadow-default pointer-events-none fixed left-0 right-0 top-0 z-10 h-svh -translate-y-1/3 bg-white py-2 opacity-0 transition duration-300 peer-checked:pointer-events-auto peer-checked:translate-y-0 peer-checked:opacity-100 md:pointer-events-auto md:h-auto md:translate-y-0 md:opacity-100"},V=e("img",{src:T,width:"200",alt:""},null,-1),C={class:"flex w-full list-none flex-col items-center justify-center text-3xl font-bold md:h-full md:flex-row md:justify-end md:text-base md:font-normal"},L={__name:"Navbar",setup(r){const n=b(!1);return(c,s)=>{const _=f("router-link");return i(),d(h,null,[e("input",{type:"checkbox",id:"menu-toggle",class:"peer hidden",ref_key:"menuToggle",ref:n},null,512),j,e("nav",B,[e("div",{class:"container mx-auto flex h-full flex-col items-center justify-center md:flex-row md:justify-between",onClick:s[0]||(s[0]=x=>n.value.checked=!1)},[t(_,{to:"/",class:"px-2 py-4 text-2xl font-bold"},{default:o(()=>[V]),_:1}),e("ul",C,[m(c.$slots,"default")])])])],64)}}},F={name:"NavLink",props:{to:{type:String,required:!0}}};function K(r,n,c,s,_,x){const y=f("router-link");return i(),d("li",null,[t(y,{to:c.to,class:"inline-block px-5 py-4 hover:text-yellow-600 sm:py-3","active-class":"text-yellow-600"},{default:o(()=>[m(r.$slots,"default")]),_:3},8,["to"])])}const u=p(F,[["render",K]]),M={class:"flex min-h-svh flex-col"},G={__name:"home",setup(r){return(n,c)=>{const s=f("RouterView");return i(),d(h,null,[t(l(L),null,{default:o(()=>[t(l(u),{to:"service"},{default:o(()=>[a("Layanan")]),_:1}),t(l(u),{to:"about"},{default:o(()=>[a("Tentang")]),_:1}),t(l(u),{to:"team"},{default:o(()=>[a("Tim")]),_:1})]),_:1}),e("main",M,[t(s),t(l(N))])],64)}}};export{G as default};