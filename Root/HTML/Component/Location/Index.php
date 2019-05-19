<div id='message'>
	<div class='alt_div_shade'>
		<div class="top-bottom-gap full-width-object">
			<?php includeSVG($id, 'Map'); ?>
			<h2 class='center'><?php echo $desc; ?></h2>
		</div>
		<div id='problem'>
			<h2><span class="bullet">•</span>The address <span class='key'>Problem</span></h2>
			<div class="indent-f">
				<p>
					Even in the GPS age, why do addresses have to be so complicated ?
				</p>
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
			<h2><span class="bullet">•</span>The words <span class='key'>Solution</span></h2>
			<div class="indent-f">
				<p>
					With WCode location - addresses can be super-short and simple.
				</p>
				<p>
					The WCode location address can take you to any point in a city using just three very simple words.<br>
					It precisely specifies a ground point with a resolution of just 2 meters.
				</p>
				<p>
					Basically,<br>
					It’s a <em class='blue'>PIN code</em> to your door, but of words.
				</p>
			</div>
		</div>
		<div id='comparison'>
			<h2><span class="bullet"></span><span class='key'>Comparison</span></h2>
			<div class="indent-f">
				<p>
					Other competing systems use alphabets and numbers.<br>
					For end users they don’t help much
				</p>
				<p>
					One system uses words but their dictionary comprises of many thousands of words and thus includes difficult pronunciation and spellings - defeating the very purpose
				</p>
				<p>
					<strong>WCode location uses only 1024 basic words</strong>
				</p>
			</div>
		</div>
		<div id='presentation'>
			<h2><span class="bullet"></span><span class='key'>Presentation</span></h2>
			<iframe id="g-presentation" src="https://docs.google.com/presentation/embed?id=1jFRgkrSqrApwZl3BBJyonYXYDqS4mv8TvzbDMddzL54&start=false&loop=false&delayms=3000"></iframe>
		</div>
		<div>
			<h2><span class="bullet"></span><span class='key'>App</span></h2>
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
