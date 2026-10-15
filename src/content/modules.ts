import type { ModuleMeta, ModuleId } from '@/types/content'

export const modules: ModuleMeta[] = [
  {
    id: '1.1',
    order: 1,
    title: 'Filosofía de la Inteligencia Artificial',
    shortTitle: 'Filosofía de la IA',
    description:
      'Qué es la IA, los cuatro enfoques de Russell y Norvig, el Test de Turing, la Habitación China y la consciencia artificial.',
    sourceRange: 'pp. 1–50',
    accent: 'emerald',
  },
  {
    id: '1.2',
    order: 2,
    title: 'Historia de la Inteligencia Artificial',
    shortTitle: 'Historia de la IA',
    description:
      'De los autómatas mitológicos a la era del deep learning: orígenes, nacimiento formal, inviernos, resurgimiento y presente.',
    sourceRange: 'pp. 1–57',
    accent: 'blue',
  },
  {
    id: '1.3',
    order: 3,
    title: 'Estado actual de la Inteligencia Artificial',
    shortTitle: 'Estado actual de la IA',
    description:
      'Grandes modelos de lenguaje, IA generativa, aplicaciones contemporáneas y tendencias y desafíos con cifras fechadas 2025–2026.',
    sourceRange: 'pp. 1–45',
    accent: 'violet',
  },
  {
    id: '1.5',
    order: 4,
    title: 'Problemas computacionales y formulación',
    shortTitle: 'Formulación de problemas',
    description:
      'Cómo pasar de un problema real a una formulación computacional: decisiones, restricciones, objetivos, espacios de búsqueda y selección del enfoque.',
    sourceRange: 'pp. 1–46',
    accent: 'amber',
  },
]

export const moduleById = new Map<ModuleId, ModuleMeta>(modules.map((m) => [m.id, m]))

export function getModule(id: ModuleId): ModuleMeta {
  const found = moduleById.get(id)
  if (!found) throw new Error(`Módulo desconocido: ${id}`)
  return found
}
