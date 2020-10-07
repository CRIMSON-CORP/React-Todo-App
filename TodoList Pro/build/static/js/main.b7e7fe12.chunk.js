(this["webpackJsonpnew-project-react"]=this["webpackJsonpnew-project-react"]||[]).push([[0],{158:function(e,t,a){e.exports=a(319)},163:function(e,t,a){},188:function(e,t){},190:function(e,t){},198:function(e,t){},200:function(e,t){},218:function(e,t){},220:function(e,t){},248:function(e,t){},250:function(e,t){},251:function(e,t){},257:function(e,t){},259:function(e,t){},277:function(e,t){},280:function(e,t){},296:function(e,t){},299:function(e,t){},319:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(154),o=a.n(c),r=(a(163),a(79)),s=a.n(r),i=a(155),m=a(56),u=a(10),d=a(55),p=a.n(d),f=a(6);function E(e){var t=e.props,a=t.sendProps,n=t.setInput;return l.a.createElement("form",{className:"inputBlock",onSubmit:a},l.a.createElement("div",{className:"input-container"},l.a.createElement("input",{type:"text",className:"Input",name:"inputBlock",onChange:n,autoComplete:"off",required:"required"}),l.a.createElement("svg",{className:"border","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 275.05 40",preserveAspectRatio:"none"},l.a.createElement("path",{className:"cls-1 path",d:"M139,39H268.22c4,0,7.3-2.78,7.3-6.21V8.21c0-3.43-3.27-6.21-7.3-6.21H139",transform:"translate(-1.3 -0.77)"}),l.a.createElement("path",{className:"cls-2 path",d:"M164,2H11.24C6.43,2,2.52,4.78,2.52,8.21V32.79c0,3.43,3.91,6.21,8.72,6.21H160.32v0H164",transform:"translate(-1.3 -0.77)"})),l.a.createElement("span",null,"What Do you want Todo?...")),l.a.createElement("button",{className:"plus",type:"submit"},l.a.createElement(f.a,{fill:"#222",className:"icon",size:"1.2rem"})))}var v=function(e){var t=e.props,a=t.EachTodo,n=a.id,c=a.completed,o=a.Todo,r=t.updateTodo,s=t.removeTodo,i=c;return l.a.createElement("div",{className:"label","data-id":"".concat(n)},l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox","data-id":"".concat(n),checked:i,onChange:function(){r(n)}}),l.a.createElement("div",{className:"Todo"},l.a.createElement("div",{className:"checkbox-container"},l.a.createElement("svg",{viewBox:"0 0 100 100",className:"checkbox"},l.a.createElement("path",{className:"st0",d:"M85,92H15c-3.9,0-7-3.1-7-7V15c0-3.9,3.1-7,7-7h70c3.9,0,7,3.1,7,7v70C92,88.9,88.9,92,85,92z"}),l.a.createElement("polyline",{className:"check",points:"22.5,47.5 42.5,67.5 78.5,31.5 "}))),l.a.createElement("span",{style:i?{opacity:.4,textDecoration:"line-through"}:null},o," ",l.a.createElement("span",{className:"cross"})))),l.a.createElement(f.c,{className:"close",fill:"red",style:{transform:i?"scale(1)":"scale(0)",fontWeight:"bolder"},onClick:function(){s(n)},"data-id":n}))};function h(e){var t=e.props,a=t.removeTodo,n=t.updateTodo,c=t.TodoListArray,o=t.filtered,r=(t.mode,t.whichMode),s=o.map((function(e,t){return l.a.createElement(v,{key:t,props:{EachTodo:e,updateTodo:n,removeTodo:a}})}));return l.a.createElement("div",{className:"listContainer ".concat(r?"darkMode":"LightMode")},0===c.length?"":s)}function b(e){var t=e.props,a=t.progress,n=t.TodoListArray,c=t.clearDone,o=t.done,r=t.statusHandler,s=t.status,i=(t.mode,t.whichMode);return l.a.createElement("div",{className:"control"},l.a.createElement("div",{className:"box"},l.a.createElement("div",{className:"percent"},l.a.createElement("svg",null,l.a.createElement("linearGradient",{id:"grad",x1:"0",y1:"0",x2:"100%",y2:"100%"},l.a.createElement("stop",{offset:"0%",stopColor:"#ff0612"}),l.a.createElement("stop",{offset:"100%",stopColor:"#6544ff"})),l.a.createElement("circle",{cx:"50%",cy:"50%",r:"40",className:"dark circle"}),l.a.createElement("circle",{cx:"50%",cy:"50%",r:"40",className:"grad circle",style:{strokeDashoffset:250.92137145996094-250.92137145996094*a/100,strokeWidth:0===a?"0px":"10px"}})),l.a.createElement("div",{className:"number ".concat(i?"darkMode":"LightMode")},0!==a||0!==n.length?l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,a,l.a.createElement("span",{className:"perc"},"%")),l.a.createElement("span",{className:"comp"},"completed")):l.a.createElement("h2",{className:"empty"},"No Task")))),l.a.createElement("div",{className:"buttons"},l.a.createElement("button",{onClick:c,disabled:0===o,className:0===o?"disable":"clear"},"\u2715 Clear Done"),l.a.createElement("select",{name:"filter",id:"filter",onChange:r,value:s},l.a.createElement("option",{value:"All"},"All"),l.a.createElement("option",{value:"Completed"},"Completed"),l.a.createElement("option",{value:"Uncompleted"},"Uncompleted"))))}var N=a(3),g=a.n(N);function O(e){var t=e.props,a=t.app,c=t.whichMode,o=Object(n.useState)(a.id),r=Object(u.a)(o,1)[0],s=Object(n.useState)({}),i=Object(u.a)(s,2),d=i[0],f=i[1],v=Object(n.useState)((function(){var e=localStorage.getItem(r);return null===e||void 0===e?[]:JSON.parse(e)})),N=Object(u.a)(v,2),O=N[0],w=N[1],C=Object(n.useState)(0),k=Object(u.a)(C,2),S=k[0],y=k[1],M=Object(n.useState)(""),L=Object(u.a)(M,2),j=L[0],x=L[1],T=Object(n.useState)([]),A=Object(u.a)(T,2),I=A[0],H=A[1],B=Object(n.useState)("All"),D=Object(u.a)(B,2),_=D[0],R=D[1];function W(e){e?(g()(".checkbox path").css("transition",".4s"),g()(".check").css("transition",".4s")):(g()(".checkbox path").css("transition","none"),g()(".check").css("transition","none"))}return Object(n.useEffect)((function(){var e=O.filter((function(e){return!0===e.completed})),t=Math.floor(e.length/O.length*100);isNaN(t)&&(t=0),x(t),y(e.length)}),[j,O]),Object(n.useEffect)((function(){!function(){switch(_){case"Completed":H(O.filter((function(e){return!0===e.completed})));break;case"Uncompleted":H(O.filter((function(e){return!1===e.completed})));break;default:H(O)}}()}),[O,_]),Object(n.useEffect)((function(){W(!1)}),[_]),Object(n.useEffect)((function(){localStorage.setItem(r,JSON.stringify(O))}),[O,r]),l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"ListName"},a.name),l.a.createElement(b,{props:{progress:j,TodoListArray:O,clearDone:function(){W(!1),w(O.filter((function(e){return!1===e.completed})))},done:S,status:_,statusHandler:function(e){var t=e.target.value;R(t)},whichMode:c}}),l.a.createElement(E,{props:{sendProps:function(e){e.preventDefault();var t=g()(".Input"),a=d.Todo;if(""===a.trim()||void 0===a.trim())return t.val(null).focus(),alert("Please write a Task");d.id=p.a.v4(),d.completed=!1,w((function(e){return[].concat(Object(m.a)(e),[d])})),t.val(null).focus(),f({}),R("All")},setInput:function(e){var t=e.target.value;f({Todo:t})},whichMode:c}}),l.a.createElement(h,{props:{removeTodo:function(e){W(!1),w(O.filter((function(t){return t.id!==e})))},updateTodo:function(e){W(!0),w(O.map((function(t){return t.id===e&&(t.completed=!t.completed),t})))},TodoListArray:O,filtered:I,whichMode:c}}))}var w=a(32),C=a(44),k=a(45),S=a(0);var y=function(e){var t=e.props,a=t.app,c=t.setNewListName,o=t.addList,r=t.setCurrentList,s=t.setRename,i=t.updateList,m=t.deleteList,d=t.currentList,p=t.clearList,E=t.changeMode,v=t.whichMode,h=t.sendForm,b=Object(n.useState)(!1),N=Object(u.a)(b,2),O=N[0],y=N[1],M=Object(n.useState)([]),L=Object(u.a)(M,2),j=L[0],x=L[1],T=Object(n.useState)(""),A=Object(u.a)(T,2),I=A[0],H=A[1],B=Object(n.useState)(!0),D=Object(u.a)(B,2),_=D[0],R=D[1],W=Object(n.useState)({}),P=Object(u.a)(W,2),U=P[0],V=P[1];function K(e){""===e.val().trim()?e.next().css("stroke","red"):e.next().css("stroke","#9252ff")}return Object(n.useEffect)((function(){var e=a.map((function(e,t){return l.a.createElement(S.b.Provider,{value:{size:"1.5rem",className:"ListSetIcon ".concat(v?"":"light")},key:t},l.a.createElement("li",{className:"listSet ".concat(v?"dark":"light"),"data-id":e.id,onClick:function(a){a.persist(),"svg"!==a.target.tagName&&"path"!==a.target.tagName&&(r(t),y(!1),g()(".listSet").removeClass("active"),g()('.listSet[data-id="'.concat(e.id,'"]')).addClass("active"))}},l.a.createElement(f.h,{className:"icon"}),l.a.createElement("h3",null,e.name),l.a.createElement(f.g,{"data-id":e.id,className:"icon edit",onClick:function(){g()(".rename").fadeIn(),g()(".renamebox").val(e.name).select(),H(e.id)}}),l.a.createElement(f.e,{className:"icon deleteIcon","data-id":e.id,onClick:function(){g()(".delete").fadeIn(),H(e.id)}})))}));x(e)}),[a,r,v]),O&&g()(".container").click((function(){y(!1)})),g()(".listSet").removeClass("active"),g()(".listSet:eq(".concat(d,")")).addClass("active"),v?g()(".modal").removeClass("light"):g()(".modal").addClass("light"),g()(".contactModal .Input.email").blur((function(){/@/.test(g()(this).val())?g()(this).next().css("stroke","#9252ff"):g()(this).next().css("stroke","red")})),g()(".contactModal .Input").blur((function(){K(g()(this))})),g()(".contactModal .Input").keyup((function(){K(g()(this))})),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"ham ".concat(v?"dark":"light")},l.a.createElement(f.d,{size:"1.5rem",className:"icon",onClick:function(){y(!0)}})),l.a.createElement("div",{className:"sideBar ".concat(O?"openBar":"closeBar"," ").concat(v?"":"lightMode")},l.a.createElement("h2",null,"Your List Set",l.a.createElement(f.c,{size:"1.5rem",className:"icon",onClick:function(){y(!1)}})),l.a.createElement("ul",null,j,l.a.createElement("hr",null),l.a.createElement(S.b.Provider,{value:{size:"1.5rem"}},l.a.createElement("li",{className:"subList",onClick:function(){g()(".newModal").fadeIn(),g()(".new")}},l.a.createElement(f.a,null),l.a.createElement("h3",null,"Add New List")),l.a.createElement("li",{className:"subList",onClick:function(){g()(".clearListModal").fadeIn()}},l.a.createElement(f.f,null),l.a.createElement("h3",null,"Clear All Lists")),l.a.createElement("li",{className:"subList",onClick:function(){y(!1),E(),R(!_)}},v?l.a.createElement(C.d,null):l.a.createElement(C.b,null),l.a.createElement("h3",null,"Turn on ",v?"Light":"Dark"," Mode")),l.a.createElement("hr",null),l.a.createElement("li",{className:"subList",onClick:function(){g()(".contactModal").fadeIn()}},l.a.createElement(C.c,{style:{strokeWidth:1}}),l.a.createElement("h3",null,"Contact Me")),l.a.createElement("li",{className:"subList",onClick:function(){g()(".donateModal").fadeIn()}},l.a.createElement(C.a,{style:{strokeWidth:1}}),l.a.createElement("h3",null,"Donate"))),l.a.createElement("hr",null))),l.a.createElement("div",{className:"modalCont newModal"},l.a.createElement("form",{className:"modal",onSubmit:function(e){e.preventDefault(),g()(".newModal").fadeOut(),g()(".inputBox").val(null),o(),y(!1)}},l.a.createElement("h3",null,"list Name"),l.a.createElement("div",{className:"input-container"},l.a.createElement("input",{type:"text",className:"Input",name:"inputBlock",onChange:function(e){var t=e.target.value;c(t)},autoComplete:"off",required:!0}),l.a.createElement("svg",{className:"border",viewBox:"0 0 275.05 40",preserveAspectRatio:"none"},l.a.createElement("path",{className:"cls-1 path",d:"M139,39H268.22c4,0,7.3-2.78,7.3-6.21V8.21c0-3.43-3.27-6.21-7.3-6.21H139",transform:"translate(-1.3 -0.77)"}),l.a.createElement("path",{className:"cls-2 path",d:"M164,2H11.24C6.43,2,2.52,4.78,2.52,8.21V32.79c0,3.43,3.91,6.21,8.72,6.21H160.32v0H164",transform:"translate(-1.3 -0.77)"})),l.a.createElement("span",null,"List Name...")),l.a.createElement("button",{className:"modalBtn save",type:"submit"},l.a.createElement(f.b,null),l.a.createElement("span",null,"Save")),l.a.createElement("button",{className:"modalBtn",type:"button",onClick:function(){g()(".newModal").fadeOut(),g()(".inputBox").val(null)}},l.a.createElement(f.c,null),l.a.createElement("span",null,"Cancel")))),l.a.createElement("div",{className:"modalCont rename"},l.a.createElement("form",{className:"modal",onSubmit:function(e){e.preventDefault(),g()(".rename").fadeOut(),g()(".inputBox").val(null),i(I),H("")}},l.a.createElement("h3",null,"Rename Todo"),l.a.createElement("div",{className:"input-container"},l.a.createElement("input",{type:"text",className:"Input renamebox",name:"inputBlock",onChange:function(e){var t=e.target.value;s(t)},autoComplete:"off",required:!0}),l.a.createElement("svg",{className:"border",viewBox:"0 0 275.05 40",preserveAspectRatio:"none"},l.a.createElement("path",{className:"cls-1 path",d:"M139,39H268.22c4,0,7.3-2.78,7.3-6.21V8.21c0-3.43-3.27-6.21-7.3-6.21H139",transform:"translate(-1.3 -0.77)"}),l.a.createElement("path",{className:"cls-2 path",d:"M164,2H11.24C6.43,2,2.52,4.78,2.52,8.21V32.79c0,3.43,3.91,6.21,8.72,6.21H160.32v0H164",transform:"translate(-1.3 -0.77)"}))),l.a.createElement("button",{className:"modalBtn save",type:"submit"},l.a.createElement(f.b,null),l.a.createElement("span",null,"Save")),l.a.createElement("button",{className:"modalBtn",type:"button",onClick:function(){g()(".rename").fadeOut(),g()(".inputBox").val(null)}},l.a.createElement(f.c,null),l.a.createElement("span",null,"Cancel")))),l.a.createElement("div",{className:"modalCont delete"},l.a.createElement("div",{className:"modal",style:{textAlign:"center"}},l.a.createElement(f.e,{fontSize:"3rem",fill:"red",style:{textShadow:"0px 0px 5px red"}}),l.a.createElement("h3",null,"Are you sure You want to Delete this List?"),l.a.createElement("p",null,"Entire List will be removed permanently"),l.a.createElement("button",{className:"modalBtn",type:"button",onClick:function(){g()(".delete").fadeOut()}},l.a.createElement(f.c,null),l.a.createElement("span",null,"Cancel")),l.a.createElement("button",{className:"modalBtn del",type:"submit",onClick:function(){g()(".delete").fadeOut(),m(I),y(!1)}},l.a.createElement(f.b,null),l.a.createElement("span",null,"OK")))),l.a.createElement("div",{className:"modalCont clearListModal"},l.a.createElement("div",{className:"modal",style:{textAlign:"center"}},l.a.createElement(f.e,{fontSize:"3rem",fill:"red",className:"icon",style:{textShadow:"0px 0px 5px red"}}),l.a.createElement("h3",null,"Are you sure You want to Clear All Your Lists?"),l.a.createElement("p",null,"All Lists will be removed permanently and Cannot be recovered!"),l.a.createElement("button",{className:"modalBtn",onClick:function(){g()(".clearListModal").fadeOut()}},l.a.createElement(f.c,null),l.a.createElement("span",null,"Cancel")),l.a.createElement("button",{className:"modalBtn del",onClick:function(){g()(".clearListModal").fadeOut(),p(I)}},l.a.createElement(f.f,null),l.a.createElement("span",null," Clear all Lists")))),l.a.createElement("div",{className:"modalCont contactModal",style:{display:"none",userSelect:"text"}},l.a.createElement("div",{className:"modal"},l.a.createElement(f.c,{className:"icon closeModal",size:"1.5rem",onClick:function(){g()(".contactModal").fadeOut()}}),l.a.createElement("form",{className:"contact",onSubmit:function(e){e.preventDefault(),h(U),g()(".contactModal").fadeOut(),y(!1)}},l.a.createElement("h3",null,"Contact Me"),l.a.createElement("div",{className:"input-container"},l.a.createElement("input",{type:"text",className:"Input",name:"fullName",onChange:function(e){var t=e.target.value;V((function(e){return Object(w.a)(Object(w.a)({},e),{},{fullname:t})}))},autoComplete:"off",required:!0}),l.a.createElement("svg",{className:"border",viewBox:"0 0 275.05 40",preserveAspectRatio:"none"},l.a.createElement("path",{className:"cls-1 path",d:"M139,39H268.22c4,0,7.3-2.78,7.3-6.21V8.21c0-3.43-3.27-6.21-7.3-6.21H139",transform:"translate(-1.3 -0.77)"}),l.a.createElement("path",{className:"cls-2 path",d:"M164,2H11.24C6.43,2,2.52,4.78,2.52,8.21V32.79c0,3.43,3.91,6.21,8.72,6.21H160.32v0H164",transform:"translate(-1.3 -0.77)"})),l.a.createElement("span",null,"Full Name")),l.a.createElement("div",{className:"input-container"},l.a.createElement("input",{type:"text",className:"Input email",name:"email",onChange:function(e){var t=e.target.value;V((function(e){return Object(w.a)(Object(w.a)({},e),{},{email:t})}))},autoComplete:"off",required:!0}),l.a.createElement("svg",{className:"border",viewBox:"0 0 275.05 40",preserveAspectRatio:"none"},l.a.createElement("path",{className:"cls-1 path",d:"M139,39H268.22c4,0,7.3-2.78,7.3-6.21V8.21c0-3.43-3.27-6.21-7.3-6.21H139",transform:"translate(-1.3 -0.77)"}),l.a.createElement("path",{className:"cls-2 path",d:"M164,2H11.24C6.43,2,2.52,4.78,2.52,8.21V32.79c0,3.43,3.91,6.21,8.72,6.21H160.32v0H164",transform:"translate(-1.3 -0.77)"})),l.a.createElement("span",null,"email")),l.a.createElement("div",{className:"input-container message"},l.a.createElement("textarea",{className:"Input",name:"inputBlock",onChange:function(e){var t=e.target.value;V((function(e){return Object(w.a)(Object(w.a)({},e),{},{message:t})}))},required:!0}),l.a.createElement("svg",{className:"border textarea",viewBox:"0 0 309 277",preserveAspectRatio:"none"},l.a.createElement("path",{className:"cls-1 path",d:"M154.5,1.5h138a15,15,0,0,1,15,15v244a15,15,0,0,1-15,15h-138"}),l.a.createElement("path",{className:"cls-2 path",d:"M154.5,275.5H16.5a15,15,0,0,1-15-15V16.5a15,15,0,0,1,15-15h138"})),l.a.createElement("span",null,"Message")),l.a.createElement("button",{className:"modalBtn send",type:"submit"},l.a.createElement(f.i,null),l.a.createElement("span",null,"Send"))),l.a.createElement("div",{className:"social"},l.a.createElement("a",{href:"https://www.facebook.com/crimson.oluwatowo/",className:"facebook"},l.a.createElement(k.a,null)),l.a.createElement("a",{href:"https://www.instagram.com/crimson_corp/",className:"instagram"},l.a.createElement(k.c,null)),l.a.createElement("a",{href:"m.me/oluwatowo_rosanwo",className:"messenger"},l.a.createElement(k.b,null)),l.a.createElement("a",{href:"https://api.whatsapp.com/send?phone=+2348024537884&text=Hi20%Crimson%20%",className:"whatsapp"},l.a.createElement(k.d,null))))),l.a.createElement("div",{className:"modalCont donateModal",style:{display:"none",userSelect:"text"}},l.a.createElement("div",{className:"modal"},l.a.createElement(f.c,{className:"icon",style:{display:"block",marginLeft:"auto"},onClick:function(){g()(".donateModal").fadeOut()}}),l.a.createElement("h3",null,"Donate"),l.a.createElement("div",{className:"info-block"},l.a.createElement("h4",null,"- About Me"),l.a.createElement("p",null,"My Name is Oluwatowo Rosanwo Mayowa, I'm a 200L Student of The University Of Ibadan studying Food Technology, I started Web Development in 2018 and Now I'm an Intermediate Web Developer and Aspiring UI/UX Deisgner, Im also a Logo/Video Editor.")),l.a.createElement("div",{className:"info-block"},l.a.createElement("h4",null,"- Donate"),l.a.createElement("p",null,"Please if You really Like my Work and have a Dollar or two to spare, Kindly make a Donation To me as This will enhance my Progress and Productivity and also make me work harder and Develop more Apps that you will Definately find usefull")),l.a.createElement("h4",null,"Account Details:"),l.a.createElement("pre",null,"Bank: First Bank ",l.a.createElement("br",null),"Account Number: ",l.a.createElement("span",{id:"acc"},"3123872415")," ",l.a.createElement("br",null),"Account Name: Oluwatowo Rosanwo ",l.a.createElement("br",null)),l.a.createElement("button",{className:"copy",onClick:function(){var e=g()("<input>");g()(".donateModal .modal").append(e),e.val(g()("#acc").text()).select(),document.execCommand("copy"),e.remove(),alert("Account Number Copied, Thank You So Much!")}},"Copy Account Number"))))},M=(a(167),a(156)),L=a.n(M),j=a(157);a.n(j).a.config();var x=function(){var e,t=Object(n.useState)((function(){var e=localStorage.getItem("AppLocal");return null===e||void 0===e?[]:JSON.parse(e)})),a=Object(u.a)(t,2),c=a[0],o=a[1],r=Object(n.useState)((function(){var e=localStorage.getItem("Index");return null===e||void 0===e?0:Number.parseInt(e)})),d=Object(u.a)(r,2),E=d[0],v=d[1],h=Object(n.useState)(""),b=Object(u.a)(h,2),N=b[0],g=b[1],w=Object(n.useState)(""),C=Object(u.a)(w,2),k=C[0],S=C[1],M=Object(n.useState)((function(){var e=localStorage.getItem("mode");return void 0===e||null===e||JSON.parse(e.toLowerCase())})),j=Object(u.a)(M,2),x=j[0],T=j[1];return Object(n.useEffect)((function(){localStorage.setItem("AppLocal",JSON.stringify(c))}),[c]),Object(n.useEffect)((function(){localStorage.setItem("Index",JSON.stringify(E))}),[E]),Object(n.useEffect)((function(){localStorage.setItem("mode",x)}),[x]),e=c.length<=0?l.a.createElement("div",{className:"noList"},l.a.createElement("h1",null,"No Lists"),l.a.createElement("p",null,"Click ",l.a.createElement(f.d,{className:"dir"})," to make a List")):l.a.createElement(O,{key:c[E].id,props:{app:c[E],whichMode:x}}),l.a.createElement("div",{className:"main ".concat(x?"":"light")},l.a.createElement(y,{props:{app:c,setNewListName:g,addList:function(){var e={id:p.a.v4(),name:N};v(c.length),o((function(t){return[].concat(Object(m.a)(t),[e])}))},setCurrentList:v,setRename:S,updateList:function(e){o(c.map((function(t){return t.id===e&&(t.name=k),t})))},deleteList:function(e){localStorage.removeItem(e);var t=c.filter((function(t){return t.id!==e}));v(t.length-1),o(t)},currentList:E,clearList:function(){o([]),localStorage.clear()},changeMode:function(){T(!x)},whichMode:x,sendForm:function(e){function t(){return(t=Object(i.a)(s.a.mark((function t(){var a,n,l;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a="\n            <h2>You recieved a message from ".concat(e.fullname,"</h2>\n            <h3>Message</h3>\n            <p>").concat(e.message,"</p>\n            <p>Sender's Email: <span>").concat(e.email,"</span></p>\n            "),n=L.a.createTransport({service:"gmail",secure:!1,auth:{user:Object({NODE_ENV:"production",PUBLIC_URL:"/React-Todo-App",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).email,pass:Object({NODE_ENV:"production",PUBLIC_URL:"/React-Todo-App",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).password},tls:{rejectUnauthorized:!1,secureProtocol:"TLSv1_method"}}),l={from:e.email,to:Object({NODE_ENV:"production",PUBLIC_URL:"/React-Todo-App",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).password,subject:"You have Received a Message from Your Todo App",html:a},n.sendMail(l,(function(e,t){e?alert("An Error Occured, Please Check your Internet Settings and try again..."):alert("Message Sent!")}));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}}}),e)},T=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function A(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(l.a.createElement(x,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/React-Todo-App",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/React-Todo-App","/service-worker.js");T?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):A(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):A(t,e)}))}}()}},[[158,1,2]]]);
//# sourceMappingURL=main.b7e7fe12.chunk.js.map