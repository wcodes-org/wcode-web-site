var curTab;
var intrvl = 0;
/*if (document.readyState == "complete" || document.readySate == "loaded" || document.readyState == "interactive")
{
	var x = 0;
	x++;
     // document has at least been parsed
}*/
//var tb = (Date.now());
/*var aeCalled = false;
if(document.addEventListener)
	document.addEventListener('DOMContentLoaded', Init)
else if(document.attachEvent) {
	function TryScroll() {
		if(aeCalled)
			return;
		try {
			document.documentElement.doScroll("left")
			aeCalled = true;
			Init();
		}
		catch(e) {
			setTimeout(TryScroll, 10)
		}
	}
	TryScroll();
}
else*/
	window.onload = Init;

window.onpopstate = function(e) { //window.addEventListener('popstate', function(e)
	if(!!e.state)
		if(e.state.id == "menu")
			activateMenuFn();
		else {
			LoadCanvas(document.getElementById(e.state.id));
			activateMainFn();
		}
}

var menuActive = false;

function Init() {
//console.log(Date.now()-tb);
	SetXURL(document);
	SetXHRef(document);
	var hashID = GetHashID();
	var URLID = GetURLID();
	
	var canvas_main = document.querySelector( '#canvas-main' ),
		menu_button = document.querySelector( ".toggle-push-left" ),
		menu_items = document.querySelectorAll(".sidebar-nav-norm");

	if(!!hashID) {
		curTab = "wcode";//document.getElementById('wcode');
		LoadCanvas(document.getElementById(hashID));
	}
	else if(!!URLID)
		curTab = URLID;//document.getElementById(URLID);
	else
		curTab = "wcode";//document.getElementById('wcode');
	
	if(URLID == "menu") {
		menuActive = true;
		canvas_main.style.maxHeight = document.querySelector('#nav-menu').scrollHeight+"px";
	}
	else
		document.querySelector('#nav-menu').style.maxHeight = canvas_main.scrollHeight+"px";
	
	if (!hashID && !URLID)
		window.history.replaceState({"id":"wcode"}, "", "/");

	menu_button.addEventListener( "click", function(){
		if (!menuActive) {
			activateMenuFn();
		}
		else {
			if(curTab == 'wcode' || curTab == 'menu')
				curTab = "";
			window.history.pushState({"id":curTab}, "", "/"+curTab);
			activateMainFn();
			canvas_main.style.maxHeight = "99999px";
			document.querySelector('#nav-menu').style.maxHeight = canvas_main.scrollHeight+"px";
			document.getElementById('updated').style.visibility = "visible";

		}
    } );
	
	[].forEach.call(document.getElementsByClassName('coming-soon'), function(el) { el.addEventListener( 'click', function() {
		alert("Hold your breath! Coming soon..");
	});});
	
	[].slice.call(menu_items).forEach(function(el,i){
        el.addEventListener( "click", function(){
            //activeNav = "";
			curTab = this.id;
			activateMainFn();
        } );
    });
	
	if (!supportsSvg()) {
		var image_div = document.getElementsByClassName('image');
		var i;
		var l = image_div.length;
		for (i = 0; i < l; i++) {
			image_div[i].classList.add("no-svg");
		}
		// or even .className += " no-svg"; for deeper support
	}
	return false;
}

var activateMenuFn = function() {
	document.getElementById('path').style.visibility = "hidden";
	document.getElementById('updated').style.visibility = "hidden";
	var nav_menu = document.querySelector( '#nav-menu' ),
		canvas_main = document.querySelector( '#canvas-main' ),
		canvas_wrapper = document.querySelector( "#canvas-wrapper" ),
		menu_button = document.querySelector( "#menu-button" );
	window.history.pushState({"id":"menu"}, "", "/"+"menu");
	classie.add( canvas_wrapper, "pml-open" );
	classie.add( menu_button, "active" );
	//document.body.appendChild(mask);
	activeNav = "pml-open";
	var height = nav_menu.scrollHeight;
	canvas_main.style.maxHeight = height+"px";
	nav_menu.style.maxHeight = "99999px";
	menuActive = true;
}

