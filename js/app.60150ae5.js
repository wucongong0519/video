(function(e){function t(t){for(var r,o,c=t[0],i=t[1],s=t[2],f=0,d=[];f<c.length;f++)o=c[f],u[o]&&d.push(u[o][0]),u[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==u[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},u={app:0},a=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d22d1db":"d704761f","chunk-8bd2019e":"09863487"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-8bd2019e":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d22d1db":"31d6cfe0","chunk-8bd2019e":"9e1778e0"}[e]+".css",u=i.p+r,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var s=a[c],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===u))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],f=s.getAttribute("data-href");if(f===r||f===u)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||u,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],l.parentNode.removeChild(l),n(a)},l.href=u;var p=document.getElementsByTagName("head")[0];p.appendChild(l)}).then(function(){o[e]=0}));var r=u[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise(function(t,n){r=u[e]=[t,n]});t.push(r[2]=a);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=c(e),s=function(t){f.onerror=f.onload=null,clearTimeout(d);var n=u[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");a.type=r,a.request=o,n[1](a)}u[e]=void 0}};var d=setTimeout(function(){s({type:"timeout",target:f})},12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var l=f;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0f9a":function(e,t,n){"use strict";n.r(t);n("96cf");var r=n("3b8d"),o=(n("7f7f"),n("c24f")),u=n("5f87"),a=n("a18c"),c={token:Object(u["a"])(),name:"",avatar:"",introduction:"",roles:[]},i={SET_TOKEN:function(e,t){e.token=t},SET_INTRODUCTION:function(e,t){e.introduction=t},SET_NAME:function(e,t){e.name=t},SET_AVATAR:function(e,t){e.avatar=t},SET_ROLES:function(e,t){e.roles=t}},s={login:function(e,t){var n=e.commit,r=t.username,a=t.password;return new Promise(function(e,t){Object(o["c"])({username:r.trim(),password:a}).then(function(t){var r=t.data;n("SET_TOKEN",r.token),Object(u["c"])(r.token),e(t)}).catch(function(e){t(e)})})},facelogin:function(e,t){var n=e.commit;return new Promise(function(e,r){Object(o["a"])(t).then(function(t){n("SET_TOKEN",t.token),Object(u["c"])(t.token),e()}).catch(function(e){r(e)})})},getInfo:function(e){var t=e.commit,n=e.state;return new Promise(function(e,r){Object(o["b"])(n.token).then(function(n){var o=n.data;o||r("Verification failed, please Login again.");var u=o.roles,a=o.name,c=o.avatar,i=o.introduction;(!u||u.length<=0)&&r("getInfo: roles must be a non-null array!"),t("SET_ROLES",u),t("SET_NAME",a),t("SET_AVATAR",c),t("SET_INTRODUCTION",i),e(o)}).catch(function(e){r(e)})})},logout:function(e){var t=e.commit,n=e.state;return new Promise(function(e,r){Object(o["d"])(n.token).then(function(){t("SET_TOKEN",""),t("SET_ROLES",[]),Object(u["b"])(),Object(a["d"])(),e()}).catch(function(e){r(e)})})},resetToken:function(e){var t=e.commit;return new Promise(function(e){t("SET_TOKEN",""),t("SET_ROLES",[]),Object(u["b"])(),e()})},changeRoles:function(e,t){var n=e.commit,o=e.dispatch;return new Promise(function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(r){var c,i,s,f;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return c=t+"-token",n("SET_TOKEN",c),Object(u["c"])(c),e.next=5,o("getInfo");case 5:return i=e.sent,s=i.roles,Object(a["d"])(),e.next=10,o("permission/generateRoutes",s,{root:!0});case 10:f=e.sent,a["c"].addRoutes(f),r();case 13:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())}};t["default"]={namespaced:!0,state:c,mutations:i,actions:s}},"31c2":function(e,t,n){"use strict";n.r(t),n.d(t,"filterAsyncRoutes",function(){return a});var r=n("cebc"),o=(n("ac6a"),n("6762"),n("2fdb"),n("a18c"));function u(e,t){return!t.meta||!t.meta.roles||e.some(function(e){return t.meta.roles.includes(e)})}function a(e,t){var n=[];return e.forEach(function(e){var o=Object(r["a"])({},e);u(t,o)&&(o.children&&(o.children=a(o.children,t)),n.push(o))}),n}var c={routes:[],addRoutes:[]},i={SET_ROUTES:function(e,t){e.addRoutes=t,e.routes=o["b"].concat(t)}},s={generateRoutes:function(e,t){var n=e.commit;return new Promise(function(e){var r;r=t.includes("admin")?o["a"]||[]:a(o["a"],t),n("SET_ROUTES",r),e(r)})}};t["default"]={namespaced:!0,state:c,mutations:i,actions:s}},"3a8a":function(e,t,n){},4360:function(e,t,n){"use strict";n("a481"),n("ac6a");var r=n("2b0e"),o=n("2f62"),u=(n("7f7f"),{sidebar:function(e){return e.app.sidebar},language:function(e){return e.app.language},size:function(e){return e.app.size},device:function(e){return e.app.device},visitedViews:function(e){return e.tagsView.visitedViews},cachedViews:function(e){return e.tagsView.cachedViews},token:function(e){return e.user.token},avatar:function(e){return e.user.avatar},name:function(e){return e.user.name},introduction:function(e){return e.user.introduction},roles:function(e){return e.user.roles},permission_routes:function(e){return e.permission.routes},errorLogs:function(e){return e.errorLog.logs}}),a=u;r["a"].use(o["a"]);var c=n("d307"),i=c.keys().reduce(function(e,t){var n=t.replace(/^\.\/(.*)\.\w+$/,"$1"),r=c(t);return e[n]=r.default,e},{}),s=new o["a"].Store({modules:i,getters:a});t["a"]=s},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},u=[],a={name:"app"},c=a,i=n("2877"),s=Object(i["a"])(c,o,u,!1,null,null,null),f=s.exports,d=(n("961d"),n("3a8a"),n("a18c")),l=n("4360"),p=n("cebc"),m=(n("96cf"),n("3b8d")),h=n("5f87"),v=["/login","/auth-redirect"];d["c"].beforeEach(function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t,n,r){var o,u,a,c,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(console.log(t),document.title=t.meta.title,o=Object(h["a"])(),!o){e.next=32;break}if("/login"!==t.path){e.next=8;break}r({path:"/"}),e.next=30;break;case 8:if(u=l["a"].getters.roles&&l["a"].getters.roles.length>0,!u){e.next=13;break}r(),e.next=30;break;case 13:return e.prev=13,e.next=16,l["a"].dispatch("user/getInfo");case 16:return a=e.sent,c=a.roles,e.next=20,l["a"].dispatch("permission/generateRoutes",c);case 20:i=e.sent,d["c"].addRoutes(i),r(Object(p["a"])({},t,{replace:!0})),e.next=30;break;case 25:return e.prev=25,e.t0=e["catch"](13),e.next=29,l["a"].dispatch("user/resetToken");case 29:r("/login?redirect=".concat(t.path));case 30:e.next=33;break;case 32:-1!==v.indexOf(t.path)?r():r("/login?redirect=".concat(t.path));case 33:case"end":return e.stop()}},e,null,[[13,25]])}));return function(t,n,r){return e.apply(this,arguments)}}()),d["c"].afterEach(function(){});var b=n("3a34"),g=n.n(b),O=new g.a;r["a"].config.productionTip=!1,new r["a"]({router:d["c"],store:l["a"],render:function(e){return e(f)}}).$mount("#app");t["default"]=O},"5f87":function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"c",function(){return c}),n.d(t,"b",function(){return i});var r=n("a78e"),o=n.n(r),u="CAI_FACE_AUTH";function a(){return o.a.get(u)}function c(e){return o.a.set(u,e)}function i(){return o.a.remove(u)}},"961d":function(e,t,n){},a18c:function(e,t,n){"use strict";n.d(t,"b",function(){return u}),n.d(t,"a",function(){return a}),n.d(t,"d",function(){return s});var r=n("2b0e"),o=n("8c4f");r["a"].use(o["a"]);var u=[{path:"/login",name:"login",component:function(){return n.e("chunk-8bd2019e").then(n.bind(null,"efcf"))},hidden:!0,meta:{title:"人脸识别系统-登陆",icon:"lock",roles:["admin","editor"]}},{path:"/home",name:"home",component:function(){return n.e("chunk-2d22d1db").then(n.bind(null,"f5b8"))},hidden:!0,meta:{title:"人脸识别系统-首页",icon:"lock",roles:["admin","editor"]}},{path:"",name:"3",component:function(){return n.e("chunk-2d22d1db").then(n.bind(null,"f5b8"))},hidden:!0,meta:{title:"人脸识别系统-首页",icon:"lock",roles:["admin","editor"]}}],a=[],c=function(){return new o["a"]({scrollBehavior:function(){return{y:0}},routes:u})},i=c();function s(){var e=c();i.matcher=e.matcher}t["c"]=i},c24f:function(e,t,n){"use strict";var r=n("bc3a"),o=n.n(r),u=n("4360"),a=n("5f87"),c=o.a.create({withCredentials:!0,timeout:3e4});c.interceptors.request.use(function(e){return u["a"].getters.token&&(e.headers["X-Token"]=Object(a["a"])()),e},function(e){return console.error(e),Promise.reject(e)}),c.interceptors.response.use(function(e){var t=e.data;return 2e4!==t.code?(50008!==t.code&&50012!==t.code&&50014!==t.code||u["a"].dispatch("user/resetToken").then(function(){location.reload()}),Promise.reject(t.message||"error")):t},function(e){return console.error("err"+e),Promise.reject(e)});var i=c;function s(e){return i({url:"/user/login",method:"post",data:e})}function f(e){return i({url:"/user/info",method:"get",params:{token:e}})}function d(){return i({url:"/user/logout",method:"post"})}function l(e){return i({url:"/user/faceAuth",method:"post",data:e})}function p(e){return i({url:"/user/register",method:"post",data:e})}n.d(t,"c",function(){return s}),n.d(t,"b",function(){return f}),n.d(t,"d",function(){return d}),n.d(t,"a",function(){return l}),n.d(t,"e",function(){return p})},d307:function(e,t,n){var r={"./permission.js":"31c2","./user.js":"0f9a"};function o(e){var t=u(e);return n(t)}function u(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(r)},o.resolve=u,e.exports=o,o.id="d307"}});
//# sourceMappingURL=app.60150ae5.js.map