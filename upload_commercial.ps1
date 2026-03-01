# IELTS Cat 商业化部署上传脚本
# 将完整的9步商业化系统上传到GitHub

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "IELTS Cat 商业化部署上传脚本" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan

# 检查Git是否安装
Write-Host "`n[1/8] 检查Git安装状态..." -ForegroundColor Green
try {
    $gitVersion = git --version
    Write-Host "✓ Git已安装: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Git未安装，请先安装Git: https://git-scm.com/" -ForegroundColor Red
    exit 1
}

# 设置变量
$repoUrl = "https://github.com/irvingmomo/ielts-cat-app.git"
$deployPath = "C:\Users\11\ielts-cat-simple\deploy"
$tempClonePath = "C:\Users\11\ielts-cat-clone"

# 清理临时目录
Write-Host "`n[2/8] 清理临时目录..." -ForegroundColor Green
if (Test-Path $tempClonePath) {
    Remove-Item -Path $tempClonePath -Recurse -Force
    Write-Host "✓ 清理旧临时目录" -ForegroundColor Green
}

# 克隆仓库
Write-Host "`n[3/8] 克隆GitHub仓库..." -ForegroundColor Green
try {
    git clone $repoUrl $tempClonePath
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✓ 仓库克隆成功" -ForegroundColor Green
    } else {
        Write-Host "✗ 仓库克隆失败，请检查仓库URL和权限" -ForegroundColor Red
        exit 1
    }
} catch {
    Write-Host "✗ 克隆失败: $_" -ForegroundColor Red
    exit 1
}

# 备份现有文件（如果有）
Write-Host "`n[4/8] 备份现有文件..." -ForegroundColor Green
$backupPath = "$tempClonePath\backup_$(Get-Date -Format 'yyyyMMdd_HHmmss')"
if (Test-Path "$tempClonePath\*") {
    New-Item -ItemType Directory -Path $backupPath -Force | Out-Null
    Copy-Item -Path "$tempClonePath\*" -Destination $backupPath -Recurse -Force
    Write-Host "✓ 现有文件已备份到: $backupPath" -ForegroundColor Green
}

# 清空仓库（保留.git目录）
Write-Host "`n[5/8] 清空仓库准备上传..." -ForegroundColor Green
Get-ChildItem -Path $tempClonePath -Exclude ".git" | Remove-Item -Recurse -Force
Write-Host "✓ 仓库已清空" -ForegroundColor Green

# 复制部署文件
Write-Host "`n[6/8] 复制部署文件..." -ForegroundColor Green
Copy-Item -Path "$deployPath\*" -Destination $tempClonePath -Recurse -Force
Write-Host "✓ 部署文件复制完成" -ForegroundColor Green

# 显示文件统计
Write-Host "`n部署文件统计:" -ForegroundColor Cyan
$fileCount = (Get-ChildItem -Path $tempClonePath -Recurse -File).Count
$folderCount = (Get-ChildItem -Path $tempClonePath -Recurse -Directory).Count
$totalSize = [math]::Round(((Get-ChildItem -Path $tempClonePath -Recurse -File | Measure-Object -Property Length -Sum).Sum / 1KB), 2)
Write-Host "  文件数量: $fileCount" -ForegroundColor White
Write-Host "  文件夹数量: $folderCount" -ForegroundColor White
Write-Host "  总大小: $totalSize KB" -ForegroundColor White

# Git操作
Write-Host "`n[7/8] 执行Git操作..." -ForegroundColor Green
Set-Location $tempClonePath

# 检查状态
Write-Host "  Git状态检查..." -ForegroundColor Gray
git status

# 添加所有文件
Write-Host "  添加所有文件..." -ForegroundColor Gray
git add .

# 提交
Write-Host "  提交更改..." -ForegroundColor Gray
$commitMessage = "feat: 部署IELTS Cat商业化9步系统 - $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
git commit -m $commitMessage

# 推送
Write-Host "  推送到GitHub..." -ForegroundColor Gray
git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Git操作完成" -ForegroundColor Green
} else {
    Write-Host "✗ Git操作失败" -ForegroundColor Red
    exit 1
}

# 显示部署信息
Write-Host "`n[8/8] 部署完成！" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "部署信息:" -ForegroundColor Yellow
Write-Host "----------------------------------------" -ForegroundColor Gray
Write-Host "仓库URL: $repoUrl" -ForegroundColor White
Write-Host "GitHub Pages: https://irvingmomo.github.io/ielts-cat-app/" -ForegroundColor White
Write-Host "主应用: https://irvingmomo.github.io/ielts-cat-app/app/" -ForegroundColor White
Write-Host "落地页: https://irvingmomo.github.io/ielts-cat-app/landing/" -ForegroundColor White
Write-Host "仪表盘: https://irvingmomo.github.io/ielts-cat-app/app/dashboard/" -ForegroundColor White
Write-Host "博客: https://irvingmomo.github.io/ielts-cat-app/blog/" -ForegroundColor White
Write-Host "联盟营销: https://irvingmomo.github.io/ielts-cat-app/affiliate/" -ForegroundColor White
Write-Host "========================================" -ForegroundColor Cyan

Write-Host "`n下一步操作:" -ForegroundColor Green
Write-Host "1. 访问 https://github.com/irvingmomo/ielts-cat-app/settings/pages" -ForegroundColor White
Write-Host "2. 启用GitHub Pages（Source: Deploy from a branch）" -ForegroundColor White
Write-Host "3. 选择Branch: main, Folder: / (root)" -ForegroundColor White
Write-Host "4. 等待部署完成（约1-2分钟）" -ForegroundColor White
Write-Host "5. 访问 https://irvingmomo.github.io/ielts-cat-app/ 测试" -ForegroundColor White

Write-Host "`n清理临时文件..." -ForegroundColor Gray
Set-Location "C:\"
if (Test-Path $tempClonePath) {
    Remove-Item -Path $tempClonePath -Recurse -Force
    Write-Host "✓ 临时文件已清理" -ForegroundColor Green
}

Write-Host "`n✅ 上传脚本执行完成！" -ForegroundColor Green