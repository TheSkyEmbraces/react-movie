(this["webpackJsonpreact-for-beginners"]=this["webpackJsonpreact-for-beginners"]||[]).push([[0],{17:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),i=c(10),s=c.n(i),a=c(5),j=c(2),o=c(6),d=c.n(o),u=c(7),m=c(4),b=c(1);var l=function(e){var t=e.coverImg,c=e.title,n=e.summary,r=e.genres;return e.id,Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{src:t,alt:""}),Object(b.jsx)("h2",{children:Object(b.jsx)(a.b,{to:"/",children:c})}),Object(b.jsx)("p",{children:n}),Object(b.jsx)("ul",{children:r.map((function(e){return Object(b.jsx)("li",{children:e},e)}))})]})};var O=function(){var e=Object(j.g)().id,t=Object(n.useState)(!0),c=Object(m.a)(t,2),r=c[0],i=c[1],s=Object(n.useState)([]),o=Object(m.a)(s,2),O=o[0],v=o[1],h=Object(n.useCallback)(Object(u.a)(d.a.mark((function t(){var c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(e));case 2:return t.next=4,t.sent.json();case 4:c=t.sent,v(c),i(!1);case 7:case"end":return t.stop()}}),t)}))),[e]);return Object(n.useEffect)((function(){h()}),[h]),console.log(O),Object(b.jsx)("div",{children:r?Object(b.jsx)("h2",{children:"Loading..."}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{children:Object(b.jsx)(a.b,{to:"/",children:"Home"})}),Object(b.jsx)("div",{children:"ok"===O.status?Object(b.jsx)(l,{coverImg:O.data.movie.medium_cover_image,title:O.data.movie.title,summary:O.data.movie.summary,genres:O.data.movie.genres,year:O.data.movie.year,runtime:O.data.movie.runtime,description_full:O.data.movie.description_full}):Object(b.jsx)("div",{children:"Something wrong on load data"})})]})})};var v=function(e){var t=e.coverImg,c=e.title,n=e.summary,r=e.genres,i=e.id;return Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{src:t,alt:""}),Object(b.jsx)("h2",{children:Object(b.jsx)(a.b,{to:"/movie/".concat(i),children:c})}),Object(b.jsx)("p",{children:n}),Object(b.jsx)("ul",{children:r.map((function(e){return Object(b.jsx)("li",{children:e},e)}))})]})};var h=function(){var e=Object(n.useState)(!0),t=Object(m.a)(e,2),c=t[0],r=t[1],i=Object(n.useState)([]),s=Object(m.a)(i,2),a=s[0],j=s[1],o=function(){var e=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year");case 2:return e.next=4,e.sent.json();case 4:t=e.sent,j(t.data.movies),r(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){o()}),[]),console.log(a),Object(b.jsx)("div",{children:c?Object(b.jsx)("h1",{children:"Loading ..."}):Object(b.jsx)("div",{children:a.map((function(e){return Object(b.jsx)(v,{id:e.id,coverImg:e.medium_cover_image,title:e.title,summary:e.summary,genres:e.genres},e.id)}))})})};var x=function(){return Object(b.jsx)(a.a,{children:Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{path:"".concat("/react-movie","/movie/:id"),element:Object(b.jsx)(O,{})}),Object(b.jsx)(j.a,{path:"".concat("/react-movie","/"),element:Object(b.jsx)(h,{})})]})})};s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.c514e94e.chunk.js.map