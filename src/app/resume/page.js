'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { profile } from '@/lib/profile';

function useLanguage() {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const readLang = () => setLang(localStorage.getItem('lang') || 'en');
    readLang();
    window.addEventListener('langChange', readLang);
    window.addEventListener('storage', readLang);
    return () => {
      window.removeEventListener('langChange', readLang);
      window.removeEventListener('storage', readLang);
    };
  }, []);

  return lang;
}

export default function ResumePage() {
  const lang = useLanguage();

  return (
    <div className="min-h-screen bg-paper py-8 dark:bg-gray-950">
      <div className="section-shell max-w-5xl">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="text-sm font-semibold text-gray-600 transition-colors hover:text-primary dark:text-gray-300 dark:hover:text-teal-300"
          >
            {lang === 'zh' ? '返回首页' : 'Back to Home'}
          </Link>
          <a
            href={profile.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex min-h-10 items-center justify-center border border-gray-950 px-4 py-2 text-sm font-semibold text-gray-950 transition-colors hover:bg-gray-950 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-gray-950"
          >
            {lang === 'zh' ? '下载 PDF' : 'Download PDF'}
          </a>
        </div>

        <div className="overflow-hidden border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <iframe
            src={profile.resumePdf}
            className="h-[calc(100vh-120px)] w-full"
            title={lang === 'zh' ? '简历' : 'CV'}
          />
        </div>
      </div>
    </div>
  );
}
