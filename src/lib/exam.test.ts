import { describe, it, expect } from 'vitest'
import type { Question } from '@/types/content'
import { buildExam, gradeExam } from '@/lib/exam'
import { questions } from '@/content/questions'

function makeQuestion(id: string, moduleId: Question['moduleId']): Question {
  return {
    id,
    moduleId,
    lessonId: 'm1-intro',
    section: 'x',
    type: 'multiple',
    difficulty: 'facil',
    prompt: id,
    options: ['a', 'b'],
    correct: [0],
    explanation: 'explicación',
    sourcePages: ['ref'],
    origin: 'fuente',
  }
}

describe('buildExam', () => {
  it('respeta el alcance por tema', () => {
    const exam = buildExam(questions, { scope: '1.5', count: 10, shuffleQuestions: true, shuffleOptions: false })
    expect(exam.length).toBe(10)
    expect(exam.every((q) => q.moduleId === '1.5')).toBe(true)
  })

  it('no repite preguntas en un mismo intento', () => {
    const exam = buildExam(questions, { scope: 'all', count: 30, shuffleQuestions: true, shuffleOptions: true })
    const ids = exam.map((q) => q.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('limita al total disponible', () => {
    const pool = [makeQuestion('x1', '1.1'), makeQuestion('x2', '1.1')]
    const exam = buildExam(pool, { scope: '1.1', count: 30, shuffleQuestions: true, shuffleOptions: false })
    expect(exam.length).toBe(2)
  })

  it('reparte proporcionalmente entre módulos con alcance «all»', () => {
    const pool = [
      ...Array.from({ length: 40 }, (_, i) => makeQuestion(`a${i}`, '1.1')),
      ...Array.from({ length: 10 }, (_, i) => makeQuestion(`b${i}`, '1.2')),
    ]
    const exam = buildExam(pool, { scope: 'all', count: 20, shuffleQuestions: true, shuffleOptions: false })
    expect(exam.length).toBe(20)
    const from11 = exam.filter((q) => q.moduleId === '1.1').length
    const from12 = exam.filter((q) => q.moduleId === '1.2').length
    expect(from11).toBeGreaterThan(from12)
    expect(from11 + from12).toBe(20)
  })

  it('es determinista con semilla', () => {
    const cfg = { scope: 'all' as const, count: 20, shuffleQuestions: true, shuffleOptions: true, seed: 99 }
    const a = buildExam(questions, cfg).map((q) => q.id)
    const b = buildExam(questions, cfg).map((q) => q.id)
    expect(a).toEqual(b)
  })

  it('devuelve vacío si no hay preguntas en el alcance', () => {
    expect(buildExam([], { scope: 'all', count: 10, shuffleQuestions: true, shuffleOptions: false })).toEqual([])
  })
})

describe('gradeExam', () => {
  it('califica contra las preguntas originales', () => {
    const qs = [makeQuestion('x1', '1.1'), makeQuestion('x2', '1.1')]
    const results = gradeExam(qs, { x1: [0], x2: [1] }, (q, a) => {
      const correct = Array.isArray(a) && a[0] === (q as { correct: number[] }).correct[0]
      return { correct }
    })
    expect(results).toEqual([
      { questionId: 'x1', correct: true },
      { questionId: 'x2', correct: false },
    ])
  })
})
