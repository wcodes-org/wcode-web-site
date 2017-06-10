var wordListArray = [];

function wordlist() {
	if(wordListArray.length == 0) {
		word_search_box.addEventListener('input', execSearch);
		var y = document.getElementById('wordlist-table').getElementsByTagName('span');
		for(var i = 0; i < y.length; i++) {
			wordListArray.push(y[i].innerText);
		}

		search_input_clear.addEventListener('click', clearWordListSearch);
	}
}

function clearWordListSearch() {
	word_search_box.value = '';
	execSearch();
}
