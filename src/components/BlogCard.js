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
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="panel p-6 group-hover:-translate-y-1 group-hover:border-primary dark:group-hover:border-blue-300">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          <time className="text-sm font-medium text-primary dark:text-blue-300">
            {formatDate(post.date)}
          </time>
          {post.tags && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        
        <h2 className="mb-3 text-xl font-semibold text-gray-950 transition-colors group-hover:text-primary dark:text-white dark:group-hover:text-blue-300">
          {post.title}
        </h2>
        
        {post.description && (
          <p className="text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed">
            {post.description}
          </p>
        )}

        <div className="mt-4 translate-y-1 text-sm font-semibold text-primary opacity-0 transition duration-200 group-hover:translate-y-0 group-hover:opacity-100 dark:text-blue-300">
          {lang === 'zh' ? '阅读更多 →' : 'Read more →'}
        </div>
      </article>
    </Link>
  );
}
