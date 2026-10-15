import type { Lesson } from '@/types/content'

/**
 * Módulo 1.2 — Historia de la Inteligencia Artificial (57 páginas).
 * Lecciones redactadas a partir de `tema-1.2.md` y del mapa de cobertura
 * (`docs/content-map.md`). Toda afirmación con dato lleva página de origen.
 */
export const m2Lessons: Lesson[] = [
  {
    id: 'm2-intro',
    moduleId: '1.2',
    section: 'Introducción',
    title: 'Por qué importa la historia de una disciplina tan joven',
    subtitle:
      'La IA parece recién nacida, pero arrastra dos mil años de imaginación y un patrón de euforia, invierno y resurgimiento que conviene saber leer.',
    learningObjectives: [
      'Explicar por qué conocer la historia de la IA ayuda a entender y a desconfiar de las herramientas actuales.',
      'Reconocer el patrón euforia → invierno → resurgimiento y situar sus repeticiones en el tiempo.',
      'Identificar los errores documentados que se repiten cuando se sobrevenden las capacidades de una tecnología.',
    ],
    estimatedMinutes: 7,
    blocks: [
      {
        type: 'paragraph',
        text: 'La [inteligencia artificial] suele presentarse como una tecnología recién nacida, pero su historia es larga: empieza en los mitos de la Antigüedad, pasa por la lógica matemática del siglo XIX y el diseño de la primera computadora programable, y desemboca en el aprendizaje profundo. Este tema reconstruye ese recorrido en cinco etapas con la idea de que **la historia no es un museo, sino el manual de advertencias del presente**.',
      },
      {
        type: 'callout',
        variant: 'source',
        title: 'Fuente',
        text: 'Antología de Inteligencia Artificial, capítulo 1 (UV, 2026); Tema 1.2 · pp. 2–4.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'La ruta del tema: cinco etapas, un mismo patrón',
      },
      {
        type: 'paragraph',
        text: 'El material organiza el tema en cinco bloques cronológicos y un cierre. Cada sección termina con una **pregunta de comprobación**: si puedes responderla con tus propias palabras, dominas el hito y su causa.',
      },
      {
        type: 'list',
        ordered: true,
        items: [
          '**1.2.1 Los orígenes.** De la Antigüedad a la era moderna: mitos, lógica y las primeras máquinas.',
          '**1.2.2 El nacimiento formal (1950–1970).** Turing, Dartmouth y los primeros programas que «razonaban».',
          '**1.2.3 Los inviernos (1970–1980 y después).** Promesas incumplidas, recortes de fondos y la lección de los sistemas expertos.',
          '**1.2.4 El resurgimiento (1990–2010).** Aprendizaje automático, Big Data y la victoria de Deep Blue.',
          '**1.2.5 La era del Deep Learning (2010–presente).** AlexNet, AlphaGo, los grandes modelos de lenguaje y la IA generativa.',
          '**Cierre.** Qué debe aprender un ingeniero de software de setenta años de historia.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: '¿Por qué estudiar la historia de una disciplina tan joven?',
      },
      {
        type: 'list',
        items: [
          '**Entender el presente.** Las arquitecturas que usas hoy (redes neuronales, transformers) son respuestas a problemas con décadas de historia.',
          '**Reconocer el patrón.** La IA ha alternado euforia, decepción y renacimiento; quien conoce los ciclos evalúa mejor las promesas nuevas.',
          '**Evitar errores ya cometidos.** Sobreventa, expectativas irreales y subestimar el cómputo y los datos son errores documentados que se repiten.',
          '**Criterio profesional.** Un ingeniero que conoce los hitos sabe por qué existen las herramientas que usa y cuándo desconfiar de ellas.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'El patrón que se repite: euforia, invierno, resurgimiento',
      },
      {
        type: 'paragraph',
        text: 'El hilo conductor de todo el tema es un [ciclo] que ya se ha cumplido al menos dos veces. Una demostración espectacular abre la bolsa; las promesas se topan con límites reales; los fondos se recortan y «IA» se vuelve una etiqueta incómoda; después, más datos, más cómputo y mejores algoritmos resuelven lo que antes frenaba al campo, y el ciclo reinicia.',
      },
      {
        type: 'table',
        headers: ['Fase', 'Qué ocurre'],
        rows: [
          [
            '1 · Euforia fundacional',
            'Un avance demuestra algo «imposible». Los medios y los financiadores anticipan una inteligencia general inminente.',
          ],
          [
            '2 · Invierno',
            'Las promesas no se cumplen a tiempo. Los fondos se recortan, los laboratorios cierran y «IA» se vuelve mala palabra.',
          ],
          [
            '3 · Resurgimiento',
            'Nuevos datos, más cómputo y mejores algoritmos resuelven lo que frenó la etapa anterior. El ciclo reinicia.',
          ],
        ],
        caption: 'Esquema del material (Tema 1.2 · p. 4).',
      },
      {
        type: 'callout',
        variant: 'key',
        title: 'Lectura para ingenieros',
        text: 'El ciclo ya ocurrió al menos dos veces (años setenta y finales de los ochenta). La pregunta útil no es qué tecnología es más novedosa, sino **en qué fase estamos hoy y qué evidencia lo respalda**.',
      },
      {
        type: 'interactive',
        component: 'ai-cycle',
        title: 'El ciclo de la IA',
        hint: 'Recorre las fases y observa qué evidencia marca el paso de una a otra.',
      },
      {
        type: 'figure',
        figure: 'timeline-bands',
        caption:
          'Las cinco etapas del tema: orígenes, nacimiento formal, inviernos, resurgimiento y deep learning (Tema 1.2 · p. 2).',
      },
      {
        type: 'callout',
        variant: 'didactic',
        title: 'Ampliación didáctica',
        text: 'El ciclo no es un destino inevitable. En los dos inviernos hubo avances reales que siguieron madurando en silencio, y no siempre se repite igual: la diferencia está en si los datos, el cómputo y los algoritmos coinciden. Cuando veas una promesa de IA, pregúntate qué evidencia medible la sostiene y qué parte todavía no existe.',
      },
    ],
    keyTerms: [
      {
        term: 'Euforia fundacional',
        definition:
          'Primera fase del ciclo: un avance hace pensar que la inteligencia general está a la vuelta de la esquina.',
      },
      {
        term: 'Invierno de la IA',
        definition:
          'Periodo de financiamiento reducido, desinterés público y estancamiento percibido tras una fase de euforia.',
      },
      {
        term: 'Resurgimiento',
        definition:
          'Fase en que más datos, cómputo y mejores algoritmos resuelven lo que bloqueó la etapa anterior y reinician el ciclo.',
      },
      {
        term: 'Ciclo euforia → invierno → resurgimiento',
        definition:
          'Patrón recurrente de la historia de la IA, ocurrido al menos dos veces (años setenta y finales de los ochenta).',
      },
    ],
    recap: [
      'La IA no nació de la nada en 1956: hereda mitos antiguos, lógica del siglo XIX y el diseño de la computadora programable.',
      'La historia sigue un patrón de euforia → invierno → resurgimiento que se ha repetido al menos dos veces.',
      'Conocer el patrón sirve para evaluar promesas nuevas y evitar errores de sobreventa documentados.',
    ],
    commonError:
      'Creer que los inviernos significaron que «la IA no funcionaba». En realidad hubo avances reales; lo que falló fue la brecha entre lo prometido y lo entregado a tiempo.',
    sourcePages: ['Tema 1.2 · pp. 2–4'],
    practiceQuestionIds: ['m2-intro-q1', 'm2-intro-q2', 'm2-intro-q3'],
  },
  {
    id: 'm2-1-origenes',
    moduleId: '1.2',
    section: '1.2.1',
    title: 'Los orígenes: de los mitos a la primera computadora',
    subtitle:
      'Antes de que existiera la electrónica ya estaban los tres ingredientes conceptuales de la IA: el sueño, el formalismo matemático y la máquina programable.',
    learningObjectives: [
      'Diferenciar los antecedentes míticos, mecánicos y matemáticos de la inteligencia artificial.',
      'Explicar cómo Descartes, Boole, Babbage y Lovelace prepararon el terreno conceptual del cómputo.',
      'Describir la «objeción de Lady Lovelace» y reconocer por qué sigue vigente.',
    ],
    estimatedMinutes: 12,
    blocks: [
      {
        type: 'paragraph',
        text: 'Antes de que existieran las computadoras, la humanidad ya imaginaba seres artificiales con inteligencia, y los filósofos ya preguntaban si el pensamiento podía describirse como un mecanismo. La IA no nació en 1956 de la nada: heredó dos mil años de imaginación y dos siglos de formalización matemática.',
      },
      {
        type: 'callout',
        variant: 'source',
        title: 'Fuente',
        text: 'Antología de Inteligencia Artificial, sección 1.2.1 (UV, 2026); Tema 1.2 · pp. 5–13.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'El sueño ancestral: Talos y los autómatas de Hefesto',
      },
      {
        type: 'paragraph',
        text: 'En el mito griego, [Talos] era un gigante de bronce forjado por [Hefesto] para proteger Creta: recorría la isla tres veces al día y arrojaba piedras a los invasores. Tenía una sola vena con icor —el «fluido vital» de los dioses— sellada con un clavo, y Medea lo derrotó explotando ese único punto débil. En La Ilíada, Hefesto construía sirvientes de oro con inteligencia y voz, y trípodes que se movían solos hacia los banquetes de los dioses.',
      },
      {
        type: 'callout',
        variant: 'key',
        title: 'Por qué importa un mito',
        text: 'El relato ya contiene las preguntas de ingeniería actuales: **autonomía** (Talos opera sin supervisión), **suministro de energía o información** (el icor) y **seguridad** (Medea ataca el punto único de falla, como en un sistema moderno).',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Del mito a la mecánica: dos milenios de autómatas',
      },
      {
        type: 'table',
        headers: ['Época', 'Artefacto / autor', 'Qué aportó a la idea de IA'],
        rows: [
          [
            's. I d. C.',
            'Herón de Alejandría',
            'Autómatas hidráulicos y de vapor «programables» con cuerdas y pesas: teatro mecánico que repetía secuencias.',
          ],
          [
            '1206',
            'Al-Jazarí',
            'Libro de los mecanismos ingeniosos: autómatas musicales y sirvientes; la programación como levas intercambiables.',
          ],
          [
            'c. 1495',
            'Leonardo da Vinci',
            'Diseño de un «caballero robot» articulado con poleas: la anatomía humana pensada como mecanismo replicable.',
          ],
          [
            '1739',
            'Jacques de Vaucanson',
            'El pato mecánico que «comía y digería»; autómatas como demostración pública de que la vida imita a la máquina.',
          ],
          [
            '1770',
            'El Turco Mecánico (von Kempelen)',
            '«Autómata» ajedrecista que derrotaba a nobles: era un fraude con un humano oculto. Primera lección: evalúa siempre al sistema.',
          ],
        ],
        caption:
          'Patrón común: cada generación usa su tecnología más avanzada (hidráulica, relojería, hoy chips) como metáfora y material para imitar la vida y la mente (Tema 1.2 · p. 7).',
      },
      {
        type: 'callout',
        variant: 'error',
        title: 'Error histórico que se repite',
        text: 'El Turco Mecánico parecía un sistema autónomo imbatible y no lo era. Confiar en la apariencia de inteligencia sin revisar cómo funciona sigue siendo un error frecuente, ahora con modelos que «suenan» seguros.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Descartes, Boole, Babbage y Lovelace: mecanizar, formalizar y computar',
      },
      {
        type: 'paragraph',
        text: 'En el siglo XVII, [René Descartes] propuso que el cuerpo humano es un mecanismo comparable a los autómatas hidráulicos de los jardines de su época: los movimientos y reflejos se explican por la disposición de los órganos, como los de un reloj. Pero reservó la mente para una sustancia inmaterial (res cogitans), el famoso [dualismo] que ya vimos en 1.1.3. Su legado para la IA es ambiguo: dejó la idea de que lo biológico es mecanizable y, a la vez, la duda de que la mente lo sea. En el Discurso del método (1637) anticipó un proto-Test de Turing al imaginar máquinas que no podrían usar el lenguaje ni razonar como nosotros. Más tarde, [George Boole], matemático autodidacta, publicó The Laws of Thought (1854) y demostró que el razonamiento lógico puede expresarse con operaciones algebraicas sobre dos valores: verdadero y falso. El [álgebra booleana] redujo inferencias («si A y B, entonces C») a cálculo simbólico mecánico, sin interpretación humana.',
      },
      {
        type: 'paragraph',
        text: 'Tras sus máquinas de diferencias, [Charles Babbage] diseñó en 1837 la [Máquina Analítica], el primer diseño de computadora programable de propósito general, un siglo antes de que la tecnología pudiera construirla. Su arquitectura ya separaba tres elementos que hoy siguen organizando cualquier computadora.',
      },
      {
        type: 'table',
        headers: ['Componente', 'Qué era', 'Equivalente actual'],
        rows: [
          [
            'El molino (mill)',
            'Unidad aritmética de engranes',
            'La CPU mecánica',
          ],
          [
            'El almacén (store)',
            'Mil números de 50 dígitos en columnas de engranes',
            'La memoria',
          ],
          [
            'Tarjetas perforadas',
            'Entrada de programas y datos, idea tomada del telar de Jacquard',
            'El software',
          ],
        ],
        caption:
          'Separar hardware, memoria y programa es la decisión de arquitectura que hace posible toda la computación —y por tanto la IA— (Tema 1.2 · p. 10). La máquina nunca se completó: el diseño superó a la manufactura de su época.',
      },
      {
        type: 'quote',
        text: '«La Máquina Analítica no pretende crear nada. Puede hacer todo lo que sepamos ordenarle… pero no puede originar nada por sí misma.»',
        attribution: 'Ada Lovelace, Nota G de sus notas de 1843; citada por Turing (1950) como «la objeción de Lady Lovelace».',
      },
      {
        type: 'callout',
        variant: 'didactic',
        title: 'Ampliación didáctica',
        text: 'Ada Lovelace también describió cómo la Máquina Analítica calcularía los números de Bernoulli —considerado el primer programa de computadora de la historia— y vio que una máquina que manipula símbolos, y no solo cifras, podría componer música o procesar cualquier información. Su objeción sobre la creatividad se reabre cada vez que un modelo generativo produce algo que nadie le escribió de forma explícita.',
      },
    ],
    keyTerms: [
      {
        term: 'Autómata',
        definition:
          'Máquina que imita los movimientos de un ser vivo. Talos, los sirvientes de Hefesto y el pato de Vaucanson son ejemplos míticos y mecánicos.',
      },
      {
        term: 'Dualismo cartesiano',
        definition:
          'Postura de Descartes según la cual el cuerpo es un mecanismo (res extensa) y la mente una sustancia inmaterial (res cogitans).',
      },
      {
        term: 'Álgebra booleana',
        definition:
          'Álgebra de Boole (1854) que reduce el razonamiento lógico a operaciones sobre dos valores, verdadero y falso.',
      },
      {
        term: 'Máquina Analítica',
        definition:
          'Diseño de computadora programable de propósito general de Babbage (1837), con molino, almacén y tarjetas perforadas; nunca se completó.',
      },
      {
        term: 'Objeción de Lady Lovelace',
        definition:
          'Idea de que la máquina no origina nada por sí misma, solo ejecuta lo ordenado. Turing la citó como una de las objeciones al pensamiento mecánico.',
      },
    ],
    recap: [
      'Los mitos (Talos, Hefesto) muestran que la IA responde a un anhelo antiguo, no a una moda.',
      'Descartes planteó que lo biológico es mecanizable y dudó de que la mente lo sea; Boole convirtió el razonamiento en cálculo simbólico.',
      'Babbage separó hardware, memoria y programa; Lovelace escribió el primer algoritmo y planteó su objeción sobre la creatividad.',
      'Para 1950 ya existían el sueño, el formalismo y la máquina: solo faltaba la electrónica.',
    ],
    commonError:
      'Suponer que la historia de la IA empieza en 1956, o creer que la Máquina Analítica llegó a construirse y funcionar. Fue un diseño en papel: murió sin completarse porque adelantó un siglo a su manufactura.',
    sourcePages: ['Tema 1.2 · pp. 5–13'],
    practiceQuestionIds: ['m2-1-origenes-q1', 'm2-1-origenes-q2', 'm2-1-origenes-q3'],
  },
  {
    id: 'm2-2-nacimiento',
    moduleId: '1.2',
    section: '1.2.2',
    title: 'El nacimiento formal: Turing, Dartmouth y la primera generación',
    subtitle:
      'En dos décadas la IA pasó de pregunta filosófica a campo con nombre, laboratorios y programas que demostraban teoremas —y promesas que no podría cumplir.',
    learningObjectives: [
      'Explicar cómo Turing (1950) convirtió una pregunta filosófica en un criterio operativo.',
      'Describir el taller de Dartmouth (1956) y la conjetura central que fundó la disciplina.',
      'Identificar los primeros programas y reconocer por qué el optimismo se desbordó.',
    ],
    estimatedMinutes: 13,
    blocks: [
      {
        type: 'paragraph',
        text: 'Entre 1950 y 1970 la inteligencia artificial dejó de ser una pregunta filosófica para convertirse en un campo con nombre propio. Ese nacimiento fue vertiginoso y también fundó un problema que reaparece en cada etapa: la distancia entre lo que un sistema demuestra en un dominio acotado y lo que se le atribuye a la inteligencia en general.',
      },
      {
        type: 'callout',
        variant: 'source',
        title: 'Fuente',
        text: 'Antología de Inteligencia Artificial, sección 1.2.2 (UV, 2026); Tema 1.2 · pp. 14–24.',
      },
      {
        type: 'heading',
        level: 2,
        text: '1950: Turing convierte el mito en pregunta científica',
      },
      {
        type: 'paragraph',
        text: 'En «Computing Machinery and Intelligence» (revista Mind, octubre de 1950), [Alan Turing] propuso sustituir la pregunta metafísica «¿pueden pensar las máquinas?» por un criterio operativo: el [juego de imitación], hoy conocido como Test de Turing (tema 1.1.2). Turing ya había definido en 1936 qué es computable con su máquina universal, y en Bletchley Park había visto máquinas resolver problemas «intelectuales» a escala industrial. En el mismo artículo respondió a nueve objeciones —entre ellas la de Lady Lovelace— y predijo que para el año 2000 las máquinas engañarían a un interrogador promedio el 30 % de las veces tras cinco minutos de conversación.',
      },
      {
        type: 'heading',
        level: 2,
        text: '1956: Dartmouth bautiza la disciplina',
      },
      {
        type: 'paragraph',
        text: 'El nombre «Artificial Intelligence» lo acuñó [John McCarthy] en la propuesta de agosto de 1955, para distinguir el proyecto de la cibernética de Wiener y de la teoría de autómatas. El taller se realizó al año siguiente y no fue un congreso con resultados: fue el acta de nacimiento de la disciplina, porque definió el problema, reunió a la primera comunidad y fijó la agenda de las décadas siguientes.',
      },
      {
        type: 'table',
        headers: ['Aspecto', 'Detalle'],
        rows: [
          ['Propuesta', 'Agosto de 1955, solicitando fondos a la Fundación Rockefeller'],
          ['Nombre del campo', '«Artificial Intelligence», acuñado por John McCarthy en 1955'],
          ['Fechas', '18 de junio – 17 de agosto de 1956 (8 semanas)'],
          ['Sede', 'Dartmouth College, Hanover, Nuevo Hampshire (EE. UU.)'],
          ['Convocantes', 'McCarthy, Minsky, Rochester y Shannon'],
          ['Participantes', '≈10–20 investigadores: Newell, Simon, Samuel, Selfridge, Solomonoff…'],
          ['Financiamiento', 'Rockefeller Foundation: USD 7 500 de los 13 500 solicitados'],
        ],
        caption: 'Ficha del taller según el material (Tema 1.2 · p. 16).',
      },
      {
        type: 'list',
        items: [
          '**John McCarthy** (Dartmouth → MIT → Stanford): acuñó «Inteligencia Artificial», creó Lisp (1958) y el tiempo compartido. Premio Turing 1971.',
          '**Marvin Minsky** (MIT AI Lab, cofundador): pionero de las redes neuronales tempranas; con Perceptrons (1969) enfrió sin querer la investigación conexionista. Premio Turing 1969.',
          '**Nathaniel Rochester** (IBM): arquitecto jefe de la IBM 701, la primera computadora científica comercial de IBM, sobre la que corrió el programa de damas de Samuel.',
          '**Claude Shannon** (Bell Labs, MIT): padre de la teoría de la información (1948); en 1950 ya publicaba cómo programar una máquina para jugar ajedrez. El puente entre lógica, circuitos y comunicación.',
        ],
      },
      {
        type: 'quote',
        text: '«Cada aspecto del aprendizaje o cualquier otra característica de la inteligencia puede, en principio, describirse tan precisamente que se puede construir una máquina que lo simule.»',
        attribution: 'Conjetura central de la propuesta de Dartmouth (McCarthy, Minsky, Rochester y Shannon, 31 de agosto de 1955).',
      },
      {
        type: 'callout',
        variant: 'info',
        title: 'Qué afirma la conjetura y qué no',
        text: '**Afirma** que la inteligencia es formalizable: existe una descripción precisa (un algoritmo) de lo que hacemos al aprender y razonar. **No afirma** que sea fácil ni inminente; de hecho la propuesta pedía dos meses y diez personas, y la historia mostró que el plazo real se mide en décadas.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'La primera generación de programas (1956–1970)',
      },
      {
        type: 'table',
        headers: ['Año', 'Sistema', 'Qué demostró'],
        rows: [
          ['1956', 'Logic Theorist (Newell, Shaw y Simon · RAND)', 'Demostración automática de teoremas con heurísticas: demostró 38 de los primeros 52 teoremas de los Principia Mathematica.'],
          ['1957', 'Perceptrón (Frank Rosenblatt · Cornell)', 'Primera red neuronal entrenable: aprende a clasificar patrones.'],
          ['1957', 'GPS (Newell y Simon · RAND)', 'Resolución general de problemas por medios y fines.'],
          ['1952–62', 'Programa de damas (Arthur Samuel · IBM)', 'Aprendizaje por autojuego; en 1962 venció al campeón estatal Robert Nealey. Acuñó «machine learning» en 1959.'],
          ['1966', 'ELIZA (Joseph Weizenbaum · MIT)', 'Conversación por patrones; produjo el «efecto ELIZA», la tendencia a proyectar comprensión.'],
          ['1968–70', 'SHRDLU (Terry Winograd · MIT)', 'Lenguaje natural en el «mundo de bloques» —y sus límites.'],
        ],
        caption:
          'Dos linajes nacen aquí y coexisten hasta hoy: el simbólico (lógica y reglas) y el conexionista (redes neuronales del perceptrón) (Tema 1.2 · p. 23).',
      },
      {
        type: 'paragraph',
        text: 'Vale precisar un detalle: en algunos textos se habla del «programa de ajedrez de Samuel», pero en rigor su juego eran las **damas** (checkers). Su programa aprendía jugando miles de partidas contra sí mismo y ajustando los pesos de su función de evaluación, el ancestro directo del aprendizaje por refuerzo que AlphaGo usaría sesenta años después. Con [ELIZA], Weizenbaum creó un supuesto psicoterapeuta con patrones de texto que no entendía una sola palabra; muchos usuarios le atribuían empatía incluso sabiendo que era un programa, y el propio Weizenbaum, alarmado, se volvió crítico de la IA.',
      },
      {
        type: 'callout',
        variant: 'warning',
        title: 'El optimismo desbordado',
        text: 'Herbert Simon escribió en 1965 que «en veinte años las máquinas serán capaces de hacer cualquier trabajo que un hombre pueda hacer», y Minsky en 1967 que el problema de crear IA estaría «sustancialmente resuelto» dentro de una generación. En 1970 fue más lejos: «en tres a ocho años tendremos una máquina con la inteligencia general de un ser humano promedio». **Ninguna de esas predicciones se cumplió.** El patrón: los éxitos en dominios acotados (teoremas, juegos, bloques) se extrapolaron sin evidencia a la inteligencia general, y esa extrapolación indebida tuvo un costo en credibilidad y financiamiento.',
      },
    ],
    keyTerms: [
      {
        term: 'Juego de imitación',
        definition:
          'Criterio operativo propuesto por Turing (1950) para reemplazar «¿pueden pensar las máquinas?»: un interrogador no debe poder distinguir a la máquina de una persona por la conversación.',
      },
      {
        term: 'Conjetura central de Dartmouth',
        definition:
          'Afirmación de 1955 de que todo aspecto de la inteligencia puede describirse con tal precisión que una máquina pueda simularlo.',
      },
      {
        term: 'Logic Theorist',
        definition:
          'Programa de Newell y Simon (1956) que demostró teoremas de los Principia Mathematica usando heurísticas; considerado el primer programa de IA.',
      },
      {
        term: 'Machine learning',
        definition:
          'Término acuñado por Arthur Samuel en 1959 para programas que aprenden de la experiencia sin ser programados explícitamente para cada caso.',
      },
      {
        term: 'Efecto ELIZA',
        definition:
          'Tendencia humana a atribuir comprensión, empatía o incluso conciencia a un sistema que solo sigue patrones.',
      },
      {
        term: 'Perceptrón',
        definition:
          'Primera red neuronal entrenable, de Frank Rosenblatt (1957), capaz de aprender a clasificar patrones.',
      },
    ],
    recap: [
      'Turing (1950) reemplazó la pregunta metafísica por el juego de imitación, un criterio empírico.',
      'Dartmouth (1956) dio nombre a la disciplina y fijó su conjetura central: la inteligencia es formalizable.',
      'Logic Theorist, GPS, el perceptrón, las damas de Samuel y ELIZA fueron éxitos reales, pero acotados a dominios cerrados.',
      'El optimismo de Simon y Minsky extrapoló esos éxitos sin evidencia y sembró el invierno siguiente.',
    ],
    commonError:
      'Confundir la conjetura de Dartmouth («la inteligencia puede describirse con precisión») con la promesa de lograrlo pronto. La propuesta pedía dos meses y diez personas; justo eso es lo que no ocurrió.',
    sourcePages: ['Tema 1.2 · pp. 14–24'],
    practiceQuestionIds: ['m2-2-nacimiento-q1', 'm2-2-nacimiento-q2', 'm2-2-nacimiento-q3', 'm2-2-nacimiento-q4'],
  },
  {
    id: 'm2-3-inviernos',
    moduleId: '1.2',
    section: '1.2.3',
    title: 'Los inviernos: muros técnicos y sistemas expertos',
    subtitle:
      'Cuando las promesas no llegaron, los fondos se secaron. En medio del hielo floreció la industria de los sistemas expertos, que a su vez preparó el segundo invierno.',
    learningObjectives: [
      'Explicar las causas técnicas y de expectativas del primer invierno de la IA.',
      'Describir el informe Lighthill (1973) y el ciclo de financiamiento del campo.',
      'Explicar la arquitectura de los sistemas expertos y por qué se agotaron.',
    ],
    estimatedMinutes: 14,
    blocks: [
      {
        type: 'paragraph',
        text: 'Entre las décadas de 1970 y 1990 la IA vivió dos [inviernos]: periodos de financiamiento reducido, desinterés público y estancamiento percibido. No fueron simples fracasos técnicos: fueron la factura de promesas desmedidas, amplificada por límites reales de cómputo, datos y métodos.',
      },
      {
        type: 'callout',
        variant: 'source',
        title: 'Fuente',
        text: 'Antología de Inteligencia Artificial, sección 1.2.3 (UV, 2026); Tema 1.2 · pp. 25–34.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Primer invierno: tres muros técnicos',
      },
      {
        type: 'table',
        headers: ['Muro', 'Qué pasó'],
        rows: [
          [
            '01 · Cómputo y memoria insuficientes',
            'Las máquinas de los sesenta tenían kilobytes de memoria. Problemas triviales en teoría eran imposibles en la práctica.',
          ],
          [
            '02 · Explosión combinatoria',
            'Los métodos que funcionaban en «micromundos» (bloques, teoremas) crecían exponencialmente y colapsaban ante problemas reales.',
          ],
          [
            '03 · Golpes al conexionismo',
            'Perceptrons (Minsky y Papert, 1969) mostró los límites de las redes de una capa (el caso XOR) y la investigación en redes neuronales se detuvo por años.',
          ],
        ],
        caption:
          'Lección de ingeniería: la brecha entre «demostrable en teoría» y «ejecutable en producción» se llama [escalabilidad] (Tema 1.2 · p. 26).',
      },
      {
        type: 'heading',
        level: 2,
        text: '1973: el informe Lighthill',
      },
      {
        type: 'paragraph',
        text: 'El gobierno británico encargó al matemático Sir James Lighthill una evaluación independiente de la IA. Su informe de 1973 fue demoledor: los sistemas lograban resultados en problemas de juguete pero no escalaban al mundo real (la explosión combinatoria, en sus palabras), y los objetivos generales anunciados —traducción, robótica, comprensión del lenguaje— no se habían materializado. Como consecuencia, el Reino Unido recortó drásticamente los fondos y en EE. UU. DARPA endureció sus criterios exigiendo resultados aplicados. Conviene subrayar el matiz: Lighthill no dijo que la IA fuera imposible; dijo que **no escalaba con los métodos de la época**. Su diagnóstico era correcto, y los métodos cambiaron.',
      },
      {
        type: 'callout',
        variant: 'key',
        title: 'El mecanismo del invierno',
        text: '1) Promesas públicas ambiciosas → 2) evaluación externa escéptica → 3) recorte de fondos públicos → 4) cierre de laboratorios → 5) «IA» se vuelve una palabra tóxica. La salud de un campo depende de calibrar expectativas: es una habilidad de gestión, no solo de ciencia.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'El ciclo de financiamiento',
      },
      {
        type: 'list',
        ordered: true,
        items: [
          '**Euforia (1956–1969).** Fondos abundantes, promesas enormes, poca rendición de cuentas.',
          '**Primer invierno (1974–1980).** Lighthill; DARPA exige aplicaciones; los fondos básicos se evaporan.',
          '**Boom experto (1980–1987).** Los sistemas expertos venden millones; Japón lanza el proyecto de Quinta Generación (1982).',
          '**Segundo invierno (1987–1993).** Colapso del mercado de las máquinas Lisp.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Sistemas expertos: la IA se vuelve industria',
      },
      {
        type: 'paragraph',
        text: 'La respuesta al invierno fue acotar el dominio: capturar el conocimiento de un especialista humano en reglas SI–ENTONCES y dejar que un motor lo aplique. [Edward Feigenbaum] (Stanford) bautizó esta etapa como la era de la [ingeniería del conocimiento]. Su arquitectura separaba dos piezas que hoy siguen apareciendo en bases de datos, motores de reglas de negocio y sistemas de recomendación.',
      },
      {
        type: 'example',
        title: 'Arquitectura canónica de un sistema experto',
        text: 'Un sistema experto típico encadena conocimiento y mecanismo para producir una recomendación explicable.',
        steps: [
          'Base de conocimiento: reglas SI–ENTONCES extraídas de expertos humanos mediante entrevistas largas y costosas.',
          'Motor de inferencia: encadena reglas hacia adelante o hacia atrás para derivar conclusiones a partir de los hechos.',
          'Recomendación: diagnóstico, configuración o decisión, justificable regla por regla.',
        ],
      },
      {
        type: 'table',
        headers: ['Año', 'Sistema', 'Qué logró'],
        rows: [
          [
            'Años 70',
            'MYCIN (Stanford)',
            'Tesis de Edward Shortliffe (dirigida por Bruce Buchanan): diagnosticaba infecciones sanguíneas y recomendaba antibióticos con ~600 reglas en Lisp y factores de certeza. Alcanzó desempeño comparable al de especialistas, pero nunca se usó clínicamente.',
          ],
          [
            '1978',
            'PROSPECTOR (SRI)',
            'Evaluaba la probabilidad de yacimientos minerales con redes de inferencia; predijo con éxito un depósito de molibdeno en Mount Tolman (Washington).',
          ],
          [
            '1980',
            'XCON / R1 (DEC)',
            'Desarrollado por John McDermott (CMU): configuraba pedidos de sistemas VAX. Creció de ~750 reglas a más de 10 000 y ahorró a DEC decenas de millones de dólares al año.',
          ],
        ],
        caption:
          'Con casos como estos, a mediados de los 80 la industria de sistemas expertos movía cientos de millones de dólares (Tema 1.2 · pp. 30–31).',
      },
      {
        type: 'callout',
        variant: 'warning',
        title: 'Por qué se agotaron (y cómo llegó el segundo invierno)',
        text: '**Cuello de botella del conocimiento:** cada regla debía extraerse entrevistando expertos, meses por dominio. **Fragilidad:** fuera de su dominio estrecho fallaban sin sentido común; el sistema «no sabe que no sabe». **Mantenimiento insostenible:** con miles de reglas cada cambio rompía otras. **Costo de plataforma:** dependían de estaciones Lisp caras. A finales de los 80, las PC de Apple e IBM igualaron su potencia, el mercado de máquinas Lisp (Symbolics, LMI) se desplomó, cientos de empresas cerraron y el proyecto japonés de Quinta Generación terminó en 1992 sin cumplir sus metas: fue el **segundo invierno (1987–1993)**. En el frío, Rumelhart, Hinton y Williams popularizaron backpropagation (1986) y la IA se volvió más estadística y formal.',
      },
    ],
    keyTerms: [
      {
        term: 'Invierno de la IA',
        definition:
          'Periodo de financiamiento reducido y desinterés tras una fase de euforia; el primero se sitúa hacia 1974–1980 y el segundo en 1987–1993.',
      },
      {
        term: 'Informe Lighthill',
        definition:
          'Evaluación independiente de 1973 que concluyó que los sistemas de IA no escalaban al mundo real y detonó recortes drásticos de fondos.',
      },
      {
        term: 'Sistema experto',
        definition:
          'Programa que captura el conocimiento de un especialista humano en reglas SI–ENTONCES y lo aplica a un dominio estrecho.',
      },
      {
        term: 'Base de conocimiento',
        definition:
          'Conjunto de reglas SI–ENTONCES extraídas de expertos humanos; se separa del mecanismo que las aplica.',
      },
      {
        term: 'Motor de inferencia',
        definition:
          'Componente que encadena reglas hacia adelante o hacia atrás para derivar conclusiones a partir de hechos.',
      },
    ],
    recap: [
      'El primer invierno combinó causas técnicas (cómputo, explosión combinatoria, límites del perceptrón) con expectativas infladas.',
      'Lighthill (1973) ilustra cómo una evaluación externa escéptica puede recortar el financiamiento de todo un campo.',
      'Los sistemas expertos (MYCIN, PROSPECTOR, XCON) fueron el primer negocio real de la IA, con base de conocimiento más motor de inferencia.',
      'Se agotaron por fragilidad, mantenimiento y costo; el segundo invierno (1987–1993) depuró el campo hacia métodos estadísticos.',
    ],
    commonError:
      'Atribuir los inviernos solo a «mala tecnología». La causa principal fue la brecha entre lo prometido y lo entregado, amplificada por límites técnicos reales que sí existían.',
    sourcePages: ['Tema 1.2 · pp. 25–34'],
    practiceQuestionIds: ['m2-3-inviernos-q1', 'm2-3-inviernos-q2', 'm2-3-inviernos-q3', 'm2-3-inviernos-q4'],
  },
  {
    id: 'm2-4-resurgimiento',
    moduleId: '1.2',
    section: '1.2.4',
    title: 'El resurgimiento: aprender de los datos (1990–2010)',
    subtitle:
      'Internet inundó el mundo de datos digitales y la estadística reemplazó a las reglas escritas a mano. La IA dejó de programarse: empezó a entrenarse.',
    learningObjectives: [
      'Explicar el cambio de paradigma de reglas escritas por expertos a patrones aprendidos de datos.',
      'Relacionar Big Data (las tres V) y la curva del cómputo con el auge del aprendizaje automático.',
      'Describir el hito de Deep Blue (1997) y distinguir su valor simbólico de su valor técnico.',
    ],
    estimatedMinutes: 11,
    blocks: [
      {
        type: 'paragraph',
        text: 'Tras el segundo invierno llegó el [resurgimiento]. Internet convirtió transacciones, textos e imágenes en datos masivos y baratos, la estadística aportó rigor experimental y la IA dejó de programarse regla por regla: empezó a **entrenarse**. Esta etapa convirtió el machine learning de Samuel en la columna vertebral del software comercial.',
      },
      {
        type: 'callout',
        variant: 'source',
        title: 'Fuente',
        text: 'Antología de Inteligencia Artificial, sección 1.2.4 (UV, 2026); Tema 1.2 · pp. 35–42.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'El cambio de paradigma: de las reglas a los datos',
      },
      {
        type: 'table',
        headers: ['Antes · IA simbólica (1956–1990)', 'Después · Aprendizaje automático (1990→)'],
        rows: [
          [
            'El experto humano escribe las reglas',
            'El algoritmo induce patrones a partir de ejemplos',
          ],
          [
            'El conocimiento es explícito y verificable',
            'El conocimiento es estadístico, almacenado en los pesos',
          ],
          [
            'Frágil fuera del dominio; no mejora solo',
            'Generaliza mejor; mejora con más datos',
          ],
          [
            'Costo: entrevistar expertos, mantener reglas',
            'Costo: recolectar datos, cómputo y validación',
          ],
        ],
        caption: 'Contraste del material (Tema 1.2 · p. 36).',
      },
      {
        type: 'paragraph',
        text: 'Dos motores empujaron el cambio. Primero, **Internet y la digitalización**: la web convirtió transacciones, textos e imágenes en datos masivos y baratos, el combustible que faltaba. Segundo, la **madurez estadística**: el campo adoptó rigor experimental con conjuntos de entrenamiento y prueba, validación cruzada y métricas comparables.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Datos y cómputo: la curva que se aceleró',
      },
      {
        type: 'paragraph',
        text: 'El cómputo de entrenamiento se duplicaba cada **≈2 años** antes de 2012, al ritmo de la ley de Moore. Entre 2012 y 2018 ese ritmo se disparó: duplicación cada **3.4 meses** en los mayores entrenamientos, un crecimiento total de **×300 000** (Amodei y Hernández, OpenAI, mayo de 2018). Esa curva explica por qué métodos que antes eran inviables empezaron a funcionar.',
      },
      {
        type: 'table',
        headers: ['V', 'Significado', 'Por qué habilitó al ML'],
        rows: [
          [
            'Volumen',
            'Terabytes a petabytes de registros',
            'Suficientes ejemplos para entrenar sin escribir reglas',
          ],
          [
            'Velocidad',
            'Datos en flujo continuo (clics, sensores)',
            'Modelos que se actualizan y evalúan en línea',
          ],
          [
            'Variedad',
            'Texto, imagen, audio, logs, video',
            'El ML deja de ser solo tablas: visión, lenguaje, voz',
          ],
        ],
        caption: 'Las tres V de Big Data (Laney, META Group, 2001); Tema 1.2 · p. 37.',
      },
      {
        type: 'heading',
        level: 2,
        text: '1997: Deep Blue vence a Kaspárov',
      },
      {
        type: 'paragraph',
        text: 'El 11 de mayo de 1997, [Deep Blue] (IBM) ganó el match de revancha contra Gari Kaspárov, campeón mundial de ajedrez: **3.5–2.5** en seis partidas. Era una supercomputadora con 480 chips de ajedrez dedicados que evaluaba ~200 millones de posiciones por segundo, con búsqueda en profundidad más ajustes hechos a mano por grandes maestros. Kaspárov había ganado el primer match en 1996 (4–2). La revancha fue el momento en que el público aceptó que una máquina podía superar al mejor humano en un juego de «intelecto puro».',
      },
      {
        type: 'callout',
        variant: 'key',
        title: 'Qué significó realmente',
        text: 'Deep Blue **no aprendía**: era fuerza bruta especializada más ingeniería de dominio. Demostró el poder del cómputo masivo en mundos cerrados y perfectos, pero no aprendizaje ni comprensión; IBM desmanteló el proyecto poco después. Kaspárov reformuló el futuro como «humano con máquina», los centauros del ajedrez avanzado. El contraste que anuncia la siguiente etapa: 1997 gana con reglas afinadas por humanos; 2016 AlphaGo ganará con aprendizaje.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'La caja de herramientas madura',
      },
      {
        type: 'table',
        headers: ['Año', 'Algoritmo', 'Idea que debes recordar'],
        rows: [
          ['1986', 'Backpropagation (Rumelhart, Hinton y Williams)', 'Gradiente eficiente para entrenar redes multicapa.'],
          ['1995', 'Máquinas de vectores de soporte (Cortes y Vapnik)', 'Separar clases con el margen máximo; truco del kernel.'],
          ['1998', 'LeNet convolucional (LeCun et al.)', 'Convoluciones más backprop en un problema real: dígitos manuscritos de cheques.'],
          ['2001', 'Random Forest (Leo Breiman)', 'Ensamble de árboles: la varianza se promedia fuera.'],
          ['2001', 'Gradient Boosting (Jerome Friedman)', 'Ensamble secuencial: cada árbol corrige al anterior.'],
        ],
        caption:
          'Estos algoritmos siguen vivos: en datos tabulares, XGBoost y Random Forest compiten —y a menudo ganan— contra redes neuronales (Tema 1.2 · p. 40).',
      },
      {
        type: 'list',
        items: [
          '**Buscadores web.** PageRank (Google, 1998) ordena la web con la estructura de enlaces; después se suman señales aprendidas.',
          '**Filtros de spam.** Clasificadores bayesianos (finales de los 90) aprenden del correo de millones de usuarios.',
          '**Recomendación.** El Netflix Prize (2006–2009) popularizó el filtrado colaborativo con un premio de USD 1 millón.',
          '**Reconocimiento de patrones.** Bancos y tarjetas adoptan modelos de anomalías entrenados con transacciones históricas.',
          '**Reconocimiento de voz.** Modelos ocultos de Markov y luego redes profundas llevan la voz a los teléfonos (Siri, 2011).',
          '**Traducción estadística.** Google Translate (2006) traduce por probabilidades sobre enormes corpus, no por gramáticas.',
        ],
      },
    ],
    keyTerms: [
      {
        term: 'Aprendizaje automático',
        definition:
          'Enfoque en que el algoritmo induce patrones de ejemplos; el conocimiento queda en los pesos y mejora con más datos.',
      },
      {
        term: 'Big Data',
        definition:
          'Conjuntos de datos caracterizados por volumen, velocidad y variedad, que hicieron posible entrenar modelos sin escribir reglas.',
      },
      {
        term: 'Deep Blue',
        definition:
          'Supercomputadora de IBM que en 1997 venció a Kaspárov con búsqueda masiva y conocimiento codificado a mano, sin aprendizaje.',
      },
      {
        term: 'SVM (máquina de vectores de soporte)',
        definition:
          'Clasificador de 1995 (Cortes y Vapnik) que separa clases con el margen máximo y el truco del kernel.',
      },
      {
        term: 'Backpropagation',
        definition:
          'Método de gradiente popularizado en 1986 que hace entrenables las redes neuronales multicapa.',
      },
      {
        term: 'Gradient Boosting',
        definition:
          'Ensamble secuencial de árboles (Friedman, 2001) en el que cada árbol corrige los errores del anterior.',
      },
    ],
    recap: [
      'La IA pasó de reglas escritas por expertos a patrones inducidos de datos: se entrena, no se programa.',
      'Big Data (volumen, velocidad, variedad) y la curva del cómputo fueron los motores del resurgimiento.',
      'Deep Blue (1997) ganó con fuerza bruta y conocimiento de dominio, no con aprendizaje; el ajedrez era un mundo cerrado.',
      'El ML clásico (backpropagation, SVM, LeNet, Random Forest, Gradient Boosting) se volvió infraestructura cotidiana e invisible.',
    ],
    commonError:
      'Creer que Deep Blue «aprendía». No lo hacía: era búsqueda masiva más conocimiento codificado a mano por grandes maestros.',
    sourcePages: ['Tema 1.2 · pp. 35–42'],
    practiceQuestionIds: ['m2-4-resurgimiento-q1', 'm2-4-resurgimiento-q2', 'm2-4-resurgimiento-q3'],
  },
  {
    id: 'm2-5-deep-learning',
    moduleId: '1.2',
    section: '1.2.5',
    title: 'La era del Deep Learning: de AlexNet a la IA generativa',
    subtitle:
      'Redes profundas, GPU y datos masivos rompieron todos los récords y llevaron la IA del laboratorio a la vida cotidiana de mil millones de personas.',
    learningObjectives: [
      'Explicar por qué AlexNet (2012) marcó el punto de inflexión del deep learning.',
      'Identificar los tres ingredientes que coincidieron en la revolución profunda.',
      'Trazar el linaje Transformer → GPT → ChatGPT y situar la primera regulación integral (2024).',
    ],
    estimatedMinutes: 14,
    blocks: [
      {
        type: 'paragraph',
        text: 'La etapa en la que trabajarás profesionalmente es la del [deep learning]. Su detonante fue una convergencia: redes neuronales profundas, GPU y datos masivos. En esta sección seguimos el hilo que va de AlexNet (2012) a AlphaGo (2016), el Transformer (2017), ChatGPT (2022) y la primera regulación integral, la Ley de IA europea (2024).',
      },
      {
        type: 'callout',
        variant: 'source',
        title: 'Fuente',
        text: 'Antología de Inteligencia Artificial, sección 1.2.5 (UV, 2026); Tema 1.2 · pp. 43–53.',
      },
      {
        type: 'heading',
        level: 2,
        text: '2012: AlexNet y el «momento Big Bang»',
      },
      {
        type: 'paragraph',
        text: 'En el concurso ImageNet (ILSVRC), que consistía en clasificar 1.2 millones de imágenes en 1000 categorías, [AlexNet] —de Alex Krizhevsky, Ilya Sutskever y Geoffrey Hinton (Universidad de Toronto)— redujo el error top-5 a **15.3 %**, cuando el segundo lugar quedó en **26.2 %**. Era una red neuronal convolucional de 8 capas y 60 millones de parámetros, entrenada en dos GPU de consumo (NVIDIA GTX 580) durante cinco o seis días. El margen fue tan grande que la comunidad de visión por computadora adoptó el deep learning de forma casi inmediata.',
      },
      {
        type: 'table',
        headers: ['Año', 'Ganador de ILSVRC', 'Error top-5'],
        rows: [
          ['2010', 'Métodos clásicos', '28.2 %'],
          ['2011', 'Métodos clásicos', '25.7 %'],
          ['2012', 'AlexNet', '15.3 %'],
          ['2014', 'GoogLeNet', '6.7 %'],
          ['2015', 'ResNet', '3.6 %'],
        ],
        caption:
          'Cada barra es el error del ganador. Entre 2010 y 2011 se mejoraba ~2 puntos por año con métodos clásicos; AlexNet bajó 10 puntos de golpe. En 2015 ResNet (3.6 %) ya supera la referencia humana estimada (~5.1 %) en esta tarea (Tema 1.2 · p. 45).',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Los tres ingredientes de la revolución profunda',
      },
      {
        type: 'table',
        headers: ['Ingrediente', 'Qué aportó'],
        rows: [
          [
            'Datos',
            'ImageNet (14 millones de imágenes etiquetadas, proyecto de Fei-Fei Li, 2009), corpus web y Wikipedia: conjuntos masivos y etiquetados listos para entrenar y comparar.',
          ],
          [
            'Cómputo',
            'Las GPU, diseñadas para videojuegos, resultaron perfectas para el álgebra lineal masiva y multiplicaron por decenas la velocidad de entrenamiento.',
          ],
          [
            'Algoritmos',
            'Backpropagation madura más mejoras prácticas: ReLU, dropout y mejores inicializaciones hicieron entrenables las redes profundas.',
          ],
        ],
        caption: 'Los tres ingredientes (LeCun, Bengio y Hinton, Nature, 2015); Tema 1.2 · p. 46.',
      },
      {
        type: 'callout',
        variant: 'didactic',
        title: 'Ampliación didáctica',
        text: 'Ninguno de los tres ingredientes era nuevo en 2012: la backpropagation data de 1986, las convoluciones de 1998 y las GPU existían desde años antes. Lo nuevo fue su **coincidencia a escala**. La lección para un ingeniero es vigilar las convergencias, no solo los inventos aislados. Un dato histórico útil: Hinton había defendido las redes neuronales desde los años 80 y atravesó ambos inviernos; en 2018 recibió el Premio Turing con LeCun y Bengio, y en 2024 el Nobel de Física.',
      },
      {
        type: 'heading',
        level: 2,
        text: '2016–2017: AlphaGo y el nacimiento del Transformer',
      },
      {
        type: 'paragraph',
        text: 'El Go fue durante décadas el juego «inabordable»: su árbol de búsqueda supera al del ajedrez por órdenes de magnitud y la intuición domina sobre el cálculo. En marzo de 2016, [AlphaGo] (DeepMind) venció **4–1** a Lee Sedol, 18 veces campeón mundial, en Seúl, ante 200 millones de espectadores. Combinaba redes profundas, búsqueda de árbol de Montecarlo y autojuego: aprendió de partidas humanas y luego jugando contra sí mismo. En la segunda partida colocó la célebre **jugada 37**, que los comentaristas juzgaron un error —estimaban una probabilidad de 1 en 10 000 de que un humano la jugara— y que resultó decisiva; los profesionales la llamaron «no humana», hermosa y creativa. En la cuarta partida Lee Sedol ganó con la jugada 78, «el toque de Dios», y en 2017 AlphaGo Zero aprendió solo con autojuego, sin datos humanos, y superó a su predecesor.',
      },
      {
        type: 'paragraph',
        text: 'En 2017, ocho investigadores de Google (Vaswani et al.) propusieron una arquitectura para traducción que eliminaba la recurrencia: en lugar de procesar palabra por palabra, el mecanismo de [atención] compara todas las palabras entre sí, en paralelo. Las consecuencias fueron enormes: entrenamiento masivamente paralelo en GPU, contexto largo (cada token «atiende» a los demás) y escalabilidad, de modo que más datos y más capas siguen mejorando el modelo. Casi todo LLM actual es un Transformer entrenado para predecir el siguiente token.',
      },
      {
        type: 'list',
        items: [
          '**2018.** BERT (Google) y GPT-1 (OpenAI) aplican el Transformer a la comprensión y a la generación de lenguaje.',
          '**2019.** GPT-2 alcanza 1 500 millones de parámetros.',
          '**2020.** GPT-3 llega a 175 000 millones de parámetros.',
          '**2022 →.** ChatGPT, GPT-4 (que en 2023 añade multimodalidad), Claude, Gemini y modelos abiertos como Llama.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: '2022–2024: ChatGPT, IA generativa y regulación',
      },
      {
        type: 'paragraph',
        text: 'ChatGPT se lanzó el **30 de noviembre de 2022** y cruzó los 100 millones de usuarios activos mensuales en enero de 2023: 2 meses, frente a 9 de TikTok y 30 de Instagram. UBS lo describió como el crecimiento más rápido registrado en una aplicación de consumo. La [IA generativa] salió del laboratorio en tres frentes: **texto** (ChatGPT, GPT-4), **imagen** (DALL·E 2, Midjourney y Stable Diffusion, con modelos de difusión, en 2022) y **código** (GitHub Copilot, 2021–2022, sobre modelos de OpenAI, autocompleta funciones completas en el IDE). El debate abierto es si estos sistemas «entienden» o solo recombinan patrones: es la Habitación China de Searle con millones de usuarios. En **2024** llegó la respuesta institucional: la [Ley de IA de la Unión Europea] (Reglamento 2024/1689), primera regulación integral del mundo, aprobada en 2024 con aplicación escalonada desde 2025 y un enfoque basado en riesgo —prácticas prohibidas, alto riesgo, riesgo limitado y mínimo— con multas de hasta 35 millones de euros o el 7 % de la facturación global. El cumplimiento se implementa en software: registros de datos, trazabilidad, documentación de modelos y evaluación de sesgos.',
      },
    ],
    keyTerms: [
      {
        term: 'Deep learning',
        definition:
          'Aprendizaje con redes neuronales profundas; su detonante en 2012 fue la coincidencia a escala de datos, cómputo y algoritmos.',
      },
      {
        term: 'ImageNet / ILSVRC',
        definition:
          'Conjunto de millones de imágenes etiquetadas y concurso de reconocimiento visual donde AlexNet arrasó en 2012.',
      },
      {
        term: 'Transformer',
        definition:
          'Arquitectura de 2017 (Vaswani et al.) que sustituye la recurrencia por atención en paralelo; base de casi todos los LLM actuales.',
      },
      {
        term: 'Autoatención',
        definition:
          'Mecanismo que compara todos los elementos de una secuencia entre sí, permitiendo contexto largo y entrenamiento paralelo.',
      },
      {
        term: 'IA generativa',
        definition:
          'Rama que crea contenido nuevo (texto, imagen, código) en lugar de solo clasificar o predecir; se masificó con ChatGPT en 2022.',
      },
      {
        term: 'Ley de IA de la UE',
        definition:
          'Reglamento (UE) 2024/1689, primera regulación integral de la IA, con enfoque por niveles de riesgo y aplicación escalonada desde 2025.',
      },
    ],
    recap: [
      'AlexNet (2012) redujo el error en ImageNet a 15.3 % frente al 26.2 % del segundo lugar y detonó el deep learning.',
      'La revolución profunda fue la coincidencia a escala de datos, cómputo y algoritmos, no una sola idea nueva.',
      'AlphaGo (2016) y el Transformer (2017) abrieron el camino a los grandes modelos de lenguaje.',
      'ChatGPT (noviembre de 2022) fue la adopción más rápida registrada; en 2024 llegó la Ley de IA europea.',
    ],
    commonError:
      'Pensar que el deep learning ganó por una sola idea nueva. En 2012 no había un ingrediente inédito: datos, cómputo y algoritmos maduraron y coincidieron a escala.',
    sourcePages: ['Tema 1.2 · pp. 43–53'],
    practiceQuestionIds: [
      'm2-5-deep-learning-q1',
      'm2-5-deep-learning-q2',
      'm2-5-deep-learning-q3',
      'm2-5-deep-learning-q4',
    ],
  },
  {
    id: 'm2-6-repaso',
    moduleId: '1.2',
    section: 'Cierre',
    title: 'Cinco lecciones de setenta años',
    subtitle:
      'La historia de la IA no es un museo: es el manual de advertencias del presente. Estos son los aprendizajes que conviene llevarte a tu práctica profesional.',
    learningObjectives: [
      'Sintetizar las cinco lecciones que deja la historia de la IA.',
      'Ordenar los hitos principales en una línea de tiempo y reconocer su aceleración.',
      'Aplicar el patrón histórico al presente y a las decisiones de ingeniería.',
    ],
    estimatedMinutes: 8,
    blocks: [
      {
        type: 'paragraph',
        text: 'Setenta años de ciclos enseñan lo mismo: las ideas correctas llegan cuando los datos, el cómputo y los algoritmos maduran juntos, y las promesas sin evidencia siempre cobran su factura. El cierre del tema resume el recorrido en cinco lecciones y una línea de tiempo.',
      },
      {
        type: 'callout',
        variant: 'source',
        title: 'Fuente',
        text: 'Antología de Inteligencia Artificial, cierre del tema 1.2 (UV, 2026); Tema 1.2 · pp. 54–55.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Cinco lecciones para tu práctica profesional',
      },
      {
        type: 'list',
        ordered: true,
        items: [
          '**Calibra las expectativas.** Las predicciones de Simon y Minsky fallaron por décadas; evalúa capacidades medibles, no promesas, y documenta los límites de lo que construyes.',
          '**Los datos y el cómputo mandan.** Cada resurgimiento vino de más datos (Internet, ImageNet) y más cómputo (GPU): el rendimiento de un sistema de IA es inseparable de su infraestructura.',
          '**Las ideas «derrotadas» regresan.** Las redes neuronales fueron desechadas dos veces y hoy dominan; no confundas «no funciona aún» con «no funciona nunca».',
          '**El despliegue es el problema difícil.** MYCIN era preciso y nunca se usó en clínica: regulación, responsabilidad e integración pesan tanto como la precisión del modelo.',
          '**La ética y la ley son parte del diseño.** Del efecto ELIZA al AI Act, cada generación redescubre que la IA opera sobre personas; diseña pensando en ellas desde el primer commit.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'La línea de tiempo y la aceleración',
      },
      {
        type: 'paragraph',
        text: 'La observación final del material es la **aceleración**: 62 años separan a Turing (1950) de AlexNet (2012), pero solo doce separan a AlexNet (2012) de la Ley de IA (2024). Cada etapa comprimió la anterior. Fíjate en los hitos: 1950 el juego de imitación; 1956 Dartmouth; 1966 ELIZA; 1980 boom de los sistemas expertos; 1997 Deep Blue; 2012 AlexNet; 2016 AlphaGo; 2017 el paper del Transformer; 2020 GPT-3 con 175 mil millones de parámetros; 2022 ChatGPT y DALL·E 2; 2023–24 GPT-4, Gemini, Claude y el AI Act.',
      },
      {
        type: 'interactive',
        component: 'history-timeline',
        title: 'Línea de tiempo de la historia de la IA',
        hint: 'Agrupa los hitos por periodo (orígenes, nacimiento, invierno, resurgimiento y deep learning) y observa la compresión del tiempo.',
      },
      {
        type: 'quote',
        text: 'La historia de la IA no es un museo: es el manual de advertencias del presente.',
        attribution: 'Cierre del Tema 1.2 (UV, 2026), p. 57.',
      },
      {
        type: 'callout',
        variant: 'key',
        title: 'Lo imprescindible',
        text: 'El ciclo no se evita memorizando fechas, sino entendiendo causas: la coincidencia de datos, cómputo y algoritmos produce los resurgimientos, y la distancia entre promesa y entrega produce los inviernos. Un ingeniero que lo sabe evalúa mejor cualquier anuncio de IA.',
      },
      {
        type: 'list',
        items: [
          '¿Puedes explicar por qué ocurrió cada invierno y no solo cuándo?',
          '¿Puedes nombrar los tres ingredientes de la revolución profunda?',
          '¿Puedes distinguir lo que Deep Blue hizo (búsqueda) de lo que hizo AlphaGo (aprendizaje)?',
          '¿Puedes justificar con evidencia en qué fase del ciclo estamos hoy?',
        ],
      },
    ],
    keyTerms: [
      {
        term: 'Calibración de expectativas',
        definition:
          'Habilidad de gestión, no solo científica, que evita los inviernos al comparar promesas con capacidades medibles.',
      },
      {
        term: 'Escalabilidad',
        definition:
          'Brecha entre «demostrable en teoría» y «ejecutable en producción»; ignorarla fue el error recurrente en los sesenta y hoy.',
      },
      {
        term: 'Convergencia',
        definition:
          'Coincidencia de datos, cómputo y algoritmos maduros que explica los resurgimientos de la IA.',
      },
    ],
    recap: [
      'Las cinco lecciones: calibrar expectativas, vigilar datos y cómputo, no descartar ideas derrotadas, tratar el despliegue como problema difícil y diseñar con ética y ley.',
      'La aceleración se comprime: 62 años de Turing a AlexNet y solo 12 de AlexNet a la Ley de IA.',
      'Los resurgimientos ocurren cuando datos, cómputo y algoritmos maduran juntos.',
    ],
    commonError:
      'Leer la historia como una lista de fechas. El valor está en las causas y en el patrón, no en memorizar años de memoria.',
    sourcePages: ['Tema 1.2 · pp. 54–57'],
    practiceQuestionIds: ['m2-6-repaso-q1', 'm2-6-repaso-q2', 'm2-6-repaso-q3'],
  },
]
