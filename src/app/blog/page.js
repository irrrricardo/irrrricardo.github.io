'use client';

import { useState, useEffect } from 'react';
import { translations } from '@/lib/translations';
import { notes } from '@/lib/notes';
import { tools } from '@/lib/tools';
import BlogCard from '@/components/BlogCard';
import ToolCard from '@/components/ToolCard';

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
          <div className="mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
            <a href="#writing" className="panel-accent focus-ring group p-5 hover:-translate-y-1">
              <span className="text-xs font-semibold text-primary dark:text-blue-300">01</span>
              <h2 className="mt-3 text-xl font-semibold text-gray-950 dark:text-white">{t.writingTitle}</h2>
              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">{t.writingDescription}</p>
            </a>
            <a href="#tools" className="panel-accent focus-ring group p-5 hover:-translate-y-1">
              <span className="text-xs font-semibold text-primary dark:text-blue-300">02</span>
              <h2 className="mt-3 text-xl font-semibold text-gray-950 dark:text-white">{t.toolsTitle}</h2>
              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">{t.toolsDescription}</p>
            </a>
          </div>
        </div>
      </section>

      <section id="writing" className="soft-section scroll-mt-20 border-t border-gray-200 py-20 dark:border-gray-800">
        <div className="section-shell">
          <div className="section-heading-grid">
            <div>
              <p className="eyebrow">01 / {t.writingEyebrow}</p>
              <h2 className="section-title">{t.writingTitle}</h2>
            </div>
            <p className="section-lede">{t.writingDescription}</p>
          </div>
          {notes.length === 0 ? (
            <p className="text-center text-gray-500 py-20">{t.noPosts}</p>
          ) : (
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {notes.map((post) => (
                <BlogCard key={post.slug} post={post} lang={lang} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section id="tools" className="scroll-mt-20 border-t border-gray-200 bg-white py-20 dark:border-gray-800 dark:bg-gray-950">
        <div className="section-shell">
          <div className="section-heading-grid">
            <div>
              <p className="eyebrow">02 / {t.toolsEyebrow}</p>
              <h2 className="section-title">{t.toolsTitle}</h2>
            </div>
            <p className="section-lede">{t.toolsDescription}</p>
          </div>
          <div className="mt-10 space-y-6">
            {tools.map((tool) => <ToolCard key={tool.slug} tool={tool} lang={lang} />)}
          </div>
          <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">{t.toolsClosing}</p>
        </div>
      </section>
    </>
  );
}
