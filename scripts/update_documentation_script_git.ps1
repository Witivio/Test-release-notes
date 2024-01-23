param (
    [Parameter(Mandatory=$true)]
    [string]$FilePath,
    [Parameter(Mandatory=$true)]
    [string]$MarkdownData
)

$title = "## What's new on GPTPro ?"

Write-Output "Debug :  $MarkdownData"

$contentToWrite = "$title`r`n$MarkdownData"

Write-Output "Debug2 :  $contentToWrite"

$contentToWrite | Set-Content -Path $FilePath -Force

Write-Output "Markdown data has been written to $FilePath"