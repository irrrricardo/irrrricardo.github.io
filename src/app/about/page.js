'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { beyondWork, education, industryExperience, profile, researchApproach, researchDirections } from '@/lib/profile';
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
      <section className="bg-white pb-20 pt-24 dark:bg-gray-950">
        <div className="section-shell grid gap-10 lg:grid-cols-[320px_1fr] lg:items-center">
          <div className="relative mx-auto h-[370px] w-full max-w-[280px] overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-soft dark:border-gray-800 dark:bg-gray-900 lg:mx-0">
            <Image src="/images/github_selfie.jpeg" alt={profile.name} fill className="object-cover transition duration-700 ease-out hover:scale-[1.025]" sizes="280px" priority />
          </div>
          <div>
            <p className="eyebrow">{t.subtitle}</p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight text-gray-950 dark:text-white sm:text-5xl">{t.title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300">{text(profile.intro, lang)}</p>
            <div className="mt-7 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full border border-gray-200 bg-paper px-3.5 py-2 text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">{text(profile.affiliation, lang)}</span>
              <span className="rounded-full border border-gray-200 bg-paper px-3.5 py-2 text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">{text(profile.location, lang)}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="soft-section border-y border-gray-200 py-20 dark:border-gray-800">
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

      <section className="bg-white py-20 dark:bg-gray-950">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="eyebrow">{lang === 'zh' ? '行业经历' : 'Industry Experience'}</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-gray-950 dark:text-white">{lang === 'zh' ? 'AI for Biology 投资研究' : 'AI for Biology investment research'}</h2>
              <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                {lang === 'zh'
                  ? '一级市场工作让我从技术、产品与商业化路径三个层面理解 AI4Bio 初创公司，也为科研问题提供了不同于实验室的观察视角。'
                  : 'Private-market work gives me a complementary view of AI4Bio startups across technology, product development, and commercialization.'}
              </p>
            </div>
            <div className="space-y-4">
              {industryExperience.map((item) => (
                <article key={item.place} className="panel-accent p-6">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-950 dark:text-white">{text(item.role, lang)}</h3>
                      <p className="mt-2 text-sm font-medium text-primary dark:text-blue-300">{item.place}</p>
                    </div>
                    <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">{item.period}</p>
                  </div>
                  <p className="mt-5 text-sm leading-6 text-gray-600 dark:text-gray-300">{text(item.summary, lang)}</p>
                  <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">{text(item.detail, lang)}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="soft-section border-y border-gray-200 py-20 dark:border-gray-800">
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

      <section className="bg-white py-20 dark:bg-gray-950">
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

      <section className="soft-section border-t border-gray-200 py-20 dark:border-gray-800">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="eyebrow">{lang === 'zh' ? '研究与工作之外' : 'Beyond research and work'}</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-gray-950 dark:text-white">
                {lang === 'zh' ? '不同节奏里的生活' : 'A life with different tempos'}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 dark:text-gray-300">
                {lang === 'zh'
                  ? '我喜欢让生活保持一些不同的节奏：有时去运动和户外，有时听音乐、弹琴或唱歌，也会读书、写一点不太成熟的东西，做饭，或者和朋友慢慢喝一杯。'
                  : 'I like keeping several tempos in life: sport and the outdoors; listening, playing, and singing; books and not-yet-very-good drafts; cooking; and an occasional drink shared slowly with friends.'}
              </p>
            </div>
            <div className="grid gap-x-8 gap-y-9 sm:grid-cols-2">
              {beyondWork.map((interest) => (
                <article key={interest.number} className="border-t border-gray-300 pt-4 dark:border-gray-700">
                  <div className="flex items-baseline gap-3">
                    <span className="text-xs font-semibold tracking-[0.14em] text-secondary">{interest.number}</span>
                    <h3 className="text-lg font-semibold text-gray-950 dark:text-white">{text(interest.title, lang)}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">{text(interest.description, lang)}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
