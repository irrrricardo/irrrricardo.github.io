import Link from 'next/link';

const postsContent = {
  'first-post': {
    title: 'Welcome to My Blog',
    date: '2024-03-28',
    tags: ['随笔', 'Welcome'],
    content: `## Welcome to My Blog

This is my first blog post. I will share my learning experiences, project insights, and interesting ideas here.

## About This Blog

This blog is built with **Next.js**, featuring a clean design and excellent user experience. All articles are written in Markdown format.

## Why I Started This Blog

I wanted to create a space where I could:
- Document my learning journey
- Share technical insights
- Connect with like-minded people

## Future Plans

- Share more technical articles
- Record my learning journey
- Showcase personal projects

> Keep learning, keep progressing!`,
  },
  'deep-learning-guide': {
    title: 'Deep Learning Getting Started Guide',
    date: '2024-03-20',
    tags: ['AI', 'Tutorial'],
    content: `## Introduction to Deep Learning

Deep learning is a branch of machine learning that uses multi-layer neural networks to learn data representations.

## Basic Concepts

Neural networks consist of three main components:
- **Input Layer** - Receives the data
- **Hidden Layers** - Process and transform the data
- **Output Layer** - Produces the final result

## Application Areas

- **Computer Vision** - Image recognition, object detection
- **Natural Language Processing** - Text classification, machine translation
- **Speech Recognition** - Voice assistants
- **Medical Diagnosis** - Medical image analysis

> The best way to learn is by doing. Start a project today!`,
  },
  'beijing-university-life': {
    title: 'My Journey at Peking University',
    date: '2024-03-15',
    tags: ['Life', 'Education'],
    content: `## My Journey at PKU

Studying at Peking University is an exciting experience. There are excellent faculty, abundant resources, and diverse academic atmosphere here.

## Double Degree Experience

I am simultaneously studying **Basic Medicine** and **Economics**. This interdisciplinary approach has given me a comprehensive understanding of the healthcare field.

## What PKU Offers

- World-class research facilities
- Diverse academic communities
- Opportunities for interdisciplinary learning
- Strong alumni network

> At PKU, every class is a collision of thoughts.`,
  },
};

export async function generateStaticParams() {
  return Object.keys(postsContent).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const post = postsContent[params?.slug];
  return { title: post?.title || 'Post Not Found' };
}

export default function BlogPostPage({ params }) {
  const post = postsContent[params?.slug];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-primary hover:underline">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <article className="py-16 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:underline mb-8 font-medium">
          ← Back to Blog
        </Link>

        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">{post.title}</h1>
          <time className="text-gray-500 dark:text-gray-400">
            {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </time>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {post.content.split('\n').map((line, i) => {
            if (line.startsWith('## ')) return <h2 key={i} className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">{line.replace('## ', '')}</h2>;
            if (line.startsWith('**') && line.endsWith('**')) return <p key={i} className="font-bold mb-2 text-gray-900 dark:text-white">{line.replace(/\*\*/g, '')}</p>;
            if (line.startsWith('- ')) return <li key={i} className="ml-4 mb-2 text-gray-700 dark:text-gray-300">{line.replace('- ', '')}</li>;
            if (line.startsWith('> ')) return <blockquote key={i} className="border-l-4 border-primary pl-4 italic text-gray-600 dark:text-gray-400 my-6">{line.replace('> ', '')}</blockquote>;
            if (line.trim() === '') return <br key={i} />;
            return <p key={i} className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">{line}</p>;
          })}
        </div>
      </div>
    </article>
  );
}
