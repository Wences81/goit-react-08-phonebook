(this["webpackJsonpgoit-react-08-phonebook"]=this["webpackJsonpgoit-react-08-phonebook"]||[]).push([[0],{21:function(n,e,t){},22:function(n,e,t){"use strict";t.r(e);var a,r,o,c,i,s,l,b,d=t(0),u=t.n(d),p=t(8),j=t.n(p),x=t(10),m=t(4),f=t(23),h=t(2),O=t(3),g=O.a.form(a||(a=Object(h.a)(["\n  padding: 40px 50px;\n  margin: 50px auto 0;\n  max-width: 400px;\n  background: orange;\n"]))),y=O.a.label(r||(r=Object(h.a)(['\n  display: block;\n  font-family: "Roboto", sans-serif;\n  color: green;\n  text-transform: uppercase;\n  font-size: 24px;\n']))),v=O.a.input(o||(o=Object(h.a)(["\n  display: block;\n  padding: 0 0 0 15px;\n  margin: 10px 0 15px;\n  width: 100%;\n  line-height: 40px;\n  color: green;\n  border-width: 0px;\n"]))),k=O.a.button(c||(c=Object(h.a)(["\n  display: block;\n  margin: 40px 0 15px;\n  width: 103%;\n  border-width: 0;\n  line-height: 40px;\n  text-transform: uppercase;\n  font-size: 14px;\n  background-color: green;\n  cursor: pointer;\n"]))),w=t(1);function C(n){var e=n.onSubmit,t=Object(d.useState)(""),a=Object(m.a)(t,2),r=a[0],o=a[1],c=Object(d.useState)(""),i=Object(m.a)(c,2),s=i[0],l=i[1],b=Object(f.a)(),u=Object(f.a)(),p=function(n){var e=n.target,t=e.name,a=e.value;t===t?o(a):l(a)};return Object(w.jsxs)(g,{onSubmit:function(n){n.preventDefault(),e(r,s),o(""),l("")},children:[Object(w.jsxs)(y,{htmlFor:b,children:["Name",Object(w.jsx)(v,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,id:b,value:r,onChange:p})]}),Object(w.jsxs)(y,{htmlFor:u,children:["Number",Object(w.jsx)(v,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,id:u,value:s,onChange:p})]}),Object(w.jsx)(k,{type:"submit",children:"Add to contacts"})]})}var S,z,A,L=O.a.button(i||(i=Object(h.a)(["\n  display: inline-block;\n  width: 30%;\n  border-width: 0;\n  line-height: 40px;\n  text-transform: uppercase;\n  font-size: 14px;\n  background-color: green;\n  cursor: pointer;\n"]))),B=O.a.ul(s||(s=Object(h.a)(["\n  padding: 40px 50px;\n  margin: 50px auto 0;\n  list-style: none;\n  max-width: 400px;\n"]))),F=O.a.p(l||(l=Object(h.a)(['\n  display: block;\n  padding: 0 15px;\n  color: black;\n  font-family: "Roboto", sans-serif;\n  font-size: 18px;\n']))),J=O.a.li(b||(b=Object(h.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),D=function(n){var e=n.contacts,t=n.onDeleteContacts;return Object(w.jsx)(B,{children:e.map((function(n){var e=n.id,a=n.name,r=n.number;return Object(w.jsxs)(J,{children:[Object(w.jsxs)(F,{children:[a," : ",r]}),Object(w.jsx)(L,{onClick:function(){return t(e)},children:"Delete"})]},e)}))})},E=O.a.label(S||(S=Object(h.a)(["\n  display: block;\n  margin: 50px auto 0;\n  width: 400px;\n  color: green;\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 20px;\n"]))),N=O.a.input(z||(z=Object(h.a)(["\n  display: block;\n  padding: 0 0 0 15px;\n  margin: 10px 0 15px;\n  width: 100%;\n  border-width: 0;\n  line-height: 40px;\n  color: black;\n  border: solid green 1px;\n"]))),R=function(n){var e=n.value,t=n.onChange,a=n.onBlur;return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(E,{htmlFor:"lab",children:["Find contacts by name",Object(w.jsx)(N,{type:"text",id:"lab",value:e,onChange:t,onBlur:a})]})})},I=O.a.h2(A||(A=Object(h.a)(['\n  display: block;\n  margin: 50px auto 0;\n  width: 400px;\n  font-family: "Roboto", sans-serif;\n  color: green;\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 34px;\n'])));function Z(){var n=Object(d.useState)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]),e=Object(m.a)(n,2),t=e[0],a=e[1],r=Object(d.useState)(""),o=Object(m.a)(r,2),c=o[0],i=o[1],s="contacts";Object(d.useEffect)((function(){var n=JSON.parse(localStorage.getItem(s));n&&a(n)}),[]),Object(d.useEffect)((function(){localStorage.setItem(s,JSON.stringify(t))}),[t]);return Object(w.jsxs)("div",{children:[Object(w.jsx)(I,{children:"Phonebook"}),Object(w.jsx)(C,{onSubmit:function(n,e){if(t.find((function(e){return e.name.toLowerCase()===n.toLocaleLowerCase()})))alert("".concat(n," is already in contacts"));else{var r={id:Object(f.a)(),name:n,number:e};a((function(n){return[r].concat(Object(x.a)(n))}))}}}),Object(w.jsx)(I,{children:"Contacts"}),Object(w.jsx)(R,{value:c,onChange:function(n){i(n.currentTarget.value)},onBlur:function(n){n.currentTarget.value="",i("")}}),Object(w.jsx)(D,{contacts:t.filter((function(n){return n.name.toLowerCase().includes(c.toLocaleLowerCase())})),onDeleteContacts:function(n){a((function(e){return e.filter((function(e){return e.id!==n}))}))}})]})}t(21);j.a.render(Object(w.jsx)(u.a.StrictMode,{children:Object(w.jsx)(Z,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.22d8953e.chunk.js.map