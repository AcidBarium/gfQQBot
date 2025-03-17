import{b1 as a,j as e,g as A,c as S,b as L,a as O,P as U,W as j}from"./index-FGadtO5P.js";import{t as F,a as B}from"./chunk-ML27DD5T-CaN9SnEw.js";import{u as $}from"./useRequest-DfO-LFdg.js";import{r as d}from"./react-router-dom-BfuE-jt0.js";import{V as R}from"./react-hot-toast-C9oLzaEU.js";import{s as k}from"./chunk-KVDW62ZT-WyfkjEXD.js";import{l as y}from"./chunk-O4OUNAUT-CnyvVz7W.js";import{X as E}from"./xterm-CAkIGaC6.js";import{c as w}from"./chunk-NAV3ZXLI-PE1n-qQC.js";import{l as D}from"./index-CPRFtgpr.js";import"./react-dom-_uqhELNW.js";import"./monaco-editor-D8uW_Xv_.js";import"./react-icons-BOjVsZdF.js";import"./index-CokAva9Y.js";import"./usePress-DJuhuggG.js";import"./useListState-CeZvWdL_.js";import"./SelectionManager-BQw_Y3Yt.js";import"./features-animation--pEbly2n.js";import"./index-h6rCY_HB.js";import"./chunk-SLABUSGS-DFilZHS2.js";const I={[a.DEBUG]:"green",[a.INFO]:"black",[a.WARN]:"yellow",[a.ERROR]:"red",[a.FATAL]:"red"},W=l=>{var f;const o=l.match(/\[[a-zA-Z]+\]/)||[];let r=l;const t=((f=o==null?void 0:o[0])==null?void 0:f.replace("[","").replace("]",""))??a.INFO;switch(I[t]){case"green":r=`\x1B[32m${r}\x1B[0m`;break;case"black":r=`\x1B[30m${r}\x1B[0m`;break;case"yellow":r=`\x1B[33m${r}\x1B[0m`;break;case"red":r=`\x1B[31m${r}\x1B[0m`;break;default:r=`\x1B[30m${r}\x1B[0m`}return{content:r,level:t}},N=(l,o)=>{let r=l;switch(o){case a.DEBUG:r=`\x1B[32m[DEBUG] ${l}\x1B[0m`;break;case a.INFO:r=`\x1B[30m[INFO] ${l}\x1B[0m`;break;case a.WARN:r=`\x1B[33m[WARN] ${l}\x1B[0m`;break;case a.ERROR:r=`\x1B[31m[ERROR] ${l}\x1B[0m`;break;case a.FATAL:r=`\x1B[31m[FATAL] ${l}\x1B[0m`;break;default:r=`\x1B[30m${l}\x1B[0m`}return r},T={[a.DEBUG]:"default",[a.INFO]:"primary",[a.WARN]:"warning",[a.ERROR]:"primary",[a.FATAL]:"primary"},_=l=>{const{selectedKeys:o,onSelectionChange:r}=l;return e.jsx(k,{selectedKeys:o,onSelectionChange:t=>{t!=="all"&&(t==null?void 0:t.size)===0&&(t="all"),r(t)},label:"日志级别",selectionMode:"multiple","aria-label":"Log Level",classNames:{label:"mb-2",trigger:"bg-opacity-50 backdrop-blur-sm hover:!bg-opacity-60",popoverContent:"bg-opacity-50 backdrop-blur-sm"},size:"sm",items:[{label:"Debug",value:a.DEBUG},{label:"Info",value:a.INFO},{label:"Warn",value:a.WARN},{label:"Error",value:a.ERROR},{label:"Fatal",value:a.FATAL}],renderValue:t=>t.length===5?e.jsx(w,{size:"sm",color:"primary",variant:"flat",children:"全部"}):e.jsx("div",{className:"flex gap-2",children:t.map(n=>{var f,p;return e.jsx(w,{size:"sm",color:T[(f=n.data)==null?void 0:f.value],variant:"flat",children:(p=n.data)==null?void 0:p.label},n.key)})}),children:t=>e.jsx(y,{value:t.value,children:t.label},t.value)})},z=l=>{const{list:o,onSelect:r,selectedLog:t,refreshList:n,refreshLog:f,listLoading:p,logContent:g,listError:c,logLoading:i}=l,s=d.useRef(null),[m,b]=d.useState(new Set(["info","warn","error"])),v=u=>u.split(`
`).map(x=>W(x)).filter(x=>m==="all"?!0:m.has(x.level)).map(x=>x.content).join(`\r
`),C=()=>{if(!g)return;const u=new Blob([g],{type:"text/plain"}),h=URL.createObjectURL(u),x=document.createElement("a");x.href=h,x.download=`${t}.log`,x.click(),URL.revokeObjectURL(h)};return d.useEffect(()=>{if(!s.current||!g)return;s.current.clear();const u=v(g);s.current.write(u+`\r
napcat@webui:~$ `)},[g,m]),e.jsxs(e.Fragment,{children:[e.jsx("title",{children:"历史日志 - NapCat WebUI"}),e.jsxs(A,{className:"max-w-full h-full bg-opacity-50 backdrop-blur-sm",children:[e.jsxs(S,{className:"flex-row justify-start gap-3",children:[e.jsx(k,{label:"选择日志",size:"sm",isLoading:p,errorMessage:c==null?void 0:c.message,classNames:{trigger:"hover:!bg-content3 bg-opacity-50 backdrop-blur-sm hover:!bg-opacity-60"},placeholder:"选择日志",onChange:u=>{const h=u.target.value;h&&r(h)},selectedKeys:[t||""],items:o.map(u=>({value:u,label:u})),children:u=>e.jsx(y,{value:u.value,children:u.label},u.value)}),e.jsx(_,{selectedKeys:m,onSelectionChange:b}),e.jsx(L,{className:"flex-shrink-0",onPress:C,children:"下载日志"}),e.jsx(L,{onPress:n,children:"刷新列表"}),e.jsx(L,{onPress:f,children:"刷新日志"})]}),e.jsxs(O,{className:"relative",children:[e.jsx(U,{loading:i}),e.jsx(E,{className:"w-full h-full",ref:s})]})]})]})},P=()=>{const l=d.useRef(null),[o,r]=d.useState(new Set(["info","warn","error"])),[t,n]=d.useState([]),f=()=>{const g=t.filter(m=>o==="all"?!0:o.has(m.level)).map(m=>N(m.message,m.level)).join(`\r
`),c=new Blob([g],{type:"text/plain"}),i=URL.createObjectURL(c),s=document.createElement("a");s.href=i,s.download="napcat.log",s.click(),URL.revokeObjectURL(i)},p=()=>{var g,c;try{const i=t.filter(s=>o==="all"?!0:o.has(s.level)).map(s=>N(s.message,s.level)).join(`\r
`);(g=l.current)==null||g.clear(),(c=l.current)==null||c.write(i)}catch(i){console.error(i),R.error("获取实时日志失败")}};return d.useEffect(()=>{p()},[o,t]),d.useEffect(()=>{const c=(()=>{try{const i=j.getRealTimeLogs(s=>{n(m=>{const b=[...m,...s];return b.length>1e3&&b.splice(0,b.length-1e3),b})});return()=>{i.close()}}catch{R.error("获取实时日志失败")}})();return()=>{console.log("close"),c==null||c()}},[]),e.jsxs(e.Fragment,{children:[e.jsx("title",{children:"实时日志 - NapCat WebUI"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(_,{selectedKeys:o,onSelectionChange:r}),e.jsx(L,{className:"flex-shrink-0",onPress:f,startContent:e.jsx(D,{className:"text-lg"}),children:"下载日志"})]}),e.jsx("div",{className:"flex-1 h-full overflow-hidden",children:e.jsx(E,{ref:l})})]})};function me(){const{data:l,loading:o,error:r,refresh:t}=$(j.getLogList),[n,f]=d.useState(null),[p,g]=d.useState(null),[c,i]=d.useState(!1),s=b=>{f(b)},m=async()=>{if(n){i(!0);try{const b=await j.getLogContent(n);g(b)}catch(b){const v=b.message;R.error(`加载日志失败: ${v}`)}finally{i(!1)}}};return d.useEffect(()=>{l&&l.length>0&&f(l[0])},[l]),d.useEffect(()=>{n&&m()},[n]),e.jsx("div",{className:"h-[calc(100vh_-_8rem)] flex flex-col gap-4 items-center pt-4 px-2",children:e.jsxs(F,{"aria-label":"Logs",classNames:{panel:"w-full flex-1 h-full py-0 flex flex-col gap-4",base:"flex-shrink-0 !h-fit",tabList:"bg-opacity-50 backdrop-blur-sm",cursor:"bg-opacity-60 backdrop-blur-sm"},children:[e.jsx(B,{title:"实时日志",children:e.jsx(P,{})}),e.jsx(B,{title:"历史日志",children:e.jsx(z,{list:l||[],onSelect:s,selectedLog:n||void 0,refreshList:t,refreshLog:m,listLoading:o,logLoading:c,listError:r,logContent:p||void 0})})]})})}export{me as default};
