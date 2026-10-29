import Image from 'next/image';
import { localized } from '@/lib/notes';

export default function ToolCard({ tool, lang }) {
  return (
    <article className="panel overflow-hidden">
      <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative min-h-[260px] border-b border-gray-200 bg-[#edf1f3] dark:border-gray-800 dark:bg-gray-900 lg:min-h-[390px] lg:border-b-0 lg:border-r">
          <Image
            src={tool.image}
            alt={localized(tool.imageAlt, lang)}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-contain p-5 sm:p-7"
          />
        </div>

        <div className="flex flex-col justify-between p-6 sm:p-8">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="eyebrow">{localized(tool.eyebrow, lang)}</p>
              <span className="tag">{localized(tool.status, lang)}</span>
            </div>
            <h3 className="mt-4 text-3xl font-semibold text-gray-950 dark:text-white">{localized(tool.title, lang)}</h3>
            <p className="mt-5 text-[15px] leading-7 text-gray-600 dark:text-gray-300">{localized(tool.description, lang)}</p>
            <p className="mt-4 border-l-2 border-primary/60 pl-4 text-sm leading-6 text-gray-500 dark:border-blue-300/60 dark:text-gray-400">{localized(tool.note, lang)}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {localized(tool.tags, lang).map((tag) => <span className="tag" key={tag}>{tag}</span>)}
            </div>
          </div>

          <div className="mt-8">
            <p className="mb-4 text-xs leading-5 text-gray-400 dark:text-gray-500">{localized(tool.imageCaption, lang)}</p>
            <div className="flex flex-wrap gap-3">
              {tool.links.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={index === 0 ? 'button-primary' : 'button-secondary'}
                >
                  {localized(link.label, lang)} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
