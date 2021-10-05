(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46733508"],{"571a":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container py-5"},[a("NavTabs"),t.isLoading?a("Spinner"):[a("h1",{staticClass:"mt-5"},[t._v(" 人氣餐廳 ")]),a("hr"),t._l(t.restaurants,(function(e){return a("div",{key:e.id,staticClass:"card mb-3",staticStyle:{"max-width":"540px",margin:"auto"}},[a("div",{staticClass:"row no-gutters"},[a("div",{staticClass:"col-md-4"},[a("router-link",{attrs:{to:{name:"restaurant",params:{id:e.id}}}},[a("img",{staticClass:"card-img",attrs:{src:t._f("emptyImage")(e.image)}})])],1),a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(" "+t._s(e.name)+" ")]),a("span",{staticClass:"badge badge-secondary"},[t._v("收藏數："+t._s(e.favoriteCount))]),a("p",{staticClass:"card-text"},[t._v(" "+t._s(e.description)+" ")]),a("router-link",{staticClass:"btn btn-primary mr-2",attrs:{to:{name:"restaurant",params:{id:e.id}}}},[t._v("Show")]),e.isFavorited?a("button",{staticClass:"btn btn-danger mr-2",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.deleteFavorite(e.id)}}},[t._v(" 移除最愛 ")]):a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.addFavorite(e.id)}}},[t._v(" 加到最愛 ")])],1)])])])}))]],2)},n=[],i=a("5530"),s=a("1da1"),o=(a("96cf"),a("d81d"),a("b0c0"),a("a4d3"),a("e01a"),a("8bb1")),c=a("2708"),u=a("c4c3"),d=a("4cce"),v=a("2fa3"),p=a("2375"),l={name:"RestaurantsTop",mixins:[c["a"]],components:{NavTabs:o["a"],Spinner:p["a"]},data:function(){return{restaurants:[],isLoading:!0}},created:function(){this.fetchTopRestaurants()},methods:{fetchTopRestaurants:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u["a"].getTopRestaurants();case 3:a=e.sent,r=a.data,t.restaurants=r.restaurants.map((function(t){return{id:t.id,image:t.image,name:t.name,favoriteCount:t.FavoriteCount,description:t.description,isFavorited:t.isFavorited}})),t.isLoading=!1,e.next=13;break;case 9:e.prev=9,e.t0=e["catch"](0),t.isLoading=!1,v["a"].fire({icon:"error",title:"無法取得人氣餐廳，請稍後再試"});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()},addFavorite:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,d["a"].addFavorite({restaurantId:t});case 3:if(r=a.sent,n=r.data,"success"===n.status){a.next=7;break}throw new Error(n.message);case 7:e.restaurants=e.restaurants.map((function(e){return e.id!==t?e:Object(i["a"])(Object(i["a"])({},e),{},{favoriteCount:e.favoriteCount+1,isFavorited:!0})})),a.next=13;break;case 10:a.prev=10,a.t0=a["catch"](0),v["a"].fire({icon:"error",title:"無法加入最愛，請稍後再試"});case 13:case"end":return a.stop()}}),a,null,[[0,10]])})))()},deleteFavorite:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,d["a"].deleteFavorite({restaurantId:t});case 3:if(r=a.sent,n=r.data,"success"===n.status){a.next=7;break}throw new Error(n.message);case 7:e.restaurants=e.restaurants.map((function(e){return e.id!==t?e:Object(i["a"])(Object(i["a"])({},e),{},{favoriteCount:e.favoriteCount-1,isFavorited:!1})})),a.next=13;break;case 10:a.prev=10,a.t0=a["catch"](0),v["a"].fire({icon:"error",title:"無法移除最愛，請稍後再試"});case 13:case"end":return a.stop()}}),a,null,[[0,10]])})))()}}},f=l,m=a("2877"),b=Object(m["a"])(f,r,n,!1,null,null,null);e["default"]=b.exports},d81d:function(t,e,a){"use strict";var r=a("23e7"),n=a("b727").map,i=a("1dde"),s=i("map");r({target:"Array",proto:!0,forced:!s},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},e01a:function(t,e,a){"use strict";var r=a("23e7"),n=a("83ab"),i=a("da84"),s=a("5135"),o=a("861d"),c=a("9bf2").f,u=a("e893"),d=i.Symbol;if(n&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var v={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new d(t):void 0===t?d():d(t);return""===t&&(v[e]=!0),e};u(p,d);var l=p.prototype=d.prototype;l.constructor=p;var f=l.toString,m="Symbol(test)"==String(d("test")),b=/^Symbol\((.*)\)[^)]+$/;c(l,"description",{configurable:!0,get:function(){var t=o(this)?this.valueOf():this,e=f.call(t);if(s(v,t))return"";var a=m?e.slice(7,-1):e.replace(b,"$1");return""===a?void 0:a}}),r({global:!0,forced:!0},{Symbol:p})}}}]);
//# sourceMappingURL=chunk-46733508.96331bc7.js.map