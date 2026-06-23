'use client';

import { useState, useEffect } from 'react';
import { translations } from '@/lib/translations';
import BlogCard from '@/components/BlogCard';
import PasswordGate from '@/components/PasswordGate';

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
    <PasswordGate>
      <section className="bg-white py-16 dark:bg-gray-950">
        <div className="section-shell">
          <p className="eyebrow">{t.subtitle}</p>
          <h1 className="mt-3 text-4xl font-semibold text-gray-950 dark:text-white sm:text-5xl">{t.title}</h1>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-paper py-16 dark:border-gray-800 dark:bg-gray-950 min-h-screen">
        <div className="section-shell max-w-3xl">
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
    </PasswordGate>
  );
}
