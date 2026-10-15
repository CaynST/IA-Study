import type { ReactNode } from 'react'
import type { FigureId } from '@/types/content'

interface FigureProps {
  id: FigureId
  caption?: string
}

function Frame({ title, children }: { title: string; children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 480 260"
      role="img"
      aria-label={title}
      className="mx-auto h-auto w-full max-w-xl"
    >
      <title>{title}</title>
      {children}
    </svg>
  )
}

function Box({
  x,
  y,
  w,
  h,
  label,
  sub,
}: {
  x: number
  y: number
  w: number
  h: number
  label: string
  sub?: string
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="10"
        className="fill-white stroke-slate-300 dark:fill-slate-900 dark:stroke-slate-700"
      />
      <text x={x + w / 2} y={sub ? y + h / 2 - 4 : y + h / 2 + 5} textAnchor="middle" className="fill-slate-800 text-[13px] font-semibold dark:fill-slate-100">
        {label}
      </text>
      {sub && (
        <text x={x + w / 2} y={y + h / 2 + 14} textAnchor="middle" className="fill-slate-500 text-[11px] dark:fill-slate-400">
          {sub}
        </text>
      )}
    </g>
  )
}

function Arrow({
  x1,
  y1,
  x2,
  y2,
  label,
}: {
  x1: number
  y1: number
  x2: number
  y2: number
  label?: string
}) {
  return (
    <g>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        markerEnd="url(#arrow)"
        className="stroke-slate-400 dark:stroke-slate-600"
        strokeWidth="2"
      />
      {label && (
        <text
          x={(x1 + x2) / 2}
          y={(y1 + y2) / 2 - 6}
          textAnchor="middle"
          className="fill-slate-500 text-[11px] dark:fill-slate-400"
        >
          {label}
        </text>
      )}
    </g>
  )
}

