'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { education, profile, researchApproach, researchDirections } from '@/lib/profile';
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

export default function AboutPage() {
  const lang = useLanguage();
  const t = translations[lang].about;

  return (
    <>
      <section className="bg-white pt-20 pb-16 dark:bg-gray-950">
        <div className="section-shell grid gap-10 lg:grid-cols-[320px_1fr] lg:items-center">
          <div className="relative mx-auto h-[370px] w-full max-w-[280px] overflow-hidden border border-gray-200 bg-gray-100 shadow-sm dark:border-gray-800 dark:bg-gray-900 lg:mx-0">
            <Image src="/images/github_selfie.jpeg" alt={profile.name} fill className="object-cover" sizes="280px" priority />
          </div>
          <div>
            <p className="eyebrow">{t.subtitle}</p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight text-gray-950 dark:text-white sm:text-5xl">{t.title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300">{text(profile.intro, lang)}</p>
            <div className="mt-7 flex flex-wrap gap-3 text-sm">
              <span className="border border-gray-200 bg-paper px-3 py-2 text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">{text(profile.affiliation, lang)}</span>
              <span className="border border-gray-200 bg-paper px-3 py-2 text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">{text(profile.location, lang)}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-paper py-16 dark:border-gray-800 dark:bg-gray-950">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="eyebrow">{lang === 'zh' ? '教育背景' : 'Education'}</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-gray-950 dark:text-white">{lang === 'zh' ? '基础医学与经济学' : 'Basic medicine and economics'}</h2>
              <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                {lang === 'zh'
                  ? '基础医学是我的主修方向，经济学双学位则补充了我对人群差异、因果解释与决策问题的理解。'
                  : 'Basic Medical Sciences is my primary degree; Economics adds a second perspective on population heterogeneity, causal interpretation, and decision-making.'}
              </p>
            </div>
            <div className="space-y-4">
              {education.map((item) => (
                <article key={`${item.period}-${text(item.title, 'en')}`} className="panel p-6">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-950 dark:text-white">{text(item.title, lang)}</h3>
                      <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">{text(item.place, lang)}</p>
                    </div>
                    <p className="text-sm font-semibold text-primary dark:text-blue-300">{item.period}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 dark:bg-gray-950">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="eyebrow">{lang === 'zh' ? '长期研究兴趣' : 'Long-term Research Interests'}</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-gray-950 dark:text-white">{lang === 'zh' ? '从分子设计到患者尺度建模' : 'From molecular design to patient-scale modeling'}</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {researchDirections.map((direction) => (
                <article key={text(direction.title, 'en')} className="panel min-h-[220px] p-6">
                  <h3 className="text-lg font-semibold text-gray-950 dark:text-white">{text(direction.title, lang)}</h3>
                  <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">{text(direction.description, lang)}</p>
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
              <p className="eyebrow">{lang === 'zh' ? '研究方法' : 'Research Approach'}</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-gray-950 dark:text-white">{lang === 'zh' ? '从多尺度生物学问题出发' : 'Starting from multiscale biological questions'}</h2>
            </div>
            <div className="space-y-5">
              {researchApproach.map((item) => (
                <article key={text(item.title, 'en')} className="border-l border-gray-300 pl-5 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-950 dark:text-white">{text(item.title, lang)}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">{text(item.body, lang)}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
