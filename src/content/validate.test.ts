import { describe, it, expect } from 'vitest'
import { validateContent, MIN_QUESTIONS, requiredSections } from '@/content/validate'
import { lessons } from '@/content/lessons'
import { questions } from '@/content/questions'

describe('validación del contenido', () => {
  it('no reporta problemas', () => {
    expect(validateContent()).toEqual([])
  })

  it('tiene al menos el mínimo de preguntas', () => {
    expect(questions.length).toBeGreaterThanOrEqual(MIN_QUESTIONS)
  })

  it('cada pregunta tiene explicación y referencia', () => {
    for (const q of questions) {
      expect(q.explanation.trim().length, `explicación de ${q.id}`).toBeGreaterThan(0)
      expect(q.sourcePages.length, `referencia de ${q.id}`).toBeGreaterThan(0)
    }
  })

  it('cubre todas las secciones obligatorias de los cuatro módulos', () => {
    for (const [moduleId, sections] of Object.entries(requiredSections)) {
      const moduleLessons = lessons.filter((l) => l.moduleId === moduleId)
      for (const section of sections) {
        const covered = moduleLessons.some((l) => l.section.startsWith(section))
        expect(covered, `módulo ${moduleId} sección ${section}`).toBe(true)
      }
    }
  })

  it('distribuye preguntas en los cuatro módulos', () => {
    for (const moduleId of ['1.1', '1.2', '1.3', '1.5'] as const) {
      const count = questions.filter((q) => q.moduleId === moduleId).length
      expect(count, `módulo ${moduleId}`).toBeGreaterThanOrEqual(10)
    }
  })
})
