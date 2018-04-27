function execSearch(event) {
	var input = word_search_box.value.toLowerCase();
	if(input.length == 0)
		classie.add(search_input_clear, 'hide');
	else if(input[input.length-1] == ' ') {
		word_search_box.value = input.substring(0, input.length-1);
		word_search_box.select();
		return;
	}
	else
		classie.remove(search_input_clear, 'hide');
	setWordList(input, true);
	document.getElementById('wordlist-table-separator').classList.remove('hide');
	setWordList(input, false);
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

