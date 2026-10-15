/**
 * Tipos de contenido del sitio. El contenido se carga de forma estática
 * (imports en build), nunca se parsean PDFs en el navegador.
 */

export type ModuleId = '1.1' | '1.2' | '1.3' | '1.5'

export type Difficulty = 'facil' | 'media' | 'dificil'

export type QuestionType = 'multiple' | 'boolean' | 'classification'

/** Origen de una afirmación o ejercicio. */
export type Origin = 'fuente' | 'didactico'

export type CalloutVariant =
  | 'info'
  | 'key'
  | 'warning'
  | 'error'
  | 'example'
  | 'source'
  | 'didactic'

/** Identificadores de widgets interactivos registrados en Interactive.tsx */
export type InteractiveId =
  | 'russell-matrix'
  | 'agent-cycle'
  | 'turing-test'
  | 'chinese-room'
  | 'consciousness-compare'
  | 'disciplines-comparator'
  | 'history-timeline'
  | 'ai-cycle'
  | 'token-pipeline'
  | 'attention-context'
  | 'generative-comparator'
  | 'formulation-builder'
  | 'graph-explorer'
  | 'constraint-simulator'
  | 'problem-type-sorter'
  | 'search-space-explorer'

export interface HeadingBlock {
  type: 'heading'
  level: 2 | 3
  text: string
}

export interface ParagraphBlock {
  type: 'paragraph'
  text: string
}

export interface ListBlock {
  type: 'list'
  ordered?: boolean
  items: string[]
}

export interface TableBlock {
  type: 'table'
  headers: string[]
  rows: string[][]
  caption?: string
}

export interface CalloutBlock {
  type: 'callout'
  variant: CalloutVariant
  title?: string
  text: string
}

export interface KeyTermsBlock {
  type: 'keyTerms'
  terms: { term: string; definition: string }[]
}

export interface ExampleBlock {
  type: 'example'
  title: string
  text: string
  steps?: string[]
}

export interface QuoteBlock {
  type: 'quote'
  text: string
  attribution?: string
}

export interface InteractiveBlock {
  type: 'interactive'
  component: InteractiveId
  title?: string
  hint?: string
}

export interface FigureBlock {
  type: 'figure'
  figure: FigureId
  caption?: string
}

export type FigureId =
  | 'russell-quadrants'
  | 'agent-loop'
  | 'turing-setup'
  | 'chinese-room-diagram'
  | 'timeline-bands'
  | 'llm-pipeline'
  | 'diffusion-steps'
  | 'weighted-graph'
  | 'search-space-tree'

export type ContentBlock =
  | HeadingBlock
  | ParagraphBlock
  | ListBlock
  | TableBlock
  | CalloutBlock
  | KeyTermsBlock
  | ExampleBlock
  | QuoteBlock
  | InteractiveBlock
  | FigureBlock

export interface Lesson {
  id: string
  moduleId: ModuleId
  /** Sección temática de origen, p. ej. "1.1.1" o "Introducción". */
  section: string
  title: string
  subtitle?: string
  learningObjectives: string[]
  /** Minutos estimados de lectura. */
  estimatedMinutes: number
  blocks: ContentBlock[]
  keyTerms: { term: string; definition: string }[]
  /** Puntos imprescindibles del cierre. */
  recap: string[]
  /** Error conceptual frecuente que conviene anticipar. */
  commonError?: string
  /** Referencias al material de clase, p. ej. "Tema 1.1 · pp. 8–16". */
  sourcePages: string[]
  practiceQuestionIds: string[]
}

interface QuestionBase {
  id: string
  moduleId: ModuleId
  lessonId: string
  section: string
  difficulty: Difficulty
  /** Enunciado de la pregunta. */
  prompt: string
  /** Explicación de por qué la respuesta correcta lo es. */
  explanation: string
  sourcePages: string[]
  origin: Origin
  tags?: string[]
}

export interface MultipleChoiceQuestion extends QuestionBase {
  type: 'multiple'
  options: string[]
  /** Índices (0-based) de las opciones correctas. */
  correct: number[]
  /** Permite más de una respuesta correcta. Por defecto false. */
  multi?: boolean
}

export interface BooleanQuestion extends QuestionBase {
  type: 'boolean'
  /** La afirmación es verdadera o falsa. */
  correct: boolean
}

export interface ClassificationQuestion extends QuestionBase {
  type: 'classification'
  categories: string[]
  items: { text: string; category: string }[]
}

export type Question = MultipleChoiceQuestion | BooleanQuestion | ClassificationQuestion

export interface ModuleMeta {
  id: ModuleId
  order: number
  title: string
  shortTitle: string
  description: string
  /** Rango aproximado de páginas en el material de clase. */
  sourceRange: string
  accent: 'emerald' | 'blue' | 'violet' | 'amber'
}

export interface GlossaryEntry {
  term: string
  definition: string
  moduleId: ModuleId
  lessonId: string
  sourcePages: string[]
}

export interface TimelineEvent {
  year: string
  sortYear: number
  title: string
  description: string
  /** Período histórico al que pertenece. */
  period: 'origenes' | 'nacimiento' | 'invierno' | 'resurgimiento' | 'deep-learning'
  sourcePages: string[]
}
