import { useMemo, useState } from 'react'
import { ArrowLeft, ArrowRight, ClipboardCheck, RotateCcw, Trophy } from 'lucide-react'
import type { ModuleId, Question } from '@/types/content'
import { modules } from '@/content/modules'
import { questions as allQuestions } from '@/content/questions'
import { EXAM_SIZES, buildExam, type ExamScope } from '@/lib/exam'
import { describeCorrectAnswer, difficultyLabel, gradeAnswer, summarize } from '@/lib/quiz'
import { useProgress } from '@/state/ProgressContext'
import { RichText } from '@/components/RichText'

type Phase = 'config' | 'running' | 'results'

export function Exam() {
  const { progress, recordExam, recordAnswer } = useProgress()
  const [phase, setPhase] = useState<Phase>('config')
  const [scope, setScope] = useState<ExamScope>('all')
  const [count, setCount] = useState<number>(10)
  const [current, setCurrent] = useState(0)
  const [examQuestions, setExamQuestions] = useState<Question[]>([])
  const [answers, setAnswers] = useState<Record<string, unknown>>({})
  const [results, setResults] = useState<Record<string, boolean>>({})

  const available = useMemo(
    () => (scope === 'all' ? allQuestions : allQuestions.filter((q) => q.moduleId === scope)),
    [scope],
  )

  function start() {
    const built = buildExam(allQuestions, {
      scope,
      count: Math.min(count, available.length),
      shuffleQuestions: progress.settings.shuffleQuestions,
      shuffleOptions: progress.settings.shuffleOptions,
    })
    setExamQuestions(built)
    setAnswers({})
    setResults({})
    setCurrent(0)
    setPhase('running')
  }

  function submit() {
    const graded: Record<string, boolean> = {}
    for (const q of examQuestions) {
      const ok = gradeAnswer(q, answers[q.id]).correct
      graded[q.id] = ok
      recordAnswer(q, answers[q.id])
    }
    setResults(graded)
    const summary = summarize(examQuestions.map((q) => ({ correct: graded[q.id] ?? false })))
    recordExam({
      id: `exam-${Date.now()}`,
      date: new Date().toISOString(),
      scope,
      requested: count,
      correct: summary.correct,
      total: summary.total,
      percent: summary.percent,
      questionIds: examQuestions.map((q) => q.id),
    })
    setPhase('results')
  }

  const summary = summarize(examQuestions.map((q) => ({ correct: results[q.id] ?? false })))
  const answeredCount = examQuestions.filter((q) => answers[q.id] !== undefined).length

  if (phase === 'config') {
    return (
      <div className="space-y-6">
        <header>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Simulacro</h1>
          <p className="text-slate-600 dark:text-slate-300">
            Configura un examen tipo. No verás las soluciones hasta entregarlo.
          </p>
        </header>

        <div className="card space-y-5 p-5">
          <fieldset>
            <legend className="mb-2 font-semibold text-slate-800 dark:text-slate-100">Alcance</legend>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setScope('all')}
                aria-pressed={scope === 'all'}
                className={scope === 'all' ? 'btn-primary' : 'btn-secondary'}
              >
                Todo el curso
              </button>
              {modules.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setScope(m.id as ModuleId)}
                  aria-pressed={scope === m.id}
                  className={scope === m.id ? 'btn-primary' : 'btn-secondary'}
                >
                  {m.id} · {m.shortTitle}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="mb-2 font-semibold text-slate-800 dark:text-slate-100">
              Número de preguntas
            </legend>
            <div className="flex flex-wrap gap-2">
              {EXAM_SIZES.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setCount(size)}
                  aria-pressed={count === size}
                  className={count === size ? 'btn-primary' : 'btn-secondary'}
                >
                  {size} preguntas
                </button>
              ))}
            </div>
            {available.length < count && (
              <p className="mt-2 text-sm text-amber-700 dark:text-amber-300">
                Este alcance tiene {available.length} preguntas; el simulacro usará todas.
              </p>
            )}
          </fieldset>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Mezclar preguntas: {progress.settings.shuffleQuestions ? 'activado' : 'desactivado'} · Mezclar opciones:{' '}
            {progress.settings.shuffleOptions ? 'activado' : 'desactivado'} (configúralos en Progreso).
          </p>

          <button type="button" className="btn-primary" onClick={start} disabled={available.length === 0}>
            <ClipboardCheck className="h-4 w-4" /> Comenzar simulacro
          </button>
        </div>
      </div>
    )
  }

  if (phase === 'running') {
    const q = examQuestions[current]
    return (
      <div className="space-y-5">
        <header className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">
            Pregunta {current + 1} de {examQuestions.length}
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">{answeredCount} respondidas</p>
        </header>

        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
          <div
            className="h-full bg-brand-500 transition-all"
            style={{ width: `${((current + 1) / examQuestions.length) * 100}%` }}
            role="progressbar"
            aria-valuenow={current + 1}
            aria-valuemin={1}
            aria-valuemax={examQuestions.length}
          />
        </div>

        <article className="card p-5">
          <p className="mb-1 text-xs text-slate-400">
            Tema {q.moduleId} · {q.section} · {difficultyLabel[q.difficulty]}
          </p>
          <p className="text-base font-medium text-slate-800 dark:text-slate-100">
            <RichText text={q.prompt} />
          </p>
          <div className="mt-3 space-y-2">
            {q.type === 'multiple' &&
              q.options.map((opt, i) => {
                const selected = (answers[q.id] as number[] | undefined)?.includes(i) ?? false
                return (
                  <label
                    key={i}
                    className={`flex cursor-pointer items-start gap-3 rounded-xl border p-3 text-sm ${
                      selected
                        ? 'border-brand-500 bg-brand-50 dark:border-brand-700 dark:bg-brand-950/40'
                        : 'border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    <input
                      type={q.multi ? 'checkbox' : 'radio'}
                      name={q.id}
                      checked={selected}
                      onChange={() =>
                        setAnswers((prev) => {
                          const cur = (prev[q.id] as number[] | undefined) ?? []
                          const next = q.multi
                            ? cur.includes(i)
                              ? cur.filter((x) => x !== i)
                              : [...cur, i]
                            : [i]
                          return { ...prev, [q.id]: next }
                        })
                      }
                      className="mt-0.5"
                    />
                    <span className="text-slate-700 dark:text-slate-200">
                      <RichText text={opt} />
                    </span>
                  </label>
                )
              })}

            {q.type === 'boolean' &&
              [true, false].map((val) => (
                <label
                  key={String(val)}
                  className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3 text-sm ${
                    answers[q.id] === val
                      ? 'border-brand-500 bg-brand-50 dark:border-brand-700 dark:bg-brand-950/40'
                      : 'border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <input
                    type="radio"
                    name={q.id}
                    checked={answers[q.id] === val}
                    onChange={() => setAnswers((prev) => ({ ...prev, [q.id]: val }))}
                  />
                  {val ? 'Verdadero' : 'Falso'}
                </label>
              ))}

            {q.type === 'classification' &&
              q.items.map((item) => {
                const mapping = (answers[q.id] as Record<string, string> | undefined) ?? {}
                return (
                  <div
                    key={item.text}
                    className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-200 p-3 text-sm dark:border-slate-700"
                  >
                    <span className="text-slate-700 dark:text-slate-200">{item.text}</span>
                    <select
                      aria-label={`Categoría de: ${item.text}`}
                      value={mapping[item.text] ?? ''}
                      onChange={(e) =>
                        setAnswers((prev) => ({
                          ...prev,
                          [q.id]: { ...mapping, [item.text]: e.target.value },
                        }))
                      }
                      className="rounded-lg border border-slate-300 bg-white px-2 py-1 dark:border-slate-700 dark:bg-slate-900"
                    >
                      <option value="">Elige…</option>
                      {q.categories.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                )
              })}
          </div>
        </article>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex gap-2">
            <button
              type="button"
              className="btn-secondary"
              onClick={() => setCurrent((c) => Math.max(0, c - 1))}
              disabled={current === 0}
            >
              <ArrowLeft className="h-4 w-4" /> Anterior
            </button>
            <button
              type="button"
              className="btn-secondary"
              onClick={() => setCurrent((c) => Math.min(examQuestions.length - 1, c + 1))}
              disabled={current === examQuestions.length - 1}
            >
              Siguiente <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <button type="button" className="btn-primary" onClick={submit}>
            <ClipboardCheck className="h-4 w-4" /> Entregar examen
          </button>
        </div>

        <nav aria-label="Índice de preguntas" className="flex flex-wrap gap-1.5">
          {examQuestions.map((qq, i) => (
            <button
              key={qq.id}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={`Ir a la pregunta ${i + 1}`}
              className={`h-8 w-8 rounded-lg text-xs font-semibold ${
                i === current
                  ? 'bg-brand-600 text-white'
                  : answers[qq.id] !== undefined
                    ? 'bg-brand-100 text-brand-800 dark:bg-brand-950 dark:text-brand-200'
                    : 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </nav>
      </div>
    )
  }

  // Resultados
  return (
    <div className="space-y-6">
      <header className="card flex flex-wrap items-center gap-4 p-5">
        <Trophy
          className={`h-10 w-10 ${summary.percent >= 80 ? 'text-brand-600' : 'text-amber-500'}`}
          aria-hidden="true"
        />
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Resultado del simulacro</h1>
          <p className="text-slate-600 dark:text-slate-300">
            {summary.correct} de {summary.total} correctas ({summary.percent} %)
          </p>
        </div>
        <div className="ml-auto flex gap-2">
          <button
            type="button"
            className="btn-secondary"
            onClick={() => {
              setPhase('config')
            }}
          >
            Nuevo simulacro
          </button>
          <button type="button" className="btn-primary" onClick={start}>
            <RotateCcw className="h-4 w-4" /> Repetir
          </button>
        </div>
      </header>

      <ol className="space-y-4">
        {examQuestions.map((q, i) => {
          const ok = results[q.id]
          return (
            <li key={q.id} className="card p-4">
              <div className="mb-1 flex flex-wrap items-center gap-2 text-xs">
                <span
                  className={`badge ${
                    ok
                      ? 'bg-brand-100 text-brand-800 dark:bg-brand-950 dark:text-brand-200'
                      : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-200'
                  }`}
                >
                  {ok ? 'Correcta' : 'Incorrecta'}
                </span>
                <span className="text-slate-400">
                  {i + 1}. Tema {q.moduleId} · {q.section}
                </span>
              </div>
              <p className="font-medium text-slate-800 dark:text-slate-100">
                <RichText text={q.prompt} />
              </p>
              {!ok && (
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                  <strong>Respuesta correcta: </strong>
                  {describeCorrectAnswer(q)}
                </p>
              )}
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{q.explanation}</p>
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                Referencia: {q.sourcePages.join(' · ')}
                {q.origin === 'didactico' ? ' · Ejercicio didáctico' : ''}
              </p>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
