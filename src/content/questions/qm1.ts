import type { Question } from '@/types/content'

/**
 * Módulo 1.1 — Banco de preguntas (23 en total).
 * Mezcla de opción múltiple, verdadero/falso y clasificación.
 * Las preguntas con `sourcePages` del tema provienen del material; las de
 * `['Ejercicio didáctico']` son propias del sitio.
 */
export const qm1Questions: Question[] = [
  // ── m1-intro (3) ────────────────────────────────────────────────────────
  {
    id: 'm1-intro-q1',
    moduleId: '1.1',
    lessonId: 'm1-intro',
    section: 'Introducción',
    difficulty: 'facil',
    prompt: 'El material describe la IA como una disciplina transversal. ¿Qué significa eso?',
    type: 'multiple',
    options: [
      'Que se limita a la investigación en ciencias de la computación.',
      'Que trasciende la computación y entra en medicina, transporte, finanzas, educación y otras áreas.',
      'Que solo sirve para automatizar tareas repetitivas.',
      'Que es una moda pasajera sin impacto económico.',
    ],
    correct: [1],
    explanation:
      'El material presenta la IA como una disciplina transformadora que trasciende las fronteras de la ciencia de la computación e ingresa en prácticamente todos los sectores de la actividad humana.',
    sourcePages: ['Tema 1.1 · pp. 3–4'],
    origin: 'fuente',
  },
  {
    id: 'm1-intro-q2',
    moduleId: '1.1',
    lessonId: 'm1-intro',
    section: 'Introducción',
    difficulty: 'facil',
    prompt:
      'Según las proyecciones citadas en el material, el empleo de científicos de datos en EE. UU. crecerá un 34 % entre 2024 y 2034.',
    type: 'boolean',
    correct: true,
    explanation:
      'El material cita la proyección del Bureau of Labor Statistics (2024–2034): +34 %, una de las ocupaciones de mayor crecimiento del país.',
    sourcePages: ['Tema 1.1 · p. 6'],
    origin: 'fuente',
  },
  {
    id: 'm1-intro-q3',
    moduleId: '1.1',
    lessonId: 'm1-intro',
    section: 'Introducción',
    difficulty: 'media',
    prompt:
      'De acuerdo con las cifras de Stanford HAI citadas en el material, ¿qué proporción de organizaciones usaba IA en al menos una función del negocio en 2024?',
    type: 'multiple',
    options: ['20 %', '50 %', '78 %', '94 %'],
    correct: [2],
    explanation:
      'La adopción pasó de 20 % en 2017 a 78 % en 2024, tras un estancamiento entre 2019 y 2022 que rompió la llegada de la IA generativa.',
    sourcePages: ['Tema 1.1 · p. 5'],
    origin: 'fuente',
  },

  // ── m1-1-definicion (4) ─────────────────────────────────────────────────
  {
    id: 'm1-1-definicion-q1',
    moduleId: '1.1',
    lessonId: 'm1-1-definicion',
    section: '1.1.1',
    difficulty: 'facil',
    prompt:
      '¿Cuál de los cuatro enfoques de Russell y Norvig busca elegir, para cada percepción, la acción que maximiza el rendimiento esperado?',
    type: 'multiple',
    options: ['Pensar como humano', 'Pensar racionalmente', 'Actuar como humano', 'Actuar racionalmente'],
    correct: [3],
    explanation:
      'El enfoque de «actuar racionalmente» define al agente racional como el que maximiza la medida de rendimiento esperada; es el paradigma dominante hoy.',
    sourcePages: ['Tema 1.1 · pp. 10–12'],
    origin: 'fuente',
  },
  {
    id: 'm1-1-definicion-q2',
    moduleId: '1.1',
    lessonId: 'm1-1-definicion',
    section: '1.1.1',
    difficulty: 'media',
    prompt: 'Clasifica cada método o ejemplo en el enfoque de Russell y Norvig al que corresponde.',
    type: 'classification',
    categories: ['Pensar como humano', 'Pensar racionalmente', 'Actuar como humano', 'Actuar racionalmente'],
    items: [
      { text: 'Arquitecturas cognitivas como ACT-R', category: 'Pensar como humano' },
      { text: 'Sistemas expertos basados en reglas y lógica formal', category: 'Pensar racionalmente' },
      { text: 'Chatbots y robótica social evaluados con el Test de Turing', category: 'Actuar como humano' },
      { text: 'Agentes de refuerzo y robótica autónoma que maximizan utilidad', category: 'Actuar racionalmente' },
    ],
    explanation:
      'La tabla del material asocia cada enfoque con su metodología y su ejemplo representativo: ACT-R con pensar como humano, los sistemas expertos con pensar racionalmente, los chatbots con actuar como humano y los agentes de refuerzo con actuar racionalmente.',
    sourcePages: ['Tema 1.1 · pp. 10–11'],
    origin: 'fuente',
  },
  {
    id: 'm1-1-definicion-q3',
    moduleId: '1.1',
    lessonId: 'm1-1-definicion',
    section: '1.1.1',
    difficulty: 'media',
    prompt: '¿Por qué el enfoque de «actuar racionalmente» se volvió el paradigma dominante de la IA?',
    type: 'multiple',
    options: [
      'Porque imita con exactitud los procesos cognitivos del cerebro humano.',
      'Porque unifica la disciplina, no exige imitar al ser humano y es medible con experimentos.',
      'Porque es el único enfoque que garantiza que un sistema sea consciente.',
      'Porque la lógica formal demostró que es imposible cometer errores.',
    ],
    correct: [1],
    explanation:
      'El material da tres razones prácticas: unifica las subáreas al formularlas como agentes que maximizan un rendimiento, no exige replicar la mente y permite evaluar sistemas con experimentos.',
    sourcePages: ['Tema 1.1 · p. 14'],
    origin: 'fuente',
  },
  {
    id: 'm1-1-definicion-q4',
    moduleId: '1.1',
    lessonId: 'm1-1-definicion',
    section: '1.1.1',
    difficulty: 'media',
    prompt:
      'La IA general (IAG), entendida como un sistema con flexibilidad humana en cualquier dominio, ya existe en los modelos de lenguaje actuales.',
    type: 'boolean',
    correct: false,
    explanation:
      'El material ubica a los modelos de lenguaje en el nivel generativo y presenta la IAG como una hipótesis que aún no existe: toda la IA de hoy es fuerte en tareas concretas y frágil fuera de ellas.',
    sourcePages: ['Tema 1.1 · p. 15'],
    origin: 'fuente',
  },

  // ── m1-2-turing-searle (5) ──────────────────────────────────────────────
  {
    id: 'm1-2-turing-searle-q1',
    moduleId: '1.1',
    lessonId: 'm1-2-turing-searle',
    section: '1.1.2',
    difficulty: 'facil',
    prompt: '¿Qué evalúa el Test de Turing?',
    type: 'multiple',
    options: [
      'La consciencia del sistema.',
      'La imitación conversacional humana.',
      'La velocidad de cálculo del procesador.',
      'La capacidad de percibir el entorno.',
    ],
    correct: [1],
    explanation:
      'El juego de imitación mide si las respuestas escritas son indistinguibles de las de una persona. No prueba consciencia: pasar la prueba mide imitación, no comprensión.',
    sourcePages: ['Tema 1.1 · p. 19'],
    origin: 'fuente',
  },
  {
    id: 'm1-2-turing-searle-q2',
    moduleId: '1.1',
    lessonId: 'm1-2-turing-searle',
    section: '1.1.2',
    difficulty: 'facil',
    prompt: '¿Quién propuso el experimento mental de la Habitación China?',
    type: 'multiple',
    options: ['Alan Turing', 'John Searle', 'David Chalmers', 'Blake Lemoine'],
    correct: [1],
    explanation:
      'John Searle presentó la Habitación China en 1980 para argumentar que manipular símbolos correctamente no equivale a comprender lo que significan.',
    sourcePages: ['Tema 1.1 · p. 23'],
    origin: 'fuente',
  },
  {
    id: 'm1-2-turing-searle-q3',
    moduleId: '1.1',
    lessonId: 'm1-2-turing-searle',
    section: '1.1.2',
    difficulty: 'media',
    prompt: 'Según Searle, ¿cuál es la diferencia entre sintaxis y semántica?',
    type: 'multiple',
    options: [
      'La sintaxis son las reglas formales para manipular símbolos; la semántica es comprender su significado.',
      'La sintaxis es el significado; la semántica, las reglas formales.',
      'Ambas describen lo mismo, pero la semántica es más rápida.',
      'La sintaxis pertenece a la mente y la semántica a las máquinas.',
    ],
    correct: [0],
    explanation:
      'Las computadoras dominan la sintaxis —manipular símbolos según reglas—; la semántica, que «perro» remita a un animal real, es lo que, para Searle, ningún programa produce.',
    sourcePages: ['Tema 1.1 · p. 26'],
    origin: 'fuente',
  },
  {
    id: 'm1-2-turing-searle-q4',
    moduleId: '1.1',
    lessonId: 'm1-2-turing-searle',
    section: '1.1.2',
    difficulty: 'media',
    prompt: '¿Qué cuatro capacidades anticipó Turing como necesarias para superar su prueba?',
    type: 'multiple',
    options: [
      'Visión, voz, movimiento y memoria.',
      'Procesamiento del lenguaje natural, representación del conocimiento, razonamiento automatizado y aprendizaje automático.',
      'Lógica difusa, redes neuronales, cómputo cuántico y robótica.',
      'Comprensión emocional, empatía, creatividad y consciencia.',
    ],
    correct: [1],
    explanation:
      'Russell y Norvig formulan así las cuatro capacidades que la prueba exige; siete décadas después siguen siendo subcampos centrales de la IA.',
    sourcePages: ['Tema 1.1 · p. 20'],
    origin: 'fuente',
  },
  {
    id: 'm1-2-turing-searle-q5',
    moduleId: '1.1',
    lessonId: 'm1-2-turing-searle',
    section: '1.1.2',
    difficulty: 'media',
    prompt:
      'Para Searle, la IA débil —que simula el pensamiento sin comprender— es aceptable, mientras que la IA fuerte —que afirmaría tener mente— es falsa.',
    type: 'boolean',
    correct: true,
    explanation:
      'Searle acepta la IA débil como herramienta y rechaza la fuerte con la Habitación China. El material subraya que toda la IA actual, incluidos los grandes modelos de lenguaje, es IA débil.',
    sourcePages: ['Tema 1.1 · p. 27'],
    origin: 'fuente',
  },

  // ── m1-3-consciencia (5) ────────────────────────────────────────────────
  {
    id: 'm1-3-consciencia-q1',
    moduleId: '1.1',
    lessonId: 'm1-3-consciencia',
    section: '1.1.3',
    difficulty: 'facil',
    prompt: '¿Qué pregunta el problema difícil de la consciencia, según Chalmers?',
    type: 'multiple',
    options: [
      'Cómo el cerebro integra información y controla la conducta.',
      'Por qué existe experiencia subjetiva: por qué procesar información se siente como algo.',
      'Cómo medir la actividad neuronal durante la atención.',
      'Cómo lograr que una máquina apruebe el Test de Turing.',
    ],
    correct: [1],
    explanation:
      'Los problemas fáciles explican funciones como la atención o la memoria; el problema difícil pregunta por qué existe experiencia subjetiva, y sigue abierto desde 1996.',
    sourcePages: ['Tema 1.1 · pp. 31–32'],
    origin: 'fuente',
  },
  {
    id: 'm1-3-consciencia-q2',
    moduleId: '1.1',
    lessonId: 'm1-3-consciencia',
    section: '1.1.3',
    difficulty: 'facil',
    prompt: '¿Qué son los qualia?',
    type: 'multiple',
    options: [
      'Las reglas formales que sigue una computadora.',
      'Las cualidades subjetivas de una experiencia, como cómo se siente ver rojo.',
      'Los errores de razonamiento de un modelo.',
      'Las medidas de rendimiento de un agente.',
    ],
    correct: [1],
    explanation:
      'Qualia es el nombre técnico de «lo que se siente». La diferencia entre procesar información y experimentarla sigue sin puente conceptual.',
    sourcePages: ['Tema 1.1 · p. 33'],
    origin: 'fuente',
  },
  {
    id: 'm1-3-consciencia-q3',
    moduleId: '1.1',
    lessonId: 'm1-3-consciencia',
    section: '1.1.3',
    difficulty: 'media',
    prompt: '¿Qué sostiene el funcionalismo acerca de la mente?',
    type: 'multiple',
    options: [
      'Que la mente requiere obligatoriamente neuronas biológicas.',
      'Que importa la organización funcional —el patrón de procesos— y no el material que la ejecuta.',
      'Que la mente es una sustancia de naturaleza distinta a lo físico.',
      'Que ninguna máquina podrá simular procesos mentales.',
    ],
    correct: [1],
    explanation:
      'El funcionalismo compara con el vuelo y la aerodinámica: importa el patrón de procesos, no el material. Si es correcto, la consciencia artificial sería posible en principio.',
    sourcePages: ['Tema 1.1 · p. 34'],
    origin: 'fuente',
  },
  {
    id: 'm1-3-consciencia-q4',
    moduleId: '1.1',
    lessonId: 'm1-3-consciencia',
    section: '1.1.3',
    difficulty: 'media',
    prompt: 'Clasifica cada afirmación según la posición filosófica que la sostiene.',
    type: 'classification',
    categories: ['Funcionalismo', 'Dualismo'],
    items: [
      { text: 'Lo que importa es el patrón de procesos, no el material que los ejecuta.', category: 'Funcionalismo' },
      { text: 'La experiencia subjetiva no se reduce a procesos físicos.', category: 'Dualismo' },
      { text: 'La consciencia artificial sería posible en principio si se replica la organización adecuada.', category: 'Funcionalismo' },
      { text: 'La consciencia artificial sería imposible por principio.', category: 'Dualismo' },
    ],
    explanation:
      'El funcionalismo define la mente por su organización funcional y admite la consciencia artificial en principio; el dualismo la considera de otra naturaleza y la niega por principio.',
    sourcePages: ['Tema 1.1 · pp. 34–36'],
    origin: 'fuente',
  },
  {
    id: 'm1-3-consciencia-q5',
    moduleId: '1.1',
    lessonId: 'm1-3-consciencia',
    section: '1.1.3',
    difficulty: 'media',
    prompt: 'En 2022, la comunidad científica concluyó que LaMDA era consciente porque afirmaba tener sentimientos.',
    type: 'boolean',
    correct: false,
    explanation:
      'Tras la declaración de Blake Lemoine, Google lo suspendió y luego lo despidió. La comunidad fue casi unánime: LaMDA producía texto plausible sobre sentimientos, no evidencia de sentirlos.',
    sourcePages: ['Tema 1.1 · p. 38'],
    origin: 'fuente',
  },

  // ── m1-4-disciplinas (3) ────────────────────────────────────────────────
  {
    id: 'm1-4-disciplinas-q1',
    moduleId: '1.1',
    lessonId: 'm1-4-disciplinas',
    section: 'Complemento',
    difficulty: 'media',
    prompt: '¿Cuál es la pregunta central de la estadística como disciplina?',
    type: 'multiple',
    options: [
      '¿Cómo construir sistemas que perciben, deciden y actúan?',
      '¿Qué podemos afirmar —y con qué confianza— sobre una población a partir de una muestra?',
      '¿Cómo transformar datos crudos en decisiones de negocio?',
      '¿Cómo lograr que un sistema resuelva problemas de forma autónoma?',
    ],
    correct: [1],
    explanation:
      'La estadística estudia la incertidumbre: estima parámetros y mide la confianza de sus conclusiones. Las otras opciones corresponden a la IA o a la ciencia de datos.',
    sourcePages: ['Tema 1.1 · pp. 41, 45'],
    origin: 'fuente',
  },
  {
    id: 'm1-4-disciplinas-q2',
    moduleId: '1.1',
    lessonId: 'm1-4-disciplinas',
    section: 'Complemento',
    difficulty: 'media',
    prompt: '¿Cuál es el entregable típico de un trabajo estadístico?',
    type: 'multiple',
    options: [
      'Un sistema autónomo en producción.',
      'Un tablero de visualización sin más.',
      'Una conclusión con margen de error, por ejemplo «12 % ± 3 %».',
      'Un modelo de lenguaje entrenado a gran escala.',
    ],
    correct: [2],
    explanation:
      'La estadística produce conclusiones con incertidumbre cuantificada. El tablero o el modelo en producción corresponden más bien a la ciencia de datos, y el sistema autónomo a la IA.',
    sourcePages: ['Tema 1.1 · pp. 41, 45'],
    origin: 'fuente',
  },
  {
    id: 'm1-4-disciplinas-q3',
    moduleId: '1.1',
    lessonId: 'm1-4-disciplinas',
    section: 'Complemento',
    difficulty: 'media',
    prompt:
      'Según el material, la IA suele aparecer como una fase —la de modelado inteligente— dentro de un proyecto de ciencia de datos, y usa herramientas estadísticas en sus modelos.',
    type: 'boolean',
    correct: true,
    explanation:
      'La estadística es el fundamento matemático del aprendizaje automático y la IA se integra como fase de modelado en la ciencia de datos, que es el oficio integrador.',
    sourcePages: ['Tema 1.1 · pp. 43–44'],
    origin: 'fuente',
  },

  // ── m1-5-repaso (3) ─────────────────────────────────────────────────────
  {
    id: 'm1-5-repaso-q1',
    moduleId: '1.1',
    lessonId: 'm1-5-repaso',
    section: 'Cierre',
    difficulty: 'media',
    prompt: '¿Cuál es el hilo conductor del tema 1.1, según su mapa de repaso?',
    type: 'multiple',
    options: [
      'La IA ya es consciente y solo falta regularla.',
      'Simular, actuar, comprender y sentir son cuatro cosas distintas.',
      'La estadística, la ciencia de datos y la IA son la misma disciplina.',
      'Turing y Searle coincidieron en que las máquinas comprenden.',
    ],
    correct: [1],
    explanation:
      'El cierre del tema insiste en no confundir esas cuatro cosas al diseñar sistemas: es la competencia central del tema.',
    sourcePages: ['Tema 1.1 · p. 48'],
    origin: 'fuente',
  },
  {
    id: 'm1-5-repaso-q2',
    moduleId: '1.1',
    lessonId: 'm1-5-repaso',
    section: 'Cierre',
    difficulty: 'media',
    prompt:
      'Según el cierre del tema, después de la Habitación China la comunidad científica alcanzó un consenso sobre si las máquinas pueden comprender.',
    type: 'boolean',
    correct: false,
    explanation:
      'El debate sigue sin consenso más de cuarenta años después: el experimento mental de Searle no lo cerró, lo detonó.',
    sourcePages: ['Tema 1.1 · pp. 28, 48'],
    origin: 'fuente',
  },
  {
    id: 'm1-5-repaso-q3',
    moduleId: '1.1',
    lessonId: 'm1-5-repaso',
    section: 'Cierre',
    difficulty: 'media',
    prompt:
      'Mientras la IA sea «débil» —una herramienta sin comprensión demostrada—, ¿en quién recae la responsabilidad cuando un sistema causa un daño?',
    type: 'multiple',
    options: [
      'En el propio sistema, porque tomó la decisión por su cuenta.',
      'En quienes lo diseñan, despliegan y supervisan.',
      'En nadie, porque los accidentes algorítmicos son inevitables.',
      'En el fabricante del hardware exclusivamente.',
    ],
    correct: [1],
    explanation:
      'El material concluye que, al ser la IA una herramienta sin comprensión, la responsabilidad recae en quienes la diseñan, despliegan y supervisan: es decir, en el ingeniero.',
    sourcePages: ['Tema 1.1 · pp. 37, 47'],
    origin: 'fuente',
  },
]
