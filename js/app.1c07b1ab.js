(function(e){function t(t){for(var n,r,c=t[0],o=t[1],u=t[2],d=0,l=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&l.push(s[r][0]),s[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);f&&f(t);while(l.length)l.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,r=1;r<a.length;r++){var c=a[r];0!==s[c]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={app:0},s={app:0},i=[];function c(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-13070afa":"b102a892","chunk-1e166526":"06688715","chunk-2d0ab43a":"b9810e89","chunk-2d0b2ec8":"1362ac33","chunk-2d0d338e":"de478ccf","chunk-2d228901":"e6b8467c","chunk-32581b12":"44f90252","chunk-3fdfc446":"5f273f8e","chunk-452696c7":"7584429c","chunk-46733508":"96331bc7","chunk-71c50812":"615b1dff","chunk-84cc821a":"de8144cf","chunk-958bdcfa":"fe26c6f1","chunk-d55d3ce2":"3d42f4e1"}[e]+".js"}function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(e){var t=[],a={"chunk-13070afa":1,"chunk-1e166526":1,"chunk-32581b12":1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise((function(t,a){for(var n="css/"+({}[e]||e)+"."+{"chunk-13070afa":"f9f5b964","chunk-1e166526":"fbf3d3c4","chunk-2d0ab43a":"31d6cfe0","chunk-2d0b2ec8":"31d6cfe0","chunk-2d0d338e":"31d6cfe0","chunk-2d228901":"31d6cfe0","chunk-32581b12":"052fa6eb","chunk-3fdfc446":"31d6cfe0","chunk-452696c7":"31d6cfe0","chunk-46733508":"31d6cfe0","chunk-71c50812":"31d6cfe0","chunk-84cc821a":"31d6cfe0","chunk-958bdcfa":"31d6cfe0","chunk-d55d3ce2":"31d6cfe0"}[e]+".css",s=o.p+n,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===n||d===s))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){u=l[c],d=u.getAttribute("data-href");if(d===n||d===s)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||s,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[e],f.parentNode.removeChild(f),a(i)},f.href=s;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){r[e]=0})));var n=s[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,a){n=s[e]=[t,a]}));t.push(n[2]=i);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.src=c(e);var l=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(f);var a=s[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",l.name="ChunkLoadError",l.type=n,l.request=r,a[1](l)}s[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/forum-front-end-vue/",o.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=d;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0159":function(e,t,a){},"12ab":function(e,t,a){},2375:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"spinner"},[a("div",{staticClass:"bouncing-loader"},[a("div"),a("div"),a("div")])])}],s={name:"Spinner"},i=s,c=(a("2a09"),a("2877")),o=Object(c["a"])(i,n,r,!1,null,"4ff515c6",null);t["a"]=o.exports},"239f":function(e,t,a){},2708:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return i}));var n=a("c1df"),r=a.n(n),s={filters:{fromNow:function(e){return e?r()(e).fromNow():"-"}}},i={filters:{emptyImage:function(e){return e||"https://via.placeholder.com/350x220/DFDFDF?text=No+Image"}}}},"2a09":function(e,t,a){"use strict";a("72fe")},"2fa3":function(e,t,a){"use strict";a.d(t,"b",(function(){return u})),a.d(t,"a",(function(){return d}));a("d3b7");var n=a("bc3a"),r=a.n(n),s=a("3d20"),i=a.n(s),c="https://forum-express-api.herokuapp.com/api",o=r.a.create({baseURL:c});o.interceptors.request.use((function(e){var t=localStorage.getItem("token");return t&&(e.headers["Authorization"]="Bearer ".concat(t)),e}),(function(e){return Promise.reject(e)}));var u=o,d=i.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3})},4678:function(e,t,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=s,e.exports=r,r.id="4678"},"4cce":function(e,t,a){"use strict";var n=a("2fa3");t["a"]={addFavorite:function(e){var t=e.restaurantId;return n["b"].post("/favorite/".concat(t),null)},deleteFavorite:function(e){var t=e.restaurantId;return n["b"].delete("/favorite/".concat(t))},addLike:function(e){var t=e.restaurantId;return n["b"].post("/like/".concat(t),null)},deleteLike:function(e){var t=e.restaurantId;return n["b"].delete("/like/".concat(t))},addFollowing:function(e){var t=e.userId;return n["b"].post("/following/".concat(t),null)},deleteFollowing:function(e){var t=e.userId;return n["b"].delete("/following/".concat(t))},getCurrentUser:function(){return n["b"].get("/get_current_user")},get:function(e){var t=e.userId;return n["b"].get("/users/".concat(t))},getTopUsers:function(){return n["b"].get("/users/top")},update:function(e){var t=e.userId,a=e.formData;return n["b"].put("/users/".concat(t),a)}}},"4cf1":function(e,t,a){},"50b5":function(e,t,a){"use strict";a("4cf1")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"restaurant-forum"}},[a("Navbar"),a("main",{staticClass:"mt-5 bg-white",attrs:{role:"main"}},[a("router-view")],1)],1)},s=[],i=(a("4989"),a("ab8b"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"navbar navbar-expand-lg fixed-top navbar-dark bg-dark"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[e._v(" 餐廳評論網 ")]),e._m(0),a("div",{staticClass:"navbar-collapse collapse",attrs:{id:"navbarSupportedContent"}},[a("div",{staticClass:"ml-auto d-flex align-items-center"},[e.currentUser.isAdmin?a("router-link",{staticClass:"text-white mr-3",attrs:{to:"/admin"}},[e._v(" 管理員後台 ")]):e._e(),e.isAuthenticated?[a("router-link",{staticClass:"text-white mr-3",attrs:{to:{name:"user",params:{id:e.currentUser.id}}}},[e._v(" "+e._s(e.currentUser.name||"使用者")+" 您好 ")]),a("button",{staticClass:"btn btn-sm btn-outline-success my-2 my-sm-0",attrs:{type:"button"},on:{click:e.logout}},[e._v(" 登出 ")])]:e._e()],2)])],1)}),c=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],o=a("5530"),u=a("2f62"),d={name:"Navbar",computed:Object(o["a"])({},Object(u["b"])(["currentUser","isAuthenticated"])),methods:{logout:function(){this.$store.commit("revokeAuthentication"),this.$router.push("/signin")}}},l=d,f=(a("571c"),a("2877")),b=Object(f["a"])(l,i,c,!1,null,"1f8e57d5",null),p=b.exports,m={components:{Navbar:p}},g=m,h=(a("fc60"),Object(f["a"])(g,r,s,!1,null,"3962ed93",null)),v=h.exports,j=a("1da1"),k=(a("96cf"),a("d3b7"),a("3ca3"),a("ddb0"),a("caad"),a("b0c0"),a("2532"),a("8c4f")),y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",[e._v(" 404 Page Not Found ")])},w=[],x={name:"NotFound"},P=x,_=Object(f["a"])(P,y,w,!1,null,null,null),C=_.exports,O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container py-5"},[a("form",{staticClass:"w-100",on:{submit:function(t){return t.preventDefault(),t.stopPropagation(),e.handleSubmit.apply(null,arguments)}}},[e._m(0),a("div",{staticClass:"form-label-group mb-2"},[a("label",{attrs:{for:"email"}},[e._v("email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{id:"email",name:"email",type:"email",placeholder:"email",autocomplete:"username",required:"",autofocus:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),a("div",{staticClass:"form-label-group mb-3"},[a("label",{attrs:{for:"password"}},[e._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{id:"password",name:"password",type:"password",placeholder:"Password",autocomplete:"current-password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),a("button",{staticClass:"btn btn-lg btn-primary btn-block mb-3",attrs:{type:"submit",disabled:e.isProcessing}},[e._v(" "+e._s(e.isProcessing?"Processing...":"Submit")+" ")]),a("div",{staticClass:"text-center mb-3"},[a("p",[a("router-link",{attrs:{to:"/signup"}},[e._v(" Sign Up ")])],1)]),a("p",{staticClass:"mt-5 mb-3 text-muted text-center"},[e._v(" © 2017-2018 ")])])])},I=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-center mb-4"},[a("h1",{staticClass:"h3 mb-3 font-weight-normal"},[e._v(" Sign In ")])])}],R=a("7696"),E=a("2fa3"),L={name:"SignIn",data:function(){return{email:"",password:"",isProcessing:!1}},beforeRouteEnter:function(e,t,a){var n=e.params.register;"success"===n&&E["a"].fire({icon:"success",title:"註冊成功，請輸入帳號密碼登入"}),a()},methods:{handleSubmit:function(e){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,t.email&&t.password){e.next=4;break}return E["a"].fire({icon:"warning",title:"請填入 email 和 password"}),e.abrupt("return");case 4:return t.isProcessing=!0,e.next=7,R["a"].signIn({email:t.email,password:t.password});case 7:if(a=e.sent,n=a.data,"success"===n.status){e.next=11;break}throw new Error(n.message);case 11:localStorage.setItem("token",n.token),t.$store.commit("setCurrentUser",n.user),t.$router.push("/restaurants"),e.next=21;break;case 16:e.prev=16,e.t0=e["catch"](0),t.password="",t.isProcessing=!1,E["a"].fire({icon:"warning",title:"請確認您輸入了正確的帳號密碼"});case 21:case"end":return e.stop()}}),e,null,[[0,16]])})))()}}},N=L,S=Object(f["a"])(N,O,I,!1,null,null,null),U=S.exports,z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container py-5"},[a("NavTabs"),e.isLoading?a("Spinner"):[a("RestaurantsNavPills",{attrs:{categories:e.categories}}),a("div",{staticClass:"row"},e._l(e.restaurants,(function(e){return a("RestaurantCard",{key:e.id,attrs:{"initial-restaurant":e}})})),1),e.totalPage.length>1?a("RestaurantPagination",{attrs:{"current-page":e.currentPage,"total-page":e.totalPage,"category-id":e.categoryId,"previous-page":e.previousPage,"next-page":e.nextPage}}):e._e(),e.restaurants.length<1?a("div",[e._v(" 此類別目前無餐廳資料 ")]):e._e()]],2)},q=[],A=a("8bb1"),F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-md-6 col-lg-4"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!e.isLoading,expression:"!isLoading"}],staticClass:"card mb-4"},[a("img",{staticClass:"card-img-top",attrs:{src:e._f("emptyImage")(e.restaurant.image),alt:"Card image cap",width:"286px",height:"180px"},on:{load:e.changeLoading}}),a("div",{staticClass:"card-body"},[a("p",{staticClass:"card-text title-wrap"},[a("router-link",{attrs:{to:{name:"restaurant",params:{id:e.restaurant.id}}}},[e._v(" "+e._s(e.restaurant.name)+" ")])],1),a("span",{staticClass:"badge badge-secondary"},[e._v(e._s(e.restaurant.Category.name))]),a("p",{staticClass:"card-text text-truncate"},[e._v(" "+e._s(e.restaurant.description)+" ")])]),a("div",{staticClass:"card-footer"},[e.restaurant.isFavorited?a("button",{staticClass:"btn btn-danger btn-border favorite mr-2",attrs:{type:"button",disabled:e.isProcessing},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.deleteFavorite(e.restaurant.id)}}},[e._v(" 移除最愛 ")]):a("button",{staticClass:"btn btn-primary btn-border favorite mr-2",attrs:{type:"button",disabled:e.isProcessing},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.addFavorite(e.restaurant.id)}}},[e._v(" 加到最愛 ")]),e.restaurant.isLiked?a("button",{staticClass:"btn btn-danger like mr-2",attrs:{type:"button",disabled:e.isProcessing},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.deleteLike(e.restaurant.id)}}},[e._v(" Unlike ")]):a("button",{staticClass:"btn btn-primary like mr-2",attrs:{type:"button",disabled:e.isProcessing},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.addLike(e.restaurant.id)}}},[e._v(" Like ")])])])])},$=[],T=a("2708"),D=a("4cce"),B={name:"RestaurantCard",mixins:[T["a"]],props:{initialRestaurant:{type:Object,required:!0}},data:function(){return{restaurant:this.initialRestaurant,isProcessing:!1,isLoading:!0}},methods:{changeLoading:function(e){this.isLoading=!1},addFavorite:function(e){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,t.isProcessing=!0,a.next=4,D["a"].addFavorite({restaurantId:e});case 4:if(n=a.sent,r=n.data,"success"===r.status){a.next=8;break}throw new Error(r.message);case 8:t.restaurant=Object(o["a"])(Object(o["a"])({},t.restaurant),{},{isFavorited:!0}),t.isProcessing=!1,a.next=17;break;case 12:a.prev=12,a.t0=a["catch"](0),t.isProcessing=!1,E["a"].fire({icon:"error",title:"無法將餐廳加入最愛，請稍後再試"}),console.log("error",a.t0);case 17:case"end":return a.stop()}}),a,null,[[0,12]])})))()},deleteFavorite:function(e){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,t.isProcessing=!0,a.next=4,D["a"].deleteFavorite({restaurantId:e});case 4:if(n=a.sent,r=n.data,"success"===r.status){a.next=8;break}throw new Error(r.message);case 8:t.restaurant=Object(o["a"])(Object(o["a"])({},t.restaurant),{},{isFavorited:!1}),t.isProcessing=!1,a.next=17;break;case 12:a.prev=12,a.t0=a["catch"](0),t.isProcessing=!1,E["a"].fire({icon:"error",title:"無法將餐廳移除最愛，請稍後再試"}),console.log("error",a.t0);case 17:case"end":return a.stop()}}),a,null,[[0,12]])})))()},addLike:function(e){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,t.isProcessing=!0,a.next=4,D["a"].addLike({restaurantId:e});case 4:if(n=a.sent,r=n.data,"success"===r.status){a.next=8;break}throw new Error(r.message);case 8:t.restaurant=Object(o["a"])(Object(o["a"])({},t.restaurant),{},{isLiked:!0}),t.isProcessing=!1,a.next=17;break;case 12:a.prev=12,a.t0=a["catch"](0),t.isProcessing=!1,E["a"].fire({icon:"error",title:"無法對餐廳按讚，請稍後再試"}),console.log("error",a.t0);case 17:case"end":return a.stop()}}),a,null,[[0,12]])})))()},deleteLike:function(e){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,t.isProcessing=!0,a.next=4,D["a"].deleteLike({restaurantId:e});case 4:if(n=a.sent,r=n.data,"success"===r.status){a.next=8;break}throw new Error(r.message);case 8:t.restaurant=Object(o["a"])(Object(o["a"])({},t.restaurant),{},{isLiked:!1}),t.isProcessing=!1,a.next=17;break;case 12:a.prev=12,a.t0=a["catch"](0),t.isProcessing=!1,E["a"].fire({icon:"error",title:"無法對餐廳取消讚，請稍後再試"}),console.log("error",a.t0);case 17:case"end":return a.stop()}}),a,null,[[0,12]])})))()}}},M=B,J=(a("b4fb"),Object(f["a"])(M,F,$,!1,null,"6913d86a",null)),H=J.exports,K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"nav nav-pills mb-4"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"restaurants"}}},[e._v(" 全部 ")])],1),e._l(e.categories,(function(t){return a("li",{key:t.id,staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"restaurants",query:{categoryId:t.id}}}},[e._v(" "+e._s(t.name)+" ")])],1)}))],2)},G=[],Q={name:"RestaurantsNavPills",props:{categories:{type:Array,required:!0}}},V=Q,W=(a("e71f"),Object(f["a"])(V,K,G,!1,null,"65c29bbf",null)),X=W.exports,Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination"},[a("li",{directives:[{name:"show",rawName:"v-show",value:e.previousPage,expression:"previousPage"}],class:["page-item",{disabled:1===e.currentPage}]},[a("router-link",{staticClass:"page-link",attrs:{"aria-label":"Previous",to:{name:"restaurants",query:{categoryId:e.categoryId,page:e.previousPage}}}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("«")])])],1),e._l(e.totalPage,(function(t){return a("li",{key:t,class:["page-item",{active:e.currentPage===t}]},[a("router-link",{staticClass:"page-link",attrs:{to:{name:"restaurants",query:{categoryId:e.categoryId,page:t}}}},[e._v(" "+e._s(t)+" ")])],1)})),a("li",{directives:[{name:"show",rawName:"v-show",value:e.nextPage,expression:"nextPage"}],class:["page-item",{disabled:e.currentPage===e.totalPage.length}]},[a("router-link",{staticClass:"page-link",attrs:{to:{name:"restaurants",query:{categoryId:e.categoryId,page:e.nextPage}},"aria-label":"Next"}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("»")])])],1)],2)])},Z=[],ee=(a("a9e3"),{name:"RestaurantsPagination",props:{categoryId:{type:[String,Number],default:""},currentPage:{type:Number,default:1},totalPage:{type:Array,required:!0},previousPage:{type:Number,required:!0},nextPage:{type:Number,required:!0}}}),te=ee,ae=(a("93ad"),Object(f["a"])(te,Y,Z,!1,null,"c417c1da",null)),ne=ae.exports,re=a("c4c3"),se=a("2375"),ie={name:"Restaurants",components:{NavTabs:A["a"],RestaurantCard:H,RestaurantsNavPills:X,RestaurantPagination:ne,Spinner:se["a"]},data:function(){return{restaurants:[],categories:[],categoryId:-1,currentPage:1,totalPage:[],previousPage:-1,nextPage:-1,isLoading:!0}},created:function(){var e=this.$route.query,t=e.page,a=void 0===t?"":t,n=e.categoryId,r=void 0===n?"":n;this.fetchRestaurants({queryPage:a,queryCategoryId:r})},beforeRouteUpdate:function(e,t,a){var n=e.query,r=n.page,s=void 0===r?"":r,i=n.categoryId,c=void 0===i?"":i;this.fetchRestaurants({queryPage:s,queryCategoryId:c}),a()},methods:{fetchRestaurants:function(e){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function a(){var n,r,s,i,c,o,u,d,l,f,b;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.queryPage,r=e.queryCategoryId,a.prev=1,t.isLoading=!0,a.next=5,re["a"].getRestaurants({page:n,categoryId:r});case 5:s=a.sent,i=s.data,c=i.restaurants,o=i.categories,u=i.categoryId,d=i.page,l=i.totalPage,f=i.prev,b=i.next,t.restaurants=c,t.categories=o,t.categoryId=u,t.currentPage=d,t.totalPage=l,t.previousPage=f,t.nextPage=b,t.isLoading=!1,a.next=21;break;case 17:a.prev=17,a.t0=a["catch"](1),t.isLoading=!1,E["a"].fire({icon:"error",title:"無法取得餐廳資料，請稍後再試"});case 21:case"end":return a.stop()}}),a,null,[[1,17]])})))()}}},ce=ie,oe=Object(f["a"])(ce,z,q,!1,null,null,null),ue=oe.exports;n["a"].use(u["a"]);var de=new u["a"].Store({state:{currentUser:{id:-1,name:"",email:"",image:"",isAdmin:!1},isAuthenticated:!1,token:""},mutations:{setCurrentUser:function(e,t){e.currentUser=Object(o["a"])(Object(o["a"])({},e.currentUser),t),e.token=localStorage.getItem("token"),e.isAuthenticated=!0},revokeAuthentication:function(e){e.currentUser={},e.isAuthenticated=!1,e.token="",localStorage.removeItem("token")}},actions:{fetchCurrentUser:function(e){return Object(j["a"])(regeneratorRuntime.mark((function t(){var a,n,r,s,i,c,o,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,t.prev=1,t.next=4,D["a"].getCurrentUser();case 4:return n=t.sent,r=n.data,s=r.id,i=r.name,c=r.email,o=r.image,u=r.isAdmin,a("setCurrentUser",{id:s,name:i,email:c,image:o,isAdmin:u}),t.abrupt("return",!0);case 11:return t.prev=11,t.t0=t["catch"](1),console.error(t.t0.message),a("revokeAuthentication"),t.abrupt("return",!1);case 16:case"end":return t.stop()}}),t,null,[[1,11]])})))()}},modules:{}});n["a"].use(k["a"]);var le=function(e,t,a){var n=de.state.currentUser;!n||n.isAdmin?a():a("/404")},fe=new k["a"]({linkExactActiveClass:"active",routes:[{path:"/",name:"root",redirect:"/signin"},{path:"/signin",name:"sign-in",component:U},{path:"/signup",name:"sign-up",component:function(){return a.e("chunk-2d0d338e").then(a.bind(null,"5c9c"))}},{path:"/restaurants",name:"restaurants",component:ue},{path:"/restaurants/feeds",name:"restaurants-feeds",component:function(){return a.e("chunk-32581b12").then(a.bind(null,"9cab"))}},{path:"/restaurants/top",name:"restaurants-tops",component:function(){return a.e("chunk-46733508").then(a.bind(null,"571a"))}},{path:"/restaurants/:id",name:"restaurant",component:function(){return a.e("chunk-1e166526").then(a.bind(null,"ad68"))}},{path:"/restaurants/:id/dashboard",name:"restaurant-dashboard",component:function(){return a.e("chunk-2d0b2ec8").then(a.bind(null,"25d3"))}},{path:"/users/top",name:"users-top",component:function(){return a.e("chunk-d55d3ce2").then(a.bind(null,"22ab"))}},{path:"/users/:id/edit",name:"user-edit",component:function(){return a.e("chunk-2d228901").then(a.bind(null,"da5c"))}},{path:"/users/:id",name:"user",component:function(){return a.e("chunk-2d0ab43a").then(a.bind(null,"1511"))}},{path:"/admin",exact:!0,redirect:"/admin/restaurants"},{path:"/admin/restaurants",name:"admin-restaurants",component:function(){return a.e("chunk-71c50812").then(a.bind(null,"73a3"))},beforeEnter:le},{path:"/admin/restaurants/new",name:"admin-restaurant-new",component:function(){return a.e("chunk-84cc821a").then(a.bind(null,"2743"))},beforeEnter:le},{path:"/admin/restaurants/:id/edit",name:"admin-restaurant-edit",component:function(){return a.e("chunk-452696c7").then(a.bind(null,"6945"))},beforeEnter:le},{path:"/admin/restaurants/:id",name:"admin-restaurant",component:function(){return a.e("chunk-3fdfc446").then(a.bind(null,"f91c"))},beforeEnter:le},{path:"/admin/categories",name:"admin-categories",component:function(){return a.e("chunk-13070afa").then(a.bind(null,"5652"))},beforeEnter:le},{path:"/admin/users",name:"admin-users",component:function(){return a.e("chunk-958bdcfa").then(a.bind(null,"6135"))},beforeEnter:le},{path:"*",name:"not-found",component:C}]});fe.beforeEach(function(){var e=Object(j["a"])(regeneratorRuntime.mark((function e(t,a,n){var r,s,i,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=localStorage.getItem("token"),s=de.state.token,i=de.state.isAuthenticated,!r||r===s){e.next=7;break}return e.next=6,de.dispatch("fetchCurrentUser");case 6:i=e.sent;case 7:if(c=["sign-up","sign-in"],i||c.includes(t.name)){e.next=11;break}return n("/signin"),e.abrupt("return");case 11:if(!i||!c.includes(t.name)){e.next=14;break}return n("/restaurants"),e.abrupt("return");case 14:n();case 15:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}());var be=fe;a("12ab");n["a"].config.productionTip=!1,new n["a"]({router:be,store:de,render:function(e){return e(v)}}).$mount("#app")},"571c":function(e,t,a){"use strict";a("f26e")},"72fe":function(e,t,a){},7696:function(e,t,a){"use strict";var n=a("2fa3");t["a"]={signIn:function(e){var t=e.email,a=e.password;return n["b"].post("/signin",{email:t,password:a})},signUp:function(e){return n["b"].post("/signup",e)}}},"8bb1":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"nav nav-tabs mb-4"},e._l(e.tabs,(function(t){return a("li",{key:t.id,staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:t.path}},[e._v(" "+e._s(t.title)+" ")])],1)})),0)},r=[],s=a("ec26"),i={name:"NavTabs",data:function(){return{tabs:[{id:Object(s["a"])(),title:"首頁",path:"/restaurants"},{id:Object(s["a"])(),title:"最新動態",path:"/restaurants/feeds"},{id:Object(s["a"])(),title:"TOP 10 人氣餐廳",path:"/restaurants/top"},{id:Object(s["a"])(),title:"美食達人",path:"/users/top"}]}}},c=i,o=(a("50b5"),a("2877")),u=Object(o["a"])(c,n,r,!1,null,"35ee03a1",null);t["a"]=u.exports},"93ad":function(e,t,a){"use strict";a("0159")},a4b0:function(e,t,a){},b4fb:function(e,t,a){"use strict";a("b670")},b670:function(e,t,a){},c4c3:function(e,t,a){"use strict";a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("25f0");var n=a("2fa3");t["a"]={getRestaurant:function(e){var t=e.restaurantId;return n["b"].get("/restaurants/".concat(t))},getRestaurants:function(e){var t=e.page,a=e.categoryId,r=new URLSearchParams({page:t,categoryId:a});return n["b"].get("/restaurants?".concat(r.toString()))},getFeeds:function(){return n["b"].get("/restaurants/feeds")},getTopRestaurants:function(){return n["b"].get("/restaurants/top")}}},e71f:function(e,t,a){"use strict";a("a4b0")},f26e:function(e,t,a){},fc60:function(e,t,a){"use strict";a("239f")}});
//# sourceMappingURL=app.1c07b1ab.js.map