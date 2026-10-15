import type { ReactNode } from 'react'

export function WidgetShell({
  title,
  hint,
  children,
}: {
  title: string
  hint?: string
  children: ReactNode
}) {
  return (
    <section
      aria-label={title}
      className="my-6 rounded-2xl border border-brand-200 bg-brand-50/40 p-4 sm:p-5 dark:border-brand-900 dark:bg-brand-950/20"
    >
      <header className="mb-3">
        <h3 className="flex items-center gap-2 text-base font-bold text-brand-900 dark:text-brand-200">
          <span className="badge bg-brand-600 text-white">Interactivo</span>
          {title}
        </h3>
        {hint && <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{hint}</p>}
      </header>
      {children}
    </section>
  )
}

export function StepNav({
  steps,
  current,
  onSelect,
  labelPrefix = 'Paso',
}: {
  steps: string[]
  current: number
  onSelect: (index: number) => void
  labelPrefix?: string
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {steps.map((step, i) => (
        <button
          key={step}
          type="button"
          onClick={() => onSelect(i)}
          aria-current={i === current ? 'step' : undefined}
          className={`rounded-lg px-3 py-1.5 text-sm font-medium transition ${
            i === current
              ? 'bg-brand-600 text-white'
              : 'bg-white text-slate-600 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
          }`}
        >
          <span className="sr-only">{labelPrefix} </span>
          {i + 1}. {step}
        </button>
      ))}
    </div>
  )
}

export function ChoiceButton({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-lg border px-3 py-2 text-left text-sm transition ${
        active
          ? 'border-brand-500 bg-brand-100 font-semibold text-brand-900 dark:border-brand-700 dark:bg-brand-950 dark:text-brand-100'
          : 'border-slate-200 bg-white text-slate-700 hover:border-brand-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200'
      }`}
    >
      {children}
    </button>
  )
}

export function NextPrev({
  index,
  total,
  onChange,
}: {
  index: number
  total: number
  onChange: (i: number) => void
}) {
  return (
    <div className="mt-3 flex items-center gap-2">
      <button
        type="button"
        className="btn-secondary"
        onClick={() => onChange(Math.max(0, index - 1))}
        disabled={index === 0}
      >
        Anterior
      </button>
      <button
        type="button"
        className="btn-secondary"
        onClick={() => onChange(Math.min(total - 1, index + 1))}
        disabled={index === total - 1}
      >
        Siguiente
      </button>
    </div>
  )
}
