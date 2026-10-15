import { useMemo, useState } from 'react'
import { WidgetShell, ChoiceButton } from '../shared'

/* ------------------------------ Token pipeline ----------------------------- */

function tokenize(text: string): string[] {
  return text.match(/[\p{L}\p{N}]+|[^\s\p{L}\p{N}]/gu) ?? []
}

function pseudoEmbedding(token: string, dims = 6): number[] {
  const base = [...token].reduce((acc, ch) => acc + ch.codePointAt(0)!, 0)
  return Array.from({ length: dims }, (_, i) => {
    const v = Math.sin(base * (i + 1) * 0.13) 
    return Math.round(v * 100) / 100
  })
}

const pipelineStages = ['Tokenización', 'Embeddings', 'Preentrenamiento', 'Ajuste y alineación', 'Inferencia']

export function TokenPipeline() {
  const [text, setText] = useState('La IA aprende del texto.')
  const [stage, setStage] = useState(0)
  const tokens = useMemo(() => tokenize(text), [text])
  const nextDistribution = useMemo(() => {
    const candidates = ['soluciones.', 'patrones.', 'datos.', 'lenguaje.']
    const weights = [0.42, 0.28, 0.19, 0.11]
    return candidates.map((c, i) => ({ token: c, p: weights[i] }))
  }, [])

  return (
    <WidgetShell
      title="Del texto a la respuesta: ciclo de vida del LLM"
      hint="Edita el texto y avanza por las etapas. Esto es una ilustración conceptual: no se ejecuta un transformer real."
    >
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
        Texto de entrada
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-900"
        />
      </label>

      <div className="mt-3 flex flex-wrap gap-2">
        {pipelineStages.map((s, i) => (
          <button
            key={s}
            type="button"
            onClick={() => setStage(i)}
            aria-pressed={i === stage}
            className={`rounded-lg px-3 py-1.5 text-sm font-medium transition ${
              i === stage
                ? 'bg-brand-600 text-white'
                : 'bg-white text-slate-600 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300'
            }`}
          >
            {i + 1}. {s}
          </button>
        ))}
      </div>

      <div className="mt-3 rounded-xl bg-white p-4 dark:bg-slate-900" aria-live="polite">
        {stage === 0 && (
          <>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              El texto se divide en <strong>tokens</strong>: fragmentos de palabras o signos.
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {tokens.map((t, i) => (
                <span key={i} className="badge bg-brand-100 font-mono text-brand-900 dark:bg-brand-950 dark:text-brand-100">
                  {t}
                </span>
              ))}
            </div>
          </>
        )}
        {stage === 1 && (
          <>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Cada token se convierte en un vector numérico (embedding). Aquí se muestran 6 dimensiones ilustrativas.
            </p>
            <ul className="mt-2 space-y-1 font-mono text-xs text-slate-700 dark:text-slate-300">
              {tokens.slice(0, 5).map((t) => (
                <li key={t}>
                  {t} → [{pseudoEmbedding(t).join(', ')}]
                </li>
              ))}
            </ul>
          </>
        )}
        {stage === 2 && (
          <p className="text-sm text-slate-600 dark:text-slate-300">
            En el <strong>preentrenamiento</strong> el transformer ajusta miles de millones de pesos con un objetivo
            simple: predecir el siguiente token sobre corpus masivos. La retropropagación actualiza los pesos.
          </p>
        )}
        {stage === 3 && (
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Con <strong>fine-tuning</strong> y <strong>RLHF</strong> (aprendizaje por refuerzo con retroalimentación
            humana) el modelo aprende a seguir instrucciones y a evitar respuestas dañinas.
          </p>
        )}
        {stage === 4 && (
          <>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              En <strong>inferencia</strong> el modelo genera token a token de forma probabilística: no recupera una
              respuesta guardada, la compone. Distribución del siguiente token (ilustrativa):
            </p>
            <ul className="mt-2 space-y-1">
              {nextDistribution.map((d) => (
                <li key={d.token} className="flex items-center gap-2 text-sm">
                  <span className="w-24 font-mono text-slate-700 dark:text-slate-300">{d.token}</span>
                  <span className="h-2 rounded-full bg-brand-500" style={{ width: `${d.p * 100 * 2}px` }} />
                  <span className="text-xs text-slate-500">{(d.p * 100).toFixed(0)} %</span>
                </li>
              ))}
            </ul>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
              La <strong>temperatura</strong> controla qué tan exploratoria es esa elección. Por eso la salida es
              probabilística: explica las alucinaciones y la sensibilidad al prompt.
            </p>
          </>
        )}
      </div>
    </WidgetShell>
  )
}

