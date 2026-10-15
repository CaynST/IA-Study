import { useState } from 'react'
import { WidgetShell, ChoiceButton, NextPrev } from '../shared'

interface Quadrant {
  key: string
  title: string
  criterion: string
  method: string
  example: string
}

const quadrants: Quadrant[] = [
  {
    key: 'pensar-humano',
    title: 'Pensar como humano',
    criterion: 'Fidelidad a los procesos cognitivos humanos',
    method: 'Ciencia cognitiva y neurociencia computacional',
    example: 'Arquitecturas cognitivas como ACT-R',
  },
  {
    key: 'actuar-humano',
    title: 'Actuar como humano',
    criterion: 'Comportamiento indistinguible del humano',
    method: 'Test de Turing: lenguaje, conocimiento, razonamiento, aprendizaje',
    example: 'Chatbots y robótica social',
  },
  {
    key: 'pensar-racional',
    title: 'Pensar racionalmente',
    criterion: 'Inferencia lógica irrefutable',
    method: 'Lógica formal y deducción automatizada',
    example: 'Sistemas expertos basados en reglas',
  },
  {
    key: 'actuar-racional',
    title: 'Actuar racionalmente',
    criterion: 'Maximizar la utilidad esperada',
    method: 'Teoría de decisiones y diseño de agentes',
    example: 'Agentes de refuerzo y robótica autónoma',
  },
]

export function RussellMatrix() {
  const [selected, setSelected] = useState<string>('actuar-racional')
  const current = quadrants.find((q) => q.key === selected)!
  return (
    <WidgetShell
      title="Matriz de los cuatro enfoques (Russell y Norvig)"
      hint="Toca un cuadrante para ver su criterio de éxito, método y ejemplo. Ninguno es «el correcto»: son cuatro respuestas legítimas."
    >
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {quadrants.map((q) => (
          <ChoiceButton key={q.key} active={q.key === selected} onClick={() => setSelected(q.key)}>
            {q.title}
          </ChoiceButton>
        ))}
      </div>
      <div
        className="mt-3 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900"
        aria-live="polite"
      >
        <h4 className="font-bold text-slate-900 dark:text-white">{current.title}</h4>
        <dl className="mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-300">
          <div>
            <dt className="inline font-semibold">Criterio de éxito: </dt>
            <dd className="inline">{current.criterion}</dd>
          </div>
          <div>
            <dt className="inline font-semibold">Metodología: </dt>
            <dd className="inline">{current.method}</dd>
          </div>
          <div>
            <dt className="inline font-semibold">Ejemplo: </dt>
            <dd className="inline">{current.example}</dd>
          </div>
        </dl>
      </div>
    </WidgetShell>
  )
}

const cycleSteps = [
  { title: 'Percibe', text: 'Recibe evidencia del entorno: imágenes, texto, sensores, registros.' },
  { title: 'Decide', text: 'Con lo que percibe y lo que sabe, elige la acción con mayor rendimiento esperado.' },
  { title: 'Actúa', text: 'Ejecuta la acción sobre el entorno, que devuelve nuevas percepciones. El ciclo no termina.' },
]

export function AgentCycle() {
  const [step, setStep] = useState(0)
  return (
    <WidgetShell
      title="Ciclo percibir – decidir – actuar"
      hint="Ejemplo: un coche autónomo percibe con cámaras y radar, decide acelerar o frenar y cambia su posición en la calle."
    >
      <div className="flex flex-wrap items-center gap-2">
        {cycleSteps.map((s, i) => (
          <button
            key={s.title}
            type="button"
            onClick={() => setStep(i)}
            aria-current={i === step ? 'step' : undefined}
            className={`flex-1 rounded-xl border px-3 py-2 text-center text-sm font-semibold transition ${
              i === step
                ? 'border-brand-500 bg-brand-600 text-white'
                : 'border-slate-200 bg-white text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300'
            }`}
          >
            {s.title}
          </button>
        ))}
      </div>
      <p className="mt-3 rounded-xl bg-white p-3 text-sm text-slate-700 dark:bg-slate-900 dark:text-slate-300" aria-live="polite">
        {cycleSteps[step].text}
      </p>
    </WidgetShell>
  )
}

interface TuringExchange {
  question: string
  machine: string
  human: string
}

