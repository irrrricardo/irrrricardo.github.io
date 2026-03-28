'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { translations } from '@/lib/translations';

export default function Home() {
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

  const t = translations[lang].home;

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            {t.title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8">
            {t.subtitle}
          </p>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto mb-10">
            {t.description}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link
              href="/contact"
              className="px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
            >
              {t.contactBtn}
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full font-semibold border-2 border-white/30 hover:bg-white/10 transition-colors"
            >
              {t.resumeBtn}
            </a>
          </div>

          <div className="flex justify-center gap-6 mb-16">
            <a href="https://github.com/irrrricardo" target="_blank" rel="noopener noreferrer" className="text-3xl hover:scale-110 transition-transform">🐙</a>
            <a href="https://www.linkedin.com/in/renxiang-chu-386322333/" target="_blank" rel="noopener noreferrer" className="text-3xl hover:scale-110 transition-transform">💼</a>
            <a href="mailto:r1card0chu1208@gmail.com" className="text-3xl hover:scale-110 transition-transform">📧</a>
          </div>

          <p className="text-sm text-gray-500">{t.langHint}</p>
        </div>
      </section>

      {/* Explore Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            {t.explore}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/about" className="block p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-4xl mb-4">👨‍🔬</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{t.aboutTitle}</h3>
              <p className="text-gray-600 dark:text-gray-400">{t.aboutDesc}</p>
            </Link>
            <Link href="/projects" className="block p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{t.projectsTitle}</h3>
              <p className="text-gray-600 dark:text-gray-400">{t.projectsDesc}</p>
            </Link>
            <Link href="/blog" className="block p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{t.blogTitle}</h3>
              <p className="text-gray-600 dark:text-gray-400">{t.blogDesc}</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
