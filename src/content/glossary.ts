import type { GlossaryEntry } from '@/types/content'
import { lessons } from '@/content/lessons'

/** Glosario derivado de los términos clave de todas las lecciones. */
export const glossary: GlossaryEntry[] = lessons.flatMap((lesson) =>
  lesson.keyTerms.map((t) => ({
    term: t.term,
    definition: t.definition,
    moduleId: lesson.moduleId,
    lessonId: lesson.id,
    sourcePages: lesson.sourcePages,
  })),
)

/** Glosario ordenado alfabéticamente y sin duplicados exactos de término. */
export const sortedGlossary: GlossaryEntry[] = (() => {
  const seen = new Set<string>()
  const result: GlossaryEntry[] = []
  for (const entry of glossary) {
    const key = entry.term.trim().toLowerCase()
    if (seen.has(key)) continue
    seen.add(key)
    result.push(entry)
  }
  return result.sort((a, b) => a.term.localeCompare(b.term, 'es'))
})()
