(this["webpackJsonpforce-challenge"]=this["webpackJsonpforce-challenge"]||[]).push([[0],{41:function(e,t,c){},42:function(e,t,c){},67:function(e,t,c){"use strict";c.r(t);var n,r,i,a,o=c(0),s=c.n(o),j=c(32),l=c.n(j),b=c(10),d=(c(41),c(42),c(2)),h=c(1),u=function(){var e=Object(d.f)();return Object(h.jsxs)("div",{children:[Object(h.jsxs)("h2",{children:["Welcome to ",Object(h.jsx)("strong",{children:"iClinic"})]}),Object(h.jsx)("h6",{children:"FRONTEND CHALLENGE"}),Object(h.jsx)("main",{children:Object(h.jsx)("button",{onClick:function(){return e.push("/side-pick")},children:"START"})})]})},O=c(15),p=c(14),x=c(20),f=c.n(x),g=c.p+"static/media/darth-vader.5b59175e.png",k=c.p+"static/media/luke-skywalker.7ac8850b.png",m=c(9),v=c(21),F=c.n(v),A=F()("mode",{Darth:"#2A2A2A",Luke:"#FBFE63"}),C=F()("mode",{Darth:"#FFFFFF",Luke:"#2A2A2A"}),w=m.b.div(n||(n=Object(p.a)(["\n  background-color: ",";\n  color: ",";\n"])),A,C),E=m.b.button(r||(r=Object(p.a)(["\n    background-color: ",";\n    color: ",";\n    cursor: pointer;\n"])),C,A),L=m.b.button(i||(i=Object(p.a)(["\n    background-color: ",";\n    color: ",";\n    cursor: pointer;\n"])),C,A),S=m.b.img(a||(a=Object(p.a)(["\n    border-radius: 50%;\n"]))),D=function(){var e=Object(d.f)(),t=Object(o.useState)({}),c=Object(O.a)(t,2),n=c[0],r=c[1],i=Object(o.useState)(!0),a=Object(O.a)(i,2),s=a[0],j=a[1],l=Object(o.useState)(""),b=Object(O.a)(l,2),u=b[0],p=b[1],x=function(){j(!0),Promise.race([f.a.get("https://swapi.dev/api/people/1"),f.a.get("https://swapi.dev/api/people/4")]).then((function(e){console.log(e.data),r(e.data),p(e.data.name.split(" ")[0])})).catch((function(e){return console.log(e)})).finally((function(){return j(!1)}))};return Object(o.useEffect)((function(){x()}),[]),Object(h.jsx)(m.a,{theme:{mode:u},children:Object(h.jsxs)(w,{children:[Object(h.jsx)("div",{children:Object(h.jsx)(L,{onClick:function(){return e.push("/force-challange")},children:"back"})}),Object(h.jsx)("div",{children:Object(h.jsx)(E,{disabled:s,onClick:function(){return x()},children:"choose your path again, Padawan"})}),Object(h.jsx)("div",{children:s?Object(h.jsx)("p",{children:"Checking ..."}):Object(h.jsxs)("div",{children:[Object(h.jsx)(S,{src:"Darth Vader"===n.name?g:k,alt:"Master"}),Object(h.jsxs)("p",{children:["Your master is ",Object(h.jsx)("strong",{children:n.name})]})]})})]})})},T=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(d.c,{children:[Object(h.jsx)(d.a,{exact:!0,path:"/force-challange",children:Object(h.jsx)(u,{})}),Object(h.jsx)(d.a,{path:"/side-pick",children:Object(h.jsx)(D,{})})]})})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,68)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),i(e),a(e)}))};l.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(b.a,{children:Object(h.jsx)(T,{})})}),document.getElementById("root")),y()}},[[67,1,2]]]);
//# sourceMappingURL=main.5291167b.chunk.js.map