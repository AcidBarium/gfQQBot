import{E as g,H as v,I as C,J as D,j as f,b0 as s}from"./index-FGadtO5P.js";import{r as l}from"./react-router-dom-BfuE-jt0.js";import{V as b}from"./react-hot-toast-C9oLzaEU.js";function P(i={}){let{autoFocus:e=!1,isTextInput:t,within:o}=i,r=l.useRef({isFocused:!1,isFocusVisible:e||g()}),[a,c]=l.useState(!1),[m,h]=l.useState(()=>r.current.isFocused&&r.current.isFocusVisible),d=l.useCallback(()=>h(r.current.isFocused&&r.current.isFocusVisible),[]),n=l.useCallback(u=>{r.current.isFocused=u,c(u),d()},[d]);v(u=>{r.current.isFocusVisible=u,d()},[],{isTextInput:t});let{focusProps:F}=C({isDisabled:o,onFocusChange:n}),{focusWithinProps:y}=D({isDisabled:!o,onFocusWithinChange:n});return{isFocused:a,isFocusVisible:m,focusProps:o?y:F}}function T(i){const e=l.useRef(null);return l.useImperativeHandle(i,()=>e.current),e}var M=new Set(["id","type","style","title","role","tabIndex","htmlFor","width","height","abbr","accept","acceptCharset","accessKey","action","allowFullScreen","allowTransparency","alt","async","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","challenge","charset","checked","cite","class","className","cols","colSpan","command","content","contentEditable","contextMenu","controls","coords","crossOrigin","data","dateTime","default","defer","dir","disabled","download","draggable","dropzone","encType","enterKeyHint","for","form","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","headers","hidden","high","href","hrefLang","httpEquiv","icon","inputMode","isMap","itemId","itemProp","itemRef","itemScope","itemType","kind","label","lang","list","loop","manifest","max","maxLength","media","mediaGroup","method","min","minLength","multiple","muted","name","noValidate","open","optimum","pattern","ping","placeholder","poster","preload","radioGroup","referrerPolicy","readOnly","rel","required","rows","rowSpan","sandbox","scope","scoped","scrolling","seamless","selected","shape","size","sizes","slot","sortable","span","spellCheck","src","srcDoc","srcSet","start","step","target","translate","typeMustMatch","useMap","value","wmode","wrap"]),$=new Set(["onCopy","onCut","onPaste","onLoad","onError","onWheel","onScroll","onCompositionEnd","onCompositionStart","onCompositionUpdate","onKeyDown","onKeyPress","onKeyUp","onFocus","onBlur","onChange","onInput","onSubmit","onClick","onContextMenu","onDoubleClick","onDrag","onDragEnd","onDragEnter","onDragExit","onDragLeave","onDragOver","onDragStart","onDrop","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onPointerDown","onPointerEnter","onPointerLeave","onPointerUp","onSelect","onTouchCancel","onTouchEnd","onTouchMove","onTouchStart","onAnimationStart","onAnimationEnd","onAnimationIteration","onTransitionEnd"]),w=/^(data-.*)$/,E=/^(aria-.*)$/,p=/^(on[A-Z].*)$/;function S(i,e={}){let{labelable:t=!0,enabled:o=!0,propNames:r,omitPropNames:a,omitEventNames:c,omitDataProps:m,omitEventProps:h}=e,d={};if(!o)return i;for(const n in i)a!=null&&a.has(n)||c!=null&&c.has(n)&&p.test(n)||p.test(n)&&!$.has(n)||m&&w.test(n)||h&&p.test(n)||(Object.prototype.hasOwnProperty.call(i,n)&&(M.has(n)||t&&E.test(n)||r!=null&&r.has(n)||w.test(n))||p.test(n))&&(d[n]=i[n]);return d}var I=i=>f.jsx("svg",{"aria-hidden":"true",fill:"none",focusable:"false",height:"1em",role:"presentation",viewBox:"0 0 24 24",width:"1em",...i,children:f.jsx("path",{d:"M15.5 19l-7-7 7-7",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5"})});class k{static async listFiles(e="/"){const{data:t}=await s.get(`/File/list?path=${encodeURIComponent(e)}`);return t.data}static async listDirectories(e="/"){const{data:t}=await s.get(`/File/list?path=${encodeURIComponent(e)}&onlyDirectory=true`);return t.data}static async createDirectory(e){const{data:t}=await s.post("/File/mkdir",{path:e});return t.data}static async delete(e){const{data:t}=await s.post("/File/delete",{path:e});return t.data}static async readFile(e){const{data:t}=await s.get(`/File/read?path=${encodeURIComponent(e)}`);return t.data}static async writeFile(e,t){const{data:o}=await s.post("/File/write",{path:e,content:t});return o.data}static async createFile(e){const{data:t}=await s.post("/File/create",{path:e});return t.data}static async batchDelete(e){const{data:t}=await s.post("/File/batchDelete",{paths:e});return t.data}static async rename(e,t){const{data:o}=await s.post("/File/rename",{oldPath:e,newPath:t});return o.data}static async move(e,t){const{data:o}=await s.post("/File/move",{sourcePath:e,targetPath:t});return o.data}static async batchMove(e){const{data:t}=await s.post("/File/batchMove",{items:e});return t.data}static download(e){const t=`/File/download?path=${encodeURIComponent(e)}`;b.promise(s.post(t,void 0,{responseType:"blob"}).catch(o=>{throw console.error(o),new Error("下载失败")}),{loading:"正在下载文件...",success:"下载成功",error:"下载失败"}).then(o=>{const r=window.URL.createObjectURL(new Blob([o.data])),a=document.createElement("a");a.href=r;let c=e.split("/").pop()||"";e.split(".").length===1&&(c+=".zip"),a.setAttribute("download",c),document.body.appendChild(a),a.click(),document.body.removeChild(a)}).catch(o=>{console.error(o)})}static async batchDownload(e){b.promise(s.post("/File/batchDownload",{paths:e},{responseType:"blob"}).catch(o=>{throw console.error(o),new Error("下载失败")}),{loading:"正在下载文件...",success:"下载成功",error:"下载失败"}).then(o=>{const r=window.URL.createObjectURL(new Blob([o.data])),a=document.createElement("a");a.href=r,a.setAttribute("download","files.zip"),document.body.appendChild(a),a.click(),document.body.removeChild(a)}).catch(o=>{console.error(o)})}static async downloadToURL(e){const t=`/File/download?path=${encodeURIComponent(e)}`,o=await s.post(t,void 0,{responseType:"blob"});return window.URL.createObjectURL(new Blob([o.data]))}static async upload(e,t){const o=new FormData;t.forEach(a=>{o.append("files",a)});const{data:r}=await s.post(`/File/upload?path=${encodeURIComponent(e)}`,o,{headers:{"Content-Type":"multipart/form-data"}});return r.data}static async uploadWebUIFont(e){const t=new FormData;t.append("file",e);const{data:o}=await s.post("/File/font/upload/webui",t,{headers:{"Content-Type":"multipart/form-data"}});return o.data}static async deleteWebUIFont(){const{data:e}=await s.post("/File/font/delete/webui");return e.data}}export{P as $,I as C,k as F,S as f,T as u};
