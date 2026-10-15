import type { ComponentType } from 'react'
import type { InteractiveId } from '@/types/content'
import {
  RussellMatrix,
  AgentCycle,
  TuringTest,
  ChineseRoom,
  ConsciousnessCompare,
  DisciplinesComparator,
} from './widgets/m1'
import { HistoryTimeline, AiCycle } from './widgets/m2'
import { TokenPipeline, AttentionContext, GenerativeComparator } from './widgets/m3'
import {
  FormulationBuilder,
  GraphExplorer,
  ConstraintSimulator,
  ProblemTypeSorter,
  SearchSpaceExplorer,
} from './widgets/m5'

const registry: Record<InteractiveId, ComponentType> = {
  'russell-matrix': RussellMatrix,
  'agent-cycle': AgentCycle,
  'turing-test': TuringTest,
  'chinese-room': ChineseRoom,
  'consciousness-compare': ConsciousnessCompare,
  'disciplines-comparator': DisciplinesComparator,
  'history-timeline': HistoryTimeline,
  'ai-cycle': AiCycle,
  'token-pipeline': TokenPipeline,
  'attention-context': AttentionContext,
  'generative-comparator': GenerativeComparator,
  'formulation-builder': FormulationBuilder,
  'graph-explorer': GraphExplorer,
  'constraint-simulator': ConstraintSimulator,
  'problem-type-sorter': ProblemTypeSorter,
  'search-space-explorer': SearchSpaceExplorer,
}

/**
 * Nota: `title` y `hint` del bloque no se usan aquí porque cada widget define
 * su propio encabezado accesible; se conservan en el tipo para autodocumentar
 * la intención pedagógica.
 */
export function Interactive({ id }: { id: InteractiveId; title?: string; hint?: string }) {
  const Component = registry[id]
  if (!Component) return null
  return <Component />
}
