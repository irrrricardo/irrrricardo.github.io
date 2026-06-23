'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { profile, projects, publications, quickStats, researchDirections, writing } from '@/lib/profile';

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

export default function Home() {
  const lang = useLanguage();
  const featuredProject = projects[0];
  const featuredPublication = publications[0];

  return (
    <>
      <section className="relative min-h-[86svh] overflow-hidden bg-gray-950 text-white">
        <Image
          src="/images/background.jpg"
          alt="Peking University campus"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gray-950/70" />

        <div className="section-shell relative z-10 flex min-h-[86svh] items-center py-16">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[1fr_300px]">
            <div className="max-w-3xl">
              <p className="eyebrow text-teal-200">{text(profile.status, lang)}</p>
              <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                {profile.name}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-200 sm:text-xl">
                {text(profile.headline, lang)}
              </p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-gray-300">
                {text(profile.intro, lang)}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="focus-ring inline-flex min-h-11 items-center justify-center border border-teal-200 bg-teal-200 px-5 py-2.5 text-sm font-semibold text-gray-950 transition-colors hover:bg-white"
                >
                  {lang === 'zh' ? '查看研究项目' : 'View Research'}
                </Link>
                <a
                  href={profile.resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex min-h-11 items-center justify-center border border-white/35 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
                >
                  {lang === 'zh' ? '下载简历' : 'Download CV'}
                </a>
                <a
                  href="https://github.com/LuMengLab/PODE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex min-h-11 items-center justify-center border border-white/35 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
                >
                  PODE
                </a>
              </div>

              <div className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
                {quickStats.map((item) => (
                  <div key={item.value} className="border-l border-white/25 pl-4">
                    <p className="text-lg font-semibold text-white">{item.value}</p>
                    <p className="mt-1 text-sm leading-5 text-gray-300">{text(item.label, lang)}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden justify-self-end lg:block">
              <div className="relative h-[380px] w-[280px] overflow-hidden border border-white/25 bg-white/10 shadow-2xl">
                <Image
                  src="/images/github_selfie.jpeg"
                  alt={profile.name}
                  fill
                  className="object-cover"
                  sizes="280px"
                  priority
                />
              </div>
              <p className="mt-4 text-sm text-gray-300">{text(profile.affiliation, lang)}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-200 bg-white py-14 dark:border-gray-800 dark:bg-gray-950">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.3fr]">
            <div>
              <p className="eyebrow">{lang === 'zh' ? '重点成果' : 'Featured Work'}</p>
              <h2 className="mt-3 text-3xl font-semibold text-gray-950 dark:text-white">
                {featuredProject.title}
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-gray-600 dark:text-gray-300">
                {text(featuredProject.description, lang)}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <article className="panel p-6">
                <p className="text-sm font-semibold text-primary dark:text-teal-300">
                  {text(featuredProject.eyebrow, lang)}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-gray-950 dark:text-white">
                  {lang === 'zh' ? '公开代码与权重' : 'Code and Model Weights'}
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                  {lang === 'zh'
                    ? 'PODE 已整理为论文配套代码库，包含文档、示例 schema、CI、模型卡和权重入口。'
                    : 'PODE is organized as a manuscript companion release with docs, schema examples, CI, model-card metadata, and checkpoint references.'}
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {featuredProject.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-primary hover:underline dark:text-teal-300"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </article>

              <article className="panel p-6">
                <p className="text-sm font-semibold text-primary dark:text-teal-300">
                  {text(featuredPublication.venue, lang)}
                </p>
                <h3 className="mt-3 text-xl font-semibold leading-7 text-gray-950 dark:text-white">
                  {featuredPublication.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                  {text(featuredPublication.description, lang)}
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 dark:bg-gray-950">
        <div className="section-shell">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">{lang === 'zh' ? '研究方向' : 'Research Directions'}</p>
              <h2 className="mt-3 text-3xl font-semibold text-gray-950 dark:text-white">
                {lang === 'zh' ? '医学、影像与智能系统' : 'Medicine, imaging, and intelligent systems'}
              </h2>
            </div>
            <Link href="/about" className="text-sm font-semibold text-primary hover:underline dark:text-teal-300">
              {lang === 'zh' ? '了解背景' : 'Read background'}
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {researchDirections.map((direction) => (
              <article key={text(direction.title, 'en')} className="panel min-h-[210px] p-6">
                <h3 className="text-lg font-semibold text-gray-950 dark:text-white">
                  {text(direction.title, lang)}
                </h3>
                <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
                  {text(direction.description, lang)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-white py-16 dark:border-gray-800 dark:bg-gray-950">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.2fr]">
            <div>
              <p className="eyebrow">{lang === 'zh' ? '写作与笔记' : 'Writing'}</p>
              <h2 className="mt-3 text-3xl font-semibold text-gray-950 dark:text-white">
                {lang === 'zh' ? '研究之外的学习记录' : 'Notes beyond the lab'}
              </h2>
            </div>
            <div className="divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-800 dark:border-gray-800">
              {writing.map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  className="group flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{post.topic}</p>
                    <h3 className="mt-1 text-lg font-semibold text-gray-950 group-hover:text-primary dark:text-white dark:group-hover:text-teal-300">
                      {post.title}
                    </h3>
                  </div>
                  <time className="text-sm text-gray-500 dark:text-gray-400">{post.date}</time>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
