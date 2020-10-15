(this["webpackJsonpnew-project-react"]=this["webpackJsonpnew-project-react"]||[]).push([[0],{16:function(e,t,a){e.exports=a(27)},21:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(14),r=a.n(c),o=(a(21),a(10)),s=a(4),m=a(9),i=a.n(m),u=a(3);function d(e){var t=e.props,a=t.sendProps,n=t.setInput;return l.a.createElement("form",{className:"inputBlock",onSubmit:a},l.a.createElement("div",{className:"input-container"},l.a.createElement("input",{type:"text",className:"Input",name:"inputBlock",onChange:n,autoComplete:"off",required:"required"}),l.a.createElement("svg",{className:"border","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 275.05 40",preserveAspectRatio:"none"},l.a.createElement("path",{className:"cls-1 path",d:"M139,39H268.22c4,0,7.3-2.78,7.3-6.21V8.21c0-3.43-3.27-6.21-7.3-6.21H139",transform:"translate(-1.3 -0.77)"}),l.a.createElement("path",{className:"cls-2 path",d:"M164,2H11.24C6.43,2,2.52,4.78,2.52,8.21V32.79c0,3.43,3.91,6.21,8.72,6.21H160.32v0H164",transform:"translate(-1.3 -0.77)"})),l.a.createElement("span",null,"What Do you want Todo?...")),l.a.createElement("button",{className:"plus",type:"submit"},l.a.createElement(u.a,{fill:"#222",className:"icon",size:"1.2rem"})))}var p=function(e){var t=e.props,a=t.EachTodo,n=a.id,c=a.completed,r=a.Todo,o=t.updateTodo,s=t.removeTodo;return l.a.createElement("div",{className:"label","data-id":"".concat(n)},l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox","data-id":"".concat(n),checked:c,onChange:function(){o(n)}}),l.a.createElement("div",{className:"Todo"},l.a.createElement("div",{className:"checkbox-container"},l.a.createElement("svg",{viewBox:"0 0 100 100",className:"checkbox"},l.a.createElement("path",{className:"st0",d:"M85,92H15c-3.9,0-7-3.1-7-7V15c0-3.9,3.1-7,7-7h70c3.9,0,7,3.1,7,7v70C92,88.9,88.9,92,85,92z"}),l.a.createElement("polyline",{className:"check",points:"22.5,47.5 42.5,67.5 78.5,31.5 "}))),l.a.createElement("span",{style:c?{opacity:.4,textDecoration:"line-through"}:null},r," ",l.a.createElement("span",{className:"cross"})))),l.a.createElement(u.e,{className:"deleteIcon icon",size:"1.5rem",style:{transform:c?"scale(1)":"scale(0)"},onClick:function(){s(n)},"data-id":n}))};function f(e){var t=e.props,a=t.removeTodo,n=t.updateTodo,c=t.TodoListArray,r=t.filtered,o=(t.mode,t.whichMode),s=r.map((function(e,t){return l.a.createElement(p,{key:t,props:{EachTodo:e,updateTodo:n,removeTodo:a}})}));return l.a.createElement("div",{className:"listContainer ".concat(o?"darkMode":"LightMode")},0===c.length?"":s)}function E(e){var t=e.props,a=t.progress,n=t.TodoListArray,c=t.clearDone,r=t.done,o=t.statusHandler,s=t.status,m=(t.mode,t.whichMode);return l.a.createElement("div",{className:"control"},l.a.createElement("div",{className:"box"},l.a.createElement("div",{className:"percent"},l.a.createElement("svg",null,l.a.createElement("linearGradient",{id:"grad",x1:"0",y1:"0",x2:"100%",y2:"100%"},l.a.createElement("stop",{offset:"0%",stopColor:"#ff0612"}),l.a.createElement("stop",{offset:"100%",stopColor:"#6544ff"})),l.a.createElement("circle",{cx:"50%",cy:"50%",r:"40",className:"dark circle"}),l.a.createElement("circle",{cx:"50%",cy:"50%",r:"40",className:"grad circle",style:{strokeDashoffset:250.92137145996094-250.92137145996094*a/100,strokeWidth:0===a?"0px":"10px"}})),l.a.createElement("div",{className:"number ".concat(m?"darkMode":"LightMode")},0!==a||0!==n.length?l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,a,l.a.createElement("span",{className:"perc"},"%")),l.a.createElement("span",{className:"comp"},"completed")):l.a.createElement("h2",{className:"empty"},"No Task")))),l.a.createElement("div",{className:"buttons"},l.a.createElement("button",{onClick:c,disabled:0===r,className:0===r?"disable":"clear"},"\u2715 Clear Done"),l.a.createElement("select",{name:"filter",id:"filter",onChange:o,value:s},l.a.createElement("option",{value:"All"},"All"),l.a.createElement("option",{value:"Completed"},"Completed"),l.a.createElement("option",{value:"Uncompleted"},"Uncompleted"))))}var h=a(2),v=a.n(h);function b(e){var t=e.props,a=t.app,c=t.whichMode,r=Object(n.useState)(a.id),m=Object(s.a)(r,1)[0],u=Object(n.useState)({}),p=Object(s.a)(u,2),h=p[0],b=p[1],N=Object(n.useState)((function(){var e=localStorage.getItem(m);return null===e||void 0===e?[]:JSON.parse(e)})),g=Object(s.a)(N,2),w=g[0],C=g[1],k=Object(n.useState)(0),y=Object(s.a)(k,2),O=y[0],S=y[1],M=Object(n.useState)(""),L=Object(s.a)(M,2),j=L[0],x=L[1],I=Object(n.useState)([]),A=Object(s.a)(I,2),B=A[0],T=A[1],H=Object(n.useState)("All"),D=Object(s.a)(H,2),R=D[0],W=D[1];function V(e){e?(v()(".checkbox path").css("transition",".4s"),v()(".check").css("transition",".4s")):(v()(".checkbox path").css("transition","none"),v()(".check").css("transition","none"))}return Object(n.useEffect)((function(){localStorage.setItem(m,JSON.stringify(w))}),[w,m]),Object(n.useEffect)((function(){var e=w.filter((function(e){return!0===e.completed})),t=Math.floor(e.length/w.length*100);isNaN(t)&&(t=0),x(t),S(e.length)}),[j,w]),Object(n.useEffect)((function(){!function(){switch(R){case"Completed":T(w.filter((function(e){return!0===e.completed})));break;case"Uncompleted":T(w.filter((function(e){return!1===e.completed})));break;default:T(w)}}()}),[w,R]),Object(n.useEffect)((function(){V(!1)}),[R]),l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"ListName"},a.name),l.a.createElement(E,{props:{progress:j,TodoListArray:w,clearDone:function(){V(!1),C(w.filter((function(e){return!1===e.completed})))},done:O,status:R,statusHandler:function(e){var t=e.target.value;W(t)},whichMode:c}}),l.a.createElement(d,{props:{sendProps:function(e){e.preventDefault();var t=v()(".Input"),a=h.Todo;if(""===a.trim()||void 0===a.trim())return t.val(null).focus(),alert("Please write a Task");h.id=i.a.v4(),h.completed=!1,C((function(e){return[].concat(Object(o.a)(e),[h])})),t.val(null).focus(),b({}),W("All")},setInput:function(e){var t=e.target.value;b({Todo:t})},whichMode:c}}),l.a.createElement(f,{props:{removeTodo:function(e){V(!1),C(w.filter((function(t){return t.id!==e})))},updateTodo:function(e){V(!0),C(w.map((function(t){return t.id===e&&(t.completed=!t.completed),t})))},TodoListArray:w,filtered:B,whichMode:c}}))}var N=a(5),g=a(7),w=a(0);var C=function(e){var t,a=e.props,c=a.app,r=a.setNewListName,o=a.addList,m=a.setCurrentList,i=a.setRename,d=a.updateList,p=a.deleteList,f=a.currentList,E=a.clearList,h=a.changeMode,b=a.whichMode,C=a.sendForm,k=a.formStatus,y=a.setFormStatus,O=Object(n.useState)(!1),S=Object(s.a)(O,2),M=S[0],L=S[1],j=Object(n.useState)([]),x=Object(s.a)(j,2),I=x[0],A=x[1],B=Object(n.useState)(""),T=Object(s.a)(B,2),H=T[0],D=T[1],R=Object(n.useState)(!0),W=Object(s.a)(R,2),V=W[0],F=W[1],U=Object(n.useState)(!1),z=Object(s.a)(U,2),P=z[0],q=z[1];function J(e){""===e.val().trim()?e.addClass("err"):e.removeClass("err")}switch(Object(n.useEffect)((function(){var e=c.map((function(e,t){return l.a.createElement(w.b.Provider,{value:{size:"1.5rem",className:"ListSetIcon ".concat(b?"":"light")},key:t},l.a.createElement("li",{className:"listSet ".concat(b?"dark":"light"),"data-id":e.id,onClick:function(a){a.persist(),"svg"!==a.target.tagName&&"path"!==a.target.tagName&&(m(t),L(!1),v()(".listSet").removeClass("active"),v()('.listSet[data-id="'.concat(e.id,'"]')).addClass("active"))}},l.a.createElement(u.i,{className:"icon"}),l.a.createElement("h3",null,e.name),l.a.createElement(u.g,{"data-id":e.id,className:"icon edit",onClick:function(){v()(".rename").fadeIn(),v()(".renamebox").val(e.name).select(),D(e.id)}}),l.a.createElement(u.e,{className:"icon deleteIcon","data-id":e.id,onClick:function(){v()(".delete").fadeIn(),D(e.id)}})))}));A(e)}),[c,m,b]),v()(".listSet").removeClass("active"),v()(".listSet:eq(".concat(f,")")).addClass("active"),b?v()(".modal").removeClass("light"):v()(".modal").addClass("light"),M?v()(".sideBarUnderLay").fadeIn().click((function(){L(!1)})):v()(".sideBarUnderLay").fadeOut(),v()(".contactModal .Input.email").blur((function(e){/@/.test(e.target.value.trim())?v()(this).removeClass("err"):v()(this).addClass("err")})),v()(".contactModal .Input:not('.email')").blur((function(){J(v()(this))})),v()(".contactModal .Input.err").keyup((function(){J(v()(this))})),k){case"sending":t=l.a.createElement("button",{className:"modalBtn sendBtn sending",type:"submit"},l.a.createElement(N.c,{className:"loading"}),l.a.createElement("span",null,"Sending"));break;case"sent":t=l.a.createElement("button",{className:"modalBtn sendBtn sent",type:"submit"},l.a.createElement(u.b,null),l.a.createElement("span",null,"Sent"));break;case"error":t=l.a.createElement("button",{className:"modalBtn sendBtn error",type:"submit"},l.a.createElement(u.h,null),l.a.createElement("span",null,"Error Occured!"));break;default:t=l.a.createElement("button",{className:"modalBtn sendBtn send",type:"submit"},l.a.createElement(u.j,null),l.a.createElement("span",null,"Send"))}return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"ham"},l.a.createElement(u.d,{size:"1.5rem",className:"icon",onClick:function(){L(!0)}})),l.a.createElement("div",{className:"sideBarUnderLay"}),l.a.createElement("div",{className:"sideBar ".concat(M?"openBar":""," ").concat(b?"":"lightMode")},l.a.createElement("h2",null,"Your List Set",l.a.createElement(u.c,{size:"1.5rem",className:"icon",onClick:function(){L(!1)}})),l.a.createElement("ul",null,I,l.a.createElement("hr",null),l.a.createElement(w.b.Provider,{value:{size:"1.5rem"}},l.a.createElement("li",{className:"subList",onClick:function(){v()(".newModal").fadeIn(),v()(".new")}},l.a.createElement(u.a,null),l.a.createElement("h3",null,"Add New List")),l.a.createElement("li",{className:"subList",onClick:function(){v()(".clearListModal").fadeIn()}},l.a.createElement(u.f,null),l.a.createElement("h3",null,"Clear All Lists")),l.a.createElement("li",{className:"subList",onClick:function(){L(!1),h(),F(!V)}},b?l.a.createElement(N.f,{fill:"white"}):l.a.createElement(N.d,{stroke:"transparent"}),l.a.createElement("h3",null,"Turn on ",b?"Light":"Dark"," Mode")),l.a.createElement("hr",null),l.a.createElement("li",{className:"subList",onClick:function(){v()(".contactModal").fadeIn()}},l.a.createElement(N.e,{style:{strokeWidth:1},fill:"".concat(b?"white":"#333")}),l.a.createElement("h3",null,"Contact Me")),l.a.createElement("li",{className:"subList",onClick:function(){v()(".donateModal").fadeIn()}},l.a.createElement(N.b,{style:{strokeWidth:1},fill:"".concat(b?"white":"#333")}),l.a.createElement("h3",null,"Donate"))),l.a.createElement("hr",null))),l.a.createElement("div",{className:"modalCont newModal"},l.a.createElement("form",{className:"modal",onSubmit:function(e){e.preventDefault(),v()(".newModal").fadeOut(),v()(".Input").val(null),o(),L(!1)}},l.a.createElement("h3",null,"list Name"),l.a.createElement("div",{className:"input-container"},l.a.createElement("input",{type:"text",className:"Input",name:"inputBlock",onChange:function(e){var t=e.target.value;r(t)},autoComplete:"off",required:!0}),l.a.createElement("svg",{className:"border",viewBox:"0 0 275.05 40",preserveAspectRatio:"none"},l.a.createElement("path",{className:"cls-1 path",d:"M139,39H268.22c4,0,7.3-2.78,7.3-6.21V8.21c0-3.43-3.27-6.21-7.3-6.21H139",transform:"translate(-1.3 -0.77)"}),l.a.createElement("path",{className:"cls-2 path",d:"M164,2H11.24C6.43,2,2.52,4.78,2.52,8.21V32.79c0,3.43,3.91,6.21,8.72,6.21H160.32v0H164",transform:"translate(-1.3 -0.77)"})),l.a.createElement("span",null,"List Name...")),l.a.createElement("button",{className:"modalBtn save",type:"submit"},l.a.createElement(u.b,null),l.a.createElement("span",null,"Save")),l.a.createElement("button",{className:"modalBtn",type:"button",onClick:function(){v()(".newModal").fadeOut(),v()(".Input").val(null)}},l.a.createElement(u.c,null),l.a.createElement("span",null,"Cancel")))),l.a.createElement("div",{className:"modalCont rename"},l.a.createElement("form",{className:"modal",onSubmit:function(e){e.preventDefault(),v()(".rename").fadeOut(),v()(".Input").val(null),d(H),D("")}},l.a.createElement("h3",null,"Rename Todo"),l.a.createElement("div",{className:"input-container"},l.a.createElement("input",{type:"text",className:"Input renamebox",name:"inputBlock",onChange:function(e){var t=e.target.value;i(t)},autoComplete:"off",required:!0}),l.a.createElement("svg",{className:"border",viewBox:"0 0 275.05 40",preserveAspectRatio:"none"},l.a.createElement("path",{className:"cls-1 path",d:"M139,39H268.22c4,0,7.3-2.78,7.3-6.21V8.21c0-3.43-3.27-6.21-7.3-6.21H139",transform:"translate(-1.3 -0.77)"}),l.a.createElement("path",{className:"cls-2 path",d:"M164,2H11.24C6.43,2,2.52,4.78,2.52,8.21V32.79c0,3.43,3.91,6.21,8.72,6.21H160.32v0H164",transform:"translate(-1.3 -0.77)"}))),l.a.createElement("button",{className:"modalBtn save",type:"submit"},l.a.createElement(u.b,null),l.a.createElement("span",null,"Save")),l.a.createElement("button",{className:"modalBtn",type:"button",onClick:function(){v()(".rename").fadeOut(),v()(".Input").val(null)}},l.a.createElement(u.c,null),l.a.createElement("span",null,"Cancel")))),l.a.createElement("div",{className:"modalCont delete"},l.a.createElement("div",{className:"modal",style:{textAlign:"center"}},l.a.createElement(u.e,{fontSize:"3rem",className:"bin",style:{textShadow:"0px 0px 5px red"}}),l.a.createElement("h3",null,"Are you sure You want to Delete this List?"),l.a.createElement("p",null,"Entire List will be removed permanently"),l.a.createElement("button",{className:"modalBtn",type:"button",onClick:function(){v()(".delete").fadeOut()}},l.a.createElement(u.c,null),l.a.createElement("span",null,"Cancel")),l.a.createElement("button",{className:"modalBtn del",type:"submit",onClick:function(){v()(".delete").fadeOut(),p(H),L(!1)}},l.a.createElement(u.b,null),l.a.createElement("span",null,"OK")))),l.a.createElement("div",{className:"modalCont clearListModal"},l.a.createElement("div",{className:"modal",style:{textAlign:"center"}},l.a.createElement(u.f,{fontSize:"3rem",className:"icon bin",style:{textShadow:"0px 0px 5px red"}}),l.a.createElement("h3",null,"Are you sure You want to Clear All Your Lists?"),l.a.createElement("p",null,"All Lists will be removed permanently and Cannot be recovered!"),l.a.createElement("button",{className:"modalBtn",onClick:function(){v()(".clearListModal").fadeOut()}},l.a.createElement(u.c,null),l.a.createElement("span",null,"Cancel")),l.a.createElement("button",{className:"modalBtn del",onClick:function(){v()(".clearListModal").fadeOut(),E(H)}},l.a.createElement(u.f,null),l.a.createElement("span",null," Clear all Lists")))),l.a.createElement("div",{className:"modalCont contactModal",style:{display:"none",userSelect:"text"}},l.a.createElement("div",{className:"modal"},l.a.createElement(u.c,{className:"icon closeModal",size:"1.5rem",onClick:function(){v()(".contactModal .Input").val(null),v()(".contactModal").fadeOut(),v()(".contactModal .Input").removeClass("err"),y("send")}}),l.a.createElement("form",{className:"contact",onSubmit:function(e){e.preventDefault(),C(e),y("sending")}},l.a.createElement("h3",null,"Contact Me"),l.a.createElement("div",{className:"input-container"},l.a.createElement("input",{type:"text",className:"Input",name:"from_name",autoComplete:"off",required:!0}),l.a.createElement("svg",{className:"border",viewBox:"0 0 275.05 40",preserveAspectRatio:"none"},l.a.createElement("path",{className:"cls-1 path",d:"M139,39H268.22c4,0,7.3-2.78,7.3-6.21V8.21c0-3.43-3.27-6.21-7.3-6.21H139",transform:"translate(-1.3 -0.77)"}),l.a.createElement("path",{className:"cls-2 path",d:"M164,2H11.24C6.43,2,2.52,4.78,2.52,8.21V32.79c0,3.43,3.91,6.21,8.72,6.21H160.32v0H164",transform:"translate(-1.3 -0.77)"})),l.a.createElement("span",null,"Full Name")),l.a.createElement("div",{className:"input-container"},l.a.createElement("input",{type:"email",className:"Input email",name:"from_email",autoComplete:"off",required:!0}),l.a.createElement("svg",{className:"border",viewBox:"0 0 275.05 40",preserveAspectRatio:"none"},l.a.createElement("path",{className:"cls-1 path",d:"M139,39H268.22c4,0,7.3-2.78,7.3-6.21V8.21c0-3.43-3.27-6.21-7.3-6.21H139",transform:"translate(-1.3 -0.77)"}),l.a.createElement("path",{className:"cls-2 path",d:"M164,2H11.24C6.43,2,2.52,4.78,2.52,8.21V32.79c0,3.43,3.91,6.21,8.72,6.21H160.32v0H164",transform:"translate(-1.3 -0.77)"})),l.a.createElement("span",null,"email")),l.a.createElement("div",{className:"input-container message"},l.a.createElement("textarea",{className:"Input",name:"message",required:!0}),l.a.createElement("svg",{className:"border textarea",viewBox:"0 0 309 277",preserveAspectRatio:"none"},l.a.createElement("path",{className:"cls-1 path",d:"M154.5,1.5h138a15,15,0,0,1,15,15v244a15,15,0,0,1-15,15h-138"}),l.a.createElement("path",{className:"cls-2 path",d:"M154.5,275.5H16.5a15,15,0,0,1-15-15V16.5a15,15,0,0,1,15-15h138"})),l.a.createElement("span",null,"Message")),t),l.a.createElement("div",{className:"social"},l.a.createElement("a",{href:"https://www.facebook.com/crimson.oluwatowo/",className:"facebook"},l.a.createElement(g.a,null)),l.a.createElement("a",{href:"https://www.instagram.com/crimson_corp/",className:"instagram"},l.a.createElement(g.c,null)),l.a.createElement("a",{href:"m.me/oluwatowo_rosanwo",className:"messenger"},l.a.createElement(g.b,null)),l.a.createElement("a",{href:"https://api.whatsapp.com/send?phone=+2348024537884&text=Hi20%Crimson%20%",className:"whatsapp"},l.a.createElement(g.d,null))))),l.a.createElement("div",{className:"modalCont donateModal",style:{display:"none",userSelect:"text"}},l.a.createElement("div",{className:"modal"},l.a.createElement(u.c,{className:"icon closeModal",size:"1.5rem",onClick:function(){v()(".donateModal").fadeOut(),q(!1)}}),l.a.createElement("h3",null,"Donate"),l.a.createElement("div",{className:"info-block"},l.a.createElement("h4",null,"- About Me"),l.a.createElement("p",null,"My Name is Oluwatowo Rosanwo Mayowa, I'm a 200L Student of The University Of Ibadan studying Food Technology, I started Web Development in 2018 and Now I'm an Intermediate Web Developer and Aspiring UI/UX Deisgner, Im also a Logo/Video Editor.")),l.a.createElement("div",{className:"info-block"},l.a.createElement("h4",null,"- Donate"),l.a.createElement("p",null,"Please if You really Like my Work and have a some money to spare, Kindly make a Donation To me as This will enhance my Progress and Productivity and also make me work harder and Develop more Apps that you will Definately find usefull")),l.a.createElement("h4",null,"Account Details:"),l.a.createElement("pre",null,"Bank: First Bank ",l.a.createElement("br",null),"Account Number: ",l.a.createElement("span",{id:"acc"},"3123872415")," ",l.a.createElement("br",null),"Account Name: Oluwatowo Rosanwo ",l.a.createElement("br",null)),l.a.createElement("button",{className:"copy modalBtn sendBtn ".concat(P?"sent":"send"),onClick:function(){var e=v()("<input>");v()(".donateModal .modal").append(e),e.val(v()("#acc").text()).select(),document.execCommand("copy"),e.remove(),q(!0),setTimeout((function(){alert("Account Number Copied, Thank You So Much!")}),1e3)}},P?l.a.createElement(l.a.Fragment,null,l.a.createElement(u.b,null),l.a.createElement("span",null,"Copied")):l.a.createElement(l.a.Fragment,null,l.a.createElement(N.a,null),l.a.createElement("span",null,"Copy Account Number"))))))},k=(a(24),a(15)),y=a.n(k);var O=function(){var e,t=Object(n.useState)((function(){var e=localStorage.getItem("AppLocal");return null===e||void 0===e?[]:JSON.parse(e)})),a=Object(s.a)(t,2),c=a[0],r=a[1],m=Object(n.useState)((function(){var e=localStorage.getItem("Index");return null===e||void 0===e?0:Number.parseInt(e)})),d=Object(s.a)(m,2),p=d[0],f=d[1],E=Object(n.useState)(""),h=Object(s.a)(E,2),v=h[0],N=h[1],g=Object(n.useState)(""),w=Object(s.a)(g,2),k=w[0],O=w[1],S=Object(n.useState)((function(){var e=localStorage.getItem("mode");return void 0===e||null===e||JSON.parse(e.toLowerCase())})),M=Object(s.a)(S,2),L=M[0],j=M[1],x=Object(n.useState)("send"),I=Object(s.a)(x,2),A=I[0],B=I[1];return Object(n.useEffect)((function(){localStorage.setItem("AppLocal",JSON.stringify(c))}),[c]),Object(n.useEffect)((function(){localStorage.setItem("Index",JSON.stringify(p))}),[p]),Object(n.useEffect)((function(){localStorage.setItem("mode",L)}),[L]),e=c.length<=0?l.a.createElement("div",{className:"noList"},l.a.createElement("div",null,l.a.createElement("h1",null,"No Lists"),l.a.createElement("p",null,"Click ",l.a.createElement(u.d,{className:"dir"})," to make a List"))):l.a.createElement(b,{key:c[p].id,props:{app:c[p],whichMode:L}}),l.a.createElement("div",{className:"main ".concat(L?"":"light")},l.a.createElement(C,{props:{app:c,setNewListName:N,addList:function(){var e={id:i.a.v4(),name:v};f(c.length),r((function(t){return[].concat(Object(o.a)(t),[e])}))},setCurrentList:f,setRename:O,updateList:function(e){r(c.map((function(t){return t.id===e&&(t.name=k),t})))},deleteList:function(e){localStorage.removeItem(e);var t=c.filter((function(t){return t.id!==e}));f(t.length-1),r(t)},currentList:p,clearList:function(){r([]),localStorage.clear()},changeMode:function(){j(!L)},whichMode:L,sendForm:function(e){y.a.sendForm("jesutofunmi","template_u504ag9",e.target,"user_cqIkD8iC06p5aXPXjcJEo").then((function(e){if(1!==e.status&&"OK"!==e.text)throw e;B("sent")})).catch((function(e){e&&B("error")}))},formStatus:A,setFormStatus:B}}),e)},S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function M(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(l.a.createElement(O,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/React-Todo-App",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="/service-worker.js";S?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):M(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):M(t,e)}))}}()}},[[16,1,2]]]);
//# sourceMappingURL=main.6da809fd.chunk.js.map