import Link from 'next/link';

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
    <Link href={`/blog/${post.slug}`} className="block group">
      <article className="panel p-6 transition-colors group-hover:border-primary dark:group-hover:border-teal-300">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          <time className="text-sm font-medium text-primary dark:text-teal-300">
            {formatDate(post.date)}
          </time>
          {post.tags && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="border border-gray-200 bg-paper px-2.5 py-1 text-xs font-medium text-gray-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        
        <h2 className="text-xl font-semibold text-gray-950 transition-colors group-hover:text-primary dark:text-white dark:group-hover:text-teal-300 mb-3">
          {post.title}
        </h2>
        
        {post.description && (
          <p className="text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed">
            {post.description}
          </p>
        )}

        <div className="mt-4 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100 dark:text-teal-300">
          {lang === 'zh' ? '阅读更多 →' : 'Read more →'}
        </div>
      </article>
    </Link>
  );
}
