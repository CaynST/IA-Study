import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BookOpen,
  ClipboardCheck,
  Flame,
  PlayCircle,
  Target,
  TrendingUp,
} from 'lucide-react'
import { modules } from '@/content/modules'
import { lessons as allLessons } from '@/content/lessons'
import { questions } from '@/content/questions'
import { globalStats, moduleCompletion, overallCompletion, recommendedLesson, weakTopics } from '@/lib/progressLogic'
import { useProgress } from '@/state/ProgressContext'

const accentBg: Record<string, string> = {
  emerald: 'bg-brand-50 dark:bg-brand-950/40',
  blue: 'bg-deep-50 dark:bg-deep-950/40',
  violet: 'bg-violet-50 dark:bg-violet-950/40',
  amber: 'bg-amber-50 dark:bg-amber-950/40',
}
const accentText: Record<string, string> = {
  emerald: 'text-brand-700 dark:text-brand-300',
  blue: 'text-deep-700 dark:text-deep-300',
  violet: 'text-violet-700 dark:text-violet-300',
  amber: 'text-amber-700 dark:text-amber-300',
}

export function HomePage() {
  const { progress } = useProgress()
  const overall = overallCompletion(allLessons, progress.lessonsCompleted)
  const next = recommendedLesson(allLessons, progress)
  const weak = weakTopics(allLessons, questions, progress).slice(0, 4)
  const stats = globalStats(progress)

  return (
    <div className="space-y-8">
      <section className="card overflow-hidden">
        <div className="bg-gradient-to-br from-brand-600 to-deep-700 p-6 text-white sm:p-8">
          <p className="text-sm font-medium uppercase tracking-wide text-brand-100">
            Curso de Inteligencia Artificial · Ingeniería de Software
          </p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Estudia IA con lecciones, práctica y simulacros</h1>
          <p className="mt-3 max-w-2xl text-brand-50">
            Los cuatro temas del capítulo 1 convertidos en lecciones originales, ejercicios interactivos y un banco de
            preguntas con explicación y referencia. Todo funciona sin conexión ni cuentas.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {next && (
              <Link to={`/leccion/${next.id}`} className="btn bg-white text-brand-700 hover:bg-brand-50">
                <PlayCircle className="h-4 w-4" /> Continuar: {next.title}
              </Link>
            )}
            <Link to="/simulacro" className="btn border border-white/40 text-white hover:bg-white/10">
              <ClipboardCheck className="h-4 w-4" /> Simulacro
            </Link>
            <Link to="/practica" className="btn border border-white/40 text-white hover:bg-white/10">
              <BookOpen className="h-4 w-4" /> Practicar
            </Link>
          </div>
        </div>
        <dl className="grid grid-cols-2 divide-slate-200 border-t border-slate-200 sm:grid-cols-4 dark:divide-slate-800 dark:border-slate-800">
          {[
            { label: 'Lecciones completadas', value: `${overall.done}/${overall.total}` },
            { label: 'Preguntas respondidas', value: stats.questionsAnswered },
            { label: 'Precisión media', value: `${stats.accuracy} %` },
            { label: 'Mejor simulacro', value: `${stats.bestExam} %` },
          ].map((item) => (
            <div key={item.label} className="p-4 text-center">
              <dt className="text-xs text-slate-500 dark:text-slate-400">{item.label}</dt>
              <dd className="mt-1 text-xl font-bold text-slate-900 dark:text-white">{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="modulos-titulo">
        <h2 id="modulos-titulo" className="mb-3 flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white">
          <Target className="h-5 w-5 text-brand-600" aria-hidden="true" /> Módulos
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {modules.map((m) => {
            const moduleLessons = allLessons.filter((l) => l.moduleId === m.id)
            const info = moduleCompletion(moduleLessons, progress.lessonsCompleted)
            return (
              <Link
                key={m.id}
                to={`/modulo/${m.id}`}
                className={`card group p-5 transition hover:shadow-md ${accentBg[m.accent]}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className={`text-sm font-semibold ${accentText[m.accent]}`}>Módulo {m.id}</p>
                    <h3 className="mt-1 font-bold text-slate-900 dark:text-white">{m.title}</h3>
                  </div>
                  <ArrowRight className="h-5 w-5 shrink-0 text-slate-400 transition group-hover:translate-x-0.5" aria-hidden="true" />
                </div>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{m.description}</p>
                <div className="mt-3 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span>{info.completedLessons}/{info.totalLessons} lecciones</span>
                  <span>{info.percent} %</span>
                </div>
                <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/70 dark:bg-slate-800">
                  <div className="h-full rounded-full bg-brand-500" style={{ width: `${info.percent}%` }} />
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        <section aria-labelledby="debiles-titulo" className="card p-5">
          <h2 id="debiles-titulo" className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
            <Flame className="h-5 w-5 text-amber-500" aria-hidden="true" /> Temas por reforzar
          </h2>
          {weak.length === 0 ? (
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Aún no hay suficientes respuestas registradas. Responde una mini-evaluación o un simulacro y aquí
              aparecerán tus temas más débiles.
            </p>
          ) : (
            <ul className="mt-3 space-y-2">
              {weak.map((w) => (
                <li key={w.lessonId}>
                  <Link to={`/leccion/${w.lessonId}`} className="flex items-center justify-between gap-3 rounded-lg border border-slate-200 px-3 py-2 text-sm hover:border-brand-300 dark:border-slate-800">
                    <span className="text-slate-700 dark:text-slate-200">
                      <span className="text-xs text-slate-400">Tema {w.moduleId} · </span>
                      {w.title}
                    </span>
                    <span className="badge bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-200">
                      {Math.round(w.accuracy * 100)} %
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section aria-labelledby="progreso-titulo" className="card p-5">
          <h2 id="progreso-titulo" className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
            <TrendingUp className="h-5 w-5 text-brand-600" aria-hidden="true" /> Tu progreso
          </h2>
          <div className="mt-3 space-y-3">
            <div>
              <div className="flex justify-between text-sm text-slate-600 dark:text-slate-300">
                <span>Avance del curso</span>
                <span>{overall.percent} %</span>
              </div>
              <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                <div className="h-full bg-brand-500" style={{ width: `${overall.percent}%` }} />
              </div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Simulacros realizados: <strong>{stats.examsTaken}</strong>. Precisión en las preguntas respondidas:{' '}
              <strong>{stats.accuracy} %</strong>.
            </p>
            <Link to="/progreso" className="btn-secondary">
              Ver progreso y exportar datos
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
