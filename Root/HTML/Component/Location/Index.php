<div id='message'>
	<div>
		
		<div id='location_title'>
			<?php includeSVG($id, 'location_title'); ?>
		</div>
		
		<div id='location_problem_statement'>
			<h2><span class='bullet'>•</span>The address <span class='key'>Problem</span></h2>
			<?php $title='location_problem_statement'; $ext='svg'; $alt=''; $center='true'; require('Fragment\Component_image.php') ?>
		</div>
		
		<div id='location_problem_description'>
			<?php $title='location_problem_description'; $ext='svg'; $alt=''; $center='true'; require('Fragment\Component_image.php') ?>
		</div>

		<div id='location_solution_statement'>
			<h2><span class='bullet'>•</span>The words <span class='key'>Solution</span></h2>
			<?php $title='location_solution_statement'; $ext='svg'; $alt=''; $center='true'; require('Fragment\Component_image.php') ?>
		</div>
		
		<div id='location_solution_description'>
			<?php $title='location_solution_description'; $ext='svg'; $alt=''; $center='true'; require('Fragment\Component_image.php') ?>
		</div>
		
		<div id='location_door'>
			<?php $title='location_door'; $ext='svg'; $alt=''; $center='true'; require('Fragment\Component_image.php') ?>
		</div>
		
		<div id='location_app_intro'>
			<h2><span class='bullet'></span><span class='key'>App</span></h2>
			<?php $title='location_app_intro'; $ext='svg'; $alt=''; $center='true'; require('Fragment\Component_image.php') ?>
			<div class='indent-f'>
				<p>
					Webapp:
				</p>
			</div>
		</div>
		<?php group_image("page-list center", 1, ['app/location', 'WCode Location', 'http://wcodes.org']) ?>
		
		<div id='locaiton_appendix'>
			<h2><span class='bullet'></span><span class='key'>Appendix</span></h2>
			<div class='indent-f'>
				<p>- Each city can have over a billion unique addresses. ( 1,073,741,824 precisely )</p>
				<p>* Ground address - within a city, with 2m resolution</p>
				<p>^ Words from a limited set of only 1024 words</p>
			</div>
		</div>
		
	</div>
</div>
<?php require('..\HTML\Fragment\Component_bottom_nav.php') ?>
