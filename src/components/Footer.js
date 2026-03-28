'use client';

import { useState, useEffect } from 'react';
import { translations } from '@/lib/translations';

export default function Footer() {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('lang') || 'en';
    setLang(savedLang);

    const handleLangChange = () => {
      setLang(localStorage.getItem('lang') || 'en');
    };

    window.addEventListener('storage', handleLangChange);
    window.addEventListener('langChange', handleLangChange);

    return () => {
      window.removeEventListener('storage', handleLangChange);
      window.removeEventListener('langChange', handleLangChange);
    };
  }, []);

  const t = translations[lang].footer;

  return (
    <footer className="py-8 px-4 text-center border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <p className="text-sm text-gray-500 dark:text-gray-400">{t.copyright}</p>
    </footer>
  );
}
