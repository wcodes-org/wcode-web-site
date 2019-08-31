<div id='message'>
	<div>
		<?php includeSVG($id, 'Presentation_1'); ?>
		<div id='problem'>
			<h2><span class="bullet">•</span>The address <span class='key'>Problem</span></h2>
			<?php includeSVG($id, 'Presentation_2'); ?>
			<div class="indent-f">
				<p>
					They are generally too non-standardized, lengthy and ambiguous.<br>
					Also, often very imprecise.
				</p>
				<p>
					And even the latitude and longitude coordinates are too complex to be used by the general public.<br>
				</p>
			</div>
		</div>
		<div id='solution'>
			<?php includeSVG($id, 'Presentation_3'); ?>
			<h2><span class="bullet">•</span>The words <span class='key'>Solution</span></h2>
			<div class="indent-f">
				<p>
					With WCode location - addresses can be super-short and simple.
				</p>
			</div>
		</div>
		<div id='presentation'>
			<?php includeSVG($id, 'Presentation_4'); ?>
			<?php includeSVG($id, 'Presentation_5'); ?>
		</div>
		<div>
			<h2><span class="bullet"></span><span class='key'>App</span></h2>
			<?php includeSVG($id, 'Presentation_6'); ?>
			<div class="indent-f">
				<p>
					Click on the link below to go to the webapp and watch it simplify your address:
				</p>
			</div>
		</div>
	</div>
	<?php group_image("page-list center", 1, ['app/location', 'WCode Location', 'http://wcodes.org']) ?>
</div>
<?php require('..\HTML\Fragment\Component_bottom_nav.php') ?>
