. ".\Tools\Fn.ps1"

$wList = "WordList.txt"
$wListRoot = "..\"

if (Check $wListRoot $wList "" $wList)
{
    $wListFile = Get-Content $wListRoot$wList
    [System.IO.File]::WriteAllLines("$wList", $wListFile)
}
