'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { localized } from '@/lib/notes';

export default function NoteArticle({ note }) {
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

  const formattedDate = new Date(note.date).toLocaleDateString(lang === 'zh' ? 'zh-CN' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="soft-section min-h-screen border-t border-gray-200 dark:border-gray-800">
      <header className="border-b border-gray-200/80 bg-white/75 py-16 backdrop-blur-xl dark:border-gray-800 dark:bg-gray-950/75 sm:py-20">
        <div className="section-shell max-w-4xl">
          <Link href="/blog" className="text-link focus-ring rounded-sm">
            {lang === 'zh' ? '← 返回随笔' : '← Back to notes'}
          </Link>

          <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
            <span className="font-semibold text-primary dark:text-blue-300">{localized(note.category, lang)}</span>
            <span className="text-gray-300 dark:text-gray-700" aria-hidden="true">/</span>
            <time className="text-gray-500 dark:text-gray-400">{formattedDate}</time>
            <span className="text-gray-300 dark:text-gray-700" aria-hidden="true">/</span>
            <span className="text-gray-500 dark:text-gray-400">{localized(note.readTime, lang)}</span>
          </div>

          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-gray-950 dark:text-white sm:text-5xl">
            {localized(note.title, lang)}
          </h1>
          <p className="mt-7 max-w-3xl border-l-2 border-primary/70 pl-5 text-lg leading-8 text-gray-600 dark:border-blue-300/70 dark:text-gray-300">
            {localized(note.deck, lang)}
          </p>
          {note.cover && (
            <div className="relative mt-10 aspect-[5/3] overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <Image
                src={note.cover}
                alt={localized(note.coverAlt, lang)}
                fill
                priority
                sizes="(min-width: 1024px) 896px, 100vw"
                className="object-cover"
              />
            </div>
          )}
        </div>
      </header>

      <div className="section-shell max-w-4xl py-14 sm:py-20">
        <div className="mx-auto max-w-3xl">
          {note.sections.map((section, index) => (
            <section key={localized(section.heading, 'en')} className={index === 0 ? '' : 'mt-14 border-t border-gray-200 pt-12 dark:border-gray-800'}>
              <div className="grid gap-4 sm:grid-cols-[42px_1fr]">
                <span className="pt-1 text-xs font-semibold tracking-[0.14em] text-secondary">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h2 className="text-2xl font-semibold leading-tight text-gray-950 dark:text-white sm:text-3xl">
                    {localized(section.heading, lang)}
                  </h2>
                  <div className="mt-6 space-y-5 text-[17px] leading-8 text-gray-700 dark:text-gray-300">
                    {localized(section.paragraphs, lang).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                </div>
              </div>
            </section>
          ))}

          <footer className="mt-16 flex flex-col gap-4 border-t border-gray-200 pt-8 dark:border-gray-800 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {localized(note.tags, lang).map((tag) => <span key={tag} className="tag">{tag}</span>)}
            </div>
            <Link href="/blog" className="text-link focus-ring rounded-sm">{lang === 'zh' ? '继续浏览随笔 →' : 'Browse all notes →'}</Link>
          </footer>
        </div>
      </div>
    </article>
  );
}
