import { useMemo, useState } from 'react'
import { Check, Heart, RotateCcw, Star, X } from 'lucide-react'
import type { Question } from '@/types/content'
import { difficultyLabel, describeCorrectAnswer } from '@/lib/quiz'
import { useProgress } from '@/state/ProgressContext'
import { RichText } from '@/components/RichText'

interface QuestionCardProps {
  question: Question
  index?: number
  /** Corrección inmediata al responder. Si es false, se responde y se revela al final. */
  immediateFeedback?: boolean
  onAnswered?: (correct: boolean) => void
}

function typeLabel(q: Question): string {
  if (q.type === 'multiple') return q.multi ? 'Opción múltiple (varias)' : 'Opción múltiple'
  if (q.type === 'boolean') return 'Verdadero / falso'
  return 'Clasificación'
}

type OptionStatus = 'neutral' | 'chosen' | 'correct-chosen' | 'correct-missed' | 'wrong-chosen'

const optionStatusClasses: Record<OptionStatus, string> = {
  neutral: 'border-slate-200 dark:border-slate-700',
  chosen: 'border-brand-500 bg-brand-50 dark:border-brand-700 dark:bg-brand-950/40',
  'correct-chosen': 'border-brand-500 bg-brand-50 dark:border-brand-700 dark:bg-brand-950/40',
  'correct-missed': 'border-dashed border-brand-400 bg-white dark:border-brand-800 dark:bg-slate-900',
  'wrong-chosen': 'border-rose-400 bg-rose-50 dark:border-rose-800 dark:bg-rose-950/40',
}

function optionStatus(isCorrect: boolean, isSelected: boolean, submitted: boolean): OptionStatus {
  if (!submitted) return isSelected ? 'chosen' : 'neutral'
  if (isCorrect) return isSelected ? 'correct-chosen' : 'correct-missed'
  return isSelected ? 'wrong-chosen' : 'neutral'
}

/** Marca visual sobre una opción ya calificada. */
function OptionMark({ status }: { status: OptionStatus }) {
  if (status === 'correct-chosen') {
    return (
      <span className="ml-auto inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-brand-700 dark:text-brand-300">
        <Check className="h-4 w-4" aria-hidden="true" />
        <span className="sr-only">Seleccionada y correcta</span>
      </span>
    )
  }
  if (status === 'correct-missed') {
    return (
      <span className="ml-auto inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-brand-700 dark:text-brand-300">
        <Check className="h-4 w-4" aria-hidden="true" />
        <span className="hidden sm:inline">faltó marcarla</span>
        <span className="sr-only">Correcta, no la marcaste</span>
      </span>
    )
  }
  if (status === 'wrong-chosen') {
    return (
      <span className="ml-auto inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-rose-700 dark:text-rose-300">
        <X className="h-4 w-4" aria-hidden="true" />
        <span className="hidden sm:inline">incorrecta</span>
        <span className="sr-only">Incorrecta y marcada como correcta</span>
      </span>
    )
  }
  return null
}

