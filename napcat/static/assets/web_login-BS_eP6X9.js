import{u as f,k as g,j as e,c as h,i as c,a as b,b as k,W as j}from"./index-FGadtO5P.js";import{i as w}from"./chunk-2QAN2V2R-RzoxPvFT.js";import{u as v,r as s}from"./react-router-dom-BfuE-jt0.js";import{c as d}from"./react-hot-toast-C9oLzaEU.js";import{I as N}from"./index-CPRFtgpr.js";import{P as y,H as W,T as L}from"./pure-B90xrCsP.js";import{t as m}from"./primitives-D092zWiZ.js";import{l as u}from"./logo-juTWEVZj.js";import"./react-dom-_uqhELNW.js";import"./monaco-editor-D8uW_Xv_.js";import"./react-icons-BOjVsZdF.js";import"./chunk-SLABUSGS-DFilZHS2.js";import"./chunk-EN4B57RQ-D4h4PlTt.js";import"./useToggle-BEpLa3sy.js";import"./chunk-OPTZHMJX-Cs9LDc1n.js";function M(){const l=new URLSearchParams(window.location.search).get("token"),p=v(),[t,o]=s.useState(l||""),[r,i]=s.useState(!1),[,x]=f(g.token,""),n=async()=>{if(!t){d.error("请输入token");return}i(!0);try{const a=await j.loginWithToken(t);a&&(x(a),p("/qq_login",{replace:!0}))}catch(a){d.error(a.message)}finally{i(!1)}};return s.useEffect(()=>{l&&n()},[]),e.jsxs(e.Fragment,{children:[e.jsx("title",{children:"WebUI登录 - NapCat WebUI"}),e.jsx(y,{children:e.jsx("div",{className:"w-[608px] max-w-full py-8 px-2 md:px-8 overflow-hidden",children:e.jsxs(W,{className:"items-center gap-4 pt-0 pb-6 bg-default-50",maxXRotation:3,maxYRotation:3,children:[e.jsxs(h,{className:"inline-block max-w-lg text-center justify-center",children:[e.jsxs("div",{className:"flex items-center justify-center w-full gap-2 pt-10",children:[e.jsx(c,{alt:"logo",height:"7em",src:u}),e.jsxs("div",{children:[e.jsx("span",{className:m(),children:"Web "}),e.jsx("span",{className:m({color:"violet"}),children:"Login "})]})]}),e.jsx(L,{className:"absolute right-4 top-4"})]}),e.jsxs(b,{className:"flex gap-5 py-5 px-5 md:px-10",children:[e.jsx(w,{isClearable:!0,classNames:{label:"text-black/50 dark:text-white/90",input:["bg-transparent","text-black/90 dark:text-white/90","placeholder:text-default-700/50 dark:placeholder:text-white/60"],innerWrapper:"bg-transparent",inputWrapper:["shadow-xl","bg-default-100/70","dark:bg-default/60","backdrop-blur-xl","backdrop-saturate-200","hover:bg-default-0/70","dark:hover:bg-default/70","group-data-[focus=true]:bg-default-100/50","dark:group-data-[focus=true]:bg-default/60","!cursor-text"]},isDisabled:r,label:"Token",placeholder:"请输入token",radius:"lg",size:"lg",startContent:e.jsx(N,{className:"text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0"}),value:t,onChange:a=>o(a.target.value),onClear:()=>o("")}),e.jsxs(k,{className:"mx-10 mt-10 text-lg py-7",color:"primary",isLoading:r,radius:"full",size:"lg",variant:"shadow",onPress:n,children:[!r&&e.jsx(c,{alt:"logo",classNames:{wrapper:"-ml-8"},height:"2em",src:u}),"登录"]})]})]})})})]})}export{M as default};
