(this["webpackJsonpkad-test"]=this["webpackJsonpkad-test"]||[]).push([[0],{210:function(t,e,n){},212:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n(33),a=n.n(c),i=n(24),o=n(17),s=n.n(o),u=n(30),l="fd83f2e5d611298e3c7568537588009d",j=function(t,e){var n=60*(new Date).getTimezoneOffset(),r=new Date(1e3*(t+e+n));return r.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})+", "+r.toLocaleDateString([],{day:"numeric",month:"short"})},d=function(t,e){var n=60*(new Date).getTimezoneOffset();return new Date(1e3*(t+e+n)).toLocaleDateString([],{weekday:"short",day:"numeric",month:"short"})},p=function(){var t=Object(u.a)(s.a.mark((function t(e){var n,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat(l));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(){var t=Object(u.a)(s.a.mark((function t(e,n){var r,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(e,"&lon=").concat(n,"&appid=").concat(l));case 2:return r=t.sent,t.next=5,r.json();case 5:return c=t.sent,t.abrupt("return",c);case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),f=function(){var t=Object(u.a)(s.a.mark((function t(e){var n,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(e.lat,"&lon=").concat(e.lon,"&appid=").concat(l,"&units=metric"));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(){var t=Object(u.a)(s.a.mark((function t(e){var n,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://api.openweathermap.org/geo/1.0/direct?q=".concat(e,"&limit=5&appid=").concat(l));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h="ADD_CITY",x="REMOVE_CITY",v="FAV_CITY",m="SHOW_ERROR",y="HIDE_ERROR",w="SET_CITY",g=function(t){return function(){var e=Object(u.a)(s.a.mark((function e(n){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p(t);case 3:"id"in(r=e.sent)?(n(k(r)),n(C(r.id))):n(I()),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),n(I());case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},k=function(t){return{type:h,payload:t}},S=function(t){return{type:x,payload:t}},I=function(){return{type:m}},C=function(t){return{type:w,payload:t}},D=n(3),T=n(225),_=n(219),A=n(231),E=n(10),z=n(4),R=function(){var t=Object(i.b)(),e=function(){t(g(j))},n=Object(r.useState)([]),c=Object(D.a)(n,2),a=c[0],o=(c[1],Object(r.useState)("")),l=Object(D.a)(o,2),j=l[0],d=l[1],p=Object(r.useState)([]),b=Object(D.a)(p,2),f=b[0],h=b[1],x=Object(r.useState)(!1),v=Object(D.a)(x,2),m=v[0],y=v[1],w=Object(r.useCallback)(function(){var t=Object(u.a)(s.a.mark((function t(e){var n,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return d(e),m||y(!0),t.prev=2,t.next=5,O(e);case 5:(n=t.sent)&&(r=n.map((function(t){return{value:t.name+", "+t.country,label:t.name+", "+t.country}})),h(r),y(!1)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),y(!1);case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}(),[m]),k=Object(r.useCallback)((function(e){t(g(e))}),[t]),S=Object(z.jsx)(T.a.TextField,{onChange:w,label:"\u0413\u043e\u0440\u043e\u0434",value:j,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0433\u043e\u0440\u043e\u0434\u0430",labelHidden:!0});return Object(z.jsx)(_.a,{onSubmit:e,children:Object(z.jsx)(A.a,{children:Object(z.jsxs)(A.a.Group,{children:[Object(z.jsx)(T.a,{options:f,selected:a,onSelect:k,loading:m,textField:S}),Object(z.jsx)(E.a,{onClick:e,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0433\u043e\u0440\u043e\u0434"})]})})})},M=n(229),J=n(113),Y=n(228),F=n(223),H=n(114),L=n(37),q=n(227),N=function(){var t=Object(i.b)();return Object(i.c)((function(t){return t.error}))?Object(z.jsx)(M.a.Section,{children:Object(z.jsx)(q.a,{title:"\u0413\u043e\u0440\u043e\u0434 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d",status:"critical",onDismiss:function(){t({type:y})}})}):null},V=function(){var t=Object(i.c)((function(t){return t.cities})),e=Object(i.b)(),n=function(t){var n,r;e((n=t.coords.latitude,r=t.coords.longitude,function(){var t=Object(u.a)(s.a.mark((function t(e){var c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b(n,r);case 3:"id"in(c=t.sent)?(e(k(c)),e(C(c.id))):e(I()),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e(I());case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()))};0===t.length&&navigator.geolocation&&navigator.geolocation.getCurrentPosition(n);return Object(z.jsxs)(M.a,{children:[Object(z.jsx)(M.a.Section,{children:Object(z.jsx)(J.a,{element:"h1",children:"\u0422\u0435\u0441\u0442\u043e\u0432\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435 KAD systems - Weather App"})}),Object(z.jsx)(M.a.Section,{children:Object(z.jsx)(R,{})}),Object(z.jsx)(N,{}),Object(z.jsx)(M.a.Section,{children:Object(z.jsx)(Y.a,{children:Object(z.jsx)(F.a,{items:t,renderItem:function(t){var n=[{content:t.fav?"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u0437 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0433\u043e":"\u0412 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435",onAction:function(){var n;e((n=t.id,{type:v,payload:n}))}},{content:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",onAction:function(){e(S(t.id))}}];return Object(z.jsxs)(H.a,{id:t.id,onClick:function(){return n=t.id,void e(C(n));var n},shortcutActions:n,persistActions:!0,children:[Object(z.jsx)("h3",{children:Object(z.jsx)(L.a,{variation:"strong",children:t.name})}),Object(z.jsx)("div",{children:t.country})]})}})})})]})},W=n(230),B=function(t){var e=t.weather,n=e.daily.map((function(t){return[d(t.dt,e.timezone_offset),Math.round(t.temp.day)+"\xb0C /"+Math.round(t.temp.night)+"\xb0C",t.weather[0].main,Math.round(t.wind_speed)+"\u043c/\u0441"]}));return Object(z.jsxs)("div",{children:[Object(z.jsx)(J.a,{size:"medium",children:j(e.current.dt,e.timezone_offset)}),Object(z.jsxs)(J.a,{size:"small",children:[Math.round(e.current.temp),"\xb0C, ",e.current.weather[0].main,", ",Math.round(e.current.wind_speed)," \u043c/\u0441"]}),Object(z.jsx)(W.a,{columnContentTypes:["text","text","text","text"],headings:["\u0414\u0430\u0442\u0430","\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430","\u041e\u0431\u043b\u0430\u0447\u043d\u043e\u0441\u0442\u044c","\u0412\u0435\u0442\u0435\u0440"],rows:n})]})},G=function(){var t=Object(i.c)((function(t){return t.cityId})),e=Object(i.c)((function(e){return e.cities.find((function(e){return parseInt(e.id)===parseInt(t)}))})),n=Object(r.useState)(null),c=Object(D.a)(n,2),a=c[0],o=c[1];Object(r.useEffect)((function(){function t(){return(t=Object(u.a)(s.a.mark((function t(){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0===e){t.next=5;break}return t.next=3,f(e);case 3:n=t.sent,o(n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]);var l=Object(i.b)();return Object(z.jsxs)(M.a,{children:[Object(z.jsx)(M.a.Section,{children:Object(z.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(z.jsx)(E.a,{onClick:function(){l(C(null))},children:"\u2190 \u041a \u0441\u043f\u0438\u0441\u043a\u0443 \u0433\u043e\u0440\u043e\u0434\u043e\u0432"}),Object(z.jsx)(E.a,{onClick:function(){return l(S(t)),void l(C(null))},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0433\u043e\u0440\u043e\u0434"})]})}),Object(z.jsxs)(M.a.Section,{children:[Object(z.jsxs)(J.a,{size:"large",children:[e.name,", ",e.country]}),null!==a?Object(z.jsx)(B,{weather:a}):Object(z.jsx)("div",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."})]})]})},K=n(226),P=n(224),Q=function(){var t=Object(i.c)((function(t){return t.cityId}));return Object(z.jsx)(K.a,{children:Object(z.jsx)(P.a,{children:null!==t?Object(z.jsx)(G,{}):Object(z.jsx)(V,{})})})},U=(n(210),n(5)),X=n(26),Z=n(62),$=n(112),tt=(n(211),{cities:function(){try{var t=JSON.parse(localStorage.getItem("cities"));return null!==t?t:[]}catch(e){return[]}}(),error:!1,cityId:null}),et=Object(Z.c)((function(t,e){switch(e.type){case h:return Object(X.a)(Object(X.a)({},t),{},{cities:[].concat(Object(U.a)(t.cities),[{id:e.payload.id,name:e.payload.name,country:e.payload.sys.country,lat:e.payload.coord.lat,lon:e.payload.coord.lon,fav:!1}])});case x:return Object(X.a)(Object(X.a)({},t),{},{cities:t.cities.filter((function(t){return parseInt(t.id)!==parseInt(e.payload)}))});case v:return Object(X.a)(Object(X.a)({},t),{},{cities:t.cities.map((function(t){return parseInt(t.id)===parseInt(e.payload)?Object(X.a)(Object(X.a)({},t),{},{fav:!t.fav}):t}))});case m:return Object(X.a)(Object(X.a)({},t),{},{error:!0});case y:return Object(X.a)(Object(X.a)({},t),{},{error:!1});case w:return Object(X.a)(Object(X.a)({},t),{},{cityId:e.payload});default:return t}}),tt,Object(Z.a)($.a));et.subscribe((function(){!function(t){try{localStorage.setItem("cities",JSON.stringify(t))}catch(e){}}(et.getState().cities)})),a.a.render(Object(z.jsx)(i.a,{store:et,children:Object(z.jsx)(Q,{})}),document.getElementById("root"))}},[[212,1,2]]]);
//# sourceMappingURL=main.f561160f.chunk.js.map