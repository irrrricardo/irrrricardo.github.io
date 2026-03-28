'use client';

import { useState, useEffect } from 'react';
import { translations } from '@/lib/translations';

export default function ProjectsPage() {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('lang') || 'en';
    setLang(savedLang);
    const handleLangChange = () => setLang(localStorage.getItem('lang') || 'en');
    window.addEventListener('langChange', handleLangChange);
    return () => window.removeEventListener('langChange', handleLangChange);
  }, []);

  const t = translations[lang].projects;

  return (
    <>
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary text-white text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">{t.title}</h1>
        <p className="text-lg text-white/90">{t.subtitle}</p>
      </section>

      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Project 1</h2>
              <p className="text-gray-600 dark:text-gray-400">Coming soon...</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Project 2</h2>
              <p className="text-gray-600 dark:text-gray-400">Coming soon...</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
