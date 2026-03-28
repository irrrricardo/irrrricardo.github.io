'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail, Download, ChevronDown, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'

export default function Home() {
  const [lang, setLang] = useState<'en' | 'zh'>('en')

  const content = {
    en: {
      title: 'irrrricardo',
      subtitle: 'Peking University | Basic Medicine & Economics | Deep Learning Researcher',
      description: 'Exploring the intersection of AI and healthcare. Passionate about applying deep learning techniques to solve complex challenges in the medical field.',
      contactBtn: 'Contact Me',
      downloadBtn: 'Download Resume',
      exploreBtn: 'Explore My Work',
      scrollHint: 'Scroll to explore'
    },
    zh: {
      title: 'irrrricardo',
      subtitle: '北京大学 | 基础医学 & 经济学 | 深度学习研究者',
      description: '探索人工智能与医疗健康的交叉领域。热衷于将深度学习技术应用于解决医学领域的复杂挑战。',
      contactBtn: '联系我',
      downloadBtn: '下载简历',
      exploreBtn: '开始探索',
      scrollHint: '向下滚动'
    }
  }

  const t = content[lang]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden shadow-xl ring-4 ring-blue-500/20">
                <img
                  src="/images/github_selfie.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white"
            >
              {t.title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl md:text-3xl mb-4 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text"
            >
              {t.subtitle}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl leading-relaxed radiant-text"
            >
              {t.description}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                {t.contactBtn}
              </Link>

              <a
                href="/resume.pdf"
                target="_blank"
                className="inline-flex items-center px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-semibold hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                {t.downloadBtn}
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex space-x-6 mb-12"
            >
              <a
                href="https://github.com/irrrricardo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-8 h-8" />
              </a>

              <a
                href="https://linkedin.com/in/irrrricardo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-8 h-8" />
              </a>

              <a
                href="https://twitter.com/irrrricardo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-400 dark:text-gray-400 dark:hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-8 h-8" />
              </a>
            </motion.div>

            {/* Language Toggle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mb-8"
            >
              <button
                onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
                className="px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {lang === 'en' ? '切换到中文' : 'Switch to English'}
              </button>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="animate-bounce"
            >
              <ChevronDown className="w-8 h-8 text-gray-400 dark:text-gray-600" />
              <span className="sr-only">{t.scrollHint}</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            {lang === 'en' ? 'Explore' : '探索'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Card */}
            <Link
              href="/about"
              className="group p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">👨‍🔬</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                {lang === 'en' ? 'About Me' : '关于我'}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {lang === 'en' 
                  ? 'Learn more about my background and research interests' 
                  : '了解更多关于我的背景和研究兴趣'}
              </p>
              <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400">
                <span className="mr-2">{lang === 'en' ? 'Learn more' : '了解更多'}</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Projects Card */}
            <Link
              href="/projects"
              className="group p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-gray-800 dark:to-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                {lang === 'en' ? 'Projects' : '项目'}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {lang === 'en' 
                  ? 'Check out my research projects and publications' 
                  : '查看我的研究项目和发表成果'}
              </p>
              <div className="mt-4 flex items-center text-purple-600 dark:text-purple-400">
                <span className="mr-2">{lang === 'en' ? 'View projects' : '查看项目'}</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Blog Card */}
            <Link
              href="/blog"
              className="group p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-800 dark:to-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                {lang === 'en' ? 'Blog' : '博客'}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {lang === 'en' 
                  ? 'Read my thoughts on AI, healthcare, and technology' 
                  : '阅读我关于人工智能、医疗健康和技术的思考'}
              </p>
              <div className="mt-4 flex items-center text-green-600 dark:text-green-400">
                <span className="mr-2">{lang === 'en' ? 'Read blog' : '阅读博客'}</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

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
