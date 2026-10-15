import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Library, Search } from 'lucide-react'
import type { ModuleId } from '@/types/content'
import { sortedGlossary } from '@/content/glossary'
import { modules } from '@/content/modules'

function normalize(text: string) {
  return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

export function GlossaryPage() {
  const [params] = useSearchParams()
  const [query, setQuery] = useState(params.get('q') ?? '')
  const [moduleFilter, setModuleFilter] = useState<ModuleId | 'all'>('all')

  const filtered = useMemo(() => {
    const q = normalize(query.trim())
    return sortedGlossary.filter((entry) => {
      if (moduleFilter !== 'all' && entry.moduleId !== moduleFilter) return false
      if (!q) return true
      return normalize(entry.term).includes(q) || normalize(entry.definition).includes(q)
    })
  }, [query, moduleFilter])

  return (
    <div className="space-y-6">
      <header>
        <h1 className="flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
          <Library className="h-6 w-6 text-brand-600" aria-hidden="true" /> Glosario
        </h1>
        <p className="text-slate-600 dark:text-slate-300">
          Términos clave del temario, con su definición y la lección donde se explican.
        </p>
      </header>

      <div className="card flex flex-wrap items-center gap-3 p-4">
        <div className="relative min-w-56 flex-1">
          <Search aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <label htmlFor="glosario-buscar" className="sr-only">Buscar término</label>
          <input
            id="glosario-buscar"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar término…"
            className="w-full rounded-xl border border-slate-300 bg-white py-2 pl-9 pr-3 text-sm dark:border-slate-700 dark:bg-slate-900"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <button type="button" onClick={() => setModuleFilter('all')} aria-pressed={moduleFilter === 'all'} className={moduleFilter === 'all' ? 'btn-primary' : 'btn-secondary'}>
            Todos
          </button>
          {modules.map((m) => (
            <button key={m.id} type="button" onClick={() => setModuleFilter(m.id)} aria-pressed={moduleFilter === m.id} className={moduleFilter === m.id ? 'btn-primary' : 'btn-secondary'}>
              {m.id}
            </button>
          ))}
        </div>
      </div>

      <p className="text-sm text-slate-500 dark:text-slate-400">{filtered.length} términos</p>

      <dl className="grid gap-3 sm:grid-cols-2">
        {filtered.map((entry) => (
          <div key={`${entry.moduleId}-${entry.term}`} className="card p-4">
            <dt className="font-bold text-slate-900 dark:text-white">{entry.term}</dt>
            <dd className="mt-1 text-sm text-slate-600 dark:text-slate-300">{entry.definition}</dd>
            <dd className="mt-2 text-xs text-slate-400">
              Tema {entry.moduleId} ·{' '}
              <Link to={`/leccion/${entry.lessonId}`} className="link">ver lección</Link>
            </dd>
          </div>
        ))}
      </dl>

      {filtered.length === 0 && (
        <p className="text-sm text-slate-500 dark:text-slate-400">No se encontraron términos con ese criterio.</p>
      )}
    </div>
  )
}
