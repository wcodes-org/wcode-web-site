<?php
	header('Content-Type: text/javascript');
	
	$JSRoot = "JS\\";
	require $JSRoot."Script.js";
	require $JSRoot."AJAXLoad.js";
	require $JSRoot."API.js";
	require $JSRoot."ClassList.js";
?>

if (!(window.history && window.history.pushState))
{
	<?php require "JS\\History.js"; ?>
}
