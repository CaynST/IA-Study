import { Link } from 'react-router-dom'
import { Compass } from 'lucide-react'

export function NotFoundPage() {
  return (
    <div className="card mx-auto max-w-lg p-8 text-center">
      <Compass className="mx-auto h-10 w-10 text-brand-600" aria-hidden="true" />
      <h1 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">Contenido no encontrado</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">
        La página o lección que buscas no existe. Puedes volver al inicio o explorar el temario.
      </p>
      <div className="mt-5 flex flex-wrap justify-center gap-3">
        <Link to="/" className="btn-primary">Ir al inicio</Link>
        <Link to="/glosario" className="btn-secondary">Ver glosario</Link>
      </div>
    </div>
  )
}
