(this["webpackJsonpnew-project-react"]=this["webpackJsonpnew-project-react"]||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},15:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(7),r=a.n(c),l=(a(15),a(9)),i=a(1),s=a(8),u=a.n(s);function d(e){var t=e.props,a=t.sendProps,n=t.setInput;return o.a.createElement("form",{className:"inputBlock",onSubmit:a},o.a.createElement("div",{className:"input-container"},o.a.createElement("input",{id:"inputBox",type:"text",name:"inputBlock",placeholder:"What Do you want Todo?...",onChange:n,autoComplete:"off",required:"required"}),o.a.createElement("div",{className:"input"})),o.a.createElement("button",{className:"plus",type:"submit"},o.a.createElement("span",{"aria-label":"addTodo",role:"img"},"\u2795")))}var m=function(e){var t=e.props,a=t.EachTodo,c=a.id,r=a.completed,l=a.Todo,s=t.updateTodo,u=t.removeTodo,d=Object(n.useState)(""),m=Object(i.a)(d,2),p=m[0],f=m[1];Object(n.useEffect)((function(){f(c)}),[l,c]);var v=r;return o.a.createElement("div",{className:"label","data-id":"".concat(p)},o.a.createElement("label",null,o.a.createElement("input",{type:"checkbox","data-id":"".concat(p),checked:v,onChange:function(){s(p)}}),o.a.createElement("div",{className:"Todo"},o.a.createElement("div",{className:"checkbox-container"},o.a.createElement("svg",{viewBox:"0 0 100 100",className:"checkbox"},o.a.createElement("path",{className:"st0",d:"M85,92H15c-3.9,0-7-3.1-7-7V15c0-3.9,3.1-7,7-7h70c3.9,0,7,3.1,7,7v70C92,88.9,88.9,92,85,92z"}),o.a.createElement("polyline",{className:"check",points:"22.5,47.5 42.5,67.5 78.5,31.5 "}))),o.a.createElement("span",{style:v?{opacity:.4,textDecoration:"line-through"}:null},l," ",o.a.createElement("span",{className:"cross"})))),o.a.createElement("div",{className:"close",style:{display:v?"inline-grid":"none",fontWeight:"bolder"},onClick:function(){u(p)},"data-id":p},"\u2715"))};function p(e){var t=e.props,a=t.removeTodo,n=t.updateTodo,c=t.TodoListArray,r=t.filtered;if(0===c.length)return o.a.createElement("div",{className:"listContainer"});var l=r.map((function(e,t){return o.a.createElement(m,{key:t,props:{EachTodo:e,updateTodo:n,removeTodo:a}})}));return o.a.createElement("div",{className:"listContainer"},l)}function f(e){var t=e.props,a=t.progress,n=t.TodoListArray,c=t.clearDone,r=t.done,l=t.statusHandler;return o.a.createElement("div",{className:"control"},o.a.createElement("div",{className:"box"},o.a.createElement("div",{className:"percent"},o.a.createElement("svg",null,o.a.createElement("linearGradient",{id:"grad",x1:"0",y1:"0",x2:"100%",y2:"100%"},o.a.createElement("stop",{offset:"0%",stopColor:"#ff0612"}),o.a.createElement("stop",{offset:"100%",stopColor:"#6544ff"})),o.a.createElement("circle",{cx:"50%",cy:"50%",r:"40",className:"dark circle"}),o.a.createElement("circle",{cx:"50%",cy:"50%",r:"40",className:"grad circle",style:{strokeDashoffset:250.92137145996094-250.92137145996094*a/100,strokeWidth:0===a?"0px":"10px"}})),o.a.createElement("div",{className:"number"},0!==a||0!==n.length?o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",null,a,o.a.createElement("span",{className:"perc"},"%")),o.a.createElement("span",{className:"comp"},"completed")):o.a.createElement("h2",{className:"empty"},"No Task")))),o.a.createElement("div",{className:"buttons"},o.a.createElement("button",{onClick:c,disabled:0===r,className:0===r?"disable":"clear"},"\u2715 Clear Done"),o.a.createElement("select",{name:"filter",id:"filter",onChange:l},o.a.createElement("option",{value:"All"},"All"),o.a.createElement("option",{value:"Completed"},"Completed"),o.a.createElement("option",{value:"Uncompleted"},"Uncompleted"))))}function v(){var e=Object(n.useState)({}),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),s=Object(i.a)(r,2),m=s[0],v=s[1],E=Object(n.useState)(0),h=Object(i.a)(E,2),g=h[0],b=h[1],N=Object(n.useState)(""),w=Object(i.a)(N,2),y=w[0],k=w[1],T=Object(n.useState)([]),j=Object(i.a)(T,2),O=j[0],S=j[1],C=Object(n.useState)("All"),x=Object(i.a)(C,2),A=x[0],W=x[1];return Object(n.useEffect)((function(){var e=m.filter((function(e){return!0===e.completed})),t=Math.floor(e.length/m.length*100);isNaN(t)&&(t=0),k(t),b(e.length)}),[y,m]),Object(n.useEffect)((function(){!function(){switch(A){case"Completed":S(m.filter((function(e){return!0===e.completed})));break;case"Uncompleted":S(m.filter((function(e){return!1===e.completed})));break;default:S(m)}}()}),[A,m]),Object(n.useEffect)((function(){if(null===localStorage.getItem("todoLocal"))localStorage.setItem("todoLocal",JSON.stringify([]));else var e=localStorage.getItem("todoLocal");v(JSON.parse(e))}),[]),Object(n.useEffect)((function(){localStorage.setItem("todoLocal",JSON.stringify(m))}),[m]),o.a.createElement("div",{className:"container"},o.a.createElement(f,{props:{progress:y,TodoListArray:m,clearDone:function(){v(m.filter((function(e){return!1===e.completed})))},done:g,statusHandler:function(e){var t=e.target.value;W(t)}}}),o.a.createElement(d,{props:{sendProps:function(e){e.preventDefault();var t=document.getElementById("inputBox"),n=a.Todo;if(""===n.trim()||void 0===n.trim())return t.value=null,alert("Please write a Task");a.id=u.a.v4(),a.completed=!1,v((function(e){return[].concat(Object(l.a)(e),[a])})),t.value=null,t.focus(),c({})},setInput:function(e){var t=e.target.value;c({Todo:t})}}}),o.a.createElement(p,{props:{removeTodo:function(e){v(m.filter((function(t){return t.id!==e})))},updateTodo:function(e){v(m.map((function(t){return t.id===e&&(t.completed=!t.completed),t})))},TodoListArray:m,filtered:O}}))}var E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function h(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(o.a.createElement(v,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/React-Todo-App",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/React-Todo-App","/service-worker.js");E?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):h(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):h(t,e)}))}}()}},[[10,1,2]]]);
//# sourceMappingURL=main.45345179.chunk.js.map