/* --------------------------- Attention & context -------------------------- */

export function AttentionContext() {
  const sentence = ['El', 'gato', 'subió', 'al', 'tejado', 'rojo']
  const [focus, setFocus] = useState(1)
  const [windowSize, setWindowSize] = useState(6)
  const weights = useMemo(() => {
    // Pesos ilustrativos: el token se atiende a sí mismo y modula por distancia.
    return sentence.map((_, i) => {
      const dist = Math.abs(i - focus)
      const score = 1 / (1 + dist) + (i <= windowSize - 1 ? 0 : -0.15)
      return Math.max(0.05, Math.round(score * 100) / 100)
    })
  }, [focus, windowSize])
  const max = Math.max(...weights)
  return (
    <WidgetShell
      title="Autoatención y ventana de contexto"
      hint="Selecciona un token y observa cuánto «atiende» a los demás. Reduce la ventana de contexto para ver qué queda fuera."
    >
      <div className="flex flex-wrap gap-2">
        {sentence.map((w, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setFocus(i)}
            aria-pressed={i === focus}
            className={`rounded-lg px-3 py-1.5 font-mono text-sm transition ${
              i === focus
                ? 'bg-brand-600 text-white'
                : i >= windowSize
                  ? 'bg-slate-200 text-slate-400 line-through dark:bg-slate-800'
                  : 'bg-white text-slate-700 dark:bg-slate-900 dark:text-slate-200'
            }`}
          >
            {w}
          </button>
        ))}
      </div>
      <label className="mt-3 block text-sm text-slate-700 dark:text-slate-300">
        Ventana de contexto: <strong>{windowSize} tokens</strong>
        <input
          type="range"
          min={2}
          max={sentence.length}
          value={windowSize}
          onChange={(e) => setWindowSize(Number(e.target.value))}
          className="mt-1 w-full"
          aria-label="Tamaño de la ventana de contexto"
        />
      </label>
      <ul className="mt-3 space-y-1" aria-live="polite">
        {sentence.map((w, i) => (
          <li key={i} className="flex items-center gap-2 text-sm">
            <span className="w-16 font-mono text-slate-600 dark:text-slate-300">{w}</span>
            <span
              className={`h-3 rounded ${i >= windowSize ? 'bg-slate-300 dark:bg-slate-700' : 'bg-deep-500'}`}
              style={{ width: `${(weights[i] / max) * 220}px` }}
            />
            <span className="text-xs text-slate-500">
              {i >= windowSize ? 'fuera de ventana' : weights[i].toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
        Más contexto no es atención perfecta: en documentos muy largos el rendimiento suele degradarse («lost in the
        middle»). Modelo conceptual, no una medición real de un transformer.
      </p>
    </WidgetShell>
  )
}

/* ------------------------ Discriminativa vs generativa -------------------- */

const comparison = [
  {
    key: 'disc',
    title: 'IA discriminativa / predictiva',
    question: '¿Esto es spam o no? ¿Qué objeto hay en la imagen?',
    output: 'Etiquetas, probabilidades, números',
    examples: 'Clasificador de spam, detección de fraude, diagnóstico por imagen (etiqueta).',
  },
  {
    key: 'gen',
    title: 'IA generativa',
    question: 'Escribe, dibuja, compón, programa algo nuevo',
    output: 'Contenido original: texto, imagen, audio, video, código',
    examples: 'ChatGPT, DALL·E, Stable Diffusion, ElevenLabs, GitHub Copilot.',
  },
] as const

export function GenerativeComparator() {
  const [key, setKey] = useState<'disc' | 'gen'>('gen')
  const c = comparison.find((x) => x.key === key)!
  return (
    <WidgetShell
      title="Comparador: IA discriminativa frente a IA generativa"
      hint="La diferencia central está en la salida: decidir una etiqueta frente a crear contenido nuevo."
    >
      <div className="flex flex-wrap gap-2">
        {comparison.map((x) => (
          <ChoiceButton key={x.key} active={x.key === key} onClick={() => setKey(x.key)}>
            {x.title}
          </ChoiceButton>
        ))}
      </div>
      <div className="mt-3 rounded-xl bg-white p-4 dark:bg-slate-900" aria-live="polite">
        <p className="text-sm text-slate-600 dark:text-slate-300">
          <strong>Pregunta típica: </strong>
          {c.question}
        </p>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
          <strong>Salida: </strong>
          {c.output}
        </p>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
          <strong>Ejemplos: </strong>
          {c.examples}
        </p>
      </div>
    </WidgetShell>
  )
}
