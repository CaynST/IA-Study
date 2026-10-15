import { Link, useSearchParams } from 'react-router-dom'
import { Library, ListChecks, Search as SearchIcon } from 'lucide-react'
import { RichText } from '@/components/RichText'
import { runSearch, type SearchKind } from '@/lib/search'

const kindLabels: Record<SearchKind, { label: string; className: string }> = {
  leccion: { label: 'Lección', className: 'bg-brand-100 text-brand-800 dark:bg-brand-950 dark:text-brand-200' },
  pregunta: { label: 'Pregunta', className: 'bg-deep-100 text-deep-800 dark:bg-deep-950 dark:text-deep-200' },
  termino: { label: 'Término', className: 'bg-violet-100 text-violet-800 dark:bg-violet-950 dark:text-violet-200' },
}

export function SearchPage() {
  const [params] = useSearchParams()
  const query = params.get('q') ?? ''
  const results = runSearch(query)

  return (
    <div className="space-y-6">
      <header>
        <h1 className="flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
          <SearchIcon className="h-6 w-6 text-brand-600" aria-hidden="true" /> Buscador
        </h1>
        <p className="text-slate-600 dark:text-slate-300">
          {query ? (
            <>
              {results.length} resultados para «<strong>{query}</strong>»
            </>
          ) : (
            'Escribe al menos dos letras en el buscador superior para encontrar lecciones, términos y preguntas.'
          )}
        </p>
      </header>

      {query && results.length === 0 && (
        <div className="card p-6 text-center text-slate-600 dark:text-slate-300">
          Sin resultados. Prueba con otro término o revisa el{' '}
          <Link to="/glosario" className="link">
            glosario
          </Link>
          .
        </div>
      )}

      <ul className="space-y-3">
        {results.map((r) => {
          const meta = kindLabels[r.kind]
          const Icon = r.kind === 'pregunta' ? ListChecks : r.kind === 'termino' ? Library : SearchIcon
          return (
            <li key={`${r.kind}-${r.id}`}>
              <Link to={r.to} className="card flex items-start gap-3 p-4 transition hover:border-brand-300">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-slate-400" aria-hidden="true" />
                <span className="min-w-0 flex-1">
                  <span className={`badge ${meta.className}`}>{meta.label}</span>{' '}
                  <span className="text-xs text-slate-400">Tema {r.moduleId}</span>
                  <span className="mt-1 block font-semibold text-slate-900 dark:text-white">
                    <RichText text={r.title} />
                  </span>
                  <span className="mt-0.5 block line-clamp-2 text-sm text-slate-600 dark:text-slate-300">
                    <RichText text={r.snippet} />
                  </span>
                </span>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
