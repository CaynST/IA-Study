import type { Lesson } from '@/types/content'

/**
 * Módulo 1.3 — Estado actual de la inteligencia artificial.
 * Redacción propia a partir del material de clase (Tema 1.3 · 45 páginas).
 * Las cifras son una fotografía temporal 2025–2026, nunca un dato en vivo.
 */
export const m3Lessons: Lesson[] = [
  // ---------------------------------------------------------------------------
  // m3-intro
  // ---------------------------------------------------------------------------
  {
    id: 'm3-intro',
    moduleId: '1.3',
    section: 'Introducción',
    title: 'Tres fuerzas y un artículo: la IA que ya es infraestructura',
    subtitle:
      'Por qué la inteligencia artificial dejó de ser un experimento de laboratorio y qué señales de 2025–2026 conviene saber leer con su fecha.',
    learningObjectives: [
      'Explicar la convergencia de algoritmos, cómputo y datos como motor del estado actual de la IA.',
      'Ubicar el transformer de Vaswani et al. (2017) y la autoatención como base del paradigma dominante.',
      'Interpretar las cifras del tema 1.3 como una fotografía temporal 2025–2026, con fecha y fuente.',
    ],
    estimatedMinutes: 8,
    blocks: [
      {
        type: 'paragraph',
        text: 'La [inteligencia artificial] vive una transformación sin precedentes. El material de clase la explica como el resultado de la convergencia de tres fuerzas: **avances algorítmicos**, **capacidad computacional masiva** y **datos a escala global**. El paradigma dominante es el aprendizaje profundo basado en [transformers], extendido ya al texto, la visión, el audio y los sistemas multimodales (Tema 1.3 · p. 3).',
      },
      {
        type: 'callout',
        variant: 'source',
        title: 'Fuente',
        text: 'Antología de Inteligencia Artificial, UV, sección 1.3; Stanford HAI, AI Index Report 2025 y 2026. Referencias del Tema 1.3 · pp. 3–4.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Tres fuerzas que convergen',
      },
      {
        type: 'table',
        headers: ['Fuerza', 'Qué aporta', 'En el material'],
        rows: [
          [
            'Algoritmos',
            'El transformer (2017) y sus derivados: autoatención, entrenamiento a escala, modelos de razonamiento y de difusión.',
            'p. 3',
          ],
          [
            'Cómputo',
            'GPU/TPU y centros de datos masivos; el cómputo de entrenamiento de modelos punteros creció ~4–5× por año en la última década.',
            'p. 3',
          ],
          [
            'Datos',
            'Corpus de billones de tokens extraídos de la web, libros, código y contenido multimodal; más datos sintéticos generados por IA.',
            'p. 3',
          ],
        ],
        caption: 'Resumen propio de la convergencia descrita en Tema 1.3 · p. 3.',
      },
      {
        type: 'paragraph',
        text: 'Para el ingeniero de software, la conclusión es directa: la IA ya no es un tema de laboratorio, **es una capa más de la pila tecnológica**. Está presente en editores de código, APIs, bases de datos y herramientas de prueba (p. 3).',
      },
      {
        type: 'callout',
        variant: 'key',
        title: 'Idea clave',
        text: 'Ninguna de las tres fuerzas explica sola el salto: hacen falta mejores algoritmos, cómputo abundante y datos masivos al mismo tiempo.',
      },
      {
        type: 'heading',
        level: 2,
        text: '2017: el artículo que lo cambió todo',
      },
      {
        type: 'paragraph',
        text: 'En 2017, Vaswani et al. publicaron «Attention is All You Need». Su mecanismo de [autoatención] permite procesar secuencias completas en paralelo, sin recurrencia. Ese diseño escaló: BERT y GPT (2018), GPT-3 (2020), ChatGPT (2022)… y hoy es la base de casi todo modelo puntero de texto, imagen, audio y video (pp. 3–4).',
      },
      {
        type: 'list',
        items: [
          '**Autoatención.** Cada elemento de la secuencia «mira» a los demás para construir su representación.',
          '**Paralelización.** Al no depender del paso anterior, el entrenamiento aprovecha mejor el hardware.',
          '**Escala.** Más parámetros y más datos mejoraron el rendimiento de forma sostenida.',
          '**Expansión multimodal.** El mismo diseño pasó del lenguaje a la visión, el audio y los sistemas multimodales.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Industria y benchmarks: señales de 2025–2026',
      },
      {
        type: 'table',
        headers: ['Señal', 'Dato citado (2025–2026)', 'Fuente del material'],
        rows: [
          [
            'Producción de modelos frontera',
            '>90 % de los modelos frontera notables de 2025 los produjo la industria, no la academia.',
            'AI Index 2026 · p. 4',
          ],
          [
            'SWE-bench Verified',
            'Pasó de ~60 % a ~100 % en un año (resolución real de errores de software).',
            'AI Index 2026 · p. 4',
          ],
          [
            'Adopción estudiantil',
            '4 de 5 estudiantes universitarios ya usan IA generativa de forma habitual.',
            'AI Index 2026 · p. 4',
          ],
          [
            'Usuarios de ChatGPT',
            '~900 M de usuarios semanales (mar. 2026).',
            'OpenAI · p. 1',
          ],
        ],
        caption: 'Fotografía temporal 2025–2026 tomada del material. No son datos en vivo.',
      },
      {
        type: 'callout',
        variant: 'didactic',
        title: 'Ampliación didáctica',
        text: 'El material lo advierte: **los benchmarks clásicos se agotan más rápido de lo que se crean**. Cuando un modelo «gana» una prueba, conviene preguntar de qué año es el resultado, sobre qué versión y con qué metodología. Por eso aquí nunca se afirma que un modelo sea «el mejor»: la posición cambia cada pocas semanas y siempre necesita fuente y fecha.',
      },
    ],
    keyTerms: [
      {
        term: 'Transformer',
        definition:
          'Arquitectura basada en autoatención, presentada por Vaswani et al. (2017), que procesa secuencias en paralelo y sostiene a los modelos punteros actuales.',
      },
      {
        term: 'Autoatención',
        definition:
          'Mecanismo que pondera la relación de cada elemento de una secuencia con todos los demás para construir su representación.',
      },
      {
        term: 'Fotografía temporal',
        definition:
          'Conjunto de cifras de 2025–2026 que describen un instante del campo. No son datos en tiempo real y deben citarse con su fecha.',
      },
    ],
    recap: [
      'Tres fuerzas explican el salto: algoritmos, cómputo y datos.',
      'El transformer (2017) y la autoatención sostienen el paradigma dominante y se extendieron a todas las modalidades.',
      'En 2025, la industria —no la academia— produjo más del 90 % de los modelos frontera.',
      'Las cifras del tema 1.3 son una fotografía 2025–2026; los benchmarks se agotan rápido.',
    ],
    commonError:
      'Creer que las cifras del tema son datos en vivo y que «el mejor modelo» es un hecho estable. Son una fotografía con fecha y el ranking cambia cada pocas semanas.',
    sourcePages: ['Tema 1.3 · pp. 3–4'],
    practiceQuestionIds: ['m3-intro-q1', 'm3-intro-q2', 'm3-intro-q3'],
  },

  // ---------------------------------------------------------------------------
  // m3-1-llms
  // ---------------------------------------------------------------------------
  {
    id: 'm3-1-llms',
    moduleId: '1.3',
    section: '1.3.1',
    title: 'Grandes Modelos de Lenguaje: del token al razonamiento',
    subtitle:
      'Cómo funciona un LLM, qué familias existen en 2025–2026, qué hace sorprendentemente bien y por qué sigue alucinando.',
    learningObjectives: [
      'Definir qué es un Gran Modelo de Lenguaje y describir su ciclo de vida: tokenización, preentrenamiento, ajuste/alineación e inferencia.',
      'Explicar por qué la inferencia es probabilística y cómo la temperatura y la ventana de contexto afectan el resultado.',
      'Distinguir familias de modelos y capacidades emergentes sin declarar «el mejor», y reconocer los límites actuales.',
    ],
    estimatedMinutes: 16,
    blocks: [
      {
        type: 'paragraph',
        text: 'Un [Gran Modelo de Lenguaje] (LLM, por *Large Language Model*) es una red neuronal profunda —hoy casi siempre un transformer— entrenada para **predecir el siguiente token** sobre corpus de billones de palabras. De ese objetivo aparentemente simple emergen traducción, resumen, razonamiento y generación de código. Sus tres rasgos son la escala masiva (decenas o cientos de miles de millones de parámetros), la generalidad (un solo modelo hace tareas muy diversas sin reentrenarse) y la interfaz en lenguaje natural (se controlan con instrucciones, es decir, prompts) (Tema 1.3 · p. 6).',
      },
      {
        type: 'callout',
        variant: 'source',
        title: 'Fuente',
        text: 'Antología IA-UV, 1.3.1; documentación oficial de OpenAI, Anthropic, Google DeepMind y Meta. Tema 1.3 · pp. 5–16.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'El ciclo de vida de un LLM',
      },
      {
        type: 'list',
        ordered: true,
        items: [
          '**Tokenización.** El texto se divide en [tokens] (fragmentos de palabras) y cada uno se convierte en un vector numérico, el *embedding*.',
          '**Preentrenamiento.** El transformer aprende a predecir el siguiente token sobre corpus masivos, ajustando miles de millones de pesos por retropropagación.',
          '**Ajuste y alineación.** *Fine-tuning* con instrucciones y [RLHF] (aprendizaje por refuerzo con retroalimentación humana) para seguir órdenes y evitar respuestas dañinas.',
          '**Inferencia.** En uso, el modelo genera texto token a token de forma probabilística: no «recupera» respuestas, las compone cada vez.',
        ],
      },
      {
        type: 'interactive',
        component: 'token-pipeline',
        title: 'Del texto al token',
        hint: 'Recorre el flujo tokenización → embeddings → preentrenamiento → ajuste/alineación → inferencia para ver dónde actúa cada etapa.',
      },
      {
        type: 'callout',
        variant: 'didactic',
        title: 'Ampliación didáctica: temperatura y muestreo',
        text: 'La salida es probabilística y por tokens: tras el preentrenamiento, el modelo asigna una probabilidad a cada token siguiente y elige uno. La [temperatura] es el parámetro que gradúa cuánto azar se inyecta en esa elección: valores bajos dan respuestas más repetibles y conservadoras; valores altos, más variadas y creativas. El material menciona la temperatura en la p. 7; la explicación del parámetro es una ampliación didáctica. Junto con la sensibilidad al prompt, explica por qué dos ejecuciones pueden diferir.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Atención y ventana de contexto',
      },
      {
        type: 'interactive',
        component: 'attention-context',
        title: 'Atención y contexto',
        hint: 'Observa cómo la autoatención relaciona tokens entre sí y cómo crece la «memoria de trabajo» del modelo.',
      },
      {
        type: 'paragraph',
        text: 'La [ventana de contexto] es la «memoria de trabajo» del modelo: cuánto texto puede considerar a la vez. Creció unas 500× en cinco años: desde unos miles de tokens en 2020 hasta 1–2 millones en los modelos de 2024–2025, lo que habilita analizar bases de código, contratos y logs enteros. Aun así, **más contexto no es atención perfecta**: el rendimiento suele degradarse en documentos muy largos (el fenómeno *lost in the middle*) (p. 8).',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Panorama de familias y modelos de razonamiento (2025–2026)',
      },
      {
        type: 'table',
        headers: ['Familia', 'Desarrollador', 'Acceso', 'Rasgo distintivo'],
        rows: [
          ['GPT-5.x', 'OpenAI', 'API / ChatGPT', 'Uso general, agentes y herramientas; ~900 M de usuarios semanales de ChatGPT'],
          ['Claude 4.x', 'Anthropic', 'API / Claude', 'Codificación y trabajo de largo aliento; referente en programación'],
          ['Gemini 3', 'Google DeepMind', 'API / Gemini', 'Multimodal nativo y contexto de 1–2 M de tokens'],
          ['Llama 4', 'Meta', 'Pesos abiertos', 'Despliegue propio y personalización; base de derivados open source'],
          ['DeepSeek R1/V3', 'DeepSeek (China)', 'Código abierto (MIT)', 'Razonamiento a bajo costo; MoE de 671B parámetros (37B activos)'],
          ['Qwen3 · Mistral', 'Alibaba · Mistral AI', 'Pesos abiertos', 'Modelos pequeños muy capaces (3–32B) para hardware local o el borde'],
        ],
        caption:
          'Fotografía de 2025–2026 tomada del material (Tema 1.3 · p. 9). No es un ranking: cada modelo se evalúa sobre el caso de uso concreto.',
      },
      {
        type: 'paragraph',
        text: 'Desde 2024–2026 aparecieron los [modelos de razonamiento]: además de entrenar modelos más grandes, se les entrena con aprendizaje por refuerzo para «pensar» más tiempo antes de responder (*test-time compute*). OpenAI o1/o3, DeepSeek R1 (abierto, licencia MIT), Claude con *extended thinking* y Gemini con *thinking mode* dominan matemáticas, ciencia y código. En el material, o3 alcanza 96.7 % en AIME y R1, 79.8 %, y en SWE-bench Verified (software real), 71.7 % frente a 49.2 % (pp. 11–12). En paralelo, la adopción en programación es masiva: ~46 % del código de los usuarios de GitHub Copilot se genera con la herramienta, +20 M de usuarios acumulados y 90 % de las empresas Fortune 100 la usan (jul. 2025). El costo de inferencia de un modelo nivel GPT-3.5 cayó más de 280× entre 2022 y 2024, y hoy la estrategia común es enrutar lo simple a modelos baratos y reservar los grandes para lo complejo (pp. 12, 14).',
      },
      {
        type: 'table',
        headers: ['Capacidad emergente', 'Qué hace'],
        rows: [
          ['Cadena de pensamiento', '«Piensa paso a paso»: descompone problemas y mejora en matemáticas y lógica.'],
          ['Aprendizaje en contexto', 'Aprende de ejemplos dados en el propio prompt (few-shot), sin actualizar sus pesos.'],
          ['Generación de código', 'Escribe, explica, depura y traduce código; base de Copilot, Claude Code y Codex.'],
          ['Traducción y multilingüismo', 'Traduce entre decenas de idiomas con calidad cercana a servicios especializados.'],
          ['Síntesis y redacción', 'Resume documentos largos, redacta en tonos y formatos dados y extrae datos estructurados.'],
          ['Uso de herramientas', 'Llama funciones, APIs, buscadores y ejecutores de código: la base de los agentes.'],
        ],
        caption: 'Nadie las entrenó explícitamente: surgieron al escalar datos y parámetros (Tema 1.3 · p. 10).',
      },
      {
        type: 'callout',
        variant: 'warning',
        title: 'Límites que persisten',
        text: '**Alucinaciones** (información plausible pero incorrecta; se mitigan con RAG y verificación, pero no desaparecen), **sesgos** del corpus que se reproducen y amplifican si no se auditan, **costos computacionales y ambientales** (entrenar un modelo frontera cuesta decenas o cientos de millones de USD), y **conocimiento congelado y opacidad**: el saber se detiene en la fecha de corte y el modelo no explica de forma fiable por qué produjo una salida (p. 15).',
      },
    ],
    keyTerms: [
      {
        term: 'Gran Modelo de Lenguaje (LLM)',
        definition:
          'Red neuronal profunda, casi siempre un transformer, entrenada para predecir el siguiente token sobre corpus masivos; de ahí emergen tareas muy diversas.',
      },
      {
        term: 'Token',
        definition:
          'Unidad o fragmento de texto (palabra o parte de ella) que el modelo procesa. El texto se convierte en secuencia de tokens antes de entrar a la red.',
      },
      {
        term: 'RLHF',
        definition:
          'Aprendizaje por refuerzo con retroalimentación humana. Técnica de alineación que enseña al modelo a seguir instrucciones y a evitar respuestas dañinas.',
      },
      {
        term: 'Ventana de contexto',
        definition:
          'Cantidad de tokens que el modelo puede considerar a la vez. No equivale a memoria humana permanente y suele degradarse en documentos muy largos.',
      },
      {
        term: 'Alucinación',
        definition:
          'Salida plausible pero incorrecta o inventada (citas inexistentes, APIs inventadas, datos fabricados). La fluidez no garantiza veracidad.',
      },
    ],
    recap: [
      'Un LLM es un transformer entrenado para predecir el siguiente token; la alineación (fine-tuning + RLHF) lo convierte en asistente útil.',
      'La inferencia es probabilística y por tokens: el modelo compone la respuesta, no la recupera.',
      'El panorama 2025–2026 combina gigantes propietarios y modelos abiertos muy competitivos; no hay un «mejor» estable.',
      'Los modelos de razonamiento agregan cómputo en inferencia y dominan matemáticas, ciencia y código.',
      'Alucinaciones, sesgos, costos y opacidad persisten: comprender los fundamentos es requisito para evaluar salidas.',
    ],
    commonError:
      'Pensar que el modelo «busca» o «recupera» una respuesta guardada, o que más contexto siempre mejora la atención. La salida se compone token a token y el rendimiento se degrada en documentos muy largos.',
    sourcePages: ['Tema 1.3 · pp. 5–16'],
    practiceQuestionIds: [
      'm3-1-llms-q1',
      'm3-1-llms-q2',
      'm3-1-llms-q3',
      'm3-1-llms-q4',
      'm3-1-llms-q5',
      'm3-1-llms-q6',
    ],
  },

  // ---------------------------------------------------------------------------
  // m3-2-generativa
  // ---------------------------------------------------------------------------
  {
    id: 'm3-2-generativa',
    moduleId: '1.3',
    section: '1.3.2',
    title: 'IA generativa: máquinas que crean',
    subtitle:
      'Texto, imagen, audio, video y código; los motores de la creación (transformers generativos, difusión y GAN) y los debates sobre derechos y autenticidad.',
    learningObjectives: [
      'Distinguir la IA discriminativa de la generativa y describir las tres familias de arquitecturas que generan contenido.',
      'Explicar paso a paso cómo un modelo de difusión crea una imagen a partir de ruido.',
      'Reconocer el papel de la IA generativa en el ciclo de desarrollo y los debates legales sobre derechos de autor y deepfakes.',
    ],
    estimatedMinutes: 14,
    blocks: [
      {
        type: 'paragraph',
        text: 'La [IA generativa] crea contenido nuevo —texto, imagen, audio, video y código— en lugar de solo clasificar o predecir. Máquinas que escriben, dibujan, componen y programan artefactos sintéticos indistinguibles —o casi— de los producidos por humanos (Tema 1.3 · p. 17).',
      },
      {
        type: 'callout',
        variant: 'source',
        title: 'Fuente',
        text: 'Antología IA-UV, 1.3.2; Goodfellow et al. (2014); Ho et al. (2020). Tema 1.3 · pp. 17–24.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'De clasificar a crear',
      },
      {
        type: 'table',
        headers: ['Aspecto', 'IA discriminativa / predictiva', 'IA generativa'],
        rows: [
          ['Pregunta típica', '¿Esto es spam o no? ¿Qué objeto hay en la imagen?', 'Escribe, dibuja, compón, programa algo nuevo'],
          ['Salida', 'Etiquetas, probabilidades, números', 'Contenido original: texto, imagen, audio, video, código'],
          ['Ejemplo de uso', 'Filtrar correo, clasificar imágenes', 'Redactar, ilustrar, doblar voz, generar video'],
        ],
        caption: 'Comparación propia a partir del material (Tema 1.3 · p. 18).',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Tres familias de arquitecturas',
      },
      {
        type: 'table',
        headers: ['Familia', 'Cómo funciona', 'Ejemplos del material'],
        rows: [
          [
            'Transformers generativos',
            'Generan texto (y cada vez más modalidades) token a token.',
            'GPT, Claude, Gemini',
          ],
          [
            'Modelos de difusión',
            'Parte de ruido y lo refinan paso a paso hasta obtener imagen o video.',
            'Stable Diffusion, Midjourney, Veo',
          ],
          [
            'GAN (precedente clave)',
            'Un generador y un discriminador compiten entre sí.',
            'Goodfellow, 2014; dominaron la síntesis de imagen hasta 2021',
          ],
        ],
        caption: 'Tema 1.3 · p. 18.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Cómo genera una imagen un modelo de difusión',
      },
      {
        type: 'list',
        ordered: true,
        items: [
          '**Prompt.** El texto se codifica en vectores que guiarán todo el proceso de generación.',
          '**Ruido + refinado.** El modelo parte de ruido puro y lo «desruida» paso a paso, acercándose a imágenes coherentes con el prompt.',
          '**Imagen final.** Tras decenas de pasos de refinado emerge una imagen nueva, coherente y de alta resolución.',
        ],
      },
      {
        type: 'figure',
        figure: 'diffusion-steps',
        caption: 'Difusión: del ruido a la imagen nítida (Tema 1.3 · p. 19).',
      },
      {
        type: 'interactive',
        component: 'generative-comparator',
        title: 'Discriminativa vs generativa',
        hint: 'Compara tareas, salidas y casos de uso de cada paradigma antes de avanzar.',
      },
      {
        type: 'table',
        headers: ['Medio', 'Herramientas representativas', 'Uso típico', 'Riesgo asociado'],
        rows: [
          ['Imagen', 'Midjourney, Stable Diffusion, DALL·E', 'Diseño, publicidad, prototipado', 'Deepfakes, estilo sin consentimiento'],
          ['Audio', 'ElevenLabs, Suno, Udio', 'Doblaje, música, accesibilidad', 'Suplantación de voz, fraude telefónico'],
          ['Video', 'Sora 2, Veo 3 / 3.1', 'Clips, publicidad, efectos', 'Desinformación, detección difícil'],
        ],
        caption: 'Estado del arte 2025–2026 según el material (pp. 20–21).',
      },
      {
        type: 'paragraph',
        text: 'El video generativo es el terreno más volátil. En dos años pasó por tres saltos: en 2024, Sora 1 sorprendió con clips coherentes de hasta un minuto; en 2025, Veo 3 agregó audio nativo sincronizado (diálogo y ambiente junto con la imagen, con marca de agua SynthID); en 2026, los clips fotorrealistas mantienen continuidad entre tomas. La [volatilidad del mercado] es real: Sora 2 se lanzó en septiembre de 2025 y su app cerró en abril de 2026. **Lección de arquitectura:** diseña tus sistemas para poder cambiar de modelo sin rehacer el producto (p. 21).',
      },
      {
        type: 'table',
        headers: ['Etapa del desarrollo', 'Qué hace la IA generativa hoy', 'Herramientas representativas'],
        rows: [
          ['Diseño', 'Propone arquitecturas, esquemas de BD y contratos de API.', 'ChatGPT, Claude, Gemini'],
          ['Codificación', 'Autocompleta funciones, genera módulos completos y traduce entre lenguajes.', 'GitHub Copilot, Claude Code, Codex, Cursor'],
          ['Pruebas', 'Genera casos de prueba, datos sintéticos y pruebas unitarias.', 'Copilot, agentes de testing'],
          ['Depuración', 'Explica errores, propone correcciones y revisa *diffs*.', 'Claude Code, Codex, Copilot'],
          ['Documentación', 'Redacta README, docstrings y notas de versión.', 'Todas las anteriores'],
        ],
        caption: 'El rol del ingeniero se desplaza de escribir código a especificar, revisar y verificar (Tema 1.3 · p. 22).',
      },
      {
        type: 'callout',
        variant: 'warning',
        title: 'Derechos, autenticidad y etiquetado',
        text: 'Los modelos se entrenan con obras con copyright y hay litigios abiertos (por ejemplo, *The New York Times* vs. OpenAI) y acuerdos millonarios de licencia. Los [deepfakes] son contenido sintético indistinguible del real, con riesgo de desinformación y fraude. La [Ley de IA de la UE] obliga desde agosto de 2026 a etiquetar deepfakes y contenido sintético (art. 50). Para el ingeniero, la trazabilidad (marcas de agua, metadatos C2PA/SynthID) deja de ser opcional (p. 23).',
      },
    ],
    keyTerms: [
      {
        term: 'IA generativa',
        definition:
          'Rama de la IA que crea contenido nuevo (texto, imagen, audio, video, código) en lugar de solo clasificar o predecir sobre datos existentes.',
      },
      {
        term: 'Modelo de difusión',
        definition:
          'Modelo que parte de ruido puro y lo refina paso a paso hasta obtener una imagen, un video o incluso una estructura molecular coherente con el prompt.',
      },
      {
        term: 'GAN',
        definition:
          'Red generativa antagónica: un generador y un discriminador compiten entre sí. Precedente clave (Goodfellow, 2014) de la síntesis de imagen.',
      },
      {
        term: 'Deepfake',
        definition:
          'Contenido sintético —imagen, audio o video— indistinguible del real, usado para desinformación, suplantación o fraude.',
      },
    ],
    recap: [
      'La IA generativa crea contenido nuevo; la discriminativa clasifica o predice.',
      'Tres familias: transformers generativos (texto y código), difusión (imagen, video y biología) y GAN (precedente histórico).',
      'La IA generativa ya participa en todo el ciclo de desarrollo; el ingeniero especifica, revisa y verifica.',
      'Derechos de autor, deepfakes y etiquetado son debates activos; la UE ya exige transparencia (art. 50).',
    ],
    commonError:
      'Confundir generativa con discriminativa, o creer que un modelo de difusión «copia» imágenes de un catálogo. La difusión parte de ruido y lo refina; no pega fragmentos de obras existentes.',
    sourcePages: ['Tema 1.3 · pp. 17–24'],
    practiceQuestionIds: [
      'm3-2-generativa-q1',
      'm3-2-generativa-q2',
      'm3-2-generativa-q3',
      'm3-2-generativa-q4',
    ],
  },

  // ---------------------------------------------------------------------------
  // m3-3-aplicaciones
  // ---------------------------------------------------------------------------
  {
    id: 'm3-3-aplicaciones',
    moduleId: '1.3',
    section: '1.3.3',
    title: 'Aplicaciones prácticas contemporáneas',
    subtitle:
      'Medicina, ciencia, transporte, finanzas, educación, agricultura y la propia ingeniería de software: dónde la IA ya opera en producción.',
    learningObjectives: [
      'Describir aplicaciones emblemáticas de la IA en salud, ciencia, transporte, finanzas, educación y agricultura, con sus cifras fechadas.',
      'Explicar el papel de AlphaFold y de los premios Nobel 2024 en la consolidación de la IA como instrumento científico.',
      'Reconocer el patrón «amplificar al experto» y el impacto de la IA en la ingeniería de software (SWE-bench).',
    ],
    estimatedMinutes: 14,
    blocks: [
      {
        type: 'paragraph',
        text: 'La IA salió del laboratorio: diagnostica enfermedades, conduce taxis, predice proteínas y opera mercados financieros. Cada aplicación del material tiene cifras de despliegue real en 2025–2026 (Tema 1.3 · p. 25).',
      },
      {
        type: 'callout',
        variant: 'source',
        title: 'Fuente',
        text: 'Antología IA-UV, 1.3.3; McKinney et al. (Nature, 2020); NobelPrize.org (2024); Waymo (2025–2026). Tema 1.3 · pp. 25–34.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Medicina: diagnóstico asistido',
      },
      {
        type: 'paragraph',
        text: 'McKinney et al. (Google Health, *Nature* 2020) entrenaron un sistema de *deep learning* que detectó cáncer de mama en mamografías con **menos falsos positivos y falsos negativos** que los radiólogos en los conjuntos de evaluación de EE. UU. y Reino Unido. El material lo cita como hito de la IA aplicada a la salud y hoy cientos de dispositivos médicos con IA están autorizados por la FDA (p. 26).',
      },
      {
        type: 'callout',
        variant: 'key',
        title: 'Matiz profesional',
        text: '«Superar en un benchmark» no es lo mismo que «reemplazar en la clínica». La IA médica opera como [segunda lectura]: la decisión final y la responsabilidad siguen siendo humanas, y la regulación lo exige (alto riesgo en la Ley de IA europea).',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Ciencia: AlphaFold y los Nobel 2024',
      },
      {
        type: 'list',
        ordered: true,
        items: [
          '**2020.** AlphaFold 2 (DeepMind) predice estructuras 3D de proteínas con precisión experimental: resuelve el «problema del plegamiento».',
          '**2021–2022.** Base de datos abierta con estructuras de ~200 M de proteínas —casi todas las conocidas—, gratis para la ciencia.',
          '**2024.** AlphaFold 3 (Nature) predice proteínas, ADN, ARN y ligandos con una red de difusión; Nobel de Química para Hassabis y Jumper.',
          '**Hoy.** Más de 2 M de investigadores en 190 países lo usan para resistencia antibiótica, enzimas que degradan plástico y diseño de fármacos.',
        ],
      },
      {
        type: 'table',
        headers: ['Nobel de Física 2024', 'Nobel de Química 2024'],
        rows: [
          [
            'Hopfield y Hinton, por los fundamentos del aprendizaje automático con redes neuronales (red de Hopfield, 1982; máquina de Boltzmann; Hinton también clave en la retropropagación, 1986).',
            'Baker, por el diseño computacional de proteínas nuevas; Hassabis y Jumper (DeepMind), por AlphaFold 2.',
          ],
        ],
        caption:
          'La Academia sueca reconoció en un mismo año a la IA como ciencia básica y como instrumento científico (Tema 1.3 · p. 28).',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Transporte, finanzas, educación y agricultura',
      },
      {
        type: 'table',
        headers: ['Sector', 'Aplicación emblemática y cifras 2025–2026'],
        rows: [
          [
            'Transporte',
            'Waymo: >500 000 viajes pagados por semana y servicio comercial sin conductor en 14 ciudades de EE. UU. (objetivo: 1 M/semana para fin de 2026); −94 % de accidentes con lesiones graves frente a humanos. Tesla apuesta por visión por cámaras de extremo a extremo; Waymo, por LiDAR + radar + cámaras + mapas HD.',
          ],
          [
            'Finanzas',
            'Trading de alta frecuencia (millones de transacciones por segundo), detección de fraude por anomalías en tiempo real, scoring crediticio con cientos de variables y asistentes LLM internos (Morgan Stanley, JPMorgan). Se despliega con redundancia, monitoreo y «kill switches».',
          ],
          [
            'Educación',
            'Tutores inteligentes que adaptan ritmo y ejercicios: Khanmigo, «modo estudio» de ChatGPT y Gemini for Education. AI Index 2026: 4 de cada 5 universitarios ya usan IA generativa.',
          ],
          [
            'Agricultura',
            'Drones con visión computacional que detectan plagas y estrés hídrico antes que el ojo humano; riego y fertilizante planta por planta; sensores con edge AI que operan sin conectividad.',
          ],
        ],
        caption: 'Tema 1.3 · pp. 29–31. Cifras de 2025–2026, fotografía temporal.',
      },
      {
        type: 'callout',
        variant: 'key',
        title: 'El patrón que se repite',
        text: 'En todos los sectores la IA funciona como **amplificador del experto** (docente, agrónomo, médico, analista), no como reemplazo. El valor está en la personalización a escala y en la segunda lectura, no en sustituir el criterio humano.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'El frente más cercano: la ingeniería de software',
      },
      {
        type: 'paragraph',
        text: 'El sector que construye la IA es también el que más la adopta: los asistentes de código pasaron del autocompletado a [agentes] que ejecutan tareas completas en repositorios reales. La referencia es [SWE-bench] Verified, que mide si un sistema resuelve errores reales de proyectos open source de GitHub: según el AI Index 2026, el mejor resultado pasó de ~60 % a casi 100 % en un año (los valores exactos varían por sistema y fecha). Las tareas rutinarias se automatizan primero y crecen la demanda de arquitectura, revisión y criterio (p. 32).',
      },
      {
        type: 'table',
        headers: ['Sector', 'Aplicación emblemática', 'Técnicas dominantes', 'Madurez en 2026'],
        rows: [
          ['Salud', 'Detección de cáncer en imágenes (McKinney 2020)', 'CNN, visión profunda', 'En clínica como segunda lectura'],
          ['Ciencia', 'AlphaFold: estructura de ~200 M de proteínas', 'Transformers + difusión', 'Estándar mundial; Nobel 2024'],
          ['Transporte', 'Robotaxis Waymo: >500 mil viajes/semana', 'Percepción multimodal, RL', 'Comercial en 14 ciudades'],
          ['Finanzas', 'Trading de alta frecuencia, antifraude', 'Series temporales, anomalías', 'Operación crítica consolidada'],
          ['Educación', 'Tutores inteligentes adaptativos', 'LLMs + modelos del estudiante', 'Adopción masiva estudiantil'],
          ['Agricultura', 'Drones con visión para cultivo de precisión', 'Visión + edge AI', 'Expansión comercial'],
        ],
        caption: 'Patrón: donde hay datos abundantes y métricas claras, la IA ya opera en producción (Tema 1.3 · p. 33).',
      },
    ],
    keyTerms: [
      {
        term: 'Segunda lectura',
        definition:
          'Papel de la IA médica: propone una lectura adicional de un estudio, pero la decisión final y la responsabilidad siguen siendo del profesional humano.',
      },
      {
        term: 'AlphaFold',
        definition:
          'Sistema de DeepMind que predice la estructura 3D de proteínas (y luego ADN, ARN y ligandos) con precisión experimental; su hito recibió el Nobel de Química 2024.',
      },
      {
        term: 'SWE-bench Verified',
        definition:
          'Benchmark que mide si un sistema resuelve errores reales de repositorios open source de GitHub. En 2025–2026 pasó de ~60 % a cerca de 100 %.',
      },
      {
        term: 'Edge AI',
        definition:
          'Ejecución de modelos en el propio dispositivo o sensor —por ejemplo, drones agrícolas— sin depender de conectividad.',
      },
    ],
    recap: [
      'La IA ya opera en producción en salud, ciencia, transporte, finanzas, educación y agricultura, con cifras medibles de 2025–2026.',
      'AlphaFold y los Nobel 2024 muestran el techo: la IA como instrumento de descubrimiento científico.',
      'El patrón de éxito es amplificar al experto: segunda lectura médica, conductor de respaldo, analista con asistente.',
      'En ingeniería de software, los agentes de código ya resuelven la mayoría de los errores de SWE-bench; el valor migra a diseño, revisión y criterio.',
    ],
    commonError:
      'Interpretar «superó a los radiólogos en un benchmark» como «reemplaza al médico». En la clínica la IA opera como segunda lectura y la responsabilidad sigue siendo humana.',
    sourcePages: ['Tema 1.3 · pp. 25–34'],
    practiceQuestionIds: [
      'm3-3-aplicaciones-q1',
      'm3-3-aplicaciones-q2',
      'm3-3-aplicaciones-q3',
      'm3-3-aplicaciones-q4',
    ],
  },

  // ---------------------------------------------------------------------------
  // m3-4-tendencias
  // ---------------------------------------------------------------------------
  {
    id: 'm3-4-tendencias',
    moduleId: '1.3',
    section: '1.3.4',
    title: 'Tendencias y desafíos futuros',
    subtitle:
      'Agentes que actúan, fronteras técnicas, la Ley de IA de la UE y los desafíos técnicos y sociales que son trabajo de ingeniería.',
    learningObjectives: [
      'Describir el ciclo de un agente de IA y los riesgos de seguridad que introduce (inyección de prompts, permisos).',
      'Distinguir las fronteras técnicas (multimodal, neuromórfica, cuántica, AGI) y su madurez en 2026.',
      'Explicar la Ley de IA de la UE por fases y niveles de riesgo, y enumerar los desafíos técnicos y sociales abiertos.',
    ],
    estimatedMinutes: 15,
    blocks: [
      {
        type: 'paragraph',
        text: 'Hacia dónde va la tecnología —agentes, multimodalidad, nuevas arquitecturas— y qué problemas técnicos, legales y sociales siguen abiertos. El material abre el tema con una cifra fechada: Goldman Sachs (2023) estimó que la IA generativa podría afectar ~300 millones de puestos de trabajo en el mundo (Tema 1.3 · p. 35).',
      },
      {
        type: 'callout',
        variant: 'source',
        title: 'Fuente',
        text: 'Antología IA-UV, 1.3.4; Goldman Sachs (2023); Comisión Europea, Reglamento (UE) 2024/1689. Tema 1.3 · pp. 35–42.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Agentes: de responder preguntas a ejecutar tareas',
      },
      {
        type: 'list',
        ordered: true,
        items: [
          '**Percibir.** Lee el objetivo y el estado: archivos, web, correo.',
          '**Planificar.** Descompone la tarea en pasos (razonamiento).',
          '**Actuar.** Llama herramientas: ejecutar código, buscar, escribir archivos.',
          '**Evaluar.** Verifica el resultado y repite el ciclo si falla.',
        ],
      },
      {
        type: 'callout',
        variant: 'warning',
        title: 'Diseño responsable de agentes',
        text: 'Un agente con acceso a herramientas multiplica el impacto de cada error o ataque. El riesgo más citado es la [inyección de prompts]. Reglas mínimas: [sandbox] (aislar la ejecución), permisos mínimos y confirmación humana en acciones irreversibles. En 2025–2026 hay agentes en producción para código (Claude Code, Codex, Copilot Workspace), investigación («Deep Research») y oficina (Claude Cowork).',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Fronteras técnicas: qué viene después del transformer',
      },
      {
        type: 'table',
        headers: ['Tendencia', 'Qué es', 'Estado en 2026'],
        rows: [
          ['IA multimodal', 'Un solo modelo entiende y genera texto, imagen, audio y video.', 'Ya es estándar en los modelos punteros (Gemini, GPT, Claude)'],
          ['Cómputo neuromórfico', 'Chips inspirados en el cerebro: neuronas y sinapsis en silicio, consumo mínimo.', 'Investigación avanzada (Intel Loihi, SpiNNaker); nichos de edge'],
          ['Computación cuántica + IA', 'Acelerar optimización y simulación molecular con qubits.', 'Experimental; demostraciones sin ventaja práctica general'],
          ['AGI (IA general)', 'Sistema con competencia humana amplia en la mayoría de tareas cognitivas.', 'Sin consenso: algunos laboratorios la ven cercana, otros a décadas'],
        ],
        caption: 'Tema 1.3 · p. 37. Agenda abierta de la década.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'La Ley de IA de la UE: el primer marco integral',
      },
      {
        type: 'list',
        ordered: true,
        items: [
          '**ago. 2024.** Entrada en vigor del Reglamento (UE) 2024/1689.',
          '**feb. 2025.** Prácticas prohibidas (puntuación social, manipulación) y obligación de alfabetización en IA.',
          '**ago. 2025.** Obligaciones para modelos de IA de uso general (GPAI) y gobernanza europea.',
          '**ago. 2026.** Aplicación general: transparencia (art. 50), etiquetado de contenido sintético y régimen sancionador.',
          '**2027–2028.** Normas de alto riesgo, reformadas por el «Ómnibus Digital» (dic. 2027 y ago. 2028).',
        ],
      },
      {
        type: 'table',
        headers: ['Nivel de riesgo', 'Consecuencia'],
        rows: [
          ['Inaceptable', 'Prohibido (puntuación social, manipulación).'],
          ['Alto riesgo', 'Requisitos estrictos de supervisión, explicabilidad y auditoría (salud, empleo, crédito).'],
          ['Transparencia limitada', 'Chatbots y deepfakes deben etiquetarse.'],
          ['Riesgo mínimo', 'Sin reglas nuevas (filtros de spam, videojuegos).'],
        ],
        caption:
          'Sanciones: hasta 35 M € o 7 % de la facturación global por prácticas prohibidas; 15 M € o 3 % por otras obligaciones. Aplica también a proveedores fuera de la UE (Tema 1.3 · p. 38).',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Desafíos técnicos y sociales',
      },
      {
        type: 'table',
        headers: ['Desafío técnico', 'Descripción'],
        rows: [
          ['Explicabilidad', 'Modelos de caja negra: no podemos reconstruir por qué decidieron. La interpretabilidad mecanicista intenta «abrir» las redes y la regulación de alto riesgo exige explicaciones.'],
          ['Seguridad adversaria', 'Entradas manipuladas para engañar al modelo: inyección de prompts en agentes y ejemplos adversarios en visión. Sin solución completa.'],
          ['Privacidad', 'Los modelos pueden memorizar datos de entrenamiento, incluidos personales. Respuestas: privacidad diferencial, aprendizaje federado y borrado de datos.'],
          ['Costo físico de la escala', 'Los centros de datos consumen electricidad de escala urbana (~320 000 M USD de inversión conjunta de Amazon, Meta, Microsoft y Google); la eficiencia del hardware mejora ~40 % al año.'],
        ],
        caption: 'Tema 1.3 · p. 39.',
      },
      {
        type: 'list',
        items: [
          '**Empleo.** «Expuesto» no es «eliminado»: la tecnología transforma tareas más rápido que profesiones. En software, los *commits* en GitHub crecieron ~25 % en 2025 —la IA multiplica al desarrollador que sabe usarla—. La brecha real es de habilidades, no de máquinas contra humanos.',
          '**Sesgos.** Los modelos reproducen y amplifican sesgos del corpus si no se auditan; el scoring crediticio es caso de alto riesgo regulado.',
          '**Percepción pública.** Varía por región (% que ve la IA más beneficiosa que dañina, AI Index 2025): China 83 %, Indonesia 80 %, Tailandia 77 %, EE. UU. 39 % y Países Bajos 36 %.',
        ],
      },
      {
        type: 'table',
        headers: ['Competencia', 'Qué implica'],
        rows: [
          [
            'Fundamentos antes que frameworks',
            'Tokens, contexto, probabilidad y alucinación, para evaluar salidas y diseñar salvaguardas.',
          ],
          [
            'Patrones de integración',
            'Prompts, RAG, llamada a herramientas (*function calling*), evaluación con benchmarks propios y enrutamiento por costo/complejidad.',
          ],
          [
            'Seguridad específica de IA',
            'Inyección de prompts, fuga de datos y alucinación de dependencias; sandbox y permisos mínimos para agentes.',
          ],
          [
            'Cumplimiento',
            'Si tu sistema usa IA y llega a usuarios, la Ley de IA (UE) ya te asigna obligaciones de alfabetización, transparencia y etiquetado.',
          ],
          [
            'Criterio de adopción',
            'Abstrae el modelo detrás de interfaces para no casarte con un proveedor; el mercado cambia cada mes.',
          ],
        ],
        caption: 'Cinco competencias del ingeniero de software en 2026 (Tema 1.3 · p. 41).',
      },
    ],
    keyTerms: [
      {
        term: 'Agente de IA',
        definition:
          'Sistema que percibe el estado, planifica pasos, actúa llamando herramientas y evalúa el resultado en ciclos hasta cumplir el objetivo.',
      },
      {
        term: 'Inyección de prompts',
        definition:
          'Ataque que introduce instrucciones maliciosas en el contenido que lee un agente para desviar su comportamiento; es un riesgo central de seguridad.',
      },
      {
        term: 'Ley de IA de la UE',
        definition:
          'Reglamento (UE) 2024/1689, el primer marco integral de IA. Se aplica por fases desde 2024 y clasifica los sistemas por niveles de riesgo.',
      },
      {
        term: 'AGI',
        definition:
          'Inteligencia artificial general: sistema con competencia humana amplia en la mayoría de tareas cognitivas. En 2026 no hay consenso sobre su cercanía.',
      },
    ],
    recap: [
      'Los agentes son la tendencia dominante: LLMs que planifican, usan herramientas y verifican sus resultados en ciclos.',
      'Multimodalidad consolidada; neuromórfica, cuántica y AGI siguen como fronteras abiertas de la década.',
      'La Ley de IA de la UE se aplica por fases desde 2024, con aplicación general y etiquetado en agosto de 2026.',
      'Explicabilidad, sesgos, privacidad, seguridad y empleo son parte del trabajo de ingeniería, no un apéndice ético opcional.',
    ],
    commonError:
      'Creer que los desafíos éticos son un apéndice opcional o que un agente puede operar con permisos amplios. Explicabilidad, seguridad y permisos mínimos son requisitos de ingeniería.',
    sourcePages: ['Tema 1.3 · pp. 35–42'],
    practiceQuestionIds: [
      'm3-4-tendencias-q1',
      'm3-4-tendencias-q2',
      'm3-4-tendencias-q3',
      'm3-4-tendencias-q4',
    ],
  },

  // ---------------------------------------------------------------------------
  // m3-5-mapa-tecnicas
  // ---------------------------------------------------------------------------
  {
    id: 'm3-5-mapa-tecnicas',
    moduleId: '1.3',
    section: 'Cierre',
    title: 'Cierre: el mapa de técnicas y algoritmos de la IA actual',
    subtitle:
      'Ninguna rama desapareció: la IA de 2025–2026 combina símbolos, aprendizaje automático, aprendizaje profundo y una capa de sistemas sobre todo ello.',
    learningObjectives: [
      'Ubicar la IA simbólica, el aprendizaje automático y el aprendizaje profundo en un mismo mapa de técnicas.',
      'Distinguir los tipos de aprendizaje (supervisado, no supervisado y por refuerzo) y sus técnicas representativas.',
      'Explicar la capa de sistemas de 2025–2026: RAG, agentes, destilación y test-time compute.',
    ],
    estimatedMinutes: 10,
    blocks: [
      {
        type: 'paragraph',
        text: 'El cierre del tema propone una infografía-mapamundi de las técnicas y algoritmos que sostienen la IA actual: de la regresión logística a los transformers y los modelos de difusión. La idea de fondo es que **ninguna rama desapareció** (Tema 1.3 · p. 43).',
      },
      {
        type: 'callout',
        variant: 'source',
        title: 'Fuente',
        text: 'Infografía «Panorama 2026» y cierre del Tema 1.3 · pp. 43–45.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Tres familias de técnicas',
      },
      {
        type: 'table',
        headers: ['Rama', 'Técnicas representativas', 'Dónde vive hoy'],
        rows: [
          [
            'IA simbólica (clásica)',
            'Búsqueda y optimización (A*, minimax), planificación (STRIPS, robótica), lógica y sistemas expertos (MYCIN), representación (ontologías, grafos).',
            'Sistemas híbridos, juegos y verificación formal.',
          ],
          [
            'Aprendizaje automático',
            'Supervisado (regresión, SVM, árboles), ensambles (Random Forest, XGBoost), no supervisado (k-means, PCA) y por refuerzo (Q-learning, RLHF).',
            'Sigue ganando en datos tabulares, fraude y scoring crediticio.',
          ],
          [
            'Aprendizaje profundo',
            'CNN (visión, diagnóstico por imagen), transformers (LLMs, multimodal), difusión (imagen, video, AlphaFold 3) y MoE + RL (razonamiento: R1, o3).',
            'El paradigma dominante: transformers + difusión + RL a escala.',
          ],
        ],
        caption: 'Mapa de técnicas del cierre (Tema 1.3 · p. 43).',
      },
      {
        type: 'paragraph',
        text: 'Dentro del aprendizaje automático conviene separar tres formas de aprender, porque cada una responde a un tipo de problema distinto:',
      },
      {
        type: 'table',
        headers: ['Tipo de aprendizaje', 'Idea y técnicas'],
        rows: [
          ['Supervisado', 'Se aprende de ejemplos etiquetados: regresión logística, SVM, árboles de decisión y ensambles como Random Forest o XGBoost.'],
          ['No supervisado', 'Se buscan patrones sin etiquetas: agrupamiento con k-means y reducción de dimensionalidad con PCA.'],
          ['Por refuerzo', 'Un agente aprende por recompensa al interactuar con un entorno: Q-learning y, en alineación, RLHF.'],
        ],
        caption: 'Las tres formas de aprender del mapa (Tema 1.3 · p. 43).',
      },
      {
        type: 'heading',
        level: 2,
        text: 'La capa de sistemas 2025–2026',
      },
      {
        type: 'table',
        headers: ['Componente', 'Qué aporta'],
        rows: [
          ['RAG', 'Recuperación + generación con fuentes: el modelo consulta documentos y cita de dónde saca la información.'],
          ['Agentes', 'Planificación + herramientas + memoria: ejecutan tareas de varios pasos y verifican resultados.'],
          ['Destilación', 'Modelos pequeños que heredan el comportamiento del grande; abaratan la inferencia.'],
          ['Test-time compute', 'Pensar más al responder: se gasta cómputo en razonar antes de emitir la respuesta final.'],
        ],
        caption: 'Lo que se construye sobre las técnicas base (Tema 1.3 · p. 43).',
      },
      {
        type: 'paragraph',
        text: 'Cómo leer el mapa: los sistemas punteros de 2026 son **híbridos**. Combinan transformers entrenados con RL, difusión para los medios continuos y componentes clásicos —búsqueda, verificación, lógica— rodeando al modelo. No se trata de elegir una rama, sino de orquestarlas según el problema.',
      },
      {
        type: 'callout',
        variant: 'key',
        title: 'Idea clave',
        text: 'Ninguna rama desapareció: la IA actual combina las tres. Entender qué técnica resuelve qué problema es más útil que memorizar nombres de modelos.',
      },
      {
        type: 'list',
        items: [
          'La **IA simbólica** sigue viva en búsqueda, verificación y sistemas híbridos.',
          'El **aprendizaje automático** clásico gana en datos tabulares, fraude y scoring.',
          'El **aprendizaje profundo** (transformers + difusión + RL) es el paradigma dominante.',
          'La **capa de sistemas** (RAG, agentes, destilación, test-time compute) es lo que se construye encima.',
        ],
      },
      {
        type: 'callout',
        variant: 'didactic',
        title: 'Ampliación didáctica',
        text: 'Este mapa es una brújula, no un catálogo cerrado. Antes de adoptar una técnica, pregúntate qué tipo de problema tienes (datos tabulares, percepción, lenguaje, secuencias), cuánta etiqueta puedes conseguir y cuál es tu presupuesto de cómputo. La técnica correcta depende del problema, no de la moda.',
      },
      {
        type: 'quote',
        text: 'La IA actual no es un destino: es el punto de partida de tu práctica profesional. Modelos que razonan, máquinas que crean y sistemas que operan en el mundo real —con desafíos que necesitan ingenieros con fundamentos sólidos y criterio ético.',
        attribution: 'Cierre del Tema 1.3 · p. 45',
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Los LLMs son transformers entrenados para predecir el siguiente token y alineados para asistir.',
          'La IA generativa crea en todas las modalidades y ya entra en todo el ciclo de desarrollo.',
          'La IA opera en producción en todos los sectores, amplificando al experto.',
          'Agentes, regulación y desafíos técnicos y sociales marcan la agenda 2025–2026.',
          'El mapa de técnicas recuerda que la IA actual es híbrida: símbolos + ML + deep learning + sistemas.',
        ],
      },
    ],
    keyTerms: [
      {
        term: 'IA simbólica',
        definition:
          'Enfoque clásico basado en reglas, lógica, búsqueda y representación explícita del conocimiento (A*, STRIPS, MYCIN, ontologías). Sigue viva en sistemas híbridos.',
      },
      {
        term: 'Aprendizaje automático',
        definition:
          'Conjunto de métodos que aprenden patrones a partir de datos: supervisado, no supervisado y por refuerzo.',
      },
      {
        term: 'RAG',
        definition:
          'Recuperación aumentada por generación: el modelo consulta documentos y combina recuperación con generación para fundamentar sus respuestas con fuentes.',
      },
      {
        term: 'Destilación',
        definition:
          'Técnica que entrena un modelo pequeño para que herede el comportamiento de uno grande, abaratando la inferencia.',
      },
    ],
    recap: [
      'El mapa agrupa tres ramas: IA simbólica, aprendizaje automático y aprendizaje profundo.',
      'El aprendizaje automático se divide en supervisado, no supervisado y por refuerzo.',
      'La capa de sistemas 2025–2026 incluye RAG, agentes, destilación y test-time compute.',
      'Los sistemas punteros son híbridos: ninguna rama sustituyó a las demás.',
    ],
    commonError:
      'Suponer que la IA actual reemplazó las técnicas clásicas. Los sistemas punteros combinan búsqueda, verificación y componentes simbólicos con transformers y difusión.',
    sourcePages: ['Tema 1.3 · pp. 43–45'],
    practiceQuestionIds: ['m3-5-mapa-tecnicas-q1', 'm3-5-mapa-tecnicas-q2', 'm3-5-mapa-tecnicas-q3'],
  },
]
