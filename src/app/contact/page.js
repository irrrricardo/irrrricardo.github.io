'use client';

import { useEffect, useState } from 'react';
import { profile, researchDirections } from '@/lib/profile';
import { translations } from '@/lib/translations';

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

function text(value, lang) {
  return typeof value === 'string' ? value : value[lang] || value.en;
}

export default function ContactPage() {
  const lang = useLanguage();
  const t = translations[lang].contact;

  const links = [
    { label: 'Email', href: `mailto:${profile.email}`, value: profile.email },
    { label: 'GitHub', href: profile.github, value: 'github.com/irrrricardo' },
    { label: 'LinkedIn', href: profile.linkedin, value: 'linkedin.com/in/renxiang-chu' },
    { label: 'CV', href: profile.resumePdf, value: lang === 'zh' ? '下载 PDF' : 'Download PDF' },
  ];

  return (
    <>
      <section className="bg-white py-16 dark:bg-gray-950">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="eyebrow">{t.subtitle}</p>
            <h1 className="mt-3 text-4xl font-semibold text-gray-950 dark:text-white sm:text-5xl">
              {t.title}
            </h1>
          </div>
          <p className="max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-300">
            {lang === 'zh'
              ? '如果你对医学影像、AI4Med、AI4Bio、Agentic AI 或可复现科研工具感兴趣，可以通过以下方式联系我。'
              : 'Reach out for conversations around medical imaging, AI4Med, AI4Bio, agentic AI, or reproducible research tooling.'}
          </p>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-paper py-16 dark:border-gray-800 dark:bg-gray-950">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">{lang === 'zh' ? '联系方式' : 'Contact Links'}</p>
            <h2 className="mt-3 text-3xl font-semibold text-gray-950 dark:text-white">
              {profile.name}
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
              {text(profile.affiliation, lang)}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') || link.href.endsWith('.pdf') ? '_blank' : undefined}
                rel={link.href.startsWith('http') || link.href.endsWith('.pdf') ? 'noopener noreferrer' : undefined}
                className="panel group block p-6 transition-colors hover:border-primary dark:hover:border-teal-300"
              >
                <p className="text-sm font-semibold text-primary dark:text-teal-300">{link.label}</p>
                <p className="mt-3 break-words text-lg font-semibold text-gray-950 group-hover:text-primary dark:text-white dark:group-hover:text-teal-300">
                  {link.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 dark:bg-gray-950">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow">{lang === 'zh' ? '适合交流的话题' : 'Good Topics'}</p>
              <h2 className="mt-3 text-3xl font-semibold text-gray-950 dark:text-white">
                {lang === 'zh' ? '我目前最关注的问题' : 'Questions I am currently thinking about'}
              </h2>
            </div>
            <div className="space-y-4">
              {researchDirections.map((direction) => (
                <article key={text(direction.title, 'en')} className="border-l border-gray-300 pl-5 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-950 dark:text-white">
                    {text(direction.title, lang)}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                    {text(direction.description, lang)}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
