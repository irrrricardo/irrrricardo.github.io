'use client';

import { useState, useEffect } from 'react';
import { translations } from '@/lib/translations';

export default function ProjectsPage() {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('lang') || 'en';
    setLang(savedLang);
    const handleLangChange = () => setLang(localStorage.getItem('lang') || 'en');
    window.addEventListener('langChange', handleLangChange);
    return () => window.removeEventListener('langChange', handleLangChange);
  }, []);

  const t = translations[lang].projects;

  const publications = [
    {
      title: 'Disentangling physiological heterogeneity in retinal aging using a deep learning–based biological age framework',
      doi: 'https://doi.org/10.64898/2026.02.13.26346265',
      year: '2026',
      tags: ['Deep Learning', 'Aging', 'Retinal Imaging', 'AI4Med'],
    },
  ];

  const projects = [
    {
      title: 'Coming soon...',
      description: 'More projects to be added.',
      tags: [],
    },
  ];

  return (
    <>
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">{t.title}</h1>
        <p className="text-lg text-white/90">{t.subtitle}</p>
      </section>

      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="max-w-4xl mx-auto">
          {/* Publications Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              📚 Publications
            </h2>
            <div className="space-y-4">
              {publications.map((pub, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700"
                >
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                    {pub.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {pub.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <span>{pub.year}</span>
                    <a 
                      href={pub.doi} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      DOI Link →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              🚀 Research Projects
            </h2>
            <div className="space-y-4">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700"
                >
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
