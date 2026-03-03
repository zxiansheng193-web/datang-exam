# 大唐环宇名车岗位技能考试系统

## 🎯 项目简介

这是一套完整的岗位技能考试系统,包含 **Web 端**和**微信小程序端**,方便汽修厂员工在不同场景下参加考试。

## 📦 项目结构

```
.
├── src/                    # Next.js Web 端源码
├── miniprogram/           # 微信小程序端源码
├── drizzle/              # 数据库迁移文件
├── supabase_init.sql     # 数据库初始化脚本
└── README.md             # 本文档
```

## 🌟 功能特性

### 通用功能
- ✅ 三个岗位考试(前台接待顾问、汽修工、库房管理员)
- ✅ 7种题型支持(单选、多选、判断、填空、简答、情景、案例)
- ✅ 客观题自动评分
- ✅ 显示正确答案和解析
- ✅ 考试记录保存
- ✅ 后台管理查看统计

### Web 端特性
- ✅ 响应式设计,支持电脑和手机浏览器
- ✅ 现代化 UI,使用 shadcn/ui 组件库
- ✅ 实时更新,热重载

### 小程序端特性
- ✅ 便携式考试,随时随地
- ✅ 移动端优化
- ✅ TabBar 导航

## 🚀 快速开始

### 前置要求

1. Node.js 18+
2. pnpm 包管理器
3. Supabase 账号(免费)

### 数据库配置

#### 步骤 1: 创建 Supabase 项目

1. 访问 https://supabase.com 注册账号
2. 创建新项目
3. 等待数据库初始化完成

#### 步骤 2: 执行数据库脚本

在 Supabase 的 SQL Editor 中执行:

```sql
-- 创建考试记录表
CREATE TABLE IF NOT EXISTS exam_records (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  score INTEGER NOT NULL,
  total_score INTEGER NOT NULL,
  duration INTEGER NOT NULL,
  submitted_at TIMESTAMP DEFAULT NOW() NOT NULL,
  answers TEXT NOT NULL
);

-- 创建索引
CREATE INDEX IF NOT EXISTS idx_exam_records_submitted_at ON exam_records(submitted_at DESC);
CREATE INDEX IF NOT EXISTS idx_exam_records_role ON exam_records(role);
CREATE INDEX IF NOT EXISTS idx_exam_records_name ON exam_records(name);
```

#### 步骤 3: 获取 API 凭证

1. 在 Supabase 项目设置 -> API
2. 复制:
   - Project URL
   - anon public key

#### 步骤 4: 配置环境变量

在项目根目录创建 `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://你的项目ID.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=你的匿名密钥
```

### Web 端部署

#### 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 访问 http://localhost:5000
```

#### 生产部署

```bash
# 构建生产版本
pnpm build

# 启动生产环境
pnpm start
```

详细说明请查看主项目目录的 README。

### 小程序端部署

详细说明请查看 `miniprogram/README.md`,主要步骤:

1. 下载微信开发者工具
2. 导入 `miniprogram` 目录
3. 配置后端 API 地址
4. 配置 AppID
5. 上传并发布

## 📱 访问地址

| 平台 | 开发地址 | 生产地址 |
|------|---------|---------|
| Web 端 | http://localhost:5000 | https://your-domain.com |
| 小程序端 | 微信开发者工具 | 微信搜索 |

## 📊 数据统计示例

管理后台提供以下统计:

- **总考试次数**: 历史总考试人次
- **平均得分率**: 所有考试的平均得分百分比
- **平均用时**: 平均考试用时
- **及格率**: 得分≥60%的比例

## 📚 题库管理

题库位于:
- Web 端: `src/lib/questionBank.ts`
- 小程序端: `miniprogram/data/questionBank.js`

**重要**: 修改题库时,需要同时更新两个文件,保持同步。

### 添加题目格式

```typescript
{
  type: 1,  // 1-单选, 2-多选, 3-判断, 4-填空, 5-简答, 6-情景, 7-案例
  question: "题目内容",
  options: ["选项A", "选项B", "选项C", "选项D"],  // 选择题必填
  answer: "B",  // 正确答案
  score: 2,  // 分值
  explanation: "答案解析"  // 可选
}
```

## 🔧 技术栈

### Web 端
- **框架**: Next.js 16 (App Router)
- **UI**: React 19 + shadcn/ui
- **样式**: Tailwind CSS 4
- **数据库**: Supabase (PostgreSQL)
- **语言**: TypeScript

### 小程序端
- **框架**: 微信小程序原生
- **后端**: 复用 Web 端 API
- **基础库**: 2.19.4+

## 📦 部署架构

```
┌─────────────┐
│  微信小程序  │
└──────┬──────┘
       │ HTTPS
       ↓
┌─────────────┐
│  Next.js    │
│  API 服务器  │
└──────┬──────┘
       │
       ↓
┌─────────────┐
│  Supabase   │
│  PostgreSQL │
└─────────────┘
```

## 🔄 数据流程

1. 员工在 Web 或小程序参加考试
2. 提交试卷时,自动评分客观题
3. 考试记录通过 API 保存到 Supabase
4. 管理员在后台查看统计和详细记录

## 🛡️ 安全说明

1. 小程序发布时必须使用 HTTPS
2. 建议在生产环境启用 Supabase Row Level Security (RLS)
3. 定期备份数据库

## 📄 许可证

MIT License

## 🤝 技术支持

如有问题,请检查:
1. 数据库是否正确配置
2. 后端服务是否正常运行
3. 环境变量是否正确设置
4. 浏览器/小程序控制台是否有错误

---

**大唐环宇名车** | 您身边的汽车养护专家
