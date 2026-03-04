#!/bin/bash
# 快速推送到 GitHub 脚本

echo "========================================"
echo "  大唐环宇考试系统 - GitHub 推送脚本"
echo "========================================"
echo ""

# 检查是否已有 GitHub 仓库
if [ -z "$GITHUB_REPO" ]; then
    echo "❌ 请先设置 GITHUB_REPO 环境变量"
    echo "   示例: export GITHUB_REPO=https://github.com/你的用户名/datang-exam.git"
    exit 1
fi

echo "📦 正在提交代码..."
git add .
git commit -m "完成大唐环宇考试系统开发

- 支持3个岗位：前台接待顾问、机修工、库房管理员
- 60分钟倒计时功能
- 悬浮计时器
- 成绩单打印功能
- 完整题库：每岗位17道简答题+17道情景题
- 响应式设计，支持手机和电脑访问"

echo ""
echo "🚀 正在推送到 GitHub..."
git remote add origin $GITHUB_REPO 2>/dev/null || git remote set-url origin $GITHUB_REPO
git branch -M main
git push -u origin main

echo ""
echo "✅ 推送完成！"
echo ""
echo "📥 下载地址："
echo "   GitHub: $GITHUB_REPO"
echo "   直接下载: $(echo $GITHUB_REPO | sed 's/\.git$/\/archive\/refs\/heads\/main.zip/')"
echo ""
echo "🌐 部署到 Vercel:"
echo "   访问: https://vercel.com/new"
echo "   导入上述 GitHub 仓库即可"
