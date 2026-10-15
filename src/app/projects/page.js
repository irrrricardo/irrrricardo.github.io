'use client';

import { useEffect, useState } from 'react';
import { collaborationTopics, profile, projects } from '@/lib/profile';
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
  return <div className="flex flex-wrap gap-2">{tags.map((tag) => <span key={tag} className={`tag ${compact ? 'px-2 py-0.5 text-[11px]' : 'px-2.5 py-1 text-xs'}`}>{tag}</span>)}</div>;
}

function ProjectDossier({ project, lang, isOpen, onToggle }) {
  return (
    <article className={`group overflow-hidden rounded-2xl border bg-white/90 shadow-sm backdrop-blur-sm transition-all duration-300 dark:bg-gray-900/85 ${isOpen ? 'border-gray-300 shadow-lg dark:border-gray-700' : 'border-gray-200 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg dark:border-gray-800 dark:hover:border-gray-700'}`}>
      <button type="button" onClick={onToggle} className="focus-ring grid w-full gap-5 px-6 py-5 text-left md:grid-cols-[minmax(0,1fr)_180px] md:items-center" aria-expanded={isOpen}>
        <span>
          <span className="block text-sm font-semibold text-primary dark:text-blue-300">{text(project.eyebrow, lang)}</span>
          <span className="mt-2 block text-2xl font-semibold leading-tight text-gray-950 dark:text-white">{project.title}</span>
          <span className="mt-2 block text-sm text-gray-500 dark:text-gray-400">{project.lab}</span>
          <span className="mt-4 block"><TagList tags={project.tags.slice(0, 3)} compact /></span>
        </span>
        <span className="flex items-center justify-between gap-4 border-t border-gray-200 pt-4 text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400 md:block md:border-t-0 md:pt-0 md:text-right">
          <span className="block font-medium">{project.period}</span>
          <span className="mt-1 block text-xs">{text(project.status, lang)}</span>
          <span className="mt-0 inline-flex items-center gap-2 font-semibold text-primary dark:text-blue-300 md:mt-4">
            {isOpen ? (lang === 'zh' ? '收起详情' : 'Hide details') : (lang === 'zh' ? '查看详情' : 'Open details')}
            <span className={`inline-flex h-7 w-7 items-center justify-center rounded-full border border-primary text-sm transition-transform duration-300 dark:border-blue-300 ${isOpen ? 'rotate-90' : ''}`} aria-hidden="true">&gt;</span>
          </span>
        </span>
      </button>
      <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <div className={`border-t border-gray-200 px-6 py-6 transition-opacity duration-300 dark:border-gray-800 ${isOpen ? 'opacity-100' : 'opacity-0'}`} aria-hidden={!isOpen}>
            <div className="grid gap-6 lg:grid-cols-[1fr_240px]">
              <div>
                <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">{text(project.description, lang)}</p>
                <p className="mt-4 border-l border-gray-300 pl-4 text-sm font-semibold leading-6 text-gray-700 dark:border-gray-700 dark:text-gray-200">{text(project.tldr, lang)}</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="panel-accent p-4"><p className="text-xs font-semibold text-secondary">{lang === 'zh' ? '研究问题' : 'Question'}</p><p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">{text(project.question, lang)}</p></div>
                  <div className="panel p-4"><p className="text-xs font-semibold text-primary dark:text-blue-300">{lang === 'zh' ? '个人工作' : 'Contribution'}</p><p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">{text(project.contribution, lang)}</p></div>
                </div>
                {project.title === 'PODE' && <p className="mt-4 text-xs leading-5 text-gray-500 dark:text-gray-400">{lang === 'zh' ? '公开仓库提供眼底与 BrainMRI 实现、模型卡、示例结构、CI 与权重入口；完整分析依赖受限研究数据。' : 'The public repository includes fundus and BrainMRI implementations, model-card metadata, schema examples, CI, and checkpoint references; full analyses require restricted research data.'}</p>}
              </div>
              <div className="space-y-4">
                <TagList tags={project.tags} />
                {project.links.length > 0 && <div className="flex flex-wrap gap-3">{project.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="button-secondary border-primary text-primary dark:border-blue-300 dark:text-blue-300">{link.label} <span aria-hidden="true">↗</span></a>)}</div>}
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
      <section className="bg-white pb-20 pt-24 dark:bg-gray-950"><div className="section-shell"><p className="eyebrow">{t.subtitle}</p><div className="mt-3 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end"><h1 className="text-4xl font-semibold leading-tight text-gray-950 dark:text-white sm:text-5xl">{t.title}</h1><p className="max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-300">{lang === 'zh' ? '这里按项目整理我的研究经历。论文状态、代码和公开材料直接放在对应项目中，项目描述区分团队方法与个人工作。' : 'This page organizes my research by project. Manuscript status, code, and public materials appear with each project, while team methods and my own contributions are described separately.'}</p></div></div></section>

      <section className="soft-section border-y border-gray-200 py-20 dark:border-gray-800"><div className="section-shell"><div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
        <div><p className="eyebrow">{lang === 'zh' ? '研究项目' : 'Research Projects'}</p><h2 className="mt-3 text-3xl font-semibold leading-tight text-gray-950 dark:text-white">{lang === 'zh' ? '代表性研究与在研工作' : 'Selected research and ongoing work'}</h2><p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">{lang === 'zh' ? '研究覆盖生物衰老表征、科学记忆、多组学发现、临床世界模型和 AI 辅助医学教育。' : 'The work spans biological-aging representations, scientific memory, multi-omics discovery, clinical world models, and AI-assisted medical education.'}</p></div>
        <div className="space-y-4">{projects.map((project) => { const isOpen = openProject === project.title; return <ProjectDossier key={project.title} project={project} lang={lang} isOpen={isOpen} onToggle={() => setOpenProject(isOpen ? '' : project.title)} />; })}</div>
      </div></div></section>

      <section className="border-t border-gray-200 bg-white py-20 dark:border-gray-800 dark:bg-gray-950"><div className="section-shell"><div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
        <div><p className="eyebrow">{lang === 'zh' ? '交流方向' : 'Conversation Topics'}</p><h2 className="mt-3 text-3xl font-semibold leading-tight text-gray-950 dark:text-white">{lang === 'zh' ? '适合继续交流的问题' : 'Topics for further conversation'}</h2></div>
        <div className="space-y-3">{collaborationTopics.map((topic) => <p key={text(topic, 'en')} className="rounded-r-lg border-l-2 border-gray-300 bg-gray-50/60 py-2 pl-4 pr-3 text-sm leading-6 text-gray-600 transition-colors hover:border-primary hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900/40 dark:text-gray-300 dark:hover:border-blue-300">{text(topic, lang)}</p>)}<a href={`mailto:${profile.email}`} className="button-primary mt-4">{profile.email} <span aria-hidden="true">→</span></a></div>
      </div></div></section>
    </>
  );
}
