import { useMemo, useState } from 'react'
import { RotateCcw, Trophy } from 'lucide-react'
import type { Question } from '@/types/content'
import { hashString, makeRng, shuffle, shuffleQuestionOptions } from '@/lib/quiz'
import { QuestionCard } from '@/components/Quiz'

interface QuizSetProps {
  questions: Question[]
  immediateFeedback?: boolean
  shuffleOptions?: boolean
  /** Título visible del conjunto (p. ej. «Mini-evaluación»). */
  heading?: string
}

export function QuizSet({
  questions,
  immediateFeedback = true,
  shuffleOptions = false,
  heading = 'Mini-evaluación',
}: QuizSetProps) {
  const [seed, setSeed] = useState(1)
  const [results, setResults] = useState<Record<string, boolean>>({})

  /**
   * La preparación es determinista para un mismo conjunto de ids y semilla.
   * Así, aunque el componente padre se re-renderice (por ejemplo al guardar
   * el progreso) y entregue un arreglo nuevo, el orden de opciones y los
   * índices correctos NO cambian y la corrección sigue siendo coherente.
   */
  const ids = questions.map((q) => q.id).join('|')
  const prepared = useMemo(() => {
    if (!shuffleOptions) return questions
    const rng = makeRng(hashString(`${ids}#${seed}`))
    const list = questions.map((q) => shuffleQuestionOptions(q, rng))
    return shuffle(list, rng)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids, shuffleOptions, seed])

  const answered = Object.keys(results).length
  const correct = Object.values(results).filter(Boolean).length
  const percent = answered === 0 ? 0 : Math.round((correct / answered) * 100)

  return (
    <section aria-label={heading} className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">{heading}</h2>
        <div className="flex items-center gap-3">
          <p className="text-sm text-slate-600 dark:text-slate-300" aria-live="polite">
            {answered}/{questions.length} respondidas · {correct} correctas
            {answered > 0 && ` (${percent} %)`}
          </p>
          <button
            type="button"
            className="btn-ghost"
            onClick={() => {
              setResults({})
              setSeed((s) => s + 1)
            }}
          >
            <RotateCcw className="h-4 w-4" /> Reiniciar
          </button>
        </div>
      </div>

      {prepared.map((q, i) => (
        <QuestionCard
          key={q.id}
          question={q}
          index={i}
          immediateFeedback={immediateFeedback}
          onAnswered={(ok) => setResults((prev) => ({ ...prev, [q.id]: ok }))}
        />
      ))}

      {answered === questions.length && questions.length > 0 && (
        <div className="card flex items-center gap-3 p-4" aria-live="polite">
          <Trophy className={`h-6 w-6 ${percent >= 80 ? 'text-brand-600' : 'text-amber-500'}`} aria-hidden="true" />
          <div>
            <p className="font-bold text-slate-900 dark:text-white">
              Resultado: {correct}/{questions.length} ({percent} %)
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {percent >= 80
                ? 'Buen dominio. Puedes avanzar a la siguiente lección.'
                : 'Repasa los errores y vuelve a intentarlo; revisa la explicación de cada fallo.'}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
