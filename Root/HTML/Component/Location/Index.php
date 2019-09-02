<div id='message'>
	<div>
		
		<div id='location_title'>
			<?php includeSVG($id, 'location_title'); ?>
		</div>
		
		<div id='location_problem_statement'>
			<h2><span class="bullet">•</span>The address <span class='key'>Problem</span></h2>
			<?php includeSVG($id, 'location_problem_statement'); ?>
		</div>
		
		<div id='location_problem_description'>
			<?php includeSVG($id, 'location_problem_description'); ?>
		</div>

		<div id='location_solution_statement'>
			<h2><span class="bullet">•</span>The words <span class='key'>Solution</span></h2>
			<?php includeSVG($id, 'location_solution_statement'); ?>
		</div>
		
		<div id='location_solution_description'>
			<?php includeSVG($id, 'location_solution_description'); ?>
		</div>
		
		<div id='location_door'>
			<?php includeSVG($id, 'location_door'); ?>
		</div>
		
		<div id='location_app_intro'>
			<h2><span class="bullet"></span><span class='key'>App</span></h2>
			<?php includeSVG($id, 'location_app_intro'); ?>
			<div class="indent-f">
				<p>
					Webapp:
				</p>
			</div>
		</div>
	</div>
	<?php group_image("page-list center", 1, ['app/location', 'WCode Location', 'http://wcodes.org']) ?>
</div>
<?php require('..\HTML\Fragment\Component_bottom_nav.php') ?>
