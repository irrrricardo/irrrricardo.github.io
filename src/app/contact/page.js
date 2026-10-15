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
    { label: lang === 'zh' ? '北大邮箱' : 'PKU Email', href: `mailto:${profile.email}`, value: profile.email },
    { label: lang === 'zh' ? '个人邮箱' : 'Personal Email', href: `mailto:${profile.personalEmail}`, value: profile.personalEmail },
    { label: lang === 'zh' ? '微信' : 'WeChat', value: profile.wechat },
    { label: 'GitHub', href: profile.github, value: 'github.com/irrrricardo' },
    { label: 'LinkedIn', href: profile.linkedin, value: 'linkedin.com/in/renxiang-chu' },
    { label: 'CV', href: profile.resumePdf, value: lang === 'zh' ? 'PDF 简历' : 'PDF CV' },
  ];

  return (
    <>
      <section className="bg-white pb-20 pt-24 dark:bg-gray-950">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            {t.subtitle && <p className="eyebrow">{t.subtitle}</p>}
            <h1 className="text-4xl font-semibold leading-tight text-gray-950 dark:text-white sm:text-5xl">{t.title}</h1>
          </div>
          <div className="max-w-2xl space-y-4 text-base leading-7 text-gray-600 dark:text-gray-300">
            <p>
              {lang === 'zh'
                ? '如果你从事蛋白质、RNA 或分子生成，智能体辅助科学发现，或从细胞扰动到患者轨迹的生物系统建模，欢迎联系。我正在准备 2027 Fall 博士项目申请。'
                : 'I welcome conversations about generative AI for proteins, RNA, and molecules; agent-assisted scientific discovery; and biological modeling from cellular perturbations to patient trajectories. I am preparing applications to PhD programs for Fall 2027.'}
            </p>
            <p>
              {lang === 'zh'
                ? '我目前在华盖资本医疗器械与科技团队实习，关注 AI for Biology 与前沿生物技术的行业研究和技术尽调；也欢迎交流相关的初创公司、投资研究与后续实习机会。'
                : 'I currently intern with Huagai Capital’s Medical Devices & Technology team, focusing on industry research and technical diligence in AI for biology and frontier biotechnology. I also welcome conversations about related startups, investment research, and future internships.'}
            </p>
            <p>
              {lang === 'zh'
                ? '也欢迎交朋友，想聊什么都可以。'
                : 'Open to friends—feel free to reach out about anything.'}
            </p>
          </div>
        </div>
      </section>

      <section className="soft-section border-y border-gray-200 py-20 dark:border-gray-800">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="eyebrow">{lang === 'zh' ? '联系信息' : 'Contact Links'}</p>
            <h2 className="mt-3 text-3xl font-semibold text-gray-950 dark:text-white">{profile.name}</h2>
            <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">{text(profile.affiliation, lang)}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {links.map((link) => link.href ? (
              <a key={link.label} href={link.href} target={link.href.startsWith('http') || link.href.endsWith('.pdf') ? '_blank' : undefined} rel={link.href.startsWith('http') || link.href.endsWith('.pdf') ? 'noopener noreferrer' : undefined} className="panel group block p-6 hover:-translate-y-1 hover:border-primary dark:hover:border-blue-300">
                <p className="text-sm font-semibold text-primary dark:text-blue-300">{link.label}</p>
                <p className="mt-3 break-words text-lg font-semibold text-gray-950 group-hover:text-primary dark:text-white dark:group-hover:text-blue-300">{link.value}</p>
              </a>
            ) : (
              <div key={link.label} className="panel p-6">
                <p className="text-sm font-semibold text-primary dark:text-blue-300">{link.label}</p>
                <p className="mt-3 break-words text-lg font-semibold text-gray-950 dark:text-white">{link.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-gray-950">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="eyebrow">{lang === 'zh' ? '适合交流的话题' : 'Good Topics'}</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-gray-950 dark:text-white">{lang === 'zh' ? '目前关注的问题' : 'Topics I am currently working on'}</h2>
            </div>
            <div className="space-y-4">
              {collaborationTopics.map((topic) => (
                <article key={text(topic, 'en')} className="panel-accent p-5"><p className="text-sm leading-6 text-gray-700 dark:text-gray-300">{text(topic, lang)}</p></article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="soft-section border-t border-gray-200 py-20 dark:border-gray-800">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="eyebrow">{lang === 'zh' ? '研究方向' : 'Research Areas'}</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-gray-950 dark:text-white">{lang === 'zh' ? '研究背景概览' : 'A brief overview of my work'}</h2>
            </div>
            <div className="space-y-4">
              {researchDirections.map((direction) => (
                <article key={text(direction.title, 'en')} className="border-l border-gray-300 pl-5 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-950 dark:text-white">{text(direction.title, lang)}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">{text(direction.description, lang)}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
