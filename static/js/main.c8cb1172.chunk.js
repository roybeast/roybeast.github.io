(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{56:function(e,t,n){},57:function(e,t,n){},59:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(10),c=n.n(a),r=n(46),i=n.n(r),s=(n(56),n(11)),l=n(29),o=n(14),d=(n(57),n(0)),j=n.n(d),b=n(4),u=(n(59),"/"),m="/about",h="/books",x="/posts/new",O=n(27),p=n(47),v=n(28),g=n(25),f=n(48),k=n(49),N=Object(p.a)({apiKey:"AIzaSyAkhIhYHBzSJDCzGdkT5sLf5y5Gfvzr-8s",authDomain:"roybeast-blog.firebaseapp.com",databaseURL:"https://roybeast-blog-default-rtdb.firebaseio.com",projectId:"roybeast-blog",storageBucket:"roybeast-blog.appspot.com",messagingSenderId:"1083253225131",appId:"1:1083253225131:web:bba367f79c3aa1aaf169ee"}),y=Object(v.c)(),w=function(){var e=Object(g.a)();return Object(g.d)(e,"posts")},T=Object(a.createContext)({usePosts:function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){var e=!0;return Object(g.b)(w(),(function(t){if(e){var n=t.val();if(n){var a=Object.keys(n).map((function(e){return Object(O.a)(Object(O.a)({},n[e]),{},{id:e})}));e&&c(a)}}})),function(){return e=!1}}),[]),[n]},sendPost:function(e){Object(g.c)(w(),e)},deletePost:function(e){var t=Object(g.a)(),n=Object(g.d)(t,"posts/".concat(e));Object(g.e)(n)},useUser:function(e,t){var n=Object(a.useState)({}),c=Object(s.a)(n,2),r=c[0],i=c[1];return Object(a.useEffect)((function(){if(null===e||void 0===e?void 0:e.uid){var n=!0,a=Object(g.a)(),c=Object(g.d)(a,"users/".concat(e.uid));return Object(g.b)(c,(function(a){if(n){var r=a.val();if(r){var s=Object.keys(r).map((function(e){return Object(O.a)(Object(O.a)({},r[e]),{},{id:e})}));i(s[0])}else if(t){var l={displayName:e.displayName,email:e.email};Object(g.c)(c,l)}}})),function(){return n=!1}}}),[e,t]),[r]},app:N,auth:y,useAuthState:f.a,useCollectionData:k.a,providers:{google:v.a},signInWithPopup:v.g}),C=(n(20),n(6)),A=function(){return Object(C.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:[Object(C.jsx)(l.b,{className:"navbar-brand",to:u,children:"Roybeast"}),Object(C.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(C.jsx)("span",{className:"navbar-toggler-icon"})}),Object(C.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown",children:Object(C.jsxs)("ul",{className:"navbar-nav",children:[Object(C.jsx)("li",{className:"nav-item",children:Object(C.jsx)(l.b,{className:"nav-link",to:u,children:"Blog"})}),Object(C.jsx)("li",{className:"nav-item",children:Object(C.jsx)(l.b,{className:"nav-link",to:m,children:"About"})}),Object(C.jsx)("li",{className:"nav-item",children:Object(C.jsx)(l.b,{className:"nav-link",to:h,children:"Books"})}),Object(C.jsx)("li",{className:"nav-item",children:Object(C.jsx)("a",{className:"nav-link",href:"https://www.linkedin.com/in/christopher-roybal/",rel:"noreferrer",target:"_blank",children:Object(C.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-linkedin",viewBox:"0 0 16 16",children:Object(C.jsx)("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"})})})})]})}),Object(C.jsx)("ul",{className:"navbar-nav ml-auto",children:Object(C.jsx)("li",{className:"nav-item",children:Object(C.jsx)(D,{})})})]})},D=function(){var e=Object(a.useContext)(T),t=e.auth,n=e.useAuthState,c=e.providers,r=e.signInWithPopup,i=e.useUser,o=n(t),d=Object(s.a)(o,1)[0],u=i(d),m=Object(s.a)(u,1)[0],h=function(){var e=Object(b.a)(j.a.mark((function e(){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new c.google,e.next=3,r(t,n);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return d?Object(C.jsxs)("div",{className:"dropdown",children:[Object(C.jsx)("button",{className:"btn btn-dark dropdown-toggle",type:"button",id:"dropDownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:d.displayName}),Object(C.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"dropDownMenuButton",children:[m.isAdmin&&Object(C.jsx)(l.b,{className:"dropdown-item btn btn-dark",to:x,children:"New Post"}),Object(C.jsx)("button",{className:"dropdown-item btn btn-dark",onClick:function(){t.signOut()},children:"Sign out"})]})]}):Object(C.jsx)("button",{className:"btn btn-dark",onClick:h,children:"Sign in"})},S=n(15),I=function(e){var t=e.children;return Object(C.jsx)("div",{className:"jumbotron",style:{},children:t})},L=function(e){var t=e.children;return Object(C.jsx)("div",{className:"container",children:t})},P=function(e){var t=e.children,n=e.variant,c=Object(a.useMemo)((function(){return"medium"===n?"36rem":"large"===n?"54rem":"18rem"}),[n]);return Object(C.jsx)("div",{className:"card",style:{margin:"4px",padding:"16px",maxWidth:c,minWidth:"18rem"},children:t})};P.Body=function(e){var t=e.children;return Object(C.jsx)("div",{className:"card-body",children:t})},P.TopImage=function(e){var t=e.src,n=e.alt;return Object(C.jsx)("img",{className:"card-img-top",src:t,alt:n})},P.Title=function(e){var t=e.children;return Object(C.jsx)("h5",{className:"card-title",children:t})},P.Text=function(e){var t=e.children;return Object(C.jsx)("p",{className:"card-text",children:t})},P.Link=function(e){var t=e.href,n=e.text;return Object(C.jsx)("a",{href:t,className:"card-link",target:"_blank",rel:"noreferrer",children:n})};var B=function(e){var t=e.children;return Object(C.jsx)(L,{children:t})};B.Column=function(e){var t=e.children;return Object(C.jsx)("div",{className:"col",children:t})},B.Row=function(e){var t=e.children;return Object(C.jsx)("div",{className:"row",children:t})};var F=function(e){var t=e.post,n=e.onDelete,a=e.canDelete;return Object(C.jsxs)(P,{variant:"medium",children:[t.img&&Object(C.jsx)(P.TopImage,{src:t.img,alt:t.imgAlt}),Object(C.jsxs)("div",{style:{display:"flex"},children:[Object(C.jsx)(P.Title,{children:t.title}),a&&Object(C.jsx)("div",{className:"ml-auto",children:Object(C.jsx)("button",{type:"button",className:"btn btn-outline-danger btn-sm",onClick:n,children:"X"})})]}),Object(C.jsx)(P.Body,{children:t.description}),t.link&&Object(C.jsx)(P.Link,{href:t.link,text:t.linkText}),Object(C.jsx)(P.Text,{children:z(t).toLocaleDateString("en-US",{month:"long",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"})})]})},z=function(e){return"number"===typeof e.date?new Date(e.date):new Date(Date.parse("".concat(e.date.month," ").concat(e.date.day,", ").concat(e.date.year)))},G=function(e,t){var n=z(e);return z(t).getTime()-n.getTime()},R=function(){var e=Object(a.useContext)(T),t=e.usePosts,n=e.useUser,c=e.useAuthState,r=e.deletePost,i=e.auth,l=t(),o=Object(s.a)(l,1)[0],d=c(i),j=n(Object(s.a)(d,1)[0]),b=Object(s.a)(j,1)[0],u=Object(a.useMemo)((function(){return Object(S.a)(o).sort(G)}),[o]);return Object(C.jsx)(I,{children:Object(C.jsx)("div",{className:"d-flex justify-content-center",children:Object(C.jsx)("div",{children:u.map((function(e){return Object(C.jsx)(F,{post:e,canDelete:null===b||void 0===b?void 0:b.isAdmin,onDelete:function(){return t=e.id,void r(t);var t}},e.id)}))})})})},U=(n(65),[{title:"About myself",text:["Always hard to write about myself...","Presently working as a software developer.","Enjoys playing video games in free time.","Happily married since sometime in 2019."]},{title:"Software development",text:["Strong C# background (desktop app, backend APIs, mobile app)","Various exposure to: C#, C++, C, Javascript, React, Objective-C, MySQL","have some exposure to: Docker, Github Actions, Jenkins","Currently working with React/Typescript/Javascript"]},{title:"Education",text:["BS degree in Computer Science from Western Washington University"]}]),V=function(){return Object(C.jsx)(I,{children:Object(C.jsx)(B,{children:Object(C.jsx)(B.Row,{children:U.map((function(e,t){return Object(C.jsx)(B.Column,{children:Object(C.jsxs)(P,{variant:1===e.text.length?"small":"medium",children:[Object(C.jsx)(P.Title,{children:e.title}),e.text.map((function(e,t){return Object(C.jsx)(P.Text,{children:e},t)}))]})},t)}))})})})},M=[{id:"books-0",title:"Level Up! The Guide to Great Video Game Design 2nd Edition",description:"A book about game design",author:"Scott Rogers",review:"In Progress",pages:535,link:"https://www.amazon.com/Level-Guide-Great-Video-Design/dp/1118877160/",linkText:"Amazon"}],E=function(){return Object(C.jsx)(I,{children:M.map((function(e){return Object(C.jsxs)(P,{variant:"large",children:[Object(C.jsx)(P.Title,{children:e.title}),Object(C.jsx)(P.Text,{children:e.description}),Object(C.jsx)(P.Text,{children:"Pages: ".concat(e.pages)}),Object(C.jsx)(P.Text,{children:"Author: ".concat(e.author)}),Object(C.jsx)(P.Text,{children:"Review: ".concat(e.review)}),e.link&&Object(C.jsx)(P.Link,{href:e.link,text:e.linkText})]},e.id)}))})},J=function(){return{title:"",description:"",date:(new Date).getTime(),link:"",linkText:"",img:"",imgAlt:""}},W=function(){var e=Object(a.useState)(J()),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(a.useContext)(T).sendPost,i=function(e){c((function(t){return Object(O.a)(Object(O.a)({},t),e)}))};return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(I,{children:Object(C.jsxs)("form",{children:[Object(C.jsxs)("div",{className:"form-group",children:[Object(C.jsx)("label",{htmlFor:"title",children:"Title"}),Object(C.jsx)("input",{type:"text",className:"form-control",id:"title",placeholder:"Title",value:n.title,onChange:function(e){return i({title:e.target.value})}})]}),Object(C.jsxs)("div",{className:"form-group",children:[Object(C.jsx)("label",{htmlFor:"description",children:"Description"}),Object(C.jsx)("textarea",{className:"form-control",id:"description",placeholder:"Description",value:n.description,onChange:function(e){return i({description:e.target.value})}})]}),Object(C.jsxs)("div",{className:"form-group",children:[Object(C.jsx)("label",{htmlFor:"link",children:"Link"}),Object(C.jsx)("input",{type:"text",className:"form-control",id:"link",placeholder:"Link",value:n.link,onChange:function(e){return i({link:e.target.value})}})]}),Object(C.jsxs)("div",{className:"form-group",children:[Object(C.jsx)("label",{htmlFor:"linkText",children:"Link Text"}),Object(C.jsx)("input",{type:"text",className:"form-control",id:"linkText",placeholder:"Link Text",value:n.linkText,onChange:function(e){return i({linkText:e.target.value})}})]}),Object(C.jsxs)("div",{className:"form-group",children:[Object(C.jsx)("label",{htmlFor:"img",children:"Image"}),Object(C.jsx)("input",{type:"text",className:"form-control",id:"img",placeholder:"Image link",value:n.img,onChange:function(e){return i({img:e.target.value})}})]}),Object(C.jsxs)("div",{className:"form-group",children:[Object(C.jsx)("label",{htmlFor:"imgAlt",children:"Image Alternate Text"}),Object(C.jsx)("input",{type:"text",className:"form-control",id:"imgAlt",placeholder:"Image Alternate Text",value:n.imgAlt,onChange:function(e){return i({imgAlt:e.target.value})}})]}),Object(C.jsx)("button",{type:"button",className:"btn btn-dark",onClick:function(){r(Object(O.a)(Object(O.a)({},n),{},{date:(new Date).getTime()})),c(J())},children:"Submit"})]})}),Object(C.jsx)(F,{post:n})]})};var H=function(){var e=Object(a.useContext)(T),t=e.useAuthState,n=e.auth,c=e.useUser,r=t(n),i=c(Object(s.a)(r,1)[0],!0),d=Object(s.a)(i,1)[0];return Object(C.jsxs)(l.a,{children:[Object(C.jsx)(A,{}),Object(C.jsxs)(o.c,{children:[Object(C.jsx)(o.a,{path:h,children:Object(C.jsx)(E,{})}),Object(C.jsx)(o.a,{path:m,children:Object(C.jsx)(V,{})}),d.isAdmin&&Object(C.jsx)(o.a,{path:x,children:Object(C.jsx)(W,{})}),Object(C.jsx)(o.a,{path:u,children:Object(C.jsx)(R,{})})]})]})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(H,{})}),document.getElementById("root")),_()}},[[66,1,2]]]);
//# sourceMappingURL=main.c8cb1172.chunk.js.map