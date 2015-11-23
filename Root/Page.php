<?php
	require "API.php";
	require "ComponentDetails.php";

	if( isset($_GET['Mode']) && ($_GET['Mode'] === "Publish") )
		$bPublish = TRUE;
	else
		$bPublish = FALSE;

	$component;
	LoadComponents();
	
	$id = GetOrigCall();
	if(strlen($id) == 0)
		$id = "wcode";
	$title = GetComponentTitle($id);
	$desc = GetComponentDesc($id);
	
	$dom = new DOMDocument();

	ob_start();
	require 'Template.php';
	$dom->loadHTML(ob_get_contents());
	ob_end_clean();

	//AddAttribute(($dom->getElementById($id)), "class", "sidebar-nav-high");
	echo $dom->saveHTML();
?>
