import{j as E}from"./index-FGadtO5P.js";import{r as t}from"./react-router-dom-BfuE-jt0.js";import{M as b,u as z,P as S,d as T,b as W,L as A}from"./proxy-CEqygzZ_.js";class D extends t.Component{getSnapshotBeforeUpdate(l){const e=this.props.childRef.current;if(e&&l.isPresent&&!this.props.isPresent){const o=e.offsetParent,u=o instanceof HTMLElement&&o.offsetWidth||0,n=this.props.sizeRef.current;n.height=e.offsetHeight||0,n.width=e.offsetWidth||0,n.top=e.offsetTop,n.left=e.offsetLeft,n.right=u-n.width-n.left}return null}componentDidUpdate(){}render(){return this.props.children}}function H({children:c,isPresent:l,anchorX:e}){const o=t.useId(),u=t.useRef(null),n=t.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:h}=t.useContext(b);return t.useInsertionEffect(()=>{const{width:x,height:r,top:m,left:s,right:p}=n.current;if(l||!u.current||!x||!r)return;const d=e==="left"?`left: ${s}`:`right: ${p}`;u.current.dataset.motionPopId=o;const f=document.createElement("style");return h&&(f.nonce=h),document.head.appendChild(f),f.sheet&&f.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${x}px !important;
            height: ${r}px !important;
            ${d}px !important;
            top: ${m}px !important;
          }
        `),()=>{document.head.removeChild(f)}},[l]),E.jsx(D,{isPresent:l,childRef:u,sizeRef:n,children:t.cloneElement(c,{ref:u})})}const K=({children:c,initial:l,isPresent:e,onExitComplete:o,custom:u,presenceAffectsLayout:n,mode:h,anchorX:x})=>{const r=z(U),m=t.useId(),s=t.useCallback(d=>{r.set(d,!0);for(const f of r.values())if(!f)return;o&&o()},[r,o]),p=t.useMemo(()=>({id:m,initial:l,isPresent:e,custom:u,onExitComplete:s,register:d=>(r.set(d,!1),()=>r.delete(d))}),n?[Math.random(),s]:[e,s]);return t.useMemo(()=>{r.forEach((d,f)=>r.set(f,!1))},[e]),t.useEffect(()=>{!e&&!r.size&&o&&o()},[e]),h==="popLayout"&&(c=E.jsx(H,{isPresent:e,anchorX:x,children:c})),E.jsx(S.Provider,{value:p,children:c})};function U(){return new Map}const R=c=>c.key||"";function $(c){const l=[];return t.Children.forEach(c,e=>{t.isValidElement(e)&&l.push(e)}),l}const O=({children:c,custom:l,initial:e=!0,onExitComplete:o,presenceAffectsLayout:u=!0,mode:n="sync",propagate:h=!1,anchorX:x="left"})=>{const[r,m]=T(h),s=t.useMemo(()=>$(c),[c]),p=h&&!r?[]:s.map(R),d=t.useRef(!0),f=t.useRef(s),g=z(()=>new Map),[L,k]=t.useState(s),[C,w]=t.useState(s);W(()=>{d.current=!1,f.current=s;for(let a=0;a<C.length;a++){const i=R(C[a]);p.includes(i)?g.delete(i):g.get(i)!==!0&&g.set(i,!1)}},[C,p.length,p.join("-")]);const v=[];if(s!==L){let a=[...s];for(let i=0;i<C.length;i++){const y=C[i],P=R(y);p.includes(P)||(a.splice(i,0,y),v.push(y))}return n==="wait"&&v.length&&(a=v),w($(a)),k(s),null}const{forceRender:M}=t.useContext(A);return E.jsx(E.Fragment,{children:C.map(a=>{const i=R(a),y=h&&!r?!1:s===C||p.includes(i),P=()=>{if(g.has(i))g.set(i,!0);else return;let j=!0;g.forEach(I=>{I||(j=!1)}),j&&(M==null||M(),w(f.current),h&&(m==null||m()),o&&o())};return E.jsx(K,{isPresent:y,initial:!d.current||e?void 0:!1,custom:l,presenceAffectsLayout:u,mode:n,onExitComplete:y?void 0:P,anchorX:x,children:a},i)})})};export{O as A};
