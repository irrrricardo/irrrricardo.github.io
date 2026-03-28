'use client';

import { useState, useEffect } from 'react';
import { translations } from '@/lib/translations';
import BlogCard from '@/components/BlogCard';

const blogPosts = [
  {
    slug: 'first-post',
    title: 'Welcome to My Blog',
    date: '2024-03-28',
    description: 'This is my first blog post. I will share my learning experiences, project insights, and interesting ideas here.',
    tags: ['随笔', 'Welcome'],
  },
  {
    slug: 'deep-learning-guide',
    title: 'Deep Learning Getting Started Guide',
    date: '2024-03-20',
    description: 'An introduction to deep learning, covering basic concepts, neural networks, and application areas.',
    tags: ['AI', 'Tutorial'],
  },
  {
    slug: 'beijing-university-life',
    title: 'My Journey at Peking University',
    date: '2024-03-15',
    description: 'Studying at Peking University with a double degree in Basic Medicine and Economics.',
    tags: ['Life', 'Education'],
  },
];

export default function BlogPage() {
  const [lang, setLang] = useState('en');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const savedLang = localStorage.getItem('lang') || 'en';
    setLang(savedLang);
    setPosts(blogPosts);

    const handleLangChange = () => {
      setLang(localStorage.getItem('lang') || 'en');
    };
    window.addEventListener('langChange', handleLangChange);
    return () => window.removeEventListener('langChange', handleLangChange);
  }, []);

  const t = translations[lang].blog;

  return (
    <>
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary text-white text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">{t.title}</h1>
        <p className="text-lg text-white/90">{t.subtitle}</p>
      </section>

      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="max-w-3xl mx-auto">
          {posts.length === 0 ? (
            <p className="text-center text-gray-500 py-20">{t.noPosts}</p>
          ) : (
            <div className="space-y-6">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} lang={lang} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
