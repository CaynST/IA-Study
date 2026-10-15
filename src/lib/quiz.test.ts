import { describe, it, expect } from 'vitest'
import type { ClassificationQuestion, MultipleChoiceQuestion, Question } from '@/types/content'
import {
  gradeAnswer,
  makeRng,
  shuffle,
  shuffleQuestionOptions,
  summarize,
  describeCorrectAnswer,
} from '@/lib/quiz'

const multiple: MultipleChoiceQuestion = {
  id: 'q-m',
  moduleId: '1.1',
  lessonId: 'm1-intro',
  section: '1.1.1',
  type: 'multiple',
  difficulty: 'facil',
  prompt: '¿Cuál?',
  options: ['A', 'B', 'C'],
  correct: [0],
  explanation: 'A es correcta.',
  sourcePages: ['Tema 1.1 · p. 1'],
  origin: 'fuente',
}

const multi: MultipleChoiceQuestion = { ...multiple, id: 'q-multi', multi: true, correct: [0, 2] }

const boolQ: Question = {
  ...multiple,
  id: 'q-b',
  type: 'boolean',
  correct: true,
} as Question

const classQ: ClassificationQuestion = {
  ...multiple,
  id: 'q-c',
  type: 'classification',
  categories: ['Dura', 'Blanda'],
  items: [
    { text: 'Sin traslapes', category: 'Dura' },
    { text: 'Evitar clases temprano', category: 'Blanda' },
  ],
} as ClassificationQuestion

describe('gradeAnswer', () => {
  it('califica opción múltiple simple', () => {
    expect(gradeAnswer(multiple, [0]).correct).toBe(true)
    expect(gradeAnswer(multiple, [1]).correct).toBe(false)
    expect(gradeAnswer(multiple, []).correct).toBe(false)
  })

  it('exige el conjunto exacto en opción múltiple con varias respuestas', () => {
    expect(gradeAnswer(multi, [0, 2]).correct).toBe(true)
    expect(gradeAnswer(multi, [2, 0]).correct).toBe(true)
    expect(gradeAnswer(multi, [0]).correct).toBe(false)
    expect(gradeAnswer(multi, [0, 1, 2]).correct).toBe(false)
  })

  it('califica verdadero/falso', () => {
    expect(gradeAnswer(boolQ, true).correct).toBe(true)
    expect(gradeAnswer(boolQ, false).correct).toBe(false)
  })

  it('califica clasificación completa', () => {
    expect(
      gradeAnswer(classQ, { 'Sin traslapes': 'Dura', 'Evitar clases temprano': 'Blanda' }).correct,
    ).toBe(true)
    expect(
      gradeAnswer(classQ, { 'Sin traslapes': 'Blanda', 'Evitar clases temprano': 'Blanda' }).correct,
    ).toBe(false)
    expect(gradeAnswer(classQ, {}).correct).toBe(false)
  })

  it('describe la respuesta correcta', () => {
    expect(describeCorrectAnswer(multiple)).toBe('A')
    expect(describeCorrectAnswer(boolQ)).toBe('Verdadero')
    expect(describeCorrectAnswer(classQ)).toContain('Sin traslapes → Dura')
  })
})

describe('shuffle', () => {
  it('es determinista con la misma semilla', () => {
    const a = shuffle([1, 2, 3, 4, 5], makeRng(42))
    const b = shuffle([1, 2, 3, 4, 5], makeRng(42))
    expect(a).toEqual(b)
  })

  it('conserva todos los elementos', () => {
    const result = shuffle(['a', 'b', 'c', 'd'], makeRng(7))
    expect([...result].sort()).toEqual(['a', 'b', 'c', 'd'])
  })
})

describe('shuffleQuestionOptions', () => {
  it('remezcla opciones y conserva la correcta', () => {
    const shuffled = shuffleQuestionOptions(multiple, makeRng(3)) as MultipleChoiceQuestion
    expect(shuffled.options).toHaveLength(3)
    expect(shuffled.correct).toHaveLength(1)
    const correctText = shuffled.options[shuffled.correct[0]]
    expect(correctText).toBe('A')
  })

  it('conserva múltiples respuestas correctas tras mezclar', () => {
    const shuffled = shuffleQuestionOptions(multi, makeRng(11)) as MultipleChoiceQuestion
    const texts = shuffled.correct.map((i) => shuffled.options[i]).sort()
    expect(texts).toEqual(['A', 'C'])
  })

  it('no modifica booleanas ni clasificación', () => {
    expect(shuffleQuestionOptions(boolQ, makeRng(1))).toBe(boolQ)
    expect(shuffleQuestionOptions(classQ, makeRng(1))).toBe(classQ)
  })
})

describe('summarize', () => {
  it('calcula el porcentaje', () => {
    expect(summarize([{ correct: true }, { correct: false }, { correct: true }, { correct: false }])).toEqual({
      correct: 2,
      total: 4,
      percent: 50,
    })
    expect(summarize([])).toEqual({ correct: 0, total: 0, percent: 0 })
  })
})
