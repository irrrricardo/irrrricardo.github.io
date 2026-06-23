'use client';

import { useEffect, useState } from 'react';
import { profile, projects, publications } from '@/lib/profile';
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

function TagList({ tags }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="border border-gray-200 bg-paper px-2.5 py-1 text-xs font-medium text-gray-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export default function ProjectsPage() {
  const lang = useLanguage();
  const t = translations[lang].projects;

  return (
    <>
      <section className="bg-white py-16 dark:bg-gray-950">
        <div className="section-shell">
          <p className="eyebrow">{t.subtitle}</p>
          <div className="mt-3 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <h1 className="text-4xl font-semibold text-gray-950 dark:text-white sm:text-5xl">
              {t.title}
            </h1>
            <p className="max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-300">
              {lang === 'zh'
                ? '这里整理我目前公开的研究系统、论文发布和进行中的项目。重点是医学影像、衰老异质性、系统生物学和可复现科研工具。'
                : 'A curated view of my public research systems, manuscript-stage releases, and ongoing projects across medical imaging, aging heterogeneity, systems biology, and reproducible research tooling.'}
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-paper py-16 dark:border-gray-800 dark:bg-gray-950">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow">{lang === 'zh' ? '重点项目' : 'Featured Project'}</p>
              <h2 className="mt-3 text-3xl font-semibold text-gray-950 dark:text-white">
                PODE
              </h2>
              <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                {text(projects[0].description, lang)}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {projects[0].links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring inline-flex min-h-10 items-center justify-center border border-primary px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white dark:border-teal-300 dark:text-teal-300 dark:hover:bg-teal-300 dark:hover:text-gray-950"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <article className="panel p-6">
                <p className="text-sm font-semibold text-primary dark:text-teal-300">
                  {lang === 'zh' ? '代码发布' : 'Code release'}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-gray-950 dark:text-white">
                  {lang === 'zh' ? '论文配套仓库' : 'Manuscript companion repository'}
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                  {lang === 'zh'
                    ? '包含 Base、Mapper、Splitter、BrainMRI 实现，以及模型卡、数据说明、示例 schema 和 CI。'
                    : 'Includes Base, Mapper, Splitter, BrainMRI implementations, plus model-card metadata, data notes, schema examples, and CI.'}
                </p>
              </article>
              <article className="panel p-6">
                <p className="text-sm font-semibold text-primary dark:text-teal-300">
                  {lang === 'zh' ? '研究主题' : 'Research question'}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-gray-950 dark:text-white">
                  {lang === 'zh' ? '年龄钟残差中的异质性' : 'Heterogeneity in age-clock residuals'}
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                  {lang === 'zh'
                    ? '将疾病相关的偏离分解为生理系统相关的可解释轴，而不是只报告单一 age gap。'
                    : 'Decomposes disease-associated deviations into interpretable physiology-linked axes instead of reporting only one age gap.'}
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 dark:bg-gray-950">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow">{lang === 'zh' ? '论文与发布' : 'Publications and Releases'}</p>
              <h2 className="mt-3 text-3xl font-semibold text-gray-950 dark:text-white">
                {lang === 'zh' ? '当前公开成果' : 'Current public outputs'}
              </h2>
            </div>
            <div className="space-y-4">
              {publications.map((publication) => (
                <article key={publication.title} className="panel p-6">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-primary dark:text-teal-300">
                        {publication.year} · {text(publication.venue, lang)}
                      </p>
                      <h3 className="mt-3 text-xl font-semibold leading-7 text-gray-950 dark:text-white">
                        {publication.title}
                      </h3>
                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        {publication.authors}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
                    {text(publication.description, lang)}
                  </p>
                  <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <TagList tags={publication.tags} />
                    <div className="flex flex-wrap gap-4 text-sm font-semibold">
                      {publication.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline dark:text-teal-300"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-paper py-16 dark:border-gray-800 dark:bg-gray-950">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow">{lang === 'zh' ? '进行中' : 'Ongoing Work'}</p>
              <h2 className="mt-3 text-3xl font-semibold text-gray-950 dark:text-white">
                {lang === 'zh' ? '研究项目' : 'Research projects'}
              </h2>
            </div>
            <div className="space-y-4">
              {projects.slice(1).map((project) => (
                <article key={project.title} className="panel p-6">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-primary dark:text-teal-300">
                        {text(project.eyebrow, lang)}
                      </p>
                      <h3 className="mt-3 text-xl font-semibold text-gray-950 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        {project.lab}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{project.period}</p>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
                    {text(project.description, lang)}
                  </p>
                  <div className="mt-5">
                    <TagList tags={project.tags} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 dark:bg-gray-950">
        <div className="section-shell flex flex-col gap-4 border-t border-gray-200 pt-10 dark:border-gray-800 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-semibold text-gray-950 dark:text-white">
              {lang === 'zh' ? '如果你对合作或讨论感兴趣' : 'For collaboration or research conversations'}
            </p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              {text(profile.location, lang)}
            </p>
          </div>
          <a
            href={`mailto:${profile.email}`}
            className="focus-ring inline-flex min-h-11 items-center justify-center border border-gray-950 px-5 py-2.5 text-sm font-semibold text-gray-950 transition-colors hover:bg-gray-950 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-gray-950"
          >
            {profile.email}
          </a>
        </div>
      </section>
    </>
  );
}
