(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0GIF":function(n,e,t){var a=t("mp5j");n.exports=(a.default||a).template({1:function(n,e,t,a,l){var i,o,r=null!=e?e:n.nullContext||{},c=n.hooks.helperMissing,s="function",u=n.escapeExpression,d=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'  <li class="lbr-movie-card" data-id='+u(typeof(o=null!=(o=d(t,"id")||(null!=e?d(e,"id"):e))?o:c)===s?o.call(r,{name:"id",hash:{},data:l,loc:{start:{line:3,column:37},end:{line:3,column:43}}}):o)+">\n"+(null!=(i=d(t,"if").call(r,null!=e?d(e,"poster_path"):e,{name:"if",hash:{},fn:n.program(2,l,0),inverse:n.program(4,l,0),data:l,loc:{start:{line:4,column:4},end:{line:9,column:11}}}))?i:"")+'    <div class="lbr-movie__info">\n      <p class="lbr-movie__name">'+u(typeof(o=null!=(o=d(t,"title")||(null!=e?d(e,"title"):e))?o:c)===s?o.call(r,{name:"title",hash:{},data:l,loc:{start:{line:11,column:33},end:{line:11,column:42}}}):o)+' </p>\n      <p class="lbr-movie__date">'+u(typeof(o=null!=(o=d(t,"release_date")||(null!=e?d(e,"release_date"):e))?o:c)===s?o.call(r,{name:"release_date",hash:{},data:l,loc:{start:{line:12,column:33},end:{line:12,column:49}}}):o)+'</p>\n      <p class="lbr-movie__scores">Vote / Votes</p>\n      <p class="lbr-scores__data">\n        <span class="scores__rating--orange">'+u(typeof(o=null!=(o=d(t,"vote_average")||(null!=e?d(e,"vote_average"):e))?o:c)===s?o.call(r,{name:"vote_average",hash:{},data:l,loc:{start:{line:15,column:45},end:{line:15,column:61}}}):o)+'</span> /\n        <span class="scores__rating">'+u(typeof(o=null!=(o=d(t,"vote_count")||(null!=e?d(e,"vote_count"):e))?o:c)===s?o.call(r,{name:"vote_count",hash:{},data:l,loc:{start:{line:16,column:37},end:{line:16,column:51}}}):o)+'</span>\n      </p>\n      <p class="lbr-details__name">Popularity</p>\n      <p class="lbr-details__data">'+u(typeof(o=null!=(o=d(t,"popularity")||(null!=e?d(e,"popularity"):e))?o:c)===s?o.call(r,{name:"popularity",hash:{},data:l,loc:{start:{line:19,column:35},end:{line:19,column:49}}}):o)+'</p>\n      <p class="lbr-movie__genres">Genre</p>\n      <p class="movie__genres--list">\n'+(null!=(i=d(t,"each").call(r,null!=e?d(e,"genres"):e,{name:"each",hash:{},fn:n.program(6,l,0),inverse:n.noop,data:l,loc:{start:{line:22,column:8},end:{line:24,column:17}}}))?i:"")+'      </p>\n      <p class="lbr-movie__about">About</p>\n      <p class="lbr-movie__text">'+u(typeof(o=null!=(o=d(t,"overview")||(null!=e?d(e,"overview"):e))?o:c)===s?o.call(r,{name:"overview",hash:{},data:l,loc:{start:{line:27,column:33},end:{line:27,column:45}}}):o)+'</p>\n    </div>\n    <div class="overlay">\n      <button type="button" class="delete"></button>\n    </div>\n  </li>\n'},2:function(n,e,t,a,l){var i,o=null!=e?e:n.nullContext||{},r=n.hooks.helperMissing,c=n.escapeExpression,s=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'    <img class="lbr-movie__img" src="https://image.tmdb.org/t/p/original'+c("function"==typeof(i=null!=(i=s(t,"poster_path")||(null!=e?s(e,"poster_path"):e))?i:r)?i.call(o,{name:"poster_path",hash:{},data:l,loc:{start:{line:5,column:72},end:{line:5,column:87}}}):i)+'" alt="'+c("function"==typeof(i=null!=(i=s(t,"title")||(null!=e?s(e,"title"):e))?i:r)?i.call(o,{name:"title",hash:{},data:l,loc:{start:{line:5,column:94},end:{line:5,column:103}}}):i)+'" />\n'},4:function(n,e,t,a,l){var i,o=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'    <img class="lbr-movie__img" src="https://dummyimage.com/400x600/cfcfcf/ffffff&text=NO+IMAGE+AVAILABLE"\n      alt="'+n.escapeExpression("function"==typeof(i=null!=(i=o(t,"title")||(null!=e?o(e,"title"):e))?i:n.hooks.helperMissing)?i.call(null!=e?e:n.nullContext||{},{name:"title",hash:{},data:l,loc:{start:{line:8,column:11},end:{line:8,column:20}}}):i)+'" />\n'},6:function(n,e,t,a,l){var i=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'        <span class="genres__item">'+n.escapeExpression(n.lambda(null!=e?i(e,"name"):e,e))+"</span>\n"},compiler:[8,">= 4.3.0"],main:function(n,e,t,a,l){var i;return'<ul class="library-movies">\n'+(null!=(i=(n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]})(t,"each").call(null!=e?e:n.nullContext||{},e,{name:"each",hash:{},fn:n.program(1,l,0),inverse:n.noop,data:l,loc:{start:{line:2,column:2},end:{line:33,column:12}}}))?i:"")+"</ul>"},useData:!0})},Es2j:function(n,e,t){var a=t("mp5j");n.exports=(a.default||a).template({1:function(n,e,t,a,l){var i,o,r=null!=e?e:n.nullContext||{},c=n.hooks.helperMissing,s=n.escapeExpression,u=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'  <li class="main__list__card">\n    <div class="main__list__img">\n'+(null!=(i=u(t,"if").call(r,null!=e?u(e,"poster_path"):e,{name:"if",hash:{},fn:n.program(2,l,0),inverse:n.noop,data:l,loc:{start:{line:5,column:6},end:{line:7,column:13}}}))?i:"")+'      <p class="title__film">'+s("function"==typeof(o=null!=(o=u(t,"title")||(null!=e?u(e,"title"):e))?o:c)?o.call(r,{name:"title",hash:{},data:l,loc:{start:{line:8,column:29},end:{line:8,column:38}}}):o)+' </p>\n      <div class="movie__box">\n        <p class="title__description">\n'+(null!=(i=u(t,"if").call(r,null!=e?u(e,"genre_ids"):e,{name:"if",hash:{},fn:n.program(4,l,0),inverse:n.noop,data:l,loc:{start:{line:11,column:10},end:{line:14,column:17}}}))?i:"")+'          <span class="title__description">'+s("function"==typeof(o=null!=(o=u(t,"release_date")||(null!=e?u(e,"release_date"):e))?o:c)?o.call(r,{name:"release_date",hash:{},data:l,loc:{start:{line:15,column:43},end:{line:15,column:59}}}):o)+"</span>\n        </p>        \n      </div>\n    </div>\n  </li>\n"},2:function(n,e,t,a,l){var i,o=null!=e?e:n.nullContext||{},r=n.hooks.helperMissing,c=n.escapeExpression,s=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return"      <img data-id="+c("function"==typeof(i=null!=(i=s(t,"id")||(null!=e?s(e,"id"):e))?i:r)?i.call(o,{name:"id",hash:{},data:l,loc:{start:{line:6,column:19},end:{line:6,column:25}}}):i)+' class="main__list__img--poster" src="https://image.tmdb.org/t/p/original'+c("function"==typeof(i=null!=(i=s(t,"poster_path")||(null!=e?s(e,"poster_path"):e))?i:r)?i.call(o,{name:"poster_path",hash:{},data:l,loc:{start:{line:6,column:98},end:{line:6,column:113}}}):i)+'" alt="'+c("function"==typeof(i=null!=(i=s(t,"title")||(null!=e?s(e,"title"):e))?i:r)?i.call(o,{name:"title",hash:{},data:l,loc:{start:{line:6,column:120},end:{line:6,column:129}}}):i)+'" />\n'},4:function(n,e,t,a,l){var i,o=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'          <span class="title__description">'+n.escapeExpression("function"==typeof(i=null!=(i=o(t,"genre_ids")||(null!=e?o(e,"genre_ids"):e))?i:n.hooks.helperMissing)?i.call(null!=e?e:n.nullContext||{},{name:"genre_ids",hash:{},data:l,loc:{start:{line:12,column:43},end:{line:12,column:56}}}):i)+"</span>\n          &nbsp;|&nbsp;\n"},compiler:[8,">= 4.3.0"],main:function(n,e,t,a,l){var i;return'<ul class="main__list">\n'+(null!=(i=(n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]})(t,"each").call(null!=e?e:n.nullContext||{},e,{name:"each",hash:{},fn:n.program(1,l,0),inverse:n.noop,data:l,loc:{start:{line:2,column:2},end:{line:20,column:12}}}))?i:"")+"</ul>"},useData:!0})},QfWi:function(n,e,t){"use strict";t.r(e);var a=t("czhI"),l=t.n(a);l.a.defaults.baseURL="https://api.themoviedb.org/3";var i="132f2a543c82d69a556f0bb280a697a7",o=function(n){return l.a.get("/trending/movie/day?api_key=".concat(i,"&page=").concat(n)).then((function(n){return n.data.results}))},r=t("Np6Y"),c=t.n(r),s=t("Es2j"),u=t.n(s),d=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}],p=document.querySelector(".pagination"),m=document.querySelector("#main"),_=document.querySelector(".header-form__warning"),h=document.querySelectorAll(".header__link"),f=document.querySelector(".js-header-buttons"),v={form:document.querySelector(".header-form"),searchForm:document.querySelector(".search-form"),pagination:p,main:m,warning:_,routes:h,buttonBox:f,header:document.querySelector("#header"),contactList:document.querySelector(".contacts"),footerBtn:document.querySelector(".footer__link")},g=function(n,e){var t=n.map((function(n){var e=[];if(n.genre_ids.map((function(n){var t=d.find((function(e){return e.id===n}));e.push(t.name)})),e.length>=3){var t=e.slice(0,2);t.push("Other"),n.genre_ids=t.join(", "),n.release_date=n.release_date.slice(0,4)}else n.genre_ids=e.join(", "),n.release_date&&(n.release_date=n.release_date.slice(0,4));return n}));e.innerHTML="";var a=u()(t);v.buttonBox.innerHTML="",v.form.classList.remove("none"),e.innerHTML=a},y=t("ZEAl"),b=(t("wOXV"),document.querySelector("#spin")),w=new y.a({lines:13,length:20,width:4,radius:15,scale:1.95,corners:.4,speed:1.5,rotate:37,animation:"spinner-line-fade-more",direction:2,color:"#f36c12",fadeColor:"transparent",top:"50%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e5,className:"spinner",position:"absolute"}),L=function(){return w.spin(b)},x=function(){return w.stop()},S=t("oMus"),O=t.n(S),k={},E=function(n,e){k.movie=n;var t=O()(n);v.form.classList.add("none"),v.header.className="header-detalis",P.clear(),e.insertAdjacentHTML("beforeend",t)};var j=function(){var n=document.querySelector(".js-btnWatched"),e=document.querySelector(".js-btnQueue"),t=JSON.parse(localStorage.getItem("watched"))||[],a=JSON.parse(localStorage.getItem("queue"))||[],l=k.movie.id;function i(n,e,t,a){var l=e.id;n.find((function(n){return n.id===l}))?(n=n.filter((function(n){return n.id!==l})),localStorage.setItem(a,JSON.stringify(n)),t.classList.remove("details__btn--in-the-list"),t.textContent="Add to ".concat(a)):(n.push(e),localStorage.setItem(a,JSON.stringify(n)),t.classList.add("details__btn--in-the-list"),t.textContent="In ".concat(a," list"))}t.find((function(n){return n.id===l}))&&(n.classList.add("details__btn--in-the-list"),n.textContent="In watched list"),a.find((function(n){return n.id===l}))&&(e.classList.add("details__btn--in-the-list"),e.textContent="In queue list"),n.addEventListener("click",(function(){i(JSON.parse(localStorage.getItem("watched"))||[],k.movie,n,"watched")})),e.addEventListener("click",(function(){i(JSON.parse(localStorage.getItem("queue"))||[],k.movie,e,"queue")}))},M=function(){document.querySelector(".main__list").addEventListener("click",(function(n){n.preventDefault(),v.warning.textContent="";var e,t=n.target.dataset.id;(e=Number(t),l.a.get("/movie/".concat(e,"?api_key=").concat(i)).then((function(n){return n.data}))).then((function(n){v.main.innerHTML="",E(n,v.main),v.routes.forEach((function(n){return n.classList.remove("selected")}))})).then((function(){return j()}))}))},q=function(n){v.warning.textContent="",L(),o(n).then((function(n){g(n,v.main)})).then((function(){return M()})).then((function(){return x()})).catch((function(n){return console.log(n)}))},P={items:null,init:function(){var n=this;l.a.get("/trending/movie/day?api_key=".concat(i)).then((function(n){return n.data})).then((function(e){return n.items=e.total_pages})).then((function(){var e=document.createElement("div");e.classList.add("pagination__wrapper"),v.pagination.append(e);var t={currentPage:1,totalItems:n.items,itemsPerPage:1,step:2,onInit:a},a=function(n){q(n)},l=new c.a(e,t);e.querySelector(".arrowLeft").innerHTML="",e.querySelector(".arrowRight").innerHTML="",l.onPageChanged(a)}))},clear:function(){v.pagination.innerHTML=""}},C=t("0GIF"),A=t.n(C),I=function(){document.querySelector(".library-movies").addEventListener("click",(function(n){if("BUTTON"===n.target.nodeName){var e=n.path[2].dataset.id;if("watched"===document.querySelector(".library__button--active").textContent.toLowerCase()){var t=JSON.parse(localStorage.getItem("watched")).filter((function(n){return n.id!=e})),a=JSON.stringify(t);localStorage.setItem("watched",a),N.getWatched()}if("queue"===document.querySelector(".library__button--active").textContent.toLowerCase()){var l=JSON.parse(localStorage.getItem("queue")).filter((function(n){return n.id!=e})),i=JSON.stringify(l);localStorage.setItem("queue",i),N.getQueue()}}}))},T=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=document.createElement("div"),a='<h2 class="placeholder-watched">Please add some movies to <span class="'.concat(e,' lib">').concat(e,"</span>!</h2>");t.innerHTML=a,t.classList.add("placeholder__wrapper"),n.append(t)},N={getWatched:function(){var n=JSON.parse(localStorage.getItem("watched"))||[];v.main.innerHTML="",0===n.length&&T(v.main,"watched"),this.myLibraryMarkUp(n,v.main),I()},getQueue:function(){var n=JSON.parse(localStorage.getItem("queue"))||[];v.main.innerHTML="",0===n.length&&T(v.main,"queue"),this.myLibraryMarkUp(n,v.main),I()},myLibraryMarkUp:function(n,e){var t=n.map((function(n){return n.release_date=n.release_date.slice(0,4),n})),a=A()(t);e.insertAdjacentHTML("beforeend",a)},init:function(){var n,e=this;v.form.classList.add("none"),v.buttonBox.innerHTML="";var t=document.createElement("button");t.type="button",t.classList.add("library__button"),t.classList.add("library__button--active"),t.textContent="Watched",t.addEventListener("click",(function(){a.classList.remove("library__button--active"),t.classList.add("library__button--active"),e.getWatched()}));var a=document.createElement("button");a.type="button",a.classList.add("library__button"),a.textContent="Queue",a.addEventListener("click",(function(){t.classList.remove("library__button--active"),a.classList.add("library__button--active"),e.getQueue()}));var l=[t,a];(n=v.buttonBox).append.apply(n,l),this.getWatched()}},H=function(n){var e=function(n){v.routes.forEach((function(n){return n.classList.remove("selected")})),document.querySelectorAll("#"+n).forEach((function(n){return n.classList.add("selected")}))},t=function(n,t){P.clear();var a=n.target.id;e(a),function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;v.warning.textContent="",v.header.className="home",L(),o(n).then((function(n){v.main.innerHTML="",g(n,v.main),M(v.main)})).then((function(){return x()})).catch((function(n){return console.log(n)}))}(t),P.init()},a=function(n){v.warning.textContent="";var t=n.target.id;L(),e(t),P.clear(),N.init(),v.header.className="my-library",x(),I()};window.onload=function(){window.home.addEventListener("click",(function(e){return t(e,n)})),window.mylibrary.addEventListener("click",(function(n){return a(n)}))}},J=function(){L(),o(1).then((function(n){g(n,v.main)})).then((function(){return M()})).then((function(){return x()})).catch((function(n){return console.log(n)})),document.querySelector("#home").classList.add("selected"),P.init(),H(1)},D=(t("h3ov"),function(){v.searchForm.addEventListener("submit",(function(n){n.preventDefault();var e=n.currentTarget,t=e.elements.query.value;t?t&&(v.warning.textContent="",v.main.innerHTML="",L(),function(n,e){if(n)return l.a.get("/search/movie?api_key=".concat(i,"&query=").concat(n,"&").concat(e)).then((function(n){return n.data.results}))}(t,1).then((function(n){if(0===n.length)throw v.warning.textContent="Search result not successfull. Enter correct movie name and try again",x(),new Error("Search result not successfull. Enter correct movie name and try again");g(n,v.main)})).then((function(){return x()})).then((function(){return M()})).catch((function(n){console.log(n)})),P.clear(),e.reset()):v.warning.textContent="Search result not successfull. Enter correct movie name and try again"}))}),R=t("R6tX"),V=t.n(R),W=t("vKSc"),B=t.n(W),F=V()(B.a);v.footerBtn.addEventListener("click",(function(){v.main.innerHTML="",v.main.insertAdjacentHTML("beforeend",F),P.clear()})),J(),D()},R6tX:function(n,e,t){var a=t("mp5j");n.exports=(a.default||a).template({compiler:[8,">= 4.3.0"],main:function(n,e,t,a,l){return'<h1 class="my-team">Our Team</h1>\n<ul class="contacts" id="cntcts">\n    <li class="contacts__item">\n        <div class="contacts__card">\n            <img src="https://wdho.ru/plugins/imageviewer/site/direct.php?s=ilYB&/Aleksandr.jpg" alt="Alexandr"\n                class="contacts__card__image" />\n            <div class="card__content">\n                <h2 class="card__name">Alexandr</h2>\n                <p class="card__description">\n                    Team Lead\n                </p>\n            </div>\n        </div>\n    </li>\n    <li class="contacts__item">\n        <div class="contacts__card">\n            <img src="\thttps://wdho.ru/plugins/imageviewer/site/direct.php?s=my7F&/Katya.jpg" alt="Katya"\n                class="contacts__card__image" />\n            <div class="card__content">\n                <h2 class="card__name">Katerina</h2>\n                <p class="card__description">\n                    Scrum Master\n                </p>\n            </div>\n        </div>\n    </li>\n    <li class="contacts__item">\n        <div class="contacts__card">\n            <img src="https://wdho.ru/plugins/imageviewer/site/direct.php?s=my7E&/Igor.jpg" alt="Igor"\n                class="contacts__card__image" />\n            <div class="card__content">\n                <h2 class="card__name">Ihor</h2>\n                <p class="card__description">\n                    Developer\n                </p>\n            </div>\n        </div>\n    </li>\n    <li class="contacts__item">\n        <div class="contacts__card">\n            <img src="https://wdho.ru/plugins/imageviewer/site/direct.php?s=ilYA&/Roman.jpg" alt="Roman"\n                class="contacts__card__image" />\n            <div class="card__content">\n                <h2 class="card__name">Roman</h2>\n                <p class="card__description">\n                    Developer\n                </p>\n            </div>\n        </div>\n    </li>\n    <li class="contacts__item">\n        <div class="contacts__card">\n            <img src="https://wdho.ru/plugins/imageviewer/site/direct.php?s=my7G&/Ruslan.jpg" alt="Ruslan"\n                class="contacts__card__image" />\n            <div class="card__content">\n                <h2 class="card__name">Ruslan</h2>\n                <p class="card__description">\n                    Developer\n                </p>\n            </div>\n        </div>\n    </li>\n    <li class="contacts__item">\n        <div class="contacts__card">\n            <img src="https://wdho.ru/plugins/imageviewer/site/direct.php?s=im6j&/Yaroslav.jpg" width="100px"\n                height="auto" alt="Yaroslav" class="contacts__card__image" />\n            <div class="card__content">\n                <h2 class="card__name">Yaroslav</h2>\n                <p class="card__description">\n                    Developer\n                </p>\n            </div>\n        </div>\n    </li>\n</ul>\n<div class="teacher">\n    <h2 class="h2__teacher">Our best teacher:<br></h2>\n    <div class="contacts__item__teacher">\n        <img src="https://wdho.ru/plugins/imageviewer/site/direct.php?s=im6i&/teacher.jpg"\n            alt="Andrey_Volosovich" class="img_teacher">\n            <div class="teacher__name">Andrey Volosovich</div>\n    </div>\n</div>\n'},useData:!0})},h3ov:function(n,e,t){},oMus:function(n,e,t){var a=t("mp5j");n.exports=(a.default||a).template({1:function(n,e,t,a,l){var i,o=null!=e?e:n.nullContext||{},r=n.hooks.helperMissing,c=n.escapeExpression,s=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'    <img class="details__img" src="https://image.tmdb.org/t/p/original'+c("function"==typeof(i=null!=(i=s(t,"poster_path")||(null!=e?s(e,"poster_path"):e))?i:r)?i.call(o,{name:"poster_path",hash:{},data:l,loc:{start:{line:4,column:70},end:{line:4,column:85}}}):i)+'" alt="'+c("function"==typeof(i=null!=(i=s(t,"title")||(null!=e?s(e,"title"):e))?i:r)?i.call(o,{name:"title",hash:{},data:l,loc:{start:{line:4,column:92},end:{line:4,column:101}}}):i)+'" />\n'},3:function(n,e,t,a,l){var i,o=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'    <img class="details__img" src="https://dummyimage.com/400x600/cfcfcf/ffffff&text=NO+IMAGE+AVAILABLE" alt="'+n.escapeExpression("function"==typeof(i=null!=(i=o(t,"title")||(null!=e?o(e,"title"):e))?i:n.hooks.helperMissing)?i.call(null!=e?e:n.nullContext||{},{name:"title",hash:{},data:l,loc:{start:{line:6,column:110},end:{line:6,column:119}}}):i)+'" />\n'},5:function(n,e,t,a,l){var i=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return"            <span>"+n.escapeExpression(n.lambda(null!=e?i(e,"name"):e,e))+"</span>\n"},compiler:[8,">= 4.3.0"],main:function(n,e,t,a,l){var i,o,r=null!=e?e:n.nullContext||{},c=n.hooks.helperMissing,s="function",u=n.escapeExpression,d=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'  <div class="details" data-id='+u(typeof(o=null!=(o=d(t,"id")||(null!=e?d(e,"id"):e))?o:c)===s?o.call(r,{name:"id",hash:{},data:l,loc:{start:{line:1,column:31},end:{line:1,column:37}}}):o)+'>\n    <div class="details__img-container">\n'+(null!=(i=d(t,"if").call(r,null!=e?d(e,"poster_path"):e,{name:"if",hash:{},fn:n.program(1,l,0),inverse:n.program(3,l,0),data:l,loc:{start:{line:3,column:6},end:{line:7,column:11}}}))?i:"")+'    </div>\n     \n    <div class="details__information">\n        <h2 class="details__titile">'+u(typeof(o=null!=(o=d(t,"title")||(null!=e?d(e,"title"):e))?o:c)===s?o.call(r,{name:"title",hash:{},data:l,loc:{start:{line:11,column:36},end:{line:11,column:45}}}):o)+'</h2>\n        <ul class="details__list">\n          <li class="details__item">\n            <p class="details__name">Vote / Votes</p>\n            <p class="details__data details__scores">\n              <span class="details__rating details__rating--orange">'+u(typeof(o=null!=(o=d(t,"vote_average")||(null!=e?d(e,"vote_average"):e))?o:c)===s?o.call(r,{name:"vote_average",hash:{},data:l,loc:{start:{line:16,column:68},end:{line:16,column:84}}}):o)+'</span>\n              <span class="details__rating--solidus"> / </span>\n              <span class="details__rating">'+u(typeof(o=null!=(o=d(t,"vote_count")||(null!=e?d(e,"vote_count"):e))?o:c)===s?o.call(r,{name:"vote_count",hash:{},data:l,loc:{start:{line:18,column:44},end:{line:18,column:58}}}):o)+'</span>\n            </p>\n          </li>\n          <li class="details__item">\n            <p class="details__name">Popularity</p>\n            <p class="details__data">'+u(typeof(o=null!=(o=d(t,"popularity")||(null!=e?d(e,"popularity"):e))?o:c)===s?o.call(r,{name:"popularity",hash:{},data:l,loc:{start:{line:23,column:37},end:{line:23,column:51}}}):o)+'</p>\n          </li>\n          <li class="details__item">\n            <p class="details__name">Original title</p>\n            <p class="details__data details__data--upper">'+u(typeof(o=null!=(o=d(t,"title")||(null!=e?d(e,"title"):e))?o:c)===s?o.call(r,{name:"title",hash:{},data:l,loc:{start:{line:27,column:58},end:{line:27,column:67}}}):o)+'</p>\n          </li>\n          <li class="details__item">\n            <p class="details__name">Genre</p>\n            <p class="details__data">\n'+(null!=(i=d(t,"each").call(r,null!=e?d(e,"genres"):e,{name:"each",hash:{},fn:n.program(5,l,0),inverse:n.noop,data:l,loc:{start:{line:32,column:12},end:{line:34,column:21}}}))?i:"")+'            </p>\n          </li>\n        </ul>\n        <h3 class="details__about">About</h3>\n        <p class="details__text">\n         '+u(typeof(o=null!=(o=d(t,"overview")||(null!=e?d(e,"overview"):e))?o:c)===s?o.call(r,{name:"overview",hash:{},data:l,loc:{start:{line:40,column:9},end:{line:40,column:21}}}):o)+'\n        </p>\n        <div class="details__box">\n          <button type=\'button\' class="details__btn js-btnWatched">Add to watched</button>\n          <button type=\'button\' class="details__btn js-btnQueue">Add to queue</button>\n        </div>\n    </div>\n  </div>'},useData:!0})},vKSc:function(n,e){},wOXV:function(n,e,t){}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.1d348146cb74cb5bc649.js.map