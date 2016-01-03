<?php
	header('Content-type: application/json; charset=utf-8');

	require "API.php";
	require "ComponentDetails.php";

	if( isset($_GET['Mode']) && ($_GET['Mode'] === "Publish") )
		$bPublish = TRUE;
	else
		$bPublish = FALSE;

	$component;
	LoadComponents();

	$id = substr(GetOrigCall(), 0, -5); //No id w/o .html
	$file = GetComponentPath(GetComponentTitle($id));
	if( $bPublish )
		$fileContent = exec("java -jar ..\Tools\HTML-Compressor.jar -t html --compress-js --js-compressor closure --closure-opt-level simple --compress-css ".$file." 2>&1"); 
	else
		$fileContent = file_get_contents($file);
	
	echo "{";
	echo "\"title\":";
	echo "\"";
	echo GetComponentTitle($id);
	echo "\"";
	echo ",";
	echo "\"xurl\":";
	echo "\"";
	echo GetComponentModeXURL($id);
	echo "\"";
	echo ",";
	echo "\"async\":";
	echo "\"";
	echo GetComponentModeASYNC($id);
	echo "\"";
	echo ",";
	echo "\"date\":";
	echo "\"";
	echo GetFileDate($file);
	echo "\"";
	echo ",";
	echo "\"desc\":";
	echo "\"";
	echo GetComponentDesc($id);
	echo "\"";
	echo ",";
	echo "\"content\":";
	echo json_encode($fileContent);
	echo "}";
?>
