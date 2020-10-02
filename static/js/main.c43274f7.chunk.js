(this["webpackJsonpnew-project-react"]=this["webpackJsonpnew-project-react"]||[]).push([[0],{12:function(e,t,a){e.exports=a(20)},17:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(11),o=a.n(l),r=(a(17),a(7)),i=a(2),s=a(6),u=a.n(s);function m(e){var t=e.props,a=t.sendProps,n=t.setInput;return c.a.createElement("form",{className:"inputBlock",onSubmit:a},c.a.createElement("div",{className:"input-container"},c.a.createElement("input",{className:"inputBox",type:"text",name:"inputBlock",placeholder:"What Do you want Todo?...",onChange:n,autoComplete:"off",required:"required"}),c.a.createElement("div",{className:"input"})),c.a.createElement("button",{className:"plus",type:"submit"},c.a.createElement("span",{"aria-label":"addTodo",role:"img"},"\u2795")))}var d=a(3);var p=function(e){var t=e.props,a=t.EachTodo,n=a.id,l=a.completed,o=a.Todo,r=t.updateTodo,i=t.removeTodo,s=l;return c.a.createElement("div",{className:"label","data-id":"".concat(n)},c.a.createElement("label",null,c.a.createElement("input",{type:"checkbox","data-id":"".concat(n),checked:s,onChange:function(){r(n)}}),c.a.createElement("div",{className:"Todo"},c.a.createElement("div",{className:"checkbox-container"},c.a.createElement("svg",{viewBox:"0 0 100 100",className:"checkbox"},c.a.createElement("path",{className:"st0",d:"M85,92H15c-3.9,0-7-3.1-7-7V15c0-3.9,3.1-7,7-7h70c3.9,0,7,3.1,7,7v70C92,88.9,88.9,92,85,92z"}),c.a.createElement("polyline",{className:"check",points:"22.5,47.5 42.5,67.5 78.5,31.5 "}))),c.a.createElement("span",{style:s?{opacity:.4,textDecoration:"line-through"}:null},o," ",c.a.createElement("span",{className:"cross"})))),c.a.createElement(d.b,{className:"close",fill:"red",style:{transform:s?"scale(1)":"scale(0)",fontWeight:"bolder"},onClick:function(){i(n)},"data-id":n}))};function f(e){var t=e.props,a=t.removeTodo,n=t.updateTodo,l=t.TodoListArray,o=t.filtered.map((function(e,t){return c.a.createElement(p,{key:t,props:{EachTodo:e,updateTodo:n,removeTodo:a}})}));return c.a.createElement("div",{className:"listContainer"},0===l.length?"":o)}function v(e){var t=e.props,a=t.progress,n=t.TodoListArray,l=t.clearDone,o=t.done,r=t.statusHandler,i=t.status;return c.a.createElement("div",{className:"control"},c.a.createElement("div",{className:"box"},c.a.createElement("div",{className:"percent"},c.a.createElement("svg",null,c.a.createElement("linearGradient",{id:"grad",x1:"0",y1:"0",x2:"100%",y2:"100%"},c.a.createElement("stop",{offset:"0%",stopColor:"#ff0612"}),c.a.createElement("stop",{offset:"100%",stopColor:"#6544ff"})),c.a.createElement("circle",{cx:"50%",cy:"50%",r:"40",className:"dark circle"}),c.a.createElement("circle",{cx:"50%",cy:"50%",r:"40",className:"grad circle",style:{strokeDashoffset:250.92137145996094-250.92137145996094*a/100,strokeWidth:0===a?"0px":"10px"}})),c.a.createElement("div",{className:"number"},0!==a||0!==n.length?c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,a,c.a.createElement("span",{className:"perc"},"%")),c.a.createElement("span",{className:"comp"},"completed")):c.a.createElement("h2",{className:"empty"},"No Task")))),c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{onClick:l,disabled:0===o,className:0===o?"disable":"clear"},"\u2715 Clear Done"),c.a.createElement("select",{name:"filter",id:"filter",onChange:r,value:i},c.a.createElement("option",{value:"All"},"All"),c.a.createElement("option",{value:"Completed"},"Completed"),c.a.createElement("option",{value:"Uncompleted"},"Uncompleted"))))}var E=a(1),N=a.n(E);function b(e){var t=e.props.app,a=Object(n.useState)({}),l=Object(i.a)(a,2),o=l[0],s=l[1],d=Object(n.useState)([]),p=Object(i.a)(d,2),E=p[0],b=p[1],h=Object(n.useState)(0),g=Object(i.a)(h,2),O=g[0],k=g[1],y=Object(n.useState)(""),w=Object(i.a)(y,2),j=w[0],C=w[1],S=Object(n.useState)([]),x=Object(i.a)(S,2),L=x[0],T=x[1],A=Object(n.useState)("All"),B=Object(i.a)(A,2),I=B[0],W=B[1],D=Object(n.useState)(t.id),J=Object(i.a)(D,1)[0];function R(e){e?(N()(".checkbox path").css("transition",".4s"),N()(".check").css("transition",".4s")):(N()(".checkbox path").css("transition","none"),N()(".check").css("transition","none"))}return Object(n.useEffect)((function(){var e=E.filter((function(e){return!0===e.completed})),t=Math.floor(e.length/E.length*100);isNaN(t)&&(t=0),C(t),k(e.length)}),[j,E]),Object(n.useEffect)((function(){!function(){switch(I){case"Completed":T(E.filter((function(e){return!0===e.completed})));break;case"Uncompleted":T(E.filter((function(e){return!1===e.completed})));break;default:T(E)}}()}),[E,I]),Object(n.useEffect)((function(){R(!1)}),[I]),Object(n.useEffect)((function(){var e=localStorage.getItem(J);null===e||void 0===e?localStorage.setItem(J,JSON.stringify([])):b(JSON.parse(e))}),[J]),Object(n.useEffect)((function(){localStorage.setItem(J,JSON.stringify(E))}),[E,J]),c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"ListName"},t.name),c.a.createElement(v,{props:{progress:j,TodoListArray:E,clearDone:function(){R(!1),b(E.filter((function(e){return!1===e.completed})))},done:O,status:I,statusHandler:function(e){var t=e.target.value;W(t)}}}),c.a.createElement(m,{props:{sendProps:function(e){e.preventDefault();var t=N()(".inputBox"),a=o.Todo;if(""===a.trim()||void 0===a.trim())return t.val(null).focus(),alert("Please write a Task");o.id=u.a.v4(),o.completed=!1,b((function(e){return[].concat(Object(r.a)(e),[o])})),t.val(null).focus(),s({}),W("All")},setInput:function(e){var t=e.target.value;s({Todo:t})}}}),c.a.createElement(f,{props:{removeTodo:function(e){R(!1),b(E.filter((function(t){return t.id!==e})))},updateTodo:function(e){R(!0),b(E.map((function(t){return t.id===e&&(t.completed=!t.completed),t})))},TodoListArray:E,filtered:L}}))}var h=function(e){var t=e.props,a=t.app,l=t.setNewListName,o=t.addList,r=t.setCurrentList,s=t.setRename,u=t.updateList,m=t.deleteList,p=Object(n.useState)(!1),f=Object(i.a)(p,2),v=f[0],E=f[1],b=Object(n.useState)([]),h=Object(i.a)(b,2),g=h[0],O=h[1],k=Object(n.useState)(""),y=Object(i.a)(k,2),w=y[0],j=y[1];return Object(n.useEffect)((function(){var e=a.map((function(e,t){return c.a.createElement("li",{className:"listSet",key:t,"data-id":e.id,onClick:function(e){e.persist(),"svg"!==e.target.tagName&&"path"!==e.target.tagName&&(r(t),E(!1))}},c.a.createElement("h3",null,e.name),c.a.createElement("div",{className:"icons"},c.a.createElement(d.e,{"data-id":e.id,className:"icon edit",onClick:function(){N()(".rename").fadeIn(),N()(".renamebox").focus(),j(e.id)}}),c.a.createElement(d.d,{className:"icon deleteIcon",fill:"red","data-id":e.id,onClick:function(){N()(".delete").fadeIn(),j(e.id)}})))}));O(e)}),[a,r]),v?N()(".container").css("pointer-events","none"):N()(".container").css("pointer-events","auto"),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"ham"},c.a.createElement(d.c,{role:"img","aria-label":"plus",onClick:function(){E(!0)},className:"icon"})),c.a.createElement("div",{className:"sideBar ".concat(v?"openBar":"closeBar")},c.a.createElement("h2",null,"Your List Set",c.a.createElement(d.b,{fill:"red",className:"icon",onClick:function(){E(!1)}})),c.a.createElement("ul",null,g,c.a.createElement("li",{className:"addNew listSet",onClick:function(){N()(".newModal").fadeIn(),N()(".new").focus()}},"Add New List ",c.a.createElement(d.a,{className:"addList"})))),c.a.createElement("div",{className:"modalCont newModal",style:{display:"none"}},c.a.createElement("div",{className:"modal"},c.a.createElement(d.b,{className:"icon",style:{display:"block",marginLeft:"auto",fill:"red"},onClick:function(){N()(".newModal").fadeOut(),N()(".inputBox").val(null)}}),c.a.createElement("h3",null,"Set New Todolist Name"),c.a.createElement("div",{className:"input-container"},c.a.createElement("input",{className:"inputBox new",type:"text",name:"inputBlock",placeholder:"Name...",autoComplete:"off",required:!0,onChange:function(e){var t=e.target.value;l(t)}}),c.a.createElement("div",{className:"input"})),c.a.createElement("button",{className:"setName",onClick:function(){N()(".newModal").fadeOut(),N()(".inputBox").val(null),o(),E(!1)}},"Set Name"))),c.a.createElement("div",{className:"modalCont rename",style:{display:"none"}},c.a.createElement("div",{className:"modal"},c.a.createElement(d.b,{className:"icon",style:{display:"block",marginLeft:"auto",fill:"red"},onClick:function(){N()(".rename").fadeOut(),N()(".inputBox").val(null)}}),c.a.createElement("h3",null,"Rename Todo"),c.a.createElement("div",{className:"input-container"},c.a.createElement("input",{className:"inputBox renamebox",type:"text",name:"inputBlock",placeholder:"New Name...",autoComplete:"off",required:!0,onChange:function(e){var t=e.target.value;s(t)}}),c.a.createElement("div",{className:"input"})),c.a.createElement("button",{className:"setName",onClick:function(){N()(".rename").fadeOut(),N()(".inputBox").val(null),u(w),j("")}},"Set Name"))),c.a.createElement("div",{className:"modalCont delete",style:{display:"none"}},c.a.createElement("div",{className:"modal",style:{textAlign:"center"}},c.a.createElement(d.d,{fontSize:"3rem",fill:"red",style:{textShadow:"0px 0px 5px red"}}),c.a.createElement("h3",null,"Are you sure You want to Delete this List?"),c.a.createElement("p",null,"Entire List will be removed permanently"),c.a.createElement("button",{className:"deleteListBtn clear",onClick:function(){N()(".delete").fadeOut(),N()(".inputBox").val(null),m(w),E(!1),j("")}},"OK"),c.a.createElement("button",{className:"canceldelete",onClick:function(){N()(".delete").fadeOut(),N()(".inputBox").val(null),j("")}},"Cancel"))))};var g=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(a.length-1),s=Object(i.a)(o,2),m=s[0],p=s[1],f=Object(n.useState)(""),v=Object(i.a)(f,2),E=v[0],N=v[1],g=Object(n.useState)(""),O=Object(i.a)(g,2),k=O[0],y=O[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("AppLocal");null===e||void 0===e?localStorage.setItem("AppLocal",JSON.stringify([])):l(JSON.parse(e))}),[]),Object(n.useEffect)((function(){localStorage.setItem("AppLocal",JSON.stringify(a))}),[a]),Object(n.useEffect)((function(){p(a.length-1)}),[a.length]),c.a.createElement("div",null,c.a.createElement(h,{props:{app:a,setNewListName:N,addList:function(){var e={id:u.a.v4(),name:E};p(a.length),l((function(t){return[].concat(Object(r.a)(t),[e])}))},setCurrentList:p,setRename:y,updateList:function(e){l(a.map((function(t){return t.id===e&&(t.name=k),t}))),y("")},deleteList:function(e){localStorage.removeItem(e);var t=a.filter((function(t){return t.id!==e}));p(t.length-1),l(t)}}}),a.length<=0||m<0?c.a.createElement("div",{className:"noList"},c.a.createElement("h1",null,"No Lists"),c.a.createElement("p",null,"Click ",c.a.createElement(d.c,{className:"dir"})," to make a List")):c.a.createElement(b,{key:a[m].id,props:{app:a[m]}}))},O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(c.a.createElement(g,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/React-Todo-App",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/React-Todo-App","/service-worker.js");O?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):k(t,e)}))}}()}},[[12,1,2]]]);
//# sourceMappingURL=main.c43274f7.chunk.js.map