(this.webpackJsonpfruit_managenment_fe=this.webpackJsonpfruit_managenment_fe||[]).push([[4],{182:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n(5),r=n(191);function a(){return o.useContext(r.a)}},191:function(e,t,n){"use strict";var o=n(5),r=o.createContext();t.a=r},201:function(e,t,n){"use strict";function o(e){var t=e.props,n=e.states,o=e.muiFormControl;return n.reduce((function(e,n){return e[n]=t[n],o&&"undefined"===typeof t[n]&&(e[n]=o[n]),e}),{})}n.d(t,"a",(function(){return o}))},211:function(e,t,n){"use strict";function o(e){return null!=e&&!(Array.isArray(e)&&0===e.length)}function r(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e&&(o(e.value)&&""!==e.value||t&&o(e.defaultValue)&&""!==e.defaultValue)}function a(e){return e.startAdornment}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},215:function(e,t,n){"use strict";n.d(t,"e",(function(){return H})),n.d(t,"d",(function(){return I})),n.d(t,"b",(function(){return K})),n.d(t,"a",(function(){return P}));var o=n(19),r=n(6),a=n(14),i=n(7),l=n(71),u=n(5),c=(n(28),n(42)),d=n(157),s=n(133),p=n(132),f=n(134),m=n(109),b=n(13),h=["onChange","maxRows","minRows","style","value"];function v(e,t){return parseInt(e[t],10)||0}var j={visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},O=u.forwardRef((function(e,t){var n=e.onChange,r=e.maxRows,l=e.minRows,c=void 0===l?1:l,d=e.style,O=e.value,y=Object(a.a)(e,h),w=u.useRef(null!=O).current,g=u.useRef(null),x=Object(s.a)(t,g),S=u.useRef(null),C=u.useRef(0),R=u.useState({}),z=Object(o.a)(R,2),A=z[0],k=z[1],F=u.useCallback((function(){var t=g.current,n=Object(p.a)(t).getComputedStyle(t);if("0px"!==n.width){var o=S.current;o.style.width=n.width,o.value=t.value||e.placeholder||"x","\n"===o.value.slice(-1)&&(o.value+=" ");var a=n["box-sizing"],i=v(n,"padding-bottom")+v(n,"padding-top"),l=v(n,"border-bottom-width")+v(n,"border-top-width"),u=o.scrollHeight;o.value="x";var d=o.scrollHeight,s=u;c&&(s=Math.max(Number(c)*d,s)),r&&(s=Math.min(Number(r)*d,s));var f=(s=Math.max(s,d))+("border-box"===a?i+l:0),m=Math.abs(s-u)<=1;k((function(e){return C.current<20&&(f>0&&Math.abs((e.outerHeightStyle||0)-f)>1||e.overflow!==m)?(C.current+=1,{overflow:m,outerHeightStyle:f}):e}))}}),[r,c,e.placeholder]);u.useEffect((function(){var e,t=Object(f.a)((function(){C.current=0,F()})),n=Object(p.a)(g.current);return n.addEventListener("resize",t),"undefined"!==typeof ResizeObserver&&(e=new ResizeObserver(t)).observe(g.current),function(){t.clear(),n.removeEventListener("resize",t),e&&e.disconnect()}}),[F]),Object(m.a)((function(){F()})),u.useEffect((function(){C.current=0}),[O]);return Object(b.jsxs)(u.Fragment,{children:[Object(b.jsx)("textarea",Object(i.a)({value:O,onChange:function(e){C.current=0,w||F(),n&&n(e)},ref:x,rows:c,style:Object(i.a)({height:A.outerHeightStyle,overflow:A.overflow?"hidden":null},d)},y)),Object(b.jsx)("textarea",{"aria-hidden":!0,className:e.className,readOnly:!0,ref:S,tabIndex:-1,style:Object(i.a)({},j,d,{padding:0})})]})})),y=n(192),w=n(201),g=n(191),x=n(182),S=n(38),C=n(43),R=n(61),z=n(54),A=n(169),k=n(242),F=n(56);var E=function(e){return Object(b.jsx)(k.a,Object(i.a)({},e,{defaultTheme:F.a}))},L=n(211),M=n(131),B=n(154);function N(e){return Object(M.a)("MuiInputBase",e)}var W=Object(B.a)("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]),T=["aria-describedby","autoComplete","autoFocus","className","color","components","componentsProps","defaultValue","disabled","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","maxRows","minRows","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","size","startAdornment","type","value"],H=function(e,t){var n=e.ownerState;return[t.root,n.formControl&&t.formControl,n.startAdornment&&t.adornedStart,n.endAdornment&&t.adornedEnd,n.error&&t.error,"small"===n.size&&t.sizeSmall,n.multiline&&t.multiline,n.color&&t["color".concat(Object(R.a)(n.color))],n.fullWidth&&t.fullWidth,n.hiddenLabel&&t.hiddenLabel]},I=function(e,t){var n=e.ownerState;return[t.input,"small"===n.size&&t.inputSizeSmall,n.multiline&&t.inputMultiline,"search"===n.type&&t.inputTypeSearch,n.startAdornment&&t.inputAdornedStart,n.endAdornment&&t.inputAdornedEnd,n.hiddenLabel&&t.inputHiddenLabel]},K=Object(S.a)("div",{name:"MuiInputBase",slot:"Root",overridesResolver:H})((function(e){var t=e.theme,n=e.ownerState;return Object(i.a)({},t.typography.body1,Object(r.a)({color:t.palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center"},"&.".concat(W.disabled),{color:t.palette.text.disabled,cursor:"default"}),n.multiline&&Object(i.a)({padding:"4px 0 5px"},"small"===n.size&&{paddingTop:1}),n.fullWidth&&{width:"100%"})})),P=Object(S.a)("input",{name:"MuiInputBase",slot:"Input",overridesResolver:I})((function(e){var t,n=e.theme,o=e.ownerState,a="light"===n.palette.mode,l={color:"currentColor",opacity:a?.42:.5,transition:n.transitions.create("opacity",{duration:n.transitions.duration.shorter})},u={opacity:"0 !important"},c={opacity:a?.42:.5};return Object(i.a)((t={font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":l,"&::-moz-placeholder":l,"&:-ms-input-placeholder":l,"&::-ms-input-placeholder":l,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"}},Object(r.a)(t,"label[data-shrink=false] + .".concat(W.formControl," &"),{"&::-webkit-input-placeholder":u,"&::-moz-placeholder":u,"&:-ms-input-placeholder":u,"&::-ms-input-placeholder":u,"&:focus::-webkit-input-placeholder":c,"&:focus::-moz-placeholder":c,"&:focus:-ms-input-placeholder":c,"&:focus::-ms-input-placeholder":c}),Object(r.a)(t,"&.".concat(W.disabled),{opacity:1,WebkitTextFillColor:n.palette.text.disabled}),Object(r.a)(t,"&:-webkit-autofill",{animationDuration:"5000s",animationName:"mui-auto-fill"}),t),"small"===o.size&&{paddingTop:1},o.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},"search"===o.type&&{MozAppearance:"textfield"})})),D=Object(b.jsx)(E,{styles:{"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}}),V=u.forwardRef((function(e,t){var n=Object(C.a)({props:e,name:"MuiInputBase"}),r=n["aria-describedby"],s=n.autoComplete,p=n.autoFocus,f=n.className,m=n.components,h=void 0===m?{}:m,v=n.componentsProps,j=void 0===v?{}:v,S=n.defaultValue,k=n.disabled,F=n.endAdornment,E=n.fullWidth,M=void 0!==E&&E,B=n.id,W=n.inputComponent,H=void 0===W?"input":W,I=n.inputProps,V=void 0===I?{}:I,_=n.inputRef,q=n.maxRows,U=n.minRows,J=n.multiline,Z=void 0!==J&&J,G=n.name,Q=n.onBlur,X=n.onChange,Y=n.onClick,$=n.onFocus,ee=n.onKeyDown,te=n.onKeyUp,ne=n.placeholder,oe=n.readOnly,re=n.renderSuffix,ae=n.rows,ie=n.startAdornment,le=n.type,ue=void 0===le?"text":le,ce=n.value,de=Object(a.a)(n,T),se=null!=V.value?V.value:ce,pe=u.useRef(null!=se).current,fe=u.useRef(),me=u.useCallback((function(e){0}),[]),be=Object(z.a)(V.ref,me),he=Object(z.a)(_,be),ve=Object(z.a)(fe,he),je=u.useState(!1),Oe=Object(o.a)(je,2),ye=Oe[0],we=Oe[1],ge=Object(x.a)();var xe=Object(w.a)({props:n,muiFormControl:ge,states:["color","disabled","error","hiddenLabel","size","required","filled"]});xe.focused=ge?ge.focused:ye,u.useEffect((function(){!ge&&k&&ye&&(we(!1),Q&&Q())}),[ge,k,ye,Q]);var Se=ge&&ge.onFilled,Ce=ge&&ge.onEmpty,Re=u.useCallback((function(e){Object(L.b)(e)?Se&&Se():Ce&&Ce()}),[Se,Ce]);Object(A.a)((function(){pe&&Re({value:se})}),[se,Re,pe]);u.useEffect((function(){Re(fe.current)}),[]);var ze=H,Ae=V;Z&&"input"===ze&&(Ae=ae?Object(i.a)({type:void 0,minRows:ae,maxRows:ae},Ae):Object(i.a)({type:void 0,maxRows:q,minRows:U},Ae),ze=O);u.useEffect((function(){ge&&ge.setAdornedStart(Boolean(ie))}),[ge,ie]);var ke=Object(i.a)({},n,{color:xe.color||"primary",disabled:xe.disabled,endAdornment:F,error:xe.error,focused:xe.focused,formControl:ge,fullWidth:M,hiddenLabel:xe.hiddenLabel,multiline:Z,size:xe.size,startAdornment:ie,type:ue}),Fe=function(e){var t=e.classes,n=e.color,o=e.disabled,r=e.error,a=e.endAdornment,i=e.focused,l=e.formControl,u=e.fullWidth,c=e.hiddenLabel,s=e.multiline,p=e.size,f=e.startAdornment,m=e.type,b={root:["root","color".concat(Object(R.a)(n)),o&&"disabled",r&&"error",u&&"fullWidth",i&&"focused",l&&"formControl","small"===p&&"sizeSmall",s&&"multiline",f&&"adornedStart",a&&"adornedEnd",c&&"hiddenLabel"],input:["input",o&&"disabled","search"===m&&"inputTypeSearch",s&&"inputMultiline","small"===p&&"inputSizeSmall",c&&"inputHiddenLabel",f&&"inputAdornedStart",a&&"inputAdornedEnd"]};return Object(d.a)(b,N,t)}(ke),Ee=h.Root||K,Le=j.root||{},Me=h.Input||P;return Ae=Object(i.a)({},Ae,j.input),Object(b.jsxs)(u.Fragment,{children:[D,Object(b.jsxs)(Ee,Object(i.a)({},Le,!Object(y.a)(Ee)&&{ownerState:Object(i.a)({},ke,Le.ownerState)},{ref:t,onClick:function(e){fe.current&&e.currentTarget===e.target&&fe.current.focus(),Y&&Y(e)}},de,{className:Object(c.a)(Fe.root,Le.className,f),children:[ie,Object(b.jsx)(g.a.Provider,{value:null,children:Object(b.jsx)(Me,Object(i.a)({ownerState:ke,"aria-invalid":xe.error,"aria-describedby":r,autoComplete:s,autoFocus:p,defaultValue:S,disabled:xe.disabled,id:B,onAnimationStart:function(e){Re("mui-auto-fill-cancel"===e.animationName?fe.current:{value:"x"})},name:G,placeholder:ne,readOnly:oe,required:xe.required,rows:ae,value:se,onKeyDown:ee,onKeyUp:te,type:ue},Ae,!Object(y.a)(Me)&&{as:ze,ownerState:Object(i.a)({},ke,Ae.ownerState)},{ref:ve,className:Object(c.a)(Fe.input,Ae.className),onBlur:function(e){Q&&Q(e),V.onBlur&&V.onBlur(e),ge&&ge.onBlur?ge.onBlur(e):we(!1)},onChange:function(e){if(!pe){var t=e.target||fe.current;if(null==t)throw new Error(Object(l.a)(1));Re({value:t.value})}for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];V.onChange&&V.onChange.apply(V,[e].concat(o)),X&&X.apply(void 0,[e].concat(o))},onFocus:function(e){xe.disabled?e.stopPropagation():($&&$(e),V.onFocus&&V.onFocus(e),ge&&ge.onFocus?ge.onFocus(e):we(!0))}}))}),F,re?re(Object(i.a)({},xe,{startAdornment:ie})):null]}))]})}));t.c=V},242:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(5),n(28);var o=n(62),r=n(13);function a(e){var t=e.styles,n=e.defaultTheme,a=void 0===n?{}:n,i="function"===typeof t?function(e){return t(void 0===(n=e)||null===n||0===Object.keys(n).length?a:e);var n}:t;return Object(r.jsx)(o.a,{styles:i})}}}]);
//# sourceMappingURL=4.b9c75431.chunk.js.map