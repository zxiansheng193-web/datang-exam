# 📥 代码导出指南

## 🎯 方式一：下载源码压缩包（最简单）

### 已打包的文件

项目源码已打包为：
```
datang-exam-source.tar.gz
```

### 包含内容

✅ 完整源代码
- src/ （所有源代码）
- public/ （静态资源）
- package.json
- pnpm-lock.yaml
- 配置文件（next.config.ts, tsconfig.json 等）
- 部署文档（DEPLOY.md, README.md）

### 如何下载

**方法 1：通过扣子平台下载**
1. 在扣子平台界面找到文件列表
2. 查找 `datang-exam-source.tar.gz` 文件
3. 点击下载按钮

**方法 2：通过命令行下载（如果有 SSH 访问权限）**
```bash
# 从远程服务器下载
scp user@server:/workspace/projects/datang-exam-source.tar.gz ./
```

---

## 📥 方式二：使用 Git 导出（推荐用于版本控制）

### 步骤 1：推送到 GitHub

```bash
# 进入项目目录
cd /workspace/projects

# 检查当前 Git 状态
git status

# 提交所有更改
git add .
git commit -m "完成大唐环宇考试系统开发"

# 推送到远程仓库（如果已配置）
git push origin main
```

### 步骤 2：在 GitHub 克隆或下载

**在 GitHub 网页端：**
1. 进入你的仓库页面
2. 点击绿色的 "Code" 按钮
3. 选择 "Download ZIP" 下载压缩包

**使用 Git 克隆：**
```bash
git clone https://github.com/你的用户名/仓库名.git
```

---

## 📥 方式三：手动复制关键文件

如果您只需要核心代码，可以复制以下文件：

### 核心源码文件

```
src/app/page.tsx          # 主页面
src/app/layout.tsx        # 布局
src/lib/questionBank.ts   # 题库
src/lib/questionBankFull.ts # 完整题库
```

### 配置文件

```
package.json              # 依赖配置
next.config.ts            # Next.js 配置
tsconfig.json             # TypeScript 配置
vercel.json               # Vercel 部署配置
```

### 文档

```
README.md                 # 项目说明
DEPLOY.md                 # 部署指南
```

---

## 📥 方式四：直接导出到本地开发环境

### 步骤 1：在本地创建项目

```bash
# 创建新项目目录
mkdir datang-exam
cd datang-exam

# 初始化 Git 仓库
git init
```

### 步骤 2：下载并解压

```bash
# 如果您能访问 datang-exam-source.tar.gz
tar -xzf datang-exam-source.tar.gz

# 或者从 GitHub 克隆
git clone https://github.com/你的用户名/仓库名.git .
```

### 步骤 3：安装依赖并运行

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 访问 http://localhost:3000
```

---

## 🎯 推荐导出流程

### 对于初学者
1. **下载压缩包** → 解压到本地
2. **安装依赖** → `pnpm install`
3. **运行测试** → `pnpm dev`

### 对于专业开发者
1. **推送到 GitHub** → 版本控制
2. **克隆到本地** → 开发环境
3. **配置 CI/CD** → 自动部署

---

## 📦 导出后的文件结构

```
datang-exam/
├── src/
│   ├── app/
│   │   ├── page.tsx          # 主页面
│   │   ├── layout.tsx        # 布局
│   │   └── api/              # API 接口
│   ├── lib/                  # 工具库
│   │   ├── questionBank.ts
│   │   └── questionBankFull.ts
│   └── components/           # 组件
├── public/                   # 静态资源
├── package.json             # 依赖配置
├── next.config.ts           # Next.js 配置
├── tsconfig.json            # TypeScript 配置
├── vercel.json              # 部署配置
├── README.md                # 项目说明
└── DEPLOY.md                # 部署指南
```

---

## 🚀 导出后立即做什么？

### 1. 本地测试
```bash
pnpm install
pnpm dev
# 访问 http://localhost:3000
```

### 2. 部署到公网
```bash
# 按照 DEPLOY.md 的步骤操作
```

### 3. 自定义配置
- 修改题库：编辑 `src/lib/questionBankFull.ts`
- 修改样式：编辑 `src/app/globals.css`
- 修改标题：编辑 `src/app/layout.tsx`

---

## ✅ 检查清单

导出前检查：
- [ ] 源码压缩包已下载
- [ ] package.json 包含所有依赖
- [ ] 配置文件完整
- [ ] 文档齐全

导出后检查：
- [ ] 本地能正常运行
- [ ] 所有功能正常
- [ ] 可以访问

---

## 📞 需要帮助？

如果导出过程中遇到问题：
1. 检查文件是否完整
2. 确认依赖已安装
3. 查看构建日志
4. 参考 DEPLOY.md 部署指南

---

## 🎉 准备就绪！

**压缩包位置**：`datang-exam-source.tar.gz`
**文件大小**：约 732KB
**包含内容**：完整源代码 + 配置 + 文档

**现在就可以下载并部署到任何平台！** 🚀
