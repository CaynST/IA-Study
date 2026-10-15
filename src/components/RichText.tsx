import { Fragment, type ReactNode } from 'react'

/**
 * Renderiza texto enriquecido mínimo y seguro (sin dangerouslySetInnerHTML):
 * - `**negrita**`
 * - `` `código` ``
 * - `[término]` para resaltar conceptos clave
 */
export function RichText({ text }: { text: string }): ReactNode {
  const pattern = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\])/g
  const parts = text.split(pattern)
  return (
    <>
      {parts.map((part, i) => {
        if (!part) return null
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i}>{part.slice(2, -2)}</strong>
        }
        if (part.startsWith('`') && part.endsWith('`')) {
          return <code key={i}>{part.slice(1, -1)}</code>
        }
        if (part.startsWith('[') && part.endsWith(']')) {
          return (
            <span key={i} className="term" title="Término clave del tema">
              {part.slice(1, -1)}
            </span>
          )
        }
        return <Fragment key={i}>{part}</Fragment>
      })}
    </>
  )
}
