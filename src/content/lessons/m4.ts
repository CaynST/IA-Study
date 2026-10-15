import type { Lesson } from '@/types/content'

/**
 * Módulo 1.5 — Problemas computacionales y formulación.
 * Once lecciones que cubren las secciones 1.5.1 a 1.5.11 del material
 * (Tema 1.5, pp. 6–45). Redacción propia; los datos de los ejercicios
 * (mochila, TSP, asignación) provienen del material y están recalculados.
 */
export const m4Lessons: Lesson[] = [
  // ─────────────────────────────────────────────────────────────────────
  // 1.5.1 Del problema real al problema computacional
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 'm5-1-del-problema-real',
    moduleId: '1.5',
    section: '1.5.1',
    title: 'Del problema real al problema computacional',
    subtitle:
      'De una situación cotidiana a una formulación que un programa puede resolver: problemas, instancias, soluciones y representaciones.',
    learningObjectives: [
      'Reconocer los cinco elementos que están presentes a la vez en un problema.',
      'Explicar qué significa modelar y por qué un modelo conserva lo relevante y omite el resto.',
      'Distinguir problema, instancia, solución, algoritmo y representación.',
      'Analizar una situación cotidiana con las preguntas del modelado, todavía sin algoritmos.',
    ],
    estimatedMinutes: 10,
    blocks: [
      {
        type: 'paragraph',
        text: 'Un [problema] aparece cuando queremos pasar de una situación de partida a un resultado deseado y no hay un camino obvio. La idea central del capítulo es tajante: los fallos más comunes de los algoritmos de búsqueda no son de sintaxis, vienen de una formulación incompleta. Antes de escribir BFS, Dijkstra o una metaheurística, hay que poner por escrito qué se busca, qué se puede decidir y qué límites existen.',
      },
      {
        type: 'callout',
        variant: 'source',
        title: 'Fuente',
        text: 'Capítulo 1.5 · Problemas computacionales y formulación para búsqueda de soluciones; Tema 1.5 · pp. 2, 6.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Cinco elementos que aparecen a la vez',
      },
      {
        type: 'list',
        ordered: true,
        items: [
          '**Un estado actual o situación inicial.** El punto de partida conocido.',
          '**Una necesidad, meta o resultado deseado.** A dónde se quiere llegar.',
          '**Un conjunto de decisiones posibles.** Lo que se puede elegir o construir.',
          '**Limitaciones que impiden elegir cualquier alternativa.** Lo que no se puede violar.',
          '**Uno o varios criterios para evaluar las alternativas.** Con qué se compara lo bueno y lo malo.',
        ],
      },
      {
        type: 'example',
        title: 'Ejemplo guiado: elegir materias optativas',
        text: 'Una estudiante debe escoger cinco materias optativas para el próximo semestre. Los cinco elementos aparecen de inmediato:',
        steps: [
          'Estado actual: el avance académico y los prerrequisitos ya cubiertos.',
          'Meta: terminar el semestre con cinco optativas inscritas.',
          'Decisiones: qué materias inscribir.',
          'Limitaciones: sin horarios traslapados y respetando los prerrequisitos.',
          'Criterio: minimizar los días que asiste a la universidad.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Modelar: conservar lo relevante',
      },
      {
        type: 'paragraph',
        text: 'El mundo real tiene más detalle del que cualquier algoritmo necesita. [Modelar] es decidir qué se conserva y qué se deja fuera **por ahora**. Esa decisión es la que define el tamaño del problema: si guardamos detalles irrelevantes, el espacio de búsqueda crece sin aportar nada.',
      },
      {
        type: 'table',
        headers: ['Elemento del mundo real', 'Posible modelo computacional'],
        rows: [
          ['Calles de una ciudad', 'Grafo: intersecciones como nodos y calles como aristas'],
          ['Salones, docentes y horarios', 'Variables, dominios y restricciones'],
          ['Productos, capacidad y presupuesto', 'Objetos con peso, valor y límite de capacidad'],
          ['Palabras de una consulta web', 'Términos, documentos, índices y puntuaciones'],
          ['Tareas de un proyecto', 'Actividades, precedencias, recursos y fechas'],
          ['Tablero de ajedrez', 'Estados, movimientos legales y condición de victoria'],
        ],
        caption: 'Tema 1.5 · p. 7. Un mismo fenómeno real admite distintos modelos según el objetivo.',
      },
      {
        type: 'callout',
        variant: 'key',
        title: 'Modelar no es programar',
        text: 'Antes de implementar BFS, DFS, A* o un algoritmo genético debe existir una formulación clara. En este capítulo **no se programa**: se aprende el lenguaje del problema antes que el lenguaje del código.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Problema, instancia, solución, algoritmo y representación',
      },
      {
        type: 'table',
        headers: ['Concepto', 'Definición', 'Ejemplo con rutas'],
        rows: [
          ['Problema', 'La familia general de situaciones por resolver.', 'Encontrar la ruta de menor costo entre dos ubicaciones'],
          ['Instancia', 'Un caso específico con datos concretos.', 'Ir de Xalapa a Veracruz con costos concretos de carretera'],
          ['Solución', 'Respuesta válida para esa instancia.', 'La secuencia de ciudades o intersecciones'],
          ['Algoritmo', 'Procedimiento para hallar una solución.', 'BFS, Dijkstra, A* o una heurística'],
          ['Representación', 'Estructura de datos que expresa el problema y sus soluciones.', 'Grafo ponderado'],
        ],
        caption: 'Tema 1.5 · p. 8. El mismo problema general admite muchas instancias, cada una con varias soluciones.',
      },
      {
        type: 'paragraph',
        text: 'La consecuencia práctica es importante: cambiar los datos no cambia el **problema**, cambia la **instancia**. «Ruta más corta» sigue siendo el mismo problema aunque el mapa que analicemos sea otro.',
      },
      {
        type: 'callout',
        variant: 'didactic',
        title: 'Ampliación didáctica',
        text: 'Elegir la representación es una decisión de diseño con consecuencias. Guardar las distancias en una matriz es cómodo para pocas ciudades, pero desperdicia memoria en mapas reales muy dispersos; ahí conviene una lista de vecinos. La formulación incluye esta decisión, no solo la lista de datos.',
      },
      {
        type: 'callout',
        variant: 'example',
        title: 'Actividad en equipos: pensar antes de algorítmico',
        text: 'Para cada situación respondan: (1) ¿cuál es el problema?, (2) ¿qué información se necesita?, (3) ¿qué decisiones deben tomarse?, (4) ¿qué condiciones no pueden violarse? y (5) ¿cómo sabrían que una solución es buena? **Situaciones:** A. Repartir paquetes en una ciudad; B. Elaborar el horario de un grupo; C. Resolver un Sudoku; D. Buscar un documento en una colección; E. Organizar las tareas de un proyecto. Regla: todavía no se mencionan algoritmos.',
      },
    ],
    keyTerms: [
      {
        term: 'Problema computacional',
        definition:
          'Familia general de situaciones por resolver, con decisiones, límites y un criterio de éxito.',
      },
      {
        term: 'Instancia',
        definition: 'Caso concreto de un problema, con datos específicos.',
      },
      {
        term: 'Modelar',
        definition:
          'Conservar los elementos relevantes del mundo real para el objetivo y omitir temporalmente los irrelevantes.',
      },
      {
        term: 'Representación',
        definition:
          'Estructura de datos (grafo, matriz, lista, árbol o cadena) con la que se expresa el problema y sus soluciones.',
      },
      {
        term: 'Algoritmo',
        definition: 'Procedimiento sistemático para hallar una solución.',
      },
    ],
    recap: [
      'Un problema existe cuando hay un estado inicial, una meta, decisiones, límites y un criterio de calidad.',
      'Modelar es conservar lo relevante y omitir lo irrelevante; es una decisión de diseño.',
      'Problema, instancia, solución, algoritmo y representación son cinco niveles distintos que conviene no mezclar.',
      'Cambiar los datos cambia la instancia, no la familia general del problema.',
    ],
    commonError:
      'Saltar directamente al algoritmo («usaría Dijkstra») antes de definir meta, decisiones y restricciones. La formulación incompleta es la causa principal de soluciones equivocadas.',
    sourcePages: ['Tema 1.5 · pp. 6–9'],
    practiceQuestionIds: ['m5-1-del-problema-real-q1', 'm5-1-del-problema-real-q2', 'm5-1-del-problema-real-q3'],
  },

  // ─────────────────────────────────────────────────────────────────────
  // 1.5.2 Elementos fundamentales
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 'm5-2-elementos',
    moduleId: '1.5',
    section: '1.5.2',
    title: 'Elementos fundamentales de un problema',
    subtitle:
      'Datos de entrada, variables de decisión, dominios, restricciones duras y blandas, y la función objetivo: el vocabulario del curso.',
    learningObjectives: [
      'Identificar los datos de entrada que describen una instancia concreta.',
      'Reconocer las variables de decisión y definir con precisión sus dominios.',
      'Distinguir restricciones duras de restricciones blandas.',
      'Formular una función objetivo que exprese qué significa «mejor».',
    ],
    estimatedMinutes: 11,
    blocks: [
      {
        type: 'paragraph',
        text: 'Esta unidad es el núcleo conceptual del capítulo: da el vocabulario que se usará en todas las unidades siguientes. Con los datos se describen las variables y sus dominios; las restricciones delimitan lo válido; el objetivo indica qué se considera mejor. De esa interacción surge la [solución].',
      },
      {
        type: 'callout',
        variant: 'source',
        title: 'Fuente',
        text: 'Tema 1.5 · pp. 10–15.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Datos de entrada: la fotografía del caso',
      },
      {
        type: 'paragraph',
        text: 'Todo lo que se conoce del caso particular es un [dato de entrada]. Puede venir como números y listas, textos y tablas, imágenes y coordenadas, redes o grafos, reglas y preferencias, o costos, tiempos y probabilidades.',
      },
      {
        type: 'example',
        title: 'Datos de entrada en tres problemas',
        text: 'En una asignación de desarrolladores a tareas, la entrada puede ser una matriz donde cada valor es el costo o el tiempo de asignar a una persona a una tarea. La misma idea aparece en otros problemas:',
        steps: [
          'Rutas: una tabla de distancias entre ubicaciones.',
          'Mochila: una lista de pesos y valores de los objetos.',
          'Horarios: la disponibilidad y la capacidad de docentes y aulas.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Variables de decisión y dominios',
      },
      {
        type: 'paragraph',
        text: 'Las [variables de decisión] representan aquello que el algoritmo debe elegir, construir o modificar. Cada variable tiene un [dominio]: el conjunto de valores que puede tomar. Definirlo con precisión acota el espacio de búsqueda.',
      },
      {
        type: 'table',
        headers: ['Problema', 'Variable de decisión', 'Dominio'],
        rows: [
          ['Horario académico', 'Materia, docente y aula asignados a cada bloque', 'Bloques y aulas disponibles'],
          ['Mochila 0/1', 'Incluir o no cada objeto (variable binaria)', '{0, 1}'],
          ['Ruta de reparto', 'Orden en que se visitan los clientes', 'Permutaciones de clientes'],
          ['Sudoku', 'Valor colocado en cada celda vacía', '{1, 2, …, 9}'],
          ['TSP', 'Permutación u orden de visita de las ciudades', 'Ciudades a visitar'],
          ['Recuperación de información', 'Documentos seleccionados y ordenados', 'Conjunto de documentos almacenados'],
        ],
        caption: 'Tema 1.5 · pp. 12–13. La mochila 0/1 usa variables binarias —una decisión puede escribirse como variable—.',
      },
      {
        type: 'callout',
        variant: 'key',
        title: 'Idea clave sobre dominios',
        text: 'Un dominio mal definido produce soluciones absurdas (una materia asignada a un día inexistente) o un espacio de búsqueda innecesariamente grande. Definir bien el dominio es ya media optimización.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Restricciones duras y blandas',
      },
      {
        type: 'table',
        headers: ['Tipo', 'Significado', 'Ejemplo'],
        rows: [
          ['Restricción dura', 'No puede violarse; si se viola, la solución no es válida.', 'Dos materias no pueden ocupar el mismo horario'],
          ['Restricción blanda', 'Idealmente se cumple, pero puede negociarse.', 'Se prefiere no tener clases a las 7:00 a. m.'],
        ],
        caption: 'Una [restricción] es una condición que toda solución válida debe cumplir (Tema 1.5 · p. 14). Ejemplos de duras: capacidad máxima, presupuesto, cada ciudad una sola vez, precedencias.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Objetivo y función objetivo',
      },
      {
        type: 'table',
        headers: ['Se quiere minimizar', 'Se quiere maximizar'],
        rows: [
          ['Tiempo', 'Utilidad'],
          ['Costo', 'Cobertura'],
          ['Distancia', 'Relevancia'],
          ['Conflictos', 'Equilibrio de carga de trabajo'],
        ],
        caption: 'Tema 1.5 · p. 15. La [función objetivo] expresa qué se mejora; algunos problemas solo exigen una solución válida y otros la mejor de todas.',
      },
      {
        type: 'interactive',
        component: 'formulation-builder',
        title: 'Constructor de formulación',
        hint: 'Elige un problema y arma su formulación: datos, variables, dominios, restricciones y objetivo.',
      },
    ],
    keyTerms: [
      {
        term: 'Datos de entrada',
        definition: 'Información conocida que describe la instancia concreta por resolver.',
      },
      {
        term: 'Variable de decisión',
        definition: 'Elemento cuyo valor debe elegirse, construirse o modificarse para producir una solución.',
      },
      {
        term: 'Dominio',
        definition: 'Conjunto de valores permitidos para una variable de decisión.',
      },
      {
        term: 'Restricción dura',
        definition: 'Condición que ningún resultado válido puede violar.',
      },
      {
        term: 'Restricción blanda',
        definition: 'Preferencia que idealmente se cumple, pero que puede negociarse.',
      },
      {
        term: 'Función objetivo',
        definition: 'Expresión que mide la calidad de una solución y define qué significa «mejor».',
      },
    ],
    recap: [
      'Los datos de entrada describen la instancia; cambiar los datos cambia la instancia, no el problema.',
      'Las variables de decisión son lo que se elige y cada una tiene un dominio que acota sus valores posibles.',
      'Las restricciones duras no se negocian; las blandas expresan preferencias.',
      'La función objetivo expresa el criterio de calidad y solo tiene sentido si antes se definió qué restringir.',
    ],
    commonError:
      'Confundir una restricción con un objetivo. «No exceder la capacidad» es una restricción; «maximizar el valor» es el objetivo. Mezclarlos produce formulaciones que no se pueden evaluar.',
    sourcePages: ['Tema 1.5 · pp. 10–15'],
    practiceQuestionIds: [
      'm5-2-elementos-q1',
      'm5-2-elementos-q2',
      'm5-2-elementos-q3',
      'm5-2-elementos-q4',
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // 1.5.3 Tipos de problemas
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 'm5-3-tipos',
    moduleId: '1.5',
    section: '1.5.3',
    title: 'Tipos de problemas computacionales',
    subtitle:
      'Antes de buscar hay que saber qué forma tiene la respuesta: decisión, factibilidad, optimización, enumeración, conteo y ranking.',
    learningObjectives: [
      'Distinguir los seis tipos de salida que puede pedir un problema.',
      'Diferenciar un problema de decisión de uno de factibilidad.',
      'Reconocer optimización, enumeración, conteo y ranking en situaciones cotidianas.',
      'Clasificar un problema por el tipo de respuesta esperada como primer paso del diagnóstico.',
    ],
    estimatedMinutes: 9,
    blocks: [
      {
        type: 'paragraph',
        text: 'No todo problema busca «el camino más corto». Antes de elegir un algoritmo conviene preguntar qué forma tiene la respuesta esperada. La [clasificación del problema] es el primer paso del diagnóstico porque decide qué tipo de salida debemos producir.',
      },
      {
        type: 'callout',
        variant: 'source',
        title: 'Fuente',
        text: 'Tema 1.5 · pp. 16–18.',
      },
      {
        type: 'table',
        headers: ['Tipo de problema', 'Pregunta que responde', 'Ejemplo'],
        rows: [
          ['Decisión', '¿Existe solución? (sí / no)', '¿Hay un camino entre dos nodos de una red?'],
          ['Factibilidad', '¿Cuál es una solución válida?', 'Generar un horario de exámenes sin traslapes'],
          ['Optimización', '¿Cuál es la mejor solución?', 'Ruta de menor distancia'],
          ['Enumeración', '¿Cuáles son todas las soluciones?', 'Listar todas las rutas entre dos nodos'],
          ['Conteo', '¿Cuántas soluciones existen?', '¿Cuántos horarios factibles hay?'],
          ['Ranking / recuperación', '¿En qué orden conviene mostrarlas?', 'Ordenar páginas web para una consulta'],
        ],
        caption: 'Tema 1.5 · p. 16. Cada tipo de problema responde una pregunta distinta.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Decisión y factibilidad: ¿existe? ¿puedes darme una?',
      },
      {
        type: 'paragraph',
        text: 'Los problemas de [decisión] devuelven «sí» o «no»: ¿existe un camino entre dos nodos?, ¿es posible aprobar todas las materias respetando horarios y prerrequisitos?, ¿existe una asignación de aulas sin conflictos? La respuesta no exhibe la solución, solo afirma o niega su existencia.',
      },
      {
        type: 'paragraph',
        text: 'Los problemas de [factibilidad] van un paso más allá: piden **mostrar** al menos una solución que cumpla todas las restricciones, sin exigir que sea la mejor. Son ejemplos generar un horario de exámenes sin traslapes, resolver un Sudoku, colorear un mapa con tres colores o colocar ocho reinas sin ataques.',
      },
      {
        type: 'callout',
        variant: 'key',
        title: 'Contraste clave',
        text: 'La decisión pregunta por la **existencia**; la factibilidad exige **exhibir** una solución que cumpla las reglas. Es la diferencia entre «¿se puede?» y «aquí tienes una».',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Optimización, enumeración, conteo y ranking',
      },
      {
        type: 'list',
        items: [
          '**Optimización.** Busca la mejor solución según una función objetivo: ruta de menor distancia, horario con mínimos huecos o distribución de paquetes de menor costo.',
          '**Enumeración.** Genera todas las soluciones posibles o válidas: listar todas las rutas entre dos nodos o todas las combinaciones de materias optativas.',
          '**Conteo.** Determina cuántas soluciones existen: ¿cuántas maneras hay de asignar cinco tareas a cinco personas?',
          '**Ranking o recuperación.** Ordena alternativas según una medida de calidad o relevancia: ordenar páginas web, recomendar películas o clasificar currícula ante una vacante.',
        ],
      },
      {
        type: 'callout',
        variant: 'didactic',
        title: 'Ampliación didáctica',
        text: 'Muchos problemas reales encadenan varios tipos. Un sistema de horarios primero resuelve **factibilidad** (encontrar uno sin traslapes) y después, al agregar una función objetivo, se vuelve **optimización**. Reconocer la etapa en la que estás evita pedirle garantías de optimalidad a un problema que solo necesita una respuesta válida.',
      },
      {
        type: 'interactive',
        component: 'problem-type-sorter',
        title: 'Clasificador de tipos de problema',
        hint: 'Clasifica cada enunciado según pida decisión, factibilidad, optimización, enumeración, conteo o ranking.',
      },
    ],
    keyTerms: [
      {
        term: 'Problema de decisión',
        definition: 'Aquel cuya salida es «sí» o «no»: responde si existe o no una solución.',
      },
      {
        term: 'Problema de factibilidad',
        definition: 'Aquel que exige exhibir al menos una solución que cumpla todas las restricciones.',
      },
      {
        term: 'Problema de optimización',
        definition: 'Aquel que busca la mejor solución según una función objetivo.',
      },
      {
        term: 'Problema de enumeración',
        definition: 'Aquel que genera todas las soluciones posibles o válidas.',
      },
      {
        term: 'Problema de conteo',
        definition: 'Aquel que determina cuántas soluciones existen.',
      },
      {
        term: 'Ranking',
        definition: 'Ordenamiento de alternativas según una medida de calidad o relevancia.',
      },
    ],
    recap: [
      'La forma de la respuesta define el tipo de problema: sí/no, una válida, la mejor, todas, cuántas o en qué orden.',
      'Decisión responde por la existencia; factibilidad exige mostrar una solución válida.',
      'Optimización busca lo mejor; enumeración y conteo trabajan con el conjunto de soluciones.',
      'Clasificar el problema es el primer paso del diagnóstico antes de elegir un algoritmo.',
    ],
    commonError:
      'Responder «no existe solución» cuando en realidad no se encontró una. Un problema de decisión pide demostrar existencia o ausencia, no solo un intento fallido de búsqueda.',
    sourcePages: ['Tema 1.5 · pp. 16–18'],
    practiceQuestionIds: ['m5-3-tipos-q1', 'm5-3-tipos-q2', 'm5-3-tipos-q3'],
  },

  // ─────────────────────────────────────────────────────────────────────
  // 1.5.4 Soluciones, calidad y optimalidad
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 'm5-4-soluciones',
    moduleId: '1.5',
    section: '1.5.4',
    title: 'Soluciones, calidad y optimalidad',
    subtitle:
      'De candidata a óptima: factibilidad, optimalidad, métodos exactos y aproximados, y la diferencia entre óptimo local y global.',
    learningObjectives: [
      'Distinguir solución candidata, factible, óptima y subóptima.',
      'Diferenciar un método exacto de uno aproximado, y una heurística de una metaheurística.',
      'Explicar la diferencia entre óptimo local y óptimo global en un paisaje de soluciones.',
      'Elegir entre garantía de optimalidad y rapidez según el problema.',
    ],
    estimatedMinutes: 10,
    blocks: [
      {
        type: 'paragraph',
        text: 'Una [solución] no es un concepto único. El material propone imaginarla como una serie de filtros: primero cualquier alternativa propuesta, luego solo las que cumplen las reglas, y finalmente la mejor de todas. Entender estos filtros evita prometer garantías que un método no puede dar.',
      },
      {
        type: 'callout',
        variant: 'source',
        title: 'Fuente',
        text: 'Tema 1.5 · pp. 19–21.',
      },
      {
        type: 'table',
        headers: ['Nivel', 'Definición', 'Ejemplo'],
        rows: [
          ['Solución candidata', 'Cualquier alternativa propuesta, aún sin verificar si cumple las restricciones.', 'Un horario que asigna una materia a cada grupo, pero podría tener conflictos'],
          ['Solución factible', 'Cumple todas las restricciones duras.', 'Una ruta que visita todos los destinos y no excede la capacidad'],
          ['Solución óptima', 'Factible y con el mejor valor posible de la función objetivo.', 'Si se minimiza costo, la de menor costo'],
        ],
        caption: 'Tema 1.5 · p. 19. Los tres filtros se aplican en ese orden: candidata → factible → óptima.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Subóptima y las cuatro formas de buscar',
      },
      {
        type: 'paragraph',
        text: 'Una [solución subóptima] es válida pero no la mejor conocida o posible. El concepto es esencial antes de estudiar búsqueda voraz, hill climbing, recocido simulado, búsqueda tabú y algoritmos genéticos: esas técnicas suelen dar soluciones muy buenas sin garantizar siempre la óptima.',
      },
      {
        type: 'list',
        items: [
          '**Método exacto.** Busca garantizar una solución óptima.',
          '**Método aproximado.** Encuentra una solución de calidad aceptable con menor esfuerzo computacional.',
          '**Heurística.** Regla práctica o estimación que guía la búsqueda.',
          '**Metaheurística.** Estrategia general para explorar espacios grandes: recocido simulado, búsqueda tabú o algoritmos genéticos.',
        ],
      },
      {
        type: 'callout',
        variant: 'key',
        title: 'La conexión con el capítulo 2',
        text: 'Las búsquedas no informadas, informadas y la ramificación y poda pertenecen a enfoques con garantías. Las estrategias locales y poblacionales **intercambian la garantía de optimalidad por eficiencia** en espacios grandes.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Óptimo local y óptimo global: el paisaje de soluciones',
      },
      {
        type: 'paragraph',
        text: 'Imagina el espacio de soluciones como un paisaje con montañas y valles, donde la altura representa la calidad. El [óptimo local] es el mejor punto de una zona cercana; el [óptimo global] es el mejor de todo el espacio. Subir siempre a la cima más próxima puede dejarte atrapado en una colina secundaria.',
      },
      {
        type: 'callout',
        variant: 'example',
        title: 'Ejemplo: el horario que mejora sin ser el mejor',
        text: 'Al organizar un horario, mover una sola materia puede mejorar la situación actual, pero impide una reorganización más amplia que daría un resultado mucho mejor. Eso es exactamente un óptimo local: parece bueno porque solo se mira alrededor.',
      },
      {
        type: 'callout',
        variant: 'didactic',
        title: 'Ampliación didáctica',
        text: 'La distinción local/global explica por qué existen las metaheurísticas. Un método de descenso puro (solo aceptar mejoras) se estanca en óptimos locales; el recocido simulado y la búsqueda tabú añaden mecanismos para **escapar** de ellos aceptando temporalmente soluciones peores o prohibiendo volver atrás.',
      },
    ],
    keyTerms: [
      {
        term: 'Solución candidata',
        definition: 'Alternativa propuesta que todavía no se verifica contra las restricciones.',
      },
      {
        term: 'Solución factible',
        definition: 'Solución que cumple todas las restricciones duras.',
      },
      {
        term: 'Solución óptima',
        definition: 'Solución factible con el mejor valor posible de la función objetivo.',
      },
      {
        term: 'Solución subóptima',
        definition: 'Solución válida que no es la mejor conocida o posible.',
      },
      {
        term: 'Heurística',
        definition: 'Regla práctica o estimación que guía la búsqueda sin garantizar optimalidad.',
      },
      {
        term: 'Óptimo local / global',
        definition: 'El mejor de una zona cercana frente al mejor de todo el espacio de soluciones.',
      },
    ],
    recap: [
      'Candidata, factible y óptima son filtros sucesivos: sin factibilidad no hay optimalidad válida.',
      'Los métodos exactos dan garantía de optimalidad; los aproximados y heurísticos ganan eficiencia a costa de esa garantía.',
      'Subóptima no significa incorrecta: es una solución válida que no es la mejor.',
      'Un óptimo local es el mejor de su zona; solo el óptimo global es el mejor de todo el espacio.',
    ],
    commonError:
      'Creer que la primera mejora encontrada es el óptimo global. Los métodos de búsqueda local solo garantizan el mejor resultado de su vecindario.',
    sourcePages: ['Tema 1.5 · pp. 19–21'],
    practiceQuestionIds: ['m5-4-soluciones-q1', 'm5-4-soluciones-q2', 'm5-4-soluciones-q3'],
  },

  // ─────────────────────────────────────────────────────────────────────
  // 1.5.5 Espacios de búsqueda y representaciones
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 'm5-5-espacios',
    moduleId: '1.5',
    section: '1.5.5',
    title: 'Espacios de búsqueda y representaciones',
    subtitle:
      'Estados, acciones, inicio y meta; grafo, árbol, matriz, lista y cadena; y por qué la explosión combinatoria impide revisarlo todo.',
    learningObjectives: [
      'Definir espacio de búsqueda, estado y acción.',
      'Identificar el estado inicial y el estado meta en distintos problemas.',
      'Elegir entre las cinco representaciones del curso según la estructura del problema.',
      'Explicar por qué el crecimiento factorial o exponencial hace inviable la fuerza bruta.',
    ],
    estimatedMinutes: 11,
    blocks: [
      {
        type: 'paragraph',
        text: 'El [espacio de búsqueda] es el conjunto de todas las soluciones, configuraciones o estados que podrían explorarse. Con cinco materias y cinco franjas posibles, contiene todas las asignaciones, aunque muchas sean inválidas. Un [estado] es una configuración parcial o completa del problema.',
      },
      {
        type: 'callout',
        variant: 'source',
        title: 'Fuente',
        text: 'Tema 1.5 · pp. 22–25.',
      },
      {
        type: 'paragraph',
        text: 'La misma idea de estado cambia de forma según el problema: es la posición actual del agente en un laberinto, la disposición de las fichas en el 8-puzzle, las materias ya asignadas en un horario, o las ciudades visitadas y la ciudad actual en el TSP.',
      },
      {
        type: 'figure',
        figure: 'search-space-tree',
        caption: 'Un arbol de búsqueda: el estado inicial se ramifica en estados intermedios hasta alcanzar una meta (Tema 1.5 · p. 23).',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Acciones, inicio y meta',
      },
      {
        type: 'paragraph',
        text: 'Las [acciones] u operadores transforman un estado en otro. Buscar una solución es recorrer el espacio: partir del estado inicial, explorar configuraciones vecinas y evaluar si cumplen las restricciones y el objetivo. La formulación define el tamaño y la forma del espacio; el algoritmo solo decide cómo recorrerlo.',
      },
      {
        type: 'list',
        items: [
          '**Acciones típicas:** moverse en un laberinto, intercambiar dos ciudades de una ruta, asignar una materia a un bloque, colocar una reina, agregar o quitar un objeto de la mochila, sustituir un término por un sinónimo.',
          '**Estado inicial y meta en rutas:** origen de la ruta y llegada al destino.',
          '**Estado inicial y meta en Sudoku:** tablero parcialmente lleno y tablero completo que cumple las reglas.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Cinco representaciones para la mayoría de los problemas',
      },
      {
        type: 'table',
        headers: ['Representación', 'Cuándo usarla', 'Ejemplo'],
        rows: [
          ['Grafo', 'Hay entidades y relaciones o trayectorias', 'Mapa de carreteras, red social, dependencias de tareas'],
          ['Árbol', 'La solución se construye con decisiones secuenciales', 'Árbol de decisiones, juego, combinaciones de objetos'],
          ['Matriz', 'Hay costos, distancias, compatibilidades o celdas', 'Sudoku, matriz de distancias, asignación de tareas'],
          ['Lista o permutación', 'Importa el orden de los elementos', 'Ruta del viajante, orden de tareas'],
          ['Cadena de texto', 'Se buscan patrones o coincidencias lingüísticas', 'Consultas, documentos, palabras clave'],
        ],
        caption: 'Tema 1.5 · p. 24. Elegir bien la representación simplifica la búsqueda; elegir mal la complica.',
      },
      {
        type: 'callout',
        variant: 'key',
        title: 'Verificación de una representación',
        text: '¿La representación captura **todas** las decisiones y restricciones del problema sin arrastrar detalles irrelevantes? Si sobra o falta algo, la formulación está mal y ningún algoritmo lo arreglará.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'La explosión combinatoria',
      },
      {
        type: 'paragraph',
        text: 'Las alternativas crecen de forma acelerada. Con 10 ciudades hay **10! = 3 628 800** órdenes posibles; con 20 objetos que se pueden tomar o dejar hay **2^20 = 1 048 576** combinaciones; en ajedrez, las posiciones se multiplican con cada movimiento. Revisar todo deja de ser viable muy pronto.',
      },
      {
        type: 'callout',
        variant: 'didactic',
        title: 'Ampliación didáctica',
        text: 'Compara órdenes de magnitud: 10! es unos 3.6 millones, mientras que 2^20 apenas pasa el millón; sin embargo, agregar una sola ciudad multiplica el problema por 11, y con 20 ciudades 20! supera los 2.4 trillones. Por eso la fuerza bruta sirve para instancias pequeñas y para las grandes aparecen las **heurísticas y metaheurísticas** del capítulo 2.',
      },
      {
        type: 'interactive',
        component: 'search-space-explorer',
        title: 'Explorador de espacio de búsqueda',
        hint: 'Observa cómo crece el número de estados al aumentar ciudades u objetos.',
      },
    ],
    keyTerms: [
      {
        term: 'Espacio de búsqueda',
        definition:
          'Conjunto de todas las soluciones, configuraciones o estados que podrían explorarse para resolver un problema.',
      },
      {
        term: 'Estado',
        definition: 'Configuración parcial o completa del problema.',
      },
      {
        term: 'Acción u operador',
        definition: 'Transformación que lleva de un estado a otro.',
      },
      {
        term: 'Estado inicial / meta',
        definition: 'Configuración de partida y configuración que satisface el objetivo.',
      },
      {
        term: 'Explosión combinatoria',
        definition: 'Crecimiento factorial o exponencial del número de alternativas que vuelve inviable revisarlas todas.',
      },
    ],
    recap: [
      'El espacio de búsqueda es el universo de alternativas; la formulación define su tamaño y su forma.',
      'Un estado es una configuración; las acciones lo transforman y la búsqueda va del inicio a la meta.',
      'Grafo, árbol, matriz, lista y cadena cubren la mayoría de los problemas del curso.',
      'La explosión combinatoria (10!, 2^20) hace inviable la revisión exhaustiva y motiva las heurísticas.',
    ],
    commonError:
      'Elegir la representación por costumbre y no por la estructura del problema. Una matriz para un grafo muy disperso o una lista cuando importan las relaciones son elecciones que encarecen la búsqueda.',
    sourcePages: ['Tema 1.5 · pp. 22–25'],
    practiceQuestionIds: ['m5-5-espacios-q1', 'm5-5-espacios-q2', 'm5-5-espacios-q3'],
  },

  // ─────────────────────────────────────────────────────────────────────
  // 1.5.6 Optimización combinatoria
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 'm5-6-combinatoria',
    moduleId: '1.5',
    section: '1.5.6',
    title: 'Optimización combinatoria',
    subtitle:
      'Elegir lo mejor entre combinaciones discretas: mochila 0/1, viajante de comercio, asignación y secuenciación, resueltos paso a paso.',
    learningObjectives: [
      'Reconocer las características típicas de un problema de optimización combinatoria.',
      'Resolver a mano una mochila 0/1 pequeña y distinguir soluciones no factibles, factibles y óptimas.',
      'Calcular el costo de rutas en un TSP con una matriz de distancias.',
      'Encontrar la asignación de costo mínimo entre personas y tareas.',
    ],
    estimatedMinutes: 13,
    blocks: [
      {
        type: 'paragraph',
        text: 'La [optimización combinatoria] estudia problemas en los que hay que elegir la mejor alternativa dentro de un conjunto discreto —y usualmente enorme— de combinaciones, órdenes, asignaciones o subconjuntos. Es la familia donde la explosión combinatoria del tema anterior se vuelve crítica.',
      },
      {
        type: 'callout',
        variant: 'source',
        title: 'Fuente',
        text: 'Tema 1.5 · pp. 26–30. Los datos de la mochila, del TSP y de la asignación provienen del material; los cálculos están recalculados aquí.',
      },
      {
        type: 'list',
        items: [
          '**Variables discretas:** sí/no, entero, color, ciudad, tarea o posición.',
          '**Restricciones explícitas:** capacidades, precedencias, visitas únicas.',
          '**Una función objetivo** que se desea minimizar o maximizar.',
          '**Espacio de soluciones de crecimiento combinatorio.**',
          '**Frecuente dificultad** para hallar la solución óptima en tiempos razonables.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Mochila 0/1: máximo valor sin rebasar la capacidad',
      },
      {
        type: 'table',
        headers: ['Objeto', 'Peso', 'Valor'],
        rows: [
          ['Laptop', '3 kg', '9'],
          ['Cámara', '2 kg', '6'],
          ['Libro', '1 kg', '3'],
          ['Batería', '2 kg', '5'],
          ['Botiquín', '2 kg', '4'],
        ],
        caption: 'Capacidad de la mochila: 5 kg (Tema 1.5 · p. 27). Variable de decisión: incluir (1) o no (0) cada objeto.',
      },
      {
        type: 'table',
        headers: ['Veredicto', 'Selección', 'Peso total', 'Valor total', 'Por qué'],
        rows: [
          ['No factible', 'Laptop + cámara + batería', '3 + 2 + 2 = 7 kg', '9 + 6 + 5 = 20', 'Rebasa la capacidad de 5 kg'],
          ['Factible', 'Batería + botiquín + libro', '2 + 2 + 1 = 5 kg', '5 + 4 + 3 = 12', 'Cumple la capacidad, pero no es la mejor'],
          ['Óptima', 'Laptop + cámara', '3 + 2 = 5 kg', '9 + 6 = 15', 'Mejor valor posible sin exceder 5 kg'],
        ],
        caption: 'Tres veredictos sobre la misma mochila (Tema 1.5 · p. 27). Comprobación: ninguna combinación válida supera el valor 15.',
      },
      {
        type: 'callout',
        variant: 'key',
        title: 'Conexión con ingeniería de software',
        text: 'Seleccionar las funcionalidades de la primera versión de un producto es una mochila 0/1: cada funcionalidad tiene un costo de desarrollo (peso) y un valor para el usuario. La capacidad es el tiempo o el presupuesto del equipo.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Viajante de comercio: la ruta es una permutación',
      },
      {
        type: 'table',
        headers: ['', 'A', 'B', 'C', 'D'],
        rows: [
          ['A', '—', '12', '9', '15'],
          ['B', '12', '—', '7', '10'],
          ['C', '9', '7', '—', '8'],
          ['D', '15', '10', '8', '—'],
        ],
        caption: 'Matriz de distancias entre cuatro ciudades (Tema 1.5 · p. 28). Restricción: visitar cada ciudad una sola vez y regresar al origen.',
      },
      {
        type: 'example',
        title: 'Ruta óptima del viajante',
        text: 'Se busca la permutación de ciudades que minimice la distancia total, empezando y terminando en A.',
        steps: [
          'Ruta A→C→D→B→A: 9 + 8 + 10 + 12 = 39.',
          'Ruta A→B→D→C→A: 12 + 10 + 8 + 9 = 39.',
          'La peor: A→B→C→D→A = 12 + 7 + 8 + 15 = 42.',
          'Conclusión: el costo mínimo es 39 y hay al menos dos rutas que lo alcanzan, entre ellas A→C→D→B→A.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Asignación: cada persona, exactamente una tarea',
      },
      {
        type: 'table',
        headers: ['Desarrollador', 'Interfaz', 'Base de datos', 'Pruebas'],
        rows: [
          ['Ana', '4 h', '8 h', '6 h'],
          ['Bruno', '7 h', '3 h', '5 h'],
          ['Carla', '5 h', '6 h', '4 h'],
        ],
        caption: 'Tiempos de asignación (Tema 1.5 · p. 29). Cada persona hace exactamente una tarea y cada tarea la toma una sola persona.',
      },
      {
        type: 'example',
        title: 'Asignación de tiempo mínimo',
        text: 'Se busca emparejar personas y tareas minimizando el tiempo total. Hay solo 3! = 6 asignaciones posibles, así que se pueden revisar todas.',
        steps: [
          'Ana→interfaz (4), Bruno→base de datos (3), Carla→pruebas (4): total 11 h.',
          'Alternativa Ana→pruebas (6), Bruno→base de datos (3), Carla→interfaz (5): total 14 h.',
          'La peor: Ana→base (8), Bruno→interfaz (7), Carla→pruebas (4): total 19 h.',
          'Conclusión: la mejor asignación suma 11 horas; es la óptima del problema.',
        ],
      },
      {
        type: 'paragraph',
        text: 'La **secuenciación de tareas** cierra la familia: ordenar trabajos sobre recursos limitados para minimizar tiempo, retrasos o costos. Sus conceptos clave son tiempo de procesamiento (duración), recurso (quién o qué la ejecuta), fecha límite, dependencia o precedencia (qué tarea debe terminar antes), tiempo de terminación del conjunto y cuello de botella (el recurso que limita el avance).',
      },
    ],
    keyTerms: [
      {
        term: 'Optimización combinatoria',
        definition:
          'Familia de problemas que busca la mejor alternativa dentro de un conjunto discreto y usualmente enorme de combinaciones u órdenes.',
      },
      {
        term: 'Mochila 0/1',
        definition:
          'Problema de seleccionar objetos con peso y valor, sin rebasar una capacidad, donde cada objeto se toma completo o no se toma.',
      },
      {
        term: 'TSP (viajante de comercio)',
        definition:
          'Problema de encontrar la ruta de costo mínimo que visita cada ciudad una sola vez y regresa al origen.',
      },
      {
        term: 'Problema de asignación',
        definition:
          'Emparejar personas con tareas de modo que cada persona haga una tarea y cada tarea la tome una persona, minimizando costo o tiempo.',
      },
      {
        term: 'Secuenciación de tareas',
        definition:
          'Ordenar trabajos sobre recursos limitados considerando tiempos, fechas límite y precedencias.',
      },
    ],
    recap: [
      'La optimización combinatoria trabaja con variables discretas, restricciones explícitas y una función objetivo sobre un espacio enorme.',
      'En la mochila 0/1 se distingue una selección no factible (7 kg), una factible (5 kg, valor 12) y la óptima (5 kg, valor 15).',
      'En el TSP la ruta es una permutación; con la matriz de cuatro ciudades el costo mínimo es 39.',
      'En la asignación de Ana, Bruno y Carla el tiempo mínimo es 11 horas.',
    ],
    commonError:
      'Suponer que la selección de mayor valor inmediato (la más «golosa») es la óptima. En la mochila, tomar primero el objeto de mayor valor no garantiza el mejor total; hay que comparar combinaciones que respeten la capacidad.',
    sourcePages: ['Tema 1.5 · pp. 26–30'],
    practiceQuestionIds: ['m5-6-combinatoria-q1', 'm5-6-combinatoria-q2', 'm5-6-combinatoria-q3'],
  },

  // ─────────────────────────────────────────────────────────────────────
  // 1.5.7 Satisfacción de restricciones (CSP)
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 'm5-7-csp',
    moduleId: '1.5',
    section: '1.5.7',
    title: 'Satisfacción de restricciones (CSP)',
    subtitle:
      'Asignar valores a variables sin violar restricciones: coloreo de mapas, Sudoku, n-reinas y horarios universitarios.',
    learningObjectives: [
      'Definir un CSP en términos de variables, dominios y restricciones.',
      'Explicar por qué el coloreo de mapas es un CSP y cuántos colores exige un triángulo de regiones.',
      'Describir el Sudoku y el problema de las n-reinas como CSP.',
      'Formular un horario universitario con restricciones duras y blandas.',
    ],
    estimatedMinutes: 11,
    blocks: [
      {
        type: 'paragraph',
        text: 'Un [problema de satisfacción de restricciones] (CSP, por *Constraint Satisfaction Problem*) consiste en asignar valores a variables de modo que todas las restricciones se cumplan. A diferencia de la optimización, aquí no se busca «la mejor» solución: se busca una solución válida; después puede agregarse una función objetivo.',
      },
      {
        type: 'callout',
        variant: 'source',
        title: 'Fuente',
        text: 'Tema 1.5 · pp. 31–34.',
      },
      {
        type: 'list',
        items: [
          '**Variables:** qué se debe asignar.',
          '**Dominios:** valores permitidos para cada variable.',
          '**Restricciones:** condiciones que toda solución debe cumplir.',
          '**Solución:** asignación válida con todas las restricciones satisfechas.',
        ],
      },
      {
        type: 'callout',
        variant: 'key',
        title: 'Formulación mínima',
        text: 'Esas tres piezas —variables, dominios y restricciones— son la formulación mínima de un CSP. Coloreo de mapas, Sudoku, n-reinas y horarios son instancias de esta misma familia.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Coloreo de mapas: vecinos nunca comparten color',
      },
      {
        type: 'table',
        headers: ['Elemento', 'Interpretación'],
        rows: [
          ['Variables', 'Regiones o nodos del mapa'],
          ['Dominio', 'Colores disponibles'],
          ['Restricción', 'Regiones adyacentes deben tener distinto color'],
          ['Solución', 'Asignación de color válida'],
        ],
        caption: 'Tema 1.5 · p. 32. En software se usa para frecuencias de redes inalámbricas, turnos incompatibles y registro de variables en compiladores.',
      },
      {
        type: 'callout',
        variant: 'example',
        title: 'Cuántos colores hacen falta',
        text: 'En un mapa con cuatro regiones, si A, B y C son **mutuamente vecinas** (cada una colinda con las otras dos), entonces ninguna puede compartir color con otra: hacen falta al menos **tres colores**. Los nodos conectados siempre reciben colores distintos.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Sudoku y n-reinas: dos CSP que todos pueden razonar',
      },
      {
        type: 'table',
        headers: ['Aspecto', 'Sudoku 9×9', 'Problema de las n reinas'],
        rows: [
          ['Variables', 'Las celdas vacías', 'La posición de cada reina (una por columna)'],
          ['Dominio', 'Números del 1 al 9', 'Filas disponibles'],
          ['Restricciones', 'Sin repetición por fila, columna y subcuadro 3×3', 'Sin ataques: distinta fila, columna y diagonal'],
          ['Estado parcial', 'Tablero incompleto', 'Reinas ya colocadas'],
          ['Meta', 'Tablero completo y consistente', 'Tablero con las n reinas colocadas'],
        ],
        caption: 'Tema 1.5 · p. 33. Ambos conectan con backtracking, búsqueda local y algoritmos genéticos.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Horarios universitarios: duras y blandas juntas',
      },
      {
        type: 'table',
        headers: ['Componente', 'Ejemplo'],
        rows: [
          ['Variables', 'Horario de cada grupo'],
          ['Dominios', 'Bloques de horario y aulas disponibles'],
          ['Restricciones duras', 'Sin traslapes; aula con capacidad suficiente; docente disponible'],
          ['Restricciones blandas', 'Evitar horarios nocturnos; minimizar huecos; equilibrar carga docente'],
          ['Objetivo opcional', 'Minimizar conflictos o preferencias incumplidas'],
        ],
        caption: 'Tema 1.5 · p. 34. Primero se busca factibilidad (cumplir las duras); al agregar objetivo, el modelo se vuelve optimización.',
      },
      {
        type: 'interactive',
        component: 'constraint-simulator',
        title: 'Simulador de restricciones',
        hint: 'Asigna valores a las variables y observa cuándo se viola una restricción dura.',
      },
    ],
    keyTerms: [
      {
        term: 'CSP (problema de satisfacción de restricciones)',
        definition:
          'Problema que consiste en asignar valores a variables de modo que todas las restricciones se cumplan.',
      },
      {
        term: 'Coloreo de mapas',
        definition:
          'CSP donde las variables son regiones, el dominio son los colores y la restricción es que regiones vecinas difieran.',
      },
      {
        term: 'n-reinas',
        definition:
          'CSP de colocar n reinas en un tablero n×n sin que dos se ataquen.',
      },
      {
        term: 'Asignación válida',
        definition: 'Combinación de valores para las variables que satisface todas las restricciones.',
      },
    ],
    recap: [
      'Un CSP se define por variables, dominios y restricciones; su salida es una asignación válida.',
      'En el coloreo, tres regiones mutuamente vecinas obligan a usar al menos tres colores.',
      'Sudoku y n-reinas son CSP con restricciones de no repetición y no ataque.',
      'Un horario se resuelve primero en su parte dura (factibilidad) y luego, con objetivo, se optimiza.',
    ],
    commonError:
      'Tratar un CSP como un problema de optimización desde el inicio. El CSP busca **cualquier** asignación válida; la función objetivo es un añadido posterior, no un requisito.',
    sourcePages: ['Tema 1.5 · pp. 31–34'],
    practiceQuestionIds: ['m5-7-csp-q1', 'm5-7-csp-q2', 'm5-7-csp-q3'],
  },

  // ─────────────────────────────────────────────────────────────────────
  // 1.5.8 Rutas, redes y caminos óptimos
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 'm5-8-rutas',
    moduleId: '1.5',
    section: '1.5.8',
    title: 'Rutas, redes y caminos óptimos',
    subtitle:
      'Grafos ponderados, costo de caminos y la elección entre BFS, Dijkstra y A* según las propiedades de la red.',
    learningObjectives: [
      'Representar una red como grafo y distinguir grafo ponderado de no ponderado.',
      'Manejar el vocabulario de caminos: camino, costo, ruta, ciclo y conectividad.',
      'Comparar rutas factibles y determinar cuál es óptima respecto al costo.',
      'Elegir entre BFS, Dijkstra y A* según las características del grafo.',
    ],
    estimatedMinutes: 10,
    blocks: [
      {
        type: 'paragraph',
        text: 'Una red se modela con un [grafo]: los **nodos** son ubicaciones, tareas o entidades; las **aristas** son rutas, dependencias o relaciones. Si las conexiones tienen distancia, tiempo, costo o capacidad, el grafo es [ponderado] y cada arista lleva un peso.',
      },
      {
        type: 'callout',
        variant: 'source',
        title: 'Fuente',
        text: 'Tema 1.5 · pp. 35–37.',
      },
      {
        type: 'figure',
        figure: 'weighted-graph',
        caption: 'Los números sobre las aristas son los pesos: costo, tiempo o distancia de cada conexión (Tema 1.5 · p. 35).',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Vocabulario de caminos',
      },
      {
        type: 'table',
        headers: ['Término', 'Definición'],
        rows: [
          ['Camino', 'Secuencia de nodos conectados'],
          ['Costo de un camino', 'Suma de los pesos de las aristas'],
          ['Ruta', 'Camino que representa un recorrido con propósito'],
          ['Ciclo', 'Camino que comienza y termina en el mismo nodo'],
          ['Conectividad', 'Posibilidad de llegar de un nodo a otro'],
        ],
        caption: 'Tema 1.5 · p. 35.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Tres rutas factibles, solo una óptima',
      },
      {
        type: 'table',
        headers: ['Ruta', 'Costo', 'Veredicto'],
        rows: [
          ['A→B→D', '12 min', 'Factible'],
          ['A→E→F→D', '15 min', 'Factible'],
          ['A→C→D', '9 min', 'Óptima'],
        ],
        caption: 'Tema 1.5 · p. 36. Los tres caminos existen, pero solo A→C→D minimiza el tiempo.',
      },
      {
        type: 'callout',
        variant: 'key',
        title: 'Qué significa factible aquí',
        text: 'Las tres rutas son factibles porque **sus conexiones existen**. La optimalidad es una comparación aparte: entre las factibles, A→C→D tiene el menor costo. Si el criterio cambia (minimizar peajes, evitar tráfico o atender varios clientes), el problema evoluciona hacia optimización combinatoria.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'La ruta más corta no siempre se busca igual',
      },
      {
        type: 'table',
        headers: ['Situación', 'Enfoque conceptual'],
        rows: [
          ['Todas las aristas tienen el mismo costo', 'Buscar el menor número de pasos (BFS)'],
          ['Las aristas tienen distintos costos positivos', 'Buscar el menor costo acumulado (Dijkstra)'],
          ['Existe estimación de distancia al destino', 'Usar una guía heurística (A*)'],
          ['Se deben visitar varios destinos', 'Se convierte en un problema más complejo, como TSP o VRP'],
        ],
        caption: 'Tema 1.5 · p. 37. BFS sirve en grafos sin pesos; A* combina el costo acumulado con una estimación heurística.',
      },
      {
        type: 'interactive',
        component: 'graph-explorer',
        title: 'Explorador de grafos',
        hint: 'Recorre la red, suma los pesos de cada camino y compara cuál resulta óptimo.',
      },
    ],
    keyTerms: [
      {
        term: 'Grafo',
        definition: 'Representación de entidades (nodos) y relaciones o trayectorias (aristas).',
      },
      {
        term: 'Grafo ponderado',
        definition: 'Grafo cuyas aristas tienen un peso asociado: distancia, tiempo, costo o capacidad.',
      },
      {
        term: 'Costo de un camino',
        definition: 'Suma de los pesos de las aristas que forman el camino.',
      },
      {
        term: 'Ciclo',
        definition: 'Camino que comienza y termina en el mismo nodo.',
      },
      {
        term: 'Conectividad',
        definition: 'Posibilidad de llegar de un nodo a otro siguiendo las aristas.',
      },
    ],
    recap: [
      'Una red se modela como grafo; si las aristas tienen peso, es un grafo ponderado.',
      'El costo de un camino es la suma de los pesos de sus aristas.',
      'Varias rutas pueden ser factibles, pero la óptima es la de menor costo.',
      'BFS sin pesos, Dijkstra con costos positivos y A* con una estimación al destino.',
    ],
    commonError:
      'Confundir «existe un camino» con «es el camino de menor costo». La factibilidad dice que la ruta es posible; la optimalidad exige comparar contra las demás.',
    sourcePages: ['Tema 1.5 · pp. 35–37'],
    practiceQuestionIds: ['m5-8-rutas-q1', 'm5-8-rutas-q2', 'm5-8-rutas-q3'],
  },

  // ─────────────────────────────────────────────────────────────────────
  // 1.5.9 Búsqueda en lenguaje natural y recuperación de información
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 'm5-9-ir',
    moduleId: '1.5',
    section: '1.5.9',
    title: 'Búsqueda en lenguaje natural y recuperación de información',
    subtitle:
      'De la coincidencia literal de palabras a la relevancia semántica: consulta, corpus, índice, relevancia y ranking.',
    learningObjectives: [
      'Distinguir coincidencia exacta, parcial, sensible a mayúsculas, por prefijo y con expresiones regulares.',
      'Describir el ciclo de una recuperación de información: consulta, corpus, índice y ranking.',
      'Explicar qué hace relevante a un documento y por qué la coincidencia exacta no siempre es la mejor respuesta.',
      'Analizar un buscador de incidencias como caso de búsqueda semántica.',
    ],
    estimatedMinutes: 10,
    blocks: [
      {
        type: 'paragraph',
        text: 'La búsqueda no es solo laberintos y mapas. El software cotidiano resuelve problemas de búsqueda sobre texto, documentos y conocimiento. La [búsqueda literal] parte de un texto y una palabra o patrón y localiza sus apariciones; ahí el «espacio de búsqueda» es el texto y la solución son las posiciones o documentos encontrados.',
      },
      {
        type: 'callout',
        variant: 'source',
        title: 'Fuente',
        text: 'Tema 1.5 · pp. 38–40.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Búsqueda literal y sus variantes',
      },
      {
        type: 'list',
        items: [
          '**Coincidencia exacta:** el texto aparece tal cual.',
          '**Coincidencia parcial:** solo una parte coincide.',
          '**Mayúsculas y minúsculas:** ¿«Error» y «error» son lo mismo?',
          '**Prefijos:** «optimi…» encuentra «optimizar» y «optimización».',
          '**Expresiones regulares:** patrones con estructura flexible.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Recuperación de información: de la consulta al ranking',
      },
      {
        type: 'paragraph',
        text: 'Ejemplo del material: la consulta «algoritmos de búsqueda en inteligencia artificial» sobre una colección de apuntes, artículos o páginas. El resultado esperado son documentos ordenados de mayor a menor [relevancia].',
      },
      {
        type: 'table',
        headers: ['Componente', 'Descripción'],
        rows: [
          ['Consulta', 'Palabras, pregunta o frase ingresada por el usuario'],
          ['Corpus', 'Colección de documentos disponibles'],
          ['Índice', 'Estructura que facilita localizar términos'],
          ['Documento candidato', 'Documento que contiene términos relacionados'],
          ['Relevancia', 'Medida de utilidad del documento para una consulta'],
          ['Ranking', 'Ordenamiento de resultados según relevancia'],
        ],
        caption: 'Tema 1.5 · p. 39. Aquí la «solución» es una lista ordenada, no un camino.',
      },
      {
        type: 'callout',
        variant: 'key',
        title: 'La solución cambia de forma',
        text: 'En rutas la solución es una secuencia de nodos; en recuperación de información es una **lista ordenada de documentos**. Cambiar la forma de la solución cambia por completo el tipo de problema y su evaluación.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Búsqueda semántica: la intención, no solo las palabras',
      },
      {
        type: 'paragraph',
        text: 'Una [búsqueda semántica] intenta recuperar documentos que expresan una idea relacionada aunque no usen las mismas palabras. Por ejemplo, la consulta «cómo reducir el tiempo de entrega» debería encontrar un documento titulado «optimización de rutas de distribución», aunque no comparta términos literales.',
      },
      {
        type: 'callout',
        variant: 'example',
        title: 'Caso: buscador de incidencias',
        text: 'Una empresa tiene miles de reportes de errores. Un desarrollador escribe «la aplicación se cierra al guardar» y el sistema debe recuperar tickets relacionados, incluso si usan términos como «crash», «fallo», «termina inesperadamente» o «error al persistir datos». Preguntas guía: ¿cuál es la consulta?, ¿cuál es el espacio de búsqueda?, ¿qué hace relevante a un ticket?, ¿cómo ordenar los resultados? y ¿una coincidencia exacta siempre es la mejor respuesta?',
      },
      {
        type: 'callout',
        variant: 'didactic',
        title: 'Ampliación didáctica',
        text: 'La relevancia no es una propiedad del documento por sí sola: depende de la consulta y del usuario. Un ticket que solo menciona la palabra «guardar» puede ser menos útil que otro que describe un fallo al persistir datos, aunque el primero coincida más literalmente. Por eso el ranking pondera y ordena, en lugar de limitarse a filtrar.',
      },
    ],
    keyTerms: [
      {
        term: 'Búsqueda literal',
        definition: 'Localizar apariciones exactas o aproximadas de una palabra o patrón dentro de un texto.',
      },
      {
        term: 'Consulta',
        definition: 'Palabras, pregunta o frase que el usuario ingresa para buscar.',
      },
      {
        term: 'Corpus',
        definition: 'Colección de documentos disponibles para la búsqueda.',
      },
      {
        term: 'Índice',
        definition: 'Estructura de datos que acelera localizar qué documentos contienen cada término.',
      },
      {
        term: 'Relevancia',
        definition: 'Medida de utilidad de un documento respecto a una consulta.',
      },
      {
        term: 'Búsqueda semántica',
        definition:
          'Recuperación que busca documentos con significado relacionado aunque no compartan las mismas palabras.',
      },
    ],
    recap: [
      'La búsqueda literal localiza palabras o patrones y admite variantes de exactitud, mayúsculas, prefijos y expresiones regulares.',
      'En recuperación de información el espacio es el corpus y la solución es una lista ordenada por relevancia.',
      'La relevancia depende de la consulta; el ranking ordena los documentos candidatos.',
      'La búsqueda semántica recupera por intención, no solo por coincidencia de palabras.',
    ],
    commonError:
      'Suponer que la coincidencia exacta siempre es la mejor respuesta. Un documento sin los términos literales puede ser más relevante si responde a la intención de la consulta.',
    sourcePages: ['Tema 1.5 · pp. 38–40'],
    practiceQuestionIds: ['m5-9-ir-q1', 'm5-9-ir-q2', 'm5-9-ir-q3'],
  },

  // ─────────────────────────────────────────────────────────────────────
  // 1.5.10 Selección del enfoque de resolución
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 'm5-10-eleccion',
    moduleId: '1.5',
    section: '1.5.10',
    title: 'Selección del enfoque de resolución',
    subtitle:
      'Diez preguntas de diagnóstico y un mapa que conecta cada característica del problema con la familia de algoritmos adecuada.',
    learningObjectives: [
      'Aplicar las diez preguntas de diagnóstico antes de elegir un algoritmo.',
      'Relacionar cada característica del problema con el enfoque del capítulo 2.',
      'Justificar por qué la elección del algoritmo depende de la formulación y no del lenguaje.',
    ],
    estimatedMinutes: 8,
    blocks: [
      {
        type: 'paragraph',
        text: 'La elección del algoritmo depende de la formulación y de las propiedades del problema, no del lenguaje de programación. Antes de decidir, conviene recorrer un cuestionario que obliga a explicitar la forma del problema.',
      },
      {
        type: 'callout',
        variant: 'source',
        title: 'Fuente',
        text: 'Tema 1.5 · pp. 41–42.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Diez preguntas de diagnóstico',
      },
      {
        type: 'list',
        ordered: true,
        items: [
          '¿Se requiere una respuesta sí/no, una solución válida, todas las soluciones o la mejor solución?',
          '¿Las decisiones son discretas, continuas o mixtas?',
          '¿Existen restricciones duras y blandas?',
          '¿El problema puede representarse como un grafo, una matriz, una secuencia o una asignación?',
          '¿Se conoce el estado inicial?',
          '¿Se puede identificar claramente el estado meta?',
          '¿Se necesita la solución óptima o basta una solución suficientemente buena?',
          '¿El espacio de soluciones es pequeño o crece explosivamente?',
          '¿Hay información adicional que permita estimar qué alternativas son más prometedoras?',
          '¿Se tiene límite de tiempo, memoria o recursos de cómputo?',
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Mapa de decisión: de la forma del problema al algoritmo',
      },
      {
        type: 'table',
        headers: ['Característica del problema', 'Enfoque que se estudiará después'],
        rows: [
          ['Explorar niveles y obtener el menor número de pasos', 'Búsqueda primero en amplitud (BFS)'],
          ['Explorar profundamente usando poca memoria', 'Búsqueda primero en profundidad (DFS)'],
          ['Contar con una estimación de cercanía a la meta', 'Búsqueda heurística o A*'],
          ['Requiere una solución factible con muchas restricciones', 'Backtracking y búsqueda en CSP'],
          ['Buscar una solución óptima en un espacio combinatorio moderado', 'Ramificación y poda'],
          ['Espacio demasiado grande donde basta una solución de alta calidad', 'Hill climbing, recocido simulado o búsqueda tabú'],
          ['Explorar muchas soluciones simultáneamente', 'Algoritmos genéticos y búsquedas poblacionales'],
        ],
        caption: 'Tema 1.5 · p. 42. El mapa conecta cada característica con la familia de algoritmos del capítulo 2.',
      },
      {
        type: 'callout',
        variant: 'key',
        title: 'Idea de cierre',
        text: 'Formular primero, elegir después. Un mismo problema puede resolverse con enfoques distintos según las restricciones de tiempo, memoria y la garantía que se necesite.',
      },
      {
        type: 'callout',
        variant: 'didactic',
        title: 'Ampliación didáctica',
        text: 'Las diez preguntas funcionan como lista de verificación, no como receta. En la práctica muchas respuestas son «depende»: cuando el espacio es grande y no se exige optimalidad, una metaheurística suele ser mejor que un método exacto, aunque no garantice el óptimo. Documentar esas concesiones es parte de la formulación.',
      },
    ],
    keyTerms: [
      {
        term: 'Diagnóstico del problema',
        definition:
          'Cuestionario que caracteriza la forma de la respuesta, las decisiones, las restricciones y el tamaño del espacio antes de elegir algoritmo.',
      },
      {
        term: 'Mapa de decisión',
        definition:
          'Correspondencia entre características del problema y familias de algoritmos de búsqueda.',
      },
      {
        term: 'Búsqueda informada',
        definition: 'Búsqueda que usa una estimación de cercanía a la meta para guiarse, como A*.',
      },
    ],
    recap: [
      'Las diez preguntas de diagnóstico explicitan qué forma tiene la respuesta, las decisiones y el espacio.',
      'Cada característica del problema sugiere una familia del capítulo 2 (BFS, DFS, A*, CSP, ramificación y poda, metaheurísticas).',
      'La elección del algoritmo depende de la formulación y de las propiedades del problema, no del lenguaje.',
    ],
    commonError:
      'Elegir el algoritmo por moda o familiaridad sin responder el diagnóstico. Un problema de factibilidad con muchas restricciones no necesita un optimizador; necesita una búsqueda con restricciones.',
    sourcePages: ['Tema 1.5 · pp. 41–42'],
    practiceQuestionIds: ['m5-10-eleccion-q1', 'm5-10-eleccion-q2', 'm5-10-eleccion-q3'],
  },

  // ─────────────────────────────────────────────────────────────────────
  // 1.5.11 Taller integrador
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 'm5-11-taller',
    moduleId: '1.5',
    section: '1.5.11',
    title: 'Taller integrador: formular antes de programar',
    subtitle:
      'Una especificación completa de un problema real —cinco desarrolladores y ocho historias de usuario— sin escribir una sola línea de código.',
    learningObjectives: [
      'Aplicar todos los elementos de formulación a un caso de ingeniería de software.',
      'Distinguir soluciones factibles y óptimas dentro de una especificación realista.',
      'Reconocer los errores frecuentes al formular un problema.',
      'Comunicar una formulación completa antes de implementar.',
    ],
    estimatedMinutes: 12,
    blocks: [
      {
        type: 'paragraph',
        text: 'El taller reúne todo el capítulo. Una empresa debe asignar **cinco desarrolladores a ocho historias de usuario**. Cada historia tiene esfuerzo estimado, prioridad, fecha límite y dependencias; cada desarrollador tiene habilidades y una capacidad máxima de horas por sprint. Se busca una asignación factible que maximice el valor de negocio y minimice el retraso.',
      },
      {
        type: 'callout',
        variant: 'source',
        title: 'Fuente',
        text: 'Tema 1.5 · pp. 43–45.',
      },
      {
        type: 'table',
        headers: ['Elemento', 'Respuesta esperada'],
        rows: [
          ['Nombre del problema', 'Asignación de historias de usuario a desarrolladores'],
          ['Tipo de problema', 'Optimización combinatoria con restricciones'],
          ['Datos de entrada', 'Historias, prioridades, estimaciones, habilidades, capacidad, dependencias'],
          ['Variables de decisión', 'Desarrollador asignado y sprint de ejecución de cada historia'],
          ['Dominio de variables', 'Desarrolladores y sprints disponibles'],
          ['Restricciones duras', 'Capacidad, dependencias, compatibilidad de habilidades'],
          ['Restricciones blandas', 'Equilibrar carga, respetar preferencias, reducir cambios de contexto'],
          ['Función objetivo', 'Maximizar valor entregado y minimizar retraso'],
          ['Representación', 'Tabla de asignación, grafo de dependencias y matriz de habilidades'],
          ['Solución factible', 'Cumple capacidades y dependencias'],
          ['Solución óptima', 'Maximiza valor bajo las restricciones'],
          ['Posible estrategia', 'Búsqueda con restricciones, heurística o metaheurística'],
          ['Criterios de evaluación', 'Factibilidad, valor total, retraso, equilibrio de carga'],
        ],
        caption: 'Tema 1.5 · p. 43. Las trece piezas de una formulación completa, sin escribir código.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Seis ejercicios para consolidar la formulación',
      },
      {
        type: 'list',
        ordered: true,
        items: [
          '**Clasificación de problemas.** Clasifica como decisión, factibilidad, optimización, enumeración, conteo o ranking: conexión entre dos computadoras; horario de exámenes sin traslapes; distribución de paquetes de menor costo; todas las contraseñas de cuatro caracteres; cuántos caminos hay entre dos nodos; documentos por relevancia.',
          '**Variables, dominios y restricciones.** Para un horario semanal de tres materias, identifica variables, dominios, restricciones duras, blandas y un posible objetivo.',
          '**Mochila aplicada a software.** Con 40 horas y seis funcionalidades (registro 8 h/valor 9; inicio de sesión 6/8; perfil 10/6; reportes 16/10; notificaciones 12/7; panel 18/8), formula variables, restricción, objetivo, dos soluciones factibles, una no factible y la mejor manual.',
          '**Grafo de rutas.** Con un mapa simplificado de la universidad, representa ubicaciones como nodos, caminos como aristas, asigna tiempos e identifica rutas factibles y la de menor tiempo; explica qué cambia con calles bloqueadas o tiempos variables.',
          '**Formulación de un Sudoku.** Describe variables, dominio, restricciones, estado inicial, estado meta, espacio de búsqueda aproximado y una estrategia adecuada.',
          '**Búsqueda documental.** Diseña un buscador para los documentos de una materia: corpus, cinco consultas, criterio de relevancia, limitaciones de la coincidencia exacta y tratamiento de sinónimos y errores ortográficos.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Errores frecuentes al formular',
      },
      {
        type: 'table',
        headers: ['Error frecuente', 'Cómo evitarlo'],
        rows: [
          ['No definir con precisión el estado', 'Escribir qué información describe cada estado y qué lo diferencia de otro'],
          ['No distinguir restricciones de objetivo', 'Separar lo que no puede violarse de lo que solo se desea mejorar'],
          ['Confundir ruta más corta con ruta de menor costo', 'Acordar la función objetivo antes de comparar alternativas'],
          ['No especificar qué constituye la meta', 'Enunciar la condición exacta de éxito'],
          ['Elegir una representación inadecuada', 'Comprobar que la representación captura decisiones y restricciones'],
          ['Usar búsqueda exhaustiva cuando el espacio es inmanejable', 'Estimar el tamaño del espacio antes de elegir la estrategia'],
          ['Intentar optimizar sin función objetivo', 'Definir cómo se mide la calidad de una solución'],
        ],
        caption: 'Tema 1.5 · p. 45. Repaso por contraste: cada error se anticipa con una decisión explícita.',
      },
      {
        type: 'callout',
        variant: 'key',
        title: 'Lo imprescindible del capítulo',
        text: 'Formular es decidir qué se conserva, qué se elige, qué se respeta y qué se mejora. Si esas cuatro respuestas están por escrito, el algoritmo es un detalle de implementación; si faltan, ningún algoritmo salvará el resultado.',
      },
    ],
    keyTerms: [
      {
        term: 'Taller integrador',
        definition:
          'Especificación completa de un problema real que reúne datos, variables, dominios, restricciones, objetivo, representación y estrategia.',
      },
      {
        term: 'Especificación de problema',
        definition:
          'Documento que describe todos los elementos de la formulación antes de escribir código.',
      },
      {
        term: 'Historia de usuario',
        definition:
          'Unidad de trabajo con esfuerzo estimado, prioridad, fecha límite y dependencias que debe asignarse a un desarrollador.',
      },
    ],
    recap: [
      'El taller exige una especificación completa de trece piezas: del nombre del problema a los criterios de evaluación.',
      'Factible significa cumplir capacidades y dependencias; óptima significa además maximizar valor y minimizar retraso.',
      'Los seis ejercicios consolidan clasificación, variables y dominios, mochila, grafos de rutas, Sudoku y búsqueda documental.',
      'Los errores frecuentes casi siempre son de formulación: estado impreciso, restricciones y objetivos mezclados o representación inadecuada.',
    ],
    commonError:
      'Empezar a programar con una formulación ambigua. Si no están escritos el estado, la meta, las restricciones y la función objetivo, el resultado correcto es una casualidad, no un logro del algoritmo.',
    sourcePages: ['Tema 1.5 · pp. 43–45'],
    practiceQuestionIds: ['m5-11-taller-q1', 'm5-11-taller-q2', 'm5-11-taller-q3'],
  },
]
