import { useMemo, useState } from 'react'
import { WidgetShell, ChoiceButton } from '../shared'

/* --------------------------- Formulation builder -------------------------- */

interface Formulation {
  situation: string
  decisions: string
  domains: string
  constraints: string
  objective: string
  representation: string
}

const scenarios: { key: string; label: string; formulation: Formulation }[] = [
  {
    key: 'mochila',
    label: 'Mochila 0/1',
    formulation: {
      situation: 'Una mochila de capacidad limitada y objetos con peso y valor; hay que decidir qué llevar.',
      decisions: 'Para cada objeto, una variable binaria: incluir (1) o dejar fuera (0).',
      domains: 'Cada variable toma valores en {0, 1}.',
      constraints: 'La suma de los pesos de los objetos incluidos no debe superar la capacidad.',
      objective: 'Maximizar el valor total de los objetos incluidos.',
      representation: 'Lista de objetos con (peso, valor) más un límite de capacidad.',
    },
  },
  {
    key: 'horario',
    label: 'Horario académico',
    formulation: {
      situation: 'Asignar materias, grupos, docentes y aulas a bloques de horario sin conflictos.',
      decisions: 'A qué bloque y aula se asigna cada grupo (y con qué docente).',
      domains: 'Bloques de horario disponibles y aulas con capacidad suficiente.',
      constraints: 'Sin traslapes; el docente no imparte dos grupos a la vez; capacidad suficiente.',
      objective: 'Minimizar huecos y conflictos de preferencias.',
      representation: 'Tabla de asignación (grupo × bloque × aula).',
    },
  },
  {
    key: 'rutas',
    label: 'Ruta de reparto',
    formulation: {
      situation: 'Repartir paquetes visitando todos los clientes y volviendo al origen.',
      decisions: 'El orden en que se visitan los clientes.',
      domains: 'Permutaciones de los clientes (mutaciones de la lista).',
      constraints: 'Visitar cada cliente exactamente una vez y respetar la capacidad del vehículo.',
      objective: 'Minimizar la distancia o el costo total del recorrido.',
      representation: 'Grafo ponderado con matriz de distancias.',
    },
  },
]

const builderSteps = [
  { key: 'situation', label: 'Situación inicial' },
  { key: 'decisions', label: 'Decisiones / variables' },
  { key: 'domains', label: 'Dominios' },
  { key: 'constraints', label: 'Restricciones' },
  { key: 'objective', label: 'Meta / función objetivo' },
  { key: 'representation', label: 'Representación' },
] as const

