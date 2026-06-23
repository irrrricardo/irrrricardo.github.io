'use client';

import { useEffect, useState } from 'react';
import { collaborationTopics, profile, projects, publications } from '@/lib/profile';
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
  const [openProject, setOpenProject] = useState('');

  return (
    <>
      <section className="bg-white pt-20 pb-16 dark:bg-gray-950">
        <div className="section-shell">
          <p className="eyebrow">{t.subtitle}</p>
          <div className="mt-3 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <h1 className="text-4xl font-semibold leading-tight text-gray-950 dark:text-white sm:text-5xl">
              {t.title}
            </h1>
            <p className="max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-300">
              {lang === 'zh'
                ? '这里先给出项目名称和基本归属；点击项目后再查看研究问题、代码状态、链接和可复现边界。'
                : 'This page starts with project names and affiliations. Open each project to see the research question, code status, links, and reproducibility notes.'}
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-paper py-16 dark:border-gray-800 dark:bg-gray-950">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="eyebrow">{lang === 'zh' ? '项目索引' : 'Project Index'}</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-gray-950 dark:text-white">
                {lang === 'zh' ? '点击项目查看详情' : 'Open a project for details'}
              </h2>
              <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                {lang === 'zh'
                  ? '这样页面会更克制，也更符合学术主页的阅读习惯：先扫描研究线索，再决定是否展开。'
                  : 'The layout is meant for scanning first, then reading deeper only where useful.'}
              </p>
            </div>

            <div className="space-y-4">
              {projects.map((project) => {
                const isOpen = openProject === project.title;

                return (
                  <article
                    key={project.title}
                    className={`border bg-white shadow-sm dark:bg-gray-900 ${
                      isOpen
                        ? 'border-gray-300 dark:border-gray-700'
                        : 'border-gray-200 dark:border-gray-800'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenProject(isOpen ? '' : project.title)}
                      className="focus-ring flex w-full flex-col gap-4 px-6 py-5 text-left sm:flex-row sm:items-center sm:justify-between"
                      aria-expanded={isOpen}
                    >
                      <span>
                        <span className="block text-sm font-semibold text-primary dark:text-teal-300">
                          {text(project.eyebrow, lang)}
                        </span>
                        <span className="mt-2 block text-xl font-semibold text-gray-950 dark:text-white">
                          {project.title}
                        </span>
                        <span className="mt-2 block text-sm text-gray-500 dark:text-gray-400">
                          {project.lab}
                        </span>
                      </span>
                      <span className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <span>{project.period}</span>
                        <span className="flex h-8 w-8 items-center justify-center border border-gray-300 text-base font-semibold dark:border-gray-700">
                          {isOpen ? '-' : '+'}
                        </span>
                      </span>
                    </button>

                    {isOpen && (
                      <div className="border-t border-gray-200 px-6 py-6 dark:border-gray-800">
                        <div className="grid gap-6 lg:grid-cols-[1fr_220px]">
                          <div>
                            <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
                              {text(project.description, lang)}
                            </p>
                            {project.title === 'PODE' && (
                              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                                <div className="panel-accent p-4">
                                  <p className="text-xs font-semibold text-secondary dark:text-rose-300">
                                    {lang === 'zh' ? '研究问题' : 'Question'}
                                  </p>
                                  <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                                    {lang === 'zh'
                                      ? '疾病相关的年龄钟偏离，是否可以拆解为更具体的系统性生理信号？'
                                      : 'Can disease-associated age-clock deviations be decomposed into more specific systemic physiological signals?'}
                                  </p>
                                </div>
                                <div className="panel p-4">
                                  <p className="text-xs font-semibold text-primary dark:text-teal-300">
                                    {lang === 'zh' ? '公开内容' : 'Public release'}
                                  </p>
                                  <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                                    {lang === 'zh'
                                      ? '眼底与 BrainMRI 实现、manifest、模型卡、示例 schema、CI 和权重入口。'
                                      : 'Fundus and BrainMRI code, manifests, model-card metadata, schema examples, CI, and checkpoint references.'}
                                  </p>
                                </div>
                                <div className="panel p-4">
                                  <p className="text-xs font-semibold text-primary dark:text-teal-300">
                                    {lang === 'zh' ? '复现边界' : 'Reproducibility'}
                                  </p>
                                  <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                                    {lang === 'zh'
                                      ? '公开示例用于说明数据结构和运行入口；完整训练与验证依赖受限研究队列。'
                                      : 'Public examples document data shape and entry points; full training and validation still depend on restricted cohorts.'}
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>

                          <div className="space-y-4">
                            <TagList tags={project.tags} />
                            {project.links.length > 0 && (
                              <div className="flex flex-wrap gap-3">
                                {project.links.map((link) => (
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
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 dark:bg-gray-950">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="eyebrow">{lang === 'zh' ? '论文与研究发布' : 'Publications and Releases'}</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-gray-950 dark:text-white">
                {lang === 'zh' ? '当前公开成果' : 'Current public outputs'}
              </h2>
            </div>
            <div className="space-y-4">
              {publications.map((publication) => (
                <article key={publication.title} className="panel p-6">
                  <p className="text-sm font-semibold text-primary dark:text-teal-300">
                    {publication.year} · {text(publication.venue, lang)}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold leading-7 text-gray-950 dark:text-white">
                    {publication.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    {publication.authors}
                  </p>
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
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="eyebrow">{lang === 'zh' ? '交流方向' : 'Conversation Topics'}</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-gray-950 dark:text-white">
                {lang === 'zh' ? '适合继续聊的问题' : 'Topics worth continuing'}
              </h2>
            </div>
            <div className="space-y-3">
              {collaborationTopics.map((topic) => (
                <p
                  key={text(topic, 'en')}
                  className="border-l border-gray-300 pl-4 text-sm leading-6 text-gray-600 dark:border-gray-700 dark:text-gray-300"
                >
                  {text(topic, lang)}
                </p>
              ))}
              <a
                href={`mailto:${profile.email}`}
                className="focus-ring mt-4 inline-flex min-h-11 items-center justify-center border border-gray-950 px-5 py-2.5 text-sm font-semibold text-gray-950 transition-colors hover:bg-gray-950 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-gray-950"
              >
                {profile.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
