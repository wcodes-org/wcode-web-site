<div id='footer-wrapper'>
	<div id='updated-container'>
		<div id='updated'>
			Updated:
			<span id='date'>
				<?php echo $date; ?>
			</span>
		</div>
	</div>
	<div class='shadow-scroll-bottom'></div>
	<div id='footer-wrapper-divider'></div>
	<div id='footer-wrapper-inside'>

		<div>
			<span id='download_button_bottom' class='grow'>
				<a href='/downloads'><span class='image'><?php includeSVG('', 'Download'); ?></span></a>
			</span>
			<span id='download-android-bottom' class='download coming-soon'>
				<span>coming soon</span>
				<a class='content-link'><span class='image'><?php includeSVG('', 'Google-Play-badge'); ?></span></a>
			</span>
			<span id='download-apple-bottom' class='download coming-soon'>
				<span>to be announced</span>
				<a class='content-link'><span class='image'><?php includeSVG('', 'Apple-App-Store-badge'); ?></span></a>
			</span>
		</div>

		<div id='social-links'>
			<span class='social grow'>
				<a href='https://twitter.com/wcodesorg' id='site-twitter' onclick="trackOutboundLink('wcodes-twitter', 'https://twitter.com/wcodesorg'); return false;"><span class='image'><?php includeSVG('', 'Twitter'); ?></span></a>
			</span>
			<span class='social grow'>
				<a href='https://facebook.com/wcodesorg' id='site-facebook' onclick="trackOutboundLink('wcodes-facebook', 'https://facebook.com/wcodesorg'); return false;"><span class='image'><?php includeSVG('', 'Facebook'); ?></span></a>
			</span>
			<span class='social grow'>
				<a href='https://plus.google.com/+wcodesorg' id='site-gplus' onclick="trackOutboundLink('wcodes-gplus', 'https://plus.google.com/+wcodes.org'); return false;"><span class='image'><?php includeSVG('', 'Google+'); ?></span></a>
			</span>
		</div>
		<div class='footer-content' id='footer-rights'>
			<a class="content-link-gray XURL" href='/license' data-target='license' data-title='License'>Some rights reserved</a>
		</div>
		<div class='footer-content'>
			by <a class="content-link XURL" href='/about_me' data-target='about_me' data-title='About me'>Ujjwal Singh</a><a class='content-link' target='_blank' href='/about_me' rel='author'></a>
		</div>
	</div>
</div>