export function QuestionCard({
  question,
  index,
  immediateFeedback = true,
  onAnswered,
}: QuestionCardProps) {
  const { progress, recordAnswer, toggleFavorite } = useProgress()
  const [selected, setSelected] = useState<number[]>([])
  const [boolAnswer, setBoolAnswer] = useState<boolean | null>(null)
  const [mapping, setMapping] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [correct, setCorrect] = useState<boolean | null>(null)
  const favorite = progress.favoriteQuestions.includes(question.id)

  // Opciones que el usuario marcó y no eran correctas, y correctas que no marcó.
  const wrongChosen = question.type === 'multiple' ? selected.filter((i) => !question.correct.includes(i)) : []
  const missed = question.type === 'multiple' ? question.correct.filter((i) => !selected.includes(i)) : []
  const wrongChosenTexts = question.type === 'multiple' ? wrongChosen.map((i) => question.options[i]) : []
  const missedTexts = question.type === 'multiple' ? missed.map((i) => question.options[i]) : []
  const showPerOptionMistake = question.type === 'multiple' && question.multi === true

  const answerValue = useMemo(() => {
    if (question.type === 'multiple') return selected
    if (question.type === 'boolean') return boolAnswer === true
    return mapping
  }, [question.type, selected, boolAnswer, mapping])

  const canSubmit =
    question.type === 'multiple'
      ? selected.length > 0
      : question.type === 'boolean'
        ? boolAnswer !== null
        : question.items.every((it) => mapping[it.text])

  function submit() {
    const ok = recordAnswer(question, answerValue)
    setCorrect(ok)
    setSubmitted(true)
    onAnswered?.(ok)
  }

  function retry() {
    setSubmitted(false)
    setCorrect(null)
    setSelected([])
    setBoolAnswer(null)
    setMapping({})
  }

  return (
    <article className="card p-4 sm:p-5" aria-label={`Pregunta ${index !== undefined ? index + 1 : ''}`}>
      <header className="mb-3 flex flex-wrap items-start justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="badge bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            {typeLabel(question)}
          </span>
          <span className="badge bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            {difficultyLabel[question.difficulty]}
          </span>
          <span className="text-slate-400">Tema {question.moduleId} · {question.section}</span>
        </div>
        <button
          type="button"
          onClick={() => toggleFavorite(question.id)}
          className="btn-ghost px-2 py-1"
          aria-pressed={favorite}
          aria-label={favorite ? 'Quitar de favoritas' : 'Añadir a favoritas'}
        >
          <Heart className={`h-4 w-4 ${favorite ? 'fill-rose-500 text-rose-500' : ''}`} />
          <span className="text-xs">{favorite ? 'Favorita' : 'Guardar'}</span>
        </button>
      </header>

      <p className="text-base font-medium text-slate-800 dark:text-slate-100">
        {index !== undefined && <span className="mr-2 font-bold text-brand-700 dark:text-brand-300">{index + 1}.</span>}
        <RichText text={question.prompt} />
      </p>

      <div className="mt-3 space-y-2">
        {question.type === 'multiple' &&
          question.options.map((opt, i) => {
            const isSelected = selected.includes(i)
            const status = optionStatus(question.correct.includes(i), isSelected, submitted)
            return (
              <label
                key={i}
                className={`flex cursor-pointer items-start gap-3 rounded-xl border p-3 text-sm transition ${optionStatusClasses[status]} ${
                  !submitted && !isSelected ? 'hover:border-brand-300' : ''
                }`}
              >
                <input
                  type={question.multi ? 'checkbox' : 'radio'}
                  name={question.id}
                  checked={isSelected}
                  disabled={submitted}
                  onChange={() =>
                    setSelected((prev) =>
                      question.multi
                        ? prev.includes(i)
                          ? prev.filter((x) => x !== i)
                          : [...prev, i]
                        : [i],
                    )
                  }
                  className="mt-0.5"
                />
                <span className="flex-1 text-slate-700 dark:text-slate-200">
                  <RichText text={opt} />
                </span>
                {submitted && <OptionMark status={status} />}
              </label>
            )
          })}

        {question.type === 'boolean' &&
          [true, false].map((val) => {
            const label = val ? 'Verdadero' : 'Falso'
            const isSelected = boolAnswer === val
            const status = optionStatus(val === question.correct, isSelected, submitted)
            return (
              <label
                key={label}
                className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3 text-sm transition ${optionStatusClasses[status]} ${
                  !submitted && !isSelected ? 'hover:border-brand-300' : ''
                }`}
              >
                <input
                  type="radio"
                  name={question.id}
                  checked={isSelected}
                  disabled={submitted}
                  onChange={() => setBoolAnswer(val)}
                />
                <span className="flex-1">{label}</span>
                {submitted && <OptionMark status={status} />}
              </label>
            )
          })}

        {question.type === 'classification' &&
          question.items.map((item) => (
            <div
              key={item.text}
              className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-200 p-3 text-sm dark:border-slate-700"
            >
              <span className="text-slate-700 dark:text-slate-200">{item.text}</span>
              <select
                aria-label={`Categoría de: ${item.text}`}
                value={mapping[item.text] ?? ''}
                disabled={submitted}
                onChange={(e) => setMapping((prev) => ({ ...prev, [item.text]: e.target.value }))}
                className="rounded-lg border border-slate-300 bg-white px-2 py-1 dark:border-slate-700 dark:bg-slate-900"
              >
                <option value="">Elige…</option>
                {question.categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        {!submitted ? (
          <button type="button" className="btn-primary" disabled={!canSubmit} onClick={submit}>
            Comprobar
          </button>
        ) : (
          <>
            <button type="button" className="btn-secondary" onClick={retry}>
              <RotateCcw className="h-4 w-4" /> Reintentar
            </button>
            {progress.favoriteQuestions.includes(question.id) && (
              <span className="badge bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-200">
                <Star className="h-3 w-3" /> En repaso
              </span>
            )}
          </>
        )}
      </div>

      {submitted && correct !== null && (
        <div
          className={`mt-3 rounded-xl border p-3 text-sm ${
            correct
              ? 'border-brand-300 bg-brand-50 dark:border-brand-800 dark:bg-brand-950/40'
              : 'border-rose-300 bg-rose-50 dark:border-rose-800 dark:bg-rose-950/40'
          }`}
          aria-live="polite"
        >
          <p className={`flex items-center gap-2 font-semibold ${correct ? 'text-brand-800 dark:text-brand-200' : 'text-rose-800 dark:text-rose-200'}`}>
            {correct ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
            {correct ? 'Correcto' : 'Incorrecto'}
          </p>
          {!correct && !showPerOptionMistake && (
            <p className="mt-1 text-slate-700 dark:text-slate-300">
              <strong>Respuesta correcta: </strong>
              {describeCorrectAnswer(question)}
            </p>
          )}
          {!correct && showPerOptionMistake && (
            <div className="mt-1 space-y-1 text-slate-700 dark:text-slate-300">
              {wrongChosenTexts.length > 0 && (
                <p>
                  <strong className="text-rose-700 dark:text-rose-300">Falló: </strong>
                  {wrongChosenTexts.map((text, k) => (
                    <span key={k}>
                      {k > 0 && ' · '}
                      <RichText text={text} />
                    </span>
                  ))}
                </p>
              )}
              {missedTexts.length > 0 && (
                <p>
                  <strong>Faltó marcar: </strong>
                  {missedTexts.map((text, k) => (
                    <span key={k}>
                      {k > 0 && ' · '}
                      <RichText text={text} />
                    </span>
                  ))}
                </p>
              )}
            </div>
          )}
          <p className="mt-1 text-slate-700 dark:text-slate-300">{question.explanation}</p>
          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
            Referencia: {question.sourcePages.join(' · ')}
            {question.origin === 'didactico' ? ' · Ejercicio didáctico' : ''}
          </p>
        </div>
      )}

      {!immediateFeedback && submitted && (
        <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
          Corrección inmediata desactivada: usaste «Comprobar» manualmente.
        </p>
      )}
    </article>
  )
}
