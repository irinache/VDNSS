(function(t){function e(e){for(var s,o,r=e[0],c=e[1],l=e[2],m=0,d=[];m<r.length;m++)o=r[m],n[o]&&d.push(n[o][0]),n[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],s=!0,r=1;r<i.length;r++){var c=i[r];0!==n[c]&&(s=!1)}s&&(a.splice(e--,1),t=o(o.s=i[0]))}return t}var s={},n={app:0},a=[];function o(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=s,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(i,s,function(e){return t[e]}.bind(null,s));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0200":function(t,e,i){"use strict";var s=i("346d"),n=i.n(s);n.a},"034f":function(t,e,i){"use strict";var s=i("64a9"),n=i.n(s);n.a},"0418":function(t,e,i){},"06c9":function(t,e,i){"use strict";var s=i("0418"),n=i.n(s);n.a},"0cfb":function(t,e,i){},"0f8e":function(t,e,i){},1198:function(t,e,i){"use strict";var s=i("81ce"),n=i.n(s);n.a},2372:function(t,e,i){var s={"./video_monitoring_headline.png":"945e"};function n(t){var e=a(t);return i(e)}function a(t){var e=s[t];if(!(e+1)){var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}return e}n.keys=function(){return Object.keys(s)},n.resolve=a,t.exports=n,n.id="2372"},"29eb":function(t,e,i){},"2b0e":function(t,e,i){"use strict";var s=i("29eb"),n=i.n(s);n.a},"2c38":function(t,e,i){},"33cc":function(t,e,i){},"346d":function(t,e,i){},"3b88":function(t,e,i){},"3f46":function(t,e,i){"use strict";var s=i("97dd"),n=i.n(s);n.a},4235:function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("097d");var s=i("ba4c"),n=i.n(s),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("Header"),i("router-view"),i("Footer")],1)},o=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",[i("router-link",{attrs:{to:"/",id:"logo"}}),t._m(0),i("MainMenu")],1)},c=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"contacts"},[i("div",{staticClass:"contact"},[i("div",{staticClass:"icon phone"}),i("div",{staticClass:"contacts_text"},[t._v("+38 067 47 85 459"),i("br"),t._v("+38 066 47 85 459")])]),i("div",{staticClass:"contact"},[i("div",{staticClass:"icon email"}),i("div",{staticClass:"contacts_text"},[t._v("ex@gmail.com")])]),i("div",{staticClass:"contact"},[i("div",{staticClass:"icon address"}),i("div",{staticClass:"contacts_text"},[t._v("Украина, г. Днепр"),i("br"),t._v("ул. Сафонова, 6")])])])}],l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("menu",[i("router-link",{staticClass:"menuitem",attrs:{to:"/video_monitoring"}},[i("div",{staticClass:"icon video_monitoring"}),i("p",{domProps:{innerHTML:t._s(t.services.video_monitoring)}})]),i("router-link",{staticClass:"menuitem",attrs:{to:"/video_monitoring"}},[i("div",{staticClass:"icon access_control"}),i("p",{domProps:{innerHTML:t._s(t.services.access_control)}})]),i("router-link",{staticClass:"menuitem",attrs:{to:"/video_monitoring"}},[i("div",{staticClass:"icon computer_networks"}),i("p",{domProps:{innerHTML:t._s(t.services.computer_networks)}})]),i("router-link",{staticClass:"menuitem",attrs:{to:"/video_monitoring"}},[i("div",{staticClass:"icon intercom"}),i("p",{domProps:{innerHTML:t._s(t.services.intercom)}})]),i("router-link",{staticClass:"menuitem",attrs:{to:"/video_monitoring"}},[i("div",{staticClass:"icon alarm"}),i("p",{domProps:{innerHTML:t._s(t.services.alarm)}})])],1)},u=[],m={data:function(){return{services:{video_monitoring:"Системы<br>видеонаблюдения",access_control:"Системы<br>контроля доступа",computer_networks:"Проектирование и монтаж<br>компьютерных сетей",intercom:"Домофонные<br>системы",alarm:"Пожарные и охранные<br>сигнализации"}}}},d=m,v=(i("1198"),i("2877")),_=Object(v["a"])(d,l,u,!1,null,"3c4360eb",null);_.options.__file="MainMenu.vue";var p=_.exports,f={components:{MainMenu:p}},h=f,C=(i("8a52"),Object(v["a"])(h,r,c,!1,null,"20b10426",null));C.options.__file="Header.vue";var g=C.exports,b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",[i("router-link",{attrs:{to:"/",id:"logo"}}),t._m(0)],1)},k=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"contacts"},[i("div",{staticClass:"contact"},[i("div",{staticClass:"icon phone"}),i("div",{staticClass:"contacts_text"},[t._v("+38 067 47 85 459"),i("br"),t._v("+38 066 47 85 459")])]),i("div",{staticClass:"contact"},[i("div",{staticClass:"icon email"}),i("div",{staticClass:"contacts_text"},[t._v("ex@gmail.com")])]),i("div",{staticClass:"contact"},[i("div",{staticClass:"icon address"}),i("div",{staticClass:"contacts_text"},[t._v("Украина, г. Днепр"),i("br"),t._v("ул. Сафонова, 6")])]),i("div",{staticClass:"social_networks"},[i("div",{staticClass:"sn_text"},[t._v("Социальные сети:")]),i("a",{staticClass:"sn instagram",attrs:{href:"#"}}),i("a",{staticClass:"sn twitter",attrs:{href:"#"}}),i("a",{staticClass:"sn facebook",attrs:{href:"#"}})])])}],x={},y=x,B=(i("f394"),Object(v["a"])(y,b,k,!1,null,"9fbb304a",null));B.options.__file="Footer.vue";var O=B.exports,D={name:"app",components:{Header:g,Footer:O}},E=D,w=(i("034f"),Object(v["a"])(E,a,o,!1,null,null,null));w.options.__file="App.vue";var q=w.exports,L=i("8c4f"),j=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("WelcomeBlock"),i("ServicesBlock"),i("StatisticsBlock"),i("TasksBlock"),i("WhyWeBlock"),i("StagesOfCoopBlock"),i("WeCooperateWithBlock"),i("Contacts")],1)},S=[],F=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"block welcome"},[i("h1",[t._v("ВДНСС")]),i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")]),i("br"),i("p",[t._v("Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")]),i("a",{staticClass:"arrow",attrs:{href:"#services"}})])}],I={},M=I,T=(i("9f8f"),Object(v["a"])(M,F,P,!1,null,"4e9ed422",null));T.options.__file="WelcomeBlock.vue";var W=T.exports,U=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},H=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"block",attrs:{id:"services"}},[i("h2",{staticClass:"center"},[t._v("НАШИ УСЛУГИ")]),i("a",{staticClass:"service",attrs:{href:"#"}},[i("div",{staticClass:"icon video_monitoring"}),i("h4",[t._v("Системы"),i("br"),t._v("видеонаблюдения")]),i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed")])]),i("a",{staticClass:"service",attrs:{href:"#"}},[i("div",{staticClass:"icon access_control"}),i("h4",[t._v("Системы контроля"),i("br"),t._v("доступа")]),i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed")])]),i("a",{staticClass:"service",attrs:{href:"#"}},[i("div",{staticClass:"icon computer_networks"}),i("h4",[t._v("Проектирование и монтаж"),i("br"),t._v("компьютерных сетей")]),i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed")])]),i("a",{staticClass:"service",attrs:{href:"#"}},[i("div",{staticClass:"icon intercom"}),i("h4",[t._v("Домофонные"),i("br"),t._v("cистемы")]),i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed")])]),i("a",{staticClass:"service",attrs:{href:"#"}},[i("div",{staticClass:"icon alarm"}),i("h4",[t._v("Пожарные и охранные"),i("br"),t._v("сигнализации")]),i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed")])])])}],A={},N=A,J=(i("06c9"),Object(v["a"])(N,U,H,!1,null,"d256ef78",null));J.options.__file="ServicesBlock.vue";var V=J.exports,z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"block statistics"},[i("ul",[i("li",[i("div",{staticClass:"icon clients"}),i("h1",{staticClass:"counter"},[t._v("\n\t\t\t"+t._s(t.clients)+"\n\t\t\t")]),t._m(0)]),i("li",[i("div",{staticClass:"icon years"}),i("h1",{staticClass:"counter"},[t._v("\n\t\t\t"+t._s(t.years)+"\n\t\t\t")]),t._m(1)]),i("li",[i("div",{staticClass:"icon tasks"}),i("h1",{staticClass:"counter"},[t._v("\n\t\t\t"+t._s(t.tasks)+"\n\t\t\t")]),t._m(2)]),i("li",[i("div",{staticClass:"icon houses"}),i("h1",{staticClass:"counter"},[t._v("\n\t\t\t"+t._s(t.houses)+"\n\t\t\t")]),t._m(3)])])])},G=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("\n\t\t\t\tДовольных"),i("br"),t._v("клиентов\n\t\t\t")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("\n\t\t\t\tЛет"),i("br"),t._v("на рынке\n\t\t\t")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("\n\t\t\t\tВыполнено"),i("br"),t._v("монтажных работ\n\t\t\t")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("\n\t\t\t\tОбъектов"),i("br"),t._v("под охраной\n\t\t\t")])}],K={data:function(){return{clients:3085,years:10,tasks:4534,houses:5447}},mounted:function(){$(".counter").counterUp({delay:10,time:2e3}),$(".counter").addClass("animated fadeInDownBig"),$("h3").addClass("animated fadeIn")}},Q=K,R=(i("e2c6"),Object(v["a"])(Q,z,G,!1,null,"0273895c",null));R.options.__file="StatisticsBlock.vue";var X=R.exports,Y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Z=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"block"},[i("div",{staticClass:"list"},[i("h2",{staticClass:"left"},[t._v("МЫ РЕШАЕМ ЗАДАЧИ")]),i("ul",[i("li",[i("div",{staticClass:"check"}),i("p",[t._v("Lorem ipsum dolor")])]),i("li",[i("div",{staticClass:"check"}),i("p",[t._v("Sit amet, consectetur")])]),i("li",[i("div",{staticClass:"check"}),i("p",[t._v("Adipiscing elit, sed do")])]),i("li",[i("div",{staticClass:"check"}),i("p",[t._v("Eiusmod tempor")])]),i("li",[i("div",{staticClass:"check"}),i("p",[t._v("Ut enim ad minim veniam")])])])]),i("div",{staticClass:"image"})])}],tt={},et=tt,it=(i("3f46"),Object(v["a"])(et,Y,Z,!1,null,"512b4f18",null));it.options.__file="TasksBlock.vue";var st=it.exports,nt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},at=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"block why_we"},[i("div",{staticClass:"image"}),i("div",{staticClass:"article"},[i("h2",{staticClass:"right"},[t._v("ПОЧЕМУ МЫ?")]),i("p",{staticClass:"text"},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "),i("br"),t._v(" Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\t\t")]),i("ul",[i("li",[i("div",{staticClass:"check"}),i("p",[t._v("Lorem ipsum dolor")])]),i("li",[i("div",{staticClass:"check"}),i("p",[t._v("Sit amet, consectetur")])]),i("li",[i("div",{staticClass:"check"}),i("p",[t._v("Adipiscing elit, sed do")])]),i("li",[i("div",{staticClass:"check"}),i("p",[t._v("Eiusmod tempor")])])])])])}],ot={},rt=ot,ct=(i("64ab"),Object(v["a"])(rt,nt,at,!1,null,"6452afe1",null));ct.options.__file="WhyWeBlock.vue";var lt=ct.exports,ut=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},mt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"block stages"},[i("h2",{staticClass:"light center"},[t._v("ЭТАПЫ СОТРУДНИЧЕСТВА")]),i("div",{staticClass:"squares"},[i("div",{staticClass:"square"},[i("div",{staticClass:"num"},[t._v("\n\t\t\t\t1\n\t\t\t")]),i("p",{staticClass:"light"},[t._v("Lorem ipsum")])]),i("div",{staticClass:"right_arrow"}),i("div",{staticClass:"square"},[i("div",{staticClass:"num"},[t._v("\n\t\t\t\t2\n\t\t\t")]),i("p",{staticClass:"light"},[t._v("Lorem ipsum")])]),i("div",{staticClass:"right_arrow"}),i("div",{staticClass:"square"},[i("div",{staticClass:"num"},[t._v("\n\t\t\t\t3\n\t\t\t")]),i("p",{staticClass:"light"},[t._v("Lorem ipsum")])]),i("div",{staticClass:"right_arrow"}),i("div",{staticClass:"square"},[i("div",{staticClass:"num"},[t._v("\n\t\t\t\t4\n\t\t\t")]),i("p",{staticClass:"light"},[t._v("Lorem ipsum")])])])])}],dt={},vt=dt,_t=(i("cc2a"),Object(v["a"])(vt,ut,mt,!1,null,"6a9f7441",null));_t.options.__file="StagesOfCoopBlock.vue";var pt=_t.exports,ft=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"block light_grey"},[i("h2",[t._v("МЫ СОТРУДНИЧАЕМ С")]),i("Slider")],1)},ht=[],Ct=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},gt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"slider"}},[i("button",{staticClass:"controls",attrs:{id:"previous"}}),i("ul",{attrs:{id:"slides"}},[i("li",{staticClass:"slide showing"}),i("li",{staticClass:"slide"}),i("li",{staticClass:"slide"}),i("li",{staticClass:"slide"})]),i("button",{staticClass:"controls",attrs:{id:"next"}})])}],bt={mounted:function(){var t=document.querySelectorAll("#slides .slide"),e=0,i=setInterval(a,2e3),s=document.getElementById("next"),n=document.getElementById("previous");function a(){r(e+1)}function o(){r(e-1)}function r(i){t[e].className="slide",e=(i+t.length)%t.length,t[e].className="slide showing"}s.onclick=function(){c(),a()},n.onclick=function(){c(),o()};function c(){!1,clearInterval(i)}}},kt=bt,xt=(i("904e"),Object(v["a"])(kt,Ct,gt,!1,null,"5da059b6",null));xt.options.__file="Slider.vue";var yt=xt.exports,Bt={components:{Slider:yt}},Ot=Bt,Dt=(i("c485"),Object(v["a"])(Ot,ft,ht,!1,null,"4814a95b",null));Dt.options.__file="WeCooperateWithBlock.vue";var Et=Dt.exports,wt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"block"},[i("h2",{staticClass:"center"},[t._v("КОНТАКТЫ")]),t._m(0),i("br"),i("div",{staticClass:"contacts"},[i("ContactForm"),t._m(1)],1)])},$t=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"map"},[i("iframe",{attrs:{src:"https://maps.google.com/maps?width=100%&height=440&hl=en&q=%D1%83%D0%BB.%20%D0%A1%D0%B0%D1%84%D0%BE%D0%BD%D0%BE%D0%B2%D0%B0%2C%205%2C%20%D0%94%D0%BD%D0%B5%D0%BF%D1%80%2C%20%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0+(%D0%9D%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)&ie=UTF8&t=&z=12&iwloc=B&output=embed",frameborder:"0",scrolling:"no",marginheight:"0",marginwidth:"0"}}),i("div",[i("small",[i("a",{attrs:{href:"https://embedgooglemaps.com/de/"}},[t._v("\r\n\t\t\t\thttps://embedgooglemaps.com/de/\r\n\t\t\t\t")])])]),i("div",[i("small",[i("a",{attrs:{href:"https://iamsterdamcard.it"}},[t._v("\r\n\t\t\t\tiamsterdam card.it\r\n\t\t\t")])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"info"},[i("div",{staticClass:"item"},[i("h3",{staticClass:"left"},[t._v("Телефон")]),i("p",[t._v("+38 067 85 67 486")]),i("p",[t._v("+38 067 85 67 486")])]),i("div",{staticClass:"item"},[i("h3",{staticClass:"left"},[t._v("Электронная почта")]),i("p",[t._v("ex@gmail.com")])]),i("div",{staticClass:"item"},[i("h3",{staticClass:"left"},[t._v("Адрес")]),i("p",[t._v("Украина, г.Днепр")]),i("p",[t._v("ул. Сафонова, 6")])])])}],qt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("form",{attrs:{method:"post"},on:{submit:t.checkForm}},[i("h3",{staticClass:"left"},[t._v("Контактная форма")]),t.empty_FIO?i("p",{staticClass:"err"},[t._v(t._s(t.err_msg_1))]):t._e(),i("input",{directives:[{name:"model",rawName:"v-model",value:t.FIO,expression:"FIO"}],attrs:{type:"text",placeholder:"ФИО"},domProps:{value:t.FIO},on:{input:function(e){e.target.composing||(t.FIO=e.target.value)}}}),t.empty_phone_num?i("p",{staticClass:"err"},[t._v(t._s(t.err_msg_2))]):t._e(),i("input",{directives:[{name:"model",rawName:"v-model",value:t.phone_num,expression:"phone_num"}],attrs:{type:"text",placeholder:"Номер телефона"},domProps:{value:t.phone_num},on:{input:function(e){e.target.composing||(t.phone_num=e.target.value)}}}),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment,expression:"comment"}],attrs:{type:"text",placeholder:"Комментарий"},domProps:{value:t.comment},on:{input:function(e){e.target.composing||(t.comment=e.target.value)}}}),i("input",{staticClass:"button",attrs:{type:"submit",value:"Перезвоните мне"}})])},Lt=[],jt={data:function(){return{FIO:null,empty_FIO:!1,err_msg_1:"Требуется указать ФИО.",phone_num:null,empty_phone_num:!1,err_msg_2:"Требуется указать номер телефона.",comment:null}},methods:{onCallBack:function(){alert("checking...")},checkForm:function(t){if(this.FIO&&this.phone_num)return!0;this.errors=[],this.FIO||(this.empty_FIO=!0),this.phone_num||(this.empty_phone_num=!0),this.FIO&&(this.empty_FIO=!1),this.phone_num&&(this.empty_phone_num=!1),t.preventDefault()}}},St=jt,Ft=(i("a8ed"),Object(v["a"])(St,qt,Lt,!1,null,"5ca6e82a",null));Ft.options.__file="ContactForm.vue";var Pt=Ft.exports,It={components:{ContactForm:Pt}},Mt=It,Tt=(i("c26d"),Object(v["a"])(Mt,wt,$t,!1,null,"fb7d2e04",null));Tt.options.__file="Contacts.vue";var Wt=Tt.exports,Ut={components:{WelcomeBlock:W,ServicesBlock:V,StatisticsBlock:X,TasksBlock:st,WhyWeBlock:lt,StagesOfCoopBlock:pt,WeCooperateWithBlock:Et,Contacts:Wt}},Ht=Ut,At=Object(v["a"])(Ht,j,S,!1,null,null,null);At.options.__file="MainPage.vue";var Nt=At.exports,Jt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Headline",{attrs:{type:"video_monitoring"}},[t._v("Системы видеонаблюдения")]),i("ServiceInfo",{attrs:{type:"video_monitoring"}}),i("PriceList"),i("ContactBlock")],1)},Vt=[],zt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"block headline",style:{"background-image":"url("+i("2372")("./"+t.type+"_headline.png")+")"}},[s("h1",[t._t("default")],2)])},Gt=[],Kt={props:{type:String},data:function(){return{video_monitoring:"video_monitoring"}}},Qt=Kt,Rt=(i("d527"),Object(v["a"])(Qt,zt,Gt,!1,null,"4c2c04b3",null));Rt.options.__file="Headline.vue";var Xt=Rt.exports,Yt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"block info"},[s("div",{staticClass:"article"},[s("p",{staticClass:"text",domProps:{innerHTML:t._s(t.text)}}),s("ul",t._l(t.vm_list,function(e){return s("li",[s("div",{staticClass:"check"}),s("p",[t._v(t._s(e))])])}),0)]),s("div",{staticClass:"image",style:{"background-image":"url("+i("63f6")("./"+t.type+"_img.png")+")"}})])},Zt=[],te={props:{type:String},data:function(){return{text:null,video_monitoring_text:"video_monitoring_text Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",intercom_text:"intercom_text Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",alarm_text:"alarm Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",access_control_text:"access_control Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",computer_networks_text:"computer_networks Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",vm_list:["Lorem ipsum dolor","Sit amet","Consectetur","Elit sed"]}},created:function(){"video_monitoring"==this.type?this.text=this.video_monitoring_text:"intercom"==this.type?this.text=this.intercom_text:"alarm"==this.type?this.text=this.alarm_text:"access_control"==this.type?this.text=this.access_control_text:"computer_networks"==this.type&&(this.text=this.computer_networks_text)}},ee=te,ie=(i("c295"),Object(v["a"])(ee,Yt,Zt,!1,null,"d390a976",null));ie.options.__file="ServiceInfo.vue";var se=ie.exports,ne=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"block"},[i("h2",{staticClass:"center"},[t._v("НАШИ ЦЕНЫ")]),i("PriceBlock",{attrs:{name:"Lorem",price:"5000",list:["Lorem","ipsum","dolor","sit"]}}),i("PriceBlock",{attrs:{name:"Lorem ipsum",price:"3000",list:["Lorem","ipsum","sit"]}}),i("PriceBlock",{attrs:{name:"Dolor",price:"4000",list:["Lorem","ipsum","dolor","sit"]}})],1)},ae=[],oe=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card"},[i("h3",{staticClass:"block_heading"},[t._v(t._s(t.name))]),i("h2",[t._v("от "+t._s(t.price)+" грн")]),i("div",{staticClass:"grey_bg"},[i("ul",t._l(t.list,function(e){return i("li",[i("div",{staticClass:"plus"}),i("p",[t._v(t._s(e))])])}),0),i("a",{attrs:{href:"#form"}},[t._v("\n                Оставить заявку\n            ")])])])},re=[],ce={props:{list:Array,name:String,price:String},data:function(){return{}}},le=ce,ue=(i("ce42"),Object(v["a"])(le,oe,re,!1,null,"5b41bd70",null));ue.options.__file="PriceBlock.vue";var me=ue.exports,de={components:{PriceBlock:me},props:{type:String},data:function(){return{}}},ve=de,_e=(i("5b4b"),Object(v["a"])(ve,ne,ae,!1,null,"d184fa68",null));_e.options.__file="PriceList.vue";var pe=_e.exports,fe=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"block"},[i("h2",{staticClass:"center"},[t._v("ОСТАВИТЬ ЗАЯВКУ")]),i("ContactForm")],1)},he=[],Ce={components:{ContactForm:Pt}},ge=Ce,be=(i("2b0e"),Object(v["a"])(ge,fe,he,!1,null,"02b8c84a",null));be.options.__file="ContactBlock.vue";var ke=be.exports,xe={components:{Headline:Xt,ServiceInfo:se,PriceList:pe,ContactBlock:ke}},ye=xe,Be=(i("0200"),Object(v["a"])(ye,Jt,Vt,!1,null,"77fb858a",null));Be.options.__file="Video_monitoring.vue";var Oe=Be.exports;n.a.use(L["a"]);var De=new L["a"]({mode:"history",routes:[{path:"/",name:"Home",component:Nt},{path:"/video_monitoring",name:"Video_monitoring",component:Oe}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:De,components:{App:q},template:"<App/>"})},"5b4b":function(t,e,i){"use strict";var s=i("ed46"),n=i.n(s);n.a},"63f6":function(t,e,i){var s={"./tasks_img.png":"e295","./video_monitoring_img.png":"ed05","./why_we_img.png":"c752"};function n(t){var e=a(t);return i(e)}function a(t){var e=s[t];if(!(e+1)){var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}return e}n.keys=function(){return Object.keys(s)},n.resolve=a,t.exports=n,n.id="63f6"},"64a9":function(t,e,i){},"64ab":function(t,e,i){"use strict";var s=i("3b88"),n=i.n(s);n.a},"81ce":function(t,e,i){},"8a52":function(t,e,i){"use strict";var s=i("4235"),n=i.n(s);n.a},"8d7d":function(t,e,i){},"8e7d":function(t,e,i){},"904e":function(t,e,i){"use strict";var s=i("cc39"),n=i.n(s);n.a},"945e":function(t,e,i){t.exports=i.p+"img/video_monitoring_headline.bc964e06.png"},"97dd":function(t,e,i){},"9f8f":function(t,e,i){"use strict";var s=i("0f8e"),n=i.n(s);n.a},a8ed:function(t,e,i){"use strict";var s=i("8e7d"),n=i.n(s);n.a},bfe9:function(t,e,i){},c26d:function(t,e,i){"use strict";var s=i("bfe9"),n=i.n(s);n.a},c295:function(t,e,i){"use strict";var s=i("0cfb"),n=i.n(s);n.a},c485:function(t,e,i){"use strict";var s=i("33cc"),n=i.n(s);n.a},c752:function(t,e,i){t.exports=i.p+"img/why_we_img.5b651c00.png"},cc2a:function(t,e,i){"use strict";var s=i("fab8"),n=i.n(s);n.a},cc39:function(t,e,i){},ce42:function(t,e,i){"use strict";var s=i("d7a7"),n=i.n(s);n.a},d527:function(t,e,i){"use strict";var s=i("f9e6"),n=i.n(s);n.a},d7a7:function(t,e,i){},e295:function(t,e,i){t.exports=i.p+"img/tasks_img.e0cad732.png"},e2c6:function(t,e,i){"use strict";var s=i("2c38"),n=i.n(s);n.a},ed05:function(t,e,i){t.exports=i.p+"img/video_monitoring_img.473fb1b5.png"},ed46:function(t,e,i){},f394:function(t,e,i){"use strict";var s=i("8d7d"),n=i.n(s);n.a},f9e6:function(t,e,i){},fab8:function(t,e,i){}});
//# sourceMappingURL=app.db641632.js.map