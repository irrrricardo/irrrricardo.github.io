'use client';

import { useState, useEffect } from 'react';
import { translations } from '@/lib/translations';

export default function AboutPage() {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('lang') || 'en';
    setLang(savedLang);
    const handleLangChange = () => setLang(localStorage.getItem('lang') || 'en');
    window.addEventListener('langChange', handleLangChange);
    return () => window.removeEventListener('langChange', handleLangChange);
  }, []);

  const t = translations[lang].about;

  return (
    <>
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary text-white text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">{t.title}</h1>
        <p className="text-lg text-white/90">{t.subtitle}</p>
      </section>

      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Education</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Peking University - Double Degree in Basic Medicine & Economics</p>

            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Research Interests</h2>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-6 space-y-2">
              <li>Deep Learning</li>
              <li>AI in Healthcare</li>
              <li>Medical Image Analysis</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Contact</h2>
            <p className="text-gray-600 dark:text-gray-400">Email: r1card0chu1208@gmail.com</p>
          </div>
        </div>
      </section>
    </>
  );
}
