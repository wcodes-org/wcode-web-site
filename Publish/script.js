var curTab,intrvl=0;window.onload=Init;window.onpopstate=function(a){a.state&&("menu"==a.state.id?activateMenuFn():(LoadCanvas(document.getElementById(a.state.id)),activateMainFn()))};var menuActive=!1;
function Init(){SetXURL(document);SetXHRef(document);var a=GetHashID(),f=GetURLID(),e=document.querySelector("#canvas-main"),c=document.querySelector(".toggle-push-left"),j=document.querySelectorAll(".sidebar-nav-norm");a?(curTab="wcode",LoadCanvas(document.getElementById(a))):curTab=f?f:"wcode";"menu"==f?menuActive=!0:document.querySelector("#nav-menu").style.maxHeight=e.scrollHeight+"px";!a&&!f&&window.history.replaceState({id:"wcode"},"","/");c.addEventListener("click",function(){if(menuActive){if("wcode"==
curTab||"menu"==curTab)curTab="";window.history.pushState({id:curTab},"","/"+curTab);activateMainFn();e.style.maxHeight="99999px";document.querySelector("#nav-menu").style.maxHeight=e.scrollHeight+"px";document.getElementById("updated").style.visibility="visible"}else activateMenuFn()});document.getElementById("download-android").addEventListener("click",function(){alert("Hold your breath! Coming soon..")});[].slice.call(j).forEach(function(a){a.addEventListener("click",function(){curTab=this.id;
activateMainFn()})});if(!supportsSvg()){a=document.getElementsByClassName("image");c=a.length;for(f=0;f<c;f++)a[f].classList.add("no-svg")}return!1}
var activateMenuFn=function(){document.getElementById("path").style.visibility="hidden";document.getElementById("updated").style.visibility="hidden";var a=document.querySelector("#nav-menu"),f=document.querySelector("#canvas-main"),e=document.querySelector("#canvas-wrapper"),c=document.querySelector("#menu-button");window.history.pushState({id:"menu"},"","/menu");classie.add(e,"pml-open");classie.add(c,"active");activeNav="pml-open";f.style.maxHeight=a.scrollHeight+"px";a.style.maxHeight="99999px";
menuActive=!0},activateMainFn=function(){document.querySelector("#nav-menu");var a=document.querySelector("#canvas-wrapper"),f=document.querySelector("#menu-button");classie.remove(a,"pml-open");classie.remove(f,"active");menuActive=!1};function GetURLID(){var a=window.location.pathname;return"/"==a?"":a.substring(1)}function GetHashID(){var a=window.location.hash;return 0==a.length?"":a.substring(2)}
function SetXURL(a){a=getElementsByClassName(a,"XURL");var f=a.length;for(i=0;i<f;i++)a[i].onclick=LoadCanvasI}function SetXHRef(a){a=getElementsByClassName(a,"XHRef");var f=a.length;for(i=0;i<f;i++)a[i].onclick=LoadCanvasL}function LoadCanvasI(){LoadCanvasH(this);return!1}function LoadCanvasL(){var a=this.getAttribute("data-xhref");LoadCanvasH(document.getElementById(a));return!1}
function LoadCanvasH(a){URLid="wcode"==a.id?"":a.id;LoadCanvas(a);window.history.pushState({id:a.id},"","/"+URLid);"undefined"!==typeof _gaq&&_gaq.push(["_trackPageview"],"/"+URLid)}
function LoadCanvas(a){var f=document.getElementById("updated");document.getElementById("canvas-main").innerHTML="";f.style.visibility="hidden";BeginLoading();var e=new XMLHttpRequest,e=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");e.onreadystatechange=function(){if(4==e.readyState){var c=document.getElementById("canvas-main");switch(e.status){case 200:KillLoading();var j=JSON.parse(e.responseText),k=j.xurl,q=j.async,b="WCode";"wcode"!=a.id&&(b+=" - "+a.innerText);
b+=" : "+j.desc;document.title=b;document.getElementById("path").innerHTML=j.title;c.innerHTML=j.content;document.getElementById("updated").style.display="block";document.getElementById("date").innerHTML=j.date;""==!URLid&&(document.getElementById("path").style.visibility="visible");document.getElementById("updated").style.visibility="visible";c=document.getElementById("canvas-main").scrollHeight;document.getElementById("nav-menu").style.maxHeight=c+"px";document.getElementById("canvas-main").style.maxHeight=
"99999px";f.style.visibility="visible";"1"==k&&SetXHRef(document);"1"==q&&eval(a.id+"()");break;case 404:document.getElementById("updated").style.display="none";document.getElementById("date").innerHTML="";c.innerHTML="Error: 404 - Resource not found!";break;case 408:case 501:case 502:document.getElementById("date").innerHTML="",document.getElementById("updated").style.display="none",c.innerHTML="Error!"}}};e.open("GET",a.id+".json",!0);e.setRequestHeader("Content-Type","text/plain;charset=UTF-8");
e.send()}function Loading(){var a=document.getElementById("loading");void 0===Loading.count?(Loading.count=0,a.innerText="Loading",a.setAttribute("style","display: block")):3==Loading.count?KillLoading():(a.innerText+=".",Loading.count++)}function BeginLoading(){clearTimeout(intrvl);intrvl=setInterval(Loading,1E3)}function KillLoading(){var a=document.getElementById("loading");Loading.count=void 0;a.setAttribute("style","display: none");clearTimeout(intrvl)}
function about_me(){gapi.plus.go("me_g-plus");twttr.widgets.load()}function presentation(){BeginLoading()}function getElementsByClassName(a,f){if(a.getElementsByClassName)return a.getElementsByClassName(f);var e=a;null==e&&(e=document);var c=[],e=e.getElementsByTagName("*"),j=e.length,k=RegExp("(^|\\s)"+f+"(\\s|$)"),q,b;for(b=q=0;q<j;q++)k.test(e[q].className)&&(c[b]=e[q],b++);return c}
function supportsSvg(){var a=document.createElement("div");a.innerHTML="<svg/>";return"http://www.w3.org/2000/svg"==(a.firstChild&&a.firstChild.namespaceURI)}
"undefined"!==typeof document&&!("classList"in document.createElement("a"))&&function(a){a=(a.HTMLElement||a.Element).prototype;var f=Object,e=String.prototype.trim||function(){return this.replace(/^\s+|\s+$/g,"")},c=Array.prototype.indexOf||function(a){for(var b=0,e=this.length;b<e;b++)if(b in this&&this[b]===a)return b;return-1},j=function(a,b){this.name=a;this.code=DOMException[a];this.message=b},k=function(a,b){if(""===b)throw new j("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(b))throw new j("INVALID_CHARACTER_ERR",
"String contains an invalid character");return c.call(a,b)},q=function(a){for(var b=e.call(a.className),b=b?b.split(/\s+/):[],f=0,c=b.length;f<c;f++)this.push(b[f]);this._updateClassName=function(){a.className=this.toString()}},b=q.prototype=[],h=function(){return new q(this)};j.prototype=Error.prototype;b.item=function(a){return this[a]||null};b.contains=function(a){return-1!==k(this,a+"")};b.add=function(a){a+="";-1===k(this,a)&&(this.push(a),this._updateClassName())};b.remove=function(a){a=k(this,
a+"");-1!==a&&(this.splice(a,1),this._updateClassName())};b.toggle=function(a){a+="";-1===k(this,a)?this.add(a):this.remove(a)};b.toString=function(){return this.join(" ")};if(f.defineProperty){b={get:h,enumerable:!0,configurable:!0};try{f.defineProperty(a,"classList",b)}catch(n){-2146823252===n.number&&(b.enumerable=!1,f.defineProperty(a,"classList",b))}}else f.prototype.__defineGetter__&&a.__defineGetter__("classList",h)}(self);
(function(a){function f(a,b){(e(a,b)?j:c)(a,b)}var e,c,j;"classList"in document.documentElement?(e=function(a,b){return a.classList.contains(b)},c=function(a,b){a.classList.add(b)},j=function(a,b){a.classList.remove(b)}):(e=function(a,b){return RegExp("(^|\\s+)"+b+"(\\s+|$)").test(a.className)},c=function(a,b){e(a,b)||(a.className=a.className+" "+b)},j=function(a,b){a.className=a.className.replace(RegExp("(^|\\s+)"+b+"(\\s+|$)")," ")});var k={hasClass:e,addClass:c,removeClass:j,toggleClass:f,has:e,
add:c,remove:j,toggle:f};"function"===typeof define&&define.amd?define(k):"object"===typeof exports?module.exports=k:a.classie=k})(window);
(!window.history||!window.history.pushState)&&function(a,f,e,c,j){var k=a.document,q=k.documentElement,b=a.history||{},h=a.location,n=!!b.pushState,Z=n&&b.state===j,w=h.href,v=a.JSON||{},A=Object.defineProperty,B=Object.prototype.__defineGetter__,$=Object.prototype.__defineSetter__,U=b.pushState,V=b.replaceState,G=a.sessionStorage,C=Object.prototype.hasOwnProperty,aa=Object.prototype.toString,H=+((a.eval&&eval("/*@cc_on 1;@*/")&&/msie (\d+)/i.exec(navigator.userAgent)||[])[1]||0),ba=(new Date).getTime(),
x=(A||B)&&(!H||8<H)?0:1,p=8>H?k.createElement("iframe"):e,y,D,E,F="",I=(y="addEventListener",a[y])||(y="attachEvent",F="on",a[y]),ca=(D="removeEventListener",a[D])||(D="detachEvent",a[D]),da=(E="dispatchEvent",a[E])||(E="fireEvent",a[E]),J=[],W=[],O=0,z={onpopstate:J,popstate:J,onhashchange:W,hashchange:W},u=function(){var a,b,l,g={basepath:"/",redirect:0,type:"/"};l=k.getElementsByTagName("SCRIPT");for(a=0;l[a];a++)if(b=/(.*)\/(?:history|spike)(?:-\d\.\d(?:\.\d)?\w?)?(?:\.min)?.js\?(.*)$/i.exec(l[a].src)||
a===l.length-1&&2===(b=l[a].src.split("?")).length&&(b[2]=b[1])&&b){a=0;for(l=b[2].split("&");l[a];)b=l[a++].split("="),g[b[0]]="true"==b[1]?f:"false"==b[1]?e:b[1]||"";g.basepath=g.basepath||"/";break}return g}(),m=function(a){var b,e,g,d,f,s,c,fa=RegExp("^"+u.basepath,"i");return function(r,ga){if(r){if(!n||H){var K=m(),j=K._pathname,k=K._protocol;r=/^(?:[\w0-9]+\:)?\/\//.test(r)?0===r.indexOf("/")?k+r:r:k+"//"+K._host+(0===r.indexOf("/")?r:0===r.indexOf("?")?j+r:0===r.indexOf("#")?j+K._search+r:
j.replace(/[^\/]+$/g,"")+r)}}else if(r=h.href,!n||ga)r=h.protocol+"//"+h.host+u.basepath+(r.replace(/^[^#]*/,"")||"#").replace(RegExp("^#[/]?(?:"+u.type+")?"),"");if(b!==r){a.href=b=r;s=a.port;f=a.host;c=a.pathname;if("http:"===a.protocol&&80==s||"https:"===a.protocol&&443==s)f=a.hostname,s="";c=0===c.indexOf("/")?c:"/"+c;e=c+a.search+a.hash;d=c.replace(fa,u.type)+a.search;g=d+a.hash}return{_href:a.protocol+"//"+f+e,_protocol:a.protocol,_host:f,_hostname:a.hostname||h.hostname,_port:s||h.port,_pathname:c,
_search:a.search,_hash:a.hash,_relative:e,_nohash:d,_special:g}}}(k.createElement("a")),t=!x?b:{back:b.back,forward:b.forward,go:b.go,pushState:c,replaceState:c,emulate:!n,toString:function(){return"[object History]"}},L={state:{get:function(){return p&&p.storage||Q()[t.location.href]||c}},length:{get:function(){return b.length}},location:{set:function(ea){a.location=ea},get:function(){return n?h:R}}},R={assign:function(a){h.assign(n||0!==a.indexOf("#")?a:"#"+m()._nohash+a)},reload:h.reload,replace:function(a){h.replace(n||
0!==a.indexOf("#")?a:"#"+m()._nohash+a)},toString:function(){return this.href}},ha={href:{set:function(a){h.href=a},get:function(){return m()._href}},protocol:{set:function(a){h.protocol=a},get:function(){return h.protocol}},host:{set:function(a){h.host=a},get:function(){return h.host}},hostname:{set:function(a){h.hostname=a},get:function(){return h.hostname}},port:{set:function(a){h.port=a},get:function(){return h.port}},pathname:{set:function(a){h.pathname=a},get:function(){return m()._pathname}},
search:{set:function(a){h.search=a},get:function(){return m()._search}},hash:{set:function(a){a=0===a.indexOf("#")?a:"#"+a;var b=m();p?a!=b._hash&&(t.pushState(c,c,b._nohash+a),Y({oldURL:b._href})):h.hash="#"+b._nohash+a},get:function(){return m()._hash}}},S=function(b,c,l){var g=b,d,h=e;if(A||B)for(d in c){if(C.call(c,d))if(B)c[d].get&&B.call(b,d,c[d].get),c[d].set&&$.call(b,d,c[d].set);else if(A)try{A(b,d,c[d])}catch(s){if(l)return e;h=f;break}}else h=f;if(h&&x){l="StaticClass"+ba+x++;g=["Class "+
l];"execVB"in a||execScript("Function execVB(c) ExecuteGlobal(c) End Function","VBScript");"VBCVal"in a||execScript("Function VBCVal(o,r) If IsObject(o) Then Set r=o Else r=o End If End Function","VBScript");for(d in b)g[g.length]="Public ["+d+"]";C.call(b,"toString")&&(b.propertyIsEnumerable("toString")||(g[g.length]="Public [toString]"),c["(toString)"]={get:function(){return this.toString.call(this)}});for(d in c)C.call(c,d)&&(c[d].get&&(b["get "+d]=c[d].get,g.push("Public [get "+d+"]","Public "+
("(toString)"===d?"Default ":"")+"Property Get ["+d+"]","Call VBCVal(me.[get "+d+"].call(me),["+d+"])","End Property")),c[d].set&&(b["set "+d]=c[d].set,g.push("Public [set "+d+"]","Public Property Let ["+d+"](v)","Call me.[set "+d+"].call(me,v)","End Property","Public Property Set ["+d+"](v)","Call me.[set "+d+"].call(me,v)","End Property")));g.push("End Class","Function "+l+"Factory()","Set "+l+"Factory=New "+l,"End Function");execVB(g.join("\n"));g=a[l+"Factory"]();for(d in b)g[d]=b[d];C.call(b,
"toString")&&(g.toString=b.toString)}return g},M=v.stringify||function(a){function b(a){var d=/[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,c={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};d.lastIndex=0;return d.test(a)?'"'+a.replace(d,function(a){var b=c[a];return"string"===typeof b?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}var c=function(g){var d,e,f;
d=(typeof g).charCodeAt(2);if(114===d)g=b(g);else if(109===d)g=isFinite(g)?String(g):"null";else if(111===d||108===d)g=String(g);else if(106===d)if(g){e=(d="[object Array]"===aa.apply(g))?"[":"{";if(d)for(f=0;f<g.length;f++)e+=(0==f?"":",")+c(g[f]);else for(f in g)C.call(g,f)&&g[f]!==a&&(e+=(1==e.length?"":",")+b(f)+":"+c(g[f]));g=e+(d?"]":"}")}else g="null";else g=a;return g};return c}(),T=function(){var a=v.parse;return function(b){return b?a?a(b):(new Function("return "+b))():c}}(),Q=function(a){return G?
a?G.setItem("__hitoryapi__",M(a)):T(G.getItem("__hitoryapi__"))||{}:{}},N=function(b,c,f){var g=2===b?a.onhashchange:a.onpopstate,d=2===b?"hashchange":"popstate",h=z[d];k.createEvent?(b=k.createEvent("Events"),b.initEvent(d,e,e)):(b=k.createEventObject(),b.type=d);b.state=t.state;b.oldURL=c;b.newURL=f;g&&g.call(a,b);c=0;for(f=h.length;c<f;c++)h[c].call(a,b)},Y=function(){var p=a.onpopstate||c,X=a.onhashchange||c,l=0,g=c,d=m(),P=d._href;d._hash.replace(/^#/,"");var s=function(){if(w&&!(w=0)&&d._relative!==
u.basepath)clearInterval(g),setTimeout(N,10)},v=function(a){var b=m();if(O)return P=b._href,O=0;var c=a.oldURL||P;a=P=a.newURL||b._href;var b=c.replace(/^.*?(#|$)/,""),d=a.replace(/^.*?(#|$)/,"");c!=a&&!l&&N();w=l=0;b!=d&&N(2,c,a)};I(F+"hashchange",v,e);I(F+"popstate",function(){if(w===h.href)return w=0;w=0;N(l=1)},e);t.redirect=function(b,d){u.type=b===j?u.type:b;u.basepath=d===j?u.basepath:d;if(a.top==a.self){var e=m(c,f)._relative,g=h.search,l=h.pathname;d=u.basepath;n?(e!=d&&RegExp("^"+d+"$",
"i").test(l)&&(h.href=e),RegExp("^"+d+"$","i").test(l+"/")?h.href=d:RegExp("^"+d,"i").test(l)||(h.href=l.replace(/^\//,d)+g)):l!=d&&(h.href=d+"#"+l.replace(RegExp("^"+d,"i"),u.type)+g+h.hash)}};t=S(t,x?L:b.state===j?{state:L.state,location:L.location}:{location:L.location});R=S(R,ha);a[y]=function(a,b,d,c){z[a]?(z[a].push(b),!n&&J===z[a]&&s()):I(a,b,d,c)};a[D]=function(a,b,d){var c=z[a];if(c)for(a=c.length;--a;){if(c[a]===b){c.splice(a,1);break}}else ca(a,b,d)};a[E]=function(b,d){var c=z[b],e=c===
J?a.onpopstate:a.onhashchange;if(c){d=d||("string"==typeof b?a.event:b);try{d&&(d.target=a)}catch(g){try{d.srcElement=a}catch(h){}}e&&e.call(a,d);for(var e=0,l=c.length;e<l;e++)c[e].call(a,d);return f}return da(b,d)};x&&execScript("Public history, onhashchange","VBScript");if((!A&&!B||!S(a,{onhashchange:{get:function(){return X},set:function(a){X=a||c}},onpopstate:{get:function(){return p},set:function(a){(p=a||c)&&!n&&s()}}},1))&&!n)g=setInterval(function(){a.onpopstate&&s()},100);u.redirect&&t.redirect();
if(!n)k[y](F+"click",function(b){var d=b||a.event,c=d.target||d.srcElement;b="defaultPrevented"in d?d.defaultPrevented:d.returnValue===e;if(c&&("A"===c.nodeName&&!b)&&(b=m(c.getAttribute("href",2),f),b._hash&&"#"!==b._hash&&b._hash===b._href.replace(m()._href.split("#").shift(),""))){history.location.hash=b._hash;b=b._hash.replace(/^#/,"");if((c=k.getElementById(b))&&c.id===b&&"A"===c.nodeName)c=c.getBoundingClientRect(),a.scrollTo(q.scrollLeft||0,c.top+(q.scrollTop||0)-(q.clientTop||0));d.preventDefault?
d.preventDefault():d.returnValue=!1}},e);return v}();t.pushState=function(a,b,e,f){var d=Q(),j=m()._href,s=e&&m(e);w=0;e=s?s._href:j;f&&d[j]&&delete d[j];if((!n||Z)&&G&&a)d[e]=a,Q(d),a=c;U&&V?f?V.call(t,a,b,e):U.call(t,a,b,e):s&&s._relative!=m()._relative&&(O=1,f?h.replace("#"+s._special):h.hash=s._special)};t.replaceState=function(a,b,c){t.pushState(a,b,c,1)};x?(a.history=t,function(b,c){if(p){var f,g,d=function(){var a=m()._href;c!=a&&Y({oldURL:c,newURL:c=a})};g=setInterval(d,100);p.src="javascript:true;";
p=q.firstChild.appendChild(p).contentWindow;t.pushState=f=function(a,b,e,j,k){var n=p.document,q=["<script>","lfirst=1;",,"storage="+M(a)+";","\x3c/script>"];if(e=e&&m(e)){k||clearInterval(g);if(j)p.lfirst?(history.back(),f(a,b,e._href,0,1)):(p.storage=a,h.replace("#"+e._special));else if(e._href!=c||k)p.lfirst||(p.lfirst=1,f(p.storage,b,c,0,1)),q[2]='parent.location.hash="'+e._special.replace(/"/g,'\\"')+'";',n.open(),n.write(q.join("")),n.close();k||(c=m()._href,g=setInterval(d,100))}else p.storage=
a};I(F+"unload",function(){if(p.storage){var a={};a[m()._href]=p.storage;k.cookie="_historyAPI="+escape(M(a))}clearInterval(g)},e);if(1<b.length){b=unescape(b.pop().split(";").shift());try{p.storage=T(b)[m()._href]}catch(j){}}!v.parse&&!v.stringify&&(v.parse=T,v.stringify=M,a.JSON=v)}}(k.cookie.split("_historyAPI="),m()._href)):a.history.emulate=!n}(window,!0,!1,null);
