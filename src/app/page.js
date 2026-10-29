'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  currentDirections,
  profile,
  projects,
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

  return (
    <>
      <section className="relative overflow-hidden bg-gray-950 text-white">
        <Image src="/images/background.jpg" alt="Peking University campus" fill className="scale-[1.025] object-cover blur-[1px]" priority sizes="100vw" />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(2,6,23,0.92)_0%,rgba(2,6,23,0.76)_54%,rgba(15,23,42,0.55)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

        <div className="section-shell relative z-10 min-h-[92svh] pt-28 pb-10">
          <div className="grid min-h-[68svh] items-center gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
            <div className="max-w-4xl">
              <p className="eyebrow text-blue-200">{text(profile.status, lang)}</p>
              <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[1.04] sm:text-6xl lg:text-7xl">{profile.name}</h1>
              <p className="mt-5 max-w-3xl text-xl leading-8 text-gray-100 sm:text-2xl">{text(profile.headline, lang)}</p>
              <p className="mt-6 max-w-3xl text-base leading-8 text-gray-300">{text(profile.intro, lang)}</p>
              <p className="mt-5 inline-flex rounded-full border border-blue-200/30 bg-blue-100/[0.08] px-4 py-2 text-sm font-medium text-blue-100 backdrop-blur-md">{text(profile.seeking, lang)}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/projects" className="button-hero-primary">{lang === 'zh' ? '查看研究项目' : 'View Research'} <span aria-hidden="true">→</span></Link>
                <a href={profile.resumePdf} target="_blank" rel="noopener noreferrer" className="button-hero-secondary">{lang === 'zh' ? '下载简历' : 'Download CV'}</a>
              </div>
            </div>

            <aside className="glass-panel p-4">
              <div className="relative h-[320px] overflow-hidden rounded-xl border border-white/15 bg-gray-900 sm:h-[360px]">
                <Image src="/images/ricardo-portrait-illustration.jpg" alt={`Illustrated portrait of ${profile.name}`} fill className="object-cover transition duration-700 ease-out hover:scale-[1.025]" sizes="360px" priority />
              </div>
              <div className="mt-5 border-l border-blue-200/60 pl-4">
                <p className="text-sm font-semibold text-white">{text(profile.affiliation, lang)}</p>
                <p className="mt-2 text-sm text-gray-300">{text(profile.location, lang)}</p>
              </div>
            </aside>
          </div>

          <div className="mt-10 grid gap-4 border-t border-white/15 pt-6 sm:grid-cols-2">
            {quickStats.map((item) => (
              <div key={item.value} className="flex items-start gap-3 rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 backdrop-blur-sm">
                <span className="mt-2 h-px w-8 bg-blue-200" />
                <div><p className="text-lg font-semibold text-white">{item.value}</p><p className="mt-1 text-sm leading-5 text-gray-300">{text(item.label, lang)}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-gray-200 bg-white py-20 dark:border-gray-800 dark:bg-gray-950">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="eyebrow">{lang === 'zh' ? '当前工作' : 'Current Work'}</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-gray-950 dark:text-white">{lang === 'zh' ? 'AI 科学智能体、虚拟细胞与模型评价' : 'AI co-scientists, virtual cells, and model evaluation'}</h2>
              <p className="mt-5 text-base leading-7 text-gray-600 dark:text-gray-300">
                {lang === 'zh'
                  ? '我目前主要研究 AI co-scientist 的科学记忆与证据组织，并探索智能体如何结合单细胞和虚拟细胞模型开展扰动推理与实验选择。同时，我参与临床世界模型的反事实能力与外部试验评价。'
                  : 'I currently study scientific memory and evidence organization for AI co-scientists, while exploring how agents can work with single-cell and virtual-cell models for perturbation reasoning and experiment selection. I also evaluate counterfactual behavior in clinical world models against external trials.'}
              </p>
              <Link href="/projects" className="mt-6 inline-flex text-sm font-semibold text-primary hover:underline dark:text-blue-300">{lang === 'zh' ? '查看项目详情' : 'View project details'}</Link>
            </div>
            <div className="grid gap-4">
              {currentDirections.map((item, index) => (
                <article key={text(item.title, 'en')} className="panel p-5 hover:-translate-y-1 hover:border-primary dark:hover:border-blue-300">
                  <div className="grid gap-4 sm:grid-cols-[56px_1fr]">
                    <p className="text-sm font-semibold text-secondary">{String(index + 1).padStart(2, '0')}</p>
                    <div><h3 className="text-lg font-semibold text-gray-950 dark:text-white">{text(item.title, lang)}</h3><p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">{text(item.question, lang)}</p></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="soft-section py-20">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="eyebrow">{lang === 'zh' ? '代表性工作' : 'Representative Work'}</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-gray-950 dark:text-white">{lang === 'zh' ? 'PODE：视网膜影像与生物年龄' : 'PODE: retinal imaging and biological age'}</h2>
              <p className="mt-5 text-base leading-7 text-gray-600 dark:text-gray-300">{lang === 'zh' ? '该项目从眼底影像出发，研究疾病相关的年龄偏离是否能够分解为更具体、可解释的生理信号。' : 'This project uses retinal fundus images to study whether disease-associated age deviations can be decomposed into more specific and interpretable physiological signals.'}</p>
            </div>
            <div>
              <article className="panel-accent p-6">
                <p className="text-sm font-semibold text-secondary">{text(featuredProject.eyebrow, lang)}</p>
                <h3 className="mt-3 text-2xl font-semibold text-gray-950 dark:text-white">{featuredProject.title}</h3>
                <p className="mt-3 text-sm font-semibold text-gray-700 dark:text-gray-200">{text(featuredProject.tldr, lang)}</p>
                <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">{text(featuredProject.description, lang)}</p>
                <Link href="/projects" className="mt-5 inline-flex text-sm font-semibold text-primary hover:underline dark:text-blue-300">{lang === 'zh' ? '在项目页查看详情' : 'Open project details'}</Link>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-white py-20 dark:border-gray-800 dark:bg-gray-950">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow">{lang === 'zh' ? '研究视角' : 'Research Lens'}</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-gray-950 dark:text-white">{lang === 'zh' ? '从生物机制到计算设计' : 'From biological mechanisms to computational design'}</h2>
              <p className="mt-5 text-base leading-7 text-gray-600 dark:text-gray-300">{lang === 'zh' ? '基础医学训练让我从分子、细胞与系统层面理解生物学问题；经济学训练则补充了对异质性、因果解释和决策的认识。' : 'Basic medical training helps me frame biological questions across molecular, cellular, and systems levels; economics adds a perspective on heterogeneity, causal interpretation, and decision-making.'}</p>
            </div>
            <div className="space-y-4">
              {researchApproach.map((item, index) => (
                <article key={text(item.title, 'en')} className="grid gap-4 border-l border-gray-300 pl-5 dark:border-gray-700 sm:grid-cols-[72px_1fr]">
                  <p className="text-sm font-semibold text-secondary">{String(index + 1).padStart(2, '0')}</p>
                  <div><h3 className="text-lg font-semibold text-gray-950 dark:text-white">{text(item.title, lang)}</h3><p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">{text(item.body, lang)}</p></div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="soft-section py-20">
        <div className="section-shell">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div><p className="eyebrow">{lang === 'zh' ? '长期研究目标' : 'Long-term Research Goal'}</p><h2 className="mt-3 text-3xl font-semibold text-gray-950 dark:text-white">{lang === 'zh' ? '从分子设计到多尺度生物系统' : 'From molecular design to multiscale biological systems'}</h2></div>
            <Link href="/about" className="text-sm font-semibold text-primary hover:underline dark:text-blue-300">{lang === 'zh' ? '了解背景' : 'Read background'}</Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {researchDirections.map((direction) => (
              <article key={text(direction.title, 'en')} className="panel min-h-[210px] p-6 hover:-translate-y-1"><h3 className="text-lg font-semibold text-gray-950 dark:text-white">{text(direction.title, lang)}</h3><p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">{text(direction.description, lang)}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-gray-950">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.2fr]">
            <div><p className="eyebrow">{lang === 'zh' ? '写作与笔记' : 'Writing'}</p><h2 className="mt-3 text-3xl font-semibold text-gray-950 dark:text-white">{lang === 'zh' ? '科研之外的学习记录' : 'Notes beyond the lab'}</h2></div>
            <div className="divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-800 dark:border-gray-800">
              {writing.map((post) => (
                <Link key={post.href} href={post.href} className="group flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between">
                  <div><p className="text-sm text-gray-500 dark:text-gray-400">{text(post.topic, lang)}</p><h3 className="mt-1 text-lg font-semibold text-gray-950 group-hover:text-primary dark:text-white dark:group-hover:text-blue-300">{text(post.title, lang)}</h3></div>
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
