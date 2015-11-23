<?php

	header('Content-type: text/html; charset=utf-8');

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

	echo GetComponentMode($id);
	echo GetFileDate($file);

	$desc = GetComponentDesc($id);
	printf('%03d', strlen($desc)); //desc len limited to 999
	echo $desc;

	require($file);
?>
	<div id="updated">Updated:
		<span id="date">
			<?php echo $desc; ?>
		</span>
	</div>
