/*! For license information please see grouprepos-files.js.LICENSE.txt */
(()=>{var e,r,n={79753:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getRootUrl=t.generateFilePath=t.imagePath=t.generateUrl=t.generateOcsUrl=t.generateRemoteUrl=t.linkTo=void 0,r(32359);t.linkTo=(e,t)=>o(e,"",t);t.generateRemoteUrl=e=>window.location.protocol+"//"+window.location.host+(e=>i()+"/remote.php/"+e)(e);t.generateOcsUrl=(e,t,r)=>{const o=1===Object.assign({ocsVersion:2},r||{}).ocsVersion?1:2;return window.location.protocol+"//"+window.location.host+i()+"/ocs/v"+o+".php"+n(e,t,r)};const n=(e,t,r)=>{const n=Object.assign({escape:!0},r||{});return"/"!==e.charAt(0)&&(e="/"+e),o=(o=t||{})||{},e.replace(/{([^{}]*)}/g,(function(e,t){var r=o[t];return n.escape?"string"==typeof r||"number"==typeof r?encodeURIComponent(r.toString()):encodeURIComponent(e):"string"==typeof r||"number"==typeof r?r.toString():e}));var o};t.generateUrl=(e,t,r)=>{const o=Object.assign({noRewrite:!1},r||{});return!0!==OC.config.modRewriteWorking||o.noRewrite?i()+"/index.php"+n(e,t,r):i()+n(e,t,r)};t.imagePath=(e,t)=>-1===t.indexOf(".")?o(e,"img",t+".svg"):o(e,"img",t);const o=(e,t,r)=>{const n=-1!==OC.coreApps.indexOf(e);let o=i();return"php"!==r.substring(r.length-3)||n?"php"===r.substring(r.length-3)||n?(o+="settings"!==e&&"core"!==e&&"search"!==e||"ajax"!==t?"/":"/index.php/",n||(o+="apps/"),""!==e&&(o+=e+="/"),t&&(o+=t+"/"),o+=r):(o=OC.appswebroots[e],t&&(o+="/"+t+"/"),"/"!==o.substring(o.length-1)&&(o+="/"),o+=r):(o+="/index.php/apps/"+e,"index.php"!==r&&(o+="/",t&&(o+=encodeURI(t+"/")),o+=r)),o};t.generateFilePath=o;const i=()=>OC.webroot;t.getRootUrl=i},12310:(e,t,r)=>{"use strict";var n=r(35642).charAt;e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},96943:(e,t,r)=>{var n=r(57199);e.exports=function(e){if(!n(e))throw TypeError(String(e)+" is not an object");return e}},33893:(e,t,r)=>{var n=r(18947),o=r(79917),i=r(3242),a=function(e){return function(t,r,a){var s,l=n(t),p=o(l.length),c=i(a,p);if(e&&r!=r){for(;p>c;)if((s=l[c++])!=s)return!0}else for(;p>c;c++)if((e||c in l)&&l[c]===r)return e||c||0;return!e&&-1}};e.exports={includes:a(!0),indexOf:a(!1)}},61672:e=>{var t={}.toString;e.exports=function(e){return t.call(e).slice(8,-1)}},22530:(e,t,r)=>{var n=r(90918),o=r(39652),i=r(63369),a=r(54769);e.exports=function(e,t){for(var r=o(t),s=a.f,l=i.f,p=0;p<r.length;p++){var c=r[p];n(e,c)||s(e,c,l(t,c))}}},78816:(e,t,r)=>{var n=r(19300),o=r(54769),i=r(33535);e.exports=n?function(e,t,r){return o.f(e,t,i(1,r))}:function(e,t,r){return e[t]=r,e}},33535:e=>{e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},19300:(e,t,r)=>{var n=r(83349);e.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},25085:(e,t,r)=>{var n=r(43005),o=r(57199),i=n.document,a=o(i)&&o(i.createElement);e.exports=function(e){return a?i.createElement(e):{}}},73785:(e,t,r)=>{var n=r(22679);e.exports=n("navigator","userAgent")||""},50218:(e,t,r)=>{var n,o,i=r(43005),a=r(73785),s=i.process,l=s&&s.versions,p=l&&l.v8;p?o=(n=p.split("."))[0]<4?1:n[0]+n[1]:a&&(!(n=a.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=a.match(/Chrome\/(\d+)/))&&(o=n[1]),e.exports=o&&+o},38063:e=>{e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},30935:(e,t,r)=>{var n=r(43005),o=r(63369).f,i=r(78816),a=r(35140),s=r(79398),l=r(22530),p=r(94049);e.exports=function(e,t){var r,c,u,f,d,g=e.target,h=e.global,v=e.stat;if(r=h?n:v?n[g]||s(g,{}):(n[g]||{}).prototype)for(c in t){if(f=t[c],u=e.noTargetGet?(d=o(r,c))&&d.value:r[c],!p(h?c:g+(v?".":"#")+c,e.forced)&&void 0!==u){if(typeof f==typeof u)continue;l(f,u)}(e.sham||u&&u.sham)&&i(f,"sham",!0),a(r,c,f,e)}}},83349:e=>{e.exports=function(e){try{return!!e()}catch(e){return!0}}},93748:(e,t,r)=>{"use strict";r(80500);var n=r(35140),o=r(45960),i=r(83349),a=r(58064),s=r(78816),l=a("species"),p=RegExp.prototype;e.exports=function(e,t,r,c){var u=a(e),f=!i((function(){var t={};return t[u]=function(){return 7},7!=""[e](t)})),d=f&&!i((function(){var t=!1,r=/a/;return"split"===e&&((r={}).constructor={},r.constructor[l]=function(){return r},r.flags="",r[u]=/./[u]),r.exec=function(){return t=!0,null},r[u](""),!t}));if(!f||!d||r){var g=/./[u],h=t(u,""[e],(function(e,t,r,n,i){var a=t.exec;return a===o||a===p.exec?f&&!i?{done:!0,value:g.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}}));n(String.prototype,e,h[0]),n(p,u,h[1])}c&&s(p[u],"sham",!0)}},22679:(e,t,r)=>{var n=r(21146),o=r(43005),i=function(e){return"function"==typeof e?e:void 0};e.exports=function(e,t){return arguments.length<2?i(n[e])||i(o[e]):n[e]&&n[e][t]||o[e]&&o[e][t]}},70572:(e,t,r)=>{var n=r(44561),o=Math.floor,i="".replace,a=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,s=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,r,l,p,c){var u=r+e.length,f=l.length,d=s;return void 0!==p&&(p=n(p),d=a),i.call(c,d,(function(n,i){var a;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,r);case"'":return t.slice(u);case"<":a=p[i.slice(1,-1)];break;default:var s=+i;if(0===s)return n;if(s>f){var c=o(s/10);return 0===c?n:c<=f?void 0===l[c-1]?i.charAt(1):l[c-1]+i.charAt(1):n}a=l[s-1]}return void 0===a?"":a}))}},43005:(e,t,r)=>{var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},90918:(e,t,r)=>{var n=r(44561),o={}.hasOwnProperty;e.exports=Object.hasOwn||function(e,t){return o.call(n(e),t)}},51418:e=>{e.exports={}},14922:(e,t,r)=>{var n=r(22679);e.exports=n("document","documentElement")},3723:(e,t,r)=>{var n=r(19300),o=r(83349),i=r(25085);e.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},23833:(e,t,r)=>{var n=r(83349),o=r(61672),i="".split;e.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?i.call(e,""):Object(e)}:Object},739:(e,t,r)=>{var n=r(57454),o=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(e){return o.call(e)}),e.exports=n.inspectSource},11864:(e,t,r)=>{var n,o,i,a=r(18442),s=r(43005),l=r(57199),p=r(78816),c=r(90918),u=r(57454),f=r(82051),d=r(51418),g="Object already initialized",h=s.WeakMap;if(a||u.state){var v=u.state||(u.state=new h),m=v.get,y=v.has,O=v.set;n=function(e,t){if(y.call(v,e))throw new TypeError(g);return t.facade=e,O.call(v,e,t),t},o=function(e){return m.call(v,e)||{}},i=function(e){return y.call(v,e)}}else{var b=f("state");d[b]=!0,n=function(e,t){if(c(e,b))throw new TypeError(g);return t.facade=e,p(e,b,t),t},o=function(e){return c(e,b)?e[b]:{}},i=function(e){return c(e,b)}}e.exports={set:n,get:o,has:i,enforce:function(e){return i(e)?o(e):n(e,{})},getterFor:function(e){return function(t){var r;if(!l(t)||(r=o(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return r}}}},94049:(e,t,r)=>{var n=r(83349),o=/#|\.prototype\./,i=function(e,t){var r=s[a(e)];return r==p||r!=l&&("function"==typeof t?n(t):!!t)},a=i.normalize=function(e){return String(e).replace(o,".").toLowerCase()},s=i.data={},l=i.NATIVE="N",p=i.POLYFILL="P";e.exports=i},57199:e=>{e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},58057:e=>{e.exports=!1},19950:(e,t,r)=>{var n=r(50218),o=r(83349);e.exports=!!Object.getOwnPropertySymbols&&!o((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},18442:(e,t,r)=>{var n=r(43005),o=r(739),i=n.WeakMap;e.exports="function"==typeof i&&/native code/.test(o(i))},2863:(e,t,r)=>{var n,o=r(96943),i=r(14229),a=r(38063),s=r(51418),l=r(14922),p=r(25085),c=r(82051),u=c("IE_PROTO"),f=function(){},d=function(e){return"<script>"+e+"</"+"script>"},g=function(){try{n=document.domain&&new ActiveXObject("htmlfile")}catch(e){}var e,t;g=n?function(e){e.write(d("")),e.close();var t=e.parentWindow.Object;return e=null,t}(n):((t=p("iframe")).style.display="none",l.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(d("document.F=Object")),e.close(),e.F);for(var r=a.length;r--;)delete g.prototype[a[r]];return g()};s[u]=!0,e.exports=Object.create||function(e,t){var r;return null!==e?(f.prototype=o(e),r=new f,f.prototype=null,r[u]=e):r=g(),void 0===t?r:i(r,t)}},14229:(e,t,r)=>{var n=r(19300),o=r(54769),i=r(96943),a=r(30967);e.exports=n?Object.defineProperties:function(e,t){i(e);for(var r,n=a(t),s=n.length,l=0;s>l;)o.f(e,r=n[l++],t[r]);return e}},54769:(e,t,r)=>{var n=r(19300),o=r(3723),i=r(96943),a=r(87509),s=Object.defineProperty;t.f=n?s:function(e,t,r){if(i(e),t=a(t,!0),i(r),o)try{return s(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(e[t]=r.value),e}},63369:(e,t,r)=>{var n=r(19300),o=r(91183),i=r(33535),a=r(18947),s=r(87509),l=r(90918),p=r(3723),c=Object.getOwnPropertyDescriptor;t.f=n?c:function(e,t){if(e=a(e),t=s(t,!0),p)try{return c(e,t)}catch(e){}if(l(e,t))return i(!o.f.call(e,t),e[t])}},32787:(e,t,r)=>{var n=r(32307),o=r(38063).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,o)}},32659:(e,t)=>{t.f=Object.getOwnPropertySymbols},32307:(e,t,r)=>{var n=r(90918),o=r(18947),i=r(33893).indexOf,a=r(51418);e.exports=function(e,t){var r,s=o(e),l=0,p=[];for(r in s)!n(a,r)&&n(s,r)&&p.push(r);for(;t.length>l;)n(s,r=t[l++])&&(~i(p,r)||p.push(r));return p}},30967:(e,t,r)=>{var n=r(32307),o=r(38063);e.exports=Object.keys||function(e){return n(e,o)}},91183:(e,t)=>{"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!r.call({1:2},1);t.f=o?function(e){var t=n(this,e);return!!t&&t.enumerable}:r},39652:(e,t,r)=>{var n=r(22679),o=r(32787),i=r(32659),a=r(96943);e.exports=n("Reflect","ownKeys")||function(e){var t=o.f(a(e)),r=i.f;return r?t.concat(r(e)):t}},21146:(e,t,r)=>{var n=r(43005);e.exports=n},35140:(e,t,r)=>{var n=r(43005),o=r(78816),i=r(90918),a=r(79398),s=r(739),l=r(11864),p=l.get,c=l.enforce,u=String(String).split("String");(e.exports=function(e,t,r,s){var l,p=!!s&&!!s.unsafe,f=!!s&&!!s.enumerable,d=!!s&&!!s.noTargetGet;"function"==typeof r&&("string"!=typeof t||i(r,"name")||o(r,"name",t),(l=c(r)).source||(l.source=u.join("string"==typeof t?t:""))),e!==n?(p?!d&&e[t]&&(f=!0):delete e[t],f?e[t]=r:o(e,t,r)):f?e[t]=r:a(t,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&p(this).source||s(this)}))},60681:(e,t,r)=>{var n=r(61672),o=r(45960);e.exports=function(e,t){var r=e.exec;if("function"==typeof r){var i=r.call(e,t);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(e))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(e,t)}},45960:(e,t,r)=>{"use strict";var n,o,i=r(63807),a=r(95618),s=r(67857),l=r(2863),p=r(11864).get,c=r(24),u=r(27040),f=RegExp.prototype.exec,d=s("native-string-replace",String.prototype.replace),g=f,h=(n=/a/,o=/b*/g,f.call(n,"a"),f.call(o,"a"),0!==n.lastIndex||0!==o.lastIndex),v=a.UNSUPPORTED_Y||a.BROKEN_CARET,m=void 0!==/()??/.exec("")[1];(h||m||v||c||u)&&(g=function(e){var t,r,n,o,a,s,c,u=this,y=p(u),O=y.raw;if(O)return O.lastIndex=u.lastIndex,t=g.call(O,e),u.lastIndex=O.lastIndex,t;var b=y.groups,_=v&&u.sticky,x=i.call(u),P=u.source,C=0,A=e;if(_&&(-1===(x=x.replace("y","")).indexOf("g")&&(x+="g"),A=String(e).slice(u.lastIndex),u.lastIndex>0&&(!u.multiline||u.multiline&&"\n"!==e[u.lastIndex-1])&&(P="(?: "+P+")",A=" "+A,C++),r=new RegExp("^(?:"+P+")",x)),m&&(r=new RegExp("^"+P+"$(?!\\s)",x)),h&&(n=u.lastIndex),o=f.call(_?r:u,A),_?o?(o.input=o.input.slice(C),o[0]=o[0].slice(C),o.index=u.lastIndex,u.lastIndex+=o[0].length):u.lastIndex=0:h&&o&&(u.lastIndex=u.global?o.index+o[0].length:n),m&&o&&o.length>1&&d.call(o[0],r,(function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(o[a]=void 0)})),o&&b)for(o.groups=s=l(null),a=0;a<b.length;a++)s[(c=b[a])[0]]=o[c[1]];return o}),e.exports=g},63807:(e,t,r)=>{"use strict";var n=r(96943);e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},95618:(e,t,r)=>{var n=r(83349),o=function(e,t){return RegExp(e,t)};t.UNSUPPORTED_Y=n((function(){var e=o("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=n((function(){var e=o("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},24:(e,t,r)=>{var n=r(83349);e.exports=n((function(){var e=RegExp(".","string".charAt(0));return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))},27040:(e,t,r)=>{var n=r(83349);e.exports=n((function(){var e=RegExp("(?<a>b)","string".charAt(5));return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},1992:e=>{e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}},79398:(e,t,r)=>{var n=r(43005),o=r(78816);e.exports=function(e,t){try{o(n,e,t)}catch(r){n[e]=t}return t}},82051:(e,t,r)=>{var n=r(67857),o=r(38814),i=n("keys");e.exports=function(e){return i[e]||(i[e]=o(e))}},57454:(e,t,r)=>{var n=r(43005),o=r(79398),i="__core-js_shared__",a=n[i]||o(i,{});e.exports=a},67857:(e,t,r)=>{var n=r(58057),o=r(57454);(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.15.0",mode:n?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},35642:(e,t,r)=>{var n=r(84064),o=r(1992),i=function(e){return function(t,r){var i,a,s=String(o(t)),l=n(r),p=s.length;return l<0||l>=p?e?"":void 0:(i=s.charCodeAt(l))<55296||i>56319||l+1===p||(a=s.charCodeAt(l+1))<56320||a>57343?e?s.charAt(l):i:e?s.slice(l,l+2):a-56320+(i-55296<<10)+65536}};e.exports={codeAt:i(!1),charAt:i(!0)}},3242:(e,t,r)=>{var n=r(84064),o=Math.max,i=Math.min;e.exports=function(e,t){var r=n(e);return r<0?o(r+t,0):i(r,t)}},18947:(e,t,r)=>{var n=r(23833),o=r(1992);e.exports=function(e){return n(o(e))}},84064:e=>{var t=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:t)(e)}},79917:(e,t,r)=>{var n=r(84064),o=Math.min;e.exports=function(e){return e>0?o(n(e),9007199254740991):0}},44561:(e,t,r)=>{var n=r(1992);e.exports=function(e){return Object(n(e))}},87509:(e,t,r)=>{var n=r(57199);e.exports=function(e,t){if(!n(e))return e;var r,o;if(t&&"function"==typeof(r=e.toString)&&!n(o=r.call(e)))return o;if("function"==typeof(r=e.valueOf)&&!n(o=r.call(e)))return o;if(!t&&"function"==typeof(r=e.toString)&&!n(o=r.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},38814:e=>{var t=0,r=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++t+r).toString(36)}},93558:(e,t,r)=>{var n=r(19950);e.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},58064:(e,t,r)=>{var n=r(43005),o=r(67857),i=r(90918),a=r(38814),s=r(19950),l=r(93558),p=o("wks"),c=n.Symbol,u=l?c:c&&c.withoutSetter||a;e.exports=function(e){return i(p,e)&&(s||"string"==typeof p[e])||(s&&i(c,e)?p[e]=c[e]:p[e]=u("Symbol."+e)),p[e]}},80500:(e,t,r)=>{"use strict";var n=r(30935),o=r(45960);n({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},32359:(e,t,r)=>{"use strict";var n=r(93748),o=r(83349),i=r(96943),a=r(79917),s=r(84064),l=r(1992),p=r(12310),c=r(70572),u=r(60681),f=r(58064)("replace"),d=Math.max,g=Math.min,h="$0"==="a".replace(/./,"$0"),v=!!/./[f]&&""===/./[f]("a","$0");n("replace",(function(e,t,r){var n=v?"$":"$0";return[function(e,r){var n=l(this),o=null==e?void 0:e[f];return void 0!==o?o.call(e,n,r):t.call(String(n),e,r)},function(e,o){if("string"==typeof o&&-1===o.indexOf(n)&&-1===o.indexOf("$<")){var l=r(t,this,e,o);if(l.done)return l.value}var f=i(this),h=String(e),v="function"==typeof o;v||(o=String(o));var m=f.global;if(m){var y=f.unicode;f.lastIndex=0}for(var O=[];;){var b=u(f,h);if(null===b)break;if(O.push(b),!m)break;""===String(b[0])&&(f.lastIndex=p(h,a(f.lastIndex),y))}for(var _,x="",P=0,C=0;C<O.length;C++){b=O[C];for(var A=String(b[0]),E=d(g(s(b.index),h.length),0),R=[],S=1;S<b.length;S++)R.push(void 0===(_=b[S])?_:String(_));var T=b.groups;if(v){var w=[A].concat(R,E,h);void 0!==T&&w.push(T);var I=String(o.apply(void 0,w))}else I=c(A,h,E,R,T,o);E>=P&&(x+=h.slice(P,E)+I,P=E+A.length)}return x+h.slice(P)}]}),!!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}))||!h||v)},5225:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var n,o=r(10387),i=r(28074);function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var l={"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&apos;"},p=function(e){e._client.getPropertyBody=function(e,t){var r,n=this.parseClarkNotation(e);if(r=this.xmlNamespaces[n.namespace]?this.xmlNamespaces[n.namespace]+":"+n.name:"x:"+n.name+' xmlns:x="'+n.namespace+'"',Array.isArray(t)){var o="";for(var i in t)Object.prototype.hasOwnProperty.call(t[i],"type")&&Object.prototype.hasOwnProperty.call(t[i],"data")?o+=this.getPropertyBody(t[i].type,t[i].data):o+=this.getPropertyBody(i,t[i]);return"      <"+r+">"+o+"</"+r+">"}if("object"===s(t)){var a="";if(Object.prototype.hasOwnProperty.call(t,"type")&&Object.prototype.hasOwnProperty.call(t,"data"))return this.getPropertyBody(t.type,t.data);for(var p in t)a+=this.getPropertyBody(p,t[p]);return"      <"+r+">"+a+"</"+r+">"}return"d:resourcetype"!==r&&(t=(""+t).replace(/[<>&"']/g,(function(e){return l[e]}))),"      <"+r+">"+t+"</"+r+">"},e._client._renderPropSet=function(e){var t="  <d:set>\n   <d:prop>\n";for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t+=this.getPropertyBody(r,e[r]));return t+="    </d:prop>\n",t+="  </d:set>\n"}},c=function(e){for(var t=[],r=0;r<e.length;r++){var n={mask:0,permissions:0};for(var o in e[r].children){var i=e[r].children[o];if(i.nodeName)switch(i.nodeName.split(":")[1]||""){case"acl-mapping-id":n.mappingId=i.textContent||i.text;break;case"acl-mapping-type":n.mappingType=i.textContent||i.text;break;case"acl-mapping-display-name":n.mappingDisplayName=i.textContent||i.text;break;case"acl-mask":n.mask=parseInt(i.textContent||i.text,10);break;case"acl-permissions":n.permissions=parseInt(i.textContent||i.text,10)}}t.push(n)}return t},u={attach:function(e){(n=e.filesClient).addFileInfoParser((function(e){var t={},r=e.propStat[0].properties,n=r[o.Z.GROUP_FOLDER_ID];void 0!==n&&(t.groupRepoId=n);var i=r[o.Z.PROPERTY_ACL_ENABLED];void 0!==i&&(t.aclEnabled=!!i);var a=r[o.Z.PROPERTY_ACL_CAN_MANAGE];void 0!==a&&(t.aclCanManage=!!a);var s=r[o.Z.PROPERTY_ACL_LIST]||[],l=r[o.Z.PROPERTY_INHERITED_ACL_LIST]||[];return t.acl=c(s),t.inheritedAcls=c(l),t.acl.map((function(e){var r=t.inheritedAcls.find((function(t){return t.mappingType===e.mappingType&&t.mappingId===e.mappingId}));return r&&(e.permissions=e.permissions&e.mask|r.permissions&~e.mask),e})),t})),p(n)}};!function(e){Object.assign(e.Files.Client,o.Z)}(window.OC),OC.Plugins.register("OCA.Files.FileList",u);const f=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,s;return t=e,(r=[{key:"propFind",value:function(e){return n.getFileInfo(e.path+"/"+e.name,{properties:[o.Z.PROPERTY_ACL_LIST,o.Z.PROPERTY_INHERITED_ACL_LIST,o.Z.GROUP_FOLDER_ID,o.Z.PROPERTY_ACL_ENABLED,o.Z.PROPERTY_ACL_CAN_MANAGE]}).then((function(e,t){if(t){var r={},n={};for(var o in t.acl){var a=new i.Z;a.fromValues(t.acl[o].mappingType,t.acl[o].mappingId,t.acl[o].mappingDisplayName,t.acl[o].mask,t.acl[o].permissions),r[a.getUniqueMappingIdentifier()]=a}for(var s in t.inheritedAcls){var l=new i.Z;l.fromValues(t.inheritedAcls[s].mappingType,t.inheritedAcls[s].mappingId,t.inheritedAcls[s].mappingDisplayName,t.inheritedAcls[s].mask,t.inheritedAcls[s].permissions,!0);var p=l.getUniqueMappingIdentifier();n[p]=l,null==r[p]&&(r[p]=l)}return{acls:Object.values(r),inheritedAclsById:n,aclEnabled:t.aclEnabled,aclCanManage:t.aclCanManage,groupRepoId:t.groupRepoId}}return null}))}},{key:"propPatch",value:function(e,t){var r=[];for(var i in t)r.push({type:o.Z.PROPERTY_ACL_ENTRY,data:t[i].getProperties()});var a={};return a[o.Z.PROPERTY_ACL_LIST]=r,n._client.propPatch(n._client.baseUrl+e.path+"/"+e.name,a)}}])&&a(t.prototype,r),s&&a(t,s),Object.defineProperty(t,"prototype",{writable:!1}),e}())},10387:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n={PROPERTY_ACL_LIST:"{"+OC.Files.Client.NS_NEXTCLOUD+"}acl-list",PROPERTY_ACL_ENTRY:"{"+OC.Files.Client.NS_NEXTCLOUD+"}acl",PROPERTY_ACL_MAPPING_TYPE:"{"+OC.Files.Client.NS_NEXTCLOUD+"}acl-mapping-type",PROPERTY_ACL_MAPPING_ID:"{"+OC.Files.Client.NS_NEXTCLOUD+"}acl-mapping-id",PROPERTY_ACL_MASK:"{"+OC.Files.Client.NS_NEXTCLOUD+"}acl-mask",PROPERTY_ACL_PERMISSIONS:"{"+OC.Files.Client.NS_NEXTCLOUD+"}acl-permissions",PROPERTY_ACL_ENABLED:"{"+OC.Files.Client.NS_NEXTCLOUD+"}acl-enabled",PROPERTY_ACL_CAN_MANAGE:"{"+OC.Files.Client.NS_NEXTCLOUD+"}acl-can-manage",PROPERTY_INHERITED_ACL_LIST:"{"+OC.Files.Client.NS_NEXTCLOUD+"}inherited-acl-list",GROUP_FOLDER_ID:"{"+OC.Files.Client.NS_NEXTCLOUD+"}group-folder-id"}},28074:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(10387);function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,i;return t=e,(r=[{key:"fromProperties",value:function(e){this.mappingType=e[n.Z.PROPERTY_ACL_MAPPING_TYPE],this.mappingId=e[n.Z.PROPERTY_ACL_MAPPING_ID],this.mask=e[n.Z.PROPERTY_ACL_MASK],this.permissions=e[n.Z.PROPERTY_ACL_PERMISSIONS]}},{key:"fromValues",value:function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:31,i=arguments.length>5&&void 0!==arguments[5]&&arguments[5];this.mappingType=e,this.mappingId=t,this.mappingDisplayName=r,this.mask=n,this.permissions=o,this.inherited=i}},{key:"getProperties",value:function(){var e={};return e[n.Z.PROPERTY_ACL_MAPPING_TYPE]=this.mappingType,e[n.Z.PROPERTY_ACL_MAPPING_ID]=this.mappingId,e[n.Z.PROPERTY_ACL_MASK]=this.mask,e[n.Z.PROPERTY_ACL_PERMISSIONS]=this.permissions,e}},{key:"getUniqueMappingIdentifier",value:function(){return this.mappingType+":"+this.mappingId}},{key:"clone",value:function(){var t=this,r=new e;return Object.getOwnPropertyNames(this).forEach((function(e){r[e]=t[e]})),r}}])&&o(t.prototype,r),i&&o(t,i),Object.defineProperty(t,"prototype",{writable:!1}),e}()}},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={id:e,exports:{}};return n[e].call(r.exports,r,r.exports,i),r.exports}i.m=n,i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>"grouprepos-"+e+".js?v="+{"vendors-node_modules_nextcloud_vue_dist_ncvuecomponents_js-node_modules_css-loader_dist_runti-78a4de":"c8d8da13fe59c683f584",sharing:"e5e7d628d3a1469e4735"}[e],i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},r="grouprepos:",i.l=(t,n,o,a)=>{if(e[t])e[t].push(n);else{var s,l;if(void 0!==o)for(var p=document.getElementsByTagName("script"),c=0;c<p.length;c++){var u=p[c];if(u.getAttribute("src")==t||u.getAttribute("data-webpack")==r+o){s=u;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.setAttribute("data-webpack",r+o),s.src=t),e[t]=[n];var f=(r,n)=>{s.onerror=s.onload=null,clearTimeout(d);var o=e[t];if(delete e[t],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(n))),r)return r(n)},d=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),l&&document.head.appendChild(s)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="/apps/grouprepos/js/",(()=>{i.b=document.baseURI||self.location.href;var e={files:0};i.f.j=(t,r)=>{var n=i.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=o);var a=i.p+i.u(t),s=new Error;i.l(a,(r=>{if(i.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,n[1](s)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,o,[a,s,l]=r,p=0;if(a.some((t=>0!==e[t]))){for(n in s)i.o(s,n)&&(i.m[n]=s[n]);if(l)l(i)}for(t&&t(r);p<a.length;p++)o=a[p],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self.webpackChunkgrouprepos=self.webpackChunkgrouprepos||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),(()=>{"use strict";var e=i(79753);i(5225);i.nc=btoa(OC.requestToken),i.p=OC.linkTo("grouprepos","js/"),window.addEventListener("DOMContentLoaded",(function(){var t,r;OCA.Theming?OC.MimeType._mimeTypeIcons["dir-group"]=(0,e.generateUrl)("/apps/theming/img/grouprepos/folder-group.svg?v="+OCA.Theming.cacheBuster):OC.MimeType._mimeTypeIcons["dir-group"]=(0,e.imagePath)("grouprepos","folder-group"),null!==(t=OCA)&&void 0!==t&&null!==(r=t.Sharing)&&void 0!==r&&r.ShareTabSections&&Promise.all([i.e("vendors-node_modules_nextcloud_vue_dist_ncvuecomponents_js-node_modules_css-loader_dist_runti-78a4de"),i.e("sharing")]).then(i.bind(i,23515)).then((function(e){OCA.Sharing.ShareTabSections.registerSection((function(t,r){if("group"===r.mountType)return e.default}))}))}))})(),$(document).ready((function(){!function(e){if(e.Files.FileList){var r=function(e,t){this.initialize(e,t)};r.prototype=_.extend({},e.Files.FileList.prototype,{id:"groupreposslist",appName:t("files","GroupRepos"),_clientSideSort:!0,_allowSelection:!1,initialize:function(t,r){e.Files.FileList.prototype.initialize.apply(this,arguments),this.initialized||OC.Plugins.attach("OCA.Files.GroupRepossFileList",this)},updateEmptyContent:function(){var r=this.getCurrentDirectory();"/"===r?(this.$el.find("#emptycontent").toggleClass("hidden",!this.isEmpty),this.$el.find("#filestable thead th").toggleClass("hidden",this.isEmpty),this.$el.find("#emptycontent").html('<div class="nav-icon-grouprepos"></div><h2>'+t("grouprepos","No Group Repo")+"</h2>")):e.Files.FileList.prototype.updateEmptyContent.apply(this,arguments)},getDirectoryPermissions:function(){return OC.PERMISSION_READ|OC.PERMISSION_DELETE},updateStorageStatistics:function(){},reload:function(){this.showMask(),this._reloadCall&&this._reloadCall.abort(),this._setCurrentDir("/",!1),this._reloadCall=$.ajax({url:OC.generateUrl("/apps/grouprepos/folderlist"),type:"GET",dataType:"json"});var e=this.reloadCallback.bind(this);return this._reloadCall.then(e,e)},reloadCallback:function(e){return delete this._reloadCall,this.hideMask(),!!e.files&&(this.setFiles(e.files.sort(this._sortComparator)),!0)}}),e.Files.GroupRepossFileList=r}}(OCA)})),function(e){e.Files.GroupRepossPlugin={name:"GroupRepos",grouprepossFileList:null,attach:function(){var e=this;$("#app-content-groupreposslist").on("show.plugin-grouprepos",(function(t){e.showFileList($(t.target))})),$("#app-content-groupreposslist").on("hide.plugin-grouprepos",(function(){e.hideFileList()}))},detach:function(){this.grouprepossFileList&&(this.grouprepossFileList.destroy(),e.Files.fileActions.off("setDefault.plugin-grouprepos",this._onActionsUpdated),e.Files.fileActions.off("registerAction.plugin-grouprepos",this._onActionsUpdated),$("#app-content-groupreposslist").off(".plugin-grouprepos"),this.grouprepossFileList=null)},showFileList:function(e){return this.grouprepossFileList||(this.grouprepossFileList=this._createGroupRepossFileList(e)),this.grouprepossFileList},hideFileList:function(){this.grouprepossFileList&&this.grouprepossFileList.$fileList.empty()},_createGroupRepossFileList:function(t){var r=this._createFileActions();return new e.Files.GroupRepossFileList(t,{fileActions:r,shown:!0})},_createFileActions:function(){var t=new e.Files.FileActions;return t.registerDefaultActions(),t.merge(e.Files.fileActions),this._globalActionsInitialized||(this._onActionsUpdated=_.bind(this._onActionsUpdated,this),e.Files.fileActions.on("setDefault.plugin-grouprepos",this._onActionsUpdated),e.Files.fileActions.on("registerAction.plugin-grouprepos",this._onActionsUpdated),this._globalActionsInitialized=!0),t.register("dir","Open",OC.PERMISSION_READ,"",(function(t,r){e.Files.App.setActiveView("files",{silent:!0}),e.Files.App.fileList.changeDirectory(OC.joinPaths(r.$file.attr("data-path"),t),!0,!0)})),t.setDefault("dir","Open"),t},_onActionsUpdated:function(e){e.action?this.grouprepossFileList.fileActions.registerAction(e.action):e.defaultAction&&this.grouprepossFileList.fileActions.setDefault(e.defaultAction.mime,e.defaultAction.name)}}}(OCA),OC.Plugins.register("OCA.Files.App",OCA.Files.GroupRepossPlugin)})();
//# sourceMappingURL=grouprepos-files.js.map?v=f6127ed6d60fa4a126cd