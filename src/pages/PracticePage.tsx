import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { BookOpen, Repeat } from 'lucide-react'
import type { ModuleId } from '@/types/content'
import { modules } from '@/content/modules'
import { questions as allQuestions } from '@/content/questions'
import { buildExam, type ExamScope } from '@/lib/exam'
import { QuizSet } from '@/components/QuizSet'
import { useProgress } from '@/state/ProgressContext'

const PRACTICE_SIZES = [5, 10, 15, 20]

export function PracticePage() {
  const [params] = useSearchParams()
  const initialScope = (params.get('tema') as ModuleId | null) ?? 'all'
  const { progress, updateSettings } = useProgress()
  const [scope, setScope] = useState<ExamScope>(initialScope)
  const [count, setCount] = useState(10)
  const [runKey, setRunKey] = useState(0)
  const [started, setStarted] = useState(false)

  const available = useMemo(
    () => (scope === 'all' ? allQuestions : allQuestions.filter((q) => q.moduleId === scope)),
    [scope],
  )

  const selected = useMemo(() => {
    if (!started) return []
    return buildExam(allQuestions, {
      scope,
      count: Math.min(count, available.length),
      shuffleQuestions: true,
      shuffleOptions: progress.settings.shuffleOptions,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started, scope, count, runKey])

  const failedCount = progress.failedQuestions.length

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Modo práctica</h1>
        <p className="text-slate-600 dark:text-slate-300">
          Preguntas con corrección inmediata, explicación al responder y opción de reintentar.
        </p>
      </header>

      <section className="card space-y-4 p-5" aria-label="Configuración de práctica">
        <fieldset>
          <legend className="mb-2 font-semibold text-slate-800 dark:text-slate-100">Tema</legend>
          <div className="flex flex-wrap gap-2">
            <button type="button" onClick={() => setScope('all')} aria-pressed={scope === 'all'} className={scope === 'all' ? 'btn-primary' : 'btn-secondary'}>
              Todo el curso
            </button>
            {modules.map((m) => (
              <button key={m.id} type="button" onClick={() => setScope(m.id)} aria-pressed={scope === m.id} className={scope === m.id ? 'btn-primary' : 'btn-secondary'}>
                {m.id} · {m.shortTitle}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="mb-2 font-semibold text-slate-800 dark:text-slate-100">Cantidad</legend>
          <div className="flex flex-wrap gap-2">
            {PRACTICE_SIZES.map((size) => (
              <button key={size} type="button" onClick={() => setCount(size)} aria-pressed={count === size} className={count === size ? 'btn-primary' : 'btn-secondary'}>
                {size}
              </button>
            ))}
          </div>
        </fieldset>

        <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
          <input
            type="checkbox"
            checked={progress.settings.immediateFeedback}
            onChange={(e) => updateSettings({ immediateFeedback: e.target.checked })}
          />
          Corrección inmediata al responder
        </label>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            className="btn-primary"
            onClick={() => {
              setStarted(true)
              setRunKey((k) => k + 1)
            }}
            disabled={available.length === 0}
          >
            <BookOpen className="h-4 w-4" /> Practicar {Math.min(count, available.length)} preguntas
          </button>
          {failedCount > 0 && (
            <Link to="/repaso" className="btn-secondary">
              <Repeat className="h-4 w-4" /> Repasar mis fallos ({failedCount})
            </Link>
          )}
        </div>
      </section>

      {started && selected.length > 0 && (
        <QuizSet
          key={runKey}
          questions={selected}
          immediateFeedback={progress.settings.immediateFeedback}
          heading={`Práctica · ${scope === 'all' ? 'todo el curso' : `tema ${scope}`}`}
        />
      )}

      {started && selected.length === 0 && (
        <p className="text-sm text-slate-500 dark:text-slate-400">No hay preguntas en este alcance.</p>
      )}
    </div>
  )
}
