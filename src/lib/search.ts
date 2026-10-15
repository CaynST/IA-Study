import type { ModuleId } from '@/types/content'
import { lessons } from '@/content/lessons'
import { questions } from '@/content/questions'
import { sortedGlossary } from '@/content/glossary'

export type SearchKind = 'leccion' | 'pregunta' | 'termino'

export interface SearchResult {
  kind: SearchKind
  id: string
  title: string
  snippet: string
  moduleId: ModuleId
  /** Ruta hash a la que navega el resultado. */
  to: string
  /** Texto normalizado para buscar. */
  haystack: string
}

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

function blockText(blocks: unknown): string {
  const parts: string[] = []
  const visit = (value: unknown): void => {
    if (typeof value === 'string') parts.push(value)
    else if (Array.isArray(value)) value.forEach(visit)
    else if (value && typeof value === 'object') Object.values(value).forEach(visit)
  }
  visit(blocks)
  return parts.join(' ')
}

export const searchIndex: SearchResult[] = [
  ...lessons.map<SearchResult>((l) => ({
    kind: 'leccion',
    id: l.id,
    title: l.title,
    snippet: l.learningObjectives[0] ?? l.subtitle ?? '',
    moduleId: l.moduleId,
    to: `/leccion/${l.id}`,
    haystack: normalize(
      [l.title, l.section, l.subtitle ?? '', l.learningObjectives.join(' '), l.keyTerms.map((k) => k.term + ' ' + k.definition).join(' '), blockText(l.blocks)].join(' '),
    ),
  })),
  ...questions.map<SearchResult>((q) => ({
    kind: 'pregunta',
    id: q.id,
    title: q.prompt,
    snippet: `Tema ${q.moduleId} · ${q.section}`,
    moduleId: q.moduleId,
    to: `/leccion/${q.lessonId}`,
    haystack: normalize([q.prompt, q.explanation, q.section].join(' ')),
  })),
  ...sortedGlossary.map<SearchResult>((g) => ({
    kind: 'termino',
    id: `g-${g.term}`,
    title: g.term,
    snippet: g.definition,
    moduleId: g.moduleId,
    to: `/glosario?q=${encodeURIComponent(g.term)}`,
    haystack: normalize([g.term, g.definition].join(' ')),
  })),
]

export function runSearch(query: string, limit = 40): SearchResult[] {
  const q = normalize(query.trim())
  if (q.length < 2) return []
  const terms = q.split(/\s+/)
  return searchIndex
    .filter((r) => terms.every((t) => r.haystack.includes(t)))
    .slice(0, limit)
}
