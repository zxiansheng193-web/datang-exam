# 大唐环宇名车岗位技能考试 - 微信小程序

## 📱 项目介绍

这是大唐环宇名车岗位技能考试系统的微信小程序版本,方便员工在手机上随时参加考试。

## ✨ 功能特性

### 考生端
- ✅ 姓名输入和岗位选择
- ✅ 支持三个岗位(前台接待顾问、汽修工、库房管理员)
- ✅ 在线答题(单选、多选、判断、填空、简答、情景、案例)
- ✅ 实时计时
- ✅ 客观题自动评分
- ✅ 显示正确答案和解析

### 管理端
- ✅ 查看所有考试记录
- ✅ 统计数据展示
- ✅ 查看详细答题记录

## 🚀 快速开始

### 前置要求

1. 微信开发者工具
2. 已配置的 Next.js 后端服务(参考主项目的 README.md)

### 本地开发

1. **下载微信开发者工具**
   - 访问 https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html
   - 下载并安装适合你系统的版本

2. **导入项目**
   - 打开微信开发者工具
   - 选择 "导入项目"
   - 项目目录选择 `miniprogram` 文件夹
   - AppID: 可以使用"测试号"或输入你自己的 AppID
   - 项目名称: 大唐环宇名车考试小程序

3. **配置后端地址**
   - 编辑 `miniprogram/app.js`
   - 修改 `apiBaseUrl` 为你的后端服务地址:
   ```javascript
   globalData: {
     // 开发环境使用本地地址
     apiBaseUrl: 'http://localhost:5000/api',

     // 生产环境使用线上地址
     // apiBaseUrl: 'https://your-domain.com/api'
   }
   ```

4. **启动开发服务器**
   - 确保后端服务已启动(在主项目目录运行 `pnpm dev`)
   - 微信开发者工具会自动加载小程序

5. **开发调试**
   - 在微信开发者工具中点击"编译"
   - 查看效果并调试

## 📦 项目结构

```
miniprogram/
├── pages/              # 页面
│   ├── index/         # 首页(考试入口)
│   ├── exam/          # 考试页面
│   ├── result/        # 结果页面
│   └── admin/         # 管理页面
│       └── detail/    # 详情页面
├── utils/             # 工具函数
│   └── util.js        # 通用工具
├── data/              # 数据
│   └── questionBank.js # 题库数据
├── images/            # 图片资源
├── app.js            # 小程序入口
├── app.json          # 小程序配置
├── app.wxss          # 全局样式
└── project.config.json # 项目配置
```

## ⚙️ 配置说明

### 1. AppID 配置

在 `miniprogram/project.config.json` 中设置 AppID:

```json
{
  "appid": "your_appid_here"
}
```

- 开发阶段: 使用测试号即可
- 发布阶段: 需要在微信公众平台注册小程序并获取 AppID

### 2. 后端 API 地址配置

在 `miniprogram/app.js` 中配置:

```javascript
globalData: {
  apiBaseUrl: 'https://your-domain.com/api'
}
```

### 3. 服务器域名配置(必须)

小程序要求使用 HTTPS 和已备案域名,需要在小程序管理后台配置:

1. 登录 https://mp.weixin.qq.com/
2. 进入"开发" -> "开发管理" -> "开发设置"
3. 在"服务器域名"中添加:
   - request 合法域名: `https://your-domain.com`

### 4. 图标配置

参考 `miniprogram/images/README.md` 添加 tabBar 图标。

## 🔧 开发注意事项

### 1. 本地开发调试

在开发阶段,需要关闭域名校验:

1. 在微信开发者工具中
2. 点击右上角"详情"
3. 勾选"不校验合法域名、web-view(业务域名)、TLS 版本以及 HTTPS 证书"

### 2. 网络请求

小程序只允许 HTTPS 请求,本地开发可以使用 HTTP,但发布时必须使用 HTTPS。

### 3. 数据库

小程序使用 Next.js 后端的 API 接口,不需要单独配置数据库。确保后端已正确配置 Supabase 或 PostgreSQL。

## 📝 题库管理

题库数据位于 `miniprogram/data/questionBank.js`,可以随时添加或修改题目。

### 添加题目示例

```javascript
{
  type: 1,  // 题型: 1-单选, 2-多选, 3-判断, 4-填空, 5-简答, 6-情景, 7-案例
  question: '题目内容',
  options: ['选项A', '选项B', '选项C', '选项D'],  // 选择题必填
  answer: 'B',  // 正确答案
  score: 2,  // 分值
  explanation: '答案解析'  // 可选
}
```

## 🚢 部署上线

### 1. 小程序发布

1. 在微信开发者工具中
2. 点击"上传"
3. 填写版本号和备注
4. 登录微信公众平台
5. 进入"版本管理" -> "开发版本"
6. 提交审核
7. 审核通过后发布

### 2. 后端部署

参考主项目的 README.md 部署 Next.js 后端服务。

## 📚 技术栈

- 微信小程序原生开发
- 微信小程序基础库 2.19.4+
- 后端 API: Next.js + Supabase

## ❓ 常见问题

### 1. 网络请求失败

**原因**: 域名未配置或未关闭域名校验

**解决方案**:
- 开发阶段: 关闭域名校验(详见上文)
- 生产环境: 在小程序管理后台配置服务器域名

### 2. 无法保存考试记录

**原因**: 后端服务未启动或地址配置错误

**解决方案**:
- 确保后端服务已启动
- 检查 `app.js` 中的 `apiBaseUrl` 配置

### 3. 图标不显示

**原因**: 未添加图标文件

**解决方案**:
- 参考 `miniprogram/images/README.md` 添加图标
- 或暂时注释掉 `app.json` 中的 tabBar 配置

## 🤝 支持

如有问题,请检查:
1. 后端服务是否正常运行
2. API 地址配置是否正确
3. 微信开发者工具控制台是否有错误信息

## 📄 许可证

MIT
