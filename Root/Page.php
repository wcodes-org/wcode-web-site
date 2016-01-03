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
	$menu_active_class = "";
	
	if(strlen($id) == 0)
		$id = "wcode";
	$menu_active_class;
	if($id == "menu") {
		$menu_active_class = "pml-open";
		$id = "wcode";
	}
	$title = GetComponentTitle($id);
	$desc = GetComponentDesc($id);
	$date = GetFileDate(GetComponentPath($title));
	
	$dom = new DOMDocument();

	ob_start();
	require 'Template.php';
	$dom->loadHTML(ob_get_contents());
	ob_end_clean();

	//AddAttribute(($dom->getElementById($id)), "class", "sidebar-nav-high");
	echo $dom->saveHTML();
?>
