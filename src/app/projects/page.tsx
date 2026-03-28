'use client'

import { useState } from 'react'
import { Github, ExternalLink, Code, Database, Brain } from 'lucide-react'
import Navigation from '@/components/Navigation'

const projects = [
  {
    id: 1,
    title: { en: 'EyeCLIP', zh: 'EyeCLIP' },
    description: {
      en: 'Innovative application of CLIP technology in ophthalmology, focusing on medical image analysis and diagnostic assistance.',
      zh: 'CLIP技术在眼科中的创新应用，专注于医学图像分析和诊断辅助。'
    },
    technologies: ['PyTorch', 'Deep Learning', 'Medical Imaging', 'CLIP'],
    github: 'https://github.com/irrrricardo/EyeCLIP-main',
    demo: null,
    icon: Eye
  },
  {
    id: 2,
    title: { en: 'FundusAge', zh: 'FundusAge' },
    description: {
      en: 'Deep learning model for age prediction from fundus images, exploring biomarkers in retinal photography.',
      zh: '基于眼底图像进行年龄预测的深度学习模型，探索视网膜摄影中的生物标志物。'
    },
    technologies: ['Python', 'CNN', 'Transfer Learning', 'Data Analysis'],
    github: 'https://github.com/irrrricardo/FundusAge',
    demo: null,
    icon: Brain
  },
  {
    id: 3,
    title: { en: 'RRWN', zh: 'RRWN' },
    description: {
      en: 'Recurrent Residual Weight Network for medical image segmentation and analysis.',
      zh: '用于医学图像分割和分析的循环残差加权网络。'
    },
    technologies: ['PyTorch', 'U-Net', 'Medical Imaging', 'Segmentation'],
    github: 'https://github.com/irrrricardo/rrwnet-main',
    demo: null,
    icon: Database
  }
]

function Eye(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

export default function Projects() {
  const [lang, setLang] = useState<'en' | 'zh'>('en')

  const content = {
    en: {
      title: 'Projects',
      subtitle: 'Research & Development',
      viewCode: 'View Code',
      viewDemo: 'Live Demo'
    },
    zh: {
      title: '项目',
      subtitle: '研究与开发',
      viewCode: '查看代码',
      viewDemo: '在线演示'
    }
  }

  const t = content[lang]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <Navigation />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              {t.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {t.subtitle}
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                {/* Project Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <project.icon className="w-16 h-16 text-white opacity-80" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                    {project.title[lang]}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {project.description[lang]}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      {t.viewCode}
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 mr-2" />
                        {t.viewDemo}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Language Toggle */}
          <div className="mt-12 text-center">
            <button
              onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
              className="px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {lang === 'en' ? '切换到中文' : 'Switch to English'}
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2024 irrrricardo. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
