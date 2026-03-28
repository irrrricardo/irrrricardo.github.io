# ricardochu.github.io

A modern personal blog built with Next.js, featuring bilingual support (English/Chinese) and dark mode.

## Features

- **Markdown Blog** - Write posts in Markdown
- **Bilingual** - English and Chinese support
- **Dark Mode** - Toggle between light and dark themes
- **Responsive** - Mobile-friendly design
- **Fast** - Static site generation with Next.js
- **SEO** - Built-in SEO optimization

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Content**: Markdown
- **Deployment**: GitHub Pages

## Getting Started

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

## Writing Posts

Add new posts in `src/app/blog/[slug]/page.js`:

```javascript
'post-slug': {
  title: 'Your Post Title',
  date: '2024-03-28',
  tags: ['Tag1', 'Tag2'],
  content: `Your content...`,
},
```

## Deployment

Push to GitHub and the site will be built automatically via GitHub Actions.

## License

MIT
