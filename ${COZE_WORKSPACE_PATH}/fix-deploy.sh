#!/bin/bash
# 自动部署修复脚本

set -e

echo "========================================="
echo "  大唐环宇考试系统 - 部署修复脚本"
echo "========================================="
echo ""

# 检查是否在项目根目录
if [ ! -f "package.json" ]; then
    echo "❌ 错误：请在项目根目录运行此脚本"
    exit 1
fi

echo "🔍 正在诊断问题..."
echo ""

# 检查 package.json
if grep -q "bash ./scripts/build.sh" package.json; then
    echo "✅ 检测到问题：使用了自定义构建脚本"
    echo ""
    echo "正在修复..."

    # 备份原文件
    echo "📦 备份原文件..."
    cp package.json package.json.backup
    cp vercel.json vercel.json.backup

    # 应用修复
    echo "🔧 应用修复..."
    cp package.json.fixed package.json
    cp vercel.json.fixed vercel.json

    echo ""
    echo "✅ 修复完成！"
    echo ""
    echo "📝 修改内容："
    echo "  - package.json: 使用标准构建命令"
    echo "  - vercel.json: 简化配置"
    echo ""
    echo "📦 备份文件："
    echo "  - package.json.backup"
    echo "  - vercel.json.backup"
    echo ""
    echo "🚀 下一步："
    echo "  1. 提交更改：git add package.json vercel.json"
    echo "  2. 推送到 GitHub：git push github main"
    echo "  3. 在 Vercel 重新部署"
    echo ""
    echo "📚 详细说明请查看：DEPLOY_FIX.md"
else
    echo "✅ 配置正常，无需修复"
fi

echo ""
echo "========================================="
