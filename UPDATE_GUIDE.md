# 系统更新说明

## 已完成的功能

### 1. 打印成绩单优化 ✅
打印成绩单现在只显示以下必要信息：
- 姓名
- 岗位
- 考试日期
- 考试时间
- 考试用时
- 工资提升金额

其他信息（如详细题目、答案等）不会打印。

### 2. 后台密码验证 ✅
- 访问后台需要输入6位数密码
- 默认密码：`888888`
- 登录页面：`/admin/login`
- 会话有效期：24小时
- 支持退出登录功能

**修改密码位置：**
- 前端：`src/app/admin/login/page.tsx` 中的 `ADMIN_PASSWORD` 常量
- 如需修改密码，请同时更新这两个文件

### 3. 数据库配置 ✅
已提供完整的配置说明和示例文件：
- 配置文档：`SUPABASE_SETUP.md`
- 配置模板：`.env.local.example`

## 配置数据库的步骤

### 方法1：使用 Supabase（推荐）

1. **注册 Supabase 账号**
   - 访问 https://supabase.com
   - 注册或登录账号

2. **创建项目**
   - 点击 "New Project"
   - 项目名称：`tangyu-exam`
   - 数据库密码：自定义（请记住）
   - 选择区域：推荐选择离你最近的区域
   - 等待创建完成（约2分钟）

3. **获取配置信息**
   - 进入项目仪表板
   - 点击左侧菜单 "Settings" → "API"
   - 复制以下信息：
     - `Project URL`
     - `anon public` key

4. **配置到项目**
   ```bash
   # 复制配置模板
   cp .env.local.example .env.local

   # 编辑 .env.local 文件
   nano .env.local
   # 或者使用其他编辑器
   ```

   填写：
   ```
   COZE_SUPABASE_URL=https://你的项目ID.supabase.co
   COZE_SUPABASE_ANON_KEY=你的密钥
   ```

5. **重启服务**
   ```bash
   # 如果服务正在运行，先停止
   pkill -f next-server

   # 启动开发服务
   coze dev
   ```

6. **数据库自动同步**
   - 系统会自动创建所需的数据表
   - 首次运行时会执行 `coze-coding-ai db upgrade`

### 方法2：使用现有 Supabase 项目

如果你已有 Supabase 项目，直接将配置信息填入 `.env.local` 文件即可。

## 数据库表结构

系统会自动创建以下表：

### exam_records（考试记录表）
| 字段 | 类型 | 说明 |
|------|------|------|
| id | serial | 主键，自增 |
| name | text | 姓名 |
| role | text | 岗位（reception/mechanic/storekeeper） |
| score | integer | 客观题得分 |
| subjectiveScore | integer | 主观题得分 |
| totalScore | integer | 客观题总分 |
| totalSubjectiveScore | integer | 主观题总分 |
| duration | integer | 考试用时（秒） |
| submittedAt | timestamp | 提交时间 |
| answers | text | 答案（JSON格式） |
| needsGrading | integer | 是否需要人工评分（0=否，1=是） |
| gradedAt | timestamp | 评分时间 |

### health_check（健康检查表）
系统自动创建，用于健康检查。

## 验证配置

### 1. 检查服务状态
```bash
curl -I http://localhost:5000
```

应返回 `HTTP/1.1 200 OK`

### 2. 访问应用
- 前端页面：http://localhost:5000
- 后台登录：http://localhost:5000/admin/login
- 后台管理：http://localhost:5000/admin

### 3. 测试数据库连接
1. 进入考试页面，填写姓名和岗位
2. 开始考试并提交
3. 检查是否有错误提示
4. 进入后台管理系统（密码：888888）
5. 查看是否有考试记录

## 常见问题

### Q: 如何修改后台密码？
A: 编辑以下两个文件，将 `ADMIN_PASSWORD` 的值改为你的密码：
- `src/app/admin/login/page.tsx`
- 确保密码为6位数字

### Q: 数据库连接失败怎么办？
A: 检查以下事项：
1. `.env.local` 文件是否配置正确
2. Supabase 项目是否创建成功
3. URL 和密钥是否正确复制
4. Supabase 项目是否已暂停（免费项目长期不使用会暂停）

### Q: 打印成绩单时打印了多余的元素？
A: 确保打印时使用浏览器的"打印"功能（Ctrl+P），不要使用"另存为PDF"等其他方式。

### Q: 如何清除浏览器缓存？
A:
1. Chrome/Edge: Ctrl+Shift+Delete
2. Firefox: Ctrl+Shift+Delete
3. 选择"缓存的图片和文件"
4. 点击"清除数据"

## 技术栈

- Next.js 16 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS 4
- shadcn/ui
- Supabase (PostgreSQL)

## 支持与反馈

如遇到问题，请检查：
1. 浏览器控制台（F12）是否有错误
2. 服务器日志：`/app/work/logs/bypass/app.log`
3. 数据库连接是否正常

祝使用愉快！🎉
