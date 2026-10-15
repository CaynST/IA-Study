import { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, CheckCircle2, Circle, Clock, FileText, Target } from 'lucide-react'
import { lessons as allLessons } from '@/content/lessons'
import { questions as allQuestions } from '@/content/questions'
import { getModule } from '@/content/modules'
import { LessonBlocks } from '@/components/LessonBlocks'
import { QuizSet } from '@/components/QuizSet'
import { useProgress } from '@/state/ProgressContext'
import { NotFoundPage } from '@/pages/NotFoundPage'

export function LessonPage() {
  const { lessonId } = useParams()
  const navigate = useNavigate()
  const { progress, markLessonVisited, setLessonCompleted } = useProgress()

  const lesson = lessonId ? allLessons.find((l) => l.id === lessonId) : undefined

  useEffect(() => {
    if (lesson) markLessonVisited(lesson.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lesson?.id])

  if (!lesson) return <NotFoundPage />

  const module = getModule(lesson.moduleId)
  const practice = lesson.practiceQuestionIds
    .map((id) => allQuestions.find((q) => q.id === id))
    .filter((q): q is NonNullable<typeof q> => Boolean(q))

  const index = allLessons.findIndex((l) => l.id === lesson.id)
  const prev = index > 0 ? allLessons[index - 1] : undefined
  const next = index < allLessons.length - 1 ? allLessons[index + 1] : undefined
  const isDone = progress.lessonsCompleted.includes(lesson.id)
  const completed = new Set(progress.lessonsCompleted)

  return (
    <article className="space-y-8">
      <nav aria-label="Ruta" className="text-sm text-slate-500 dark:text-slate-400">
        <Link to="/" className="link">Inicio</Link> <span aria-hidden="true">/</span>{' '}
        <Link to={`/modulo/${module.id}`} className="link">Módulo {module.id}</Link>{' '}
        <span aria-hidden="true">/</span> <span>{lesson.section}</span>
      </nav>

      <header className="border-b border-slate-200 pb-5 dark:border-slate-800">
        <p className="text-sm font-semibold text-brand-700 dark:text-brand-300">
          Módulo {module.id} · Sección {lesson.section}
        </p>
        <h1 className="mt-1 text-3xl font-bold text-slate-900 dark:text-white">{lesson.title}</h1>
        {lesson.subtitle && <p className="mt-2 text-lg text-slate-600 dark:text-slate-300">{lesson.subtitle}</p>}
        <p className="mt-3 flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" /> {lesson.estimatedMinutes} min de lectura
          </span>
          <span className="inline-flex items-center gap-1">
            <FileText className="h-3.5 w-3.5" aria-hidden="true" /> {lesson.sourcePages.join(' · ')}
          </span>
        </p>
      </header>

      <section className="card p-5" aria-labelledby="objetivos">
        <h2 id="objetivos" className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
          <Target className="h-5 w-5 text-brand-600" aria-hidden="true" /> Objetivos de aprendizaje
        </h2>
        <ul className="mt-3 space-y-1.5 text-sm text-slate-700 dark:text-slate-300">
          {lesson.learningObjectives.map((o, i) => (
            <li key={i} className="flex gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" aria-hidden="true" />
              {o}
            </li>
          ))}
        </ul>
      </section>

      <LessonBlocks blocks={lesson.blocks} />

      <section className="card p-5" aria-labelledby="terminos">
        <h2 id="terminos" className="font-bold text-slate-900 dark:text-white">Términos clave</h2>
        <dl className="mt-3 grid gap-3 sm:grid-cols-2">
          {lesson.keyTerms.map((t) => (
            <div key={t.term} className="rounded-xl border border-slate-200 p-3 dark:border-slate-800">
              <dt className="font-semibold text-slate-900 dark:text-white">{t.term}</dt>
              <dd className="text-sm text-slate-600 dark:text-slate-300">{t.definition}</dd>
            </div>
          ))}
        </dl>
      </section>

      {lesson.commonError && (
        <aside className="rounded-xl border border-rose-200 bg-rose-50 p-4 dark:border-rose-900 dark:bg-rose-950/40">
          <p className="font-semibold text-rose-800 dark:text-rose-200">Error común</p>
          <p className="mt-1 text-sm text-rose-800/90 dark:text-rose-200/90">{lesson.commonError}</p>
        </aside>
      )}

      <section className="card bg-brand-50/50 p-5 dark:bg-brand-950/20" aria-labelledby="imprescindible">
        <h2 id="imprescindible" className="font-bold text-brand-900 dark:text-brand-200">
          Lo imprescindible de esta lección
        </h2>
        <ul className="mt-3 space-y-2">
          {lesson.recap.map((r, i) => (
            <li key={i} className="flex gap-2 text-sm text-slate-700 dark:text-slate-300">
              <span className="font-bold text-brand-600 dark:text-brand-400">{i + 1}.</span>
              {r}
            </li>
          ))}
        </ul>
      </section>

      {practice.length > 0 && (
        <QuizSet questions={practice} heading="Mini-evaluación" shuffleOptions={progress.settings.shuffleOptions} />
      )}

      <section className="flex flex-wrap items-center gap-3 border-t border-slate-200 pt-5 dark:border-slate-800">
        <button
          type="button"
          className={isDone ? 'btn-secondary' : 'btn-primary'}
          onClick={() => setLessonCompleted(lesson.id, !isDone)}
          aria-pressed={isDone}
        >
          {isDone ? <Circle className="h-4 w-4" /> : <CheckCircle2 className="h-4 w-4" />}
          {isDone ? 'Marcar como no completada' : 'Marcar como completada'}
        </button>
        <Link to="/simulacro" className="btn-ghost">Ir a simulacro</Link>
      </section>

      <nav aria-label="Navegación entre lecciones" className="flex flex-wrap items-center justify-between gap-3">
        {prev ? (
          <button type="button" className="btn-secondary" onClick={() => navigate(`/leccion/${prev.id}`)}>
            <ArrowLeft className="h-4 w-4" /> {prev.title}
          </button>
        ) : (
          <span />
        )}
        {next ? (
          <button type="button" className="btn-primary" onClick={() => navigate(`/leccion/${next.id}`)}>
            {next.title} <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <span />
        )}
      </nav>

      <p className="text-xs text-slate-400">
        Lección {index + 1} de {allLessons.length} · {completed.size} completadas en total.
      </p>
    </article>
  )
}
