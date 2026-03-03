# Supabase 配置说明

## 如何获取 Supabase URL 和密钥

1. 访问 [https://supabase.com](https://supabase.com)
2. 注册或登录账号
3. 创建新项目：
   - 点击 "New Project"
   - 填写项目名称：`tangyu-exam`
   - 选择数据库密码（请记住）
   - 选择区域：推荐选择离你最近的区域
   - 等待项目创建完成（约2分钟）

4. 获取配置信息：
   - 进入项目仪表板
   - 点击左侧菜单 "Settings" → "API"
   - 复制以下信息：
     - `Project URL` → 对应 `COZE_SUPABASE_URL`
     - `anon public` key → 对应 `COZE_SUPABASE_ANON_KEY`

5. 配置到 `.env.local` 文件：
   ```
   COZE_SUPABASE_URL=https://your-project-id.supabase.co
   COZE_SUPABASE_ANON_KEY=your-anon-key-here
   ```

## 数据库表结构

系统会自动创建以下表：

### exam_records 表
- `id`: 自增主键
- `name`: 姓名
- `role`: 岗位 (reception/mechanic/storekeeper)
- `score`: 客观题得分
- `subjectiveScore`: 主观题得分
- `totalScore`: 客观题总分
- `totalSubjectiveScore`: 主观题总分
- `duration`: 考试用时（秒）
- `submittedAt`: 提交时间
- `answers`: 答案（JSON格式）
- `needsGrading`: 是否需要人工评分
- `gradedAt`: 评分时间

### health_check 表
- 系统健康检查表（自动创建）

## 配置完成后

1. 重启开发服务器：
   ```bash
   coze dev
   ```

2. 系统会自动同步数据库结构（通过 `coze-coding-ai db upgrade` 命令）

3. 访问应用即可正常使用数据库功能
