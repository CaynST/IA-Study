import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import {
  BookOpen,
  BrainCircuit,
  CheckCircle2,
  ClipboardCheck,
  GraduationCap,
  Home,
  Library,
  Menu,
  Moon,
  Repeat,
  Search,
  Sun,
  TrendingUp,
  X,
} from 'lucide-react'
import { modules } from '@/content/modules'
import { lessons as allLessons } from '@/content/lessons'
import { moduleCompletion, overallCompletion } from '@/lib/progressLogic'
import { useProgress } from '@/state/ProgressContext'
import { useTheme } from '@/hooks/useTheme'

const utilityLinks = [
  { to: '/practica', label: 'Práctica', icon: BookOpen },
  { to: '/simulacro', label: 'Simulacro', icon: ClipboardCheck },
  { to: '/repaso', label: 'Repaso', icon: Repeat },
  { to: '/glosario', label: 'Glosario', icon: Library },
  { to: '/progreso', label: 'Progreso', icon: TrendingUp },
]

function ProgressBar({ value }: { value: number }) {
  return (
    <div
      className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800"
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className="h-full rounded-full bg-brand-500" style={{ width: `${value}%` }} />
    </div>
  )
}

export function Layout() {
  const [theme, toggleTheme] = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const { progress } = useProgress()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const overall = overallCompletion(allLessons, progress.lessonsCompleted)

  function submitSearch(e: React.FormEvent) {
    e.preventDefault()
    navigate(`/buscar?q=${encodeURIComponent(query)}`)
    setQuery('')
  }

  return (
    <div className="min-h-dvh">
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>

      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3">
          <button
            type="button"
            className="btn-ghost px-2 lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="sidebar"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Menú</span>
          </button>

          <Link to="/" className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
            <BrainCircuit className="h-6 w-6 text-brand-600 dark:text-brand-400" aria-hidden="true" />
            <span className="hidden sm:inline">Estudio de IA</span>
          </Link>

          <form role="search" onSubmit={submitSearch} className="ml-auto flex items-center gap-2">
            <label htmlFor="global-search" className="sr-only">
              Buscar en el temario
            </label>
            <div className="relative">
              <Search
                aria-hidden="true"
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              />
              <input
                id="global-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar lecciones, términos, preguntas…"
                className="w-40 rounded-xl border border-slate-300 bg-white py-2 pl-9 pr-3 text-sm sm:w-64 dark:border-slate-700 dark:bg-slate-900"
              />
            </div>
          </form>

          <button
            type="button"
            className="btn-ghost px-2"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Activar tema claro' : 'Activar tema oscuro'}
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <div className="mx-auto flex max-w-7xl gap-6 px-4 py-6">
        <aside
          id="sidebar"
          className={`${
            menuOpen ? 'block' : 'hidden'
          } fixed inset-x-0 bottom-0 top-[57px] z-20 overflow-y-auto border-r border-slate-200 bg-white p-4 lg:sticky lg:top-[73px] lg:block lg:h-[calc(100dvh-97px)] lg:w-72 lg:shrink-0 lg:rounded-2xl lg:border dark:border-slate-800 dark:bg-slate-950 lg:dark:bg-slate-900`}
          aria-label="Navegación del curso"
        >
          <nav className="space-y-4">
            <NavLink to="/" end className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800">
              <Home className="h-4 w-4" aria-hidden="true" /> Inicio
            </NavLink>

            <div>
              <p className="px-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                Módulos
              </p>
              <ul className="mt-1 space-y-2">
                {modules.map((m) => {
                  const moduleLessons = allLessons.filter((l) => l.moduleId === m.id)
                  const info = moduleCompletion(moduleLessons, progress.lessonsCompleted)
                  return (
                    <li key={m.id}>
                      <NavLink
                        to={`/modulo/${m.id}`}
                        className={({ isActive }) =>
                          `block rounded-lg px-3 py-2 text-sm ${isActive ? 'bg-brand-50 text-brand-800 dark:bg-brand-950 dark:text-brand-200' : 'hover:bg-slate-100 dark:hover:bg-slate-800'}`
                        }
                      >
                        <span className="flex items-center justify-between gap-2 font-medium">
                          <span>
                            {m.id} · {m.shortTitle}
                          </span>
                          {info.completed && <CheckCircle2 className="h-4 w-4 text-brand-500" aria-label="Módulo completado" />}
                        </span>
                        <span className="mt-1 block text-xs text-slate-400">
                          {info.completedLessons}/{info.totalLessons} lecciones
                        </span>
                        <span className="mt-1 block">
                          <ProgressBar value={info.percent} />
                        </span>
                      </NavLink>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div>
              <p className="px-3 text-xs font-semibold uppercase tracking-wide text-slate-400">Estudiar</p>
              <ul className="mt-1 space-y-1">
                {utilityLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <li key={link.to}>
                      <NavLink
                        to={link.to}
                        className={({ isActive }) =>
                          `flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium ${isActive ? 'bg-brand-50 text-brand-800 dark:bg-brand-950 dark:text-brand-200' : 'hover:bg-slate-100 dark:hover:bg-slate-800'}`
                        }
                      >
                        <Icon className="h-4 w-4" aria-hidden="true" /> {link.label}
                      </NavLink>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 p-3 dark:border-slate-800">
              <p className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                <GraduationCap className="h-4 w-4" aria-hidden="true" /> Progreso del curso
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                {overall.done}/{overall.total} lecciones ({overall.percent} %)
              </p>
              <span className="mt-2 block">
                <ProgressBar value={overall.percent} />
              </span>
            </div>
          </nav>
        </aside>

        <main id="contenido" className="min-w-0 flex-1 animate-fade-in">
          <Outlet />
        </main>
      </div>

      <footer className="border-t border-slate-200 py-6 text-center text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
        <p>
          Recurso de estudio basado en el material de la experiencia educativa Inteligencia Artificial
          (Ingeniería de Software). Sitio estático, sin backend.
        </p>
        <p className="mt-1">
          Los datos de 1.3 son una fotografía 2025–2026 y deben verificarse antes de citarse.
        </p>
      </footer>
    </div>
  )
}
