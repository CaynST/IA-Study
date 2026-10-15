import { describe, it, expect } from 'vitest'
import type { Lesson, Question } from '@/types/content'
import { moduleCompletion, overallCompletion, weakTopics, recommendedLesson, globalStats } from '@/lib/progressLogic'
import { defaultProgress } from '@/state/progress'

function lesson(id: string, moduleId: Lesson['moduleId']): Lesson {
  return {
    id,
    moduleId,
    section: 'x',
    title: id,
    learningObjectives: [],
    estimatedMinutes: 1,
    blocks: [],
    keyTerms: [],
    recap: [],
    sourcePages: ['ref'],
    practiceQuestionIds: [],
  }
}

function question(id: string, lessonId: string, moduleId: Question['moduleId']): Question {
  return {
    id,
    moduleId,
    lessonId,
    section: 'x',
    type: 'multiple',
    difficulty: 'facil',
    prompt: id,
    options: ['a', 'b'],
    correct: [0],
    explanation: 'e',
    sourcePages: ['ref'],
    origin: 'fuente',
  }
}

describe('moduleCompletion', () => {
  const lessons = [lesson('a', '1.1'), lesson('b', '1.1')]
  it('calcula el porcentaje', () => {
    expect(moduleCompletion(lessons, ['a']).percent).toBe(50)
    expect(moduleCompletion(lessons, ['a', 'b']).completed).toBe(true)
    expect(moduleCompletion(lessons, []).completed).toBe(false)
  })
})

describe('overallCompletion', () => {
  it('cuenta lecciones únicas completadas', () => {
    const lessons = [lesson('a', '1.1'), lesson('b', '1.2'), lesson('c', '1.3')]
    expect(overallCompletion(lessons, ['a', 'c', 'inexistente'])).toEqual({ total: 3, done: 2, percent: 67 })
  })
})

describe('weakTopics', () => {
  it('detecta lecciones con baja precisión', () => {
    const lessons = [lesson('a', '1.1'), lesson('b', '1.1')]
    const questions = [question('q1', 'a', '1.1'), question('q2', 'b', '1.1')]
    const progress = defaultProgress()
    progress.questionStats = {
      q1: { attempts: 4, correct: 0 },
      q2: { attempts: 4, correct: 4 },
    }
    const weak = weakTopics(lessons, questions, progress)
    expect(weak.map((w) => w.lessonId)).toEqual(['a'])
    expect(weak[0].accuracy).toBe(0)
  })
})

describe('recommendedLesson', () => {
  const lessons = [lesson('a', '1.1'), lesson('b', '1.1'), lesson('c', '1.1')]
  it('sugiere la última visitada no completada', () => {
    const progress = defaultProgress()
    progress.lastVisited = { a: '2024-01-01T00:00:00Z', b: '2024-02-01T00:00:00Z' }
    expect(recommendedLesson(lessons, progress)?.id).toBe('b')
  })
  it('sugiere la primera pendiente si todo lo visitado está completo', () => {
    const progress = defaultProgress()
    progress.lessonsCompleted = ['a', 'b']
    progress.lastVisited = { b: '2024-02-01T00:00:00Z' }
    expect(recommendedLesson(lessons, progress)?.id).toBe('c')
  })
})

describe('globalStats', () => {
  it('agrega respuestas y el mejor simulacro', () => {
    const progress = defaultProgress()
    progress.questionStats = { q1: { attempts: 2, correct: 1 }, q2: { attempts: 2, correct: 2 } }
    progress.examHistory = [
      { id: 'e1', date: 'x', scope: 'all', requested: 10, correct: 6, total: 10, percent: 60, questionIds: [] },
      { id: 'e2', date: 'y', scope: 'all', requested: 10, correct: 9, total: 10, percent: 90, questionIds: [] },
    ]
    const stats = globalStats(progress)
    expect(stats.questionsAnswered).toBe(4)
    expect(stats.accuracy).toBe(75)
    expect(stats.bestExam).toBe(90)
    expect(stats.examsTaken).toBe(2)
  })
})
