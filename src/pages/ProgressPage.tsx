import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Download, Trash2, Upload } from 'lucide-react'
import { lessons as allLessons } from '@/content/lessons'
import { globalStats, overallCompletion } from '@/lib/progressLogic'
import { useProgress } from '@/state/ProgressContext'

export function ProgressPage() {
  const { progress, exportJson, importJson, resetAll, updateSettings } = useProgress()
  const [message, setMessage] = useState<string | null>(null)
  const [importText, setImportText] = useState('')
  const fileRef = useRef<HTMLInputElement>(null)

  const overall = overallCompletion(allLessons, progress.lessonsCompleted)
  const stats = globalStats(progress)

  function download() {
    const blob = new Blob([exportJson()], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `progreso-ia-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
    URL.revokeObjectURL(url)
    setMessage('Progreso exportado como archivo JSON.')
  }

  function doImport(json: string) {
    const result = importJson(json)
    setMessage(result.ok ? 'Progreso importado correctamente.' : `Error al importar: ${result.error}`)
    if (result.ok) setImportText('')
  }

  function onFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => doImport(String(reader.result))
    reader.onerror = () => setMessage('No se pudo leer el archivo.')
    reader.readAsText(file)
  }

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Progreso y datos</h1>
        <p className="text-slate-600 dark:text-slate-300">
          Todo se guarda localmente en tu navegador (localStorage). Nada se envía a ningún servidor.
        </p>
      </header>

      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4" aria-label="Resumen">
        {[
          { label: 'Lecciones completadas', value: `${overall.done}/${overall.total}` },
          { label: 'Preguntas respondidas', value: stats.questionsAnswered },
          { label: 'Precisión media', value: `${stats.accuracy} %` },
          { label: 'Simulacros realizados', value: stats.examsTaken },
        ].map((item) => (
          <div key={item.label} className="card p-4">
            <p className="text-xs text-slate-500 dark:text-slate-400">{item.label}</p>
            <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">{item.value}</p>
          </div>
        ))}
      </section>

      <section className="card p-5" aria-labelledby="ajustes">
        <h2 id="ajustes" className="font-bold text-slate-900 dark:text-white">Ajustes de estudio</h2>
        <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
          {(
            [
              ['immediateFeedback', 'Corrección inmediata en práctica'],
              ['shuffleQuestions', 'Mezclar el orden de las preguntas en simulacros'],
              ['shuffleOptions', 'Mezclar las opciones de respuesta'],
            ] as const
          ).map(([key, label]) => (
            <li key={key}>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={progress.settings[key]}
                  onChange={(e) => updateSettings({ [key]: e.target.checked })}
                />
                {label}
              </label>
            </li>
          ))}
        </ul>
      </section>

      <section className="card p-5" aria-labelledby="historial">
        <h2 id="historial" className="font-bold text-slate-900 dark:text-white">Historial de simulacros</h2>
        {progress.examHistory.length === 0 ? (
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Aún no has realizado simulacros. <Link to="/simulacro" className="link">Empieza uno</Link>.
          </p>
        ) : (
          <div className="mt-3 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="text-slate-500 dark:text-slate-400">
                  <th scope="col" className="py-2 pr-4">Fecha</th>
                  <th scope="col" className="py-2 pr-4">Alcance</th>
                  <th scope="col" className="py-2 pr-4">Puntaje</th>
                </tr>
              </thead>
              <tbody>
                {progress.examHistory.map((e) => (
                  <tr key={e.id} className="border-t border-slate-100 dark:border-slate-800">
                    <td className="py-2 pr-4">{new Date(e.date).toLocaleString('es-MX')}</td>
                    <td className="py-2 pr-4">{e.scope === 'all' ? 'Todo el curso' : `Tema ${e.scope}`}</td>
                    <td className="py-2 pr-4 font-semibold">
                      {e.correct}/{e.total} ({e.percent} %)
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section className="card p-5" aria-labelledby="datos">
        <h2 id="datos" className="font-bold text-slate-900 dark:text-white">Exportar, importar o borrar</h2>
        {message && (
          <p className="mt-2 rounded-lg bg-brand-50 p-2 text-sm text-brand-800 dark:bg-brand-950 dark:text-brand-200" role="status">
            {message}
          </p>
        )}
        <div className="mt-3 flex flex-wrap gap-3">
          <button type="button" className="btn-primary" onClick={download}>
            <Download className="h-4 w-4" /> Exportar a JSON
          </button>
          <button
            type="button"
            className="btn-secondary"
            onClick={() => fileRef.current?.click()}
          >
            <Upload className="h-4 w-4" /> Importar archivo
          </button>
          <input ref={fileRef} type="file" accept="application/json,.json" onChange={onFile} className="hidden" />
        </div>

        <details className="mt-4">
          <summary className="cursor-pointer text-sm font-medium text-slate-700 dark:text-slate-200">
            Exportar o importar pegando texto
          </summary>
          <label htmlFor="export-box" className="mt-2 block text-sm text-slate-600 dark:text-slate-300">
            Contenido exportado
          </label>
          <textarea
            id="export-box"
            readOnly
            value={exportJson()}
            rows={5}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-slate-50 p-2 font-mono text-xs dark:border-slate-700 dark:bg-slate-900"
          />
          <label htmlFor="import-box" className="mt-3 block text-sm text-slate-600 dark:text-slate-300">
            Pegar para importar
          </label>
          <textarea
            id="import-box"
            value={importText}
            onChange={(e) => setImportText(e.target.value)}
            rows={4}
            placeholder='{"data": { ... }}'
            className="mt-1 w-full rounded-lg border border-slate-300 p-2 font-mono text-xs dark:border-slate-700 dark:bg-slate-900"
          />
          <button
            type="button"
            className="btn-secondary mt-2"
            disabled={!importText.trim()}
            onClick={() => doImport(importText)}
          >
            Importar texto
          </button>
        </details>

        <hr className="my-4 border-slate-200 dark:border-slate-800" />
        <button
          type="button"
          className="btn-secondary border-rose-300 text-rose-700 hover:bg-rose-50 dark:border-rose-900 dark:text-rose-300"
          onClick={() => {
            if (window.confirm('¿Borrar todo tu progreso local? Esta acción no se puede deshacer.')) {
              resetAll()
              setMessage('Datos locales borrados.')
            }
          }}
        >
          <Trash2 className="h-4 w-4" /> Borrar datos locales
        </button>
      </section>
    </div>
  )
}
