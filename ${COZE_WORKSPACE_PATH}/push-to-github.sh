#!/bin/bash
# GitHub 推送脚本

echo "========================================="
echo "  大唐环宇考试系统 - GitHub 推送脚本"
echo "========================================="
echo ""

REPO_URL="https://github.com/zxiansheng193-web/datang-exam.git"

echo "📦 正在准备推送到 GitHub..."
echo "仓库地址: $REPO_URL"
echo ""

# 检查是否需要认证
echo "⚠️  需要以下认证信息："
echo "   用户名: zxiansheng193-web"
echo "   密码: 请使用 GitHub Personal Access Token"
echo ""
echo "📝 如何创建 Token："
echo "   1. 访问 https://github.com/settings/tokens"
echo "   2. 点击 'Generate new token' → 'Generate new token (classic)'"
echo "   3. 勾选 'repo' 权限"
echo "   4. 复制生成的 token"
echo ""

# 推送到 GitHub
git push github main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ 推送成功！"
    echo ""
    echo "📥 下载链接："
    echo "   https://github.com/zxiansheng193-web/datang-exam/archive/refs/heads/main.zip"
    echo ""
    echo "🌐 仓库地址："
    echo "   https://github.com/zxiansheng193-web/datang-exam"
else
    echo ""
    echo "❌ 推送失败"
    echo ""
    echo "💡 可能的原因："
    echo "   1. 用户名或 token 错误"
    echo "   2. Token 权限不足（需要 repo 权限）"
    echo "   3. 网络连接问题"
    echo ""
    echo "请检查后重试"
fi
