import{r as d}from"./index.DhYZZe0J.js";var c={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h=d,m=Symbol.for("react.element"),p=Symbol.for("react.fragment"),f=Object.prototype.hasOwnProperty,u=h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function x(s,t,o){var r,i={},a=null,l=null;o!==void 0&&(a=""+o),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)f.call(t,r)&&!v.hasOwnProperty(r)&&(i[r]=t[r]);if(s&&s.defaultProps)for(r in t=s.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:m,type:s,key:a,ref:l,props:i,_owner:u.current}}n.Fragment=p;n.jsx=x;n.jsxs=x;c.exports=n;var e=c.exports;function w(){const[s,t]=d.useState(!1),o=()=>{t(!s)};return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:o,className:"items-center",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"30",height:"30",viewBox:"0 0 50 50",children:e.jsx("path",{d:"M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"})})}),e.jsx("div",{id:"sidebar",className:`bg-white fixed right-0 top-0 h-screen w-3/4 items-start justify-start shadow-md shadow-black z-50 ${s?"translate-x-0":"translate-x-full"}`,children:e.jsx("nav",{className:" font-mono p-2 m-0",children:e.jsxs("ul",{className:"text-start text-3xl m-0 p-5",children:[e.jsx("li",{children:e.jsxs("button",{id:"toggle-sidebar",className:"transition ease-in-out delay-75 hover:scale-105 hover:text-red-500",type:"button",onClick:o,children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:"30",viewBox:"0 -960 960 960",width:"30",children:e.jsx("path",{d:"m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"})})," "]})}),e.jsx("li",{className:"transition ease-in-out delay-75 hover:text-red-500 hover:scale-105",children:e.jsx("a",{href:"/",children:"About Me"})}),e.jsx("li",{className:"transition ease-in-out delay-75 hover:text-red-500 hover:scale-105",children:e.jsx("a",{href:"/portforlio/",children:"Portfolio"})}),e.jsx("li",{className:"transition ease-in-out delay-75 hover:text-red-500 hover:scale-105",children:e.jsx("a",{href:"mailto:wizktec@gmail.com",children:"Contact"})})]})})})]})}export{w as default};
