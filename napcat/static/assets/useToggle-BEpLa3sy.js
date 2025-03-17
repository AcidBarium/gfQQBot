import{R as de,r as y,e as Ye}from"./react-router-dom-BfuE-jt0.js";import{aF as pe,d as Xe,_ as ye,A as Be,D as je}from"./index-FGadtO5P.js";const ve=typeof document<"u"?de.useLayoutEffect:()=>{};function F(e){const t=y.useRef(null);return ve(()=>{t.current=e},[e]),y.useCallback((...n)=>{const i=t.current;return i==null?void 0:i(...n)},[])}let se=new Map;typeof FinalizationRegistry<"u"&&new FinalizationRegistry(e=>{se.delete(e)});function We(e,t){if(e===t)return e;let n=se.get(e);if(n)return n.forEach(a=>a.current=t),t;let i=se.get(t);return i?(i.forEach(a=>a.current=e),e):t}function Ke(...e){return(...t)=>{for(let n of e)typeof n=="function"&&n(...t)}}const S=e=>{var t;return(t=e==null?void 0:e.ownerDocument)!==null&&t!==void 0?t:document},_=e=>e&&"window"in e&&e.window===e?e:S(e).defaultView||window;function ze(e){return e!==null&&typeof e=="object"&&"nodeType"in e&&typeof e.nodeType=="number"}function Ve(e){return ze(e)&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&"host"in e}function m(e,t){if(!pe())return t&&e?e.contains(t):!1;if(!e||!t)return!1;let n=t;for(;n!==null;){if(n===e)return!0;n.tagName==="SLOT"&&n.assignedSlot?n=n.assignedSlot.parentNode:Ve(n)?n=n.host:n=n.parentNode}return!1}const Z=(e=document)=>{var t;if(!pe())return e.activeElement;let n=e.activeElement;for(;n&&"shadowRoot"in n&&(!((t=n.shadowRoot)===null||t===void 0)&&t.activeElement);)n=n.shadowRoot.activeElement;return n};function $(e){return pe()&&e.target.shadowRoot&&e.composedPath?e.composedPath()[0]:e.target}function I(...e){let t={...e[0]};for(let n=1;n<e.length;n++){let i=e[n];for(let a in i){let u=t[a],s=i[a];typeof u=="function"&&typeof s=="function"&&a[0]==="o"&&a[1]==="n"&&a.charCodeAt(2)>=65&&a.charCodeAt(2)<=90?t[a]=Ke(u,s):(a==="className"||a==="UNSAFE_className")&&typeof u=="string"&&typeof s=="string"?t[a]=Xe(u,s):a==="id"&&u&&s?t.id=We(u,s):t[a]=s!==void 0?s:u}}return t}const qe=new Set(["id"]),Je=new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]),Qe=new Set(["href","hrefLang","target","rel","download","ping","referrerPolicy"]),Ze=/^(data-.*)$/;function et(e,t={}){let{labelable:n,isLink:i,propNames:a}=t,u={};for(const s in e)Object.prototype.hasOwnProperty.call(e,s)&&(qe.has(s)||n&&Je.has(s)||i&&Qe.has(s)||a!=null&&a.has(s)||Ze.test(s))&&(u[s]=e[s]);return u}function Y(e){if(tt())e.focus({preventScroll:!0});else{let t=rt(e);e.focus(),nt(t)}}let V=null;function tt(){if(V==null){V=!1;try{document.createElement("div").focus({get preventScroll(){return V=!0,!0}})}catch{}}return V}function rt(e){let t=e.parentNode,n=[],i=document.scrollingElement||document.documentElement;for(;t instanceof HTMLElement&&t!==i;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&n.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;return i instanceof HTMLElement&&n.push({element:i,scrollTop:i.scrollTop,scrollLeft:i.scrollLeft}),n}function nt(e){for(let{element:t,scrollTop:n,scrollLeft:i}of e)t.scrollTop=n,t.scrollLeft=i}function re(e){var t;return typeof window>"u"||window.navigator==null?!1:((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.brands.some(n=>e.test(n.brand)))||e.test(window.navigator.userAgent)}function be(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function C(e){let t=null;return()=>(t==null&&(t=e()),t)}const B=C(function(){return be(/^Mac/i)}),ot=C(function(){return be(/^iPhone/i)}),Me=C(function(){return be(/^iPad/i)||B()&&navigator.maxTouchPoints>1}),Oe=C(function(){return ot()||Me()}),it=C(function(){return re(/AppleWebKit/i)&&!at()}),at=C(function(){return re(/Chrome/i)}),Ce=C(function(){return re(/Android/i)}),st=C(function(){return re(/Firefox/i)});function j(e,t,n=!0){var i,a;let{metaKey:u,ctrlKey:s,altKey:p,shiftKey:f}=t;st()&&(!((a=window.event)===null||a===void 0||(i=a.type)===null||i===void 0)&&i.startsWith("key"))&&e.target==="_blank"&&(B()?u=!0:s=!0);let h=it()&&B()&&!Me()?new KeyboardEvent("keydown",{keyIdentifier:"Enter",metaKey:u,ctrlKey:s,altKey:p,shiftKey:f}):new MouseEvent("click",{metaKey:u,ctrlKey:s,altKey:p,shiftKey:f,bubbles:!0,cancelable:!0});j.isOpening=n,Y(e),e.dispatchEvent(h),j.isOpening=!1}j.isOpening=!1;let N=new Map,le=new Set;function me(){if(typeof window>"u")return;function e(i){return"propertyName"in i}let t=i=>{if(!e(i)||!i.target)return;let a=N.get(i.target);a||(a=new Set,N.set(i.target,a),i.target.addEventListener("transitioncancel",n,{once:!0})),a.add(i.propertyName)},n=i=>{if(!e(i)||!i.target)return;let a=N.get(i.target);if(a&&(a.delete(i.propertyName),a.size===0&&(i.target.removeEventListener("transitioncancel",n),N.delete(i.target)),N.size===0)){for(let u of le)u();le.clear()}};document.body.addEventListener("transitionrun",t),document.body.addEventListener("transitionend",n)}typeof document<"u"&&(document.readyState!=="loading"?me():document.addEventListener("DOMContentLoaded",me));function De(e){requestAnimationFrame(()=>{N.size===0?e():le.add(e)})}function lt(){let e=y.useRef(new Map),t=y.useCallback((a,u,s,p)=>{let f=p!=null&&p.once?(...h)=>{e.current.delete(s),s(...h)}:s;e.current.set(s,{type:u,eventTarget:a,fn:f,options:p}),a.addEventListener(u,f,p)},[]),n=y.useCallback((a,u,s,p)=>{var f;let h=((f=e.current.get(s))===null||f===void 0?void 0:f.fn)||s;a.removeEventListener(u,h,p),e.current.delete(s)},[]),i=y.useCallback(()=>{e.current.forEach((a,u)=>{n(a.eventTarget,a.type,u,a.options)})},[n]);return y.useEffect(()=>i,[i]),{addGlobalListener:t,removeGlobalListener:n,removeAllGlobalListeners:i}}function Fe(e,t){ve(()=>{if(e&&e.ref&&t)return e.ref.current=t.current,()=>{e.ref&&(e.ref.current=null)}})}function ue(e){return e.mozInputSource===0&&e.isTrusted?!0:Ce()&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}function ut(e){return!Ce()&&e.width===0&&e.height===0||e.width===1&&e.height===1&&e.pressure===0&&e.detail===0&&e.pointerType==="mouse"}function ct(e,t,n){let i=y.useRef(t),a=F(()=>{n&&n(i.current)});y.useEffect(()=>{var u;let s=e==null||(u=e.current)===null||u===void 0?void 0:u.form;return s==null||s.addEventListener("reset",a),()=>{s==null||s.removeEventListener("reset",a)}},[e,a])}const Ie=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable^="false"])'],ft=Ie.join(":not([hidden]),")+",[tabindex]:not([disabled]):not([hidden])";Ie.push('[tabindex]:not([tabindex="-1"]):not([disabled])');function dt(e){return e.matches(ft)}let G="default",ce="",Q=new WeakMap;function he(e){if(Oe()){if(G==="default"){const t=S(e);ce=t.documentElement.style.webkitUserSelect,t.documentElement.style.webkitUserSelect="none"}G="disabled"}else if(e instanceof HTMLElement||e instanceof SVGElement){let t="userSelect"in e.style?"userSelect":"webkitUserSelect";Q.set(e,e.style[t]),e.style[t]="none"}}function ie(e){if(Oe()){if(G!=="disabled")return;G="restoring",setTimeout(()=>{De(()=>{if(G==="restoring"){const t=S(e);t.documentElement.style.webkitUserSelect==="none"&&(t.documentElement.style.webkitUserSelect=ce||""),ce="",G="default"}})},300)}else if((e instanceof HTMLElement||e instanceof SVGElement)&&e&&Q.has(e)){let t=Q.get(e),n="userSelect"in e.style?"userSelect":"webkitUserSelect";e.style[n]==="none"&&(e.style[n]=t),e.getAttribute("style")===""&&e.removeAttribute("style"),Q.delete(e)}}const _e=de.createContext({register:()=>{}});_e.displayName="PressResponderContext";class pt{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(t,n){this.nativeEvent=n,this.target=n.target,this.currentTarget=n.currentTarget,this.relatedTarget=n.relatedTarget,this.bubbles=n.bubbles,this.cancelable=n.cancelable,this.defaultPrevented=n.defaultPrevented,this.eventPhase=n.eventPhase,this.isTrusted=n.isTrusted,this.timeStamp=n.timeStamp,this.type=t}}function vt(e){let t=y.useRef({isFocused:!1,observer:null});ve(()=>{const i=t.current;return()=>{i.observer&&(i.observer.disconnect(),i.observer=null)}},[]);let n=F(i=>{e==null||e(i)});return y.useCallback(i=>{if(i.target instanceof HTMLButtonElement||i.target instanceof HTMLInputElement||i.target instanceof HTMLTextAreaElement||i.target instanceof HTMLSelectElement){t.current.isFocused=!0;let a=i.target,u=s=>{t.current.isFocused=!1,a.disabled&&n(new pt("blur",s)),t.current.observer&&(t.current.observer.disconnect(),t.current.observer=null)};a.addEventListener("focusout",u,{once:!0}),t.current.observer=new MutationObserver(()=>{if(t.current.isFocused&&a.disabled){var s;(s=t.current.observer)===null||s===void 0||s.disconnect();let p=a===document.activeElement?null:document.activeElement;a.dispatchEvent(new FocusEvent("blur",{relatedTarget:p})),a.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:p}))}}),t.current.observer.observe(a,{attributes:!0,attributeFilter:["disabled"]})}},[n])}let ee=!1;function Ee(e){for(;e&&!dt(e);)e=e.parentElement;let t=_(e),n=t.document.activeElement;if(!n||n===e)return;ee=!0;let i=!1,a=v=>{(v.target===n||i)&&v.stopImmediatePropagation()},u=v=>{(v.target===n||i)&&(v.stopImmediatePropagation(),!e&&!i&&(i=!0,Y(n),f()))},s=v=>{(v.target===e||i)&&v.stopImmediatePropagation()},p=v=>{(v.target===e||i)&&(v.stopImmediatePropagation(),i||(i=!0,Y(n),f()))};t.addEventListener("blur",a,!0),t.addEventListener("focusout",u,!0),t.addEventListener("focusin",p,!0),t.addEventListener("focus",s,!0);let f=()=>{cancelAnimationFrame(h),t.removeEventListener("blur",a,!0),t.removeEventListener("focusout",u,!0),t.removeEventListener("focusin",p,!0),t.removeEventListener("focus",s,!0),ee=!1,i=!1},h=requestAnimationFrame(f);return f}function bt(e){let t=y.useContext(_e);if(t){let{register:n,...i}=t;e=I(i,e),n()}return Fe(t,e.ref),e}var q=new WeakMap;class J{continuePropagation(){ye(this,q,!1)}get shouldStopPropagation(){return Be(this,q)}constructor(t,n,i,a){je(this,q,{writable:!0,value:void 0}),ye(this,q,!0);var u;let s=(u=a==null?void 0:a.target)!==null&&u!==void 0?u:i.currentTarget;const p=s==null?void 0:s.getBoundingClientRect();let f,h=0,v,D=null;i.clientX!=null&&i.clientY!=null&&(v=i.clientX,D=i.clientY),p&&(v!=null&&D!=null?(f=v-p.left,h=D-p.top):(f=p.width/2,h=p.height/2)),this.type=t,this.pointerType=n,this.target=i.currentTarget,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.x=f,this.y=h}}const Pe=Symbol("linkClicked");function Te(e){let{onPress:t,onPressChange:n,onPressStart:i,onPressEnd:a,onPressUp:u,isDisabled:s,isPressed:p,preventFocusOnPress:f,shouldCancelOnPointerExit:h,allowTextSelectionOnPress:v,ref:D,...ne}=bt(e),[oe,z]=y.useState(!1),K=y.useRef({isPressed:!1,ignoreEmulatedMouseEvents:!1,didFirePressStart:!1,isTriggeringEvent:!1,activePointerId:null,target:null,isOverTarget:!1,pointerType:null,disposables:[]}),{addGlobalListener:k,removeAllGlobalListeners:A}=lt(),x=F((r,c)=>{let E=K.current;if(s||E.didFirePressStart)return!1;let l=!0;if(E.isTriggeringEvent=!0,i){let g=new J("pressstart",c,r);i(g),l=g.shouldStopPropagation}return n&&n(!0),E.isTriggeringEvent=!1,E.didFirePressStart=!0,z(!0),l}),w=F((r,c,E=!0)=>{let l=K.current;if(!l.didFirePressStart)return!1;l.didFirePressStart=!1,l.isTriggeringEvent=!0;let g=!0;if(a){let o=new J("pressend",c,r);a(o),g=o.shouldStopPropagation}if(n&&n(!1),z(!1),t&&E&&!s){let o=new J("press",c,r);t(o),g&&(g=o.shouldStopPropagation)}return l.isTriggeringEvent=!1,g}),M=F((r,c)=>{let E=K.current;if(s)return!1;if(u){E.isTriggeringEvent=!0;let l=new J("pressup",c,r);return u(l),E.isTriggeringEvent=!1,l.shouldStopPropagation}return!0}),P=F(r=>{let c=K.current;if(c.isPressed&&c.target){c.didFirePressStart&&c.pointerType!=null&&w(H(c.target,r),c.pointerType,!1),c.isPressed=!1,c.isOverTarget=!1,c.activePointerId=null,c.pointerType=null,A(),v||ie(c.target);for(let E of c.disposables)E();c.disposables=[]}}),T=F(r=>{h&&P(r)}),Ge=y.useMemo(()=>{let r=K.current,c={onKeyDown(l){if(ae(l.nativeEvent,l.currentTarget)&&m(l.currentTarget,$(l.nativeEvent))){var g;Se($(l.nativeEvent),l.key)&&l.preventDefault();let o=!0;if(!r.isPressed&&!l.repeat){r.target=l.currentTarget,r.isPressed=!0,r.pointerType="keyboard",o=x(l,"keyboard");let d=l.currentTarget,b=U=>{ae(U,d)&&!U.repeat&&m(d,$(U))&&r.target&&M(H(r.target,U),"keyboard")};k(S(l.currentTarget),"keyup",Ke(b,E),!0)}o&&l.stopPropagation(),l.metaKey&&B()&&((g=r.metaKeyEvents)===null||g===void 0||g.set(l.key,l.nativeEvent))}else l.key==="Meta"&&(r.metaKeyEvents=new Map)},onClick(l){if(!(l&&!m(l.currentTarget,$(l.nativeEvent)))&&l&&l.button===0&&!r.isTriggeringEvent&&!j.isOpening){let g=!0;if(s&&l.preventDefault(),!r.ignoreEmulatedMouseEvents&&!r.isPressed&&(r.pointerType==="virtual"||ue(l.nativeEvent))){let o=x(l,"virtual"),d=M(l,"virtual"),b=w(l,"virtual");g=o&&d&&b}else if(r.isPressed&&r.pointerType!=="keyboard"){let o=r.pointerType||l.nativeEvent.pointerType||"virtual";g=w(H(l.currentTarget,l),o,!0),r.isOverTarget=!1,P(l)}r.ignoreEmulatedMouseEvents=!1,g&&l.stopPropagation()}}},E=l=>{var g;if(r.isPressed&&r.target&&ae(l,r.target)){var o;Se($(l),l.key)&&l.preventDefault();let b=$(l);w(H(r.target,l),"keyboard",m(r.target,$(l))),A(),l.key!=="Enter"&&$e(r.target)&&m(r.target,b)&&!l[Pe]&&(l[Pe]=!0,j(r.target,l,!1)),r.isPressed=!1,(o=r.metaKeyEvents)===null||o===void 0||o.delete(l.key)}else if(l.key==="Meta"&&(!((g=r.metaKeyEvents)===null||g===void 0)&&g.size)){var d;let b=r.metaKeyEvents;r.metaKeyEvents=void 0;for(let U of b.values())(d=r.target)===null||d===void 0||d.dispatchEvent(new KeyboardEvent("keyup",U))}};if(typeof PointerEvent<"u"){c.onPointerDown=o=>{if(o.button!==0||!m(o.currentTarget,$(o.nativeEvent)))return;if(ut(o.nativeEvent)){r.pointerType="virtual";return}r.pointerType=o.pointerType;let d=!0;if(!r.isPressed){r.isPressed=!0,r.isOverTarget=!0,r.activePointerId=o.pointerId,r.target=o.currentTarget,v||he(r.target),d=x(o,r.pointerType);let b=$(o.nativeEvent);"releasePointerCapture"in b&&b.releasePointerCapture(o.pointerId),k(S(o.currentTarget),"pointerup",l,!1),k(S(o.currentTarget),"pointercancel",g,!1)}d&&o.stopPropagation()},c.onMouseDown=o=>{if(m(o.currentTarget,$(o.nativeEvent))&&o.button===0){if(f){let d=Ee(o.target);d&&r.disposables.push(d)}o.stopPropagation()}},c.onPointerUp=o=>{!m(o.currentTarget,$(o.nativeEvent))||r.pointerType==="virtual"||o.button===0&&M(o,r.pointerType||o.pointerType)},c.onPointerEnter=o=>{o.pointerId===r.activePointerId&&r.target&&!r.isOverTarget&&r.pointerType!=null&&(r.isOverTarget=!0,x(H(r.target,o),r.pointerType))},c.onPointerLeave=o=>{o.pointerId===r.activePointerId&&r.target&&r.isOverTarget&&r.pointerType!=null&&(r.isOverTarget=!1,w(H(r.target,o),r.pointerType,!1),T(o))};let l=o=>{if(o.pointerId===r.activePointerId&&r.isPressed&&o.button===0&&r.target){if(m(r.target,$(o))&&r.pointerType!=null){let d=!1,b=setTimeout(()=>{r.isPressed&&r.target instanceof HTMLElement&&(d?P(o):(Y(r.target),r.target.click()))},80);k(o.currentTarget,"click",()=>d=!0,!0),r.disposables.push(()=>clearTimeout(b))}else P(o);r.isOverTarget=!1}},g=o=>{P(o)};c.onDragStart=o=>{m(o.currentTarget,$(o.nativeEvent))&&P(o)}}else{c.onMouseDown=o=>{if(o.button!==0||!m(o.currentTarget,$(o.nativeEvent)))return;if(r.ignoreEmulatedMouseEvents){o.stopPropagation();return}if(r.isPressed=!0,r.isOverTarget=!0,r.target=o.currentTarget,r.pointerType=ue(o.nativeEvent)?"virtual":"mouse",Ye.flushSync(()=>x(o,r.pointerType))&&o.stopPropagation(),f){let b=Ee(o.target);b&&r.disposables.push(b)}k(S(o.currentTarget),"mouseup",l,!1)},c.onMouseEnter=o=>{if(!m(o.currentTarget,$(o.nativeEvent)))return;let d=!0;r.isPressed&&!r.ignoreEmulatedMouseEvents&&r.pointerType!=null&&(r.isOverTarget=!0,d=x(o,r.pointerType)),d&&o.stopPropagation()},c.onMouseLeave=o=>{if(!m(o.currentTarget,$(o.nativeEvent)))return;let d=!0;r.isPressed&&!r.ignoreEmulatedMouseEvents&&r.pointerType!=null&&(r.isOverTarget=!1,d=w(o,r.pointerType,!1),T(o)),d&&o.stopPropagation()},c.onMouseUp=o=>{m(o.currentTarget,$(o.nativeEvent))&&!r.ignoreEmulatedMouseEvents&&o.button===0&&M(o,r.pointerType||"mouse")};let l=o=>{if(o.button===0){if(r.ignoreEmulatedMouseEvents){r.ignoreEmulatedMouseEvents=!1;return}r.target&&r.target.contains(o.target)&&r.pointerType!=null||P(o),r.isOverTarget=!1}};c.onTouchStart=o=>{if(!m(o.currentTarget,$(o.nativeEvent)))return;let d=$t(o.nativeEvent);if(!d)return;r.activePointerId=d.identifier,r.ignoreEmulatedMouseEvents=!0,r.isOverTarget=!0,r.isPressed=!0,r.target=o.currentTarget,r.pointerType="touch",v||he(r.target),x(O(r.target,o),r.pointerType)&&o.stopPropagation(),k(_(o.currentTarget),"scroll",g,!0)},c.onTouchMove=o=>{if(!m(o.currentTarget,$(o.nativeEvent)))return;if(!r.isPressed){o.stopPropagation();return}let d=we(o.nativeEvent,r.activePointerId),b=!0;d&&Le(d,o.currentTarget)?!r.isOverTarget&&r.pointerType!=null&&(r.isOverTarget=!0,b=x(O(r.target,o),r.pointerType)):r.isOverTarget&&r.pointerType!=null&&(r.isOverTarget=!1,b=w(O(r.target,o),r.pointerType,!1),T(O(r.target,o))),b&&o.stopPropagation()},c.onTouchEnd=o=>{if(!m(o.currentTarget,$(o.nativeEvent)))return;if(!r.isPressed){o.stopPropagation();return}let d=we(o.nativeEvent,r.activePointerId),b=!0;d&&Le(d,o.currentTarget)&&r.pointerType!=null?(M(O(r.target,o),r.pointerType),b=w(O(r.target,o),r.pointerType)):r.isOverTarget&&r.pointerType!=null&&(b=w(O(r.target,o),r.pointerType,!1)),b&&o.stopPropagation(),r.isPressed=!1,r.activePointerId=null,r.isOverTarget=!1,r.ignoreEmulatedMouseEvents=!0,r.target&&!v&&ie(r.target),A()},c.onTouchCancel=o=>{m(o.currentTarget,$(o.nativeEvent))&&(o.stopPropagation(),r.isPressed&&P(O(r.target,o)))};let g=o=>{r.isPressed&&m($(o),r.target)&&P({currentTarget:r.target,shiftKey:!1,ctrlKey:!1,metaKey:!1,altKey:!1})};c.onDragStart=o=>{m(o.currentTarget,$(o.nativeEvent))&&P(o)}}return c},[k,s,f,A,v,P,T,w,x,M]);return y.useEffect(()=>{let r=K.current;return()=>{var c;v||ie((c=r.target)!==null&&c!==void 0?c:void 0);for(let E of r.disposables)E();r.disposables=[]}},[v]),{isPressed:p||oe,pressProps:I(ne,Ge)}}function $e(e){return e.tagName==="A"&&e.hasAttribute("href")}function ae(e,t){const{key:n,code:i}=e,a=t,u=a.getAttribute("role");return(n==="Enter"||n===" "||n==="Spacebar"||i==="Space")&&!(a instanceof _(a).HTMLInputElement&&!Re(a,n)||a instanceof _(a).HTMLTextAreaElement||a.isContentEditable)&&!((u==="link"||!u&&$e(a))&&n!=="Enter")}function $t(e){const{targetTouches:t}=e;return t.length>0?t[0]:null}function we(e,t){const n=e.changedTouches;for(let i=0;i<n.length;i++){const a=n[i];if(a.identifier===t)return a}return null}function O(e,t){let n=0,i=0;return t.targetTouches&&t.targetTouches.length===1&&(n=t.targetTouches[0].clientX,i=t.targetTouches[0].clientY),{currentTarget:e,shiftKey:t.shiftKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey,altKey:t.altKey,clientX:n,clientY:i}}function H(e,t){let n=t.clientX,i=t.clientY;return{currentTarget:e,shiftKey:t.shiftKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey,altKey:t.altKey,clientX:n,clientY:i}}function gt(e){let t=0,n=0;return e.width!==void 0?t=e.width/2:e.radiusX!==void 0&&(t=e.radiusX),e.height!==void 0?n=e.height/2:e.radiusY!==void 0&&(n=e.radiusY),{top:e.clientY-n,right:e.clientX+t,bottom:e.clientY+n,left:e.clientX-t}}function yt(e,t){return!(e.left>t.right||t.left>e.right||e.top>t.bottom||t.top>e.bottom)}function Le(e,t){let n=t.getBoundingClientRect(),i=gt(e);return yt(n,i)}function mt(e){return e instanceof HTMLInputElement?!1:e instanceof HTMLButtonElement?e.type!=="submit"&&e.type!=="reset":!$e(e)}function Se(e,t){return e instanceof HTMLInputElement?!Re(e,t):mt(e)}const ht=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function Re(e,t){return e.type==="checkbox"||e.type==="radio"?t===" ":ht.has(e.type)}let W=null,Et=new Set,X=new Map,R=!1,fe=!1;function ge(e,t){for(let n of Et)n(e,t)}function Pt(e){return!(e.metaKey||!B()&&e.altKey||e.ctrlKey||e.key==="Control"||e.key==="Shift"||e.key==="Meta")}function te(e){R=!0,Pt(e)&&(W="keyboard",ge("keyboard",e))}function L(e){W="pointer",(e.type==="mousedown"||e.type==="pointerdown")&&(R=!0,ge("pointer",e))}function Ae(e){ue(e)&&(R=!0,W="virtual")}function Ue(e){e.target===window||e.target===document||ee||!e.isTrusted||(!R&&!fe&&(W="virtual",ge("virtual",e)),R=!1,fe=!1)}function He(){ee||(R=!1,fe=!0)}function xe(e){if(typeof window>"u"||X.get(_(e)))return;const t=_(e),n=S(e);let i=t.HTMLElement.prototype.focus;t.HTMLElement.prototype.focus=function(){R=!0,i.apply(this,arguments)},n.addEventListener("keydown",te,!0),n.addEventListener("keyup",te,!0),n.addEventListener("click",Ae,!0),t.addEventListener("focus",Ue,!0),t.addEventListener("blur",He,!1),typeof PointerEvent<"u"?(n.addEventListener("pointerdown",L,!0),n.addEventListener("pointermove",L,!0),n.addEventListener("pointerup",L,!0)):(n.addEventListener("mousedown",L,!0),n.addEventListener("mousemove",L,!0),n.addEventListener("mouseup",L,!0)),t.addEventListener("beforeunload",()=>{Ne(e)},{once:!0}),X.set(t,{focus:i})}const Ne=(e,t)=>{const n=_(e),i=S(e);t&&i.removeEventListener("DOMContentLoaded",t),X.has(n)&&(n.HTMLElement.prototype.focus=X.get(n).focus,i.removeEventListener("keydown",te,!0),i.removeEventListener("keyup",te,!0),i.removeEventListener("click",Ae,!0),n.removeEventListener("focus",Ue,!0),n.removeEventListener("blur",He,!1),typeof PointerEvent<"u"?(i.removeEventListener("pointerdown",L,!0),i.removeEventListener("pointermove",L,!0),i.removeEventListener("pointerup",L,!0)):(i.removeEventListener("mousedown",L,!0),i.removeEventListener("mousemove",L,!0),i.removeEventListener("mouseup",L,!0)),X.delete(n))};function Tt(e){const t=S(e);let n;return t.readyState!=="loading"?xe(e):(n=()=>{xe(e)},t.addEventListener("DOMContentLoaded",n)),()=>Ne(e,n)}typeof document<"u"&&Tt();function wt(){return W}function Lt(e){const t=S(e),n=Z(t);if(wt()==="virtual"){let i=n;De(()=>{Z(t)===i&&e.isConnected&&Y(e)})}else Y(e)}function St(e){let{isDisabled:t,onFocus:n,onBlur:i,onFocusChange:a}=e;const u=y.useCallback(f=>{if(f.target===f.currentTarget)return i&&i(f),a&&a(!1),!0},[i,a]),s=vt(u),p=y.useCallback(f=>{const h=S(f.target),v=h?Z(h):Z();f.target===f.currentTarget&&v===$(f.nativeEvent)&&(n&&n(f),a&&a(!0),s(f))},[a,n,s]);return{focusProps:{onFocus:!t&&(n||a||i)?p:void 0,onBlur:!t&&(i||a)?u:void 0}}}function ke(e){if(!e)return;let t=!0;return n=>{let i={...n,preventDefault(){n.preventDefault()},isDefaultPrevented(){return n.isDefaultPrevented()},stopPropagation(){t?console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior."):t=!0},continuePropagation(){t=!1},isPropagationStopped(){return t}};e(i),t&&n.stopPropagation()}}function xt(e){return{keyboardProps:e.isDisabled?{}:{onKeyDown:ke(e.onKeyDown),onKeyUp:ke(e.onKeyUp)}}}let kt=de.createContext(null);function Kt(e){let t=y.useContext(kt)||{};Fe(t,e);let{ref:n,...i}=t;return i}function Mt(e,t){let{focusProps:n}=St(e),{keyboardProps:i}=xt(e),a=I(n,i),u=Kt(t),s=e.isDisabled?{}:u,p=y.useRef(e.autoFocus);y.useEffect(()=>{p.current&&t.current&&Lt(t.current),p.current=!1},[t]);let f=e.excludeFromTabOrder?-1:0;return e.isDisabled&&(f=void 0),{focusableProps:I({...a,tabIndex:f},s)}}function Dt(e,t,n){let{isDisabled:i=!1,isReadOnly:a=!1,value:u,name:s,children:p,"aria-label":f,"aria-labelledby":h,validationState:v="valid",isInvalid:D}=e,ne=T=>{T.stopPropagation(),t.setSelected(T.target.checked)},oe=p!=null,z=f!=null||h!=null;!oe&&!z&&console.warn("If you do not provide children, you must specify an aria-label for accessibility");let{pressProps:K,isPressed:k}=Te({isDisabled:i}),{pressProps:A,isPressed:x}=Te({onPress(){var T;t.toggle(),(T=n.current)===null||T===void 0||T.focus()},isDisabled:i||a}),{focusableProps:w}=Mt(e,n),M=I(K,w),P=et(e,{labelable:!0});return ct(n,t.isSelected,t.setSelected),{labelProps:I(A,{onClick:T=>T.preventDefault()}),inputProps:I(P,{"aria-invalid":D||v==="invalid"||void 0,"aria-errormessage":e["aria-errormessage"],"aria-controls":e["aria-controls"],"aria-readonly":a||void 0,onChange:ne,disabled:i,...u==null?{}:{value:u},name:s,type:"checkbox",...M}),isSelected:t.isSelected,isPressed:k||x,isDisabled:i,isReadOnly:a,isInvalid:D||v==="invalid"}}export{Dt as $};
