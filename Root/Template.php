<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" itemscope="" itemtype="http://schema.org/">
	<head>
		<meta http-equiv="X-UA-Compatible" content="IE=8" />
		<meta http-equiv="X-UA-Compatible" content="chrome=1" />
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<meta name="title" content="WCode" />
		<meta itemprop="name" content="WCode" />
		<meta itemprop="image" content="http://wcodes.org/icon-social.png" />
		<meta property="og:title" content="WCode" />
		<meta property="og:type" content="product" />
		<meta property="og:url" content="http://wcodes.org" />
		<meta property="og:image" content="http://wcodes.org/icon-social.png" />
		<meta property="og:description" content="Similar to Bar Codes & QR Codes, encode digital data with literal words e.g. a telephone number like 9876543210 becomes \ Cat Apple Mango Tomato /" />
		<meta property="og:site_name" content="WCodes" />
		<meta property="fb:admins" content="100000014591845" />
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
		<link rel="apple-touch-icon" type="image/png" href="/apple-touch-icon.png" />
		<link href='http://fonts.googleapis.com/css?family=Abel' rel='stylesheet' type='text/css'>
<?php
	if($bPublish)
	{
		require "Head Scripts - GA.html";
		require "Head Scripts - Flatter.html";
?>
		<link rel="stylesheet" type="text/css" href="/style.css" />
		<script type="text/javascript" src="/script.js"></script>
<?php
	}
	else
	{
?>
		<link rel="stylesheet" type="text/css" href="/CSS/style.css" />
		<link rel="stylesheet" type="text/css" href="/CSS/Side Bar.css" />
		<link rel="stylesheet" type="text/css" href="/CSS/Share Box.css" />
		<link rel="stylesheet" type="text/css" href="/CSS/Content.css" />
		<script type="text/javascript" src="/JS/script.js"></script>
		<script type="text/javascript" src="/JS/AJAXLoad.js"></script>
		<script type="text/javascript" src="/JS/API.js"></script>
		<script type="text/javascript" src="/JS/ClassList.js"></script>
		<script type="text/javascript" src="/JS/Classie.js"></script>
<?php
	}				
?>
		<title>
<?php
			if($title === "WCode")
				echo "WCode"." : ".$desc;
			else
			{
				if($desc)
					echo "WCode - ".$title." : ".$desc;
				else
					echo "WCode - ".$title;
			}
?>
		</title>
	</head>
	<body>
		<?php	if($bPublish)	require "Body Begin.html"; ?>
		<div id="main-wrapper">

			<div id="content-wrapper">
			<?php require "Header.html"; ?>
				<div id="wrapper">
						<div id="main">
								<div class="container">
				<div id="content-wrapper-inside">
					<div id="loading"></div>
					<div class="shadow-scroll-top"></div>
					<div id="canvas-wrapper">
						<div id="canvas-wrapper-inner-container">
							<?php require "Menu.html"; ?>
							<div id="canvas-main">
								<?php require (GetComponentPath($title)) ?>
							</div>
						</div>
						<?php	if($bPublish)	require "Canvas Footer.html"; ?>
					</div>
				</div>
								</div>
						</div>
				</div>

			</div>
			<?php require "Footer.html"; ?>
		</div>
		<script type="text/javascript" src="/JS/SlideMenu.js"></script>
	</body>
</html>
