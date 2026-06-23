'use client';

import { useEffect, useState } from 'react';
import { collaborationTopics, profile, researchDirections } from '@/lib/profile';
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
    { label: lang === 'zh' ? '微信' : 'WeChat', value: profile.wechat },
    { label: 'GitHub', href: profile.github, value: 'github.com/irrrricardo' },
    { label: 'LinkedIn', href: profile.linkedin, value: 'linkedin.com/in/renxiang-chu' },
    { label: 'CV', href: profile.resumePdf, value: lang === 'zh' ? 'PDF 简历' : 'PDF CV' },
  ];

  return (
    <>
      <section className="bg-white pt-20 pb-16 dark:bg-gray-950">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="eyebrow">{t.subtitle}</p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight text-gray-950 dark:text-white sm:text-5xl">
              {t.title}
            </h1>
          </div>
          <p className="max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-300">
            {lang === 'zh'
              ? '如果你对临床医学中的 Agentic AI、self-evolving agents、AI co-scientist，或 AI 与真实世界医学和生物学的结合感兴趣，欢迎联系。'
              : 'I am happy to talk about agentic AI for clinical medicine, self-evolving agents, AI co-scientist workflows, and how AI can connect with real-world medicine and biology.'}
          </p>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-paper py-16 dark:border-gray-800 dark:bg-gray-950">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="eyebrow">{lang === 'zh' ? '联系信息' : 'Contact Links'}</p>
            <h2 className="mt-3 text-3xl font-semibold text-gray-950 dark:text-white">
              {profile.name}
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
              {text(profile.affiliation, lang)}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {links.map((link) => (
              link.href ? (
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
              ) : (
                <div key={link.label} className="panel p-6">
                <p className="text-sm font-semibold text-primary dark:text-teal-300">{link.label}</p>
                <p className="mt-3 break-words text-lg font-semibold text-gray-950 dark:text-white">
                  {link.value}
                </p>
              </div>
              )
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 dark:bg-gray-950">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="eyebrow">{lang === 'zh' ? '适合交流的话题' : 'Good Topics'}</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-gray-950 dark:text-white">
                {lang === 'zh' ? '我最近主要在想这些问题' : 'Questions I am currently thinking about'}
              </h2>
            </div>
            <div className="space-y-4">
              {collaborationTopics.map((topic) => (
                <article key={text(topic, 'en')} className="panel-accent p-5">
                  <p className="text-sm leading-6 text-gray-700 dark:text-gray-300">
                    {text(topic, lang)}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-paper py-16 dark:border-gray-800 dark:bg-gray-950">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="eyebrow">{lang === 'zh' ? '研究线索' : 'Research Lines'}</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-gray-950 dark:text-white">
                {lang === 'zh' ? '如果你想先了解我的方向' : 'If you want to understand my work first'}
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
