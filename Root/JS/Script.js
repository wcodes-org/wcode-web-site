var curTab;
var intrvl = 0;
/*if (document.readyState == "complete" || document.readySate == "loaded" || document.readyState == "interactive")
{
	var x = 0;
	x++;
     // document has at least been parsed
}*/
//var tb = (Date.now());
var aeCalled = false;
if(document.addEventListener)
	document.addEventListener('DOMContentLoaded', Init)
else if(document.attachEvent)
{
	function TryScroll()
	{
		if(aeCalled)
			return;
		try
		{
			document.documentElement.doScroll("left")
			aeCalled = true;
			Init();
		}
		catch(e)
		{
			setTimeout(TryScroll, 10)
		}
	}
	TryScroll();
}
else
	window.onload = Init;

window.onpopstate = function(e) //window.addEventListener('popstate', function(e)
{
	if(!!e.state)
		LoadCanvas(document.getElementById(e.state.id));
}								//)

function Init()
{
//console.log(Date.now()-tb);
	SetXURL(document);
	SetXHRef(document);
	var hashID = GetHashID();
	var URLID = GetURLID();
	if(!!hashID)
	{
		curTab = document.getElementById('wcode');
		LoadCanvas(document.getElementById(hashID));
	}
	else if(!!URLID)
		curTab = document.getElementById(URLID);
	else
		curTab = document.getElementById('wcode');
	
	if (!hashID && !URLID)
		window.history.replaceState({"id":"wcode"}, "", "/");
	return false;
}

function GetURLID()
{
	var loc = window.location.pathname;
	if(loc == '/')
		return "";
	else
		return loc.substring(1);
}

function GetHashID()
{
	var hash = window.location.hash;
	if(hash.length == 0)
		return "";
	else
		return hash.substring(2);
}

function SetXURL(node)
{
	var arClassElement = getElementsByClassName(node, 'XURL');
	var n = arClassElement.length;
	for(i = 0; i < n; i++)
	{
		var a = arClassElement[i].children[0];
		a.onclick = function(){return false};
		arClassElement[i].onclick = LoadCanvasI;
	}
}

function SetXHRef(node)
{
	var arClassElement = getElementsByClassName(node, 'XHRef');
	var n = arClassElement.length;
	for(i = 0; i < n; i++)
		arClassElement[i].onclick = LoadCanvasL;
}

function LoadCanvasI(m)
{
	LoadCanvasH(this);
	return false;
}

function LoadCanvasL(m)
{
	var tabId = this.getAttribute("data-xhref");
	LoadCanvasH(document.getElementById(tabId));
	return false;
}

function LoadCanvasH(e)
{
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

function LoadCanvas(e)
{
	// if(!!curTab)
		// curTab.classList.remove('sidebar-nav-high');
	// curTab = e;
	// e.classList.add('sidebar-nav-high');
	
	// var sideBar = document.getElementById('sidebar-nav');
	// sideBar.style.display = 'none';
	// sideBar.style.display = 'block';

	//var date = document.getElementById('updated');
	var canvas_main = document.getElementById('canvas-main');

	canvas_main.innerHTML = "";
	//date.style.display='none';
	BeginLoading();
	
	var xmlhttp = new XMLHttpRequest();
	if(window.XMLHttpRequest)
	{
		xmlhttp=new XMLHttpRequest();
	}
	else	// IE6, IE5
	{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState == 4)
		{
			var canvas_main = document.getElementById('canvas-main');
			switch (xmlhttp.status)
			{
			case 200:
			{
				KillLoading();
				
				var resp = xmlhttp.responseText;

				var bXURL = resp.slice(0,1);
				var bASCR = resp.slice(1,2);

				var title = "WCode";
				if(e.id != "wcode")
					title += " - " + e.innerText;
				var lTitle = Number(resp.slice(13, 16));
				if(lTitle != 0)
					title += " : " + resp.slice(16, 16+lTitle);
				document.title = title;
					
				canvas_main.innerHTML = resp.slice(16+lTitle);
				document.getElementById('updated').style.display = 'block';
				document.getElementById('date').innerHTML = resp.slice(2, 13);
								
				if(bXURL == "1")
					SetXHRef(document);
				if(bASCR == "1")
					eval(e.id+"()");
			}																							break;
			case 404:
			{
				document.getElementById('updated').style.display = 'none';
				document.getElementById('date').innerHTML = "";
				canvas_main.innerHTML = "Error: 404 - Resource not found!";
			}																							break;
			case 408:
			case 501:
			case 502:
			{
				document.getElementById('date').innerHTML = "";
				document.getElementById('updated').style.display = 'none';
				canvas_main.innerHTML = "Error!";
			}
			}
		}
	}
	xmlhttp.open("GET", e.id+".html", true);
	xmlhttp.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");//application/xhtml+xml
	xmlhttp.send();
}
