import type { Question } from '@/types/content'

/**
 * Módulo 1.5 — Banco de preguntas (34).
 * Incluye las preguntas semilla de 1.5 y ejercicios aplicados originales
 * (mochila, TSP, asignación) con el cálculo explicado. Los datos usados en
 * los ejercicios aplicados provienen del material (Tema 1.5, pp. 27–29).
 */
export const qm4Questions: Question[] = [
  // ── 1.5.1 Del problema real al problema computacional ────────────────
  {
    id: 'm5-1-del-problema-real-q1',
    moduleId: '1.5',
    lessonId: 'm5-1-del-problema-real',
    section: '1.5.1',
    difficulty: 'facil',
    type: 'multiple',
    prompt: '¿Qué es una instancia de un problema?',
    options: [
      'La familia general de situaciones por resolver',
      'Un caso concreto del problema, con datos específicos',
      'El algoritmo que encuentra la solución',
      'El resultado óptimo de cualquier búsqueda',
    ],
    correct: [1],
    explanation:
      'La instancia es el caso particular con datos concretos; la familia general es el problema. Cambiar los datos cambia la instancia, no el problema.',
    sourcePages: ['Tema 1.5 · p. 8'],
    origin: 'fuente',
  },
  {
    id: 'm5-1-del-problema-real-q2',
    moduleId: '1.5',
    lessonId: 'm5-1-del-problema-real',
    section: '1.5.1',
    difficulty: 'facil',
    type: 'multiple',
    prompt: '¿Cuál opción describe mejor qué significa modelar un problema?',
    options: [
      'Programar el algoritmo lo antes posible',
      'Conservar los elementos relevantes para el objetivo y omitir temporalmente los irrelevantes',
      'Registrar cada detalle del mundo real sin excepción',
      'Elegir el lenguaje de programación más adecuado',
    ],
    correct: [1],
    explanation:
      'Modelar es una decisión de diseño: se conserva lo que aporta al objetivo y se deja fuera el detalle que solo agrandaría el espacio de búsqueda.',
    sourcePages: ['Tema 1.5 · p. 7'],
    origin: 'fuente',
  },
  {
    id: 'm5-1-del-problema-real-q3',
    moduleId: '1.5',
    lessonId: 'm5-1-del-problema-real',
    section: '1.5.1',
    difficulty: 'media',
    type: 'boolean',
    prompt: 'Si cambian los datos de entrada de un caso, el problema general deja de ser el mismo.',
    correct: false,
    explanation:
      'Lo que cambia es la instancia, no la familia general del problema. Por ejemplo, «ruta más corta» sigue siendo el mismo problema aunque el mapa sea distinto.',
    sourcePages: ['Tema 1.5 · p. 8'],
    origin: 'fuente',
  },

  // ── 1.5.2 Elementos fundamentales ────────────────────────────────────
  {
    id: 'm5-2-elementos-q1',
    moduleId: '1.5',
    lessonId: 'm5-2-elementos',
    section: '1.5.2',
    difficulty: 'facil',
    type: 'multiple',
    prompt: '¿Qué es una variable de decisión?',
    options: [
      'Un dato fijo que no puede cambiar',
      'Un elemento cuyo valor debe elegirse para construir una solución',
      'El valor final de la función objetivo',
      'Una condición que no puede violarse',
    ],
    correct: [1],
    explanation:
      'Las variables de decisión representan aquello que el algoritmo elige, construye o modifica. Ejemplo: qué materia inscribir o si se toma un objeto de la mochila.',
    sourcePages: ['Tema 1.5 · p. 12'],
    origin: 'fuente',
  },
  {
    id: 'm5-2-elementos-q2',
    moduleId: '1.5',
    lessonId: 'm5-2-elementos',
    section: '1.5.2',
    difficulty: 'facil',
    type: 'multiple',
    prompt: '¿Qué es el dominio de una variable de decisión?',
    options: [
      'El mejor valor que puede tomar la variable',
      'El conjunto de valores permitidos para la variable',
      'La suma de todas las restricciones del problema',
      'La función que mide la calidad de una solución',
    ],
    correct: [1],
    explanation:
      'El dominio es el conjunto de valores permitidos. Definirlo con precisión acota el espacio de búsqueda; un dominio mal definido genera soluciones absurdas.',
    sourcePages: ['Tema 1.5 · p. 13'],
    origin: 'fuente',
  },
  {
    id: 'm5-2-elementos-q3',
    moduleId: '1.5',
    lessonId: 'm5-2-elementos',
    section: '1.5.2',
    difficulty: 'facil',
    type: 'multiple',
    prompt: '¿Qué es una restricción en un problema computacional?',
    options: [
      'Una condición que debe cumplir una solución válida',
      'El valor que se quiere maximizar',
      'El conjunto de datos de entrada',
      'El algoritmo que resuelve el problema',
    ],
    correct: [0],
    explanation:
      'Una restricción delimita lo válido: la solución que la viola queda descartada. No debe confundirse con el objetivo, que indica qué se quiere mejorar.',
    sourcePages: ['Tema 1.5 · p. 14'],
    origin: 'fuente',
  },
  {
    id: 'm5-2-elementos-q4',
    moduleId: '1.5',
    lessonId: 'm5-2-elementos',
    section: '1.5.2',
    difficulty: 'media',
    type: 'classification',
    prompt: 'Clasifica cada condición como restricción dura o blanda.',
    categories: ['Restricción dura', 'Restricción blanda'],
    items: [
      { text: 'Dos materias no pueden ocupar el mismo horario', category: 'Restricción dura' },
      { text: 'Se prefiere no tener clases a las 7:00 a. m.', category: 'Restricción blanda' },
      { text: 'La capacidad máxima del vehículo no puede excederse', category: 'Restricción dura' },
      { text: 'Minimizar los huecos entre clases', category: 'Restricción blanda' },
      { text: 'Cada ciudad debe visitarse una sola vez', category: 'Restricción dura' },
      { text: 'Evitar horarios nocturnos', category: 'Restricción blanda' },
    ],
    explanation:
      'Las restricciones duras no pueden violarse sin invalidar la solución (traslapes, capacidad, visitas únicas). Las blandas expresan preferencias negociables (horarios incómodos, huecos).',
    sourcePages: ['Tema 1.5 · p. 14'],
    origin: 'fuente',
  },

  // ── 1.5.3 Tipos de problemas ─────────────────────────────────────────
  {
    id: 'm5-3-tipos-q1',
    moduleId: '1.5',
    lessonId: 'm5-3-tipos',
    section: '1.5.3',
    difficulty: 'media',
    type: 'multiple',
    prompt:
      'Un problema pide exhibir al menos una solución que cumpla todas las restricciones, sin exigir que sea la mejor. ¿Qué tipo de problema es?',
    options: ['Decisión', 'Factibilidad', 'Optimización', 'Conteo'],
    correct: [1],
    explanation:
      'La factibilidad exige mostrar una solución válida. La decisión solo responde sí/no sobre la existencia, y la optimización busca además la mejor según la función objetivo.',
    sourcePages: ['Tema 1.5 · pp. 16–17'],
    origin: 'fuente',
  },
  {
    id: 'm5-3-tipos-q2',
    moduleId: '1.5',
    lessonId: 'm5-3-tipos',
    section: '1.5.3',
    difficulty: 'media',
    type: 'multiple',
    prompt:
      'Un problema pregunta «¿cuántas maneras hay de asignar cinco tareas a cinco personas?». ¿Qué tipo de problema es?',
    options: ['Enumeración', 'Conteo', 'Optimización', 'Ranking'],
    correct: [1],
    explanation:
      'Determinar cuántas soluciones existen es conteo. Enumerar sería listar todas las asignaciones y optimizar sería elegir la mejor de ellas.',
    sourcePages: ['Tema 1.5 · p. 18'],
    origin: 'fuente',
  },
  {
    id: 'm5-3-tipos-q3',
    moduleId: '1.5',
    lessonId: 'm5-3-tipos',
    section: '1.5.3',
    difficulty: 'media',
    type: 'classification',
    prompt: 'Clasifica cada enunciado según el tipo de problema al que corresponde.',
    categories: ['Decisión', 'Factibilidad', 'Optimización', 'Enumeración', 'Conteo', 'Ranking'],
    items: [
      { text: '¿Hay un camino entre dos nodos de una red?', category: 'Decisión' },
      { text: 'Generar un horario de exámenes sin traslapes', category: 'Factibilidad' },
      { text: 'Ruta de menor distancia', category: 'Optimización' },
      { text: 'Listar todas las rutas entre dos nodos', category: 'Enumeración' },
      { text: '¿Cuántos horarios factibles hay?', category: 'Conteo' },
      { text: 'Ordenar páginas web para una consulta', category: 'Ranking' },
    ],
    explanation:
      'La pregunta por la existencia es decisión; exhibir una solución válida es factibilidad; buscar la mejor es optimización; generar todas es enumeración; contarlas es conteo; ordenarlas por calidad es ranking.',
    sourcePages: ['Tema 1.5 · pp. 16–18'],
    origin: 'fuente',
  },

  // ── 1.5.4 Soluciones, calidad y optimalidad ──────────────────────────
  {
    id: 'm5-4-soluciones-q1',
    moduleId: '1.5',
    lessonId: 'm5-4-soluciones',
    section: '1.5.4',
    difficulty: 'media',
    type: 'multiple',
    prompt: '¿Cuál es la diferencia entre una solución factible y una solución óptima?',
    options: [
      'La factible cumple todas las restricciones duras; la óptima además alcanza el mejor valor de la función objetivo',
      'La factible es la mejor; la óptima es cualquier intento',
      'No hay diferencia: son sinónimos',
      'La óptima cumple menos restricciones que la factible',
    ],
    correct: [0],
    explanation:
      'La optimalidad se mide entre soluciones factibles: primero hay que cumplir las restricciones duras y, solo entonces, comparar la calidad según el objetivo.',
    sourcePages: ['Tema 1.5 · p. 19'],
    origin: 'fuente',
  },
  {
    id: 'm5-4-soluciones-q2',
    moduleId: '1.5',
    lessonId: 'm5-4-soluciones',
    section: '1.5.4',
    difficulty: 'media',
    type: 'boolean',
    prompt: 'Una solución subóptima es una solución inválida que viola restricciones duras.',
    correct: false,
    explanation:
      'Subóptima significa válida pero no la mejor conocida o posible. Si violara restricciones duras no sería factible, y por tanto ni siquiera entraría a la comparación de optimalidad.',
    sourcePages: ['Tema 1.5 · p. 20'],
    origin: 'fuente',
  },
  {
    id: 'm5-4-soluciones-q3',
    moduleId: '1.5',
    lessonId: 'm5-4-soluciones',
    section: '1.5.4',
    difficulty: 'media',
    type: 'multiple',
    prompt: 'Sobre el paisaje de soluciones, ¿cuál afirmación es correcta?',
    options: [
      'El óptimo local es el mejor punto de todo el espacio',
      'El óptimo global es el mejor punto de todo el espacio de soluciones',
      'Todo óptimo local es también óptimo global',
      'El óptimo global no necesita ser una solución factible',
    ],
    correct: [1],
    explanation:
      'El óptimo local solo es el mejor de su zona cercana; un método de descenso puede quedarse ahí. El óptimo global es el mejor de todo el espacio y debe ser factible.',
    sourcePages: ['Tema 1.5 · p. 21'],
    origin: 'fuente',
  },

  // ── 1.5.5 Espacios de búsqueda y representaciones ────────────────────
  {
    id: 'm5-5-espacios-q1',
    moduleId: '1.5',
    lessonId: 'm5-5-espacios',
    section: '1.5.5',
    difficulty: 'media',
    type: 'multiple',
    prompt: '¿Qué es un estado en un problema de búsqueda?',
    options: [
      'El conjunto de todos los posibles resultados',
      'Una configuración parcial o completa del problema',
      'Una condición que ninguna solución puede violar',
      'El valor óptimo de la función objetivo',
    ],
    correct: [1],
    explanation:
      'Un estado describe una configuración del problema: la posición del agente, las fichas colocadas, las materias ya asignadas o las ciudades visitadas.',
    sourcePages: ['Tema 1.5 · p. 22'],
    origin: 'fuente',
  },
  {
    id: 'm5-5-espacios-q2',
    moduleId: '1.5',
    lessonId: 'm5-5-espacios',
    section: '1.5.5',
    difficulty: 'media',
    type: 'boolean',
    prompt: 'Con 20 objetos que se pueden tomar o dejar, existen 2^20 = 1 048 576 combinaciones posibles.',
    correct: true,
    explanation:
      'Cada objeto aporta un factor 2 (se toma o se deja), por lo que el total es 2^20 = 1 048 576. Este crecimiento exponencial es la base de la explosión combinatoria.',
    sourcePages: ['Tema 1.5 · p. 25'],
    origin: 'fuente',
  },
  {
    id: 'm5-5-espacios-q3',
    moduleId: '1.5',
    lessonId: 'm5-5-espacios',
    section: '1.5.5',
    difficulty: 'media',
    type: 'classification',
    prompt: 'Clasifica cada situación según la representación más adecuada.',
    categories: ['Grafo', 'Árbol', 'Matriz', 'Lista o permutación', 'Cadena de texto'],
    items: [
      { text: 'Mapa de carreteras con intersecciones y calles', category: 'Grafo' },
      { text: 'Tablero de Sudoku 9×9 con celdas y valores', category: 'Matriz' },
      { text: 'Ruta del viajante: importa el orden de visita de las ciudades', category: 'Lista o permutación' },
      { text: 'Consulta escrita y documentos de texto', category: 'Cadena de texto' },
      { text: 'Árbol de decisiones de un juego por turnos', category: 'Árbol' },
      { text: 'Red de dependencias entre tareas de un proyecto', category: 'Grafo' },
    ],
    explanation:
      'El grafo expresa entidades y relaciones; el árbol, decisiones secuenciales; la matriz, costos o celdas; la lista o permutación, cuando importa el orden; la cadena de texto, cuando se buscan patrones lingüísticos.',
    sourcePages: ['Tema 1.5 · p. 24'],
    origin: 'fuente',
  },

  // ── 1.5.6 Optimización combinatoria (ejercicios aplicados) ───────────
  {
    id: 'm5-6-combinatoria-q1',
    moduleId: '1.5',
    lessonId: 'm5-6-combinatoria',
    section: '1.5.6',
    difficulty: 'media',
    type: 'multiple',
    prompt:
      'Mochila de capacidad 5 kg. Objetos: laptop (3 kg, valor 9), cámara (2 kg, valor 6), libro (1 kg, valor 3), batería (2 kg, valor 5) y botiquín (2 kg, valor 4). ¿Cuál es el mejor valor total que puede transportarse sin rebasar la capacidad?',
    options: ['12', '14', '15', '20'],
    correct: [2],
    explanation:
      'La selección óptima es laptop + cámara: 3 + 2 = 5 kg y 9 + 6 = 15 de valor. Otras válidas quedan por debajo (cámara + batería + libro = 5 kg, valor 14; batería + botiquín + libro = 5 kg, valor 12). El valor 20 corresponde a laptop + cámara + batería, que pesa 7 kg y no es factible.',
    sourcePages: ['Tema 1.5 · p. 27'],
    origin: 'didactico',
  },
  {
    id: 'm5-6-combinatoria-q2',
    moduleId: '1.5',
    lessonId: 'm5-6-combinatoria',
    section: '1.5.6',
    difficulty: 'dificil',
    type: 'multiple',
    prompt:
      'Matriz de distancias entre A, B, C y D: A-B = 12, A-C = 9, A-D = 15, B-C = 7, B-D = 10, C-D = 8. ¿Cuál es el costo mínimo de una ruta que sale de A, visita cada ciudad una sola vez y regresa a A?',
    options: ['17', '39', '41', '42'],
    correct: [1],
    explanation:
      'La ruta A→C→D→B→A cuesta 9 + 8 + 10 + 12 = 39; la ruta A→B→D→C→A también suma 39, así que el mínimo es 39. El valor 17 solo cuenta A→C→D sin regresar a A; 41 y 42 corresponden a rutas peores.',
    sourcePages: ['Tema 1.5 · p. 28'],
    origin: 'didactico',
  },
  {
    id: 'm5-6-combinatoria-q3',
    moduleId: '1.5',
    lessonId: 'm5-6-combinatoria',
    section: '1.5.6',
    difficulty: 'media',
    type: 'multiple',
    prompt:
      'Tiempos de asignación: Ana (interfaz 4 h, base de datos 8 h, pruebas 6 h); Bruno (7, 3, 5); Carla (5, 6, 4). Cada persona realiza exactamente una tarea y cada tarea la toma una sola persona. ¿Cuál es el tiempo total mínimo?',
    options: ['11 h', '14 h', '18 h', '19 h'],
    correct: [0],
    explanation:
      'La mejor asignación es Ana→interfaz (4 h), Bruno→base de datos (3 h) y Carla→pruebas (4 h): 4 + 3 + 4 = 11 h. Es la de menor tiempo entre las 3! = 6 asignaciones posibles.',
    sourcePages: ['Tema 1.5 · p. 29'],
    origin: 'didactico',
  },

  // ── 1.5.7 Satisfacción de restricciones ──────────────────────────────
  {
    id: 'm5-7-csp-q1',
    moduleId: '1.5',
    lessonId: 'm5-7-csp',
    section: '1.5.7',
    difficulty: 'facil',
    type: 'multiple',
    prompt: '¿Cuáles son las tres piezas de la formulación mínima de un CSP?',
    options: [
      'Datos, algoritmo y solución',
      'Variables, dominios y restricciones',
      'Estados, acciones y meta',
      'Consulta, corpus e índice',
    ],
    correct: [1],
    explanation:
      'Un CSP se define por las variables a asignar, sus dominios de valores permitidos y las restricciones que toda solución debe cumplir. Coloreo de mapas, Sudoku y n-reinas comparten esas tres piezas.',
    sourcePages: ['Tema 1.5 · p. 31'],
    origin: 'fuente',
  },
  {
    id: 'm5-7-csp-q2',
    moduleId: '1.5',
    lessonId: 'm5-7-csp',
    section: '1.5.7',
    difficulty: 'media',
    type: 'boolean',
    prompt:
      'Si tres regiones de un mapa son mutuamente vecinas, basta con dos colores para colorearlas sin que dos vecinas compartan color.',
    correct: false,
    explanation:
      'Si A, B y C son mutuamente vecinas, cada una colinda con las otras dos; ninguna puede compartir color, por lo que hacen falta al menos tres colores.',
    sourcePages: ['Tema 1.5 · p. 32'],
    origin: 'fuente',
  },
  {
    id: 'm5-7-csp-q3',
    moduleId: '1.5',
    lessonId: 'm5-7-csp',
    section: '1.5.7',
    difficulty: 'media',
    type: 'multiple',
    prompt: 'En un horario universitario, ¿cuál de las siguientes es una restricción blanda?',
    options: [
      'Un docente no puede impartir dos grupos a la vez',
      'El aula debe tener capacidad suficiente',
      'Evitar horarios nocturnos',
      'Sin traslapes de grupos del mismo semestre',
    ],
    correct: [2],
    explanation:
      'Evitar horarios nocturnos es una preferencia negociable. Las otras tres son duras: su violación invalida el horario (docente duplicado, aula demasiado chica o traslapes).',
    sourcePages: ['Tema 1.5 · p. 34'],
    origin: 'fuente',
  },

  // ── 1.5.8 Rutas, redes y caminos óptimos ─────────────────────────────
  {
    id: 'm5-8-rutas-q1',
    moduleId: '1.5',
    lessonId: 'm5-8-rutas',
    section: '1.5.8',
    difficulty: 'facil',
    type: 'multiple',
    prompt: '¿Qué es un grafo ponderado?',
    options: [
      'Un grafo en el que todas las aristas tienen el mismo peso',
      'Un grafo con pesos asociados a sus aristas',
      'Un grafo sin conexiones entre nodos',
      'Un grafo que solo tiene nodos, sin aristas',
    ],
    correct: [1],
    explanation:
      'En un grafo ponderado cada arista lleva un peso: distancia, tiempo, costo o capacidad. Ese peso es lo que permite sumar el costo de un camino.',
    sourcePages: ['Tema 1.5 · p. 35'],
    origin: 'fuente',
  },
  {
    id: 'm5-8-rutas-q2',
    moduleId: '1.5',
    lessonId: 'm5-8-rutas',
    section: '1.5.8',
    difficulty: 'facil',
    type: 'multiple',
    prompt:
      'De A a D hay tres rutas factibles: A→B→D (12 min), A→E→F→D (15 min) y A→C→D (9 min). Si el criterio es minimizar el tiempo, ¿cuál es la óptima?',
    options: ['A→B→D', 'A→E→F→D', 'A→C→D', 'Las tres son óptimas'],
    correct: [2],
    explanation:
      'Las tres rutas son factibles porque sus conexiones existen, pero la óptima es la de menor costo: A→C→D con 9 minutos, frente a 12 y 15.',
    sourcePages: ['Tema 1.5 · p. 36'],
    origin: 'fuente',
  },
  {
    id: 'm5-8-rutas-q3',
    moduleId: '1.5',
    lessonId: 'm5-8-rutas',
    section: '1.5.8',
    difficulty: 'media',
    type: 'boolean',
    prompt: 'Si todas las aristas tienen el mismo costo, buscar el menor número de pasos (BFS) da el camino de menor costo.',
    correct: true,
    explanation:
      'Sin pesos, el costo es la cantidad de aristas recorridas; por eso el camino con menos pasos es también el de menor costo y BFS es adecuado. Con costos distintos hay que usar Dijkstra o A*.',
    sourcePages: ['Tema 1.5 · p. 37'],
    origin: 'fuente',
  },

  // ── 1.5.9 Búsqueda en lenguaje natural y recuperación de información ──
  {
    id: 'm5-9-ir-q1',
    moduleId: '1.5',
    lessonId: 'm5-9-ir',
    section: '1.5.9',
    difficulty: 'facil',
    type: 'multiple',
    prompt: 'En recuperación de información, ¿qué es el corpus?',
    options: [
      'La consulta que escribe el usuario',
      'La colección de documentos disponibles',
      'El orden final de los resultados',
      'La palabra clave que se desea encontrar',
    ],
    correct: [1],
    explanation:
      'El corpus es el conjunto de documentos sobre el que se busca; la consulta es la entrada, el índice acelera la localización y el ranking ordena los resultados.',
    sourcePages: ['Tema 1.5 · p. 39'],
    origin: 'fuente',
  },
  {
    id: 'm5-9-ir-q2',
    moduleId: '1.5',
    lessonId: 'm5-9-ir',
    section: '1.5.9',
    difficulty: 'facil',
    type: 'boolean',
    prompt:
      'La búsqueda semántica solo recupera documentos que contienen exactamente las mismas palabras de la consulta.',
    correct: false,
    explanation:
      'La búsqueda semántica busca la intención: puede recuperar un documento que usa términos distintos pero expresa la misma idea, como «optimización de rutas» para «cómo reducir el tiempo de entrega».',
    sourcePages: ['Tema 1.5 · p. 40'],
    origin: 'fuente',
  },
  {
    id: 'm5-9-ir-q3',
    moduleId: '1.5',
    lessonId: 'm5-9-ir',
    section: '1.5.9',
    difficulty: 'facil',
    type: 'multiple',
    prompt: '¿Cuál de las siguientes es una variante de la búsqueda literal?',
    options: [
      'Ordenar productos por precio',
      'Búsqueda por prefijos, como «optimi…» que encuentra «optimizar» y «optimización»',
      'Calcular la ruta más corta entre dos ciudades',
      'Asignar tareas a personas minimizando el tiempo',
    ],
    correct: [1],
    explanation:
      'La búsqueda literal admite coincidencia exacta o parcial, sensibilidad a mayúsculas, prefijos y expresiones regulares. Las demás opciones pertenecen a rutas y asignación, no a búsqueda en texto.',
    sourcePages: ['Tema 1.5 · p. 38'],
    origin: 'fuente',
  },

  // ── 1.5.10 Selección del enfoque ─────────────────────────────────────
  {
    id: 'm5-10-eleccion-q1',
    moduleId: '1.5',
    lessonId: 'm5-10-eleccion',
    section: '1.5.10',
    difficulty: 'media',
    type: 'multiple',
    prompt:
      'Según el mapa de decisión, si el espacio de soluciones es demasiado grande y basta con una solución de alta calidad, ¿qué enfoque conviene?',
    options: [
      'Búsqueda primero en amplitud (BFS)',
      'Algoritmo de Dijkstra',
      'Hill climbing, recocido simulado o búsqueda tabú',
      'Ramificación y poda para garantizar el óptimo',
    ],
    correct: [2],
    explanation:
      'Cuando el espacio es inmanejable y no se exige el óptimo, las estrategias locales o metaheurísticas intercambian la garantía de optimalidad por eficiencia. Las otras opciones buscan garantías que el problema no necesita.',
    sourcePages: ['Tema 1.5 · p. 42'],
    origin: 'fuente',
  },
  {
    id: 'm5-10-eleccion-q2',
    moduleId: '1.5',
    lessonId: 'm5-10-eleccion',
    section: '1.5.10',
    difficulty: 'facil',
    type: 'boolean',
    prompt: 'La elección del algoritmo depende del lenguaje de programación, no de la formulación del problema.',
    correct: false,
    explanation:
      'La elección depende de la formulación y de las propiedades del problema (forma de la respuesta, restricciones, tamaño del espacio, garantías necesarias). El lenguaje es solo la herramienta de implementación.',
    sourcePages: ['Tema 1.5 · p. 42'],
    origin: 'fuente',
  },
  {
    id: 'm5-10-eleccion-q3',
    moduleId: '1.5',
    lessonId: 'm5-10-eleccion',
    section: '1.5.10',
    difficulty: 'media',
    type: 'multiple',
    prompt: '¿Cuál de las diez preguntas de diagnóstico se refiere directamente a la forma de la respuesta?',
    options: [
      '¿Las decisiones son discretas, continuas o mixtas?',
      '¿Se requiere una respuesta sí/no, una solución válida, todas las soluciones o la mejor solución?',
      '¿Se tiene límite de tiempo, memoria o recursos de cómputo?',
      '¿Hay información adicional para estimar alternativas prometedoras?',
    ],
    correct: [1],
    explanation:
      'Esa pregunta define el tipo de problema (decisión, factibilidad, enumeración u optimización). Las demás indagan sobre las variables, los recursos disponibles o la información heurística.',
    sourcePages: ['Tema 1.5 · p. 41'],
    origin: 'fuente',
  },

  // ── 1.5.11 Taller integrador ─────────────────────────────────────────
  {
    id: 'm5-11-taller-q1',
    moduleId: '1.5',
    lessonId: 'm5-11-taller',
    section: '1.5.11',
    difficulty: 'media',
    type: 'multiple',
    prompt:
      'En el taller (cinco desarrolladores, ocho historias de usuario), ¿cuál de las siguientes es una restricción dura?',
    options: [
      'Equilibrar la carga de trabajo entre desarrolladores',
      'Respetar las preferencias de cada persona',
      'Cumplir la capacidad máxima y las dependencias entre historias',
      'Reducir los cambios de contexto',
    ],
    correct: [2],
    explanation:
      'Capacidad, dependencias y compatibilidad de habilidades son duras: violarlas invalida la asignación. Equilibrar carga, preferencias y cambios de contexto son blandas.',
    sourcePages: ['Tema 1.5 · p. 43'],
    origin: 'fuente',
  },
  {
    id: 'm5-11-taller-q2',
    moduleId: '1.5',
    lessonId: 'm5-11-taller',
    section: '1.5.11',
    difficulty: 'media',
    type: 'multiple',
    prompt: '¿Cuál es la función objetivo del taller?',
    options: [
      'Maximizar el valor entregado y minimizar el retraso',
      'Minimizar el número de desarrolladores usados',
      'Maximizar el número de historias sin considerar la capacidad',
      'Colorear el grafo de dependencias con tres colores',
    ],
    correct: [0],
    explanation:
      'El objetivo declarado es maximizar el valor de negocio entregado y minimizar el retraso. Las opciones restantes confunden el objetivo con restricciones o con otros problemas.',
    sourcePages: ['Tema 1.5 · p. 43'],
    origin: 'fuente',
  },
  {
    id: 'm5-11-taller-q3',
    moduleId: '1.5',
    lessonId: 'm5-11-taller',
    section: '1.5.11',
    difficulty: 'media',
    type: 'boolean',
    prompt:
      'En el taller, una solución factible debe cumplir las capacidades y las dependencias, aunque todavía no maximice el valor entregado.',
    correct: true,
    explanation:
      'La factibilidad exige respetar las restricciones duras. La optimalidad es un paso posterior: entre las soluciones factibles, la óptima maximiza el valor y minimiza el retraso.',
    sourcePages: ['Tema 1.5 · p. 43'],
    origin: 'fuente',
  },
]
