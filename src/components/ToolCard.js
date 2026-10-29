import Image from 'next/image';
import { localized } from '@/lib/notes';

export default function ToolCard({ tool, lang }) {
  return (
    <article className="panel overflow-hidden">
      <div className="relative aspect-[40/17] border-b border-gray-200 bg-[#edf4f2] dark:border-gray-800 dark:bg-gray-900">
        <Image
          src={tool.image}
          alt={localized(tool.imageAlt, lang)}
          fill
          sizes="(min-width: 1280px) 1152px, 100vw"
          className="object-cover"
        />
      </div>

      <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-12">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="eyebrow">{localized(tool.eyebrow, lang)}</p>
            <span className="tag">{localized(tool.status, lang)}</span>
          </div>
          <h3 className="mt-4 text-3xl font-semibold text-gray-950 dark:text-white">{localized(tool.title, lang)}</h3>
          <div className="mt-6 flex flex-wrap gap-2">
            {localized(tool.tags, lang).map((tag) => <span className="tag" key={tag}>{tag}</span>)}
          </div>
        </div>

        <div>
          <p className="text-[15px] leading-7 text-gray-600 dark:text-gray-300">{localized(tool.description, lang)}</p>
          <p className="mt-4 border-l-2 border-primary/60 pl-4 text-sm leading-6 text-gray-500 dark:border-blue-300/60 dark:text-gray-400">{localized(tool.note, lang)}</p>
          <p className="mt-6 text-xs leading-5 text-gray-400 dark:text-gray-500">{localized(tool.imageCaption, lang)}</p>
          <div className="mt-5 flex flex-wrap gap-3">
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
    </article>
  );
}
