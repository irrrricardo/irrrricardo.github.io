export async function generateStaticParams() {
  return [
    { slug: 'first-post' },
    { slug: 'deep-learning-guide' },
    { slug: 'beijing-university-life' },
  ];
}

export default function BlogPostLayout({ children }) {
  return children;
}
