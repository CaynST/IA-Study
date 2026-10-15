import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Heart, Repeat } from 'lucide-react'
import { questions as allQuestions } from '@/content/questions'
import { QuizSet } from '@/components/QuizSet'
import { useProgress } from '@/state/ProgressContext'

export function ReviewPage() {
  const { progress } = useProgress()

  const failed = useMemo(
    () => allQuestions.filter((q) => progress.failedQuestions.includes(q.id)),
    [progress.failedQuestions],
  )
  const favorites = useMemo(
    () => allQuestions.filter((q) => progress.favoriteQuestions.includes(q.id)),
    [progress.favoriteQuestions],
  )
  const combined = useMemo(() => {
    const map = new Map<string, (typeof allQuestions)[number]>()
    for (const q of [...failed, ...favorites]) map.set(q.id, q)
    return [...map.values()]
  }, [failed, favorites])

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Repaso</h1>
        <p className="text-slate-600 dark:text-slate-300">
          Revisión espaciada simple: aquí aparecen las preguntas que fallaste y las que marcaste como favoritas.
        </p>
      </header>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="card flex items-center gap-3 p-4">
          <Repeat className="h-6 w-6 text-amber-500" aria-hidden="true" />
          <div>
            <p className="font-bold text-slate-900 dark:text-white">{failed.length} preguntas falladas</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">Se eliminan del repaso al responderlas bien.</p>
          </div>
        </div>
        <div className="card flex items-center gap-3 p-4">
          <Heart className="h-6 w-6 text-rose-500" aria-hidden="true" />
          <div>
            <p className="font-bold text-slate-900 dark:text-white">{favorites.length} favoritas</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">Las guardas con el botón «Guardar» en cada pregunta.</p>
          </div>
        </div>
      </div>

      {combined.length === 0 ? (
        <div className="card p-6 text-center">
          <p className="text-slate-600 dark:text-slate-300">
            Todavía no hay preguntas para repasar. Responde una práctica o un simulacro y marca favoritas para
            construir tu lista.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Link to="/practica" className="btn-primary">Ir a práctica</Link>
            <Link to="/simulacro" className="btn-secondary">Hacer un simulacro</Link>
          </div>
        </div>
      ) : (
        <QuizSet questions={combined} heading="Preguntas a repasar" shuffleOptions={progress.settings.shuffleOptions} />
      )}
    </div>
  )
}
