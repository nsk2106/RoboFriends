(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(7),a=n.n(c),s=(n(12),n(2)),o=n(3),i=n(5),h=n(4),l=n(0),u=function(e){var t=e.name,n=e.email,r=e.id;return Object(l.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(l.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(r)}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("h2",{children:[" ",t," "]}),Object(l.jsxs)("p",{children:[" ",n]})]})]})},b=function(e){var t=e.robot,n=t.map((function(e,n){return Object(l.jsx)(u,{id:t[n].id,name:t[n].name,email:t[n].email},n)}));return Object(l.jsx)("div",{children:n})},d=function(e){e.searchfield;var t=e.searchchange;return Object(l.jsx)("div",{className:"pa2",children:Object(l.jsx)("input",{className:"pa3 ba bg-lighest-blue",type:"search",placeholder:"Search here",onChange:t})})},j=function(e){return Object(l.jsx)("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"},children:e.children})},f=(n(14),function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(o.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(l.jsx)("h1",{children:" Opps !!!! we have error "}):this.props.children}}]),n}(r.Component)),O=function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robot:[],searchfield:""},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robot:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robot,n=e.searchfield,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return 0===t.length?Object(l.jsx)("h1",{children:" Loading "}):Object(l.jsxs)("div",{className:"tc",children:[Object(l.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(l.jsx)(d,{searchchange:this.onSearchChange}),Object(l.jsx)(j,{children:Object(l.jsx)(f,{children:Object(l.jsx)(b,{robot:r})})})]})}}]),n}(r.Component),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};n(15);a.a.render(Object(l.jsx)(O,{}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.334a8c47.chunk.js.map