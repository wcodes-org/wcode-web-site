Get-Content 'Wordlist - Whitelist.tsv' | Select-Object -Skip 1 > Wordlist-white.tsv
cat 'Wordlist - Graylist.tsv', Wordlist-white.tsv > Wordlist.tsv
rm Wordlist-white.tsv
(Get-Content Wordlist.tsv -Raw) -replace "(?m)^\s*`r`n",'' | Set-Content Wordlist.tsv
(Get-Content 'Wordlist - Blacklist.tsv' -Raw) -replace "(?m)^\s*`r`n",'' | Set-Content Wordlist-black.tsv
rm 'Wordlist - Graylist.tsv'
rm 'Wordlist - Whitelist.tsv'
rm 'Wordlist - Blacklist.tsv'
