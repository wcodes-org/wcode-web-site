﻿var $jscomp={scope:{},checkStringArgs:function(a,c,b){if(null==a)throw new TypeError("The 'this' value for String.prototype."+b+" must not be null or undefined");if(c instanceof RegExp)throw new TypeError("First argument to String.prototype."+b+" must not be a regular expression");return a+""}};
$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(a,c,b){if(b.get||b.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[c]=b.value)};$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.polyfill=function(a,c,b,d){if(c){b=$jscomp.global;a=a.split(".");for(d=0;d<a.length-1;d++){var e=a[d];e in b||(b[e]={});b=b[e]}a=a[a.length-1];d=b[a];c=c(d);c!=d&&null!=c&&$jscomp.defineProperty(b,a,{configurable:!0,writable:!0,value:c})}};
$jscomp.polyfill("String.prototype.startsWith",function(a){return a?a:function(a,b){var c=$jscomp.checkStringArgs(this,a,"startsWith");a+="";for(var e=c.length,h=a.length,f=Math.max(0,Math.min(b|0,c.length)),g=0;g<h&&f<e;)if(c[f++]!=a[g++])return!1;return g>=h}},"es6-impl","es3");var notification_intrvl,init_loading_intrvl,fade_loading_intrvl;function beginLoading(){document.getElementById("wait_loader").classList.remove("hide")}
function stopLoading(){document.getElementById("wait_loader").classList.add("hide")}function initLoading(){clearTimeout(init_loading_intrvl);init_loading_intrvl=setTimeout(function(){beginLoading()},3E3)}function endLoading(){clearTimeout(init_loading_intrvl);clearTimeout(fade_loading_intrvl);stopLoading()}function fadeLoading(){clearTimeout(fade_loading_intrvl);fade_loading_intrvl=setTimeout(function(){stopLoading()},3E3)}
function errorLoading(){document.getElementById("notification").classList.remove("hide");clearTimeout(notification_intrvl);notification_intrvl=setInterval(function(){document.getElementById("notification").classList.add("hide")},3E3)}function fbReload(){try{FB.XFBML.parse()}catch(a){}}
function getElementsByClassName(a,c){if(a.getElementsByClassName)return a.getElementsByClassName(c);var b=a;null==b&&(b=document);var d=[],b=b.getElementsByTagName("*"),e=b.length,h=new RegExp("(^|\\s)"+c+"(\\s|$)"),f,g;for(g=f=0;f<e;f++)h.test(b[f].className)&&(d[g]=b[f],g++);return d}function supportsSvg(){var a=document.createElement("div");a.innerHTML="<svg/>";return"http://www.w3.org/2000/svg"==(a.firstChild&&a.firstChild.namespaceURI)}
var curTab,gTarget,URLid,menuActive=!1,isTranslateButtonActive,isSearchButtonActive,activateMenuFn=function(){document.getElementById("main-wrapper").classList.add("pml-open");document.getElementById("menu-button").classList.add("active");activeNav="pml-open";var a=document.getElementById("nav-menu").scrollHeight;document.getElementById("canvas-main").style.maxHeight=a+"px";document.getElementById("nav-menu").style.maxHeight=null;menuActive=!0;"undefined"!==typeof ga&&(ga("set","page","/menu"),ga("send",
"pageview"))},activateMenu=function(){activateMenuFn()},activateMainFn=function(){document.getElementById("main-wrapper").classList.remove("pml-open");document.getElementById("main-wrapper").classList.remove("hide_path_title_updated");document.getElementById("menu-button").classList.remove("active");menuActive=!1},activateMain=function(){replaceState(curTab,document.getElementById("title").innerText);activateMainFn()};function loadCanvasI(a){loadCanvasH(this);return!1}
function loadCanvasH(a){var c=a.getAttribute("data-target");URLid="root"==c?"":c;recordState(c,a.getAttribute("data-title"));loadCanvas(c,a.getAttribute("data-title"));"undefined"!==typeof ga&&(ga("set","page","/"+URLid),ga("send","pageview"))}
function loadCanvas(a,c){curTab=a;document.getElementById("updated");var b=document.getElementById("canvas-main");document.getElementById("main-wrapper").classList.add("hide_path_title_updated");b.classList.add("hide");var d=(new Date).getTime();syncScrollReload.startTime=null;scrollTop();initLoading();"root"==a?(document.getElementById("path-container").classList.add("hide_scale"),document.getElementById("title-container").classList.add("hide_scale")):(document.getElementById("path-container").classList.remove("hide_scale"),
document.getElementById("title-container").classList.remove("hide_scale"));document.getElementById("path").classList.add("hide");document.getElementById("title").classList.add("hide");var e=new XMLHttpRequest,e=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");e.onreadystatechange=function(){if(4==e.readyState&&a===gTarget){var b=document.getElementById("canvas-main");switch(e.status){case 200:endLoading();b=JSON.parse(e.responseText);document.title=b.desc+" - "+PROJECT_TITLE;
"root"==a?updatePathTitle("","&nbsp;"):updatePathTitle(b.path,c);syncScrollReload(d,b,a);break;case 404:document.getElementById("date").innerHTML="";b.innerHTML="Error: 404 - Resource not found!";break;case 408:case 501:case 502:document.getElementById("date").innerHTML="",b.innerHTML="Error!",errorLoading()}}};gTarget=a;e.open("GET","/"+a+".json",!0);e.setRequestHeader("Content-Type","text/plain;charset=UTF-8");e.send()}
function scrollTop(){scrollActive=!0;var a=document.documentElement.scrollTop;"undefined"===typeof a&&(a=0);var c=setInterval(function(){window.scrollTo(0,a);0>=a?(clearInterval(c),scrollActive=!1,syncScrollReload()):a-=100},10)}var scrollActive;
function syncScrollReload(a,c,b){"undefined"!=typeof a&&(syncScrollReload.startTime=a,syncScrollReload.resp=c,syncScrollReload.target=b,activateMainFn());"undefined"==typeof syncScrollReload.startTime||null==syncScrollReload.startTime||scrollActive||executeReload(syncScrollReload.startTime,syncScrollReload.resp,syncScrollReload.target)}
function executeReload(a,c,b){"undefined"!=typeof reloadTimeout&&clearTimeout(reloadTimeout);reloadTimeout=setTimeout(function(){document.getElementById("content").innerHTML=c.content;document.getElementById("canvas-main").classList.remove("hide");document.getElementById("date").innerHTML=c.date;""==!URLid&&document.getElementById("main-wrapper").classList.remove("hide_path_title_updated");var a=document.getElementById("canvas-main").scrollHeight;document.getElementById("nav-menu").style.maxHeight=
a+"px";document.getElementById("canvas-main").style.maxHeight=null;setXURL(document);"1"==c.async&&initPageFunction(b);fbReload()},getTimeOutDuration((new Date).getTime()-a))}function getTimeOutDuration(a){timeout=380-a;return 0>timeout?0:timeout}
function updatePathTitle(a,c){setTimeout(function(){document.getElementById("path").innerHTML=a;document.getElementById("title").innerHTML=c;document.getElementById("path").classList.remove("hide");document.getElementById("title").classList.remove("hide")},300)}window.onpopstate=function(a){a.state&&("menu"==a.state.id?activateMenuFn():loadCanvas(a.state.id,null==a.state.title?"":a.state.title))};function recordState(a,c){window.history.pushState({id:a,title:c},"","/"+("root"!=a?a:""))}
function replaceState(a,c){window.history.replaceState({id:a,title:c},"","/"+("root"!=a?a:""))}function initLoad(){initLoadDone||"interactive"!==document.readyState||(init(),initLoadDone=!0)}
function init(){setXURL(document);var a=getHashID();URLid=getURLid();var c=document.querySelector("#canvas-main"),b=document.querySelector(".toggle-push-left"),d=document.querySelectorAll(".XURL");document.querySelector("#header_button");var e=document.querySelector("#translate-button"),h=document.querySelector("#search-button"),f=document.querySelector("#google_translate_element"),g=document.querySelector("#search_box");a?(curTab="root",loadCanvas(document.getElementById(a))):curTab=URLid?URLid:
"root";"menu"==URLid?(menuActive=!0,b.classList.add("active"),c.style.maxHeight=document.querySelector("#nav-menu").scrollHeight+"px"):document.querySelector("#nav-menu").style.maxHeight=c.scrollHeight+"px";a||URLid?"menu"==URLid&&replaceState("menu",""):replaceState("root","");b.addEventListener("click",function(){menuActive?(activateMain(),c.style.maxHeight=null,document.querySelector("#nav-menu").style.maxHeight=c.scrollHeight+"px"):activateMenu()});e.addEventListener("click",function(){if("undefined"===
typeof isTranslateButtonActive){var a=document.createElement("script");a.src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";e.parentNode.appendChild(a);isTranslateButtonActive=!1}isTranslateButtonActive?(e.classList.remove("header-button-active"),f.classList.add("hide_display"),isTranslateButtonActive=!1):(e.classList.add("header-button-active"),f.classList.remove("hide_display"),isTranslateButtonActive=!0)});h.addEventListener("click",function(){void 0===isSearchButtonActive&&
(gcse_init(),isSearchButtonActive=!1);isSearchButtonActive?(h.classList.remove("header-button-active"),g.classList.add("hide_display"),isSearchButtonActive=!1):(h.classList.add("header-button-active"),g.classList.remove("hide_display"),isSearchButtonActive=!0)});[].forEach.call(document.getElementsByClassName("coming-soon"),function(a){a.addEventListener("click",function(){"undefined"!==typeof ga&&ga("send","event",{eventCategory:"download",eventAction:"click"});alert("Hold your breath! Coming soon..")})});
[].slice.call(d).forEach(function(a,b){a.addEventListener("click",function(){activateMainFn()})});if(!supportsSvg())for(a=document.getElementsByClassName("image"),d=a.length,b=0;b<d;b++)a[b].classList.add("no-svg");initPageFunction(curTab);return!1}var initPageFunction=function(a){a=a.replace("/","__");if("function"===typeof window[a])window[a]()};function getURLid(){var a=window.location.pathname;return"/"==a?"":a.substring(1)}
function getHashID(){var a=window.location.hash;return 0==a.length?"":a.substring(2)}function setXURL(a){a=getElementsByClassName(a,"XURL");var c=a.length;for(i=0;i<c;i++)"menu"==a[i].getAttribute("data-target")?a[i].onclick=activateMenu:a[i].onclick=loadCanvasI}var initLoadDone=!1;initLoad();function about_me(){gapi.plus.go("me_g-plus");twttr.widgets.load()}function presentation(){beginLoading();fadeLoading()}var wordListWhite=[],wordListBlack=[];
function wordlist(){0==wordListWhite.length&&(wordListWhite=loadWordlistWhite(),initloadWordlistBlack(),word_search_box.addEventListener("input",execSearch),search_input_clear.addEventListener("click",clearWordListSearch))}function clearWordListSearch(){word_search_box.value="";setWordList(null,!0);document.getElementById("wordlist-table-black").innerText="";document.getElementById("wordlist-table-separator").classList.add("hide");classie.add(search_input_clear,"hide")}
function loadWordlistWhite(){for(var a=[],c=document.getElementById("wordlist-table").getElementsByClassName("primary"),b=0;b<c.length;b++)a[c[b].firstChild.innerText]=getSecondary(c[b]);return a}function loadWordlistBlack(a){a=a.split("\n");for(var c=[],b=1;b<a.length;b++){var d=a[b].split("\t");0<d[3].length&&c.push(d[3])}wordListBlack.Discarded=[];wordListBlack.Discarded["*"]=c}
function initloadWordlistBlack(){var a=new XMLHttpRequest;a.overrideMimeType("text/pain");a.open("GET","/wordlist-black.tsv",!0);a.onreadystatechange=function(){4==a.readyState&&"200"==a.status&&loadWordlistBlack(a.responseText)};a.send(null)}function getSecondary(a){var c=[];a=a.getElementsByClassName("secondary");for(var b=0;b<a.length;b++)c[a[b].firstChild.innerText]=getWords(a[b]);return c}
function getWords(a){var c=[];a=a.getElementsByTagName("span");for(var b=0;b<a.length;b++)c[b]=a[b].innerText;return c}
function setWordList(a,c){var b,d;c?(b="wordlist-table-white",d=wordListWhite):(b="wordlist-table-black",d=wordListBlack);var e=document.createElement("div"),h;for(h in d){var f=document.createElement("div");f.setAttribute("class","primary");var g=document.createElement("div");g.innerText=h;f.appendChild(g);var g=!1,m;for(m in d[h]){var k=document.createElement("div");k.setAttribute("class","secondary");var l=document.createElement("div");l.innerText=m;k.appendChild(l);var l=document.createElement("div"),
n;n=null!=a?matchWord(d[h][m],a):d[h][m];for(var q in n){var p=document.createElement("span");p.innerText=n[q];l.appendChild(p)}k.appendChild(l);f.appendChild(k);0==n.length?k.classList.add("hide_display"):(k.classList.remove("hide_display"),g=!0)}g?f.classList.remove("hide_display"):f.classList.add("hide_display");e.appendChild(f)}e.setAttribute("id",b);document.getElementById(b).replaceWith(e)}var bSearch_selected=!1;
function execSearch(a){a=word_search_box.value.toLowerCase();if(0==a.length)classie.add(search_input_clear,"hide");else{if(" "==a[a.length-1]){bSearch_selected?(bSearch_selected=!1,clearWordListSearch()):(word_search_box.value=a.substring(0,a.length-1),word_search_box.select(),bSearch_selected=!0);return}classie.remove(search_input_clear,"hide");bSearch_selected=!1}setWordList(a,!0);document.getElementById("wordlist-table-separator").classList.remove("hide");setWordList(a,!1)}
function matchWord(a,c){var b=new RegExp(c.split("").join("\\w*").replace(/\W/,""),"i");return a.filter(function(a){if(a.match(b)&&a.startsWith(c))return a})};

