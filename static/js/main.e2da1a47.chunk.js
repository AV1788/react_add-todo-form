(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(7),o=a(2),c=a(6),s=a(1),l=(a(14),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]),d=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}],u=a(9),m=a.n(u),j=(a(15),a(0)),b=function(e){var t=e.user;return Object(j.jsx)("a",{className:"UserInfo",href:"mailto:".concat(t.email),children:t.name})};a(17);var h=function(e){var t,a=e.todo,n=(t=a.userId,l.find((function(e){return e.id===t}))||null);return Object(j.jsxs)("article",{"data-id":a.id,className:m()("TodoInfo",{"TodoInfo--completed":!0===a.completed}),children:[Object(j.jsx)("h2",{className:"TodoInfo__title",children:a.title}),n&&Object(j.jsx)(b,{user:n})]},a.id)},O=function(e){var t=e.todos;return Object(j.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(j.jsx)(h,{todo:e},e.id)}))})};function f(e){return Math.max.apply(Math,Object(c.a)(e.map((function(e){return e.id}))))+1}var p=function(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),a=t[0],n=t[1],i=Object(s.useState)(!1),u=Object(o.a)(i,2),m=u[0],b=u[1],h=Object(s.useState)(0),p=Object(o.a)(h,2),x=p[0],v=p[1],y=Object(s.useState)(!1),S=Object(o.a)(y,2),N=S[0],I=S[1],g=Object(s.useState)(d),C=Object(o.a)(g,2),_=C[0],k=C[1];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Add todo form"}),Object(j.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:function(e){e.preventDefault();var t=a.trim();return!t&&x?(n(""),void b(!0)):t||x?(a||b(!0),x||I(!0),void(a&&x&&(!function(e){var t=Object(r.a)(Object(r.a)({},e),{},{id:f(_)});k((function(e){return[].concat(Object(c.a)(e),[t])}))}({id:0,title:a,completed:!1,userId:x}),n(""),v(0),b(!1),I(!1)))):(n(""),b(!0),void I(!0))},children:[Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{className:"label",htmlFor:"todo-title-id",children:"Title:\xa0"}),Object(j.jsx)("input",{type:"text","data-cy":"titleInput",id:"todo-title-id",placeholder:"Enter a title",value:a,onChange:function(e){n(e.target.value),b(!1)}}),m&&Object(j.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{className:"label",htmlFor:"todo-user-id",children:"User:\xa0"}),Object(j.jsxs)("select",{"data-cy":"userSelect",id:"todo-user-id",value:x,onChange:function(e){v(+e.target.value),I(!1)},children:[Object(j.jsx)("option",{value:"0",children:"Choose a user"}),l.map((function(e){return Object(j.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),N&&Object(j.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(j.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(j.jsx)(O,{todos:_})]})};i.a.render(Object(j.jsx)(p,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.e2da1a47.chunk.js.map