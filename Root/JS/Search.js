var MAX_WORD_LENGTH = 10;
var bSearch_selected = false;

function execSearch(event) {
	var input = word_search_box.value.toLowerCase();
	if(input.length == 0) {
		document.getElementById('wordlist-message').innerText = '';
		document.getElementById('search_input_clear').classList.add('hide');
		clearWordListSearch();
	}
	else if(input[input.length-1] == ' ') {
		if(!bSearch_selected) {
			word_search_box.value = input.substring(0, input.length-1);
			word_search_box.select();
			bSearch_selected = true;
		}
		else {
			bSearch_selected = false;
			clearWordListSearch();
		}
		return;
	}
	else if(input.length > 10) {
		document.getElementById('wordlist-table-white').innerText = '';
		document.getElementById('wordlist-table-black').innerText = '';
		document.getElementById('wordlist-message').innerText = "Word's length exceeds the maximum limit of " + MAX_WORD_LENGTH + " characters";
	}
	else {
		document.getElementById('wordlist-message').innerText = '';
		document.getElementById('search_input_clear').classList.remove('hide');
		bSearch_selected = false;
		setWordList(input, true);
		document.getElementById('wordlist-table-separator').classList.remove('hide');
		setWordList(input, false);
	}
};

function matchWord(list, input) {
	var reg = new RegExp(input.split('').join('\\w*').replace(/\W/, ''), 'i');
	return list.filter(function(word) {
		if (word.match(reg)) {
			if(word.startsWith(input))
				return word;
		}
	});
}
