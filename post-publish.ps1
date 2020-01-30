. crc32.ps1

$crc = get-crc32 ./public/script.js
mv ./public/script.js ./public/script-$crc.js
$file = ".\public\index.html"
$text = (Get-Content -Path $file -ReadCount 0) -join "`n"
$text -replace '<script src="/script', ('<script src="/script-'+$crc) | Set-Content -Path $file
