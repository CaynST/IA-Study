import type { CalloutVariant, ContentBlock } from '@/types/content'
import {
  AlertTriangle,
  BookMarked,
  FlaskConical,
  Info,
  Lightbulb,
  Sparkles,
  XCircle,
} from 'lucide-react'
import { RichText } from '@/components/RichText'
import { Interactive } from '@/components/interactive/Interactive'
import { Figure } from '@/components/Figures'

const calloutStyles: Record<
  CalloutVariant,
  { className: string; icon: typeof Info; label: string }
> = {
  info: {
    className: 'border-deep-200 bg-deep-50 dark:border-deep-900 dark:bg-deep-950/40',
    icon: Info,
    label: 'Información',
  },
  key: {
    className: 'border-brand-200 bg-brand-50 dark:border-brand-900 dark:bg-brand-950/40',
    icon: Lightbulb,
    label: 'Idea clave',
  },
  warning: {
    className: 'border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/40',
    icon: AlertTriangle,
    label: 'Atención',
  },
  error: {
    className: 'border-rose-200 bg-rose-50 dark:border-rose-900 dark:bg-rose-950/40',
    icon: XCircle,
    label: 'Error común',
  },
  example: {
    className: 'border-violet-200 bg-violet-50 dark:border-violet-900 dark:bg-violet-950/40',
    icon: FlaskConical,
    label: 'Ejemplo',
  },
  source: {
    className: 'border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/60',
    icon: BookMarked,
    label: 'Fuente',
  },
  didactic: {
    className: 'border-dashed border-sky-300 bg-sky-50 dark:border-sky-800 dark:bg-sky-950/30',
    icon: Sparkles,
    label: 'Ampliación didáctica',
  },
}

function Callout({ variant, title, text }: { variant: CalloutVariant; title?: string; text: string }) {
  const style = calloutStyles[variant]
  const Icon = style.icon
  return (
    <aside className={`my-4 rounded-xl border p-4 ${style.className}`}>
      <p className="mb-1 flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
        <Icon aria-hidden="true" className="h-4 w-4 shrink-0" />
        {title ?? style.label}
      </p>
      <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">
        <RichText text={text} />
      </p>
    </aside>
  )
}

export function LessonBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="prose-lesson">
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'heading':
            return block.level === 2 ? (
              <h2
                key={index}
                className="mt-8 mb-2 text-xl font-bold text-slate-900 dark:text-white"
              >
                {block.text}
              </h2>
            ) : (
              <h3
                key={index}
                className="mt-6 mb-2 text-lg font-semibold text-slate-900 dark:text-white"
              >
                {block.text}
              </h3>
            )
          case 'paragraph':
            return (
              <p key={index}>
                <RichText text={block.text} />
              </p>
            )
          case 'list':
            return block.ordered ? (
              <ol key={index} className="my-3 ml-5 list-decimal space-y-1.5">
                {block.items.map((item, i) => (
                  <li key={i} className="leading-7">
                    <RichText text={item} />
                  </li>
                ))}
              </ol>
            ) : (
              <ul key={index} className="my-3 ml-5 list-disc space-y-1.5">
                {block.items.map((item, i) => (
                  <li key={i} className="leading-7">
                    <RichText text={item} />
                  </li>
                ))}
              </ul>
            )
          case 'table':
            return (
              <div key={index} className="my-4 overflow-x-auto">
                <table className="w-full border-collapse text-left text-sm">
                  <caption className="sr-only">{block.caption ?? 'Tabla de contenido'}</caption>
                  <thead>
                    <tr>
                      {block.headers.map((h, i) => (
                        <th
                          key={i}
                          scope="col"
                          className="border-b border-slate-300 px-3 py-2 font-semibold text-slate-800 dark:border-slate-700 dark:text-slate-100"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, r) => (
                      <tr key={r} className="even:bg-slate-50 dark:even:bg-slate-900/50">
                        {row.map((cell, c) => (
                          <td
                            key={c}
                            className="border-b border-slate-100 px-3 py-2 align-top text-slate-700 dark:border-slate-800 dark:text-slate-300"
                          >
                            <RichText text={cell} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                {block.caption && (
                  <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">{block.caption}</p>
                )}
              </div>
            )
          case 'callout':
            return <Callout key={index} variant={block.variant} title={block.title} text={block.text} />
          case 'keyTerms':
            return (
              <dl
                key={index}
                className="my-4 grid gap-3 rounded-xl border border-slate-200 p-4 sm:grid-cols-2 dark:border-slate-800"
              >
                {block.terms.map((t, i) => (
                  <div key={i}>
                    <dt className="font-semibold text-slate-900 dark:text-white">{t.term}</dt>
                    <dd className="text-sm text-slate-600 dark:text-slate-400">{t.definition}</dd>
                  </div>
                ))}
              </dl>
            )
          case 'example':
            return (
              <div
                key={index}
                className="my-4 rounded-xl border border-violet-200 bg-violet-50/60 p-4 dark:border-violet-900 dark:bg-violet-950/30"
              >
                <p className="mb-2 font-semibold text-violet-900 dark:text-violet-200">
                  {block.title}
                </p>
                <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">
                  <RichText text={block.text} />
                </p>
                {block.steps && block.steps.length > 0 && (
                  <ol className="mt-3 ml-5 list-decimal space-y-1 text-sm text-slate-700 dark:text-slate-300">
                    {block.steps.map((s, i) => (
                      <li key={i}>
                        <RichText text={s} />
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            )
          case 'quote':
            return (
              <blockquote
                key={index}
                className="my-4 border-l-4 border-brand-400 pl-4 italic text-slate-700 dark:text-slate-300"
              >
                <RichText text={block.text} />
                {block.attribution && (
                  <footer className="mt-1 text-sm not-italic text-slate-500 dark:text-slate-400">
                    — {block.attribution}
                  </footer>
                )}
              </blockquote>
            )
          case 'interactive':
            return (
              <Interactive key={index} id={block.component} title={block.title} hint={block.hint} />
            )
          case 'figure':
            return <Figure key={index} id={block.figure} caption={block.caption} />
          default:
            return null
        }
      })}
    </div>
  )
}
