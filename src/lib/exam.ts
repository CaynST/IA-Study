import type { ModuleId, Question } from '@/types/content'
import { makeRng, shuffle, shuffleQuestionOptions } from '@/lib/quiz'

export type ExamScope = ModuleId | 'all'

export interface ExamConfig {
  scope: ExamScope
  count: number
  shuffleQuestions: boolean
  shuffleOptions: boolean
  seed?: number
}

export const EXAM_SIZES = [10, 20, 30] as const

/**
 * Construye el conjunto de preguntas de un simulacro:
 * - filtra por tema (o todo el curso);
 * - reparte proporcionalmente entre módulos cuando el alcance es «todo»;
 * - nunca repite una pregunta en el mismo intento;
 * - opcionalmente mezcla preguntas y opciones.
 */
export function buildExam(
  allQuestions: readonly Question[],
  config: ExamConfig,
): Question[] {
  const rng = config.seed !== undefined ? makeRng(config.seed) : Math.random
  const pool =
    config.scope === 'all' ? [...allQuestions] : allQuestions.filter((q) => q.moduleId === config.scope)

  if (pool.length === 0) return []

  const count = Math.max(1, Math.min(config.count, pool.length))
  let selected: Question[]

  if (config.scope === 'all') {
    // Reparto proporcional por módulo.
    const groups = new Map<ModuleId, Question[]>()
    for (const q of pool) {
      const arr = groups.get(q.moduleId) ?? []
      arr.push(q)
      groups.set(q.moduleId, arr)
    }
    const total = pool.length
    const chosen: Question[] = []
    const used = new Set<string>()
    for (const [, items] of groups) {
      const quota = Math.round((items.length / total) * count)
      for (const q of shuffle(items, rng).slice(0, quota)) {
        if (!used.has(q.id)) {
          used.add(q.id)
          chosen.push(q)
        }
      }
    }
    // Rellenar hasta `count` con el resto.
    if (chosen.length < count) {
      for (const q of shuffle(pool, rng)) {
        if (chosen.length >= count) break
        if (!used.has(q.id)) {
          used.add(q.id)
          chosen.push(q)
        }
      }
    }
    selected = chosen.slice(0, count)
  } else {
    const ordered = config.shuffleQuestions ? shuffle(pool, rng) : [...pool]
    selected = ordered.slice(0, count)
  }

  if (config.shuffleQuestions && config.scope === 'all') {
    selected = shuffle(selected, rng)
  }
  if (config.shuffleOptions) {
    selected = selected.map((q) => shuffleQuestionOptions(q, rng))
  }
  return selected
}

export interface ExamAnswerMap {
  [questionId: string]: unknown
}

export interface ExamResultItem {
  questionId: string
  correct: boolean
}

/** Compara las respuestas con las preguntas originales (sin mezclar opciones). */
export function gradeExam(
  original: readonly Question[],
  answers: ExamAnswerMap,
  grade: (q: Question, a: unknown) => { correct: boolean },
): ExamResultItem[] {
  return original.map((q) => ({ questionId: q.id, correct: grade(q, answers[q.id]).correct }))
}
