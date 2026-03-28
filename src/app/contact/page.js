'use client';

import { useState, useEffect } from 'react';
import { translations } from '@/lib/translations';

export default function ContactPage() {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('lang') || 'en';
    setLang(savedLang);
    const handleLangChange = () => setLang(localStorage.getItem('lang') || 'en');
    window.addEventListener('langChange', handleLangChange);
    return () => window.removeEventListener('langChange', handleLangChange);
  }, []);

  const t = translations[lang].contact;

  return (
    <>
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary text-white text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">{t.title}</h1>
        <p className="text-lg text-white/90">{t.subtitle}</p>
      </section>

      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Email</h3>
                <a href="mailto:r1card0chu1208@gmail.com" className="text-primary hover:underline">r1card0chu1208@gmail.com</a>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">GitHub</h3>
                <a href="https://github.com/irrrricardo" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">github.com/irrrricardo</a>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">LinkedIn</h3>
                <a href="https://www.linkedin.com/in/renxiang-chu-386322333/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">linkedin.com/in/renxiang-chu</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
