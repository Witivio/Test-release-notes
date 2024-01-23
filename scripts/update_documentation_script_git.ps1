param (
    [Parameter(Mandatory=$true)]
    [string]$FilePath,
    [Parameter(Mandatory=$true)]
    [object]$JsonData
)

$choices = $JsonData.data.choices
$markdownData = $choices[0].text

$title = "## What's new on GPTPro ?"

Write-Output "Debug :  $markdownData"

$contentToWrite = "$title`r`n$markdownData"

Write-Output "Debug2 :  $contentToWrite"

$contentToWrite | Set-Content -Path $FilePath -Force

Write-Output "Markdown data has been written to $FilePath"
