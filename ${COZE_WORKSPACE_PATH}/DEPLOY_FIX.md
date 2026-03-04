# 🔧 部署修复指南

## 🚨 问题诊断

您的项目部署失败的根本原因：

### ❌ 核心问题
项目使用了自定义构建脚本，这些脚本依赖 `COZE_WORKSPACE_PATH` 环境变量，该变量在 Vercel/Netlify 等部署平台上不存在。

```json
// ❌ 当前配置（会导致部署失败）
"scripts": {
  "build": "bash ./scripts/build.sh",  // 依赖 COZE_WORKSPACE_PATH
  "dev": "bash ./scripts/dev.sh",
  "start": "bash ./scripts/start.sh"
}
```

---

## ✅ 快速修复方案

### 步骤 1：修改 package.json

将 `scripts` 部分替换为：

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "type-check": "tsc --noEmit"
}
```

### 步骤 2：简化 vercel.json

```json
{
  "version": 2,
  "buildCommand": "pnpm build",
  "devCommand": "pnpm dev",
  "installCommand": "pnpm install",
  "framework": "nextjs"
}
```

### 步骤 3：提交并推送

```bash
git add package.json vercel.json
git commit -m "fix: 修复部署配置，使用标准构建命令"
git push github main
```

### 步骤 4：重新部署

访问 Vercel，推送后会自动触发重新部署。

---

## 🧪 本地测试

在重新部署前，先本地测试：

```bash
# 1. 清理环境
rm -rf .next node_modules

# 2. 安装依赖
pnpm install

# 3. 构建测试
pnpm build

# 4. 启动测试
pnpm start
```

如果以上命令都成功，部署应该也能成功。

---

## ✅ 验证部署成功

部署成功后，您应该看到：

- ✅ Vercel 显示 "Deployed successfully"
- ✅ 可以访问网站
- ✅ 页面正常显示
- ✅ 没有控制台错误

---

## 🎉 完成！

修复完成后，您的项目应该可以在任何平台成功部署了！

**预计时间：** 5-10 分钟完成修复和部署
