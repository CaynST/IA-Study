import type { Lesson, ModuleId, Question } from '@/types/content'
import type { ProgressData } from '@/state/progress'

export interface LessonProgressInfo {
  completed: boolean
  totalLessons: number
  completedLessons: number
  percent: number
}

export function moduleCompletion(
  lessons: Lesson[],
  completedIds: readonly string[],
): LessonProgressInfo {
  const completedSet = new Set(completedIds)
  const total = lessons.length
  const completed = lessons.filter((l) => completedSet.has(l.id)).length
  return {
    completed: total > 0 && completed === total,
    totalLessons: total,
    completedLessons: completed,
    percent: total === 0 ? 0 : Math.round((completed / total) * 100),
  }
}

export function overallCompletion(lessons: Lesson[], completedIds: readonly string[]) {
  const completed = new Set(completedIds)
  const total = lessons.length
  const done = lessons.filter((l) => completed.has(l.id)).length
  return { total, done, percent: total === 0 ? 0 : Math.round((done / total) * 100) }
}

export interface WeakTopic {
  lessonId: string
  moduleId: ModuleId
  title: string
  attempts: number
  accuracy: number
}

/**
 * Temas débiles: lecciones donde el usuario falló preguntas, ordenadas por
 * precisión ascendente (mínimo 1 intento).
 */
export function weakTopics(
  lessons: Lesson[],
  questions: Question[],
  progress: ProgressData,
): WeakTopic[] {
  const byLesson = new Map<string, { attempts: number; correct: number }>()
  for (const q of questions) {
    const stat = progress.questionStats[q.id]
    if (!stat || stat.attempts === 0) continue
    const current = byLesson.get(q.lessonId) ?? { attempts: 0, correct: 0 }
    current.attempts += stat.attempts
    current.correct += stat.correct
    byLesson.set(q.lessonId, current)
  }
  const lessonById = new Map(lessons.map((l) => [l.id, l]))
  const result: WeakTopic[] = []
  for (const [lessonId, stat] of byLesson) {
    const lesson = lessonById.get(lessonId)
    if (!lesson) continue
    const accuracy = stat.attempts === 0 ? 0 : stat.correct / stat.attempts
    if (accuracy >= 0.8) continue
    result.push({
      lessonId,
      moduleId: lesson.moduleId,
      title: lesson.title,
      attempts: stat.attempts,
      accuracy,
    })
  }
  return result.sort((a, b) => a.accuracy - b.accuracy)
}

/** Próxima lección recomendada: la última visitada no completada, o la primera pendiente. */
export function recommendedLesson(
  lessons: Lesson[],
  progress: ProgressData,
): Lesson | undefined {
  const completed = new Set(progress.lessonsCompleted)
  const visited = Object.entries(progress.lastVisited).sort((a, b) =>
    a[1] < b[1] ? 1 : -1,
  )
  for (const [lessonId] of visited) {
    if (!completed.has(lessonId)) {
      const found = lessons.find((l) => l.id === lessonId)
      if (found) return found
    }
  }
  return lessons.find((l) => !completed.has(l.id))
}

export interface GlobalStats {
  lessonsCompleted: number
  questionsAnswered: number
  accuracy: number
  examsTaken: number
  bestExam: number
}

export function globalStats(progress: ProgressData): GlobalStats {
  let attempts = 0
  let correct = 0
  for (const stat of Object.values(progress.questionStats)) {
    attempts += stat.attempts
    correct += stat.correct
  }
  const best = progress.examHistory.reduce((max, e) => Math.max(max, e.percent), 0)
  return {
    lessonsCompleted: progress.lessonsCompleted.length,
    questionsAnswered: attempts,
    accuracy: attempts === 0 ? 0 : Math.round((correct / attempts) * 100),
    examsTaken: progress.examHistory.length,
    bestExam: best,
  }
}
