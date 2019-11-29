!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t,n){"use strict";t.__esModule=!0,t.extend=l,t.indexOf=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},t.escapeExpression=function(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}if(!o.test(e))return e;return e.replace(a,i)},t.isEmpty=function(e){return!e&&0!==e||!(!c(e)||0!==e.length)},t.createFrame=function(e){var t=l({},e);return t._parent=e,t},t.blockParams=function(e,t){return e.path=t,e},t.appendContextPath=function(e,t){return(e?e+".":"")+t};var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},a=/[&<>"'`=]/g,o=/[&<>"'`=]/;function i(e){return r[e]}function l(e){for(var t=1;t<arguments.length;t++)for(var n in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],n)&&(e[n]=arguments[t][n]);return e}var s=Object.prototype.toString;t.toString=s;var u=function(e){return"function"==typeof e};u(/x/)&&(t.isFunction=u=function(e){return"function"==typeof e&&"[object Function]"===s.call(e)}),t.isFunction=u;var c=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===s.call(e)};t.isArray=c},function(e,t,n){"use strict";t.__esModule=!0;var r=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];function a(e,t){var n=t&&t.loc,o=void 0,i=void 0,l=void 0,s=void 0;n&&(o=n.start.line,i=n.end.line,l=n.start.column,s=n.end.column,e+=" - "+o+":"+l);for(var u=Error.prototype.constructor.call(this,e),c=0;c<r.length;c++)this[r[c]]=u[r[c]];Error.captureStackTrace&&Error.captureStackTrace(this,a);try{n&&(this.lineNumber=o,this.endLineNumber=i,Object.defineProperty?(Object.defineProperty(this,"column",{value:l,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:s,enumerable:!0})):(this.column=l,this.endColumn=s))}catch(e){}}a.prototype=new Error,t.default=a,e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.HandlebarsEnvironment=u;var a=n(0),o=r(n(1)),i=n(3),l=n(18),s=r(n(20));t.VERSION="4.5.3";t.COMPILER_REVISION=8;t.LAST_COMPATIBLE_COMPILER_REVISION=7;t.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};function u(e,t,n){this.helpers=e||{},this.partials=t||{},this.decorators=n||{},i.registerDefaultHelpers(this),l.registerDefaultDecorators(this)}u.prototype={constructor:u,logger:s.default,log:s.default.log,registerHelper:function(e,t){if("[object Object]"===a.toString.call(e)){if(t)throw new o.default("Arg not supported with multiple helpers");a.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if("[object Object]"===a.toString.call(e))a.extend(this.partials,e);else{if(void 0===t)throw new o.default('Attempting to register a partial called "'+e+'" as undefined');this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if("[object Object]"===a.toString.call(e)){if(t)throw new o.default("Arg not supported with multiple decorators");a.extend(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]}};var c=s.default.log;t.log=c,t.createFrame=a.createFrame,t.logger=s.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.registerDefaultHelpers=function(e){a.default(e),o.default(e),i.default(e),l.default(e),s.default(e),u.default(e),c.default(e)},t.moveHelperToHooks=function(e,t,n){e.helpers[t]&&(e.hooks[t]=e.helpers[t],n||delete e.helpers[t])};var a=r(n(11)),o=r(n(12)),i=r(n(13)),l=r(n(14)),s=r(n(15)),u=r(n(16)),c=r(n(17))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e){e.exports=JSON.parse('[{"id":"XWaQXcbk0","name":"Картофель, запеченный в мундире","description":"Ароматный, сытный, шипящий домашний картофель, фаршированный сметанно-беконной начинкой, — это очень простой и очень эффектный способ накормить большое количество человек, практически не потратив на готовку ни сил, ни времени. Обычную картошку при желании тут можно заменить на сладкий батат, а в начинку добавить, к примеру, кукурузу или сладкий красный перец.","image":"https://s1.eda.ru/StaticContent/Photos/140812180013/140820212258/p_O.jpg","price":100,"ingredients":["Картофель","Чеснок","Сметана","Бекон","Твердый сыр","Зеленый лук"]},{"id":"pkXzyRp1P","name":"Томатный магрибский суп","description":"Томатный магрибский суп особенно распространен в Марокко и Тунисе. Он весьма прост в приготовлении и сам по себе легкий — в основе томаты и куриный бульон. Кроме них в супе только необходимые специи, мед и лимон, которые все вместе и передают тот самый восточный колорит. Вкус супа всецело зависит от качества томатов. Дополнят блюдо свежая кинза и отдельные дольки лимона.","image":"https://www.go-cook.ru/wp-content/uploads/2014/11/magribskij-tomatnyj-sup.jpg","price":150,"ingredients":["Помидоры","Куриный бульон","Мед","Петрушка","Кинза","Паприка"]},{"id":"QMom9q4Ku","name":"Крем-суп из тыквы","description":"Портрет этой оранжевой похлебки украшает обложку книги «La Cuisine du Marché» Поля Бокюза. Бокюз, придумавший так называемую новую кухню, считал тыкву одной из основ этого миропорядка, а тыквенный суп — эдакой околоплодной водой гастрономии.","image":"https://s1.eda.ru/StaticContent/Photos/121114213720/151024152626/p_O.png","price":100,"ingredients":["Тыква","Петрушка","Сливки","Бренди","Куриный бульон"]},{"id":"k2k0UrjZG","name":"Салат из красной фасоли с творожным сыром","description":"Тосканский салат, выдержанный в колористике итальянского флага. Буквально нескольких ложек хватает, чтобы в желудке образовалась приятная тяжесть. Очень полезная штука с точки зрения утра, когда трудно запихнуть в себя крупные дозы биомассы, а есть при этом хочется.","image":"https://s.mediasole.ru/cache/content/data/images/1393/1393226/original.jpg","price":150,"ingredients":["Фасоль","Соль","Чеснок","Оливковое масло","Творожный сыр","Красный лук"]},{"id":"j2k8U1jZd","name":"Классический греческий салат ","description":"Это рецепт из старой, привезенной из Греции, кулинарной книги. Секрет салата — свежайшие овощи и хорошая фета. Для салата используют только оливковое масло, а такие специи, как орегано и базилик, являются визитной карточкой греческой кухни.","image":"https://dietdo.ru/wp-content/uploads/2017/03/Grecheskiy-salat-retsept-klassicheskiy-s-foto-poshagovo-min.jpg","price":350,"ingredients":["Оливковое масло","Лимонный сок","Чеснок","Помидоры","Красный лук","Сыр фета","Маслины"]},{"id":"X2aQ7cvkd","name":"Маффины с голубикой и мускатным орехом","description":"Культовая ягода, которую научились производить круглый год, в сочетании с рыхлым тестом — это абсолютно беспроигрышный вариант. Маффины с голубикой стали популярным десертом в Англии и Америке, хотя происхождение их французское. Да и вообще эти маленькие сладкие кексы, какими мы их знаем сейчас, задумывались как обычный хлеб и на вкус были нейтральны.","image":"https://s1.eda.ru/StaticContent/Photos/120131111301/140324110953/p_O.jpg","price":170,"ingredients":["Сливочное масло","Пшеничная мука","Голубика","Ванильный экстракт","Мускатный орех"]},{"id":"nk3zy1pf8","name":"Азу по‑татарски","description":"Одно из немногих блюд, удостоившихся в советской продуктовой традиции продажи с именной нарезкой. И до сих пор в кулинариях и супермаркетах можно найти говядину, которую режут соломкой и продают как азу. Насчет самого блюда до сих пор идут споры, как и с чем готовить: использовать говядину или баранину, топленое или обычное масло, тушить в казане или сотейнике с толстым дном. Редакций этого блюда может быть много, но основа его всегда неизменна — это нарезанное соломкой мясо, картофель и томатный соус.","image":"https://s2.eda.ru/StaticContent/Photos/160105153525/160110193232/p_O.jpg","price":270,"ingredients":["Говядина","Соленые огурцы","Картофель","Мясной бульон","Чеснок"]},{"id":"b7k2U13fd","name":"Жареный рис с яйцом по‑китайски","description":"Жареный рис — довольно распространенный ингредиент блюд восточноазиатской кухни — готовить, в сущности, можно из остатков вчерашнего ужина. Только хорошо остывший, заранее сваренный рис, в идеале простоявший всю ночь в холодильнике, при попадании в раскаленный вок не расползется до состояния каши и не превратит содержимое сковородки в неповоротливый бесформенный ком.","image":"https://s2.eda.ru/StaticContent/Photos/150428090447/150505141508/p_O.jpg","price":240,"ingredients":["Круглый рис","Мини цукини","Тертый имбирь","Грибы шиитаке","Соевый соус","Кунжутное масло"]}]')},function(e,t,n){var r=n(9);e.exports=(r.default||r).template({1:function(e,t,n,r,a){return'        <li class="tag-list__item">'+e.escapeExpression(e.lambda(t,t))+"</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,r,a){var o,i,l=null!=t?t:e.nullContext||{},s=e.hooks.helperMissing,u="function",c=e.escapeExpression;return'<li class="menu__item">\r\n  <div class="card">\r\n    <img\r\n      src="'+c(typeof(i=null!=(i=n.image||(null!=t?t.image:t))?i:s)===u?i.call(l,{name:"image",hash:{},data:a,loc:{start:{line:4,column:11},end:{line:4,column:20}}}):i)+'"\r\n      alt="'+c(typeof(i=null!=(i=n.name||(null!=t?t.name:t))?i:s)===u?i.call(l,{name:"name",hash:{},data:a,loc:{start:{line:5,column:11},end:{line:5,column:19}}}):i)+'"\r\n      class="card__image"\r\n    />\r\n    <div class="card__content">\r\n      <h2 class="card__name">'+c(typeof(i=null!=(i=n.name||(null!=t?t.name:t))?i:s)===u?i.call(l,{name:"name",hash:{},data:a,loc:{start:{line:9,column:29},end:{line:9,column:37}}}):i)+'</h2>\r\n      <p class="card__price">\r\n        <i class="material-icons">\r\n          monetization_on\r\n        </i>\r\n        '+c(typeof(i=null!=(i=n.price||(null!=t?t.price:t))?i:s)===u?i.call(l,{name:"price",hash:{},data:a,loc:{start:{line:14,column:8},end:{line:14,column:17}}}):i)+'\r\n      </p>\r\n\r\n      <p class="card__descr">\r\n        '+c(typeof(i=null!=(i=n.description||(null!=t?t.description:t))?i:s)===u?i.call(l,{name:"description",hash:{},data:a,loc:{start:{line:18,column:8},end:{line:18,column:23}}}):i)+'\r\n      </p>\r\n\r\n      <ul class="tag-list">\r\n'+(null!=(o=n.each.call(l,null!=t?t.ingredients:t,{name:"each",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a,loc:{start:{line:22,column:8},end:{line:24,column:17}}}))?o:"")+'      </ul>\r\n    </div>\r\n\r\n    <button class="card__button button">\r\n      <i class="material-icons button__icon">\r\n        shopping_cart\r\n      </i>\r\n      В корзину\r\n    </button>\r\n  </div>\r\n</li>'},useData:!0})},function(e,t,n){"use strict";n.r(t);n(8);var r=n(5),a=n(6),o=n.n(a);const i={LIGHT:"light-theme",DARK:"dark-theme"},l={menu:document.querySelector(".js-menu"),body:document.querySelector("body"),switch:document.querySelector(".switch__input")};!function(e){const t=e.map(e=>o()(e)).join("");l.menu.insertAdjacentHTML("beforeend",t)}(r),l.switch.addEventListener("change",(function(){u===i.LIGHT||null===u?(l.body.classList.add(i.DARK),l.body.classList.remove(i.LIGHT),localStorage.setItem("theme",i.DARK),u=i.DARK,l.switch.setAttribute("checked",!0)):(l.body.classList.replace(i.DARK,i.LIGHT),localStorage.setItem("theme",i.LIGHT),u=i.LIGHT,l.switch.setAttribute("checked",!1))}));const s=i.LIGHT;let u;(u=localStorage.getItem("theme"))&&u!==s&&(l.body.classList.add(u),l.switch.setAttribute("checked",!0))},function(e,t,n){},function(e,t,n){e.exports=n(10).default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}t.__esModule=!0;var o=a(n(2)),i=r(n(21)),l=r(n(1)),s=a(n(0)),u=a(n(22)),c=r(n(23));function d(){var e=new o.HandlebarsEnvironment;return s.extend(e,o),e.SafeString=i.default,e.Exception=l.default,e.Utils=s,e.escapeExpression=s.escapeExpression,e.VM=u,e.template=function(t){return u.template(t,e)},e}var p=d();p.create=d,c.default(p),p.default=p,t.default=p,e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0);t.default=function(e){e.registerHelper("blockHelperMissing",(function(t,n){var a=n.inverse,o=n.fn;if(!0===t)return o(this);if(!1===t||null==t)return a(this);if(r.isArray(t))return t.length>0?(n.ids&&(n.ids=[n.name]),e.helpers.each(t,n)):a(this);if(n.data&&n.ids){var i=r.createFrame(n.data);i.contextPath=r.appendContextPath(n.data.contextPath,n.name),n={data:i}}return o(t,n)}))},e.exports=t.default},function(e,t,n){"use strict";(function(r){t.__esModule=!0;var a,o=n(0),i=n(1),l=(a=i)&&a.__esModule?a:{default:a};t.default=function(e){e.registerHelper("each",(function(e,t){if(!t)throw new l.default("Must pass iterator to #each");var n,a=t.fn,i=t.inverse,s=0,u="",c=void 0,d=void 0;function p(t,n,r){c&&(c.key=t,c.index=n,c.first=0===n,c.last=!!r,d&&(c.contextPath=d+t)),u+=a(e[t],{data:c,blockParams:o.blockParams([e[t],t],[d+t,null])})}if(t.data&&t.ids&&(d=o.appendContextPath(t.data.contextPath,t.ids[0])+"."),o.isFunction(e)&&(e=e.call(this)),t.data&&(c=o.createFrame(t.data)),e&&"object"==typeof e)if(o.isArray(e))for(var f=e.length;s<f;s++)s in e&&p(s,s,s===e.length-1);else if(r.Symbol&&e[r.Symbol.iterator]){for(var h=[],m=e[r.Symbol.iterator](),g=m.next();!g.done;g=m.next())h.push(g.value);for(f=(e=h).length;s<f;s++)p(s,s,s===e.length-1)}else n=void 0,Object.keys(e).forEach((function(e){void 0!==n&&p(n,s-1),n=e,s++})),void 0!==n&&p(n,s-1,!0);return 0===s&&(u=i(this)),u}))},e.exports=t.default}).call(this,n(4))},function(e,t,n){"use strict";t.__esModule=!0;var r,a=n(1),o=(r=a)&&r.__esModule?r:{default:r};t.default=function(e){e.registerHelper("helperMissing",(function(){if(1!==arguments.length)throw new o.default('Missing helper: "'+arguments[arguments.length-1].name+'"')}))},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r,a=n(0),o=n(1),i=(r=o)&&r.__esModule?r:{default:r};t.default=function(e){e.registerHelper("if",(function(e,t){if(2!=arguments.length)throw new i.default("#if requires exactly one argument");return a.isFunction(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||a.isEmpty(e)?t.inverse(this):t.fn(this)})),e.registerHelper("unless",(function(t,n){if(2!=arguments.length)throw new i.default("#unless requires exactly one argument");return e.helpers.if.call(this,t,{fn:n.inverse,inverse:n.fn,hash:n.hash})}))},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("log",(function(){for(var t=[void 0],n=arguments[arguments.length-1],r=0;r<arguments.length-1;r++)t.push(arguments[r]);var a=1;null!=n.hash.level?a=n.hash.level:n.data&&null!=n.data.level&&(a=n.data.level),t[0]=a,e.log.apply(e,t)}))},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r=/^(constructor|__defineGetter__|__defineSetter__|__lookupGetter__|__proto__)$/;t.dangerousPropertyRegex=r,t.default=function(e){e.registerHelper("lookup",(function(e,t){return e?!r.test(String(t))||Object.prototype.propertyIsEnumerable.call(e,t)?e[t]:void 0:e}))}},function(e,t,n){"use strict";t.__esModule=!0;var r,a=n(0),o=n(1),i=(r=o)&&r.__esModule?r:{default:r};t.default=function(e){e.registerHelper("with",(function(e,t){if(2!=arguments.length)throw new i.default("#with requires exactly one argument");a.isFunction(e)&&(e=e.call(this));var n=t.fn;if(a.isEmpty(e))return t.inverse(this);var r=t.data;return t.data&&t.ids&&((r=a.createFrame(t.data)).contextPath=a.appendContextPath(t.data.contextPath,t.ids[0])),n(e,{data:r,blockParams:a.blockParams([e],[r&&r.contextPath])})}))},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.registerDefaultDecorators=function(e){o.default(e)};var r,a=n(19),o=(r=a)&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0);t.default=function(e){e.registerDecorator("inline",(function(e,t,n,a){var o=e;return t.partials||(t.partials={},o=function(a,o){var i=n.partials;n.partials=r.extend({},i,t.partials);var l=e(a,o);return n.partials=i,l}),t.partials[a.args[0]]=a.fn,o}))},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0),a={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){var t=r.indexOf(a.methodMap,e.toLowerCase());e=t>=0?t:parseInt(e,10)}return e},log:function(e){if(e=a.lookupLevel(e),"undefined"!=typeof console&&a.lookupLevel(a.level)<=e){var t=a.methodMap[e];console[t]||(t="log");for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];console[t].apply(console,r)}}};t.default=a,e.exports=t.default},function(e,t,n){"use strict";function r(e){this.string=e}t.__esModule=!0,r.prototype.toString=r.prototype.toHTML=function(){return""+this.string},t.default=r,e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.checkRevision=function(e){var t=e&&e[0]||1,n=l.COMPILER_REVISION;if(t>=l.LAST_COMPATIBLE_COMPILER_REVISION&&t<=l.COMPILER_REVISION)return;if(t<l.LAST_COMPATIBLE_COMPILER_REVISION){var r=l.REVISION_CHANGES[n],a=l.REVISION_CHANGES[t];throw new i.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+r+") or downgrade your runtime to an older version ("+a+").")}throw new i.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")},t.template=function(e,t){if(!t)throw new i.default("No environment passed to template");if(!e||!e.main)throw new i.default("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);var n=e.compiler&&7===e.compiler[0];var r={strict:function(e,t,n){if(!(e&&t in e))throw new i.default('"'+t+'" not defined in '+e,{loc:n});return e[t]},lookup:function(e,t){for(var n=e.length,r=0;r<n;r++)if(e[r]&&null!=e[r][t])return e[r][t]},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:a.escapeExpression,invokePartial:function(n,r,o){o.hash&&(r=a.extend({},r,o.hash),o.ids&&(o.ids[0]=!0)),n=t.VM.resolvePartial.call(this,n,r,o);var l=a.extend({},o,{hooks:this.hooks}),s=t.VM.invokePartial.call(this,n,r,l);if(null==s&&t.compile&&(o.partials[o.name]=t.compile(n,e.compilerOptions,t),s=o.partials[o.name](r,l)),null!=s){if(o.indent){for(var u=s.split("\n"),c=0,d=u.length;c<d&&(u[c]||c+1!==d);c++)u[c]=o.indent+u[c];s=u.join("\n")}return s}throw new i.default("The partial "+o.name+" could not be compiled when running in runtime-only mode")},fn:function(t){var n=e[t];return n.decorator=e[t+"_d"],n},programs:[],program:function(e,t,n,r,a){var o=this.programs[e],i=this.fn(e);return t||a||r||n?o=u(this,e,i,t,n,r,a):o||(o=this.programs[e]=u(this,e,i)),o},data:function(e,t){for(;e&&t--;)e=e._parent;return e},nullContext:Object.seal({}),noop:t.VM.noop,compilerInfo:e.compiler};function o(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],a=n.data;o._setup(n),!n.partial&&e.useData&&(a=function(e,t){t&&"root"in t||((t=t?l.createFrame(t):{}).root=e);return t}(t,a));var i=void 0,s=e.useBlockParams?[]:void 0;function u(t){return""+e.main(r,t,r.helpers,r.partials,a,s,i)}return e.useDepths&&(i=n.depths?t!=n.depths[0]?[t].concat(n.depths):n.depths:[t]),(u=d(e.main,u,r,n.depths||[],a,s))(t,n)}return o.isTop=!0,o._setup=function(o){if(o.partial)r.helpers=o.helpers,r.partials=o.partials,r.decorators=o.decorators,r.hooks=o.hooks;else{r.helpers=a.extend({},t.helpers,o.helpers),e.usePartial&&(r.partials=a.extend({},t.partials,o.partials)),(e.usePartial||e.useDecorators)&&(r.decorators=a.extend({},t.decorators,o.decorators)),r.hooks={};var i=o.allowCallsToHelperMissing||n;s.moveHelperToHooks(r,"helperMissing",i),s.moveHelperToHooks(r,"blockHelperMissing",i)}},o._child=function(t,n,a,o){if(e.useBlockParams&&!a)throw new i.default("must pass block params");if(e.useDepths&&!o)throw new i.default("must pass parent depths");return u(r,t,e[t],n,0,a,o)},o},t.wrapProgram=u,t.resolvePartial=function(e,t,n){e?e.call||n.name||(n.name=e,e=n.partials[e]):e="@partial-block"===n.name?n.data["partial-block"]:n.partials[n.name];return e},t.invokePartial=function(e,t,n){var r=n.data&&n.data["partial-block"];n.partial=!0,n.ids&&(n.data.contextPath=n.ids[0]||n.data.contextPath);var o=void 0;n.fn&&n.fn!==c&&function(){n.data=l.createFrame(n.data);var e=n.fn;o=n.data["partial-block"]=function(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return n.data=l.createFrame(n.data),n.data["partial-block"]=r,e(t,n)},e.partials&&(n.partials=a.extend({},n.partials,e.partials))}();void 0===e&&o&&(e=o);if(void 0===e)throw new i.default("The partial "+n.name+" could not be found");if(e instanceof Function)return e(t,n)},t.noop=c;var r,a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0)),o=n(1),i=(r=o)&&r.__esModule?r:{default:r},l=n(2),s=n(3);function u(e,t,n,r,a,o,i){function l(t){var a=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],l=i;return!i||t==i[0]||t===e.nullContext&&null===i[0]||(l=[t].concat(i)),n(e,t,e.helpers,e.partials,a.data||r,o&&[a.blockParams].concat(o),l)}return(l=d(n,l,e,i,r,o)).program=t,l.depth=i?i.length:0,l.blockParams=a||0,l}function c(){return""}function d(e,t,n,r,o,i){if(e.decorator){var l={};t=e.decorator(t,l,n,r&&r[0],o,i,r),a.extend(t,l)}return t}},function(e,t,n){"use strict";(function(n){t.__esModule=!0,t.default=function(e){var t=void 0!==n?n:window,r=t.Handlebars;e.noConflict=function(){return t.Handlebars===e&&(t.Handlebars=r),e}},e.exports=t.default}).call(this,n(4))}]);
//# sourceMappingURL=main.bundle.js.map