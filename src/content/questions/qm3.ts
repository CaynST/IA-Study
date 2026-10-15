import type { Question } from '@/types/content'

/**
 * Banco de preguntas del Módulo 1.3 — Estado actual de la IA.
 * Las cifras citadas son una fotografía 2025–2026 del material de clase, nunca datos en vivo.
 */
export const qm3Questions: Question[] = [
  // -------------------------------------------------------------------------
  // m3-intro
  // -------------------------------------------------------------------------
  {
    id: 'm3-intro-q1',
    moduleId: '1.3',
    lessonId: 'm3-intro',
    section: 'Introducción',
    difficulty: 'facil',
    type: 'multiple',
    prompt:
      'Según el material, ¿cuáles son las tres fuerzas que convergen para explicar el estado actual de la IA?',
    options: [
      'Avances algorítmicos, capacidad computacional masiva y datos a escala global',
      'Regulación, financiamiento público y patentes',
      'Redes sociales, publicidad y comercio electrónico',
      'Bases de datos relacionales, servidores web y hojas de cálculo',
    ],
    correct: [0],
    explanation:
      'La introducción del tema describe la convergencia de algoritmos (el transformer y sus derivados), cómputo (GPU/TPU y centros de datos) y datos (billones de tokens, más datos sintéticos).',
    sourcePages: ['Tema 1.3 · pp. 3–4'],
    origin: 'fuente',
    tags: ['introduccion', 'tres-fuerzas'],
  },
  {
    id: 'm3-intro-q2',
    moduleId: '1.3',
    lessonId: 'm3-intro',
    section: 'Introducción',
    difficulty: 'facil',
    type: 'multiple',
    prompt: '¿Qué arquitectura popularizó el mecanismo de autoatención en 2017?',
    options: ['El transformer', 'La máquina de Boltzmann', 'La red de Hopfield', 'El perceptrón multicapa'],
    correct: [0],
    explanation:
      'El transformer se presentó en «Attention is All You Need» (Vaswani et al., 2017). Su autoatención permite procesar secuencias completas en paralelo, sin recurrencia, y sostiene a casi todo modelo puntero actual.',
    sourcePages: ['Tema 1.3 · pp. 3–4'],
    origin: 'fuente',
    tags: ['transformer', 'autoatencion', 'semilla'],
  },
  {
    id: 'm3-intro-q3',
    moduleId: '1.3',
    lessonId: 'm3-intro',
    section: 'Introducción',
    difficulty: 'media',
    type: 'boolean',
    prompt:
      'Las cifras de adopción, usuarios e inversión que aparecen en el tema 1.3 son datos en tiempo real.',
    correct: false,
    explanation:
      'El material las presenta como una fotografía temporal de 2025–2026, con fecha y fuente, y advierte que el campo evoluciona rápido: no son datos en vivo. Además, los benchmarks clásicos se agotan más rápido de lo que se crean.',
    sourcePages: ['Tema 1.3 · pp. 3–4'],
    origin: 'fuente',
    tags: ['cifras', 'fotografia-temporal'],
  },

  // -------------------------------------------------------------------------
  // m3-1-llms
  // -------------------------------------------------------------------------
  {
    id: 'm3-1-llms-q1',
    moduleId: '1.3',
    lessonId: 'm3-1-llms',
    section: '1.3.1',
    difficulty: 'facil',
    type: 'multiple',
    prompt: '¿Qué es un token en un modelo de lenguaje?',
    options: [
      'Una unidad o fragmento de texto (palabra o parte de ella) que el modelo procesa',
      'Una contraseña de acceso a la API del modelo',
      'Una capa de la red neuronal profunda',
      'Un tipo de GPU usada durante el entrenamiento',
    ],
    correct: [0],
    explanation:
      'La tokenización divide el texto en fragmentos; cada token se convierte en un vector numérico (embedding) antes de entrar al transformer.',
    sourcePages: ['Tema 1.3 · pp. 6–7'],
    origin: 'fuente',
    tags: ['token', 'semilla'],
  },
  {
    id: 'm3-1-llms-q2',
    moduleId: '1.3',
    lessonId: 'm3-1-llms',
    section: '1.3.1',
    difficulty: 'facil',
    type: 'multiple',
    prompt: '¿Qué significa RLHF, la etapa de ajuste y alineación de un LLM?',
    options: [
      'Aprendizaje por refuerzo con retroalimentación humana',
      'Recuperación local de hechos históricos',
      'Regresión lineal de alta frecuencia',
      'Razonamiento lógico de alto nivel',
    ],
    correct: [0],
    explanation:
      'RLHF (Reinforcement Learning from Human Feedback) usa aprendizaje por refuerzo con retroalimentación humana para que el modelo siga instrucciones y evite respuestas dañinas.',
    sourcePages: ['Tema 1.3 · p. 7'],
    origin: 'fuente',
    tags: ['rlhf', 'alineacion', 'semilla'],
  },
  {
    id: 'm3-1-llms-q3',
    moduleId: '1.3',
    lessonId: 'm3-1-llms',
    section: '1.3.1',
    difficulty: 'facil',
    type: 'multiple',
    prompt: '¿Qué es una alucinación de un LLM?',
    options: [
      'Una salida plausible pero incorrecta o inventada',
      'Un error de conexión con el servidor del proveedor',
      'Una respuesta que el usuario escribió primero en el prompt',
      'Una versión antigua y desactualizada del modelo',
    ],
    correct: [0],
    explanation:
      'Como el modelo compone texto token a token, puede fabricar citas inexistentes, APIs inventadas o datos falsos. Técnicas como RAG y la verificación la mitigan, pero no la eliminan.',
    sourcePages: ['Tema 1.3 · p. 15'],
    origin: 'fuente',
    tags: ['alucinacion', 'limites', 'semilla'],
  },
  {
    id: 'm3-1-llms-q4',
    moduleId: '1.3',
    lessonId: 'm3-1-llms',
    section: '1.3.1',
    difficulty: 'media',
    type: 'multiple',
    prompt: '¿Qué es la ventana de contexto de un LLM?',
    options: [
      'La cantidad de tokens que el modelo puede considerar a la vez',
      'El tiempo máximo que el modelo tarda en responder',
      'El número de usuarios simultáneos que permite la API',
      'El espacio en disco donde se guardan los pesos del modelo',
    ],
    correct: [0],
    explanation:
      'Es la «memoria de trabajo» del modelo. Creció unas 500× en cinco años (de miles a 1–2 millones de tokens), aunque en documentos muy largos el rendimiento suele degradarse («lost in the middle»).',
    sourcePages: ['Tema 1.3 · p. 8'],
    origin: 'fuente',
    tags: ['ventana-contexto', 'semilla'],
  },
  {
    id: 'm3-1-llms-q5',
    moduleId: '1.3',
    lessonId: 'm3-1-llms',
    section: '1.3.1',
    difficulty: 'media',
    type: 'boolean',
    prompt:
      'Durante la inferencia, un LLM recupera de una base de datos la respuesta exacta que ya tenía almacenada.',
    correct: false,
    explanation:
      'La inferencia es probabilística: el modelo genera token a token y compone la respuesta cada vez; no la recupera de una memoria de respuestas. De ahí la sensibilidad al prompt y la posibilidad de alucinar.',
    sourcePages: ['Tema 1.3 · p. 7'],
    origin: 'fuente',
    tags: ['inferencia', 'probabilistico'],
  },
  {
    id: 'm3-1-llms-q6',
    moduleId: '1.3',
    lessonId: 'm3-1-llms',
    section: '1.3.1',
    difficulty: 'media',
    type: 'multiple',
    prompt: '¿Qué caracteriza a los modelos de razonamiento como o3 y DeepSeek R1 (2025–2026)?',
    options: [
      'Agregan cómputo en tiempo de inferencia para «pensar» más antes de responder',
      'Eliminan por completo las alucinaciones',
      'Solo funcionan con imágenes, no con texto',
      'No requieren datos de entrenamiento',
    ],
    correct: [0],
    explanation:
      'Se les entrena con aprendizaje por refuerzo para desplegar cadenas de razonamiento (test-time compute), con lo que mejoran en matemáticas, ciencia y código. DeepSeek R1 se publicó con pesos y código abiertos (licencia MIT) a una fracción del costo.',
    sourcePages: ['Tema 1.3 · pp. 11–12'],
    origin: 'fuente',
    tags: ['modelos-razonamiento', 'test-time-compute'],
  },

  // -------------------------------------------------------------------------
  // m3-2-generativa
  // -------------------------------------------------------------------------
  {
    id: 'm3-2-generativa-q1',
    moduleId: '1.3',
    lessonId: 'm3-2-generativa',
    section: '1.3.2',
    difficulty: 'facil',
    type: 'multiple',
    prompt: '¿Cuál es la diferencia central entre IA discriminativa e IA generativa?',
    options: [
      'La discriminativa clasifica o predice sobre datos existentes; la generativa crea contenido nuevo',
      'La discriminativa es moderna y la generativa está en desuso',
      'La generativa solo produce números y la discriminativa, texto',
      'No hay diferencia técnica, solo de nombre comercial',
    ],
    correct: [0],
    explanation:
      'La IA discriminativa responde preguntas como «¿esto es spam o no?» y devuelve etiquetas o probabilidades; la generativa escribe, dibuja, compone o programa contenido original.',
    sourcePages: ['Tema 1.3 · pp. 17–18'],
    origin: 'fuente',
    tags: ['generativa', 'discriminativa'],
  },
  {
    id: 'm3-2-generativa-q2',
    moduleId: '1.3',
    lessonId: 'm3-2-generativa',
    section: '1.3.2',
    difficulty: 'media',
    type: 'multiple',
    prompt: '¿Cómo genera una imagen un modelo de difusión?',
    options: [
      'Parte de ruido y lo «desruida» paso a paso guiado por el prompt',
      'Copia y combina fragmentos de imágenes de un catálogo existente',
      'Dibuja líneas vectoriales definidas por reglas geométricas',
      'Aplica un filtro de color a una fotografía ya existente',
    ],
    correct: [0],
    explanation:
      'El prompt se codifica en vectores; el modelo parte de ruido puro y lo refina durante decenas de pasos hasta obtener una imagen nueva, coherente y de alta resolución. El mismo principio genera video y estructuras moleculares (AlphaFold 3).',
    sourcePages: ['Tema 1.3 · p. 19'],
    origin: 'fuente',
    tags: ['difusion', 'imagen'],
  },
  {
    id: 'm3-2-generativa-q3',
    moduleId: '1.3',
    lessonId: 'm3-2-generativa',
    section: '1.3.2',
    difficulty: 'media',
    type: 'classification',
    prompt: 'Clasifica cada elemento según la familia de arquitectura generativa a la que corresponde.',
    categories: ['Transformers generativos', 'Modelos de difusión', 'GAN'],
    items: [
      { text: 'GPT, Claude y Gemini generando texto token a token', category: 'Transformers generativos' },
      { text: 'Stable Diffusion y Midjourney partiendo de ruido', category: 'Modelos de difusión' },
      { text: 'Generador contra discriminador (Goodfellow, 2014)', category: 'GAN' },
      { text: 'AlphaFold 3 ensamblando estructuras moleculares en 3D', category: 'Modelos de difusión' },
    ],
    explanation:
      'Los transformers generativos dominan texto y código; la difusión domina imagen, video y hasta biología molecular (AlphaFold 3); las GAN (Goodfellow, 2014) precedieron y dominaron la síntesis de imagen hasta 2021.',
    sourcePages: ['Tema 1.3 · pp. 18–19'],
    origin: 'fuente',
    tags: ['arquitecturas', 'difusion', 'gan'],
  },
  {
    id: 'm3-2-generativa-q4',
    moduleId: '1.3',
    lessonId: 'm3-2-generativa',
    section: '1.3.2',
    difficulty: 'media',
    type: 'multiple',
    prompt:
      '¿Qué obliga la Ley de IA de la UE (art. 50) desde agosto de 2026 respecto al contenido sintético?',
    options: [
      'Etiquetar los deepfakes y el contenido sintético',
      'Prohibir toda herramienta de generación de imágenes',
      'Obligar a publicar los pesos de los modelos',
      'Exigir que todos los modelos sean de código cerrado',
    ],
    correct: [0],
    explanation:
      'El artículo 50 exige transparencia y etiquetado del contenido sintético y los deepfakes. Para el ingeniero, la trazabilidad (marcas de agua, metadatos C2PA/SynthID) deja de ser opcional.',
    sourcePages: ['Tema 1.3 · p. 23'],
    origin: 'fuente',
    tags: ['regulacion', 'deepfakes', 'etiquetado'],
  },

  // -------------------------------------------------------------------------
  // m3-3-aplicaciones
  // -------------------------------------------------------------------------
  {
    id: 'm3-3-aplicaciones-q1',
    moduleId: '1.3',
    lessonId: 'm3-3-aplicaciones',
    section: '1.3.3',
    difficulty: 'media',
    type: 'multiple',
    prompt: '¿Qué mostró el estudio de McKinney et al. (Nature, 2020) sobre IA y cáncer de mama?',
    options: [
      'Un sistema de deep learning detectó cáncer en mamografías con menos falsos positivos y negativos que los radiólogos en los conjuntos de evaluación',
      'La IA reemplazó de inmediato a los radiólogos en la clínica',
      'El sistema solo funcionó con imágenes de baja resolución',
      'No hubo diferencias frente a la lectura humana',
    ],
    correct: [0],
    explanation:
      'El estudio de Google Health es un hito citado por el material. El matiz profesional: «superar en un benchmark» no equivale a «reemplazar en la clínica»; la IA médica opera como segunda lectura.',
    sourcePages: ['Tema 1.3 · p. 26'],
    origin: 'fuente',
    tags: ['medicina', 'mckinney'],
  },
  {
    id: 'm3-3-aplicaciones-q2',
    moduleId: '1.3',
    lessonId: 'm3-3-aplicaciones',
    section: '1.3.3',
    difficulty: 'dificil',
    type: 'classification',
    prompt:
      'Clasifica a cada persona según el premio Nobel 2024 que recibió por trabajo relacionado con la IA.',
    categories: ['Nobel de Física 2024', 'Nobel de Química 2024'],
    items: [
      { text: 'John Hopfield', category: 'Nobel de Física 2024' },
      { text: 'Geoffrey Hinton', category: 'Nobel de Física 2024' },
      { text: 'David Baker', category: 'Nobel de Química 2024' },
      { text: 'Demis Hassabis', category: 'Nobel de Química 2024' },
      { text: 'John Jumper', category: 'Nobel de Química 2024' },
    ],
    explanation:
      'El Nobel de Física 2024 reconoció a Hopfield y Hinton por los fundamentos del aprendizaje automático con redes neuronales; el de Química, a Baker, Hassabis y Jumper por el diseño computacional de proteínas y AlphaFold 2.',
    sourcePages: ['Tema 1.3 · p. 28'],
    origin: 'fuente',
    tags: ['nobel', 'alphafold'],
  },
  {
    id: 'm3-3-aplicaciones-q3',
    moduleId: '1.3',
    lessonId: 'm3-3-aplicaciones',
    section: '1.3.3',
    difficulty: 'media',
    type: 'multiple',
    prompt: 'Sobre los vehículos autónomos en 2025–2026, ¿qué afirmación coincide con el material?',
    options: [
      'Waymo lidera la operación comercial a escala con LiDAR, radar y mapas HD, mientras Tesla apuesta por visión por cámaras de extremo a extremo',
      'Tesla opera el mayor servicio comercial sin conductor de EE. UU.',
      'Waymo abandonó el LiDAR en 2024',
      'Ninguna empresa realiza viajes pagados sin conductor',
    ],
    correct: [0],
    explanation:
      'El material contrasta ambos enfoques: Waymo combina percepción multimodal y mapas de alta definición; Tesla usa visión por cámaras con aprendizaje extremo a extremo. En 2025–2026 Waymo lidera la operación comercial real.',
    sourcePages: ['Tema 1.3 · p. 29'],
    origin: 'fuente',
    tags: ['transporte', 'waymo', 'tesla'],
  },
  {
    id: 'm3-3-aplicaciones-q4',
    moduleId: '1.3',
    lessonId: 'm3-3-aplicaciones',
    section: '1.3.3',
    difficulty: 'media',
    type: 'boolean',
    prompt:
      'Para el material, «superar a los radiólogos en un benchmark» significa que la IA médica ya sustituye al médico en la clínica.',
    correct: false,
    explanation:
      'El matiz profesional es que la IA médica opera como segunda lectura: la decisión final y la responsabilidad siguen siendo humanas, y la regulación lo exige (alto riesgo en la Ley de IA europea).',
    sourcePages: ['Tema 1.3 · p. 26'],
    origin: 'fuente',
    tags: ['medicina', 'benchmark', 'segunda-lectura'],
  },

  // -------------------------------------------------------------------------
  // m3-4-tendencias
  // -------------------------------------------------------------------------
  {
    id: 'm3-4-tendencias-q1',
    moduleId: '1.3',
    lessonId: 'm3-4-tendencias',
    section: '1.3.4',
    difficulty: 'facil',
    type: 'multiple',
    prompt: '¿Cuál es el ciclo básico de un agente según el material?',
    options: [
      'Percibir → planificar → actuar → evaluar',
      'Entrenar → validar → probar → desplegar',
      'Codificar → compilar → ejecutar → depurar',
      'Comprar → instalar → configurar → desinstalar',
    ],
    correct: [0],
    explanation:
      'Un agente lee el objetivo y el estado, descompone la tarea, llama herramientas y verifica el resultado, repitiendo el ciclo si falla.',
    sourcePages: ['Tema 1.3 · p. 36'],
    origin: 'fuente',
    tags: ['agentes', 'ciclo'],
  },
  {
    id: 'm3-4-tendencias-q2',
    moduleId: '1.3',
    lessonId: 'm3-4-tendencias',
    section: '1.3.4',
    difficulty: 'media',
    type: 'multiple',
    prompt: '¿Qué establece la Ley de IA de la UE respecto a su aplicación?',
    options: [
      'Se aplica por fases desde 2024, con aplicación general y etiquetado de contenido sintético en agosto de 2026',
      'Prohíbe toda forma de IA en Europa',
      'Solo aplica a empresas con sede en la Unión Europea',
      'Entrará en vigor en 2030',
    ],
    correct: [0],
    explanation:
      'El Reglamento (UE) 2024/1689 escalona la aplicación: prácticas prohibidas y alfabetización (2025), GPAI (ago. 2025), aplicación general y art. 50 (ago. 2026) y normas de alto riesgo (2027–2028). Aplica también a proveedores fuera de la UE.',
    sourcePages: ['Tema 1.3 · p. 38'],
    origin: 'fuente',
    tags: ['regulacion', 'ley-ia-ue'],
  },
  {
    id: 'm3-4-tendencias-q3',
    moduleId: '1.3',
    lessonId: 'm3-4-tendencias',
    section: '1.3.4',
    difficulty: 'media',
    type: 'boolean',
    prompt:
      'Un agente con acceso a herramientas puede multiplicar el impacto de cada error o ataque, por lo que se recomienda sandbox, permisos mínimos y confirmación humana en acciones irreversibles.',
    correct: true,
    explanation:
      'El material advierte sobre la inyección de prompts y recomienda aislar la ejecución (sandbox), dar solo los permisos necesarios y pedir confirmación humana en acciones irreversibles.',
    sourcePages: ['Tema 1.3 · p. 36'],
    origin: 'fuente',
    tags: ['agentes', 'seguridad', 'sandbox'],
  },
  {
    id: 'm3-4-tendencias-q4',
    moduleId: '1.3',
    lessonId: 'm3-4-tendencias',
    section: '1.3.4',
    difficulty: 'dificil',
    type: 'classification',
    prompt: 'Clasifica cada problema técnico abierto según su categoría principal.',
    categories: ['Explicabilidad', 'Seguridad adversaria', 'Privacidad'],
    items: [
      {
        text: 'No podemos reconstruir por qué el modelo decidió; la interpretabilidad mecanicista intenta «abrir» la caja negra',
        category: 'Explicabilidad',
      },
      {
        text: 'Inyección de prompts en agentes y ejemplos adversarios en visión',
        category: 'Seguridad adversaria',
      },
      {
        text: 'Un modelo puede memorizar datos personales de entrenamiento; se usan privacidad diferencial y borrado de datos',
        category: 'Privacidad',
      },
    ],
    explanation:
      'El material separa explicabilidad (caja negra), seguridad adversaria (entradas manipuladas) y privacidad (memorización de datos), y añade el costo físico de la escala como cuarto desafío técnico.',
    sourcePages: ['Tema 1.3 · p. 39'],
    origin: 'fuente',
    tags: ['desafios', 'explicabilidad', 'privacidad'],
  },

  // -------------------------------------------------------------------------
  // m3-5-mapa-tecnicas
  // -------------------------------------------------------------------------
  {
    id: 'm3-5-mapa-tecnicas-q1',
    moduleId: '1.3',
    lessonId: 'm3-5-mapa-tecnicas',
    section: 'Cierre',
    difficulty: 'facil',
    type: 'multiple',
    prompt:
      'En el mapa de técnicas del cierre, ¿dónde se ubican los transformers y los modelos de difusión?',
    options: [
      'En el aprendizaje profundo',
      'En la IA simbólica clásica',
      'En el aprendizaje supervisado sobre datos tabulares',
      'Fuera del aprendizaje automático',
    ],
    correct: [0],
    explanation:
      'El mapa agrupa la IA simbólica (búsqueda, lógica, planificación), el aprendizaje automático (supervisado, no supervisado, por refuerzo) y el aprendizaje profundo (CNN, transformers, difusión, MoE + RL).',
    sourcePages: ['Tema 1.3 · p. 43'],
    origin: 'fuente',
    tags: ['mapa', 'aprendizaje-profundo'],
  },
  {
    id: 'm3-5-mapa-tecnicas-q2',
    moduleId: '1.3',
    lessonId: 'm3-5-mapa-tecnicas',
    section: 'Cierre',
    difficulty: 'media',
    type: 'classification',
    prompt: 'Clasifica cada técnica de aprendizaje automático según su tipo.',
    categories: ['Supervisado', 'No supervisado', 'Por refuerzo'],
    items: [
      { text: 'Regresión logística, SVM y árboles de decisión', category: 'Supervisado' },
      { text: 'Random Forest y XGBoost (ensambles)', category: 'Supervisado' },
      { text: 'k-means y PCA', category: 'No supervisado' },
      { text: 'Q-learning y RLHF', category: 'Por refuerzo' },
    ],
    explanation:
      'Supervisado: regresión, SVM, árboles y ensambles. No supervisado: k-means y PCA. Por refuerzo: Q-learning y RLHF. El mapa del cierre los presenta junto a la IA simbólica y el aprendizaje profundo.',
    sourcePages: ['Tema 1.3 · p. 43'],
    origin: 'fuente',
    tags: ['aprendizaje-automatico', 'tipos'],
  },
  {
    id: 'm3-5-mapa-tecnicas-q3',
    moduleId: '1.3',
    lessonId: 'm3-5-mapa-tecnicas',
    section: 'Cierre',
    difficulty: 'media',
    type: 'boolean',
    prompt:
      'Según el mapa del cierre, la IA actual reemplazó por completo las técnicas simbólicas y clásicas.',
    correct: false,
    explanation:
      'Ninguna rama desapareció: los sistemas punteros de 2026 son híbridos, con transformers entrenados con RL, difusión para medios continuos y componentes clásicos (búsqueda, verificación) rodeando al modelo.',
    sourcePages: ['Tema 1.3 · p. 43'],
    origin: 'fuente',
    tags: ['mapa', 'hibrido'],
  },
]