const exchanges: TuringExchange[] = [
  {
    question: 'Escribe un soneto sobre el puente de Brooklyn.',
    machine: 'No podría escribir un soneto. Nunca he escrito poesía…',
    human: 'Dame un tema y lo intento, aunque no soy poeta.',
  },
  {
    question: 'Suma 34957 + 70764.',
    machine: '(pausa de varios segundos) 105621.',
    human: '105621.',
  },
  {
    question: '¿Qué opinas del clima hoy?',
    machine: 'Hoy el clima está agradable, ¿no crees? Aunque dicen que lloverá.',
    human: 'La verdad no le puse atención; estuve encerrado trabajando.',
  },
]

export function TuringTest() {
  const [index, setIndex] = useState(0)
  const [guessed, setGuessed] = useState<null | 'machine'>(null)
  const ex = exchanges[index]
  return (
    <WidgetShell
      title="Simulación conceptual del Test de Turing"
      hint="En el juego de imitación el interrogador solo ve texto. Aquí, ¿cuál respuesta crees que viene de la máquina? Toca una tarjeta para revelar."
    >
      <p className="mb-3 rounded-lg bg-white p-3 text-sm font-medium text-slate-800 dark:bg-slate-900 dark:text-slate-200">
        Pregunta del interrogador: <em>{ex.question}</em>
      </p>
      <div className="grid gap-2 sm:grid-cols-2">
        {(
          [
            { key: 'machine', label: 'Respuesta 1', text: ex.machine },
            { key: 'human', label: 'Respuesta 2', text: ex.human },
          ] as const
        ).map((r) => (
          <button
            key={r.key}
            type="button"
            onClick={() => setGuessed(r.key === 'machine' ? 'machine' : guessed)}
            className="rounded-xl border border-slate-200 bg-white p-3 text-left text-sm text-slate-700 transition hover:border-brand-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
          >
            <span className="mb-1 block text-xs font-semibold text-slate-500 dark:text-slate-400">
              {r.label}
            </span>
            {r.text}
          </button>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <button type="button" className="btn-primary" onClick={() => setGuessed('machine')}>
          Revelar quién es la máquina
        </button>
        <NextPrev
          index={index}
          total={exchanges.length}
          onChange={(i) => {
            setIndex(i)
            setGuessed(null)
          }}
        />
      </div>
      {guessed === 'machine' && (
        <p className="mt-3 rounded-lg bg-brand-100 p-3 text-sm text-brand-900 dark:bg-brand-950 dark:text-brand-100" aria-live="polite">
          La <strong>Respuesta 1</strong> es de la máquina. Lo importante: la prueba mide si el interrogador
          <em> no logra distinguirla</em>, no si la máquina comprende. Turing sustituyó una pregunta indecidible por
          una prueba observable.
        </p>
      )}
    </WidgetShell>
  )
}

const roomSteps = [
  'Una persona que no habla chino está encerrada con un enorme manual de reglas.',
  'Le pasan mensajes escritos en chino: para ella son garabatos sin significado.',
  'El manual dice «si ves estos símbolos, copia estos otros». Ella responde en chino perfecto.',
  'Desde fuera, parecería que dentro hay un hablante nativo. Pero nadie entendió chino.',
]

export function ChineseRoom() {
  const [step, setStep] = useState(0)
  return (
    <WidgetShell
      title="La Habitación China, paso a paso"
      hint="Sigue la secuencia y observa dónde estaría la comprensión… si existiera."
    >
      <ol className="space-y-2">
        {roomSteps.map((s, i) => (
          <li
            key={i}
            className={`rounded-lg border p-3 text-sm transition ${
              i <= step
                ? 'border-brand-300 bg-white dark:border-brand-800 dark:bg-slate-900'
                : 'border-slate-200 bg-slate-50 opacity-60 dark:border-slate-800 dark:bg-slate-900/50'
            }`}
          >
            <span className="mr-2 font-bold text-brand-700 dark:text-brand-300">Paso {i + 1}.</span>
            {s}
          </li>
        ))}
      </ol>
      <NextPrev index={step} total={roomSteps.length} onChange={setStep} />
      {step === roomSteps.length - 1 && (
        <p className="mt-3 text-sm font-medium text-slate-700 dark:text-slate-300" aria-live="polite">
          Conclusión de Searle: sintaxis correcta (reglas sobre símbolos) no produce semántica (significado).
        </p>
      )}
    </WidgetShell>
  )
}

const positions = [
  {
    key: 'chalmers',
    title: 'Chalmers · problema fácil vs difícil',
    body: 'Resolver todas las funciones cognitivas no explica por qué existe experiencia subjetiva. El «problema difícil» sigue abierto.',
  },
  {
    key: 'qualia',
    title: 'Qualia · lo que se siente',
    body: 'Cualidades subjetivas de la experiencia: el dolor, el sabor del café. Ninguna medición externa las captura del todo.',
  },
  {
    key: 'funcionalismo',
    title: 'Funcionalismo · importa el patrón',
    body: 'La mente sería la organización funcional, no el material. Si es correcto, la consciencia artificial sería posible en principio.',
  },
  {
    key: 'dualismo',
    title: 'Dualismo · mente ≠ materia',
    body: 'La experiencia no se reduce a procesos físicos. Si es correcto, la consciencia artificial sería imposible por principio.',
  },
]

export function ConsciousnessCompare() {
  const [card, setCard] = useState(0)
  const c = positions[card]
  return (
    <WidgetShell
      title="Tarjetas: Chalmers, qualia, funcionalismo y dualismo"
      hint="Ninguna de estas tesis está comprobada: son posiciones filosóficas serias. Recórrelas para comparar sus consecuencias para la IA."
    >
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {positions.map((p, i) => (
          <ChoiceButton key={p.key} active={i === card} onClick={() => setCard(i)}>
            {p.title.split(' · ')[0]}
          </ChoiceButton>
        ))}
      </div>
      <div className="mt-3 rounded-xl bg-white p-4 dark:bg-slate-900" aria-live="polite">
        <h4 className="font-bold text-slate-900 dark:text-white">{c.title}</h4>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{c.body}</p>
      </div>
    </WidgetShell>
  )
}

const disciplines = [
  {
    key: 'est',
    title: 'Estadística',
    question: '¿El efecto observado es real o es azar?',
    object: 'La incertidumbre',
    methods: 'Muestreo, pruebas de hipótesis, intervalos de confianza, regresión',
    deliverable: 'Una conclusión con margen de error',
  },
  {
    key: 'cd',
    title: 'Ciencia de datos',
    question: '¿Qué nos dicen estos datos del negocio?',
    object: 'Datos crudos → decisiones',
    methods: 'Limpieza, exploración, visualización, modelado, despliegue',
    deliverable: 'Reporte, tablero o modelo en producción',
  },
  {
    key: 'ia',
    title: 'Inteligencia artificial',
    question: '¿Cómo lograr que el sistema lo haga solo?',
    object: 'El comportamiento inteligente',
    methods: 'Búsqueda, planificación, agentes, aprendizaje automático',
    deliverable: 'Sistema autónomo o asistente inteligente',
  },
]

export function DisciplinesComparator() {
  const [key, setKey] = useState('ia')
  const d = disciplines.find((x) => x.key === key)!
  return (
    <WidgetShell
      title="Comparador: Estadística, Ciencia de datos e IA"
      hint="Se confunden en los titulares y se distinguen en la práctica: mira la pregunta y el entregable de cada una."
    >
      <div className="flex flex-wrap gap-2">
        {disciplines.map((x) => (
          <ChoiceButton key={x.key} active={x.key === key} onClick={() => setKey(x.key)}>
            {x.title}
          </ChoiceButton>
        ))}
      </div>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">Comparación de la disciplina seleccionada</caption>
          <tbody className="[&_th]:pr-4 [&_th]:py-1.5 [&_th]:align-top [&_td]:py-1.5 [&_td]:text-slate-700 [&_td]:dark:text-slate-300">
            <tr>
              <th scope="row" className="font-semibold text-slate-800 dark:text-slate-100">Pregunta típica</th>
              <td>{d.question}</td>
            </tr>
            <tr>
              <th scope="row" className="font-semibold text-slate-800 dark:text-slate-100">Objeto</th>
              <td>{d.object}</td>
            </tr>
            <tr>
              <th scope="row" className="font-semibold text-slate-800 dark:text-slate-100">Métodos</th>
              <td>{d.methods}</td>
            </tr>
            <tr>
              <th scope="row" className="font-semibold text-slate-800 dark:text-slate-100">Entregable</th>
              <td>{d.deliverable}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
        En la industria los tres perfiles colaboran: no compiten, se complementan. El aprendizaje automático vive en
        la intersección.
      </p>
    </WidgetShell>
  )
}
