import Link from 'next/link';
import { localized } from '@/lib/notes';

export default function BlogCard({ post, lang }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(lang === 'zh' ? 'zh-CN' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="panel p-6 group-hover:-translate-y-1 group-hover:border-primary dark:group-hover:border-blue-300">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          <div className="flex items-center gap-3 text-sm">
            <span className="font-semibold text-primary dark:text-blue-300">{localized(post.category, lang)}</span>
            <span className="text-gray-300 dark:text-gray-700" aria-hidden="true">/</span>
            <time className="text-gray-500 dark:text-gray-400">{formatDate(post.date)}</time>
          </div>
          {post.tags && (
            <div className="flex flex-wrap gap-2">
              {localized(post.tags, lang).map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        
        <h2 className="mb-3 text-xl font-semibold text-gray-950 transition-colors group-hover:text-primary dark:text-white dark:group-hover:text-blue-300">
          {localized(post.title, lang)}
        </h2>
        
        {post.description && (
          <p className="text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed">
            {localized(post.description, lang)}
          </p>
        )}

        <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4 text-sm dark:border-gray-800">
          <span className="text-gray-500 dark:text-gray-400">{localized(post.readTime, lang)}</span>
          <span className="font-semibold text-primary transition-transform duration-200 group-hover:translate-x-1 dark:text-blue-300">
            {lang === 'zh' ? '阅读笔记 →' : 'Read note →'}
          </span>
        </div>
      </article>
    </Link>
  );
}
