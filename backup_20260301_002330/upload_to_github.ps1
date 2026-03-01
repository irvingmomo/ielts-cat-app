# 雅思猫一键上传到GitHub脚本
# 使用方法：右键点击此文件 → "使用PowerShell运行"

Write-Host "🐱 雅思猫部署助手" -ForegroundColor Cyan
Write-Host "=" * 50

# 检查Git是否安装
try {
    git --version | Out-Null
    Write-Host "✅ Git已安装" -ForegroundColor Green
} catch {
    Write-Host "❌ Git未安装，请先安装Git" -ForegroundColor Red
    Write-Host "下载地址: https://git-scm.com/download/win" -ForegroundColor Yellow
    pause
    exit
}

# 设置变量
$repoName = "ielts-cat"
$githubUsername = Read-Host "请输入你的GitHub用户名 (例如: rainwalker1217)"
$deployPath = "C:\Users\11\ielts-cat-simple\deploy"

# 检查部署文件夹
if (-not (Test-Path $deployPath)) {
    Write-Host "❌ 找不到部署文件夹: $deployPath" -ForegroundColor Red
    pause
    exit
}

Write-Host "📁 找到部署文件夹，包含以下文件:" -ForegroundColor Cyan
Get-ChildItem $deployPath | ForEach-Object {
    Write-Host "   📄 $($_.Name)" -ForegroundColor Gray
}

# 询问是否继续
Write-Host ""
$confirm = Read-Host "是否继续上传到GitHub? (y/n)"
if ($confirm -ne 'y') {
    Write-Host "❌ 用户取消操作" -ForegroundColor Yellow
    pause
    exit
}

# 创建临时文件夹并初始化Git
$tempDir = "C:\Temp\ielts-cat-deploy"
if (Test-Path $tempDir) {
    Remove-Item -Path $tempDir -Recurse -Force
}
New-Item -ItemType Directory -Path $tempDir -Force | Out-Null

Write-Host "📦 复制文件到临时文件夹..." -ForegroundColor Cyan
Copy-Item "$deployPath\*" -Destination $tempDir -Recurse -Force

# 进入临时文件夹并初始化Git
Set-Location $tempDir

Write-Host "🔧 初始化Git仓库..." -ForegroundColor Cyan
git init
git add .
git commit -m "Initial commit: IELTS Cat web app"

# 设置远程仓库
$repoUrl = "https://github.com/$githubUsername/$repoName.git"
Write-Host "🌐 连接到远程仓库: $repoUrl" -ForegroundColor Cyan

git remote add origin $repoUrl
git branch -M main

# 推送代码
Write-Host "🚀 正在推送到GitHub..." -ForegroundColor Cyan
try {
    git push -u origin main
    Write-Host "✅ 上传成功!" -ForegroundColor Green
} catch {
    Write-Host "❌ 推送失败，可能原因:" -ForegroundColor Red
    Write-Host "   1. 仓库不存在" -ForegroundColor Yellow
    Write-Host "   2. 权限不足" -ForegroundColor Yellow
    Write-Host "   3. 网络问题" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "📋 请手动创建仓库:" -ForegroundColor Cyan
    Write-Host "   1. 访问 https://github.com/new" -ForegroundColor White
    Write-Host "   2. 仓库名称: $repoName" -ForegroundColor White
    Write-Host "   3. 设为公开 (Public)" -ForegroundColor White
    Write-Host "   4. 创建后重新运行此脚本" -ForegroundColor White
    pause
    exit
}

# 显示成功信息
Write-Host ""
Write-Host "🎉 部署完成!" -ForegroundColor Green
Write-Host "=" * 50
Write-Host "🌐 你的网站地址:" -ForegroundColor Cyan
Write-Host "   https://$githubUsername.github.io/$repoName/" -ForegroundColor White
Write-Host ""
Write-Host "📱 启用GitHub Pages步骤:" -ForegroundColor Cyan
Write-Host "   1. 访问 https://github.com/$githubUsername/$repoName/settings/pages" -ForegroundColor White
Write-Host "   2. Source选择: Deploy from a branch" -ForegroundColor White
Write-Host "   3. Branch选择: main, /(root)" -ForegroundColor White
Write-Host "   4. 点击 Save" -ForegroundColor White
Write-Host ""
Write-Host "⏳ 等待1-2分钟，然后访问上面的网址" -ForegroundColor Yellow

# 清理临时文件夹
Remove-Item -Path $tempDir -Recurse -Force

Write-Host ""
Write-Host "🐱 雅思猫已准备好为你服务!" -ForegroundColor Cyan
pause