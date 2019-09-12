<div id='message'>
	<div>
		
		<div id='location_title'>
			<?php includeSVG($id, 'location_title'); ?>
		</div>
		
		<div class='video-container' id='location_video'>
			<div class='video-wrapper'>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/-9Ws_0ibvPA?autoplay=1&rel=0&modestbranding=1&enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>
		</div>
				
		<div id='location_problem_statement'>
			<h2><span class='bullet'>•</span>The address <span class='key'>Problem</span></h2>
			<?php $img_title='location_problem_statement'; $ext='svg'; $alt=''; $center='true'; require('Fragment\Component_image.php') ?>
		</div>
		
		<div id='location_problem_description'>
			<?php $img_title='location_problem_description'; $ext='svg'; $alt=''; $center='true'; require('Fragment\Component_image.php') ?>
		</div>

		<div id='location_solution_statement'>
			<h2><span class='bullet'>•</span>The words <span class='key'>Solution</span></h2>
			<?php $img_title='location_solution_statement'; $ext='svg'; $alt=''; $center='true'; require('Fragment\Component_image.php') ?>
		</div>
		
		<div id='location_solution_description'>
			<?php $img_title='location_solution_description'; $ext='svg'; $alt=''; $center='true'; require('Fragment\Component_image.php') ?>
		</div>
		
		<div id='location_door'>
			<?php $img_title='location_door'; $ext='svg'; $alt=''; $center='true'; require('Fragment\Component_image.php') ?>
		</div>
		
		<div id='location_app_intro'>
			<h2><span class='bullet'></span><span class='key'>App</span></h2>
			<?php $img_title='location_app_intro'; $ext='svg'; $alt=''; $center='true'; require('Fragment\Component_image.php') ?>
			<div class='indent-f'>
				<p>
					Webapp:
				</p>
			</div>
		</div>
		<?php group_image("page-list center", 1, ['app/location', 'WCode Location', 'http://wcodes.org']) ?>
		
		<div id='locaiton_appendix'>
			<h2><span class='bullet'></span><span class='key'>Appendix</span></h2>
			<ol id='locaiton_appendix_list'>
				<li>Each city can have over a billion unique addresses. <span>( 1bn 73mn &amp; 741,824 precisely )</span></li>
				<li>Ground address - within a city, with 2m resolution</li>
				<li>Words from a limited set of only 1024 words</li>
			</ol>
		</div>
		
	</div>
</div>
<?php require('..\HTML\Fragment\Component_bottom_nav.php') ?>
