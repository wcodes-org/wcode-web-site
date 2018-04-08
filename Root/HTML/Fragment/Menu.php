<?php
	require_once 'Fragment\Item.php';
?>
<div id='nav-menu'>
	<div class='nav-menu_container'>
		<div class='sidebar-nav-li sidebar-sub'>
<?php
			$MENU_MAX_ITEM_COUNT = 5;
			group($MENU_MAX_ITEM_COUNT, ['root', ''], ['video', 'Video'], ['downloads', 'Downloads'], ['faq', 'FAQ'], ['in_pictures', 'In pictures'], ['pitch', 'Pitch'], ['use_cases', 'Use cases'], ['applications', 'Applications'], ['about', 'About']);
			group($MENU_MAX_ITEM_COUNT, ['adoption', 'Adoption'], ['bug_report', 'Bug report'], ['changelog', 'Changelog'], ['comparision', 'Comparision'], ['data_set', 'Data set'], ['features', 'Features'], ['feedback', 'Feedback'], ['guidelines', 'Guidelines'], ['implementations', 'Implementations'], ['license', 'License'], ['logo', 'Logo'], ['presentation', 'Presentation'], ['roadmap', 'Roadmap'], ['source_code', 'Source code'], ['technology', 'Technology'], ['timeline', 'Timeline'], ['user_guide', 'User guide'], ['wordlist', 'WordList']);
			group($MENU_MAX_ITEM_COUNT, ['about_project', 'About project'], ['about_site', 'About site'], ['about_me', 'About me'], ['clientele', 'Clientele'], ['media', 'Media']);
?>
		</div>
	</div>
</div>
