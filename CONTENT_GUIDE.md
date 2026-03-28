# 个人主页运营维护指南

> 本文档详细说明了如何维护和更新 irrrricardo.github.io 个人网站的所有内容。

---

## 📁 项目结构

```
irrrricardo.github.io/
├── public/                          # 静态资源（部署时直接复制）
│   ├── images/                     # 网站图片
│   │   ├── background.jpg          # 主页背景图
│   │   └── github_selfie.jpeg      # 个人头像
│   └── resume.pdf                  # 简历 PDF 文件
├── src/
│   ├── app/                       # Next.js App Router 页面
│   │   ├── page.js                # 首页
│   │   ├── about/page.js          # 关于页面
│   │   ├── projects/page.js       # 项目/论文页面
│   │   ├── blog/                  # 博客模块
│   │   │   ├── page.js            # 博客列表（受密码保护）
│   │   │   └── [slug]/page.js     # 博客文章（受密码保护）
│   │   └── resume/page.js          # 简历查看页面
│   ├── components/                # React 组件
│   │   ├── Header.js              # 导航栏
│   │   ├── Footer.js              # 页脚
│   │   ├── BlogCard.js            # 博客卡片组件
│   │   └── PasswordGate.js        # 密码保护组件
│   └── lib/
│       └── translations.js        # 中英文翻译文件
├── .github/workflows/
│   └── deploy.yml                 # GitHub Actions 自动部署配置
└── package.json                   # 项目依赖配置
```

---

## 🔐 密码保护配置

### 修改博客访问密码

**文件位置：** `src/components/PasswordGate.js`

```javascript
const BLOG_PASSWORD = 'your-password-here'; // 修改这里设置你的密码
```

**当前密码：** `ricardochu`

### 重置验证状态

在密码验证页面底部有一个 "Reset password" 按钮，点击可清除浏览器验证状态。

---

## 🏠 首页内容更新

**文件位置：** `src/lib/translations.js`

### 英文版本

```javascript
home: {
  title: 'Renxiang (Ricardo) Chu',           // 姓名
  subtitle: 'Peking University | Basic Medicine & Economics',  // 副标题
  description: 'Interest in AI4Med/Bio and Agentic AI for Med...',  // 个人描述
  contactBtn: 'Contact Me',
  resumeBtn: 'Download Resume',
  // ...
}
```

### 中文版本

在同一文件中的 `zh` 部分修改对应的中文内容。

---

## 👤 关于页面更新

**文件位置：** `src/app/about/page.js`

### Education 部分

```javascript
<h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Education</h2>
<div className="space-y-3 text-gray-600 dark:text-gray-400 mb-6">
  <p><strong>2022-2027:</strong> Major in Basic Medical Sciences (PKUHSC)</p>
  <p><strong>2023-2027:</strong> Dual Degree in Economics (National School of Development)</p>
  <p className="text-sm text-gray-500">Peking University</p>
</div>
```

### Research Interests 部分

```javascript
<ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-6 space-y-2">
  <li>AI4Med / AI4Bio</li>
  <li>Agentic AI for Med</li>
  <li>Deep Learning</li>
  <li>Medical Image Analysis</li>
</ul>
```

---

## 📚 项目/论文页面更新

**文件位置：** `src/app/projects/page.js`

### 添加新的 Publication

在 `publications` 数组中添加新对象：

```javascript
const publications = [
  {
    title: '论文完整标题',
    authors: 'Renxiang Chu*, Author Name*, Other Author',  // * 表示共同一作
    doi: 'https://doi.org/10.xxxx/xxxxx',
    year: '2026',
    tags: ['Deep Learning', 'AI4Med', '相关标签'],
  },
  // 添加更多论文...
];
```

### 添加新的 Research Project

在 `projects` 数组中添加新对象：

```javascript
const projects = [
  {
    period: '2024.08 - Present',           // 时间段
    lab: 'Lab Name @ Institution',         // 实验室/机构
    title: '项目标题',
    description: '项目详细描述',
    tags: ['Machine Learning', 'Bioinformatics'],
  },
  // 添加更多项目...
];
```

---

## ✍️ 博客文章管理

### 添加新文章

**文件位置：** `src/app/blog/[slug]/page.js`

在 `postsContent` 对象中添加新文章：

```javascript
const postsContent = {
  'article-slug': {  // URL 友好的唯一标识符
    title: '文章标题',
    date: '2024-03-28',
    tags: ['AI', 'Tutorial'],
    content: `
## 第一级标题

这是文章内容...

## 第二级标题

- 列表项1
- 列表项2

> 引用内容

**加粗文本**
    `,
  },
  // 现有文章...
};
```

**注意：** 同时需要在 `src/app/blog/[slug]/layout.js` 的 `generateStaticParams()` 中添加 slug：

