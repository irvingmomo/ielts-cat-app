# IELTS Cat 简单上传脚本
Write-Host "开始上传IELTS Cat商业化系统到GitHub..." -ForegroundColor Yellow

# 设置路径
$deployPath = "C:\Users\11\ielts-cat-simple\deploy"
$tempPath = "C:\Users\11\ielts-cat-temp"

# 清理临时目录
if (Test-Path $tempPath) {
    Remove-Item -Path $tempPath -Recurse -Force
    Write-Host "清理旧临时目录" -ForegroundColor Green
}

# 克隆仓库
Write-Host "克隆GitHub仓库..." -ForegroundColor Green
git clone https://github.com/irvingmomo/ielts-cat-app.git $tempPath

if ($LASTEXITCODE -ne 0) {
    Write-Host "克隆失败，请检查仓库URL和权限" -ForegroundColor Red
    exit 1
}

# 进入临时目录
Set-Location $tempPath

# 备份现有文件
$backupDir = "backup_$(Get-Date -Format 'yyyyMMdd_HHmmss')"
New-Item -ItemType Directory -Name $backupDir -Force | Out-Null
Get-ChildItem -Exclude ".git", $backupDir | Move-Item -Destination $backupDir -Force
Write-Host "现有文件备份到: $backupDir" -ForegroundColor Green

# 复制新文件
Write-Host "复制部署文件..." -ForegroundColor Green
Copy-Item -Path "$deployPath\*" -Destination $tempPath -Recurse -Force

# 显示文件统计
$files = Get-ChildItem -Recurse -File
$folders = Get-ChildItem -Recurse -Directory
$size = [math]::Round(((Get-ChildItem -Recurse -File | Measure-Object -Property Length -Sum).Sum / 1KB), 2)
Write-Host "文件统计: $($files.Count)个文件, $($folders.Count)个文件夹, $size KB" -ForegroundColor Cyan

# Git操作
Write-Host "执行Git操作..." -ForegroundColor Green
git add .
git commit -m "feat: 部署IELTS Cat商业化系统 - $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "上传成功!" -ForegroundColor Green
} else {
    Write-Host "上传失败" -ForegroundColor Red
    exit 1
}

# 显示部署信息
Write-Host "`n部署完成!" -ForegroundColor Cyan
Write-Host "GitHub仓库: https://github.com/irvingmomo/ielts-cat-app" -ForegroundColor White
Write-Host "GitHub Pages: https://irvingmomo.github.io/ielts-cat-app/" -ForegroundColor White
Write-Host "主应用: https://irvingmomo.github.io/ielts-cat-app/app/" -ForegroundColor White
Write-Host "落地页: https://irvingmomo.github.io/ielts-cat-app/landing/" -ForegroundColor White

Write-Host "`n下一步: 启用GitHub Pages" -ForegroundColor Yellow
Write-Host "1. 访问 https://github.com/irvingmomo/ielts-cat-app/settings/pages" -ForegroundColor White
Write-Host "2. Source: Deploy from a branch" -ForegroundColor White
Write-Host "3. Branch: main, Folder: / (root)" -ForegroundColor White
Write-Host "4. 保存设置，等待部署完成" -ForegroundColor White

# 清理
Set-Location "C:\"
Remove-Item -Path $tempPath -Recurse -Force
Write-Host "临时文件已清理" -ForegroundColor Gray