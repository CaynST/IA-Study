import { useMemo, useState } from 'react'
import { History } from 'lucide-react'
import { timelineEvents } from '@/content/timeline'
import { WidgetShell, ChoiceButton } from '../shared'

const periods = [
  { key: 'todos', label: 'Todos' },
  { key: 'origenes', label: 'Orígenes' },
  { key: 'nacimiento', label: 'Nacimiento formal' },
  { key: 'invierno', label: 'Inviernos' },
  { key: 'resurgimiento', label: 'Resurgimiento' },
  { key: 'deep-learning', label: 'Deep learning' },
] as const

export function HistoryTimeline() {
  const [period, setPeriod] = useState<(typeof periods)[number]['key']>('todos')
  const events = useMemo(
    () =>
      timelineEvents
        .filter((e) => period === 'todos' || e.period === period)
        .sort((a, b) => a.sortYear - b.sortYear),
    [period],
  )
  return (
    <WidgetShell
      title="Línea de tiempo filtrable de la historia de la IA"
      hint="Filtra por período y recorre los hitos. Observa la aceleración: 62 años separan a Turing de AlexNet; solo 12, a AlexNet de la Ley de IA."
    >
      <div className="flex flex-wrap gap-2">
        {periods.map((p) => (
          <ChoiceButton key={p.key} active={p.key === period} onClick={() => setPeriod(p.key)}>
            {p.label}
          </ChoiceButton>
        ))}
      </div>
      <ol className="mt-4 space-y-3 border-l-2 border-brand-300 pl-4 dark:border-brand-800">
        {events.map((e) => (
          <li key={`${e.year}-${e.title}`} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[22px] top-1.5 h-3 w-3 rounded-full bg-brand-500 ring-2 ring-brand-100 dark:ring-brand-950"
            />
            <p className="text-xs font-bold uppercase tracking-wide text-brand-700 dark:text-brand-300">
              {e.year}
            </p>
            <p className="font-semibold text-slate-900 dark:text-white">{e.title}</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">{e.description}</p>
          </li>
        ))}
      </ol>
      <p className="mt-3 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
        <History aria-hidden="true" className="h-3.5 w-3.5" /> {events.length} hitos en este filtro
      </p>
    </WidgetShell>
  )
}

const cyclePhases = [
  {
    key: 'euforia',
    title: '1 · Euforia fundacional',
    text: 'Un avance demuestra algo «imposible». Medios y financiadores anticipan una inteligencia general inminente.',
    example: 'Logic Theorist (1956), la propuesta de Dartmouth.',
  },
  {
    key: 'invierno',
    title: '2 · Invierno',
    text: 'Las promesas no se cumplen a tiempo. Se recortan fondos, cierran laboratorios y «IA» se vuelve mala palabra.',
    example: 'Informe Lighthill (1973); colapso del mercado Lisp (1987–1993).',
  },
  {
    key: 'resurgimiento',
    title: '3 · Resurgimiento',
    text: 'Nuevos datos, más cómputo y mejores algoritmos resuelven lo que frenaba la etapa anterior. El ciclo reinicia.',
    example: 'Internet y Big Data (1990–2010); GPU + ImageNet (2012).',
  },
] as const

export function AiCycle() {
  const [phase, setPhase] = useState<(typeof cyclePhases)[number]['key']>('euforia')
  const current = cyclePhases.find((p) => p.key === phase)!
  return (
    <WidgetShell
      title="El ciclo euforia → invierno → resurgimiento"
      hint="El ciclo ya ocurrió al menos dos veces. Pregunta práctica de ingeniería: ¿en qué fase estamos hoy y qué evidencia lo respalda?"
    >
      <div className="grid gap-2 sm:grid-cols-3">
        {cyclePhases.map((p, i) => (
          <button
            key={p.key}
            type="button"
            onClick={() => setPhase(p.key)}
            aria-pressed={p.key === phase}
            className={`rounded-xl border p-3 text-left text-sm transition ${
              p.key === phase
                ? 'border-brand-500 bg-brand-600 text-white'
                : 'border-slate-200 bg-white text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200'
            }`}
          >
            <span className="block text-xs opacity-80">Fase {i + 1}</span>
            <span className="font-semibold">{p.title.split(' · ')[1]}</span>
          </button>
        ))}
      </div>
      <div className="mt-3 rounded-xl bg-white p-4 dark:bg-slate-900" aria-live="polite">
        <h4 className="font-bold text-slate-900 dark:text-white">{current.title}</h4>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{current.text}</p>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          <strong>Ejemplo del material: </strong>
          {current.example}
        </p>
      </div>
    </WidgetShell>
  )
}
