var ye=Object.defineProperty,_e=Object.defineProperties;var Se=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var X=(e,t,r)=>t in e?ye(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,F=(e,t)=>{for(var r in t||(t={}))Y.call(t,r)&&X(e,r,t[r]);if(w)for(var r of w(t))J.call(t,r)&&X(e,r,t[r]);return e},q=(e,t)=>_e(e,Se(t));var z=(e,t)=>{var r={};for(var n in e)Y.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&w)for(var n of w(e))t.indexOf(n)<0&&J.call(e,n)&&(r[n]=e[n]);return r};import{S as xe,u as Ee,E as Z,a as ee,b as Ie,c as Oe,g as je}from"./events.service.d0533d12.js";import{c as G,a as Ce,b as te,d as B,f as y,u as U,o as M,e as O,r as d,g as j,h as Te,i as $e,s as Re,m as Ne,j as we,l as Pe,k as P,n as W,p as b,F as ke}from"./index.d4737016.js";function k(){return k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},k.apply(this,arguments)}function oe(e,t){if(e==null)return{};var r={},n=Object.keys(e),a,i;for(i=0;i<n.length;i++)a=n[i],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}G("FormControl");var De=Ce({strict:!1,name:"FormControlContext"}),Le=De[1],Ae=["isDisabled","isInvalid","isReadOnly","isRequired"],Fe=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function ce(e){var t=qe(e),r=t.isDisabled,n=t.isInvalid,a=t.isReadOnly,i=t.isRequired,o=oe(t,Ae);return k({},o,{disabled:r,readOnly:a,required:i,"aria-invalid":B(n),"aria-required":B(i),"aria-readonly":B(a)})}function qe(e){var t,r,n,a=Le(),i=e.id,o=e.disabled,l=e.readOnly,s=e.required,c=e.isRequired,m=e.isInvalid,p=e.isReadOnly,u=e.isDisabled,v=e.onFocus,g=e.onBlur,_=oe(e,Fe),S=e["aria-describedby"]?[e["aria-describedby"]]:[];return a!=null&&a.hasFeedbackText&&a!=null&&a.isInvalid&&S.push(a.feedbackId),a!=null&&a.hasHelpText&&S.push(a.helpTextId),k({},_,{"aria-describedby":S.join(" ")||void 0,id:i!=null?i:a==null?void 0:a.id,isDisabled:(t=o!=null?o:u)!=null?t:a==null?void 0:a.isDisabled,isReadOnly:(r=l!=null?l:p)!=null?r:a==null?void 0:a.isReadOnly,isRequired:(n=s!=null?s:c)!=null?n:a==null?void 0:a.isRequired,isInvalid:m!=null?m:a==null?void 0:a.isInvalid,onFocus:te(a==null?void 0:a.onFocus,v),onBlur:te(a==null?void 0:a.onBlur,g)})}G("FormError");function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},h.apply(this,arguments)}function T(e,t){if(e==null)return{};var r={},n=Object.keys(e),a,i;for(i=0;i<n.length;i++)a=n[i],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}var ze=["htmlSize"],de=y(function(e,t){var r=e.htmlSize,n=T(e,ze),a=U("Input",n),i=M(n),o=ce(i),l=O("chakra-input",e.className);return d.exports.createElement(j.input,h({size:r},o,{__css:a.field,ref:t,className:l}))});de.id="Input";var Be=["children","className"],ue=G("InputGroup"),He=ue[0],We=ue[1],fe=We,Ge=y(function(e,t){var r=U("Input",e),n=M(e),a=n.children,i=n.className,o=T(n,Be),l=O("chakra-input__group",i),s={},c=Te(a),m=r.field;c.forEach(function(u){if(!!r){if(m&&u.type.id==="InputLeftElement"){var v;s.paddingStart=(v=m.height)!=null?v:m.h}if(m&&u.type.id==="InputRightElement"){var g;s.paddingEnd=(g=m.height)!=null?g:m.h}u.type.id==="InputRightAddon"&&(s.borderEndRadius=0),u.type.id==="InputLeftAddon"&&(s.borderStartRadius=0)}});var p=c.map(function(u){var v,g,_=$e({size:((v=u.props)==null?void 0:v.size)||e.size,variant:((g=u.props)==null?void 0:g.variant)||e.variant});return u.type.id!=="Input"?d.exports.cloneElement(u,_):d.exports.cloneElement(u,Object.assign(_,s,u.props))});return d.exports.createElement(j.div,h({className:l,ref:t,__css:{width:"100%",display:"flex",position:"relative"}},o),d.exports.createElement(He,{value:r},p))}),Ue=["placement"],Me={left:{marginEnd:"-1px",borderEndRadius:0,borderEndColor:"transparent"},right:{marginStart:"-1px",borderStartRadius:0,borderStartColor:"transparent"}},Ke=j("div",{baseStyle:{flex:"0 0 auto",width:"auto",display:"flex",alignItems:"center",whiteSpace:"nowrap"}}),me=y(function(e,t){var r,n=e.placement,a=n===void 0?"left":n,i=T(e,Ue),o=(r=Me[a])!=null?r:{},l=fe();return d.exports.createElement(Ke,h({ref:t},i,{__css:h({},l.addon,o)}))}),Qe=y(function(e,t){return d.exports.createElement(me,h({ref:t,placement:"left"},e,{className:O("chakra-input__left-addon",e.className)}))});Qe.id="InputLeftAddon";var Ve=y(function(e,t){return d.exports.createElement(me,h({ref:t,placement:"right"},e,{className:O("chakra-input__right-addon",e.className)}))});Ve.id="InputRightAddon";var Xe=["placement"],Ye=["className"],Je=["className"],Ze=j("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),K=y(function(e,t){var r,n,a,i=e.placement,o=i===void 0?"left":i,l=T(e,Xe),s=fe(),c=s.field,m=o==="left"?"insetStart":"insetEnd",p=h((a={},a[m]="0",a.width=(r=c==null?void 0:c.height)!=null?r:c==null?void 0:c.h,a.height=(n=c==null?void 0:c.height)!=null?n:c==null?void 0:c.h,a.fontSize=c==null?void 0:c.fontSize,a),s.element);return d.exports.createElement(Ze,h({ref:t,__css:p},l))});K.id="InputElement";var et=y(function(e,t){var r=e.className,n=T(e,Ye),a=O("chakra-input__left-element",r);return d.exports.createElement(K,h({ref:t,placement:"left",className:a},n))});et.id="InputLeftElement";var ve=y(function(e,t){var r=e.className,n=T(e,Je),a=O("chakra-input__right-element",r);return d.exports.createElement(K,h({ref:t,placement:"right",className:a},n))});ve.id="InputRightElement";function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},E.apply(this,arguments)}function Q(e,t){if(e==null)return{};var r={},n=Object.keys(e),a,i;for(i=0;i<n.length;i++)a=n[i],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}var tt=["children","placeholder","className"],rt=["rootProps","placeholder","icon","color","height","h","minH","minHeight","iconColor","iconSize"],nt=["children"],at=y(function(e,t){var r=e.children,n=e.placeholder,a=e.className,i=Q(e,tt);return d.exports.createElement(j.select,E({},i,{ref:t,className:O("chakra-select",a)}),n&&d.exports.createElement("option",{value:""},n),r)}),it=y(function(e,t){var r=U("Select",e),n=M(e),a=n.rootProps,i=n.placeholder,o=n.icon,l=n.color,s=n.height,c=n.h,m=n.minH,p=n.minHeight,u=n.iconColor,v=n.iconSize,g=Q(n,rt),_=Re(g,Pe),S=_[0],C=_[1],$=ce(C),D={width:"100%",height:"fit-content",position:"relative",color:l},L=Ne({paddingEnd:"2rem"},r.field,{_focus:{zIndex:"unset"}});return d.exports.createElement(j.div,E({className:"chakra-select__wrapper",__css:D},S,a),d.exports.createElement(at,E({ref:t,height:c!=null?c:s,minH:m!=null?m:p,placeholder:i},$,{__css:L}),e.children),d.exports.createElement(ot,E({"data-disabled":we($.disabled)},(u||l)&&{color:u||l},{__css:r.icon},v&&{fontSize:v}),o))}),lt=function(t){return d.exports.createElement("svg",E({viewBox:"0 0 24 24"},t),d.exports.createElement("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}))},st=j("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),ot=function(t){var r=t.children,n=r===void 0?d.exports.createElement(lt,null):r,a=Q(t,nt),i=d.exports.cloneElement(n,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return d.exports.createElement(st,E({},a,{className:"chakra-select__icon-wrapper"}),d.exports.isValidElement(n)?i:null)};function ct(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var pe=ct,dt=typeof P=="object"&&P&&P.Object===Object&&P,ut=dt,ft=ut,mt=typeof self=="object"&&self&&self.Object===Object&&self,vt=ft||mt||Function("return this")(),he=vt,pt=he,ht=function(){return pt.Date.now()},gt=ht,bt=/\s/;function yt(e){for(var t=e.length;t--&&bt.test(e.charAt(t)););return t}var _t=yt,St=_t,xt=/^\s+/;function Et(e){return e&&e.slice(0,St(e)+1).replace(xt,"")}var It=Et,Ot=he,jt=Ot.Symbol,ge=jt,re=ge,be=Object.prototype,Ct=be.hasOwnProperty,Tt=be.toString,N=re?re.toStringTag:void 0;function $t(e){var t=Ct.call(e,N),r=e[N];try{e[N]=void 0;var n=!0}catch{}var a=Tt.call(e);return n&&(t?e[N]=r:delete e[N]),a}var Rt=$t,Nt=Object.prototype,wt=Nt.toString;function Pt(e){return wt.call(e)}var kt=Pt,ne=ge,Dt=Rt,Lt=kt,At="[object Null]",Ft="[object Undefined]",ae=ne?ne.toStringTag:void 0;function qt(e){return e==null?e===void 0?Ft:At:ae&&ae in Object(e)?Dt(e):Lt(e)}var zt=qt;function Bt(e){return e!=null&&typeof e=="object"}var Ht=Bt,Wt=zt,Gt=Ht,Ut="[object Symbol]";function Mt(e){return typeof e=="symbol"||Gt(e)&&Wt(e)==Ut}var Kt=Mt,Qt=It,ie=pe,Vt=Kt,le=0/0,Xt=/^[-+]0x[0-9a-f]+$/i,Yt=/^0b[01]+$/i,Jt=/^0o[0-7]+$/i,Zt=parseInt;function er(e){if(typeof e=="number")return e;if(Vt(e))return le;if(ie(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=ie(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Qt(e);var r=Yt.test(e);return r||Jt.test(e)?Zt(e.slice(2),r?2:8):Xt.test(e)?le:+e}var tr=er,rr=pe,H=gt,se=tr,nr="Expected a function",ar=Math.max,ir=Math.min;function lr(e,t,r){var n,a,i,o,l,s,c=0,m=!1,p=!1,u=!0;if(typeof e!="function")throw new TypeError(nr);t=se(t)||0,rr(r)&&(m=!!r.leading,p="maxWait"in r,i=p?ar(se(r.maxWait)||0,t):i,u="trailing"in r?!!r.trailing:u);function v(f){var x=n,R=a;return n=a=void 0,c=f,o=e.apply(R,x),o}function g(f){return c=f,l=setTimeout(C,t),m?v(f):o}function _(f){var x=f-s,R=f-c,V=t-x;return p?ir(V,i-R):V}function S(f){var x=f-s,R=f-c;return s===void 0||x>=t||x<0||p&&R>=i}function C(){var f=H();if(S(f))return $(f);l=setTimeout(C,_(f))}function $(f){return l=void 0,u&&n?v(f):(n=a=void 0,o)}function D(){l!==void 0&&clearTimeout(l),c=0,n=s=a=l=void 0}function L(){return l===void 0?o:$(H())}function A(){var f=H(),x=S(f);if(n=arguments,a=this,s=f,x){if(l===void 0)return g(s);if(p)return clearTimeout(l),l=setTimeout(C,t),v(s)}return l===void 0&&(l=setTimeout(C,t)),o}return A.cancel=D,A.flush=L,A}var sr=lr;const or=n=>{var a=n,{query:e,setQuery:t}=a,r=z(a,["query","setQuery"]);const i=d.exports.useMemo(()=>sr(o=>{const l=o.target.value;t(l);const s=new URLSearchParams;s.set("query",l),history.replaceState(null,"",`${window.location.pathname}?${s.toString()}`)},300),[]);return W(Ge,q(F({},r),{children:[b(de,{placeholder:"Event name",onChange:i,bgColor:"white"}),b(ve,{children:b(xe,{})})]}))};var I=(e=>(e.DATE_DESC="date_desc",e.DATE_INC="date_inc",e.SCORE_DESC="score_desc",e.SCORE_INC="score_inc",e))(I||{});const cr=e=>({[I.DATE_DESC]:"Dates descending",[I.DATE_INC]:"Dates ascending",[I.SCORE_DESC]:"Score descending",[I.SCORE_INC]:"Score ascending"})[e],dr=n=>{var a=n,{orderBy:e,setOrderBy:t}=a,r=z(a,["orderBy","setOrderBy"]);const i=d.exports.useCallback(o=>{const l=o.target.value;t(l);const s=new URLSearchParams;s.set("orderBy",l),history.replaceState(null,"",`${window.location.pathname}?${s.toString()}`)},[]);return b(it,q(F({},r),{onChange:i,bgColor:"white",children:Object.entries(I).map(([o,l])=>b("option",{value:l,children:cr(l)},o))}))},vr=()=>{const[e,t]=d.exports.useState(""),[r,n]=d.exports.useState(I.DATE_DESC),{data:a,isError:i,isLoading:o,isSuccess:l}=Ee(["events",{query:e,orderBy:r}],({signal:s})=>je({query:e,orderBy:r,signal:s}));return W("div",{children:[W(ke,{gap:4,mb:4,children:[b(or,{query:e,setQuery:t}),b(dr,{flexShrink:2,orderBy:r,setOrderBy:n})]}),i&&b(Z,{type:ee.SERVER_ERROR}),o&&[...Array(4)].map((s,c)=>b(Ie,{index:c},c)),l&&(a&&a.length>0?a.map(s=>b(Oe,{event:s},s.id)):b(Z,{type:ee.NO_RESULTS}))]})};export{vr as default};