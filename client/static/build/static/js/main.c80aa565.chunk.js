(this.webpackJsonpnorthwestlabs=this.webpackJsonpnorthwestlabs||[]).push([[0],{116:function(e,t,a){},117:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(38),c=a.n(l),i=(a(90),a(17)),m=a.n(i),o=a(83),s=a(19),u=a(65),d=a(66),p=a(84),E=a(68),f=a(85),h=a(33),v=a.n(h),g=a(48),b=r.a.createContext(),x=a(119),N=a(120),y=a(79),C=a(7),O=a(24),k=a(125),w=a(126),j=a(123),S=a(69),T=a(73);var P=function(e){var t=r.a.useContext(b);return r.a.createElement(k.a,{expand:"lg"},r.a.createElement(C.b,{to:"/"},r.a.createElement(k.a.Brand,null,r.a.createElement("img",{alt:"Arctic.com",src:"media/starfleet-32.png"}))),r.a.createElement(k.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(k.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(w.a,{className:"mr-auto"},r.a.createElement(C.b,{to:"/",className:"nav-link"},"Home"),r.a.createElement(C.b,{to:"/about",className:"nav-link"},"About"),r.a.createElement(C.b,{to:"/help",className:"nav-link"},"Help")),r.a.createElement(w.a,null,r.a.createElement(w.a,{className:"mr-auto pr-4"},r.a.createElement(C.b,{to:"/cart",className:"nav-link"},r.a.createElement(S.a,{icon:T.a,className:"mr-2"}),t.cartCount)),r.a.createElement(j.a,{title:"Welcome, Bingdeng",alignRight:!0},r.a.createElement(j.a.Item,null,"My Account"),r.a.createElement(j.a.Divider,null),r.a.createElement(j.a.Item,{href:"#action/3.4"},"Logout")))))};var q=function(e){var t=r.a.useContext(b);if(!t.categories)return r.a.createElement("div",null,"Loading...");for(var a={},n=0,l=0,c=Object.values(t.products);l<c.length;l++){var i=c[l];a[i.category.id]=(a[i.category.id]||0)+1,n+=1}return r.a.createElement(w.a,{className:"flex-column"},r.a.createElement(C.b,{to:"/",className:"nav-link"},"All Products (",n,")"),r.a.createElement(w.a.Item,null,Object.values(t.categories).map((function(e){return r.a.createElement(C.b,{to:"/category/".concat(e.id),key:e.id,className:"nav-link"},e.title," (",a[e.id],")")}))))};var A=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Recent:"))};var G=function(e){return r.a.createElement("div",{className:"text-center"},"Arctic.com  \xa9 ",(new Date).getFullYear())},B=a(78);var F=function(e){var t=r.a.useContext(b),a=Object(O.f)(),n=r.a.useState("1"),l=Object(s.a)(n,2),c=l[0],i=l[1],m=Object(O.g)("/product/:pid"),o=t.products[m.params.pid];return o?r.a.createElement("div",{className:"m-4"},r.a.createElement("div",{className:"float-right border rounded m-2 p-2",style:{width:"300px",height:"300px"}},r.a.createElement("img",{alt:o.name,src:"/media/products/".concat(o.filename,"-").concat(c,".png"),className:"w-100"}),r.a.createElement("div",null,["1","2","3","4"].map((function(e){return r.a.createElement("img",{key:o.id+e,alt:o.name,src:"/media/products/".concat(o.filename,"-").concat(e,".png"),className:"border rounded mt-3 mx-1",style:{height:"30px",width:"30px"},onMouseEnter:function(t){i(e)}})})))),r.a.createElement("h1",null,o.name),r.a.createElement("h2",null,"$",o.price),r.a.createElement("p",null,o.description),r.a.createElement("p",{className:"mt-5"},r.a.createElement(B.a,{variant:"warning",onClick:function(e){t.addToCart(o.id),a.push("/cart")}},"Add to Cart"))):r.a.createElement("h2",{className:"m-4 text-center"},"Product not found")},z=a(127);var H=function(e){return r.a.createElement(z.a,{className:"mx-2 my-4"},r.a.createElement(C.b,{to:"/product/".concat(e.product.id),className:"btn btn-sm btn-dark position-absolute px-2 py-1 rounded shadow",style:{right:"5px",top:"5px",opacity:"90%"}},"Details"),r.a.createElement(z.a.Img,{variant:"top",alt:e.product.name,src:"/media/products/".concat(e.product.filename,"-1.png"),className:"p-2"}),r.a.createElement(z.a.Header,{className:"border-top text-center"},r.a.createElement(z.a.Title,{className:"mb-2"},e.product.name),r.a.createElement(z.a.Text,null,"$",e.product.price)))};var I=function(e){var t=r.a.useContext(b),a=Object.values(t.products),n=Object(O.g)("/category/:cid"),l=n?parseInt(n.params.cid):0;l&&(a=a.filter((function(e){return e.category.id===l})));for(var c=[],i=0;i<a.length;i+=4)c.push(a.slice(i,i+4));return r.a.createElement(x.a,{fluid:!0},r.a.createElement(N.a,null,r.a.createElement(y.a,null,r.a.createElement("h1",{className:"mt-3"},t.categories[l]?t.categories[l].title:"All Products"))),c.map((function(e,t){return r.a.createElement(N.a,{key:t},e.map((function(e){return r.a.createElement(y.a,{md:"3",key:e.id},r.a.createElement(H,{product:e}))})))})))},L=a(121);function M(e){return parseFloat(e).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}var D=function(e){return r.a.createElement(x.a,{fluid:!0},r.a.createElement(N.a,null,r.a.createElement(y.a,null,r.a.createElement("h1",{className:"mt-3"},"Shopping Cart"))),r.a.createElement(N.a,null,r.a.createElement(y.a,null,r.a.createElement(W,null))),r.a.createElement(N.a,null,r.a.createElement(y.a,{className:"text-center"},r.a.createElement(C.b,{to:"/checkout",className:"btn btn-success",role:"button"},"Checkout"))))};function W(e){for(var t=r.a.useContext(b),a=[],n=0,l=0,c=Object.entries(t.cart);l<c.length;l++){var i=c[l],m=Object(s.a)(i,2),o=m[0],u=m[1],d=t.products[o];d&&(n+=u*d.price,a.push({product:d,qty:u,extended:u*d.price}))}return r.a.createElement(L.a,{borderless:!0,className:"mt-4"},r.a.createElement("tbody",null,r.a.createElement("tr",{className:"border-bottom"},r.a.createElement("th",{className:"text-center"},"Product"),r.a.createElement("th",{className:"text-center"},"Quantity"),r.a.createElement("th",{className:"text-center"},"Price"),r.a.createElement("th",{className:"text-center"},"Extended"),r.a.createElement("th",null)),a.map((function(e){return r.a.createElement("tr",{key:e.product.id},r.a.createElement("td",null,r.a.createElement("img",{alt:e.product.name,src:"/media/products/".concat(e.product.filename,"-1.png"),className:"border rounded mr-3",style:{height:"60px",width:"60px"}}),e.product.name),r.a.createElement("td",{className:"text-right"},e.qty),r.a.createElement("td",{className:"text-right"},M(e.product.price)),r.a.createElement("td",{className:"text-right"},M(e.extended)),r.a.createElement("td",{className:"text-center"},r.a.createElement(B.a,{variant:"outline-secondary",size:"sm",onClick:function(a){t.removeFromCart(e.product.id)}},"Remove")))})),r.a.createElement("tr",{className:"border-top"},r.a.createElement("th",{className:"text-center"},"Total"),r.a.createElement("th",null),r.a.createElement("th",null),r.a.createElement("th",{className:"text-right"},M(n)),r.a.createElement("th",null))))}var _=a(122),R=a(124),U=a(26),V=a(31),$=a(82),J=Object($.a)("pk_test_CGqDTM9y0RuDuWjH23HpNoyb00wMuSzv3B");var Y=function(e){return r.a.createElement(V.Elements,{stripe:J},r.a.createElement(Q,null))},Q=function(e){var t=r.a.useContext(b),a=Object(O.f)(),n=Object(V.useStripe)(),l=Object(V.useElements)(),c=t.getCartTotal(),i=r.a.useState(null),o=Object(s.a)(i,2),u=o[0],d=o[1];return r.a.createElement(U.c,{initialValues:{name:"Bingdeng",address1:"1965 N 40 W",address2:"Apt 123",city:"Provo",state:"UT",zipcode:"84602"},validateOnChange:!1,validateOnBlur:!1,validate:function(e){return console.log("validating",e),{}},onSubmit:function(e,r){var i,o,u,p,E,f,h,g,b,x;return m.a.async((function(N){for(;;)switch(N.prev=N.next){case 0:for(console.log("submit",e),d(null),i=[],o=0,u=Object.entries(t.cart);o<u.length;o++)p=u[o],E=Object(s.a)(p,2),f=E[0],h=E[1],(g=t.products[f])&&i.push({pid:f,qty:h,price:g.price});return N.next=6,m.a.awrap(v.a.post("http://localhost:8000/api/sale/",{name:e.name,address1:e.address1,address2:e.address2,city:e.city,state:e.state,zipcode:e.zipcode,total:c,items:i}));case 6:return b=N.sent,console.log(b.data),N.next=10,m.a.awrap(n.confirmCardPayment(b.data.client_secret,{payment_method:{card:l.getElement(V.CardElement),billing_details:{name:e.name}}}));case 10:if(x=N.sent,console.log(x),r.setSubmitting(!1),!x.error){N.next=16;break}return d(x.error.message),N.abrupt("return");case 16:t.clearCart(),a.push("/receipt");case 18:case"end":return N.stop()}}))}},(function(e){return r.a.createElement(r.a.Fragment,null,u&&r.a.createElement("div",{className:"mb-3 text-center text-danger"},u),r.a.createElement(Z,{form:e,total:c}))}))},Z=function(e){return r.a.createElement(U.b,null,r.a.createElement(x.a,{fluid:!0},r.a.createElement(N.a,null,r.a.createElement(y.a,null,r.a.createElement("h1",{className:"mt-3"},"Checkout"))),r.a.createElement(N.a,{className:"my-3"},r.a.createElement(y.a,{md:"6"},r.a.createElement(z.a,null,r.a.createElement(z.a.Header,null,r.a.createElement(z.a.Title,null,"Shipping")),r.a.createElement(z.a.Body,null,r.a.createElement(K,{title:"Name:",name:"name",type:"text"}),r.a.createElement(K,{title:"Address1:",name:"address1",type:"text"}),r.a.createElement(K,{title:"Address2:",name:"address2",type:"text"}),r.a.createElement(K,{title:"City:",name:"city",type:"text"}),r.a.createElement(K,{title:"State:",name:"state",type:"text"}),r.a.createElement(K,{title:"Zip:",name:"zipcode",type:"text"})))),r.a.createElement(y.a,{md:"6"},r.a.createElement(z.a,null,r.a.createElement(z.a.Header,null,r.a.createElement(z.a.Title,null,"Payment")),r.a.createElement(z.a.Body,null,r.a.createElement(V.CardElement,null))),r.a.createElement("div",{className:"mt-4"},"Your card will be charged ",r.a.createElement("b",null,M(e.total)),"."),r.a.createElement("div",{className:"text-center mt-4"},r.a.createElement(B.a,{variant:"success",type:"submit",className:"d-inline-flex align-items-center",disabled:e.form.isSubmitting},e.form.isSubmitting&&r.a.createElement(_.a,{className:"mr-2",size:"sm",animation:"border"}),"Purchase"))))))},K=function(e){return r.a.createElement(U.a,{name:e.name},(function(t){return r.a.createElement(R.a.Group,null,e.title&&r.a.createElement(R.a.Label,null,e.title),r.a.createElement(R.a.Control,Object.assign({type:"text",disabled:t.form.isSubmitting,placeholder:e.placeholder},t.field)),t.meta.touched&&t.meta.error&&r.a.createElement("div",{className:"text-danger"},t.meta.error))}))};var X=function(e){return r.a.createElement(ee,null)},ee=function(e){return r.a.createElement(U.c,{initialValues:{name:"Conrad Fox",address1:"1234",address2:"5678",city:"Provo",state:"UT",zipcode:"84602"},validateOnChange:!1,validateOnBlur:!1,validate:function(e){return console.log("validating",e),{}},onSubmit:function(e,t){return m.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("submit",e),t.next=3,m.a.awrap(new Promise((function(e){setTimeout((function(){e()}),2e3)})));case 3:console.log("after the 2 seconds");case 4:case"end":return t.stop()}}))}},(function(e){return r.a.createElement(te,{form:e,total:50})}))},te=function(e){return r.a.createElement(U.b,null,r.a.createElement(ae,{title:"Name:",name:"name",type:"text"}),r.a.createElement("div",null,"More inputs here"),r.a.createElement("div",null,"Submit button somewhere here"))},ae=function(e){return r.a.createElement(U.a,{name:e.name},(function(t){return r.a.createElement(R.a.Group,null,e.title&&r.a.createElement(R.a.Label,null,e.title),r.a.createElement(R.a.Control,Object.assign({type:e.type,placeholder:e.placeholder},t.field)),t.meta.touched&&t.meta.error&&r.a.createElement("div",{className:"text-danger"},t.meta.error))}))};var ne=function(e){return r.a.createElement(x.a,{fluid:!0},r.a.createElement(N.a,null,r.a.createElement(y.a,null,r.a.createElement("h1",{className:"mt-3"},"Thanks"),"Thank you for your order!")))};var re=function(e){return r.a.createElement(x.a,{fluid:!0,className:"p-4"},r.a.createElement(N.a,{noGutters:!0},r.a.createElement(y.a,null,r.a.createElement("div",{className:"text-center"},r.a.createElement("img",{alt:"Arctic.com",src:"media/Logo250.png"})))),r.a.createElement(N.a,{noGutters:!0,className:"mt-5"},r.a.createElement(y.a,null,"Culpa exercitation duis ipsum aliquip magna cupidatat eiusmod cupidatat et fugiat culpa nulla non. Minim voluptate cupidatat ea reprehenderit do exercitation sunt reprehenderit enim aute. Veniam est incididunt amet culpa exercitation. Ut qui nisi minim non id id dolore sint pariatur.")),r.a.createElement(N.a,{noGutters:!0,className:"mt-4"},r.a.createElement(y.a,null,"Incididunt magna reprehenderit commodo dolor mollit est commodo ut et sint. Lorem laboris non proident Lorem ex consectetur anim elit commodo velit. Officia ipsum est exercitation amet eu dolore cillum velit nisi fugiat culpa et enim sunt. Enim qui voluptate anim adipisicing magna irure reprehenderit nulla aute. Occaecat ex amet officia sint proident ex sint Lorem. Elit ullamco id officia qui fugiat. Incididunt velit officia amet nostrud quis incididunt sint sint ipsum non commodo irure proident.")))};var le=function(e){return r.a.createElement(x.a,{fluid:!0,className:"p-4"},r.a.createElement(N.a,{noGutters:!0},r.a.createElement(y.a,null,r.a.createElement("h1",null,"Help"))),r.a.createElement(N.a,{noGutters:!0},r.a.createElement(y.a,null,"Culpa exercitation duis ipsum aliquip magna cupidatat eiusmod cupidatat et fugiat culpa nulla non. Minim voluptate cupidatat ea reprehenderit do exercitation sunt reprehenderit enim aute. Veniam est incididunt amet culpa exercitation. Ut qui nisi minim non id id dolore sint pariatur.")))};a(116);var ce=function(e){return r.a.createElement(C.a,null,r.a.createElement(x.a,{fluid:!0,className:"p-0 min-vh-100 d-flex flex-column"},r.a.createElement(N.a,{noGutters:!0,className:"flex-grow-0 flex-shrink-0 border-bottom shadow-sm"},r.a.createElement(y.a,{className:"px-3 py-2"},r.a.createElement(P,null))),r.a.createElement(N.a,{noGutters:!0,className:"flex-grow-1"},r.a.createElement(y.a,{md:"2",className:"px-3 py-4 border-right"},r.a.createElement(q,null)),r.a.createElement(y.a,{md:"8"},r.a.createElement(O.c,null,r.a.createElement(O.a,{path:"/product"},r.a.createElement(F,null)),r.a.createElement(O.a,{path:"/cart"},r.a.createElement(D,null)),r.a.createElement(O.a,{path:"/checkout-starter"},r.a.createElement(X,null)),r.a.createElement(O.a,{path:"/checkout"},r.a.createElement(Y,null)),r.a.createElement(O.a,{path:"/receipt"},r.a.createElement(ne,null)),r.a.createElement(O.a,{path:"/about"},r.a.createElement(re,null)),r.a.createElement(O.a,{path:"/help"},r.a.createElement(le,null)),r.a.createElement(O.a,{path:"/"},r.a.createElement(I,null)))),r.a.createElement(y.a,{md:"2",className:"px-3 py-4 border-left"},r.a.createElement(A,null))),r.a.createElement(N.a,{noGutters:!0,className:"flex-grow-0 flex-shrink-0"},r.a.createElement(y.a,{className:"px-3 py-2"},r.a.createElement(G,null)))))},ie=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(E.a)(t).call(this,e))).addToCart=function(e){a.setState(Object(g.a)(a.state,(function(t){t.cart[e]=(t.cart[e]||0)+1;for(var a=0,n=0,r=Object.values(t.cart);n<r.length;n++){a+=r[n]}t.cartCount=a})))},a.removeFromCart=function(e){a.setState(Object(g.a)(a.state,(function(t){delete t.cart[e];for(var a=0,n=0,r=Object.values(t.cart);n<r.length;n++){a+=r[n]}t.cartCount=a})))},a.clearCart=function(){a.setState(Object(g.a)(a.state,(function(e){e.cart={},e.cartCount=0})))},a.getCartTotal=function(){for(var e=0,t=0,n=Object.entries(a.state.cart);t<n.length;t++){var r=n[t],l=Object(s.a)(r,2),c=l[0],i=l[1],m=a.state.products[c];m&&(e+=i*m.price)}return e},a.actions={addToCart:a.addToCart,removeFromCart:a.removeFromCart,clearCart:a.clearCart,getCartTotal:a.getCartTotal},a.state={categories:{},products:{},cart:{},cartCount:0},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(b.Provider,{value:Object(o.a)({},this.state,{},this.actions)},r.a.createElement(ce,null))}},{key:"componentDidMount",value:function(){var e,t,a,n,r,l,c,i,o,s,u,d,p,E,f,h;return m.a.async((function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,m.a.awrap(v.a.get("http://localhost:8000/api/category"));case 2:for(e=g.sent,t={},a=!0,n=!1,r=void 0,g.prev=7,l=e.data[Symbol.iterator]();!(a=(c=l.next()).done);a=!0)i=c.value,t[i.id]=i;g.next=15;break;case 11:g.prev=11,g.t0=g.catch(7),n=!0,r=g.t0;case 15:g.prev=15,g.prev=16,a||null==l.return||l.return();case 18:if(g.prev=18,!n){g.next=21;break}throw r;case 21:return g.finish(18);case 22:return g.finish(15);case 23:return g.next=25,m.a.awrap(v.a.get("http://localhost:8000/api/product"));case 25:for(o=g.sent,s={},u=!0,d=!1,p=void 0,g.prev=30,E=o.data[Symbol.iterator]();!(u=(f=E.next()).done);u=!0)h=f.value,s[h.id]=h;g.next=38;break;case 34:g.prev=34,g.t1=g.catch(30),d=!0,p=g.t1;case 38:g.prev=38,g.prev=39,u||null==E.return||E.return();case 41:if(g.prev=41,!d){g.next=44;break}throw p;case 44:return g.finish(41);case 45:return g.finish(38);case 46:this.setState({categories:t,products:s});case 47:case"end":return g.stop()}}),null,this,[[7,11,15,23],[16,,18,22],[30,34,38,46],[39,,41,45]])}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},86:function(e,t,a){e.exports=a(117)},90:function(e,t,a){}},[[86,1,2]]]);
//# sourceMappingURL=main.c80aa565.chunk.js.map