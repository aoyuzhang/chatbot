(this.webpackJsonpchatbot=this.webpackJsonpchatbot||[]).push([[0],{25:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r(10),i=r.n(n),s=r(3),o=r(4),u=r(7),c=r(6),p=r(11),d=r.n(p),l=r(1),g=function(e){Object(u.a)(r,e);var t=Object(c.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"render",value:function(){return Object(l.jsx)(d.a,{steps:[{id:"intro",message:"Do you agree to Terms and Condition?",trigger:"intro-user"},{id:"intro-user",options:[{value:"y",label:"yes",trigger:"yes-response"},{value:"n",label:"No",trigger:"no-response"}]},{id:"yes-response",message:"Great!",trigger:"q-name"},{id:"no-response",message:"Sorry to hear that.",end:!0},{id:"q-name",message:"What is your name?",trigger:"name"},{id:"name",user:!0,validator:function(e){return!!/^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/.test(e)||"Please input alphabet characters only."},trigger:"q-email"},{id:"q-email",message:"What is your email?",trigger:"email"},{id:"email",user:!0,validator:function(e){return!!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)||"Please enter a valid email."},trigger:"q-zip"},{id:"q-zip",message:"What is your zip code?",trigger:"zip"},{id:"zip",user:!0,validator:function(e){return!!/^[0-9]{5}(?:-[0-9]{4})?$/.test(e)||"Please enter a valid zip code."},trigger:"q-phone"},{id:"q-phone",message:"What is your phone number?",trigger:"phone"},{id:"phone",user:!0,validator:function(e){return!!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(e)||"Please enter a valid phone number."},end:!0}]})}}]),r}(a.Component),m=function(e){Object(u.a)(r,e);var t=Object(c.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"render",value:function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(g,{})})}}]),r}(a.Component);i.a.render(Object(l.jsx)(m,{}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.85343a19.chunk.js.map