```javascript
export async function generateStaticParams() {
  return [
    { slug: 'first-post' },
    { slug: 'deep-learning-guide' },
    { slug: 'beijing-university-life' },
    { slug: 'your-new-slug' },  // 添加新文章的 slug
  ];
}
```

### 修改博客列表

**文件位置：** `src/app/blog/page.js`

在 `blogPosts` 数组中添加：

```javascript
const blogPosts = [
  {
    slug: 'article-slug',          // 必须与 postsContent 中的 key 一致
    title: '文章标题',
    date: '2024-03-28',
    description: '文章简介，用于博客列表展示',
    tags: ['标签1', '标签2'],
  },
  // 更多文章...
];
```

### 修改密码保护设置

如果需要修改哪些页面受密码保护，编辑：
- `src/app/blog/page.js` - 博客列表页
- `src/app/blog/[slug]/page.js` - 博客文章页

在返回的 JSX 中添加或移除 `<PasswordGate>` 组件包裹。

---

## 📄 简历管理

### 上传简历 PDF

1. **方法一：通过 GitHub 网页上传**
   - 访问 https://github.com/irrrricardo/irrrricardo.github.io
   - 进入 `public` 文件夹
   - 点击 "Add file" → "Upload files"
   - 上传你的 `resume.pdf` 文件

2. **方法二：本地操作**
   - 将 `resume.pdf` 放入项目的 `public` 文件夹
   - Git 会自动包含该文件

### 简历页面

**文件位置：** `src/app/resume/page.js`

如需修改简历页面的布局或样式，编辑此文件。

---

## 🖼️ 图片管理

### 主页背景和头像

**图片位置：** `public/images/`

- `background.jpg` - 主页全屏背景图
- `github_selfie.jpeg` - 个人头像（建议使用正方形图片）

**修改方法：**
1. 替换 `public/images/` 中的图片文件
2. 或修改 `src/app/page.js` 中的图片路径引用

### 图片格式要求

- 背景图：建议 1920x1080 或更高分辨率
- 头像：建议 400x400 以上，JPG 或 PNG 格式

---

## 🌐 导航栏管理

### 修改导航链接

**文件位置：** `src/components/Header.js`

```javascript
const links = [
  { href: '/', label: t.home },
  { href: '/about', label: t.about },
  { href: '/projects', label: t.projects },
  { href: '/blog', label: t.blog },
  { href: '/resume', label: 'Resume' },  // 可添加自定义链接
  { href: '/contact', label: t.contact },
];
```

---

## 🚀 部署流程

### 自动部署

每当推送到 GitHub `main` 分支时，GitHub Actions 会自动：

1. 检出代码
2. 安装依赖 (`npm install`)
3. 构建项目 (`npm run build`)
4. 部署到 GitHub Pages

### 部署状态查看

访问：https://github.com/irrrricardo/irrrricardo.github.io/actions

### 手动触发部署

1. 进入 GitHub 仓库页面
2. 点击 "Actions" 标签
3. 选择 "Deploy to GitHub Pages" workflow
4. 点击 "Run workflow"

---

## 🛠️ 本地开发

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3000 查看网站。

### 构建生产版本

```bash
npm run build
```

---

## ❓ 常见问题

### Q: 修改后网站没有更新？

A: 
1. 检查 GitHub Actions 部署状态
2. 等待 2-5 分钟让 GitHub Pages 缓存刷新
3. 尝试 Ctrl+F5 强制刷新浏览器
4. 清除浏览器缓存后重试

### Q: 密码保护不生效？

A:
1. 清除浏览器 sessionStorage：`sessionStorage.removeItem('blog_auth')`
2. 刷新页面重新测试
3. 确保在 `blog/page.js` 中正确使用了 `<PasswordGate>` 组件

### Q: 图片不显示？

A:
1. 确保图片在 `public/images/` 目录
2. 检查文件扩展名是否正确
3. 确保 GitHub 上传成功

### Q: 博客文章 404？

A:
1. 检查 `src/app/blog/[slug]/layout.js` 的 `generateStaticParams()` 是否包含该 slug
2. 检查 `src/app/blog/[slug]/page.js` 的 `postsContent` 是否有对应文章
3. 检查 `src/app/blog/page.js` 的 `blogPosts` 数组

---

## 📝 更新日志格式

建议每次更新后记录：

```
## [日期] 更新内容

### 新增
- 添加了新论文
- 更新了个人简介

### 修改
- 修改了项目描述
- 更新了头像

### 修复
- 修复了图片显示问题
```

---

## 📞 技术支持

如遇到问题，请检查：
1. GitHub 仓库的 Actions 日志
2. 浏览器控制台错误信息
3. Next.js 官方文档：https://nextjs.org/docs

---

**最后更新：** 2024-03-29
**维护者：** irrrricardo
