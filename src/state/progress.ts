import type { ModuleId } from '@/types/content'

export const STORAGE_KEY = 'ia-study:progress:v1'
export const STORAGE_VERSION = 1

export interface QuestionStat {
  attempts: number
  correct: number
}

export interface ExamRecord {
  id: string
  date: string
  scope: ModuleId | 'all'
  requested: number
  correct: number
  total: number
  percent: number
  questionIds: string[]
}

export interface ProgressSettings {
  immediateFeedback: boolean
  shuffleQuestions: boolean
  shuffleOptions: boolean
}

export interface ProgressData {
  version: number
  lessonsCompleted: string[]
  /** lessonId -> ISO date del último acceso. */
  lastVisited: Record<string, string>
  questionStats: Record<string, QuestionStat>
  failedQuestions: string[]
  favoriteQuestions: string[]
  examHistory: ExamRecord[]
  settings: ProgressSettings
}

export function defaultProgress(): ProgressData {
  return {
    version: STORAGE_VERSION,
    lessonsCompleted: [],
    lastVisited: {},
    questionStats: {},
    failedQuestions: [],
    favoriteQuestions: [],
    examHistory: [],
    settings: { immediateFeedback: true, shuffleQuestions: true, shuffleOptions: true },
  }
}

/** Acepta cualquier objeto y devuelve un ProgressData válido (migrando/ignorando). */
export function coerceProgress(input: unknown): ProgressData {
  const base = defaultProgress()
  if (!input || typeof input !== 'object') return base
  const raw = input as Partial<ProgressData>
  // Si la versión no coincide, se descarta para evitar datos corruptos.
  if (raw.version !== STORAGE_VERSION) return base
  return {
    version: STORAGE_VERSION,
    lessonsCompleted: Array.isArray(raw.lessonsCompleted)
      ? raw.lessonsCompleted.filter((x): x is string => typeof x === 'string')
      : [],
    lastVisited:
      raw.lastVisited && typeof raw.lastVisited === 'object' ? { ...raw.lastVisited } : {},
    questionStats:
      raw.questionStats && typeof raw.questionStats === 'object' ? { ...raw.questionStats } : {},
    failedQuestions: Array.isArray(raw.failedQuestions)
      ? raw.failedQuestions.filter((x): x is string => typeof x === 'string')
      : [],
    favoriteQuestions: Array.isArray(raw.favoriteQuestions)
      ? raw.favoriteQuestions.filter((x): x is string => typeof x === 'string')
      : [],
    examHistory: Array.isArray(raw.examHistory) ? (raw.examHistory.slice(0, 100) as ExamRecord[]) : [],
    settings: { ...base.settings, ...(raw.settings ?? {}) },
  }
}

export function loadProgress(): ProgressData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultProgress()
    return coerceProgress(JSON.parse(raw))
  } catch {
    // Modo privado, JSON corrupto o localStorage no disponible.
    return defaultProgress()
  }
}

export function saveProgress(data: ProgressData): boolean {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    return true
  } catch {
    return false
  }
}

export function clearProgress(): void {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch {
    /* ignorar */
  }
}

export function exportProgress(data: ProgressData): string {
  return JSON.stringify({ exportedAt: new Date().toISOString(), data }, null, 2)
}

export interface ImportResult {
  ok: boolean
  data?: ProgressData
  error?: string
}

export function importProgress(json: string): ImportResult {
  try {
    const parsed = JSON.parse(json)
    const payload = parsed && typeof parsed === 'object' && 'data' in parsed ? parsed.data : parsed
    const data = coerceProgress(payload)
    return { ok: true, data }
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : 'JSON inválido' }
  }
}
