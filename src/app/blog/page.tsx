'use client'

import { useState } from 'react'
import { Calendar, User, Tag, ArrowRight } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Link from 'next/link'

const posts = [
  {
    id: 1,
    title: { en: 'Getting Started with Deep Learning in Medical Imaging', zh: '医学影像深度学习入门' },
    excerpt: {
      en: 'A comprehensive guide to applying deep learning techniques in medical imaging analysis.',
      zh: '医学影像分析中应用深度学习技术的综合指南。'
    },
    date: '2024-01-15',
    author: 'irrrricardo',
    tags: ['Deep Learning', 'Medical Imaging', 'Tutorial'],
    slug: 'deep-learning-medical-imaging'
  },
  {
    id: 2,
    title: { en: 'My Journey at Peking University', zh: '我在北大的求学之路' },
    excerpt: {
      en: 'Sharing my experiences and insights from studying at PKU.',
      zh: '分享我在北大求学的经历和感悟。'
    },
    date: '2024-01-10',
    author: 'irrrricardo',
    tags: ['Life', 'Education', 'Experience'],
    slug: 'pku-journey'
  },
  {
    id: 3,
    title: { en: 'The Future of AI in Healthcare', zh: '人工智能在医疗领域的未来' },
    excerpt: {
      en: 'Exploring the potential and challenges of AI in modern healthcare.',
      zh: '探讨人工智能在现代医疗中的潜力与挑战。'
    },
    date: '2024-01-05',
    author: 'irrrricardo',
    tags: ['AI', 'Healthcare', 'Future'],
    slug: 'ai-healthcare-future'
  }
]

export default function Blog() {
  const [lang, setLang] = useState<'en' | 'zh'>('en')

  const content = {
    en: {
      title: 'Blog',
      subtitle: 'Thoughts & Insights',
      readMore: 'Read More',
      allPosts: 'All Posts'
    },
    zh: {
      title: '博客',
      subtitle: '思考与见解',
      readMore: '阅读更多',
      allPosts: '所有文章'
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
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {t.subtitle}
            </p>
          </div>

          {/* Blog Posts */}
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium flex items-center"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {post.title[lang]}
                  </h2>
                </Link>

                {/* Excerpt */}
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {post.excerpt[lang]}
                </p>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    {post.author}
                  </span>
                </div>

                {/* Read More Button */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                >
                  {t.readMore}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </article>
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
