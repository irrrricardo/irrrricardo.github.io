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
      <article className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          <time className="text-sm text-primary font-medium">
            {formatDate(post.date)}
          </time>
          {post.tags && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        
        <h2 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors mb-3">
          {post.title}
        </h2>
        
        {post.description && (
          <p className="text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">
            {post.description}
          </p>
        )}

        <div className="mt-4 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
          {lang === 'zh' ? '阅读更多 →' : 'Read more →'}
        </div>
      </article>
    </Link>
  );
}
