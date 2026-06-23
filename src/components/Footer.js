'use client';

import { useState, useEffect } from 'react';
import { translations } from '@/lib/translations';
import { profile } from '@/lib/profile';

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
    <footer className="border-t border-gray-200 bg-white py-10 dark:border-gray-800 dark:bg-gray-950">
      <div className="section-shell flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-gray-950 dark:text-white">{profile.name}</p>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{t.copyright}</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          <a className="text-gray-600 transition-colors hover:text-primary dark:text-gray-300 dark:hover:text-teal-300" href={`mailto:${profile.email}`}>
            Email
          </a>
          <a className="text-gray-600 transition-colors hover:text-primary dark:text-gray-300 dark:hover:text-teal-300" href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a className="text-gray-600 transition-colors hover:text-primary dark:text-gray-300 dark:hover:text-teal-300" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a className="text-gray-600 transition-colors hover:text-primary dark:text-gray-300 dark:hover:text-teal-300" href={profile.resumePdf} target="_blank" rel="noopener noreferrer">
            CV
          </a>
        </div>
      </div>
    </footer>
  );
}
