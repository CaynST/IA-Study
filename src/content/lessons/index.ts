import type { Lesson } from '@/types/content'
import { m1Lessons } from './m1'
import { m2Lessons } from './m2'
import { m3Lessons } from './m3'
import { m4Lessons } from './m4'

export const lessons: Lesson[] = [...m1Lessons, ...m2Lessons, ...m3Lessons, ...m4Lessons]

export const lessonById = new Map<string, Lesson>(lessons.map((l) => [l.id, l]))

export function getLesson(id: string): Lesson {
  const found = lessonById.get(id)
  if (!found) throw new Error(`Lección no encontrada: ${id}`)
  return found
}

export function lessonsByModule(moduleId: Lesson['moduleId']): Lesson[] {
  return lessons.filter((l) => l.moduleId === moduleId)
}

export { m1Lessons, m2Lessons, m3Lessons, m4Lessons }
