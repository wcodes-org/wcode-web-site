<div id='message'>
	<p>WCodes can be integrated into existing and new systems in the following two ways</p>
	<ul class='content-list'>
		<li>
			<div class='content-li-title'>Active</div>
			The WCode sub system can be inserted into an existing system.<br>
			Both the sender and receiver will require the WCode converter attached to the IO Channel.
			<div class="diagram image center">
				<?php includeSVG('', 'adoption-active'); ?>
			</div>
			A WCode Encoder will encode the output right before it is dispatched to the receiver.<br>
			A WCode Decoder will decode it back to the original data before processing it further.<br>
			<br>
			e.g. Two-Factor authentication systems like One Time Password (OTP) &ndash; SMS.
		</li>
		<li>
			<div class='content-li-title'>Passive</div>
			Without modifying the receiving system &ndash; a separate standalone tool can be used to input WCodes and<br>
			&ndash; relay decoded data directly to the target.
			<div class="diagram image center">
				<?php includeSVG('', 'adoption-passive'); ?>
			</div>
			<br>
			e.g. A separate software, similar to the <em>Google Transliterate Tool</em>, can take WCode input and relay the decoded data to, say, a designated field of a GUI form.
		</li>
	</ul>
</div>
<?php require('../HTML/Fragment/Component_bottom_nav.php') ?>
