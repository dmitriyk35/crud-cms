(this["webpackJsonpcrud-cms"]=this["webpackJsonpcrud-cms"]||[]).push([[0],{165:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(33),s=a.n(l),i=(a(85),a(23)),o=a(7),c=(a(86),a(87),a(16)),m=a(17),u=a(19),h=a(18),d=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-dark bg-dark navbar-expand-lg"},r.a.createElement(i.b,{to:"/",className:"navbar-brand"},"Barber Shop Finder"),r.a.createElement("div",{className:"collpase navbar-collapse"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"navbar-item"},r.a.createElement(i.b,{to:"/",className:"nav-link"},"Services")),r.a.createElement("li",{className:"navbar-item"},r.a.createElement(i.b,{to:"/create",className:"nav-link"},"Create Appointment")),r.a.createElement("li",{className:"navbar-item"},r.a.createElement(i.b,{to:"/user",className:"nav-link"},"Create User")))))}}]),a}(n.Component),v=a(4),b=a(12),p=a.n(b),g=function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.service.username),r.a.createElement("td",null,e.service.firstname),r.a.createElement("td",null,e.service.lastname),r.a.createElement("td",null,e.service.phonenumber),r.a.createElement("td",null,e.service.email),r.a.createElement("td",null,e.service.description),r.a.createElement("td",null,e.service.duration),r.a.createElement("td",null,e.service.date.substring(0,10)),r.a.createElement("td",null,r.a.createElement(i.b,{to:"/edit/"+e.service._id},"edit")," | ",r.a.createElement("a",{href:"#",onClick:function(){e.deleteService(e.service._id)}},"delete")))},E=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).deleteService=n.deleteService.bind(Object(v.a)(n)),n.state={services:[]},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("http://localhost:5000/services/").then((function(t){e.setState({services:t.data})})).catch((function(e){console.log(e)}))}},{key:"deleteService",value:function(e){p.a.delete("http://localhost:5000/services/"+e).then((function(e){console.log(e.data)})),this.setState({services:this.state.services.filter((function(t){return t._id!==e}))})}},{key:"serviceList",value:function(){var e=this;return this.state.services.map((function(t){return r.a.createElement(g,{service:t,deleteService:e.deleteService,key:t._id})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Logged Services"),r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"thead-light"},r.a.createElement("tr",null,r.a.createElement("th",null,"Username"),r.a.createElement("th",null,"First Name"),r.a.createElement("th",null,"Last Name"),r.a.createElement("th",null,"Phone Number"),r.a.createElement("th",null,"Email"),r.a.createElement("th",null,"Description"),r.a.createElement("th",null,"Duration"),r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Actions"))),r.a.createElement("tbody",null,this.serviceList())))}}]),a}(n.Component),f=a(36),C=a.n(f),N=(a(66),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onChangeUsername=n.onChangeUsername.bind(Object(v.a)(n)),n.onChangeFirstName=n.onChangeFirstName.bind(Object(v.a)(n)),n.onChangeLastName=n.onChangeLastName.bind(Object(v.a)(n)),n.onChangePhoneNumber=n.onChangePhoneNumber.bind(Object(v.a)(n)),n.onChangeEmail=n.onChangeEmail.bind(Object(v.a)(n)),n.onChangeDescription=n.onChangeDescription.bind(Object(v.a)(n)),n.onChangeDuration=n.onChangeDuration.bind(Object(v.a)(n)),n.onChangeDate=n.onChangeDate.bind(Object(v.a)(n)),n.onSubmit=n.onSubmit.bind(Object(v.a)(n)),n.state={username:"",firstname:"",lastname:"",phonenumber:"",email:"",description:"",duration:0,date:new Date,users:[]},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("http://localhost:5000/services/"+this.props.match.params.id).then((function(t){e.setState({username:t.data.username,firstname:t.data.firstname,lastname:t.data.lastname,phonenumber:t.data.phonenumber,email:t.data.email,description:t.data.description,duration:t.data.duration,date:new Date(t.data.date)})})).catch((function(e){console.log(e)})),p.a.get("http://localhost:5000/users/").then((function(t){t.data.length>0&&e.setState({users:t.data.map((function(e){return e.username}))})})).catch((function(e){console.log(e)}))}},{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeFirstName",value:function(e){this.setState({firstname:e.target.value})}},{key:"onChangeLastName",value:function(e){this.setState({lastname:e.target.value})}},{key:"onChangePhoneNumber",value:function(e){this.setState({phonenumber:e.target.value})}},{key:"onChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"onChangeDescription",value:function(e){this.setState({description:e.target.value})}},{key:"onChangeDuration",value:function(e){this.setState({duration:e.target.value})}},{key:"onChangeDate",value:function(e){this.setState({date:e})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,firstname:this.state.firstname,lastname:this.state.lastname,phonenumber:this.state.phonenumber,email:this.state.email,description:this.state.description,duration:this.state.duration,date:this.state.date};console.log(t),p.a.post("http://localhost:5000/services/update/"+this.props.match.params.id,t).then((function(e){return console.log(e.data)})),window.location="/"}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Edit Service Log"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username: "),r.a.createElement("select",{ref:"userInput",required:!0,className:"form-control",value:this.state.username,onChange:this.onChangeUsername},this.state.users.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement("div",{className:"f_lName"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"First Name: "),r.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.firstname,onChange:this.onChangeFirstName})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Last Name: "),r.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.lastname,onChange:this.onChangeLastName}))),r.a.createElement("div",{className:"f_lName"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Mobile Number: "),r.a.createElement("input",{type:"number",required:!0,className:"form-control",value:this.state.phonenumber,onChange:this.onChangePhoneNumber})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email: "),r.a.createElement("input",{type:"email",required:!0,className:"form-control",value:this.state.email,onChange:this.onChangeEmail}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Description: "),r.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.description,onChange:this.onChangeDescription})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Duration (in minutes): "),r.a.createElement("input",{type:"text",className:"form-control",value:this.state.duration,onChange:this.onChangeDuration})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Date: "),r.a.createElement("div",null,r.a.createElement(C.a,{selected:this.state.date,onChange:this.onChangeDate}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Edit Service Log",className:"btn btn-primary"}))))}}]),a}(n.Component)),y=a(79),S=a.n(y),k=function(e){console.log(e)},D=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onChangeUsername=n.onChangeUsername.bind(Object(v.a)(n)),n.onChangeFirstName=n.onChangeFirstName.bind(Object(v.a)(n)),n.onChangeLastName=n.onChangeLastName.bind(Object(v.a)(n)),n.onChangePhoneNumber=n.onChangePhoneNumber.bind(Object(v.a)(n)),n.onChangeEmail=n.onChangeEmail.bind(Object(v.a)(n)),n.onChangeDescription=n.onChangeDescription.bind(Object(v.a)(n)),n.onChangeDuration=n.onChangeDuration.bind(Object(v.a)(n)),n.onChangeDate=n.onChangeDate.bind(Object(v.a)(n)),n.onSubmit=n.onSubmit.bind(Object(v.a)(n)),n.state={username:"",firstname:"",lastname:"",phonenumber:"",email:"",description:"",duration:0,date:new Date,users:[]},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("http://localhost:5000/users/").then((function(t){t.data.length>0&&e.setState({users:t.data.map((function(e){return e.username})),username:t.data[0].username})})).catch((function(e){console.log(e)}))}},{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeFirstName",value:function(e){this.setState({firstname:e.target.value})}},{key:"onChangeLastName",value:function(e){this.setState({lastname:e.target.value})}},{key:"onChangePhoneNumber",value:function(e){this.setState({phonenumber:e.target.value})}},{key:"onChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"onChangeDescription",value:function(e){this.setState({description:e.target.value})}},{key:"onChangeDuration",value:function(e){this.setState({duration:e.target.value})}},{key:"onChangeDate",value:function(e){this.setState({date:e})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,firstname:this.state.firstname,lastname:this.state.lastname,phonenumber:this.state.phonenumber,email:this.state.email,description:this.state.description,duration:this.state.duration,date:this.state.date};console.log(t),p.a.post("http://localhost:5000/services/add",t).then((function(e){return console.log(e.data)})),window.location="/"}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(S.a,{appId:"297560121491950",autoLoad:!1,fields:"name,email,picture",callback:k}),r.a.createElement("h3",null,"Create New Appointment With A Barber"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username: ")," ",r.a.createElement("select",{ref:"userInput",required:!0,className:"form-control",value:this.state.username,onChange:this.onChangeUsername},this.state.users.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement("div",{className:"f_lName"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"First Name: "),r.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.firstname,onChange:this.onChangeFirstName})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Last Name: "),r.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.lastname,onChange:this.onChangeLastName}))),r.a.createElement("div",{className:"f_lName"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Mobile Number: "),r.a.createElement("input",{type:"number",required:!0,className:"form-control",value:this.state.phonenumber,onChange:this.onChangePhoneNumber})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email: "),r.a.createElement("input",{type:"email",required:!0,className:"form-control",value:this.state.email,onChange:this.onChangeEmail}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Description: "),r.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.description,onChange:this.onChangeDescription})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Duration (in minutes): "),r.a.createElement("input",{type:"text",className:"form-control",value:this.state.duration,onChange:this.onChangeDuration})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Date: "),r.a.createElement("div",null,r.a.createElement(C.a,{selected:this.state.date,onChange:this.onChangeDate}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Create Service Log",className:"btn btn-primary"}))))}}]),a}(n.Component),j=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onChangeUsername=n.onChangeUsername.bind(Object(v.a)(n)),n.onSubmit=n.onSubmit.bind(Object(v.a)(n)),n.state={username:""},n}return Object(m.a)(a,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username};console.log(t),p.a.post("http://localhost:5000/users/add",t).then((function(e){return console.log(e.data)})),this.setState({username:""})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Create New User"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username: "),r.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.username,onChange:this.onChangeUsername})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Create User",className:"btn btn-primary"}))))}}]),a}(n.Component);var O=function(){return r.a.createElement(i.a,null,r.a.createElement("div",{className:"container"},r.a.createElement(d,null),r.a.createElement("br",null),r.a.createElement(o.a,{path:"/",exact:!0,component:E}),r.a.createElement(o.a,{path:"/edit/:id",component:N}),r.a.createElement(o.a,{path:"/create",component:D}),r.a.createElement(o.a,{path:"/user",component:j})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},80:function(e,t,a){e.exports=a(165)},85:function(e,t,a){},87:function(e,t,a){}},[[80,1,2]]]);
//# sourceMappingURL=main.0c2ce970.chunk.js.map