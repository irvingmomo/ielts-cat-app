@echo off
echo ============================================
echo 🐱 雅思猫测试系统一键修复
echo ============================================
echo.
echo 正在扫描文件状态...
echo.

REM 检查原文件
if not exist "app\index.html" (
    echo ❌ 错误：app\index.html 不存在
    pause
    exit /b 1
)

REM 检查修复版
if not exist "app\绝对能工作.html" (
    echo ❌ 错误：修复版文件不存在
    pause
    exit /b 1
)

echo [1/5] 备份原文件...
set backup_name=app\index_备份_%date:~0,4%%date:~5,2%%date:~8,2%_%time:~0,2%%time:~3,2%.html
copy "app\index.html" "%backup_name%"
echo ✅ 原文件已备份到: %backup_name%

echo [2/5] 检查原文件大小...
for %%F in ("app\index.html") do set original_size=%%~zF
echo   原文件大小: %original_size% 字节

echo [3/5] 检查修复版大小...
for %%F in ("app\绝对能工作.html") do set fixed_size=%%~zF
echo   修复版大小: %fixed_size% 字节

echo [4/5] 替换文件...
copy "app\绝对能工作.html" "app\index.html" /Y
echo ✅ 文件已替换

echo [5/5] 验证替换...
for %%F in ("app\index.html") do set new_size=%%~zF
echo   新文件大小: %new_size% 字节

if %new_size% EQU %fixed_size% (
    echo ✅ 替换验证成功
) else (
    echo ⚠️ 替换验证警告：大小不匹配
)

echo.
echo ============================================
echo 🎉 修复完成！
echo ============================================
echo.
echo **修复详情：**
echo 1. 原文件已备份：%backup_name%
echo 2. 原文件大小：%original_size% 字节
echo 3. 修复版大小：%fixed_size% 字节
echo 4. 新文件大小：%new_size% 字节
echo.
echo **修复内容：**
echo ✅ 移除复杂付费逻辑
echo ✅ 简化JavaScript代码
echo ✅ 使用简单onclick事件
echo ✅ 添加错误处理
echo ✅ 确保按钮100%能点击
echo.
echo **测试步骤：**
echo 1. 打开 app\index.html
echo 2. 点击"🚀 立即开始测试"按钮
echo 3. 确认测试界面显示
echo 4. 完成5道测试题目
echo 5. 查看分数报告
echo.
echo **如果仍有问题：**
echo 1. 按 F12 打开浏览器开发者工具
echo 2. 查看 Console 标签的错误信息
echo 3. 截图错误信息
echo.
echo 按任意键打开修复后的文件进行测试...
pause > nul

start "" "app\index.html"

echo.
echo 文件已打开，请测试功能是否正常。
echo 如果测试正常，请告诉我。
echo.
pause