export function Figure({ id, caption }: FigureProps) {
  return (
    <figure className="my-5">
      <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-3 dark:border-slate-800 dark:bg-slate-900/40">
        <svg width="0" height="0" aria-hidden="true">
          <defs>
            <marker id="arrow" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">
              <path d="M0,0 L7,3 L0,6 Z" className="fill-slate-400 dark:fill-slate-600" />
            </marker>
          </defs>
        </svg>
        {renderFigure(id)}
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-xs text-slate-500 dark:text-slate-400">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

function renderFigure(id: FigureId) {
  switch (id) {
    case 'russell-quadrants':
      return (
        <Frame title="Matriz de los cuatro enfoques de Russell y Norvig">
          <Box x={20} y={30} w={210} h={90} label="Pensar como humano" sub="ciencia cognitiva" />
          <Box x={250} y={30} w={210} h={90} label="Actuar como humano" sub="Test de Turing" />
          <Box x={20} y={140} w={210} h={90} label="Pensar racionalmente" sub="lógica formal" />
          <Box x={250} y={140} w={210} h={90} label="Actuar racionalmente" sub="agente racional" />
        </Frame>
      )
    case 'agent-loop':
      return (
        <Frame title="Ciclo percibir, decidir y actuar">
          <Box x={30} y={100} w={110} h={60} label="Percibe" />
          <Box x={185} y={100} w={110} h={60} label="Decide" />
          <Box x={340} y={100} w={110} h={60} label="Actúa" />
          <Arrow x1={140} y1={130} x2={185} y2={130} />
          <Arrow x1={295} y1={130} x2={340} y2={130} />
          <path
            d="M395 100 C395 40 85 40 85 100"
            fill="none"
            markerEnd="url(#arrow)"
            className="stroke-slate-400 dark:stroke-slate-600"
            strokeWidth="2"
            strokeDasharray="5 4"
          />
        </Frame>
      )
    case 'turing-setup':
      return (
        <Frame title="Juego de imitación: interrogador y dos participantes ocultos">
          <Box x={20} y={100} w={120} h={60} label="Interrogador" sub="humano" />
          <Box x={200} y={30} w={150} h={60} label="Participante A" sub="la máquina" />
          <Box x={200} y={170} w={150} h={60} label="Participante B" sub="humano" />
          <Arrow x1={140} y1={120} x2={200} y2={70} label="texto" />
          <Arrow x1={140} y1={140} x2={200} y2={190} label="texto" />
        </Frame>
      )
    case 'chinese-room-diagram':
      return (
        <Frame title="Habitación China: mensajes, manual de reglas y respuestas">
          <Box x={20} y={110} w={110} h={50} label="Entran" sub="mensajes en chino" />
          <rect x={160} y={60} width={180} height={140} rx="12" className="fill-brand-50 stroke-brand-300 dark:fill-brand-950/40 dark:stroke-brand-800" />
          <text x={250} y={90} textAnchor="middle" className="fill-slate-700 text-[12px] font-semibold dark:fill-slate-200">
            Persona + manual
          </text>
          <text x={250} y={120} textAnchor="middle" className="fill-slate-500 text-[11px] dark:fill-slate-400">
            «si ves X, escribe Y»
          </text>
          <Box x={370} y={110} w={100} h={50} label="Salen" sub="chino perfecto" />
          <Arrow x1={130} y1={135} x2={160} y2={135} />
          <Arrow x1={340} y1={135} x2={370} y2={135} />
        </Frame>
      )
    case 'timeline-bands':
      return (
        <Frame title="Bandas de la historia de la IA">
          {['Orígenes', 'Nacimiento', 'Inviernos', 'Resurgimiento', 'Deep Learning'].map((label, i) => (
            <g key={label}>
              <rect
                x={10 + i * 94}
                y={100}
                width={88}
                height={50}
                rx="8"
                className="fill-brand-100 stroke-brand-300 dark:fill-brand-950/50 dark:stroke-brand-800"
              />
              <text x={54 + i * 94} y={130} textAnchor="middle" className="fill-slate-700 text-[11px] font-medium dark:fill-slate-200">
                {label}
              </text>
            </g>
          ))}
        </Frame>
      )
    case 'llm-pipeline':
      return (
        <Frame title="Ciclo de vida de un LLM">
          {['Tokenización', 'Preentrenamiento', 'Ajuste/alineación', 'Inferencia'].map((label, i) => (
            <g key={label}>
              <Box x={20 + i * 116} y={100} w={100} h={60} label={label} />
              {i < 3 && <Arrow x1={120 + i * 116} y1={130} x2={136 + i * 116} y2={130} />}
            </g>
          ))}
        </Frame>
      )
    case 'diffusion-steps':
      return (
        <Frame title="Generación por difusión a partir de ruido">
          {[0, 1, 2, 3].map((step) => (
            <rect
              key={step}
              x={30 + step * 110}
              y={100}
              width={90}
              height={70}
              rx="8"
              className="stroke-slate-300 dark:stroke-slate-700"
              fill="#94a3b8"
              opacity={0.25 + step * 0.2}
            />
          ))}
          <text x={240} y={200} textAnchor="middle" className="fill-slate-500 text-[12px] dark:fill-slate-400">
            ruido → refinado → imagen
          </text>
        </Frame>
      )
    case 'weighted-graph':
      return (
        <Frame title="Grafo ponderado de rutas">
          {[
            { x: 40, y: 120, n: 'A' },
            { x: 180, y: 50, n: 'B' },
            { x: 180, y: 200, n: 'C' },
            { x: 340, y: 120, n: 'D' },
          ].map((node) => (
            <g key={node.n}>
              <circle cx={node.x} cy={node.y} r="20" className="fill-white stroke-slate-400 dark:fill-slate-900 dark:stroke-slate-600" />
              <text x={node.x} y={node.y + 5} textAnchor="middle" className="fill-slate-800 text-[13px] font-semibold dark:fill-slate-100">
                {node.n}
              </text>
            </g>
          ))}
          <Arrow x1={60} y1={110} x2={162} y2={60} label="12" />
          <Arrow x1={60} y1={132} x2={162} y2={192} label="9" />
          <Arrow x1={200} y1={60} x2={322} y2={110} label="5" />
          <Arrow x1={200} y1={192} x2={322} y2={132} label="3" />
        </Frame>
      )
    case 'search-space-tree':
      return (
        <Frame title="Árbol de espacio de búsqueda">
          <circle cx={240} cy={40} r="14" className="fill-brand-200 stroke-brand-400 dark:fill-brand-900 dark:stroke-brand-700" />
          {[140, 200, 280, 340].map((x) => (
            <g key={x}>
              <line x1={240} y1={54} x2={x} y2={120} className="stroke-slate-300 dark:stroke-slate-700" />
              <circle cx={x} cy={134} r="12" className="fill-white stroke-slate-400 dark:fill-slate-900 dark:stroke-slate-600" />
            </g>
          ))}
          {[100, 180, 300, 380].map((x) => (
            <g key={x}>
              <line x1={x < 240 ? 140 : 340} y1={146} x2={x} y2={210} className="stroke-slate-300 dark:stroke-slate-700" />
              <circle cx={x} cy={222} r="10" className="fill-white stroke-slate-400 dark:fill-slate-900 dark:stroke-slate-600" />
            </g>
          ))}
        </Frame>
      )
    default:
      return null
  }
}
