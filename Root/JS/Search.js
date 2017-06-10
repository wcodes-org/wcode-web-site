function execSearch(event) {
	var input = word_search_box.value;
	if(input.length == 0)
		classie.add(search_input_clear, 'hide');
	else if(input[input.length-1] == ' ') {
		word_search_box.value = input.substring(0, input.length-1);
		word_search_box.select();
		return;
	}
	else
		classie.remove(search_input_clear, 'hide');
	changeWordList(wordListArray, input);
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

function changeWordList(list, val) {
	var autoCompleteResult = matchWord(list, val);
	var result = document.getElementById('wordlist-table');
	result.innerText = '';
	for(var i = 0; i < autoCompleteResult.length; i++) {
		var option = document.createElement('span');
		option.innerText = autoCompleteResult[i];
		result.appendChild(option);
	}
}