var activateMainFn = function() {
	var nav_menu = document.querySelector( '#nav-menu' ),
		canvas_wrapper = document.querySelector( "#canvas-wrapper" ),
		menu_button = document.querySelector( "#menu-button" );
	classie.remove( canvas_wrapper, "pml-open" );
	classie.remove( menu_button, "active" );
	//var height = canvas_main.clientHeight;
	//nav_menu.setAttribute("style", "max-height:"+height+"px");
	//canvas_main.setAttribute("style", "height:auto");
	menuActive = false;
}

function GetURLID() {
	var loc = window.location.pathname;
	if(loc == '/')
		return "";
	else
		return loc.substring(1);
}

function GetHashID() {
	var hash = window.location.hash;
	if(hash.length == 0)
		return "";
	else
		return hash.substring(2);
}

function SetXURL(node) {
	var arClassElement = getElementsByClassName(node, 'XURL');
	var n = arClassElement.length;
	for(i = 0; i < n; i++) {
		var a = arClassElement[i].children[0];
		//a.onclick = function(){return false};
		arClassElement[i].onclick = LoadCanvasI;
	}
}

function SetXHRef(node) {
	var arClassElement = getElementsByClassName(node, 'XHRef');
	var n = arClassElement.length;
	for(i = 0; i < n; i++)
		arClassElement[i].onclick = LoadCanvasL;
}

function LoadCanvasI(m) {
	LoadCanvasH(this);
	return false;
}

function LoadCanvasL(m) {
	var tabId = this.getAttribute("data-xhref");
	LoadCanvasH(document.getElementById(tabId));
	//activateMenuFn();
	return false;
}

function LoadCanvasH(e) {
	if(e.id == "wcode")
		URLid = "";
	else
		URLid = e.id;
	LoadCanvas(e);
	window.history.pushState({"id":e.id}, "", "/"+URLid);
	if(!(typeof (_gaq) === "undefined"))
	//if(_gaq)
		_gaq.push(['_trackPageview'], "/"+URLid);
}

function LoadCanvas(e) {
	// if(!!curTab)
		// curTab.classList.remove('sidebar-nav-high');
	// curTab = e;
	// e.classList.add('sidebar-nav-high');
	
	// var sideBar = document.getElementById('sidebar-nav');
	// sideBar.style.display = 'none';
	// sideBar.style.display = 'block';

	var date = document.getElementById('updated');
	var canvas_main = document.getElementById('canvas-main');

	canvas_main.innerHTML = "";
	date.style.visibility='hidden';
	BeginLoading();
	
	var xmlhttp = new XMLHttpRequest();
	if(window.XMLHttpRequest) {
		xmlhttp=new XMLHttpRequest();
	}
	else { // IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState == 4) {
			var canvas_main = document.getElementById('canvas-main');
			switch (xmlhttp.status) {
			case 200: {
				KillLoading();
				
				var resp = JSON.parse(xmlhttp.responseText);

				var bXURL = resp.xurl;
				var bASCR = resp.async;

				var titleBar = "WCode";
				if(e.id != "wcode")
					titleBar += " - " + e.innerText;
				//var lTitle = resp.desc.length;
				//if(lTitle != 0)
					titleBar += " : " + resp.desc;
				document.title = titleBar;
				document.getElementById('path').innerHTML = resp.title;
				canvas_main.innerHTML = resp.content;
				document.getElementById('updated').style.display = 'block';
				document.getElementById('date').innerHTML = resp.date;
				if(!URLid == "")
					document.getElementById('path').style.visibility = "visible";
				document.getElementById('updated').style.visibility = "visible";
				var height = document.getElementById('canvas-main').scrollHeight;
				document.getElementById('nav-menu').style.maxHeight = height+"px";
				document.getElementById('canvas-main').style.maxHeight = "99999px";
				date.style.visibility='visible';
				if(bXURL == "1")
					SetXHRef(document);
				if(bASCR == "1")
					eval(e.id+"()");
			}																							break;
			case 404: {
				document.getElementById('updated').style.display = 'none';
				document.getElementById('date').innerHTML = "";
				canvas_main.innerHTML = "Error: 404 - Resource not found!";
			}																							break;
			case 408:
			case 501:
			case 502: {
				document.getElementById('date').innerHTML = "";
				document.getElementById('updated').style.display = 'none';
				canvas_main.innerHTML = "Error!";
			}
			}
		}
	}
	xmlhttp.open("GET", e.id+".json", true);
	xmlhttp.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");//application/xhtml+xml
	xmlhttp.send();
}
