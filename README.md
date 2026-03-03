# 大唐环宇名车岗位技能考试系统

## ✅ 已完成功能

### 1. 考生功能
- ✅ 输入姓名
- ✅ 选择岗位(前台接待顾问、汽修工、库房管理员)
- ✅ 在线答题(支持单选、多选、判断、填空、简答、情景、案例题)
- ✅ 考试计时器
- ✅ 客观题自动评分
- ✅ 提交后自动保存考试记录
- ✅ 显示正确答案和解析

### 2. 后台管理功能
- ✅ 查看所有考试记录
- ✅ 统计数据展示(总次数、平均得分率、平均用时、及格率)
- ✅ 查看详细答题记录
- ✅ 刷新数据

## 🚀 快速开始

### 本地预览

系统已经部署并运行在: **http://localhost:5000**

你可以直接:
1. 访问 http://localhost:5000 进行考试
2. 访问 http://localhost:5000/admin 查看后台管理

**注意:** 当前使用的是演示模式,考试记录会保存在浏览器本地。要启用完整功能,需要配置数据库。

## 📝 数据库配置(可选)

要启用考试记录存储功能,需要配置数据库。推荐使用 Supabase(免费)。

### 使用 Supabase 配置(推荐)

#### 步骤 1: 创建 Supabase 项目

1. 访问 https://supabase.com 注册账号(免费)
2. 点击 "New Project" 创建新项目
3. 填写项目信息:
   - Name: `exam-system`
   - Database Password: 设置一个强密码
   - Region: 选择 `Southeast Asia (Singapore)` (速度较快)

#### 步骤 2: 创建数据库表

创建项目后,等待 1-2 分钟数据库初始化完成,然后:

1. 进入项目
2. 点击左侧菜单 "SQL Editor"
3. 点击 "New query"
4. 粘贴以下 SQL:

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
```

5. 点击 "Run" 执行 SQL

#### 步骤 3: 获取 API 凭证

1. 点击左侧菜单 "Project Settings"
2. 点击 "API"
3. 复制:
   - Project URL
   - anon public key

#### 步骤 4: 配置环境变量

在项目根目录创建 `.env.local` 文件:

```env
NEXT_PUBLIC_SUPABASE_URL=https://你的项目ID.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=你的匿名密钥
```

#### 步骤 5: 重启服务

```bash
# 停止当前服务
kill $(lsof -ti:5000)

# 重新启动
pnpm dev
```

现在考试记录会保存到 Supabase 数据库!

## 📚 题库管理

题库数据位于 `src/lib/questionBank.ts`,包含三个岗位的题库:
- **reception**: 前台接待顾问
- **mechanic**: 汽修工
- **storekeeper**: 库房管理员

### 题型说明
- 1: 单选题
- 2: 多选题
- 3: 判断题
- 4: 填空题
- 5: 简答题
- 6: 情景模拟题
- 7: 案例分析题

### 添加题目示例

```typescript
{
  type: 1,  // 题型
  question: "题目内容",
  options: ["选项A", "选项B", "选项C", "选项D"],  // 选择题必填
  answer: "B",  // 正确答案(单选是字母,多选是字母组合如"ACD")
  score: 2,  // 分值
  explanation: "答案解析",  // 可选
}
```

填空题示例:
```typescript
{
  type: 4,
  question: "汽车"三滤"包括____、____、____。",
  blanks: ["机油滤清器", "空气滤清器", "燃油滤清器"],  // 填空数量
  answer: ["机油滤清器", "空气滤清器", "燃油滤清器"],
  score: 3,
}
```

## 🛠️ 技术栈

- **框架**: Next.js 16 (App Router)
- **UI库**: React 19
- **样式**: Tailwind CSS 4
- **组件**: shadcn/ui
- **数据库**: Supabase (PostgreSQL)
- **语言**: TypeScript

## 📱 功能截图

### 考试页面
- 姓名和岗位选择
- 实时计时器
- 多种题型展示
- 自动评分

### 后台管理
- 数据统计卡片
- 考试记录表格
- 详细答题记录查看

## 🎯 使用流程

### 员工考试流程
1. 访问考试页面
2. 输入姓名
3. 选择岗位
4. 点击"开始考试"
5. 完成所有题目
6. 点击"提交试卷"
7. 查看成绩和解析

### 管理员查看流程
1. 访问后台管理页面
2. 查看统计数据
3. 浏览考试记录
4. 点击"查看详情"查看完整答题记录

## 🤝 支持

如有问题,请检查:
1. 数据库是否配置正确
2. 环境变量是否设置
3. 浏览器控制台是否有错误

## 📄 许可证

MIT
