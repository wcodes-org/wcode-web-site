var curTab,intrvl=0;window.onload=Init;window.onpopstate=function(a){a.state&&("menu"==a.state.id?activateMenuFn():(LoadCanvas(document.getElementById(a.state.id)),activateMainFn()))};var menuActive=!1;
function Init(){SetXURL(document);SetXHRef(document);var a=GetHashID(),b=GetURLID(),d=document.querySelector("#canvas-main"),e=document.querySelector(".toggle-push-left"),l=document.querySelectorAll(".XURL");a?(curTab="root",LoadCanvas(document.getElementById(a))):curTab=b?b:"root";"menu"==b?(menuActive=!0,classie.add(e,"active"),d.style.maxHeight=document.querySelector("#nav-menu").scrollHeight+"px"):document.querySelector("#nav-menu").style.maxHeight=d.scrollHeight+"px";!a&&!b&&window.history.replaceState({id:"root"},
"","/");e.addEventListener("click",function(){if(menuActive){if("root"==curTab||"menu"==curTab)curTab="";window.history.pushState({id:curTab},"","/"+curTab);activateMainFn();d.style.maxHeight="99999px";document.querySelector("#nav-menu").style.maxHeight=d.scrollHeight+"px";document.getElementById("path").style.visibility="visible";document.getElementById("updated").style.visibility="visible"}else activateMenuFn()});[].forEach.call(document.getElementsByClassName("coming-soon"),function(a){a.addEventListener("click",
function(){"undefined"!==typeof ga&&ga("send","event",{eventCategory:"download",eventAction:"click"});alert("Hold your breath! Coming soon..")})});[].slice.call(l).forEach(function(a){a.addEventListener("click",function(){curTab=this.getAttribute("data-target");activateMainFn()})});if(!supportsSvg()){a=document.getElementsByClassName("image");e=a.length;for(b=0;b<e;b++)a[b].classList.add("no-svg")}return!1}
var activateMenuFn=function(){document.getElementById("path").style.visibility="hidden";document.getElementById("updated").style.visibility="hidden";var a=document.querySelector("#nav-menu"),b=document.querySelector("#canvas-main"),d=document.querySelector("#canvas-wrapper"),e=document.querySelector("#menu-button");window.history.pushState({id:"menu"},"","/menu");classie.add(d,"pml-open");classie.add(e,"active");activeNav="pml-open";b.style.maxHeight=a.scrollHeight+"px";a.style.maxHeight="99999px";
menuActive=!0;"undefined"!==typeof ga&&(ga("set","page","/menu"),ga("send","pageview"))},activateMainFn=function(){document.querySelector("#nav-menu");var a=document.querySelector("#canvas-wrapper"),b=document.querySelector("#menu-button");classie.remove(a,"pml-open");classie.remove(b,"active");menuActive=!1};function GetURLID(){var a=window.location.pathname;return"/"==a?"":a.substring(1)}function GetHashID(){var a=window.location.hash;return 0==a.length?"":a.substring(2)}
function SetXURL(a){a=getElementsByClassName(a,"XURL");var b=a.length;for(i=0;i<b;i++)a[i].onclick=LoadCanvasI}function SetXHRef(a){a=getElementsByClassName(a,"XHRef");var b=a.length;for(i=0;i<b;i++)a[i].onclick=LoadCanvasL}function LoadCanvasI(){LoadCanvasH(this);return!1}function LoadCanvasL(){var a=this.getAttribute("data-xhref");LoadCanvasH(document.getElementById(a));return!1}
function LoadCanvasH(a){var b=a.getAttribute("data-target");URLid="root"==b?"":b;LoadCanvas(a);window.history.pushState({id:b},"","/"+URLid);"undefined"!==typeof ga&&(ga("set","page","/"+URLid),ga("send","pageview"))}
function LoadCanvas(a){var b=a.getAttribute("data-target");"root"==b&&(document.getElementById("path").style.visibility="hidden");var d=document.getElementById("updated");document.getElementById("canvas-main").innerHTML="";d.style.visibility="hidden";BeginLoading();var e=new XMLHttpRequest,e=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");e.onreadystatechange=function(){if(4==e.readyState){var l=document.getElementById("canvas-main");switch(e.status){case 200:KillLoading();
var j=JSON.parse(e.responseText),t=j.xurl,h=j.async,f="WCodes";"root"!=b&&(f+=" - "+a.innerText);f+=" : "+j.desc;document.title=f;"root"!=b&&(document.getElementById("path").innerHTML=j.title);l.innerHTML=j.content;document.getElementById("updated").style.display="block";document.getElementById("date").innerHTML=j.date;""==!URLid&&(document.getElementById("path").style.visibility="visible");document.getElementById("updated").style.visibility="visible";l=document.getElementById("canvas-main").scrollHeight;
document.getElementById("nav-menu").style.maxHeight=l+"px";document.getElementById("canvas-main").style.maxHeight="99999px";d.style.visibility="visible";"1"==t&&SetXHRef(document);"1"==h&&eval(b+"()");break;case 404:document.getElementById("updated").style.display="none";document.getElementById("date").innerHTML="";l.innerHTML="Error: 404 - Resource not found!";break;case 408:case 501:case 502:document.getElementById("date").innerHTML="",document.getElementById("updated").style.display="none",l.innerHTML=
"Error!"}}};e.open("GET",b+".json",!0);e.setRequestHeader("Content-Type","text/plain;charset=UTF-8");e.send()}function Loading(){var a=document.getElementById("loading");void 0===Loading.count?(Loading.count=0,a.innerText="Loading",a.setAttribute("style","display: block")):3==Loading.count?KillLoading():(a.innerText+=".",Loading.count++)}function BeginLoading(){clearTimeout(intrvl);intrvl=setInterval(Loading,1E3)}
function KillLoading(){var a=document.getElementById("loading");Loading.count=void 0;a.setAttribute("style","display: none");clearTimeout(intrvl)}function fbReload(){try{FB.XFBML.parse()}catch(a){}}function about_me(){gapi.plus.go("me_g-plus");twttr.widgets.load()}function presentation(){BeginLoading()}function wordlist(){fbReload()}function feedback(){fbReload()}
function getElementsByClassName(a,b){if(a.getElementsByClassName)return a.getElementsByClassName(b);var d=a;null==d&&(d=document);var e=[],d=d.getElementsByTagName("*"),l=d.length,j=RegExp("(^|\\s)"+b+"(\\s|$)"),t,h;for(h=t=0;t<l;t++)j.test(d[t].className)&&(e[h]=d[t],h++);return e}function supportsSvg(){var a=document.createElement("div");a.innerHTML="<svg/>";return"http://www.w3.org/2000/svg"==(a.firstChild&&a.firstChild.namespaceURI)}
"undefined"!==typeof document&&!("classList"in document.createElement("a"))&&function(a){a=(a.HTMLElement||a.Element).prototype;var b=Object,d=String.prototype.trim||function(){return this.replace(/^\s+|\s+$/g,"")},e=Array.prototype.indexOf||function(a){for(var b=0,h=this.length;b<h;b++)if(b in this&&this[b]===a)return b;return-1},l=function(a,b){this.name=a;this.code=DOMException[a];this.message=b},j=function(a,b){if(""===b)throw new l("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(b))throw new l("INVALID_CHARACTER_ERR",
"String contains an invalid character");return e.call(a,b)},t=function(a){for(var b=d.call(a.className),b=b?b.split(/\s+/):[],h=0,f=b.length;h<f;h++)this.push(b[h]);this._updateClassName=function(){a.className=this.toString()}},h=t.prototype=[],f=function(){return new t(this)};l.prototype=Error.prototype;h.item=function(a){return this[a]||null};h.contains=function(a){return-1!==j(this,a+"")};h.add=function(a){a+="";-1===j(this,a)&&(this.push(a),this._updateClassName())};h.remove=function(a){a=j(this,
a+"");-1!==a&&(this.splice(a,1),this._updateClassName())};h.toggle=function(a){a+="";-1===j(this,a)?this.add(a):this.remove(a)};h.toString=function(){return this.join(" ")};if(b.defineProperty){h={get:f,enumerable:!0,configurable:!0};try{b.defineProperty(a,"classList",h)}catch(q){-2146823252===q.number&&(h.enumerable=!1,b.defineProperty(a,"classList",h))}}else b.prototype.__defineGetter__&&a.__defineGetter__("classList",f)}(self);
(function(a){function b(a,b){(d(a,b)?l:e)(a,b)}var d,e,l;"classList"in document.documentElement?(d=function(a,b){return a.classList.contains(b)},e=function(a,b){a.classList.add(b)},l=function(a,b){a.classList.remove(b)}):(d=function(a,b){return RegExp("(^|\\s+)"+b+"(\\s+|$)").test(a.className)},e=function(a,b){d(a,b)||(a.className=a.className+" "+b)},l=function(a,b){a.className=a.className.replace(RegExp("(^|\\s+)"+b+"(\\s+|$)")," ")});var j={hasClass:d,addClass:e,removeClass:l,toggleClass:b,has:d,
add:e,remove:l,toggle:b};"function"===typeof define&&define.amd?define(j):"object"===typeof exports?module.exports=j:a.classie=j})(window);
(!window.history||!window.history.pushState)&&function(a,b,d,e,l){var j=a.document,t=j.documentElement,h=a.history||{},f=a.location,q=!!h.pushState,Y=q&&h.state===l,y=f.href,w=a.JSON||{},C=Object.defineProperty,D=Object.prototype.__defineGetter__,Z=Object.prototype.__defineSetter__,U=h.pushState,V=h.replaceState,I=a.sessionStorage,E=Object.prototype.hasOwnProperty,$=Object.prototype.toString,J=+((a.eval&&eval("/*@cc_on 1;@*/")&&/msie (\d+)/i.exec(navigator.userAgent)||[])[1]||0),aa=(new Date).getTime(),
z=(C||D)&&(!J||8<J)?0:1,m=8>J?j.createElement("iframe"):d,A,F,G,H="",K=(A="addEventListener",a[A])||(A="attachEvent",H="on",a[A]),ba=(F="removeEventListener",a[F])||(F="detachEvent",a[F]),ca=(G="dispatchEvent",a[G])||(G="fireEvent",a[G]),L=[],W=[],P=0,B={onpopstate:L,popstate:L,onhashchange:W,hashchange:W},v=function(){var a,k,s,g={basepath:"/",redirect:0,type:"/"};s=j.getElementsByTagName("SCRIPT");for(a=0;s[a];a++)if(k=/(.*)\/(?:history|spike)(?:-\d\.\d(?:\.\d)?\w?)?(?:\.min)?.js\?(.*)$/i.exec(s[a].src)||
a===s.length-1&&2===(k=s[a].src.split("?")).length&&(k[2]=k[1])&&k){a=0;for(s=k[2].split("&");s[a];)k=s[a++].split("="),g[k[0]]="true"==k[1]?b:"false"==k[1]?d:k[1]||"";g.basepath=g.basepath||"/";break}return g}(),p=function(a){var b,s,g,c,e,x,d,da=RegExp("^"+v.basepath,"i");return function(r,h){if(r){if(!q||J){var j=p(),l=j._pathname,m=j._protocol;r=/^(?:[\w0-9]+\:)?\/\//.test(r)?0===r.indexOf("/")?m+r:r:m+"//"+j._host+(0===r.indexOf("/")?r:0===r.indexOf("?")?l+r:0===r.indexOf("#")?l+j._search+r:
l.replace(/[^\/]+$/g,"")+r)}}else if(r=f.href,!q||h)r=f.protocol+"//"+f.host+v.basepath+(r.replace(/^[^#]*/,"")||"#").replace(RegExp("^#[/]?(?:"+v.type+")?"),"");if(b!==r){a.href=b=r;x=a.port;e=a.host;d=a.pathname;if("http:"===a.protocol&&80==x||"https:"===a.protocol&&443==x)e=a.hostname,x="";d=0===d.indexOf("/")?d:"/"+d;s=d+a.search+a.hash;c=d.replace(da,v.type)+a.search;g=c+a.hash}return{_href:a.protocol+"//"+e+s,_protocol:a.protocol,_host:e,_hostname:a.hostname||f.hostname,_port:x||f.port,_pathname:d,
_search:a.search,_hash:a.hash,_relative:s,_nohash:c,_special:g}}}(j.createElement("a")),u=!z?h:{back:h.back,forward:h.forward,go:h.go,pushState:e,replaceState:e,emulate:!q,toString:function(){return"[object History]"}},M={state:{get:function(){return m&&m.storage||Q()[u.location.href]||e}},length:{get:function(){return h.length}},location:{set:function(n){a.location=n},get:function(){return q?f:R}}},R={assign:function(a){f.assign(q||0!==a.indexOf("#")?a:"#"+p()._nohash+a)},reload:f.reload,replace:function(a){f.replace(q||
0!==a.indexOf("#")?a:"#"+p()._nohash+a)},toString:function(){return this.href}},ea={href:{set:function(a){f.href=a},get:function(){return p()._href}},protocol:{set:function(a){f.protocol=a},get:function(){return f.protocol}},host:{set:function(a){f.host=a},get:function(){return f.host}},hostname:{set:function(a){f.hostname=a},get:function(){return f.hostname}},port:{set:function(a){f.port=a},get:function(){return f.port}},pathname:{set:function(a){f.pathname=a},get:function(){return p()._pathname}},
search:{set:function(a){f.search=a},get:function(){return p()._search}},hash:{set:function(a){a=0===a.indexOf("#")?a:"#"+a;var b=p();m?a!=b._hash&&(u.pushState(e,e,b._nohash+a),X({oldURL:b._href})):f.hash="#"+b._nohash+a},get:function(){return p()._hash}}},S=function(n,k,e){var g=n,c,f=d;if(C||D)for(c in k){if(E.call(k,c))if(D)k[c].get&&D.call(n,c,k[c].get),k[c].set&&Z.call(n,c,k[c].set);else if(C)try{C(n,c,k[c])}catch(x){if(e)return d;f=b;break}}else f=b;if(f&&z){e="StaticClass"+aa+z++;g=["Class "+
e];"execVB"in a||execScript("Function execVB(c) ExecuteGlobal(c) End Function","VBScript");"VBCVal"in a||execScript("Function VBCVal(o,r) If IsObject(o) Then Set r=o Else r=o End If End Function","VBScript");for(c in n)g[g.length]="Public ["+c+"]";E.call(n,"toString")&&(n.propertyIsEnumerable("toString")||(g[g.length]="Public [toString]"),k["(toString)"]={get:function(){return this.toString.call(this)}});for(c in k)E.call(k,c)&&(k[c].get&&(n["get "+c]=k[c].get,g.push("Public [get "+c+"]","Public "+
("(toString)"===c?"Default ":"")+"Property Get ["+c+"]","Call VBCVal(me.[get "+c+"].call(me),["+c+"])","End Property")),k[c].set&&(n["set "+c]=k[c].set,g.push("Public [set "+c+"]","Public Property Let ["+c+"](v)","Call me.[set "+c+"].call(me,v)","End Property","Public Property Set ["+c+"](v)","Call me.[set "+c+"].call(me,v)","End Property")));g.push("End Class","Function "+e+"Factory()","Set "+e+"Factory=New "+e,"End Function");execVB(g.join("\n"));g=a[e+"Factory"]();for(c in n)g[c]=n[c];E.call(n,
"toString")&&(g.toString=n.toString)}return g},N=w.stringify||function(a){function b(a){var c=/[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,e={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};c.lastIndex=0;return c.test(a)?'"'+a.replace(c,function(a){var b=e[a];return"string"===typeof b?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}var e=function(g){var c,f,d;
c=(typeof g).charCodeAt(2);if(114===c)g=b(g);else if(109===c)g=isFinite(g)?String(g):"null";else if(111===c||108===c)g=String(g);else if(106===c)if(g){f=(c="[object Array]"===$.apply(g))?"[":"{";if(c)for(d=0;d<g.length;d++)f+=(0==d?"":",")+e(g[d]);else for(d in g)E.call(g,d)&&g[d]!==a&&(f+=(1==f.length?"":",")+b(d)+":"+e(g[d]));g=f+(c?"]":"}")}else g="null";else g=a;return g};return e}(),T=function(){var a=w.parse;return function(b){return b?a?a(b):(new Function("return "+b))():e}}(),Q=function(a){return I?
a?I.setItem("__hitoryapi__",N(a)):T(I.getItem("__hitoryapi__"))||{}:{}},O=function(b,e,f){var g=2===b?a.onhashchange:a.onpopstate,c=2===b?"hashchange":"popstate",h=B[c];j.createEvent?(b=j.createEvent("Events"),b.initEvent(c,d,d)):(b=j.createEventObject(),b.type=c);b.state=u.state;b.oldURL=e;b.newURL=f;g&&g.call(a,b);e=0;for(f=h.length;e<f;e++)h[e].call(a,b)},X=function(){var n=a.onpopstate||e,k=a.onhashchange||e,s=0,g=e,c=p(),m=c._href;c._hash.replace(/^#/,"");var x=function(){if(y&&!(y=0)&&c._relative!==
v.basepath)clearInterval(g),setTimeout(O,10)},w=function(a){var b=p();if(P)return m=b._href,P=0;var c=a.oldURL||m;a=m=a.newURL||b._href;var b=c.replace(/^.*?(#|$)/,""),e=a.replace(/^.*?(#|$)/,"");c!=a&&!s&&O();y=s=0;b!=e&&O(2,c,a)};K(H+"hashchange",w,d);K(H+"popstate",function(){if(y===f.href)return y=0;y=0;O(s=1)},d);u.redirect=function(c,d){v.type=c===l?v.type:c;v.basepath=d===l?v.basepath:d;if(a.top==a.self){var g=p(e,b)._relative,k=f.search,h=f.pathname;d=v.basepath;q?(g!=d&&RegExp("^"+d+"$",
"i").test(h)&&(f.href=g),RegExp("^"+d+"$","i").test(h+"/")?f.href=d:RegExp("^"+d,"i").test(h)||(f.href=h.replace(/^\//,d)+k)):h!=d&&(f.href=d+"#"+h.replace(RegExp("^"+d,"i"),v.type)+k+f.hash)}};u=S(u,z?M:h.state===l?{state:M.state,location:M.location}:{location:M.location});R=S(R,ea);a[A]=function(a,b,c,d){B[a]?(B[a].push(b),!q&&L===B[a]&&x()):K(a,b,c,d)};a[F]=function(a,b,c){var d=B[a];if(d)for(a=d.length;--a;){if(d[a]===b){d.splice(a,1);break}}else ba(a,b,c)};a[G]=function(d,c){var e=B[d],f=e===
L?a.onpopstate:a.onhashchange;if(e){c=c||("string"==typeof d?a.event:d);try{c&&(c.target=a)}catch(g){try{c.srcElement=a}catch(h){}}f&&f.call(a,c);for(var f=0,k=e.length;f<k;f++)e[f].call(a,c);return b}return ca(d,c)};z&&execScript("Public history, onhashchange","VBScript");if((!C&&!D||!S(a,{onhashchange:{get:function(){return k},set:function(a){k=a||e}},onpopstate:{get:function(){return n},set:function(a){(n=a||e)&&!q&&x()}}},1))&&!q)g=setInterval(function(){a.onpopstate&&x()},100);v.redirect&&u.redirect();
if(!q)j[A](H+"click",function(c){var e=c||a.event,f=e.target||e.srcElement;c="defaultPrevented"in e?e.defaultPrevented:e.returnValue===d;if(f&&("A"===f.nodeName&&!c)&&(c=p(f.getAttribute("href",2),b),c._hash&&"#"!==c._hash&&c._hash===c._href.replace(p()._href.split("#").shift(),""))){history.location.hash=c._hash;c=c._hash.replace(/^#/,"");if((f=j.getElementById(c))&&f.id===c&&"A"===f.nodeName)f=f.getBoundingClientRect(),a.scrollTo(t.scrollLeft||0,f.top+(t.scrollTop||0)-(t.clientTop||0));e.preventDefault?
e.preventDefault():e.returnValue=!1}},d);return w}();u.pushState=function(a,b,d,g){var c=Q(),h=p()._href,j=d&&p(d);y=0;d=j?j._href:h;g&&c[h]&&delete c[h];if((!q||Y)&&I&&a)c[d]=a,Q(c),a=e;U&&V?g?V.call(u,a,b,d):U.call(u,a,b,d):j&&j._relative!=p()._relative&&(P=1,g?f.replace("#"+j._special):f.hash=j._special)};u.replaceState=function(a,b,d){u.pushState(a,b,d,1)};z?(a.history=u,function(b,e){if(m){var h,g,c=function(){var a=p()._href;e!=a&&X({oldURL:e,newURL:e=a})};g=setInterval(c,100);m.src="javascript:true;";
m=t.firstChild.appendChild(m).contentWindow;u.pushState=h=function(a,b,d,j,l){var n=m.document,q=["<script>","lfirst=1;",,"storage="+N(a)+";","\x3c/script>"];if(d=d&&p(d)){l||clearInterval(g);if(j)m.lfirst?(history.back(),h(a,b,d._href,0,1)):(m.storage=a,f.replace("#"+d._special));else if(d._href!=e||l)m.lfirst||(m.lfirst=1,h(m.storage,b,e,0,1)),q[2]='parent.location.hash="'+d._special.replace(/"/g,'\\"')+'";',n.open(),n.write(q.join("")),n.close();l||(e=p()._href,g=setInterval(c,100))}else m.storage=
a};K(H+"unload",function(){if(m.storage){var a={};a[p()._href]=m.storage;j.cookie="_historyAPI="+escape(N(a))}clearInterval(g)},d);if(1<b.length){b=unescape(b.pop().split(";").shift());try{m.storage=T(b)[p()._href]}catch(l){}}!w.parse&&!w.stringify&&(w.parse=T,w.stringify=N,a.JSON=w)}}(j.cookie.split("_historyAPI="),p()._href)):a.history.emulate=!q}(window,!0,!1,null);
