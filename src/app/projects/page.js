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

function TagList({ tags, compact = false }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className={`border border-gray-200 bg-paper font-medium text-gray-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 ${
            compact ? 'px-2 py-0.5 text-[11px]' : 'px-2.5 py-1 text-xs'
          }`}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function ProjectDossier({ project, lang, isOpen, onToggle }) {
  return (
    <article
      className={`group overflow-hidden border bg-white shadow-sm transition-all duration-300 dark:bg-gray-900 ${
        isOpen
          ? 'border-gray-300 shadow-md dark:border-gray-700'
          : 'border-gray-200 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md dark:border-gray-800 dark:hover:border-gray-700'
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="focus-ring grid w-full gap-5 px-6 py-5 text-left md:grid-cols-[minmax(0,1fr)_180px] md:items-center"
        aria-expanded={isOpen}
      >
        <span>
          <span className="block text-sm font-semibold text-primary dark:text-teal-300">
            {text(project.eyebrow, lang)}
          </span>
          <span className="mt-2 block text-2xl font-semibold leading-tight text-gray-950 dark:text-white">
            {project.title}
          </span>
          <span className="mt-2 block text-sm text-gray-500 dark:text-gray-400">
            {project.lab}
          </span>
          <span className="mt-4 block">
            <TagList tags={project.tags.slice(0, 3)} compact />
          </span>
        </span>

        <span className="flex items-center justify-between gap-4 border-t border-gray-200 pt-4 text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400 md:block md:border-t-0 md:pt-0 md:text-right">
          <span className="block font-medium">{project.period}</span>
          <span className="mt-0 inline-flex items-center gap-2 font-semibold text-primary dark:text-teal-300 md:mt-4">
            {isOpen ? (lang === 'zh' ? '收起详情' : 'Hide details') : (lang === 'zh' ? '查看详情' : 'Open details')}
            <span
              className={`inline-flex h-6 w-6 items-center justify-center border border-primary text-sm transition-transform duration-300 dark:border-teal-300 ${
                isOpen ? 'rotate-90' : ''
              }`}
              aria-hidden="true"
            >
              &gt;
            </span>
          </span>
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div
            className={`border-t border-gray-200 px-6 py-6 transition-opacity duration-300 dark:border-gray-800 ${
              isOpen ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden={!isOpen}
          >
            <div className="grid gap-6 lg:grid-cols-[1fr_240px]">
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
                        {lang === 'zh' ? '项目内容' : 'Project contents'}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                        {lang === 'zh'
                          ? '眼底与 BrainMRI 实现、manifest、模型卡、示例 schema、CI 和权重入口。'
                          : 'Fundus and BrainMRI code, manifests, model-card metadata, schema examples, CI, and checkpoint references.'}
                      </p>
                    </div>
                    <div className="panel p-4">
                      <p className="text-xs font-semibold text-primary dark:text-teal-300">
                        {lang === 'zh' ? '数据说明' : 'Data access'}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                        {lang === 'zh'
                          ? '示例用于说明数据结构和运行入口；完整队列分析依赖受限研究数据。'
                          : 'Examples document data shape and entry points; full cohort-level analyses require restricted research data.'}
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
        </div>
      </div>
    </article>
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
                ? '这里整理目前公开的项目和研究记录。项目名称保持清晰，具体说明、数据限制和链接放在展开后的详情里。'
                : 'A focused index of public projects and research notes, with details, data notes, and links available inside each project dossier.'}
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
                {lang === 'zh' ? '研究项目与阶段性工作' : 'Research projects and staged work'}
              </h2>
              <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                {lang === 'zh'
                  ? 'PODE 作为论文阶段项目保留在这里。新的关注点会逐步转向临床医学中的 agentic AI、self-evolving agents 和 co-scientist。'
                  : 'PODE remains here as manuscript-stage work, while my newer interests move toward agentic AI for clinical medicine, self-evolving agents, and co-scientist workflows.'}
              </p>
            </div>

            <div className="space-y-4">
              {projects.map((project) => {
                const isOpen = openProject === project.title;

                return (
                  <ProjectDossier
                    key={project.title}
                    project={project}
                    lang={lang}
                    isOpen={isOpen}
                    onToggle={() => setOpenProject(isOpen ? '' : project.title)}
                  />
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
              <p className="eyebrow">{lang === 'zh' ? '论文与研究记录' : 'Publications and Notes'}</p>
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
