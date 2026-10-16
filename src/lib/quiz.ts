import type { Difficulty, ModuleId, Question } from '@/types/content'

export interface AnswerRecord {
  /** Respuesta normalizada: índices para multiple, booleano para boolean, mapa para classification. */
  value: unknown
  correct: boolean
}

/** Normaliza la respuesta de una pregunta de opción múltiple (ordena índices). */
export function normalizeMultiple(selected: number[]): number[] {
  return [...new Set(selected)].sort((a, b) => a - b)
}

/** Compara dos arreglos de índices. */
function sameIndices(a: number[], b: number[]): boolean {
  if (a.length !== b.length) return false
  return a.every((v, i) => v === b[i])
}

/**
 * Califica una pregunta. Devuelve si es correcta y una representación
 * normalizada de la respuesta del usuario.
 */
export function gradeAnswer(question: Question, answer: unknown): AnswerRecord {
  switch (question.type) {
    case 'multiple': {
      const selected = normalizeMultiple(Array.isArray(answer) ? (answer as number[]) : [])
      const correct = sameIndices(selected, normalizeMultiple(question.correct))
      return { value: selected, correct }
    }
    case 'boolean': {
      const val = answer === true
      return { value: val, correct: val === question.correct }
    }
    case 'classification': {
      const mapping = (answer ?? {}) as Record<string, string>
      const correct = question.items.every((item) => mapping[item.text] === item.category)
      return { value: mapping, correct }
    }
    default:
      return { value: answer, correct: false }
  }
}

/** Respuesta(s) correcta(s) legible(s), para el resumen del simulacro. */
export function describeCorrectAnswer(question: Question): string {
  switch (question.type) {
    case 'multiple':
      return question.correct
        .map((i) => question.options[i])
        .filter(Boolean)
        .join(' · ')
    case 'boolean':
      return question.correct ? 'Verdadero' : 'Falso'
    case 'classification':
      return question.items.map((it) => `${it.text} → ${it.category}`).join('; ')
    default:
      return ''
  }
}

export interface ShuffleOptions {
  /** Semilla opcional para resultados reproducibles (pruebas). */
  seed?: number
}

/** Generador pseudoaleatorio determinista (mulberry32). */
export function makeRng(seed: number): () => number {
  let a = seed >>> 0
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/** Hash de cadena a entero sin signo (FNV-1a de 32 bits), para semillas estables. */
export function hashString(input: string): number {
  let h = 2166136261
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

/** Mezcla una copia del arreglo (Fisher–Yates). */
export function shuffle<T>(items: readonly T[], rng: () => number = Math.random): T[] {
  const copy = [...items]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

/**
 * Mezcla las opciones de una pregunta de opción múltiple, remapeando los
 * índices correctos. No mezcla preguntas de clasificación ni booleanas.
 */
export function shuffleQuestionOptions(
  question: Question,
  rng: () => number = Math.random,
): Question {
  if (question.type !== 'multiple') return question
  const indices = shuffle(
    question.options.map((_, i) => i),
    rng,
  )
  const options = indices.map((i) => question.options[i])
  const correct = indices
    .map((original, newIndex) => (question.correct.includes(original) ? newIndex : -1))
    .filter((i) => i >= 0)
    .sort((a, b) => a - b)
  return { ...question, options, correct }
}

export interface ScoreSummary {
  correct: number
  total: number
  percent: number
}

export function summarize(
  results: { correct: boolean }[],
): ScoreSummary {
  const total = results.length
  const correct = results.filter((r) => r.correct).length
  const percent = total === 0 ? 0 : Math.round((correct / total) * 100)
  return { correct, total, percent }
}

export const difficultyLabel: Record<Difficulty, string> = {
  facil: 'Fácil',
  media: 'Media',
  dificil: 'Difícil',
}

export const moduleAccentClass: Record<ModuleId, string> = {
  '1.1': 'text-brand-600 dark:text-brand-400',
  '1.2': 'text-deep-600 dark:text-deep-300',
  '1.3': 'text-violet-600 dark:text-violet-300',
  '1.5': 'text-amber-600 dark:text-amber-300',
}
