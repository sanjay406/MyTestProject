(this["webpackJsonpfirst-react-app"]=this["webpackJsonpfirst-react-app"]||[]).push([[0],{20:function(e,t,a){e.exports=a(35)},26:function(e,t,a){},27:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},28:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(5),l=(a(21),a(0)),r=a.n(l),c=a(18),m=a.n(c),s=(a(12),a(26),a(27),a(28),a(7)),o=a(1);var u=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null," Welcome to Sanjay Page"),r.a.createElement("p",null,"Hi, Welcome to my blog"),r.a.createElement("p",null,"This blog contains details about latest news"),r.a.createElement("p",null,"cricketing updates"))};var i=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null," This is Login Page"))},E=[{name:"sanjay.bajjuri",battingstyle:"Right Handed Batsmen",bowlingstyle:"Right Handed Bowler"},{name:"vinay.bajjuri",battingstyle:"Right Handed Batsmen",bowlingstyle:"Left Handed Bowler"},{name:"suryansh.bajjuri",battingstyle:"Left Handed Batsmen",bowlingstyle:"Right Handed Bowler"}],p=function(e){var t=e.playerDetails;return r.a.createElement(r.a.Fragment,null,t.map((function(e,t){return r.a.createElement(s.b,{key:t,to:"/Selection/".concat(e.name)},r.a.createElement("h2",null,e.name))})))};var d=function(){return fetch("/api/"),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Available Players For Selection:"),r.a.createElement(p,{playerDetails:E}))},h=a(8),v=a.n(h),f=a(10),b=function(){return r.a.createElement("h1",null,"404 : Page Not Found !")},g=function(e){var t=e.name,a=e.upvotes,n=e.setLatestData,l=function(){var e=Object(f.a)(v.a.mark((function e(){var a,l;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Method called here"),e.next=3,fetch("/api/playerlist/".concat(t,"/upvote"),{method:"post"});case 3:return a=e.sent,e.next=6,a.json();case 6:l=e.sent,n(l);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Upvotes section:"),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return l()}},"Add UpVote"),r.a.createElement("p",null,"This player has been selectd by ",a," times"))},y=function(e){var t=e.name,a=e.setLatestData,c=Object(l.useState)(""),m=Object(n.a)(c,2),s=m[0],o=m[1],u=Object(l.useState)(""),i=Object(n.a)(u,2),E=i[0],p=i[1],d=function(){var e=Object(f.a)(v.a.mark((function e(){var n,l;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/playerlist/".concat(t,"/add-comment"),{method:"post",body:JSON.stringify({username:s,text:E}),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:l=e.sent,a(l),o(""),p("");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("h3",null,"Add a comment"),r.a.createElement("label",null,"Name:"),r.a.createElement("input",{type:"text",value:s,onChange:function(e){return o(e.target.value)}}),r.a.createElement("label",null," Comment:"),r.a.createElement("textarea",{rows:"4",cols:"50",value:E,onChange:function(e){return p(e.target.value)}},">"),r.a.createElement("button",{onClick:function(){return d()}},"Add Comment")))},N=function(e){var t=e.match.params.name,a=E.find((function(e){return e.name===t})),c=Object(l.useState)({upvotes:0,comments:[]}),m=Object(n.a)(c,2),s=m[0],o=m[1],u=E.filter((function(e){return e.name!==t}));return Object(l.useEffect)((function(){console.log("Method called"),function(){var e=Object(f.a)(v.a.mark((function e(){var a,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/getallplayers/".concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,console.log(n),o(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[t]),a?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null," Player has ",s.upvotes),r.a.createElement(g,{name:a.name,upvotes:s.upvotes,setLatestData:o}),r.a.createElement("div",null,"Comments are: ",s.comments.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("h2",null,e.username),r.a.createElement("h4",null,e.text))}))),r.a.createElement("h1",null," Player Name : ",a.name," "),r.a.createElement("h1",null," Player Batting Style ",a.battingstyle," "),r.a.createElement("h1",null," Player Bowling Style :",a.bowlingstyle," "),r.a.createElement(y,{name:a.name,setLatestData:o}),r.a.createElement("br",null),r.a.createElement("h1",null,"other Players For Selection:"),r.a.createElement(p,{playerDetails:u})):r.a.createElement(b,null)},j={firstName:"Sanjay",middleName:"Bajjuri",lastName:"Bajjuri",phoneNumber:1545154,age:25};var w=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("h1",null," First Name")),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("input",{type:"text",value:j.firstName}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("h1",null," Middle Name")),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("input",{type:"text",value:j.middleName}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("h1",null," Last Name")),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("input",{type:"text",value:j.lastName}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("h1",null," Phone Number")),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("input",{type:"text",value:j.phoneNumber}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("h1",null," Mail Id")),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("input",{type:"text"}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("h1",null," Age")),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("input",{type:"text",value:j.age}))),r.a.createElement("br",null),r.a.createElement("div",{className:"btn btn-primary",onClick:function(){return e=j,alert("Method called"),e.firstName=e.firstName+"123",void alert(e.firstName);var e}},"Submit")))},x=function(){return r.a.createElement("nav",null,r.a.createElement("ul",{className:"ulClass"},r.a.createElement("li",{className:"liClass"},r.a.createElement(s.b,{to:"/"},"Home")),r.a.createElement("li",{className:"liClass"},r.a.createElement(s.b,{to:"/Login"},"Login")),r.a.createElement("li",{className:"liClass"},r.a.createElement(s.b,{to:"/Account"},"Account")),r.a.createElement("li",{className:"liClass"},r.a.createElement(s.b,{to:"/Matches"},"Matches"))))};var C=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(x,null),r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/Home",component:u,exact:!0}),r.a.createElement(o.a,{path:"/Login",component:i}),r.a.createElement(o.a,{path:"/Account",component:w}),r.a.createElement(o.a,{path:"/Matches",component:d}),r.a.createElement(o.a,{path:"/Selection/:name",component:N}),r.a.createElement(o.a,{component:b})))))};m.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.5d8359c8.chunk.js.map