# 部署问题排查指南

## 🚨 常见部署错误及解决方案

---

## 1. 构建失败（Build Failed）

### 错误信息示例
```
Error: Build failed with exit code 1
Error: Module not found: Can't resolve '@/...'
```

### 解决方案

#### 1.1 检查 package.json
```bash
# 确保包含以下脚本
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start"
}
```

#### 1.2 清理缓存
```bash
rm -rf .next
rm -rf node_modules
pnpm install
pnpm build
```

#### 1.3 检查 TypeScript 配置
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

---

## 2. 依赖安装失败

### 错误信息示例
```
Error: Cannot find module 'next'
Error: Command failed: pnpm install
```

### 解决方案

#### 2.1 确保使用正确的包管理器
```bash
# 在部署平台设置中指定
Package Manager: pnpm
```

#### 2.2 检查 lockfile
```bash
# 确保 pnpm-lock.yaml 存在
ls -la pnpm-lock.yaml
```

#### 2.3 Vercel 部署配置
在项目根目录创建或更新 `vercel.json`：
```json
{
  "buildCommand": "pnpm install && pnpm build",
  "devCommand": "pnpm dev",
  "installCommand": "pnpm install",
  "framework": "nextjs",
  "nodeVersion": "18"
}
```

---

## 3. TypeScript 错误

### 错误信息示例
```
Error: Type 'string' is not assignable to type 'number'
```

### 解决方案

#### 3.1 本地类型检查
```bash
npx tsc --noEmit
```

#### 3.2 修复类型错误
根据错误信息修复代码中的类型问题

#### 3.3 临时禁用严格检查（不推荐）
在 `tsconfig.json` 中：
```json
{
  "compilerOptions": {
    "strict": false
  }
}
```

---

## 4. 运行时错误

### 错误信息示例
```
Error: ReferenceError: process is not defined
Error: window is not defined
```

### 解决方案

#### 4.1 检查服务端渲染问题
```typescript
// ❌ 错误：在服务端使用 window
const width = window.innerWidth

// ✅ 正确：使用 useEffect
import { useEffect, useState } from 'react'

const [width, setWidth] = useState(0)

useEffect(() => {
  setWidth(window.innerWidth)
}, [])
```

#### 4.2 检查 API 路由
确保 API 路由在 `src/app/api/` 目录下

---

## 5. 环境变量问题

### 错误信息示例
```
Error: Missing required environment variable
```

### 解决方案

#### 5.1 检查 .env 文件
```bash
# 确保环境变量文件存在
ls -la .env.local
```

#### 5.2 Vercel 环境变量配置
1. 进入 Vercel 项目设置
2. Settings → Environment Variables
3. 添加所有必需的环境变量

---

## 6. 端口问题

### 错误信息示例
```
Error: Port 3000 is already in use
```

### 解决方案

#### 6.1 使用动态端口
```typescript
// next.config.ts
const nextConfig = {
  // Next.js 会自动分配端口
}

export default nextConfig
```

#### 6.2 Vercel 配置
```json
{
  "functions": {
    "src/app/api/**/*.ts": {
      "maxDuration": 30
    }
  }
}
```

---

## 🚀 快速诊断步骤

### 1. 本地测试
```bash
# 1. 清理环境
rm -rf .next node_modules
pnpm install

# 2. 构建测试
pnpm build

# 3. 启动测试
pnpm start
```

### 2. 类型检查
```bash
npx tsc --noEmit
```

### 3. 检查依赖
```bash
pnpm list --depth=0
```

---

## 📊 各平台配置检查清单

### Vercel
- [ ] 使用 pnpm 作为包管理器
- [ ] Node.js 版本设置为 18 或 20
- [ ] 环境变量已配置
- [ ] 构建命令：`pnpm build`
- [ ] 启动命令：`pnpm start`

### Netlify
- [ ] Build command: `pnpm install && pnpm build`
- [ ] Publish directory: `.next`
- [ ] Node.js 版本设置

### Cloudflare Pages
- [ ] Build command: `pnpm install && pnpm build`
- [ ] Output directory: `.next`
- [ ] Node.js 兼容性设置

---

## 🆘 紧急修复方案

### 如果构建持续失败

1. **创建简化版本 vercel.json**
```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs"
}
```

2. **临时切换到 npm**（如果 pnpm 有问题）
```bash
# 生成 package-lock.json
rm -rf node_modules pnpm-lock.yaml
npm install
npm run build
```

3. **禁用某些功能**
```typescript
// next.config.ts
const nextConfig = {
  // 禁用图片优化（如果报错）
  images: {
    unoptimized: true
  }
}
```

---

## 📞 获取帮助

如果以上方案都无法解决，请提供：

1. **完整的错误日志**
2. **部署平台名称**
3. **Node.js 版本**
4. **package.json 内容**
5. **next.config.ts 内容**

---

## ✅ 验证部署成功的标志

- ✅ 构建日志显示 "Build succeeded"
- ✅ 部署日志显示 "Deployment succeeded"
- ✅ 可以访问网站
- ✅ 页面正常显示
- ✅ 没有控制台错误
