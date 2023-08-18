"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("vue");function b(o){return e.getCurrentScope()?(e.onScopeDispose(o),!0):!1}function h(o){return typeof o=="function"?o():e.unref(o)}const g=typeof window<"u",E=()=>{},S=x();function x(){var o;return g&&((o=window==null?void 0:window.navigator)==null?void 0:o.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function y(o){var r;const n=h(o);return(r=n==null?void 0:n.$el)!=null?r:n}const w=g?window:void 0;function v(...o){let r,n,l,c;if(typeof o[0]=="string"||Array.isArray(o[0])?([n,l,c]=o,r=w):[r,n,l,c]=o,!r)return E;Array.isArray(n)||(n=[n]),Array.isArray(l)||(l=[l]);const f=[],a=()=>{f.forEach(s=>s()),f.length=0},i=(s,p,t,u)=>(s.addEventListener(p,t,u),()=>s.removeEventListener(p,t,u)),d=e.watch(()=>[y(r),h(c)],([s,p])=>{a(),s&&f.push(...n.flatMap(t=>l.map(u=>i(s,t,u,p))))},{immediate:!0,flush:"post"}),m=()=>{d(),a()};return b(m),m}let k=!1;function V(o,r,n={}){const{window:l=w,ignore:c=[],capture:f=!0,detectIframe:a=!1}=n;if(!l)return;S&&!k&&(k=!0,Array.from(l.document.body.children).forEach(t=>t.addEventListener("click",E)));let i=!0;const d=t=>c.some(u=>{if(typeof u=="string")return Array.from(l.document.querySelectorAll(u)).some(_=>_===t.target||t.composedPath().includes(_));{const _=y(u);return _&&(t.target===_||t.composedPath().includes(_))}}),s=[v(l,"click",t=>{const u=y(o);if(!(!u||u===t.target||t.composedPath().includes(u))){if(t.detail===0&&(i=!d(t)),!i){i=!0;return}r(t)}},{passive:!0,capture:f}),v(l,"pointerdown",t=>{const u=y(o);u&&(i=!t.composedPath().includes(u)&&!d(t))},{passive:!0}),a&&v(l,"blur",t=>{setTimeout(()=>{var u;const _=y(o);((u=l.document.activeElement)==null?void 0:u.tagName)==="IFRAME"&&!(_!=null&&_.contains(l.document.activeElement))&&r(t)},0)})].filter(Boolean);return()=>s.forEach(t=>t())}const B=(o,r)=>{const n=o.__vccOpts||o;for(const[l,c]of r)n[l]=c;return n},A={relative:"","w-full":"","h-30px":""},I=["value"],M={key:0,absolute:"","top-30px":"","left-0":"","bg-white":"","w-full":"","h-auto":"",border:"0px x-1px gray-4 solid"},P=["onClick"],O={__name:"MEmailInput",props:{modelValue:{type:String,default:""},options:{type:Object,default:()=>({})}},emits:["update:modelValue"],setup(o,{emit:r}){const n=o,l=e.ref(null),c=e.ref(!1),f=e.ref(!1);V(l,s=>{c.value=!1});const a=e.computed(()=>n.options.suffix?n.options.suffix.map(s=>n.modelValue.split("@")[0]+s):[]),i=s=>{r("update:modelValue",s)},d=()=>{c.value=n.modelValue.length!==0},m=s=>{f.value=!0,c.value=!1,i(s),setTimeout(()=>{f.value=!1},300)};return e.watch(()=>n.modelValue,()=>{f.value||(c.value=n.modelValue.length!==0)}),(s,p)=>(e.openBlock(),e.createElementBlock("div",A,[e.createElementVNode("input",{ref_key:"inputRef",ref:l,"w-full":"","h-full":"","pl-10px":"",value:o.modelValue,border:"1px gray-4 solid",onInput:p[0]||(p[0]=t=>i(t.target.value)),onFocus:d},null,40,I),c.value?(e.openBlock(),e.createElementBlock("ul",M,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(a.value,t=>(e.openBlock(),e.createElementBlock("li",{key:t,border:"0px b-1px gray-4 solid"},[e.createElementVNode("a",{"cursor-pointer":"","w-full":"",block:"","py-5px":"","pl-10px":"","text-14px":"","hover:bg-gray-1":"",onClick:u=>m(t)},e.toDisplayString(t),9,P)]))),128))])):e.createCommentVNode("",!0)]))}},L=B(O,[["__scopeId","data-v-5d750eee"]]);const N={class:"vue-pure-table"},T={id:"columns"},$={id:"rows",class:"flex-col"},F={key:0},C={__name:"MPureTable",props:{columns:{type:Array,default:()=>[]},rows:{type:Array,default:()=>[]}},setup(o){const r=o,n=e.useSlots(),l=e.computed(()=>r.columns.map(a=>a.field)),c=e.computed(()=>r.rows.map(a=>{const i=[];return Object.keys(a).forEach((d,m)=>{l.value[m]&&i.push(a[l.value[m]])}),i})),f=a=>Object.keys(n).includes(a);return(a,i)=>(e.openBlock(),e.createElementBlock("div",N,[e.createElementVNode("ul",T,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(r.columns,d=>(e.openBlock(),e.createElementBlock("li",{key:d.label,class:"table_columns",style:e.normalizeStyle(d.style)},e.toDisplayString(d.label),5))),128))]),e.createElementVNode("ul",$,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(c.value,(d,m)=>(e.openBlock(),e.createElementBlock("li",{key:m},[e.createElementVNode("ul",null,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(d,(s,p)=>(e.openBlock(),e.createElementBlock("li",{key:s.id,style:e.normalizeStyle(r.columns[p].style)},[f(r.columns[p].field)?e.renderSlot(a.$slots,r.columns[p].field,{key:1,data:{rowData:s,rowTarget:c.value[m]}},void 0,!0):(e.openBlock(),e.createElementBlock("p",F,e.toDisplayString(s),1))],4))),128))])]))),128))])]))}},D=B(C,[["__scopeId","data-v-38a75e1e"]]);exports.MEmailInput=L;exports.MPureTable=D;