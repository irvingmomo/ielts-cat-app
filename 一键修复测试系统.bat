@echo off
echo ============================================
echo 🐱 雅思猫测试系统一键修复工具
echo ============================================
echo.
echo 正在修复测试系统问题...
echo.

REM 1. 备份原文件
echo [1/4] 备份原文件...
if exist "app\index.html" (
    copy "app\index.html" "app\index_备份_%date:~0,4%%date:~5,2%%date:~8,2%_%time:~0,2%%time:~3,2%.html"
    echo ✅ 原文件已备份
) else (
    echo ⚠️ 原文件不存在，跳过备份
)

REM 2. 创建绝对能工作的版本
echo [2/4] 创建绝对能工作的版本...
copy "app\绝对能工作.html" "app\index_fixed.html"
echo ✅ 创建修复版完成

REM 3. 创建测试说明
echo [3/4] 创建测试说明文件...
echo # 测试系统修复说明 > "app\修复说明.md"
echo. >> "app\修复说明.md"
echo **修复时间**: %date% %time% >> "app\修复说明.md"
echo **修复内容**: 创建绝对能工作的测试版本 >> "app\修复说明.md"
echo. >> "app\修复说明.md"
echo ## 可用文件: >> "app\修复说明.md"
echo 1. **index_fixed.html** - 绝对能工作的修复版 >> "app\修复说明.md"
echo 2. **绝对能工作.html** - 原始修复文件 >> "app\修复说明.md"
echo 3. **index_备份_*.html** - 原文件备份 >> "app\修复说明.md"
echo. >> "app\修复说明.md"
echo ## 使用步骤: >> "app\修复说明.md"
echo 1. 打开 **index_fixed.html** >> "app\修复说明.md"
echo 2. 点击"🚀 点击这里开始测试"按钮 >> "app\修复说明.md"
echo 3. 确认测试功能正常 >> "app\修复说明.md"
echo ✅ 测试说明文件已创建

REM 4. 打开修复版
echo [4/4] 打开修复版文件...
start "" "app\index_fixed.html"
echo ✅ 修复版已打开

echo.
echo ============================================
echo 🎉 修复完成！
echo ============================================
echo.
echo **已创建的文件：**
echo 1. app\index_fixed.html - 修复版测试系统
echo 2. app\修复说明.md - 使用说明
echo 3. app\index_备份_*.html - 原文件备份
echo.
echo **下一步操作：**
echo 1. 测试修复版是否正常工作
echo 2. 如果修复版工作，可以替换原文件
echo 3. 如果仍有问题，查看浏览器控制台错误
echo.
echo 按任意键退出...
pause > nul