# 博客图片存储规范

> 本目录用于存储博客文章中使用的图片、GIF、视频等多媒体资源。

---

## 📁 目录结构

```
public/images/
├── blogs/                          # 博客图片根目录
│   ├── first-post/                # 文章 slug 作为文件夹名
│   │   ├── README.md             # 本文件（可选）
│   │   ├── figure-01.png         # 图片命名格式
│   │   └── diagram.gif           # GIF 动图
│   ├── deep-learning-guide/       # 另一篇文章
│   └── beijing-university-life/
├── background.jpg                  # 主页背景图
└── github_selfie.jpeg            # 个人头像
```

---

## 📋 文件夹命名规则

**必须使用文章的 `slug` 作为文件夹名称：**

| 文章标题 | Slug | 文件夹名 |
|---------|------|---------|
| 我的第一篇博客 | `first-post` | `first-post/` |
| 深度学习入门指南 | `deep-learning-guide` | `deep-learning-guide/` |
| 北京大学生活 | `beijing-university-life` | `beijing-university-life/` |

### Slug 命名规范

- ✅ 全小写
- ✅ 用连字符 `-` 分隔单词
- ✅ 不包含空格
- ✅ 不包含特殊字符
- ✅ 与 `src/app/blog/page.js` 中的 `slug` 完全一致

---

## 🖼️ 图片命名规则

### 推荐格式

```
<类型>-<序号>.<扩展名>

figure-01.png
figure-02.jpg
diagram-01.gif
photo-01.jpeg
```

### 类型前缀

| 前缀 | 用途 | 示例 |
|-----|------|------|
| `figure` | 图表、示意图 | `figure-01.png` |
| `photo` | 照片 | `photo-01.jpg` |
| `diagram` | 流程图、结构图 | `diagram-01.png` |
| `chart` | 图表（折线图、柱状图等） | `chart-01.png` |
| `screenshot` | 截图 | `screenshot-01.png` |
| `gif` | 动图 | `animation-01.gif` |

### 命名示例

```
✅ good:
  figure-01.png
  figure-02.jpg
  photo-01.jpeg
  chart-01.png

❌ bad:
  图片1.png
  photo.png
  IMG_1234.jpg
  深度学习框架图.png
```

---

## 📝 Markdown 中引用图片

### 正确格式

```markdown
![图1描述](/images/blogs/first-post/figure-01.png)

![神经网络结构图](/images/blogs/deep-learning-guide/diagram-01.png)
```

### 绝对路径（推荐）

始终使用以 `/` 开头的绝对路径，这样在任何页面都能正确显示。

```
/images/blogs/<slug>/<filename>
```

---

## 🎨 图片格式建议

| 格式 | 适用场景 | 建议大小 |
|-----|---------|---------|
| PNG | 截图、图表、示意图 | < 500KB |
| JPG | 照片 | < 800KB |
| GIF | 动图、演示 | < 2MB |
| WebP | 现代浏览器优化 | < 300KB |

### 压缩工具推荐

- **PNG**: TinyPNG (https://tinypng.com)
- **JPG**: Squoosh (https://squoosh.app)
- **GIF**: EZGIF (https://ezgif.com/optimize)

---

## ⚠️ 注意事项

1. **不要使用中文文件名** - 可能导致部署问题
2. **不要上传过大文件** - 影响页面加载速度
3. **保持文件夹整洁** - 只放当前文章相关的图片
4. **定期清理** - 删除不再使用的旧图片

---

## 🗑️ 删除文章时的操作

删除博客文章时：

1. 删除 `src/app/blog/[slug]/page.js` 中的文章内容
2. 删除 `src/app/blog/page.js` 中的文章卡片
3. 删除 `src/app/blog/[slug]/layout.js` 中的 slug
4. **删除对应的图片文件夹** `public/images/blogs/<slug>/`

---

## 📞 常见问题

**Q: 可以使用外部图片链接吗？**
A: 可以，但推荐使用本地存储以确保：
- 图片永远可访问
- 加载速度更快
- 不依赖第三方服务

**Q: 可以上传视频吗？**
A: 可以，但建议：
- 视频使用外部平台嵌入（YouTube、Bilibili）
- 或使用 GIF 代替短视频
- 视频文件请压缩后上传

---

**最后更新：** 2024-03-29
