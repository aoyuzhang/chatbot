(this.webpackJsonpchatbot=this.webpackJsonpchatbot||[]).push([[0],{53:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a(21),r=a.n(n),s=a(3),o=a(4),u=a(6),l=a(5),c=a(27),m=a(22),d=a.n(m),b=a(9),p=a(26),g=a.n(p),h=a(2),f=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var i;Object(s.a)(this,a);var n=(i=t.call(this,e)).props.steps;console.log(n);var r=n.submit,o=n.name,u=n.email,l=n.phone,c=n.zip;return i.state={submit:r,name:o,email:u,phone:l,zip:c},i}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e={submit:this.state.submit.value,name:this.state.name.value,phone:this.state.phone.value,email:this.state.email.value,zip:this.state.zip.value};g.a.post("/api",e).then((function(e){console.log(e.status)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return Object(h.jsx)("div",{children:" Thank you! Your data was submitted successfully!"})}}]),a}(i.Component),v={width:"400px",height:"500px"},j={background:"#f5f8fb",fontFamily:"Helvetica Neue",headerBgColor:"#EF6C00",headerFontColor:"#fff",headerFontSize:"15px",botBubbleColor:"#EF6C00",botFontColor:"#fff",userBubbleColor:"#fff",userFontColor:"#4a4a4a"},y=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(h.jsx)(b.ThemeProvider,{theme:j,children:Object(h.jsx)(d.a,Object(c.a)({steps:[{id:"intro",message:"Do you agree to suck dick before you sit on it?",trigger:"intro-user"},{id:"intro-user",options:[{value:"y0",label:"yes",trigger:"yes-response"},{value:"n0",label:"No",trigger:"no-response"}]},{id:"yes-response",message:"Great!",trigger:"q-name"},{id:"no-response",message:"Sorry to hear that.",end:!0},{id:"q-name",message:"What is your name?",trigger:"name"},{id:"name",user:!0,validator:function(e){return!!/^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/.test(e)||"Please input alphabet characters only."},trigger:"q-email"},{id:"q-email",message:"What is your email?",trigger:"email"},{id:"email",user:!0,validator:function(e){return!!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)||"Please enter a valid email."},trigger:"q-zip"},{id:"q-zip",message:"What is your 5 digits or 9 digits zip code?",trigger:"zip"},{id:"zip",user:!0,validator:function(e){return!!/^[0-9]{5}(?:-[0-9]{4})?$/.test(e)||"Please enter a valid zip code."},trigger:"q-phone"},{id:"q-phone",message:"What is your phone number?",trigger:"phone"},{id:"phone",user:!0,validator:function(e){return!!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(e)||"Please enter a valid phone number."},trigger:"q-submit"},{id:"q-submit",message:"Do you wish to submit?",trigger:"submit"},{id:"submit",options:[{value:"y",label:"Yes",trigger:"end-message"},{value:"n",label:"no",trigger:"no-submit"}]},{id:"no-submit",message:"Your information was not submitted.",end:!0},{id:"end-message",component:Object(h.jsx)(f,{}),asMessage:!0,end:!0}]},v))})}}]),a}(i.Component),O=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(y,{})})}}]),a}(i.Component);r.a.render(Object(h.jsx)(O,{}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.062fe1fc.chunk.js.map