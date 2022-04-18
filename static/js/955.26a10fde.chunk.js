"use strict";(self.webpackChunkreact_homework_5_pysarenko=self.webpackChunkreact_homework_5_pysarenko||[]).push([[955],{722:function(e,t,r){r.d(t,{Z:function(){return c}});var n="Heading_heading__f8N4J",a=r(184);function c(e){var t=e.title;return(0,a.jsx)("h1",{className:n,children:t})}},9155:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(3504),a="MoviesList_moviesList__P6SP5",c="MoviesList_movie__gS8QL",s="MoviesList_movieLink__QlD4H",i="MoviesList_movieImage__xaeaC",u="MoviesList_movieTitle__CxO8p",o=r(184);function l(e){var t=e.movies;return(0,o.jsx)("ul",{className:a,children:t.map((function(e){return(0,o.jsx)("li",{className:c,children:(0,o.jsxs)(n.rU,{to:"/movies/".concat(e.id),className:s,children:[e.poster_path?(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),alt:e.title,className:i,width:"250"}):(0,o.jsx)("img",{src:"https://github.com/YuliiaPysarenko/media-files/raw/48e3b1ccd5838f7e4a04767b8d601692c13357bc/default_poster.jpg",alt:e.title,className:i,width:"250"}),(0,o.jsx)("p",{className:u,children:e.title})]})},e.id)}))})}},3714:function(e,t,r){r.d(t,{Df:function(){return o},IQ:function(){return f},Jh:function(){return h},TP:function(){return p},XT:function(){return l}});var n=r(5861),a=r(7757),c=r.n(a),s=r(4569),i=r.n(s);i().defaults.baseURL="https://api.themoviedb.org/3";var u="d01b93f6037a4d1c509361675c1b2760",o=function(){var e=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("/trending/movie/day?page=1&api_key=".concat(u));case 2:return t=e.sent,r=t.data.results,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("/search/movie?api_key=".concat(u,"&query=").concat(t,"&include_adult=false"));case 2:return r=e.sent,n=r.data.results,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("/movie/".concat(t,"?api_key=").concat(u));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("/movie/".concat(t,"/credits?api_key=").concat(u));case 2:return r=e.sent,n=r.data.cast,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("/movie/".concat(t,"/reviews?api_key=").concat(u));case 2:return r=e.sent,n=r.data.results,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},4955:function(e,t,r){r.r(t),r.d(t,{MoviesPage:function(){return m}});var n=r(8152),a=r(2791),c=r(722),s="Searchbar_Searchbar__5WKzV",i="Searchbar_SearchForm__XuPyK",u="Searchbar_SearchFormButton__dksRa",o="Searchbar_SearchFormButtonLabel__7AAWA",l="Searchbar_SearchFormInput__FT6Bx",p="Searchbar_icon__2A9yR",f=r(184);function h(e){var t=(0,a.useState)(""),r=(0,n.Z)(t,2),c=r[0],h=r[1],v=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",r=crypto.getRandomValues(new Uint8Array(e));e--;){var n=63&r[e];t+=n<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n<63?"_":"-"}return t}();return(0,f.jsx)("div",{className:s,children:(0,f.jsxs)("form",{className:i,onSubmit:function(t){t.preventDefault(),e.onSubmit(c),h("")},children:[(0,f.jsxs)("button",{type:"submit",className:u,children:[(0,f.jsx)("span",{className:o,children:"Search"}),(0,f.jsx)("svg",{width:"30",height:"30",className:p,viewBox:"0 0 32 32",children:(0,f.jsx)("path",{d:"M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"})})]}),(0,f.jsx)("input",{value:c,id:v,onChange:function(e){h(e.target.value)},className:l,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Looking for any movie? :)"})]})})}var v=r(9155),d=r(3714);function m(){var e=(0,a.useState)(null),t=(0,n.Z)(e,2),r=t[0],s=t[1],i=(0,a.useState)(null),u=(0,n.Z)(i,2),o=u[0],l=u[1];return(0,a.useEffect)((function(){(0,d.XT)(r).then(l)}),[r]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(c.Z,{title:"Movies"}),(0,f.jsx)(h,{onSubmit:function(e){s(e)}}),r&&(0,f.jsx)(a.Suspense,{fallback:(0,f.jsx)("div",{children:"Loading..."}),children:(0,f.jsx)(v.Z,{movies:o})})]})}}}]);
//# sourceMappingURL=955.26a10fde.chunk.js.map