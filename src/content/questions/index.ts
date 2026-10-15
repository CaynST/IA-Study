import type { Question, ModuleId } from '@/types/content'
import { qm1Questions } from './qm1'
import { qm2Questions } from './qm2'
import { qm3Questions } from './qm3'
import { qm4Questions } from './qm4'
import { seedQuestions } from './seeds'

export const questions: Question[] = [
  ...qm1Questions,
  ...qm2Questions,
  ...qm3Questions,
  ...qm4Questions,
  ...seedQuestions,
]

export const questionById = new Map<string, Question>(questions.map((q) => [q.id, q]))

export function getQuestion(id: string): Question {
  const found = questionById.get(id)
  if (!found) throw new Error(`Pregunta no encontrada: ${id}`)
  return found
}

export function questionsByLesson(lessonId: string): Question[] {
  return questions.filter((q) => q.lessonId === lessonId)
}

export function questionsByModule(moduleId: ModuleId): Question[] {
  return questions.filter((q) => q.moduleId === moduleId)
}

export { qm1Questions, qm2Questions, qm3Questions, qm4Questions, seedQuestions }
