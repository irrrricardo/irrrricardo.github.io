'use client';

import { useState, useEffect } from 'react';
import { translations } from '@/lib/translations';
import { notes } from '@/lib/notes';
import BlogCard from '@/components/BlogCard';

export default function BlogPage() {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('lang') || 'en';
    setLang(savedLang);

    const handleLangChange = () => {
      setLang(localStorage.getItem('lang') || 'en');
    };
    window.addEventListener('langChange', handleLangChange);
    return () => window.removeEventListener('langChange', handleLangChange);
  }, []);

  const t = translations[lang].blog;

  return (
    <>
      <section className="relative overflow-hidden bg-white pb-16 pt-24 dark:bg-gray-950 sm:pb-20">
        <div className="absolute -right-24 top-6 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl dark:bg-blue-950/20" aria-hidden="true" />
        <div className="section-shell relative">
          <p className="eyebrow">{t.subtitle}</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-semibold text-gray-950 dark:text-white sm:text-5xl">{t.title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-300">{t.description}</p>
          <div className="mt-7 flex flex-wrap gap-2">
            {[t.course, t.life, t.mysticism].map((label) => <span key={label} className="tag">{label}</span>)}
          </div>
        </div>
      </section>

      <section className="soft-section min-h-screen border-t border-gray-200 py-20 dark:border-gray-800">
        <div className="section-shell max-w-3xl">
          {notes.length === 0 ? (
            <p className="text-center text-gray-500 py-20">{t.noPosts}</p>
          ) : (
            <div className="space-y-6">
              {notes.map((post) => (
                <BlogCard key={post.slug} post={post} lang={lang} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
