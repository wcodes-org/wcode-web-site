Get-Content 'Wordlist - Graylist.tsv' | Select-Object -Skip 1 > Wordlist-gray.tsv
cat 'Wordlist - Whitelist.tsv', Wordlist-gray.tsv > Wordlist.tsv
rm Wordlist-gray.tsv
(Get-Content Wordlist.tsv -Raw) -replace "(?m)^\s*`r`n",'' | Set-Content Wordlist.tsv
(Get-Content 'Wordlist - Blacklist.tsv' -Raw) -replace "(?m)^\s*`r`n",'' | Set-Content Wordlist-black.tsv
rm 'Wordlist - Graylist.tsv'
rm 'Wordlist - Whitelist.tsv'
rm 'Wordlist - Blacklist.tsv'
