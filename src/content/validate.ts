import type { ModuleId, Question } from '@/types/content'
import { lessons } from '@/content/lessons'
import { questions } from '@/content/questions'

/**
 * Secciones obligatorias del temario (según GUIA-CONTENIDO.md). La validación
 * acepta prefijos para tolerar títulos como "1.2.1 Orígenes".
 */
export const requiredSections: Record<ModuleId, string[]> = {
  '1.1': ['Introducción', '1.1.1', '1.1.2', '1.1.3', 'Complemento', 'Cierre'],
  '1.2': ['Introducción', '1.2.1', '1.2.2', '1.2.3', '1.2.4', '1.2.5', 'Cierre'],
  '1.3': ['Introducción', '1.3.1', '1.3.2', '1.3.3', '1.3.4', 'Cierre'],
  '1.5': [
    '1.5.1',
    '1.5.2',
    '1.5.3',
    '1.5.4',
    '1.5.5',
    '1.5.6',
    '1.5.7',
    '1.5.8',
    '1.5.9',
    '1.5.10',
    '1.5.11',
  ],
}

export const MIN_QUESTIONS = 80

function validateQuestion(q: Question, issues: string[]): void {
  const where = `pregunta ${q.id}`
  if (!q.prompt.trim()) issues.push(`${where}: enunciado vacío`)
  if (!q.explanation.trim()) issues.push(`${where}: falta explicación`)
  if (q.sourcePages.length === 0) issues.push(`${where}: falta referencia de páginas`)
  if (!['facil', 'media', 'dificil'].includes(q.difficulty)) {
    issues.push(`${where}: dificultad inválida "${q.difficulty}"`)
  }
  switch (q.type) {
    case 'multiple': {
      if (q.options.length < 2) issues.push(`${where}: menos de 2 opciones`)
      if (q.correct.length === 0) issues.push(`${where}: sin respuesta correcta`)
      if (!q.multi && q.correct.length !== 1) {
        issues.push(`${where}: opción múltiple simple con ${q.correct.length} respuestas correctas`)
      }
      for (const idx of q.correct) {
        if (idx < 0 || idx >= q.options.length) issues.push(`${where}: índice correcto fuera de rango (${idx})`)
      }
      if (new Set(q.options).size !== q.options.length) issues.push(`${where}: opciones duplicadas`)
      if (q.options.some((o) => !o.trim())) issues.push(`${where}: opción vacía`)
      break
    }
    case 'boolean': {
      if (typeof q.correct !== 'boolean') issues.push(`${where}: valor booleano inválido`)
      break
    }
    case 'classification': {
      if (q.categories.length < 2) issues.push(`${where}: menos de 2 categorías`)
      if (q.items.length === 0) issues.push(`${where}: sin ítems a clasificar`)
      for (const item of q.items) {
        if (!q.categories.includes(item.category)) {
          issues.push(`${where}: ítem "${item.text}" con categoría desconocida "${item.category}"`)
        }
      }
      break
    }
    default:
      issues.push(`${where}: tipo desconocido`)
  }
}

/** Devuelve la lista de problemas encontrados (vacía si todo es válido). */
export function validateContent(): string[] {
  const issues: string[] = []

  // 1. IDs de lección únicos.
  const lessonIds = new Set<string>()
  for (const lesson of lessons) {
    if (lessonIds.has(lesson.id)) issues.push(`lección duplicada: ${lesson.id}`)
    lessonIds.add(lesson.id)
    if (!lesson.title.trim()) issues.push(`lección ${lesson.id}: título vacío`)
    if (lesson.blocks.length === 0) issues.push(`lección ${lesson.id}: sin bloques`)
    if (lesson.learningObjectives.length === 0) issues.push(`lección ${lesson.id}: sin objetivos`)
    if (lesson.recap.length === 0) issues.push(`lección ${lesson.id}: sin cierre (recap)`)
    if (lesson.sourcePages.length === 0) issues.push(`lección ${lesson.id}: sin referencias`)
    if (lesson.practiceQuestionIds.length < 3) {
      issues.push(`lección ${lesson.id}: menos de 3 preguntas de práctica`)
    }
  }

  // 2. IDs de pregunta únicos y coherencia con lecciones.
  const questionIds = new Set<string>()
  const byId = new Map(lessons.map((l) => [l.id, l]))
  for (const q of questions) {
    if (questionIds.has(q.id)) issues.push(`pregunta duplicada: ${q.id}`)
    questionIds.add(q.id)
    const lesson = byId.get(q.lessonId)
    if (!lesson) {
      issues.push(`pregunta ${q.id}: apunta a lección inexistente "${q.lessonId}"`)
    } else if (lesson.moduleId !== q.moduleId) {
      issues.push(
        `pregunta ${q.id}: moduleId "${q.moduleId}" no coincide con la lección "${lesson.moduleId}"`,
      )
    }
    validateQuestion(q, issues)
  }

  // 3. Cada practiceQuestionId existe y pertenece a la lección.
  for (const lesson of lessons) {
    for (const qid of lesson.practiceQuestionIds) {
      const q = questions.find((x) => x.id === qid)
      if (!q) {
        issues.push(`lección ${lesson.id}: práctica "${qid}" no existe`)
      } else if (q.lessonId !== lesson.id) {
        issues.push(`lección ${lesson.id}: la práctica "${qid}" pertenece a "${q.lessonId}"`)
      }
    }
  }

  // 4. Cobertura de secciones obligatorias.
  for (const [moduleId, sections] of Object.entries(requiredSections) as [ModuleId, string[]][]) {
    const moduleLessons = lessons.filter((l) => l.moduleId === moduleId)
    for (const section of sections) {
      const covered = moduleLessons.some((l) => l.section.startsWith(section))
      if (!covered) issues.push(`cobertura: el módulo ${moduleId} no cubre la sección "${section}"`)
    }
  }

  // 5. Volumen mínimo de preguntas.
  if (questions.length < MIN_QUESTIONS) {
    issues.push(`banco insuficiente: ${questions.length} preguntas (mínimo ${MIN_QUESTIONS})`)
  }

  return issues
}
