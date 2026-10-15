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
    <div className="soft-section min-h-screen py-10">
      <div className="section-shell max-w-5xl">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="text-sm font-semibold text-gray-600 transition-colors hover:text-primary dark:text-gray-300 dark:hover:text-blue-300"
          >
            {lang === 'zh' ? '返回首页' : 'Back to Home'}
          </Link>
          <a
            href={profile.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary"
          >
            {lang === 'zh' ? '下载 PDF' : 'Download PDF'}
          </a>
        </div>

        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-soft dark:border-gray-800 dark:bg-gray-900">
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
