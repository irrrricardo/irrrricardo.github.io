'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  currentDirections,
  profile,
  projects,
  publications,
  quickStats,
  researchApproach,
  researchDirections,
  writing,
} from '@/lib/profile';

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
      <section className="relative overflow-hidden bg-gray-950 text-white">
        <Image
          src="/images/background.jpg"
          alt="Peking University campus"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gray-950/72" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-gray-950 to-transparent" />

        <div className="section-shell relative z-10 min-h-[92svh] pt-28 pb-10">
          <div className="grid min-h-[68svh] items-center gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
            <div className="max-w-4xl">
              <p className="eyebrow text-teal-200">{text(profile.status, lang)}</p>
              <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                {profile.name}
              </h1>
              <p className="mt-5 max-w-3xl text-xl leading-8 text-gray-100 sm:text-2xl">
                {text(profile.headline, lang)}
              </p>
              <p className="mt-6 max-w-3xl text-base leading-8 text-gray-300">
                {text(profile.intro, lang)}
              </p>
              <p className="mt-5 inline-flex border border-teal-200/50 bg-teal-200/10 px-3 py-2 text-sm font-semibold text-teal-100">
                {text(profile.seeking, lang)}
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
              </div>
            </div>

            <aside className="border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-md">
              <div className="relative h-[320px] overflow-hidden border border-white/20 bg-gray-900 sm:h-[360px]">
                <Image
                  src="/images/github_selfie.jpeg"
                  alt={profile.name}
                  fill
                  className="object-cover"
                  sizes="360px"
                  priority
                />
              </div>
              <div className="mt-5 border-l border-teal-200/60 pl-4">
                <p className="text-sm font-semibold text-white">{text(profile.affiliation, lang)}</p>
                <p className="mt-2 text-sm text-gray-300">{text(profile.location, lang)}</p>
              </div>
            </aside>
          </div>

          <div className="mt-10 grid gap-3 border-t border-white/15 pt-6 sm:grid-cols-3">
            {quickStats.map((item) => (
              <div key={item.value} className="flex items-start gap-3">
                <span className="mt-2 h-px w-8 bg-teal-200" />
                <div>
                  <p className="text-lg font-semibold text-white">{item.value}</p>
                  <p className="mt-1 text-sm leading-5 text-gray-300">{text(item.label, lang)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-gray-200 bg-white py-16 dark:border-gray-800 dark:bg-gray-950">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="eyebrow">{lang === 'zh' ? '当前方向' : 'Current Direction'}</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-gray-950 dark:text-white">
                {lang === 'zh' ? '把 AI 系统放回真实医学和生物学语境' : 'Putting AI systems back into real medical and biological contexts'}
              </h2>
              <p className="mt-5 text-base leading-7 text-gray-600 dark:text-gray-300">
                {lang === 'zh'
                  ? 'PODE 是一个基本完成的论文阶段项目。接下来我更想沿着临床医学 Agentic AI、self-evolving agents 和 co-scientist 的方向，思考 AI 如何真正进入医学和生物研究。'
                  : 'PODE is now largely a manuscript-stage project. I am moving toward agentic AI systems for clinical medicine, self-evolving agents, and co-scientist workflows, with the broader question of how AI can genuinely enter medicine and biology.'}
              </p>
              <Link href="/projects" className="mt-6 inline-flex text-sm font-semibold text-primary hover:underline dark:text-teal-300">
                {lang === 'zh' ? '查看项目与实验入口' : 'Open projects and experiments'}
              </Link>
            </div>

            <div className="grid gap-4">
              {currentDirections.map((item, index) => (
                <article key={text(item.title, 'en')} className="panel p-5 transition-colors hover:border-primary dark:hover:border-teal-300">
                  <div className="grid gap-4 sm:grid-cols-[56px_1fr]">
                    <p className="text-sm font-semibold text-secondary dark:text-rose-300">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-950 dark:text-white">
                        {text(item.title, lang)}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                        {text(item.question, lang)}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 dark:bg-gray-950">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="eyebrow">{lang === 'zh' ? '阶段性成果' : 'Staged Work'}</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-gray-950 dark:text-white">
                {lang === 'zh' ? 'PODE 作为一个研究故事入口' : 'PODE as one research story'}
              </h2>
              <p className="mt-5 text-base leading-7 text-gray-600 dark:text-gray-300">
                {lang === 'zh'
                  ? '它仍然保留在项目页中，作为我从医学影像和生物年龄进入 AI + Medicine 问题的一条具体路径。'
                  : 'It remains on the projects page as one concrete path from medical imaging and biological age into broader AI + medicine questions.'}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <article className="panel-accent p-6">
                <p className="text-sm font-semibold text-secondary dark:text-rose-300">
                  {text(featuredProject.eyebrow, lang)}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-gray-950 dark:text-white">
                  {featuredProject.title}
                </h3>
                <p className="mt-3 text-sm font-semibold text-gray-700 dark:text-gray-200">
                  {text(featuredProject.tldr, lang)}
                </p>
                <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
                  {text(featuredProject.description, lang)}
                </p>
                <Link href="/projects" className="mt-5 inline-flex text-sm font-semibold text-primary hover:underline dark:text-teal-300">
                  {lang === 'zh' ? '在项目页查看详情' : 'Open project details'}
                </Link>
              </article>

              <article className="panel p-6">
                <p className="text-sm font-semibold text-primary dark:text-teal-300">
                  {text(featuredPublication.venue, lang)}
                </p>
                <h3 className="mt-3 text-xl font-semibold leading-7 text-gray-950 dark:text-white">
                  {featuredPublication.title}
                </h3>
                <p className="mt-3 text-sm font-semibold text-gray-700 dark:text-gray-200">
                  {text(featuredPublication.tldr, lang)}
                </p>
                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                  {text(featuredPublication.description, lang)}
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-white py-16 dark:border-gray-800 dark:bg-gray-950">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow">{lang === 'zh' ? '研究视角' : 'Research Lens'}</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-gray-950 dark:text-white">
                {lang === 'zh' ? '医学问题、智能体系统与生物学证据' : 'Medical questions, agentic systems, and biological evidence'}
              </h2>
              <p className="mt-5 text-base leading-7 text-gray-600 dark:text-gray-300">
                {lang === 'zh'
                  ? '基础医学训练让我更关注真实问题和生物学解释，经济学双学位则让我对异质性、群体结构和决策语境更敏感。'
                  : 'Basic medical training keeps real biological questions in view, while economics gives me a useful language for heterogeneity, population structure, and decision contexts.'}
              </p>
            </div>

            <div className="space-y-4">
              {researchApproach.map((item, index) => (
                <article key={text(item.title, 'en')} className="grid gap-4 border-l border-gray-300 pl-5 dark:border-gray-700 sm:grid-cols-[72px_1fr]">
                  <p className="text-sm font-semibold text-secondary dark:text-rose-300">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-950 dark:text-white">
                      {text(item.title, lang)}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                      {text(item.body, lang)}
                    </p>
                  </div>
                </article>
              ))}
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
                {lang === 'zh' ? '目前关心的几个问题' : 'Questions I keep returning to'}
              </h2>
            </div>
            <Link href="/about" className="text-sm font-semibold text-primary hover:underline dark:text-teal-300">
              {lang === 'zh' ? '了解背景' : 'Read background'}
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {researchDirections.map((direction) => (
              <article key={text(direction.title, 'en')} className="panel min-h-[230px] p-6">
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

      <section className="bg-white py-16 dark:bg-gray-950">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.2fr]">
            <div>
              <p className="eyebrow">{lang === 'zh' ? '写作与笔记' : 'Writing'}</p>
              <h2 className="mt-3 text-3xl font-semibold text-gray-950 dark:text-white">
                {lang === 'zh' ? '科研之外的学习记录' : 'Notes beyond the lab'}
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
