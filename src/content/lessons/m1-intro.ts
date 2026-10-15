import type { Lesson } from '@/types/content'

/** Módulo 1.1 — Lección de introducción y contexto profesional. */
export const m1Intro: Lesson = {
  id: 'm1-intro',
  moduleId: '1.1',
  section: 'Introducción',
  title: 'La IA ya está en todas partes (y en tu oficio)',
  subtitle:
    'Por qué la inteligencia artificial dejó de ser un experimento de laboratorio y qué lugar ocupa en tu formación como ingeniero de software.',
  learningObjectives: [
    'Explicar por qué la IA es una disciplina transversal y no solo una rama de la computación.',
    'Describir con cifras fechadas el nivel de adopción de la IA y su relación con el empleo técnico.',
    'Situar tu formación profesional frente a la IA: qué exige un ingeniero de software hoy.',
  ],
  estimatedMinutes: 9,
  blocks: [
    {
      type: 'paragraph',
      text: 'La [inteligencia artificial] es una de las disciplinas más transformadoras de la era contemporánea. No se queda dentro de la ciencia de la computación: entra en la medicina, el transporte, las finanzas, la educación y, por supuesto, en la construcción de software. El material de clase abre el capítulo con una idea directa: *la IA representa el intento más ambicioso de la humanidad por crear entidades capaces de emular la cognición humana*.',
    },
    {
      type: 'callout',
      variant: 'source',
      title: 'Fuente',
      text: 'Antología de Inteligencia Artificial, capítulo 1 (UV, 2026); Tema 1.1 · pp. 3–4.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'De la promesa al uso cotidiano',
    },
    {
      type: 'paragraph',
      text: 'Durante décadas la IA fue una promesa. Hoy es infraestructura: hay sistemas que convierten voz en texto, vehículos que se conducen solos, dispositivos médicos que asisten diagnósticos y asistentes que escriben código. Tres cifras del material sirven para dimensionarlo — todas son una **fotografía de 2025** reportada en el `AI Index Report 2025` de Stanford HAI, no datos en tiempo real.',
    },
    {
      type: 'table',
      headers: ['Fenómeno', 'Cifra citada', 'Referencia'],
      rows: [
        ['Viajes autónomos semanales de Waymo', '150 000+', 'AI Index 2025'],
        ['Dispositivos médicos con IA aprobados por la FDA en EE. UU. (2023)', '223, frente a 6 en 2015', 'AI Index 2025'],
        ['Inversión privada en IA en EE. UU. durante 2024', '109 100 millones de USD', 'AI Index 2025'],
      ],
      caption: 'Cifras del material de clase (Tema 1.1 · p. 4). Fechadas: corresponden a 2023–2024.',
    },
    {
      type: 'paragraph',
      text: 'La adopción empresarial siguió la misma curva. La proporción de organizaciones que usan IA en al menos una función del negocio pasó de 20 % (2017) a 78 % (2024): un estancamiento entre 2019 y 2022, roto por la llegada de la IA generativa (**Tema 1.1 · p. 5**, con datos de McKinsey *State of AI*).',
    },
    {
      type: 'callout',
      variant: 'key',
      title: 'Idea clave',
      text: 'La IA ya no es un experimento: es una capa más de la pila tecnológica. Y como ingeniero de software vas a integrarla, no solo a estudiarla.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Por qué te toca a ti',
    },
    {
      type: 'list',
      items: [
        '**Empleo creciente.** El material cita un crecimiento proyectado del 34 % en el empleo de científicos de datos en EE. UU. entre 2024 y 2034 (Bureau of Labor Statistics), la cuarta ocupación de mayor crecimiento del país.',
        '**Demanda de perfiles de IA.** La mitad de las organizaciones que usan IA afirman que necesitarán más profesionales de IA de los que tienen hoy (McKinsey, *State of AI 2025*).',
        '**Nuevas tareas del oficio.** La construcción de software moderno integra búsqueda, optimización y aprendizaje automático: por eso la experiencia educativa es un pilar de tu formación.',
      ],
    },
    {
      type: 'callout',
      variant: 'didactic',
      title: 'Ampliación didáctica',
      text: 'Las cifras del material son proyecciones y encuestas. Sirven para mostrar una **tendencia**, no para predecir tu sueldo. Cuando veas un número de IA en una noticia, pregunta siempre: ¿de qué año es?, ¿sobre qué población?, ¿quién lo midió?',
    },
    {
      type: 'heading',
      level: 2,
      text: 'El mapa del tema',
    },
    {
      type: 'paragraph',
      text: 'Este primer tema es filosófico, pero tiene consecuencias prácticas. Se organiza en tres preguntas y un complemento:',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        '**1.1.1 ¿Qué es exactamente la IA y hasta dónde llega?** Definición, los cuatro enfoques de Russell y Norvig, el agente racional y el continuo de capacidades.',
        '**1.1.2 ¿Pueden pensar las máquinas?** Turing (1950) y Searle (1980): comportamiento frente a comprensión.',
        '**1.1.3 ¿Podría una máquina ser consciente?** El problema difícil de Chalmers, qualia, funcionalismo y dualismo.',
        '**Complemento.** Estadística, ciencia de datos e IA: tres disciplinas que se confunden y se distinguen.',
      ],
    },
    {
      type: 'callout',
      variant: 'key',
      title: 'Aprendizaje esperado de todo el tema',
      text: 'Simular, actuar, comprender y sentir son cuatro cosas distintas. No confundirlas al diseñar sistemas es la competencia central del tema (Tema 1.1 · p. 48).',
    },
    {
      type: 'callout',
      variant: 'source',
      title: 'Nota sobre la fuente',
      text: 'El material pertenece a la experiencia educativa *Inteligencia Artificial* (Ingeniería de Software, Facultad de Negocios y Tecnologías). Este sitio es un recurso de estudio independiente basado en él; no es una publicación oficial de la universidad.',
    },
  ],
  keyTerms: [
    {
      term: 'Inteligencia artificial',
      definition:
        'Campo dedicado a crear sistemas computacionales capaces de realizar tareas que normalmente requieren inteligencia humana.',
    },
    {
      term: 'IA generativa',
      definition:
        'Rama de la IA que crea contenido nuevo (texto, imagen, audio, video, código) en lugar de solo clasificar o predecir.',
    },
    {
      term: 'AI Index',
      definition:
        'Informe anual de Stanford HAI que reúne cifras de adopción, inversión y capacidades de la IA. Las cifras citadas aquí son de 2025.',
    },
  ],
  recap: [
    'La IA es transversal: opera en todos los sectores y ya es infraestructura de negocio.',
    'Las cifras de adopción y empleo del material son de 2025 y deben citarse con su fecha.',
    'El tema 1.1 responde tres preguntas (qué es, si piensa, si siente) más un comparativo de disciplinas.',
    'Este curso te forma para integrar IA en software, no solo para usarla.',
  ],
  commonError:
    'Confundir «la IA hace más cosas» con «la IA piensa como nosotros». El primer tema existe justamente para separar comportamiento, comprensión y experiencia subjetiva.',
  sourcePages: ['Tema 1.1 · pp. 1–6'],
  practiceQuestionIds: ['m1-intro-q1', 'm1-intro-q2', 'm1-intro-q3'],
}
