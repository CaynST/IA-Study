import { Link, useParams } from 'react-router-dom'
import { CheckCircle2, Circle, Clock, PlayCircle } from 'lucide-react'
import { modules } from '@/content/modules'
import { lessons as allLessons } from '@/content/lessons'
import { moduleCompletion } from '@/lib/progressLogic'
import { useProgress } from '@/state/ProgressContext'
import { NotFoundPage } from '@/pages/NotFoundPage'

export function ModulePage() {
  const { moduleId } = useParams()
  const { progress } = useProgress()
  const module = modules.find((m) => m.id === moduleId)
  if (!module) return <NotFoundPage />

  const moduleLessons = allLessons.filter((l) => l.moduleId === module.id)
  const info = moduleCompletion(moduleLessons, progress.lessonsCompleted)
  const completed = new Set(progress.lessonsCompleted)

  return (
    <div className="space-y-6">
      <nav aria-label="Ruta" className="text-sm text-slate-500 dark:text-slate-400">
        <Link to="/" className="link">Inicio</Link> <span aria-hidden="true">/</span> Módulo {module.id}
      </nav>

      <header className="card p-6">
        <p className="text-sm font-semibold text-brand-700 dark:text-brand-300">
          Módulo {module.id} · {module.sourceRange}
        </p>
        <h1 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">{module.title}</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">{module.description}</p>
        <div className="mt-4 flex flex-wrap items-center gap-4">
          <div className="min-w-48 flex-1">
            <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
              <span>{info.completedLessons} de {info.totalLessons} lecciones completadas</span>
              <span>{info.percent} %</span>
            </div>
            <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
              <div className="h-full bg-brand-500" style={{ width: `${info.percent}%` }} />
            </div>
          </div>
          <Link to={`/practica?tema=${module.id}`} className="btn-secondary">
            Practicar este módulo
          </Link>
        </div>
      </header>

      <ol className="space-y-3">
        {moduleLessons.map((lesson, i) => {
          const isDone = completed.has(lesson.id)
          return (
            <li key={lesson.id}>
              <Link
                to={`/leccion/${lesson.id}`}
                className="card flex items-center gap-4 p-4 transition hover:border-brand-300 hover:shadow-sm"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                  {i + 1}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-2 text-xs text-slate-400">
                    Sección {lesson.section}
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3 w-3" aria-hidden="true" /> {lesson.estimatedMinutes} min
                    </span>
                  </span>
                  <span className="block font-semibold text-slate-900 dark:text-white">{lesson.title}</span>
                  {lesson.subtitle && (
                    <span className="block truncate text-sm text-slate-600 dark:text-slate-300">
                      {lesson.subtitle}
                    </span>
                  )}
                </span>
                {isDone ? (
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-500" aria-label="Completada" />
                ) : (
                  <Circle className="h-5 w-5 shrink-0 text-slate-300 dark:text-slate-600" aria-label="Pendiente" />
                )}
              </Link>
            </li>
          )
        })}
      </ol>

      {moduleLessons[0] && (
        <Link to={`/leccion/${moduleLessons[0].id}`} className="btn-primary">
          <PlayCircle className="h-4 w-4" /> Empezar el módulo
        </Link>
      )}
    </div>
  )
}
