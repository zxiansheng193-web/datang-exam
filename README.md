# 大唐环宇名车岗位技能考试系统

## 项目说明

这是一个基于 Next.js 的在线考试系统，支持前台接待顾问、机修工、库房管理员三个岗位的技能考试。

## 主要功能

- ✅ 在线考试（客观题自动评分，主观题人工评分）
- ✅ 60分钟倒计时，悬浮显示
- ✅ 成绩单打印（含签字栏）
- ✅ 随机抽取题目（确保每套试卷至少2道简答题+2道情景题）
- ✅ 三个岗位题库（每岗位17道简答题+17道情景题）

## 本地运行

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

访问：http://localhost:5000

## 部署到 Vercel（推荐，免费）

### 方式一：通过 Vercel CLI 部署

```bash
# 安装 Vercel CLI
pnpm add -g vercel

# 登录 Vercel
vercel login

# 部署项目
vercel

# 生产环境部署
vercel --prod
```

### 方式二：通过 GitHub 部署

1. 将代码推送到 GitHub 仓库
2. 访问 [vercel.com](https://vercel.com)
3. 点击 "Add New Project"
4. 导入您的 GitHub 仓库
5. Vercel 会自动构建和部署
6. 部署完成后，获得公网访问地址

### 部署配置

项目已包含 `vercel.json` 配置文件，自动配置：
- 框架：Next.js
- 构建命令：`pnpm build`
- 输出目录：`.next`
- 环境变量：自动处理

## 部署到其他平台

### Netlify

```bash
# 安装 Netlify CLI
pnpm add -g netlify-cli

# 登录
netlify login

# 构建并部署
pnpm build
netlify deploy --prod --dir=.next
```

### 阿里云/腾讯云/华为云

1. 购买云服务器
2. 安装 Node.js 环境
3. 克隆代码
4. 运行 `pnpm install && pnpm build`
5. 运行 `pnpm start` 启动生产服务
6. 使用 Nginx 反向代理

## 环境变量

项目目前不需要配置环境变量，开箱即用。

## 技术栈

- **框架**: Next.js 16 (App Router)
- **UI**: React 19
- **样式**: Tailwind CSS 4
- **组件**: shadcn/ui
- **语言**: TypeScript 5
- **包管理器**: pnpm

## 项目结构

```
.
├── src/
│   ├── app/           # Next.js App Router
│   │   ├── page.tsx   # 主页面（考试系统）
│   │   └── layout.tsx # 根布局
│   ├── components/    # UI 组件
│   │   └── ui/        # shadcn/ui 组件
│   └── lib/           # 工具库
│       ├── questionBank.ts       # 题库引用
│       └── questionBankFull.ts   # 完整题库
├── public/            # 静态资源
│   └── logo.png       # Logo 图片
└── scripts/           # 脚本
    ├── dev.sh         # 开发启动脚本
    └── build.sh       # 构建脚本
```

## 考试配置

- 考试时间：60分钟
- 题目数量：45题
- 评分方式：
  - 客观题（单选、多选、判断）：自动评分
  - 主观题（简答、情景）：人工评分
- 分值分配：
  - 客观题：94分
  - 主观题：6分
  - 总分：100分

## 岗位说明

### 前台接待顾问
- 单选题：35题（70分）
- 多选题：6题（24分）
- 判断题：5题（10分）
- 简答题：17题（每题3分，每次抽取2题）
- 情景题：17题（每题6分，每次抽取2题）

### 机修工
- 单选题：66题
- 多选题：16题
- 判断题：35题
- 简答题：17题（每题3分，每次抽取2题）
- 情景题：17题（每题6分，每次抽取2题）

### 库房管理员
- 单选题：35题（70分）
- 多选题：6题（24分）
- 判断题：5题（10分）
- 简答题：17题（每题3分，每次抽取2题）
- 情景题：17题（每题6分，每次抽取2题）

## 许可证

MIT License
