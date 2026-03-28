# irrrricardo's Personal Portfolio

A modern, responsive personal portfolio website built with Next.js, Tailwind CSS, and TypeScript.

## 🚀 Features

- **Modern Design**: Clean, minimalist design with smooth animations
- **Dark/Light Mode**: Toggle between dark and light themes
- **Bilingual Support**: English and Chinese language support
- **Responsive**: Fully responsive design for all devices
- **Fast Performance**: Optimized for speed with Next.js static export
- **SEO Friendly**: Optimized for search engines

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── about/        # About page
│   │   ├── blog/         # Blog page
│   │   ├── contact/      # Contact page
│   │   ├── projects/     # Projects page
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   └── components/
│       ├── Navigation.tsx    # Navigation component
│       └── ThemeProvider.tsx # Theme provider
├── public/                 # Static assets
├── .github/
│   └── workflows/          # GitHub Actions
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Theme**: next-themes

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

This will create a static export in the `out` folder.

## 📦 Deployment

This project is configured for automatic deployment to GitHub Pages via GitHub Actions.

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `out` folder to GitHub Pages

### Automatic Deployment

Push to the `main` branch and GitHub Actions will automatically build and deploy.

## ✏️ Customization

### Update Personal Information

Edit the content in each page component:
- `src/app/page.tsx` - Home page
- `src/app/about/page.tsx` - About page
- `src/app/projects/page.tsx` - Projects page
- `src/app/blog/page.tsx` - Blog page
- `src/app/contact/page.tsx` - Contact page

### Add Images

Place your images in the `public` folder and reference them in your components.

### Change Colors

Edit `tailwind.config.ts` to customize the color scheme.

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

Feel free to reach out if you have any questions!

- GitHub: [@irrrricardo](https://github.com/irrrricardo)
- Email: irrrricardo@example.com

---

Made with ❤️ using Next.js