export function FormulationBuilder() {
  const [scenario, setScenario] = useState('horario')
  const [step, setStep] = useState(0)
  const f = scenarios.find((s) => s.key === scenario)!.formulation
  return (
    <WidgetShell
      title="Constructor de formulación"
      hint="Elige un escenario y recorre las seis piezas de una formulación completa. Es el lenguaje que usarás antes de programar."
    >
      <div className="flex flex-wrap gap-2">
        {scenarios.map((s) => (
          <ChoiceButton key={s.key} active={s.key === scenario} onClick={() => setScenario(s.key)}>
            {s.label}
          </ChoiceButton>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {builderSteps.map((s, i) => (
          <button
            key={s.key}
            type="button"
            onClick={() => setStep(i)}
            aria-pressed={i === step}
            className={`rounded-lg px-2.5 py-1.5 text-xs font-medium transition ${
              i <= step
                ? 'bg-deep-600 text-white'
                : 'bg-white text-slate-600 dark:bg-slate-800 dark:text-slate-300'
            }`}
          >
            {i + 1}. {s.label}
          </button>
        ))}
      </div>
      <ol className="mt-3 space-y-1.5" aria-live="polite">
        {builderSteps.map((s, i) => (
          <li
            key={s.key}
            className={`rounded-lg border p-2.5 text-sm ${
              i <= step
                ? 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'
                : 'border-dashed border-slate-200 bg-slate-50 text-slate-400 dark:border-slate-800 dark:bg-slate-900/40'
            }`}
          >
            <span className="font-semibold text-slate-800 dark:text-slate-100">{s.label}: </span>
            {i <= step ? f[s.key as keyof Formulation] : '—'}
          </li>
        ))}
      </ol>
      <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
        Última pieza mostrada: <strong>{builderSteps[step].label}</strong>
      </p>
    </WidgetShell>
  )
}

/* ------------------------------ Graph explorer ---------------------------- */

interface Edge {
  a: string
  b: string
  w: number
}

const graphNodes = ['A', 'B', 'C', 'D', 'E', 'F']
const graphEdges: Edge[] = [
  { a: 'A', b: 'B', w: 5 },
  { a: 'B', b: 'D', w: 7 },
  { a: 'A', b: 'C', w: 4 },
  { a: 'C', b: 'D', w: 5 },
  { a: 'A', b: 'E', w: 6 },
  { a: 'E', b: 'F', w: 5 },
  { a: 'F', b: 'D', w: 4 },
]

const nodePos: Record<string, { x: number; y: number }> = {
  A: { x: 40, y: 110 },
  B: { x: 160, y: 40 },
  C: { x: 160, y: 110 },
  D: { x: 300, y: 110 },
  E: { x: 160, y: 180 },
  F: { x: 300, y: 185 },
}

function neighbors(node: string): { to: string; w: number }[] {
  const list: { to: string; w: number }[] = []
  for (const e of graphEdges) {
    if (e.a === node) list.push({ to: e.b, w: e.w })
    if (e.b === node) list.push({ to: e.a, w: e.w })
  }
  return list
}

function allPaths(start: string, end: string): { path: string[]; cost: number }[] {
  const results: { path: string[]; cost: number }[] = []
  const walk = (node: string, visited: string[], cost: number): void => {
    if (node === end) {
      results.push({ path: [...visited, node], cost })
      return
    }
    for (const { to, w } of neighbors(node)) {
      if (!visited.includes(to)) walk(to, [...visited, node], cost + w)
    }
  }
  walk(start, [], 0)
  return results.sort((a, b) => a.cost - b.cost)
}

export function GraphExplorer() {
  const [start, setStart] = useState('A')
  const [end, setEnd] = useState('D')
  const paths = useMemo(() => allPaths(start, end), [start, end])
  const best = paths[0]?.cost
  return (
    <WidgetShell
      title="Explorador de rutas en un grafo ponderado"
      hint="Elige origen y destino. Todos los caminos con conexiones existentes son factibles; solo el de menor costo es óptimo."
    >
      <div className="flex flex-wrap items-end gap-3">
        <label className="text-sm text-slate-700 dark:text-slate-300">
          Origen
          <select
            value={start}
            onChange={(e) => setStart(e.target.value)}
            className="ml-2 rounded-lg border border-slate-300 bg-white px-2 py-1 dark:border-slate-700 dark:bg-slate-900"
          >
            {graphNodes.map((n) => (
              <option key={n}>{n}</option>
            ))}
          </select>
        </label>
        <label className="text-sm text-slate-700 dark:text-slate-300">
          Destino
          <select
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            className="ml-2 rounded-lg border border-slate-300 bg-white px-2 py-1 dark:border-slate-700 dark:bg-slate-900"
          >
            {graphNodes.map((n) => (
              <option key={n}>{n}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-3 rounded-xl border border-slate-200 bg-white p-2 dark:border-slate-700 dark:bg-slate-900">
        <svg viewBox="0 0 360 230" role="img" aria-label="Grafo ponderado" className="h-auto w-full max-w-md">
          <defs>
            <marker id="graph-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" className="fill-slate-400" />
            </marker>
          </defs>
          {graphEdges.map((e, i) => {
            const p1 = nodePos[e.a]
            const p2 = nodePos[e.b]
            return (
              <g key={i}>
                <line x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} className="stroke-slate-300 dark:stroke-slate-600" strokeWidth="2" />
                <text
                  x={(p1.x + p2.x) / 2}
                  y={(p1.y + p2.y) / 2 - 4}
                  textAnchor="middle"
                  className="fill-deep-600 text-[11px] font-semibold dark:fill-deep-300"
                >
                  {e.w}
                </text>
              </g>
            )
          })}
          {graphNodes.map((n) => {
            const p = nodePos[n]
            const active = n === start || n === end
            return (
              <g key={n}>
                <circle
                  cx={p.x}
                  cy={p.y}
                  r="16"
                  className={active ? 'fill-brand-500' : 'fill-white dark:fill-slate-800'}
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <text x={p.x} y={p.y + 4} textAnchor="middle" className={`text-[12px] font-bold ${active ? 'fill-white' : 'fill-slate-700 dark:fill-slate-200'}`}>
                  {n}
                </text>
              </g>
            )
          })}
        </svg>
      </div>

      <ol className="mt-3 space-y-1" aria-live="polite">
        {paths.length === 0 && <li className="text-sm text-slate-500">No hay camino entre esos nodos.</li>}
        {paths.map((p, i) => (
          <li
            key={i}
            className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm ${
              i === 0 ? 'bg-brand-100 font-semibold text-brand-900 dark:bg-brand-950 dark:text-brand-100' : 'bg-white text-slate-700 dark:bg-slate-900 dark:text-slate-300'
            }`}
          >
            <span>{p.path.join(' → ')}</span>
            <span>{p.cost} min {i === 0 ? '· óptima' : '· factible'}</span>
          </li>
        ))}
      </ol>
      {best !== undefined && (
        <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
          Costo óptimo: <strong>{best}</strong>. Recuerda: si las aristas no tuvieran pesos, bastaría el menor número de
          pasos (BFS); con costos positivos se acumula (Dijkstra) y con una estimación al destino se puede guiar (A*).
        </p>
      )}
    </WidgetShell>
  )
}

/* --------------------------- Constraint simulator -------------------------- */

const regions = ['R1', 'R2', 'R3', 'R4']
const colors = ['rojo', 'verde', 'azul'] as const
const adjacency: [string, string][] = [
  ['R1', 'R2'],
  ['R1', 'R3'],
  ['R2', 'R3'],
  ['R3', 'R4'],
]

export function ConstraintSimulator() {
  const [assignment, setAssignment] = useState<Record<string, string | null>>({
    R1: null,
    R2: null,
    R3: null,
    R4: null,
  })

  const violations = adjacency.filter(
    ([a, b]) => assignment[a] && assignment[a] === assignment[b],
  )
  const complete = regions.every((r) => assignment[r])
  const feasible = complete && violations.length === 0
  const colorsUsed = new Set(Object.values(assignment).filter(Boolean)).size
  const optimal = feasible && colorsUsed === 3

  const swatch: Record<string, string> = {
    rojo: 'bg-rose-500',
    verde: 'bg-emerald-500',
    azul: 'bg-blue-500',
  }

  return (
    <WidgetShell
      title="Simulador de restricciones (coloreo de mapa)"
      hint="Asigna un color a cada región. La restricción dura: regiones vecinas no pueden compartir color. R1, R2 y R3 son mutuamente vecinas."
    >
      <div className="space-y-2">
        {regions.map((r) => (
          <div key={r} className="flex flex-wrap items-center gap-2">
            <span className="w-8 font-mono font-semibold text-slate-700 dark:text-slate-200">{r}</span>
            {colors.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setAssignment((prev) => ({ ...prev, [r]: c }))}
                aria-pressed={assignment[r] === c}
                aria-label={`${r} color ${c}`}
                className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-medium transition ${
                  assignment[r] === c
                    ? 'border-brand-500 bg-brand-100 text-brand-900 dark:bg-brand-950 dark:text-brand-100'
                    : 'border-slate-200 bg-white text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300'
                }`}
              >
                <span className={`inline-block h-3 w-3 rounded-full ${swatch[c]}`} aria-hidden="true" />
                {c}
              </button>
            ))}
            {assignment[r] && (
              <button
                type="button"
                onClick={() => setAssignment((prev) => ({ ...prev, [r]: null }))}
                className="text-xs text-slate-500 underline"
              >
                limpiar
              </button>
            )}
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-xl bg-white p-3 text-sm dark:bg-slate-900" aria-live="polite">
        {!complete && <p className="text-slate-600 dark:text-slate-300">Asignación incompleta. Estado parcial en la búsqueda.</p>}
        {complete && violations.length > 0 && (
          <p className="font-medium text-rose-700 dark:text-rose-300">
            No factible: {violations.map(([a, b]) => `${a}–${b}`).join(', ')} comparten color.
          </p>
        )}
        {optimal && (
          <p className="font-medium text-brand-700 dark:text-brand-300">
            Factible y óptima en número de colores: 3 (el mínimo, porque R1, R2 y R3 son mutuamente vecinas).
          </p>
        )}
        {feasible && !optimal && (
          <p className="font-medium text-amber-700 dark:text-amber-300">
            Factible con {colorsUsed} colores, pero no es la de menor número de colores.
          </p>
        )}
      </div>
    </WidgetShell>
  )
}

/* --------------------------- Problem type sorter --------------------------- */

const problemTypeItems: { scenario: string; answer: string }[] = [
  { scenario: '¿Cuántos horarios de exámenes distintos sin traslapes existen?', answer: 'Conteo' },
  { scenario: 'Generar un horario de exámenes sin traslapes.', answer: 'Factibilidad' },
  { scenario: '¿Hay un camino entre dos nodos de una red?', answer: 'Decisión' },
  { scenario: 'Ruta de menor distancia entre dos puntos.', answer: 'Optimización' },
  { scenario: 'Listar todas las rutas posibles entre dos nodos.', answer: 'Enumeración' },
  { scenario: 'Ordenar páginas web por relevancia para una consulta.', answer: 'Ranking' },
]
const problemTypes = ['Decisión', 'Factibilidad', 'Optimización', 'Enumeración', 'Conteo', 'Ranking']

export function ProblemTypeSorter() {
  const [answers, setAnswers] = useState<Record<string, string>>({})
  return (
    <WidgetShell
      title="Clasifica el tipo de problema"
      hint="Antes de buscar, identifica qué forma tiene la respuesta esperada. Elige el tipo correcto para cada enunciado."
    >
      <ul className="space-y-3">
        {problemTypeItems.map((item) => {
          const selected = answers[item.scenario]
          const correct = selected === item.answer
          return (
            <li key={item.scenario} className="rounded-xl bg-white p-3 dark:bg-slate-900">
              <p className="text-sm font-medium text-slate-800 dark:text-slate-100">{item.scenario}</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {problemTypes.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setAnswers((prev) => ({ ...prev, [item.scenario]: t }))}
                    className={`rounded-lg border px-2.5 py-1 text-xs font-medium transition ${
                      selected === t
                        ? correct
                          ? 'border-brand-500 bg-brand-500 text-white'
                          : 'border-rose-500 bg-rose-500 text-white'
                        : 'border-slate-200 bg-white text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
              {selected && (
                <p className={`mt-1.5 text-xs ${correct ? 'text-brand-700 dark:text-brand-300' : 'text-rose-700 dark:text-rose-300'}`}>
                  {correct ? 'Correcto. ' : `Respuesta correcta: ${item.answer}. `}
                </p>
              )}
            </li>
          )
        })}
      </ul>
      <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
        Clasificar el problema es el primer paso del diagnóstico.
      </p>
    </WidgetShell>
  )
}

/* ------------------------- Search space explorer -------------------------- */

function factorial(n: number): number {
  let r = 1
  for (let i = 2; i <= n; i++) r *= i
  return r
}
function power2(n: number): number {
  return 2 ** n
}
function format(n: number): string {
  if (n >= 1e12) return `${(n / 1e12).toFixed(1)} billones`
  if (n >= 1e9) return `${(n / 1e9).toFixed(1)} mil millones`
  if (n >= 1e6) return `${(n / 1e6).toFixed(1)} millones`
  if (n >= 1e3) return `${(n / 1e3).toFixed(1)} mil`
  return String(n)
}

export function SearchSpaceExplorer() {
  const [n, setN] = useState(10)
  return (
    <WidgetShell
      title="Explosión combinatoria del espacio de búsqueda"
      hint="Mueve el control y compara cómo crecen los órdenes de magnitud. Cuando la fuerza bruta deja de ser viable, aparecen las heurísticas."
    >
      <label className="block text-sm text-slate-700 dark:text-slate-300">
        n = <strong>{n}</strong> elementos
        <input
          type="range"
          min={1}
          max={20}
          value={n}
          onChange={(e) => setN(Number(e.target.value))}
          className="mt-1 w-full"
          aria-label="Número de elementos"
        />
      </label>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-white p-3 dark:bg-slate-900">
          <p className="text-xs font-semibold uppercase text-slate-500">Permutaciones n!</p>
          <p className="text-lg font-bold text-deep-700 dark:text-deep-300">{format(factorial(n))}</p>
          <p className="text-xs text-slate-500">Ej.: rutas distintas del viajante con n ciudades.</p>
        </div>
        <div className="rounded-xl bg-white p-3 dark:bg-slate-900">
          <p className="text-xs font-semibold uppercase text-slate-500">Subconjuntos 2^n</p>
          <p className="text-lg font-bold text-brand-700 dark:text-brand-300">{format(power2(n))}</p>
          <p className="text-xs text-slate-500">Ej.: selecciones de objetos en la mochila 0/1.</p>
        </div>
      </div>
      <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
        Con 20 objetos hay más de un millón de selecciones; con 20 ciudades, más de 2 trillones de órdenes. Revisar
        todo deja de ser viable: por eso el capítulo 2 estudia búsqueda informada y metaheurísticas.
      </p>
    </WidgetShell>
  )
}
