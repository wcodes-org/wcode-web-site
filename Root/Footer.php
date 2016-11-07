<div id="footer-wrapper">
	<div id="updated">Updated:
		<span id="date">
			<?php echo $date; ?>
		</span>
	</div>
	<div class="shadow-scroll-bottom"></div>
	<div id="footer-wrapper-divider"></div>
	<div id="footer-wrapper-inside">
	
		<div>
			<span id='download_button_bottom'>
				<a href='/downloads'><span class='image'><?php echo file_get_contents('resource\download.svg'); ?></span></a>
			</span>
			<span id='download-android-bottom' class='download coming-soon'>
				<a><span class='image'><img src="/resource/google-play-badge.png" alt="WCode number example - comics" /></span></a>
				<span>coming soon</span>
			</span>
			<span id='download-apple-bottom' class='download coming-soon'>
				<a class='content-link'><span class='image'><?php echo file_get_contents('resource\apple.svg'); ?></span></a>
				<span>coming soon</span>
			</span>
		</div>

		<div id="social-links">
			<span class="social">
				<a href="https://twitter.com/wcodesorg" id="twitter" onclick='trackOutboundLink("wcodes-google", "https://twitter.com/wcodesorg"); return false;'><span class='image'><?php echo file_get_contents('Resource\twitter.svg'); ?></span></a>
			</span>
			<span class="social">
				<a href="https://facebook.com/wcodesorg" id="facebook" onclick='trackOutboundLink("wcodes-google", "https://facebook.com/wcodesorg"); return false;'><span class='image'><?php echo file_get_contents('Resource\facebook.svg'); ?></span></a>
			</span>
			<span class="social">
				<a href="https://plus.google.com/+wcodesorg" id="google" onclick='trackOutboundLink("wcodes-google", "https://plus.google.com/+wcodes.org"); return false;'><span class='image'><?php echo file_get_contents('Resource\google+.svg'); ?></span></a>
			</span>
		</div>
		<div id="footer-left">
			<a class="content-link-grey XURL" href="/license" data-target="license" data-title='License'>Some rights reserved (CC-BY)</a>
		</div>
		<div id="footer-right">
			by <a class="content-link XURL" href="/about_me" data-target="about_me" data-title='About me'>Ujjwal Singh</a><a class="content-link" target="_blank" href="/about_me" rel="author"></a>
		</div>
	</div>
</div>
