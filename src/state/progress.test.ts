import { describe, it, expect, beforeEach } from 'vitest'
import {
  STORAGE_KEY,
  STORAGE_VERSION,
  coerceProgress,
  defaultProgress,
  exportProgress,
  importProgress,
  loadProgress,
  saveProgress,
  clearProgress,
} from '@/state/progress'

beforeEach(() => {
  localStorage.clear()
})

describe('persistencia', () => {
  it('devuelve el valor por defecto si no hay datos', () => {
    expect(loadProgress()).toEqual(defaultProgress())
  })

  it('guarda y recupera el progreso', () => {
    const data = defaultProgress()
    data.lessonsCompleted = ['m1-intro']
    data.questionStats['q1'] = { attempts: 2, correct: 1 }
    expect(saveProgress(data)).toBe(true)
    const loaded = loadProgress()
    expect(loaded.lessonsCompleted).toEqual(['m1-intro'])
    expect(loaded.questionStats['q1']).toEqual({ attempts: 2, correct: 1 })
  })

  it('ignora datos con otra versión', () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: 999, lessonsCompleted: ['x'] }))
    expect(loadProgress()).toEqual(defaultProgress())
  })

  it('tolera JSON corrupto', () => {
    localStorage.setItem(STORAGE_KEY, '{no es json')
    expect(loadProgress()).toEqual(defaultProgress())
  })

  it('sanea entradas inválidas', () => {
    const coerced = coerceProgress({
      version: STORAGE_VERSION,
      lessonsCompleted: ['ok', 5, null],
      failedQuestions: 'no-es-array',
      questionStats: null,
    })
    expect(coerced.lessonsCompleted).toEqual(['ok'])
    expect(coerced.failedQuestions).toEqual([])
    expect(coerced.questionStats).toEqual({})
  })

  it('exporta e importa de forma circular', () => {
    const data = defaultProgress()
    data.favoriteQuestions = ['seed-1']
    const json = exportProgress(data)
    const result = importProgress(json)
    expect(result.ok).toBe(true)
    expect(result.data?.favoriteQuestions).toEqual(['seed-1'])
  })

  it('rechaza JSON inválido al importar', () => {
    const result = importProgress('no json')
    expect(result.ok).toBe(false)
    expect(result.error).toBeTruthy()
  })

  it('borra los datos locales', () => {
    saveProgress(defaultProgress())
    clearProgress()
    expect(localStorage.getItem(STORAGE_KEY)).toBeNull()
  })
})
