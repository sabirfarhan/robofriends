(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),l=(n(12),n(3)),i=n(4),s=n(6),u=n(5),h=function(e){var t=e.id,n=e.name,a=e.email;return r.a.createElement("div",{className:"bg-light-blue dib pa3 br3 ma2 grow shadow-5 bw5 tc"},r.a.createElement("img",{src:"https://robohash.org/".concat(t,"?200x200"),alt:"robot"}),r.a.createElement("div",null,r.a.createElement("h2",null,n),r.a.createElement("p",null,a)))},m=function(e){var t=e.robots;return r.a.createElement("div",null,t.map((function(e,n){return r.a.createElement(h,{key:t[n].id,id:t[n].id,name:t[n].name,email:t[n].email})})))},d=function(e){var t=e.searchChange;return r.a.createElement("div",null,r.a.createElement("input",{className:"pa2 ba b--grey bg-lightest-purple br4 bw1 tc ma3",type:"search",placeholder:"search robots",onChange:t}))},f=(n(13),function(e){return r.a.createElement("div",{style:{overflow:"scroll",border:"1px solid white",height:"1000px"}},e.children)}),b=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this;if(0===this.state.robots.length)return r.a.createElement("h1",{className:"f1 tc"},"loading");var t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return r.a.createElement("div",{className:"tc ma2"},r.a.createElement("h1",{className:"f1"},"robofriends"),r.a.createElement(d,{searchChange:this.onSearchChange}),r.a.createElement(f,null,r.a.createElement(m,{robots:t})))}}]),n}(a.Component);n(14),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.d6d565c9.chunk.js.map