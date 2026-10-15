import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { Question } from '@/types/content'
import {
  clearProgress,
  defaultProgress,
  exportProgress,
  importProgress,
  loadProgress,
  saveProgress,
  type ExamRecord,
  type ProgressData,
  type ProgressSettings,
} from './progress'
import { gradeAnswer } from '@/lib/quiz'

interface ProgressContextValue {
  progress: ProgressData
  markLessonVisited: (lessonId: string) => void
  setLessonCompleted: (lessonId: string, completed: boolean) => void
  toggleFavorite: (questionId: string) => void
  recordAnswer: (question: Question, answer: unknown) => boolean
  recordExam: (record: ExamRecord) => void
  updateSettings: (partial: Partial<ProgressSettings>) => void
  resetAll: () => void
  replaceAll: (data: ProgressData) => void
  exportJson: () => string
  importJson: (json: string) => { ok: boolean; error?: string }
}

const ProgressContext = createContext<ProgressContextValue | null>(null)

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<ProgressData>(() => loadProgress())

  useEffect(() => {
    saveProgress(progress)
  }, [progress])

  const markLessonVisited = useCallback((lessonId: string) => {
    setProgress((prev) => ({
      ...prev,
      lastVisited: { ...prev.lastVisited, [lessonId]: new Date().toISOString() },
    }))
  }, [])

  const setLessonCompleted = useCallback((lessonId: string, completed: boolean) => {
    setProgress((prev) => {
      const set = new Set(prev.lessonsCompleted)
      if (completed) set.add(lessonId)
      else set.delete(lessonId)
      return { ...prev, lessonsCompleted: [...set] }
    })
  }, [])

  const toggleFavorite = useCallback((questionId: string) => {
    setProgress((prev) => {
      const set = new Set(prev.favoriteQuestions)
      if (set.has(questionId)) set.delete(questionId)
      else set.add(questionId)
      return { ...prev, favoriteQuestions: [...set] }
    })
  }, [])

  const recordAnswer = useCallback((question: Question, answer: unknown): boolean => {
    const { correct } = gradeAnswer(question, answer)
    setProgress((prev) => {
      const stat = prev.questionStats[question.id] ?? { attempts: 0, correct: 0 }
      const failed = new Set(prev.failedQuestions)
      if (correct) failed.delete(question.id)
      else failed.add(question.id)
      return {
        ...prev,
        questionStats: {
          ...prev.questionStats,
          [question.id]: { attempts: stat.attempts + 1, correct: stat.correct + (correct ? 1 : 0) },
        },
        failedQuestions: [...failed],
      }
    })
    return correct
  }, [])

  const recordExam = useCallback((record: ExamRecord) => {
    setProgress((prev) => ({ ...prev, examHistory: [record, ...prev.examHistory].slice(0, 100) }))
  }, [])

  const updateSettings = useCallback((partial: Partial<ProgressSettings>) => {
    setProgress((prev) => ({ ...prev, settings: { ...prev.settings, ...partial } }))
  }, [])

  const resetAll = useCallback(() => {
    clearProgress()
    setProgress(defaultProgress())
  }, [])

  const replaceAll = useCallback((data: ProgressData) => {
    setProgress(data)
  }, [])

  const value = useMemo<ProgressContextValue>(
    () => ({
      progress,
      markLessonVisited,
      setLessonCompleted,
      toggleFavorite,
      recordAnswer,
      recordExam,
      updateSettings,
      resetAll,
      replaceAll,
      exportJson: () => exportProgress(progress),
      importJson: (json: string) => {
        const result = importProgress(json)
        if (result.ok && result.data) {
          setProgress(result.data)
          return { ok: true }
        }
        return { ok: false, error: result.error }
      },
    }),
    [
      progress,
      markLessonVisited,
      setLessonCompleted,
      toggleFavorite,
      recordAnswer,
      recordExam,
      updateSettings,
      resetAll,
      replaceAll,
    ],
  )

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
}

export function useProgress(): ProgressContextValue {
  const ctx = useContext(ProgressContext)
  if (!ctx) throw new Error('useProgress debe usarse dentro de ProgressProvider')
  return ctx
}
