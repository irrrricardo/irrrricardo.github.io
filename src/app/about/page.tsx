'use client'

import { useState } from 'react'
import { Brain, Cpu, Database, GraduationCap, Award, Mail } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Link from 'next/link'

export default function About() {
  const [lang, setLang] = useState<'en' | 'zh'>('en')

  const content = {
    en: {
      title: 'About Me',
      intro: `I am irrrricardo, a student at Peking University's School of Basic Medical Sciences, pursuing degrees in Basic Medicine and Economics. My primary research interest lies in the innovative application of deep learning techniques to solve complex challenges in the medical field.`,
      interests: 'Beyond academics and research, I am an avid skier, embracing the thrill and precision of the sport. I am driven by a passion for learning and a commitment to leveraging technology for impactful solutions.',
      researchTitle: 'Research Focus',
      interestsList: [
        'Deep Learning in Medical Imaging',
        'AI for Diagnostics & Prognostics',
        'Healthcare Data Analytics'
      ],
      educationTitle: 'Education',
      education: {
        degree: 'Basic Medicine',
        school: 'Peking University',
        year: 'Class of 2022'
      },
      skillsTitle: 'Technical Skills',
      contactBtn: 'Get in Touch'
    },
    zh: {
      title: '关于我',
      intro: '我是irrrricardo，就读于北京大学基础医学院，主修基础医学与经济学双学位。我的主要研究兴趣在于将深度学习技术创新性地应用于解决医学领域的复杂挑战。',
      interests: '学术和研究之余，我是一名滑雪爱好者，享受这项运动带来的刺激与精准。我对学习充满热情，并致力于利用技术创造有影响力的解决方案。',
      researchTitle: '研究重点',
      interestsList: [
        '深度学习在医学影像中的应用',
        '人工智能辅助诊断与预后',
        '医疗健康数据分析'
      ],
      educationTitle: '教育背景',
      education: {
        degree: '基础医学',
        school: '北京大学',
        year: '2022级'
      },
      skillsTitle: '技术技能',
      contactBtn: '联系我'
    }
  }

  const t = content[lang]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <Navigation />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              {t.title}
            </h1>
          </div>

          {/* Introduction */}
          <section className="mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {t.intro}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {t.interests}
              </p>
            </div>
          </section>

          {/* Research Focus */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
              <Brain className="w-8 h-8 mr-3 text-blue-500" />
              {t.researchTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.interestsList.map((interest, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start">
                    {index === 0 && <Cpu className="w-6 h-6 mr-3 text-blue-500 flex-shrink-0" />}
                    {index === 1 && <Database className="w-6 h-6 mr-3 text-purple-500 flex-shrink-0" />}
                    {index === 2 && <Brain className="w-6 h-6 mr-3 text-green-500 flex-shrink-0" />}
                    <p className="text-gray-700 dark:text-gray-300">{interest}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
              <GraduationCap className="w-8 h-8 mr-3 text-purple-500" />
              {t.educationTitle}
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {t.education.degree}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">
                    {t.education.school}
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-semibold">
                    {t.education.year}
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
              <Award className="w-8 h-8 mr-3 text-green-500" />
              {t.skillsTitle}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Python', 'PyTorch', 'TensorFlow', 'Deep Learning', 'Machine Learning', 'Data Analysis', 'Medical Imaging', 'Git'].map((skill) => (
                <div
                  key={skill}
                  className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-shadow"
                >
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              {t.contactBtn}
            </Link>
          </section>

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
