<div class='message'>
	<em><strong>Word</strong></em> selection criteria:
	<ol class='indent-40'>
		<li>
			Nouns
			<div class='content-li-example'>
				e.g. 'Moon' against 'Run'
			</div>
		</li>
		<li>
			Preferabely: tangible, non-absract i.e. concrete &ndash; nouns.
			<div class='content-li-example'>
				e.g. 'Car' against 'Care'
			</div>
		</li>
		<li>
			Base, singular form of the word
			<div class='content-li-example'>
				e.g. 'Car' against 'Cars'
			</div>
		</li>
		<li>
			Popular
			<div class='content-li-example'>
				e.g. 'Car' against 'Tomahawk'
			</div>
		</li>
		<li>
			Simple pronounciation and spelling
			<div class='content-li-example'>
				e.g. 'Cat' against 'Penicillin'
			</div>
		</li>
		<li>
			Avoid words with spelling variantes<br>
			<div class='content-li-example'>
				e.g. 'Color' and 'Colour'
			</div>
		</li>
		<li>
			No compounded words
			<div class='content-li-example'>
				e.g. 'Volley-ball'
			</div>
		</li>
		<li>
			No immoral and objectionable words
			<div class='content-li-example'>
				e.g. 'Bomb' 'Dog' 'Pig'
			</div>
		</li>
		<li>
			No synonyms
			<div class='content-li-example'>
				e.g. 'Man' and 'Person'
			</div>
		</li>
		<li>
			Unique, distinct and no homophones
			<div class='content-li-example'>
				e.g. 'Apple' against 'Rose' and 'Rows'
			</div>
		</li>
	</ol>
	<div class='top-bottom-gap'>
		<div>
			<strong><a class='content-link' href='/wordlist.txt' target='_blank'>WordList.txt</a></strong>
			<span id='wordlist_version'>( v 1.0 )</span>
		</div>
		<div class='center' id='wordlist_search'>
			<span id='search-button_icon_wordlist'><span class='image'><?php echo file_get_contents('..\..\Resource\Search_wordList.svg'); ?></span></span>
			<input id='word_search_box' type='text' placeholder="search ( 'space' clears )">
			<span class='hide' id='search_input_clear'><span class='image'><?php echo file_get_contents('..\..\Resource\Cross.svg'); ?></span></span>
		</div>
	</div>
	<div id='wordlist-table'>
	<?php
		$arWord = file('../../File/WordList.txt', FILE_IGNORE_NEW_LINES);
		for($i = 0; $i < 1024; $i++) {
	?>
			<span>
	<?php
			if(sizeOf($arWord) > $i)
				echo $arWord[$i];
			else
				echo '_';
	?>
			</span>
	<?php
		}
	?>
	</div>
	<div class='top-bottom-gap'></div>
	<div>You are welcome to submit suggestions to improve this wordlist, below, under public domain.</div>
	<div class='indent-40'>
		<div class='fb-comments' data-href='https://wcodes.org/wordlist' data-numposts='50' order_by='reverse_time'></div>
	</div>
</div>
<?php require('..\HTML\Fragment\Component_bottom_nav.php') ?>