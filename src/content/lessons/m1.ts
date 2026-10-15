import type { Lesson } from '@/types/content'
import { m1Intro } from './m1-intro'

/**
 * Módulo 1.1 — Lecciones restantes (1.1.1 a Cierre).
 * Basadas en el Tema 1.1 · Filosofía de la Inteligencia Artificial (pp. 8–48).
 */
export const m1Rest: Lesson[] = [
  {
    id: 'm1-1-definicion',
    moduleId: '1.1',
    section: '1.1.1',
    title: '¿Qué es la inteligencia artificial y hasta dónde llega?',
    subtitle:
      'La definición de IA, los cuatro enfoques de Russell y Norvig, el agente racional y el continuo de capacidades.',
    learningObjectives: [
      'Definir la inteligencia artificial y explicar qué implica la palabra «normalmente» en esa definición.',
      'Distinguir los cuatro enfoques de Russell y Norvig y reconocer el criterio de éxito y un ejemplo representativo de cada uno.',
      'Describir el ciclo percibir–decidir–actuar de un agente racional y explicar por qué es el paradigma dominante.',
      'Ubicar un sistema actual en el continuo de capacidades y argumentar por qué la IA general sigue sin existir.',
    ],
    estimatedMinutes: 16,
    blocks: [
      {
        type: 'paragraph',
        text: 'La [inteligencia artificial] es el campo dedicado a crear sistemas computacionales capaces de realizar tareas que **normalmente** requieren inteligencia humana. Esa palabra no es un adorno: marca que la frontera de la disciplina se mueve cada vez que una tarea extraordinaria se vuelve cotidiana.',
      },
      {
        type: 'list',
        items: [
          'Razonamiento lógico.',
          'Reconocimiento de patrones visuales.',
          'Aprendizaje a partir de la experiencia.',
          'Toma de decisiones en entornos complejos.',
          'Comprensión del lenguaje natural.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Cuatro enfoques para definir la IA (Russell y Norvig, 2021)',
      },
      {
        type: 'paragraph',
        text: 'Russell y Norvig ordenan las definiciones en dos ejes: qué se pretende (**pensar** o **actuar**) y contra qué se mide (**lo humano** o **un ideal de racionalidad**). De esa combinación salen cuatro enfoques igualmente legítimos; ninguno es «el correcto».',
      },
      {
        type: 'table',
        headers: ['', 'Se mide contra lo humano', 'Se mide contra un ideal de racionalidad'],
        rows: [
          [
            'Pensar',
            '**[Pensar como humano].** Reproducir los procesos cognitivos de la mente. Se estudia con ciencia cognitiva y neurociencia computacional.',
            '**[Pensar racionalmente].** Razonar con lógica irrefutable: inferencia correcta a partir de premisas. Base de los sistemas expertos.',
          ],
          [
            'Actuar',
            '**[Actuar como humano].** Que el comportamiento sea indistinguible del de una persona. Se evalúa con el Test de Turing.',
            '**[Actuar racionalmente].** Elegir la acción que maximiza el resultado esperado. Es el enfoque del agente racional, dominante hoy.',
          ],
        ],
        caption: 'Matriz de los cuatro enfoques. Fuente: Russell y Norvig, 2021 (Tema 1.1 · p. 10).',
      },
      {
        type: 'interactive',
        component: 'russell-matrix',
        title: 'Explora la matriz de los cuatro enfoques',
        hint: 'Combina un eje de intención con un eje de referencia y observa cómo cambia la definición de éxito.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Cada enfoque mide el éxito con una vara distinta',
      },
      {
        type: 'table',
        headers: ['Enfoque', 'Criterio de éxito', 'Metodología o ámbito', 'Ejemplo representativo'],
        rows: [
          ['Pensar como humano', 'Fidelidad a los procesos cognitivos humanos', 'Ciencia cognitiva y neurociencia computacional', 'Arquitecturas cognitivas como ACT-R'],
          ['Pensar racionalmente', 'Inferencia lógica irrefutable', 'Lógica formal y deducción automatizada', 'Sistemas expertos basados en reglas'],
          ['Actuar como humano', 'Comportamiento indistinguible del humano', 'Test de Turing: lenguaje, conocimiento, razonamiento, aprendizaje', 'Chatbots y robótica social'],
          ['Actuar racionalmente', 'Maximizar la utilidad esperada', 'Teoría de decisiones y diseño de agentes', 'Agentes de refuerzo y robótica autónoma'],
        ],
        caption: 'Criterio, metodología y ejemplo de cada enfoque (Tema 1.1 · p. 11).',
      },
      {
        type: 'heading',
        level: 2,
        text: 'El agente racional: percibe, decide y actúa',
      },
      {
        type: 'paragraph',
        text: 'Un [agente racional] es aquel que, para cada posible percepción, selecciona la acción que maximiza la medida de rendimiento esperada, dada la evidencia perceptual y su conocimiento interno. El ciclo tiene tres momentos que se repiten sin terminar: **percibe** (recibe imágenes, texto, sensores o registros), **decide** (elige con lo que percibe y sabe) y **actúa** (ejecuta sobre el entorno y vuelve a percibir).',
      },
      {
        type: 'quote',
        text: 'Un agente racional es aquel que, para cada posible percepción, selecciona la acción que maximiza la medida de rendimiento esperada, dada la evidencia perceptual y el conocimiento interno del agente.',
        attribution: 'Russell y Norvig (2021), citado en Tema 1.1 · p. 12.',
      },
      {
        type: 'example',
        title: 'Un coche autónomo, paso a paso',
        text: 'La misma estructura del agente racional sirve para leer cualquier sistema inteligente. Aplícala así:',
        steps: [
          '**Entorno:** la calle, con peatones, otros autos y señales.',
          '**Percepción:** cámaras y radar entregan imágenes y distancias.',
          '**Decisión:** el software elige acelerar, frenar o girar según su medida de rendimiento esperado.',
          '**Acción y efecto:** el movimiento cambia su posición en la calle y genera nuevas percepciones.',
          '**Medida de rendimiento:** llegar seguro, rápido y dentro de la ley.',
        ],
      },
      {
        type: 'interactive',
        component: 'agent-cycle',
        title: 'Recorre el ciclo percepción–acción',
        hint: 'Sigue el bucle: percibir, decidir, actuar y volver a percibir. No hay un estado final.',
      },
      {
        type: 'list',
        items: [
          '**Unifica la disciplina.** Búsqueda, planificación, aprendizaje, visión o lenguaje se formulan como agentes que maximizan un rendimiento.',
          '**No exige imitar al ser humano.** Diseñar el comportamiento correcto es más útil que replicar la mente: un avión no imita a las aves y aun así vuela.',
          '**Es medible.** Una medida de rendimiento esperada permite evaluar y comparar sistemas con experimentos, no con opiniones.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'El alcance: un continuo de capacidades, no una línea que se cruza',
      },
      {
        type: 'table',
        headers: ['Nivel', 'Qué hace', 'Ejemplo'],
        rows: [
          ['Sistemas reactivos', 'Responden a estímulos con reglas fijas.', 'Un termostato o Deep Blue (1997).'],
          ['Sistemas que aprenden', 'Ajustan su comportamiento con datos y experiencia.', 'Recomendadores y reconocimiento de voz.'],
          ['Sistemas generativos', 'Crean texto, imagen y código con amplitud de tareas.', 'Los modelos de lenguaje actuales.'],
          ['IA general (IAG)', 'Hipótesis: igualar la flexibilidad humana en cualquier dominio.', 'Aún no existe.'],
        ],
        caption: 'Continuo de capacidades de la IA (Tema 1.1 · p. 15).',
      },
      {
        type: 'callout',
        variant: 'key',
        title: 'Idea clave',
        text: 'La IA moderna optimiza decisiones; no busca «pensar» literalmente. Toda la IA de hoy está antes de la IAG: impresionante en tareas concretas, frágil fuera de ellas.',
      },
      {
        type: 'callout',
        variant: 'didactic',
        title: 'Ampliación didáctica',
        text: 'Regla práctica para leer noticias: cuando alguien afirme que un sistema «ya es inteligencia general», pídele tres datos: qué tareas cubre, con qué medida de rendimiento se evaluó y en qué fecha. Una demo impresionante en un solo dominio no basta si el sistema deja de funcionar al cambiar de contexto.',
      },
    ],
    keyTerms: [
      {
        term: 'Inteligencia artificial',
        definition:
          'Campo dedicado a crear sistemas computacionales capaces de realizar tareas que normalmente requieren inteligencia humana.',
      },
      {
        term: 'Agente racional',
        definition:
          'Sistema que, para cada percepción, elige la acción que maximiza la medida de rendimiento esperada.',
      },
      {
        term: 'Actuar racionalmente',
        definition:
          'Enfoque de Russell y Norvig que define la inteligencia por elegir acciones con mejor rendimiento esperado; es el paradigma dominante.',
      },
      {
        term: 'IA general (IAG)',
        definition:
          'Hipótesis de un sistema con flexibilidad humana en cualquier dominio. En el material se presenta como una meta abierta que aún no existe.',
      },
      {
        term: 'Medida de rendimiento',
        definition:
          'Criterio cuantificable con el que se evalúa si un agente logra su objetivo; permite comparar sistemas con experimentos.',
      },
    ],
    recap: [
      'La definición de IA depende de la palabra «normalmente»: la frontera se mueve cuando una tarea se vuelve cotidiana.',
      'Russell y Norvig agrupan la disciplina en cuatro enfoques: pensar o actuar, contra lo humano o contra un ideal de racionalidad.',
      'El agente racional percibe, decide y actúa en un ciclo continuo para maximizar un rendimiento esperado.',
      '«Actuar racionalmente» predomina porque unifica la disciplina, no exige imitar la mente y es medible.',
      'Los sistemas de IA se ordenan en un continuo que va de lo reactivo a lo generativo; la IAG continúa abierta.',
    ],
    commonError:
      'Confundir «actuar racionalmente» con «pensar racionalmente». El primero optimiza resultados y es el enfoque vigente; el segundo exige inferencia lógica irrefutable y se asocia a los sistemas expertos.',
    sourcePages: ['Tema 1.1 · pp. 8–16'],
    practiceQuestionIds: [
      'm1-1-definicion-q1',
      'm1-1-definicion-q2',
      'm1-1-definicion-q3',
      'm1-1-definicion-q4',
    ],
  },
  {
    id: 'm1-2-turing-searle',
    moduleId: '1.1',
    section: '1.1.2',
    title: '¿Pueden pensar las máquinas? Turing y Searle',
    subtitle:
      'El juego de imitación de 1950, las capacidades que exige, las críticas clásicas y la Habitación China de 1980.',
    learningObjectives: [
      'Explicar el juego de imitación de Turing y qué evalúa realmente el Test de Turing.',
      'Identificar las cuatro capacidades que la prueba exige y las dos críticas clásicas.',
      'Reconstruir la Habitación China en sus cuatro pasos y la distinción entre sintaxis y semántica.',
      'Diferenciar IA débil de IA fuerte y reconocer las réplicas al argumento de Searle.',
    ],
    estimatedMinutes: 18,
    blocks: [
      {
        type: 'paragraph',
        text: 'En 1950, el matemático británico [Alan Turing] publicó «Computing Machinery and Intelligence» en la revista Mind. En lugar de discutir sin fin qué es pensar, propuso una prueba observable: si el comportamiento de una máquina es indistinguible del de una persona en una conversación, la pregunta por su «interior» se vuelve metafísica e indecidible.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'El juego de imitación: así funciona la prueba',
      },
      {
        type: 'paragraph',
        text: 'Un interrogador humano conversa por texto, sin ver a nadie, con dos participantes ocultos: una máquina y otra persona. Su tarea es decidir cuál es cuál solo con base en las respuestas. Si el interrogador no logra distinguir a la máquina con fiabilidad, decimos que la máquina supera la prueba.',
      },
      {
        type: 'table',
        headers: ['Rol', 'Quién es', 'Qué hace'],
        rows: [
          ['Interrogador', 'Un ser humano', 'Escribe preguntas y compara respuestas para identificar a la máquina.'],
          ['Participante A', 'La máquina', 'Intenta responder de modo indistinguible de una persona.'],
          ['Participante B', 'Otro ser humano', 'Responde con naturalidad y sirve de punto de comparación.'],
        ],
        caption: 'La prueba se juega solo por escrito: sin voz, sin imagen, sin contacto (Tema 1.1 · p. 19).',
      },
      {
        type: 'interactive',
        component: 'turing-test',
        title: 'Juega al juego de imitación',
        hint: 'Lee las respuestas y decide quién es la máquina. Comprueba en qué te basaste para decidir.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Las cuatro capacidades que exige la prueba',
      },
      {
        type: 'list',
        items: [
          '**[Procesamiento del lenguaje natural].** Comunicarse en cualquier lengua humana con fluidez.',
          '**[Representación del conocimiento].** Almacenar lo que sabe y lo que se le dice durante la conversación.',
          '**[Razonamiento automatizado].** Usar la información guardada para responder, inferir y concluir.',
          '**[Aprendizaje automático].** Adaptarse a circunstancias nuevas y detectar patrones en la experiencia.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: '¿Alguna máquina ha superado la prueba?',
      },
      {
        type: 'table',
        headers: ['Año', 'Caso', 'Resultado reportado', 'Advertencia o crítica'],
        rows: [
          [
            '2014',
            'Eugene Goostman',
            'Convenció al 33 % de los jueces de ser humano en un evento de la Royal Society de Londres.',
            'Charlas de 5 minutos, un personaje con excusas para sus errores y solo un tercio de los jueces engañados.',
          ],
          [
            '2025',
            'GPT-4.5 (estudio de UC San Diego)',
            'En una prueba de Turing tripartita fue juzgado humano el 73 % de las veces: más que el humano real.',
            'Los autores advierten que pasar la prueba mide imitación, no comprensión ni inteligencia general.',
          ],
        ],
        caption: 'Fuentes: University of Reading (2014); Jones y Bergen, UC San Diego (2025, arXiv:2503.23674).',
      },
      {
        type: 'list',
        items: [
          '**Premia el engaño, no la inteligencia.** Para convencer, una máquina puede fingir limitaciones humanas: escribir con erratas, dudar o evitar cálculos perfectos.',
          '**Solo mide lenguaje.** La prueba se juega por escrito e ignora la percepción, el cuerpo, la acción en el mundo y buena parte de lo que consideramos inteligencia.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Searle (1980): comportarse no es comprender',
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Imagina a una persona que no habla chino encerrada en una habitación, con un enorme manual de reglas escrito en su idioma.',
          'Por debajo de la puerta le pasan mensajes escritos en chino. Para ella son solo garabatos.',
          'El manual le indica: «si ves estos símbolos, copia estos otros». Ella sigue las reglas mecánicamente y devuelve respuestas perfectas.',
          'Desde fuera, quien recibe las respuestas juraría que dentro hay un hablante nativo. La habitación «supera la prueba de Turing» en chino… pero la persona nunca entendió chino.',
        ],
      },
      {
        type: 'interactive',
        component: 'chinese-room',
        title: 'Opera la Habitación China',
        hint: 'Ejecuta el manual de reglas y observa cuándo hay respuestas correctas y cuándo hay comprensión.',
      },
      {
        type: 'table',
        headers: ['Sintaxis: lo que la máquina hace', 'Semántica: lo que falta'],
        rows: [
          [
            'Manipular símbolos según reglas formales: voltear bits, buscar patrones, aplicar transformaciones.',
            'Comprender el significado: que «perro» remita a un animal real, que «dolor» remita a una experiencia.',
          ],
          [
            'Las computadoras son campeonas absolutas de la sintaxis: es literalmente lo único que hacen.',
            'Para Searle, ninguna cantidad de sintaxis produce semántica.',
          ],
        ],
        caption: 'La distinción clave del argumento (Tema 1.1 · p. 26).',
      },
      {
        type: 'table',
        headers: ['', 'IA débil', 'IA fuerte'],
        rows: [
          ['Afirmación', 'Las máquinas pueden simular el pensamiento y ser herramientas poderosas.', 'Con el programa correcto, las máquinas literalmente piensan y tienen mente.'],
          ['Qué sería una máquina inteligente', 'Un sistema que actúa como si entendiera.', 'Un sistema que de verdad entiende y es consciente.'],
          ['Postura de Searle', 'Aceptable: es la IA que existe.', 'Falsa: la Habitación China la refuta.'],
        ],
        caption: 'IA débil contra IA fuerte (Tema 1.1 · p. 27).',
      },
      {
        type: 'list',
        items: [
          '**Respuesta de los sistemas.** La persona no entiende chino, pero sí el sistema completo: persona + manual + lápiz + memoria. La comprensión estaría en el conjunto organizado. Searle contesta que la persona podría memorizarlo todo y seguiría sin entender.',
          '**Respuesta del robot.** Pon el sistema en un cuerpo con cámaras, micrófonos y brazos, para que sus símbolos se conecten con la realidad. Searle contesta que añadir sensores solo añade más sintaxis.',
        ],
      },
      {
        type: 'callout',
        variant: 'key',
        title: 'Idea clave',
        text: 'Turing juzga el comportamiento; Searle exige comprensión. Toda la IA que usarás en tu carrera —incluidos los grandes modelos de lenguaje— es IA débil: simula conversación y razonamiento sin comprensión demostrada.',
      },
      {
        type: 'callout',
        variant: 'didactic',
        title: 'Ampliación didáctica',
        text: 'Para evaluar si un sistema «entiende», separa tres preguntas: ¿qué tan bien responde?, ¿de dónde proviene su información? y ¿qué pasa cuando la situación cambia fuera de sus ejemplos? Un sistema puede acertar la primera y fallar las otras dos; ahí se nota la diferencia entre imitar y comprender.',
      },
    ],
    keyTerms: [
      {
        term: 'Juego de imitación',
        definition:
          'Formulación de Turing de 1950: un interrogador por texto debe distinguir a una máquina de un humano.',
      },
      {
        term: 'Test de Turing',
        definition:
          'Criterio conductual según el cual una máquina supera la prueba si sus respuestas escritas son indistinguibles de las de una persona. No prueba consciencia.',
      },
      {
        term: 'Habitación China',
        definition:
          'Experimento mental de Searle (1980): seguir reglas produce respuestas perfectas sin comprender el significado.',
      },
      {
        term: 'Sintaxis y semántica',
        definition:
          'La sintaxis son las reglas formales para manipular símbolos; la semántica, el significado de esos símbolos. Para Searle, la primera no genera la segunda.',
      },
      {
        term: 'IA débil y IA fuerte',
        definition:
          'La IA débil simula el pensamiento; la fuerte afirmaría tener mente y comprender. Searle acepta la primera y rechaza la segunda.',
      },
      {
        term: 'Intencionalidad',
        definition:
          'Propiedad de los estados mentales de «tratar sobre algo». Searle sostiene que un programa solo ejecuta forma sin contenido.',
      },
    ],
    recap: [
      'Turing reemplazó la pregunta «¿piensan las máquinas?» por una prueba observable de conversación.',
      'La prueba exige lenguaje natural, representación del conocimiento, razonamiento y aprendizaje.',
      'Sus críticas clásicas: premia el engaño y solo mide lenguaje.',
      'La Habitación China muestra que manipular símbolos (sintaxis) no equivale a comprender (semántica).',
      'Searle distingue IA débil (aceptable) de IA fuerte (falsa); las réplicas de los sistemas y del robot siguen debatiéndose.',
    ],
    commonError:
      'Creer que aprobar el Test de Turing demuestra consciencia. La prueba mide imitación conversacional; incluso los autores del estudio de 2025 lo advierten.',
    sourcePages: ['Tema 1.1 · pp. 17–29'],
    practiceQuestionIds: [
      'm1-2-turing-searle-q1',
      'm1-2-turing-searle-q2',
      'm1-2-turing-searle-q3',
      'm1-2-turing-searle-q4',
      'm1-2-turing-searle-q5',
    ],
  },
  {
    id: 'm1-3-consciencia',
    moduleId: '1.1',
    section: '1.1.3',
    title: 'Consciencia artificial: el problema difícil',
    subtitle:
      'Chalmers, los qualia, el funcionalismo y el dualismo, sus implicaciones prácticas y el caso LaMDA.',
    learningObjectives: [
      'Distinguir los problemas fáciles de la consciencia del problema difícil de Chalmers.',
      'Explicar qué son los qualia y por qué la diferencia entre procesar y experimentar sigue abierta.',
      'Contrastar el funcionalismo con el dualismo y sus consecuencias para la IA.',
      'Reconocer las implicaciones éticas y de responsabilidad, y analizar el caso LaMDA.',
    ],
    estimatedMinutes: 17,
    blocks: [
      {
        type: 'paragraph',
        text: 'En «The Conscious Mind» (1996), el filósofo [David Chalmers] ordenó el debate con una distinción que hoy es canónica. Para él, explicar las funciones de la mente es un problema **fácil**; explicar por qué hay experiencia subjetiva es el **problema difícil**.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Problemas fáciles y problema difícil',
      },
      {
        type: 'table',
        headers: ['', 'Problemas fáciles', 'Problema difícil'],
        rows: [
          ['Qué preguntan', 'Cómo el cerebro integra información, enfoca la atención, recuerda o controla la conducta.', 'Por qué existe experiencia subjetiva: por qué «se siente como algo» procesar información.'],
          ['Cómo se investigan', 'Con métodos científicos: experimentos, modelos, neuroimagen, simulación.', 'Ningún método actual dice cómo medir «lo que se siente» desde fuera.'],
          ['Estado', 'En progreso desde hace décadas; cada año hay respuestas parciales.', 'Abierto desde 1996; ni la neurociencia ni la IA saben si están cerca de responderlo.'],
        ],
        caption: 'Fuente: Chalmers (1996); Tema 1.1 · pp. 31–32.',
      },
      {
        type: 'paragraph',
        text: 'La advertencia de Chalmers es directa: resolver todas las funciones no garantiza haber explicado la experiencia. La IA actual trabaja, en el fondo, solo en los problemas fáciles: sobre el difícil no tiene —todavía— nada que medir ni optimizar.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Qualia: el nombre técnico de «lo que se siente»',
      },
      {
        type: 'paragraph',
        text: 'Los filósofos llaman [qualia] a las cualidades subjetivas de la experiencia: el dolor de un golpe, el sabor del café, el rojo del atardecer. No es lo que haces con la información, sino cómo se siente tenerla.',
      },
      {
        type: 'example',
        title: 'Un sensor de color frente a tu experiencia',
        text: 'Imagina dos maneras de registrar el mismo estímulo. La comparación muestra dónde se detiene la explicación:',
        steps: [
          'Un sensor registra luz de 650 nm y etiqueta «rojo»: procesa la información correctamente.',
          'Tú, ante el mismo atardecer, tienes algo más: hay una experiencia de ver ese rojo.',
          'Ese «qué se siente» es el quale. Nadie sabe si el sensor lo tiene.',
          'La pregunta incómoda: un modelo describe el dolor con palabras perfectas porque aprendió patrones del lenguaje. ¿Eso cuenta como sentirlo?',
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Funcionalismo: la mente es lo que hace, no de qué está hecha',
      },
      {
        type: 'paragraph',
        text: 'El [funcionalismo] sostiene que la consciencia podría ser una propiedad emergente de la organización funcional de un sistema: importa el patrón de procesos —qué conecta con qué—, no el material que los ejecuta. Analogía clave: el vuelo no exige plumas. Un avión vuela por su aerodinámica, no por imitar tejido biológico. Si el funcionalismo es correcto, la consciencia artificial sería posible en principio: bastaría replicar la organización adecuada.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Dualismo: la mente sería algo más que materia organizada',
      },
      {
        type: 'paragraph',
        text: 'El [dualismo] sostiene que mente y cuerpo son de naturaleza distinta: la experiencia subjetiva no se reduciría a procesos físicos, por compleja que sea su organización. Su consecuencia para la IA es tajante: la consciencia artificial sería imposible por principio, y un sistema podría superar el Test de Turing mil veces sin que hubiera «alguien» dentro. Su punto débil: debe explicar cómo interactúan dos naturalezas distintas.',
      },
      {
        type: 'interactive',
        component: 'consciousness-compare',
        title: 'Compara funcionalismo y dualismo',
        hint: 'Contrasta qué es la mente, si cabe la consciencia artificial y cuál es el punto débil de cada postura.',
      },
      {
        type: 'table',
        headers: ['', 'Funcionalismo', 'Dualismo'],
        rows: [
          ['¿Qué es la mente?', 'El patrón funcional: qué procesa y cómo se organiza.', 'Algo de naturaleza distinta a lo físico.'],
          ['¿Consciencia en máquinas?', 'Posible en principio: es cuestión de organización.', 'Imposible: el silicio solo reorganiza materia.'],
          ['Su punto débil', 'No explica por qué una función debería «sentirse» (Chalmers).', 'No explica cómo interactúan mente y materia.'],
        ],
        caption: 'Dos respuestas a una misma pregunta (Tema 1.1 · pp. 34–36).',
      },
      {
        type: 'heading',
        level: 2,
        text: '¿Por qué importa esto a un ingeniero de software?',
      },
      {
        type: 'list',
        items: [
          '**Derechos y estatus moral de las máquinas.** Si algún día un sistema tuviera experiencia subjetiva, apagarlo, copiarlo o modificarlo plantearía preguntas éticas reales. Sin un criterio para detectar consciencia, ni sabríamos cuándo empezar a preocuparnos.',
          '**Responsabilidad por los errores.** Si un sistema autónomo diagnostica mal o causa un accidente, la responsabilidad recae en quienes lo diseñan, despliegan y supervisan: en ti.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: '2022: el ingeniero que creyó hablar con una mente',
      },
      {
        type: 'paragraph',
        text: 'En junio de 2022, Blake Lemoine, ingeniero de Google, declaró públicamente que LaMDA, el modelo conversacional de la empresa, era consciente. Publicó diálogos donde el sistema afirmaba tener sentimientos y miedo a ser apagado. Google lo suspendió primero y lo despidió después; la comunidad científica fue casi unánime: LaMDA producía texto plausible sobre sentimientos, no evidencia de sentirlos.',
      },
      {
        type: 'callout',
        variant: 'key',
        title: 'Idea clave',
        text: 'El lenguaje fluido activa en nosotros la detección de mente: atribuimos intenciones a lo que conversa bien. Distinguir una mente de su imitación es el problema difícil aplicado a la práctica.',
      },
    ],
    keyTerms: [
      {
        term: 'Problemas fáciles',
        definition:
          'Explicar funciones de la mente: atención, memoria, integración de información y control de la conducta.',
      },
      {
        term: 'Problema difícil',
        definition:
          'Explicar por qué existe experiencia subjetiva: por qué procesar información «se siente como algo». Sigue abierto.',
      },
      {
        term: 'Qualia',
        definition:
          'Cualidades subjetivas de la experiencia, como el sabor del café o el rojo del atardecer.',
      },
      {
        term: 'Funcionalismo',
        definition:
          'Postura según la cual importa la organización funcional, no el material; la consciencia artificial sería posible en principio.',
      },
      {
        term: 'Dualismo',
        definition:
          'Postura según la cual mente y materia son de naturaleza distinta; la consciencia artificial sería imposible por principio.',
      },
    ],
    recap: [
      'Chalmers separa los problemas fáciles (funciones) del problema difícil (experiencia subjetiva).',
      'Los qualia son el «qué se siente» que ninguna medición externa captura todavía.',
      'El funcionalismo admite la consciencia artificial en principio; el dualismo la niega por naturaleza.',
      'Sin un criterio para detectar consciencia, no sabríamos cuándo preocuparnos por el estatus moral de una máquina.',
      'Mientras la IA sea débil, la responsabilidad por sus errores recae en quienes la diseñan y supervisan.',
    ],
    commonError:
      'Tomar una conversación fluida sobre sentimientos como evidencia de experiencia. El caso LaMDA muestra que un modelo puede producir texto plausible sobre emociones sin sentirlas.',
    sourcePages: ['Tema 1.1 · pp. 30–39'],
    practiceQuestionIds: [
      'm1-3-consciencia-q1',
      'm1-3-consciencia-q2',
      'm1-3-consciencia-q3',
      'm1-3-consciencia-q4',
      'm1-3-consciencia-q5',
    ],
  },
  {
    id: 'm1-4-disciplinas',
    moduleId: '1.1',
    section: 'Complemento',
    title: 'Estadística, Ciencia de datos e IA: tres oficios, un equipo',
    subtitle:
      'Qué pregunta, qué produce y cómo se relacionan tres disciplinas que suelen confundirse.',
    learningObjectives: [
      'Identificar la pregunta central, el objeto y el entregable típico de la estadística, la ciencia de datos y la IA.',
      'Explicar la relación entre las tres: la estadística como fundamento, la IA como fase de modelado.',
      'Reconocer qué aporta cada disciplina a tu formación como ingeniero de software.',
    ],
    estimatedMinutes: 13,
    blocks: [
      {
        type: 'paragraph',
        text: 'Estadística, ciencia de datos e inteligencia artificial aparecen juntas en los titulares y se distinguen en la práctica. Comparten trabajar con datos y cuantificar la incertidumbre, pero responden preguntas distintas y entregan productos distintos.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Estadística: inferir conclusiones confiables desde los datos',
      },
      {
        type: 'list',
        items: [
          '**Pregunta central:** ¿qué podemos afirmar —y con qué confianza— sobre una población a partir de una muestra?',
          '**Objeto:** la incertidumbre. Diseña experimentos, estima parámetros y mide qué tan seguras son sus conclusiones.',
          '**Métodos:** muestreo, pruebas de hipótesis, intervalos de confianza, regresión y diseño experimental.',
          '**Producto típico:** una conclusión con margen de error, por ejemplo «el tratamiento mejora la recuperación en un 12 % ± 3 %».',
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Ciencia de datos: del dato crudo a la decisión',
      },
      {
        type: 'paragraph',
        text: 'Su pregunta central es cómo transformar datos crudos —sucios, enormes, desordenados— en conocimiento útil para decidir. Combina estadística, programación y conocimiento del negocio: no es una teoría nueva, sino un oficio integrador que nació de la disponibilidad masiva de datos y cómputo.',
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Recolección y limpieza de datos.',
          'Exploración y visualización.',
          'Modelado y validación.',
          'Comunicación y decisión.',
          'El ciclo vuelve a empezar con nuevos datos.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Inteligencia artificial: sistemas que perciben, deciden y actúan',
      },
      {
        type: 'paragraph',
        text: 'Su pregunta central es cómo construir sistemas capaces de realizar tareas que normalmente requieren inteligencia humana. Su objeto es el comportamiento inteligente; sus métodos incluyen búsqueda y planificación, representación del conocimiento, computación evolutiva y aprendizaje automático. Su producto típico es un sistema que actúa: un chatbot, un recomendador, un vehículo autónomo o un clasificador médico.',
      },
      {
        type: 'interactive',
        component: 'disciplines-comparator',
        title: 'Compara las tres disciplinas',
        hint: 'Cambia de disciplina y observa cómo cambian la pregunta, los métodos y el entregable.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Misma frontera, tres oficios',
      },
      {
        type: 'table',
        headers: ['', 'Estadística', 'Ciencia de datos', 'Inteligencia artificial'],
        rows: [
          ['Objeto', 'Inferir conclusiones confiables bajo incertidumbre.', 'Transformar datos en decisiones útiles.', 'Construir sistemas que actúan con inteligencia.'],
          ['Pregunta típica', '¿El efecto observado es real o azar?', '¿Qué nos dicen estos datos del negocio?', '¿Cómo lograr que el sistema lo haga solo?'],
          ['Métodos', 'Muestreo, hipótesis, regresión, diseño experimental.', 'Limpieza, exploración, visualización, modelado, despliegue.', 'Búsqueda, planificación, agentes, aprendizaje automático.'],
          ['Entregable', 'Conclusión con margen de error.', 'Reporte, tablero o modelo en producción.', 'Sistema autónomo o asistente inteligente.'],
        ],
        caption: 'Tabla comparativa de las tres disciplinas (Tema 1.1 · pp. 44–45).',
      },
      {
        type: 'paragraph',
        text: 'El vínculo entre las tres es claro: la estadística es el fundamento matemático del [aprendizaje automático] —un modelo que «aprende» estima patrones con incertidumbre— y la IA suele ser una fase, la de modelado inteligente, dentro de un proyecto de ciencia de datos. El aprendizaje automático vive en la intersección de las tres.',
      },
      {
        type: 'callout',
        variant: 'didactic',
        title: 'Ampliación didáctica',
        text: 'Truco para ubicarte en un proyecto: pregunta primero cuál es el entregable. Si es una conclusión con incertidumbre, estás en estadística; si es una decisión de negocio instrumentada, en ciencia de datos; si es un sistema que actúa por su cuenta, en IA. El entregable suele revelar la disciplina mejor que el título del puesto.',
      },
      {
        type: 'heading',
        level: 2,
        text: '¿Dónde queda este curso en el mapa?',
      },
      {
        type: 'list',
        items: [
          '**De la estadística tomarás:** rigor para evaluar modelos —validación, métricas, sesgo y varianza— en lugar de fiarte de la intuición.',
          '**De la ciencia de datos tomarás:** la disciplina del dato —limpieza, exploración y honestidad sobre su calidad— antes de cualquier modelo.',
          'Este curso es de IA: construirás sistemas que resuelven problemas mediante búsquedas, computación evolutiva y aprendizaje automático.',
        ],
      },
      {
        type: 'callout',
        variant: 'key',
        title: 'Idea clave',
        text: 'En la industria los tres perfiles colaboran en el mismo equipo: no compiten, se complementan.',
      },
    ],
    keyTerms: [
      {
        term: 'Estadística',
        definition:
          'Disciplina que infiere conclusiones confiables sobre una población a partir de una muestra, cuantificando la incertidumbre.',
      },
      {
        term: 'Ciencia de datos',
        definition:
          'Oficio integrador que transforma datos crudos en decisiones, combinando estadística, programación y conocimiento del negocio.',
      },
      {
        term: 'Aprendizaje automático',
        definition:
          'Conjunto de métodos con los que un sistema ajusta patrones a partir de datos; vive en la intersección de las tres disciplinas.',
      },
      {
        term: 'Entregable',
        definition:
          'Producto típico de cada disciplina: conclusión con margen de error, decisión instrumentada o sistema autónomo.',
      },
    ],
    recap: [
      'La estadística responde con qué confianza podemos afirmar algo sobre una población.',
      'La ciencia de datos convierte datos crudos en decisiones a lo largo de un ciclo de trabajo.',
      'La IA construye sistemas que perciben, deciden y actúan; su producto es un sistema en funcionamiento.',
      'La estadística fundamenta el aprendizaje automático y la IA suele ser la fase de modelado de un proyecto de datos.',
      'Los tres perfiles se complementan en un mismo equipo.',
    ],
    commonError:
      'Usar «estadística», «ciencia de datos» e «IA» como sinónimos. Cada una tiene una pregunta central y un entregable distintos, aunque compartan datos y métodos.',
    sourcePages: ['Tema 1.1 · pp. 40–46'],
    practiceQuestionIds: ['m1-4-disciplinas-q1', 'm1-4-disciplinas-q2', 'm1-4-disciplinas-q3'],
  },
  {
    id: 'm1-5-repaso',
    moduleId: '1.1',
    section: 'Cierre',
    title: 'Cierre del tema 1.1: mapa de repaso y debate',
    subtitle:
      'El tema en una sola página y las cuatro preguntas de debate convertidas en actividades de autoevaluación.',
    learningObjectives: [
      'Repasar en una sola vista los tres bloques del tema y su hilo conductor.',
      'Argumentar posturas propias sobre simulación, comprensión, experiencia y responsabilidad.',
      'Autoevaluar tu dominio del tema antes de avanzar al siguiente.',
    ],
    estimatedMinutes: 12,
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'El tema 1.1 en una sola página',
      },
      {
        type: 'table',
        headers: ['1.1.1 Definición y alcance', '1.1.2 ¿Pueden pensar?', '1.1.3 Consciencia'],
        rows: [
          [
            'La IA crea sistemas que hacen tareas que requieren inteligencia humana. Cuatro enfoques: pensar/actuar × humano/racional. Paradigma vigente: el agente racional. Alcance: continuo de capacidades; la IAG sigue abierta.',
            'Turing (1950) juzga el comportamiento, no el interior. Searle (1980): la Habitación China muestra sintaxis sin semántica. IA débil simula; IA fuerte tendría mente. Todo lo actual es débil.',
            'Chalmers (1996): problemas fáciles (funciones) frente a difícil (experiencia). Qualia: «lo que se siente». Funcionalismo: posible en principio. Dualismo: imposible por naturaleza. Consecuencias: derechos y responsabilidad.',
          ],
        ],
        caption: 'Mapa de repaso del tema (Tema 1.1 · p. 48).',
      },
      {
        type: 'list',
        items: [
          '**Hilo conductor:** simular, actuar, comprender y sentir son cuatro cosas distintas.',
          'No las confundas al diseñar sistemas: esa es la competencia central del tema.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Cuatro preguntas para debatir (y para autoevaluarte)',
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Si una app de salud mental conversa mejor que muchos humanos, ¿superó la prueba de Turing? ¿Eso la hace responsable de lo que aconseja?',
          'Searle dice que ningún programa entiende. Si un modelo traduce, resume y dialoga mejor que un estudiante de primer año, ¿qué falta para llamarlo «comprensión»?',
          '¿Cómo diseñarías un experimento para detectar experiencia subjetiva en una máquina, si no puedes medir «lo que se siente» desde fuera?',
          'Un sistema de IA toma una decisión que daña a alguien: ¿quién debería responder y por qué?',
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Actividad de autoevaluación',
      },
      {
        type: 'example',
        title: 'Aplica las cuatro preguntas a un caso',
        text: 'Elige un sistema de IA que uses (un asistente, un traductor o un recomendador) y respóndete por escrito. Si puedes responder con claridad a los cuatro pasos, dominas el tema.',
        steps: [
          '**Ubícalo en el continuo.** ¿Es reactivo, aprende o genera? ¿Dónde queda respecto a la IAG?',
          '**Pásalo por Turing.** ¿Qué respondería el interrogador y por qué podría equivocarse?',
          '**Pásalo por Searle.** ¿Qué sintaxis ejecuta y qué semántica no podemos demostrar que tenga?',
          '**Decide responsabilidades.** Cuando falla, ¿quién responde: el programa, quien lo programó, la empresa o quien lo usa?',
        ],
      },
      {
        type: 'callout',
        variant: 'key',
        title: 'Imprescindible para el examen',
        text: 'Definición de IA y el «normalmente»; los cuatro enfoques y sus ejemplos; agente racional; Turing y sus críticas; Habitación China y sintaxis/semántica; IA débil frente a fuerte; problema fácil y difícil; qualia; funcionalismo y dualismo; y la diferencia entre estadística, ciencia de datos e IA.',
      },
      {
        type: 'callout',
        variant: 'didactic',
        title: 'Ampliación didáctica',
        text: 'Prepara este tema practicando la argumentación, no la memorización. En el debate y en el examen vale más defender una postura con los argumentos de Turing o de Searle —y reconocer su punto débil— que repetir definiciones aisladas.',
      },
    ],
    keyTerms: [
      {
        term: 'Hilo conductor',
        definition:
          'Idea que articula el tema: simular, actuar, comprender y sentir son cuatro cosas distintas.',
      },
      {
        term: 'Autoevaluación',
        definition:
          'Ejercicio de aplicar los conceptos del tema a un caso propio para comprobar la comprensión.',
      },
    ],
    recap: [
      'El tema responde tres preguntas: qué es la IA, si puede pensar y si puede ser consciente.',
      'El complemento distingue estadística, ciencia de datos e IA por su pregunta y su entregable.',
      'El hilo conductor es no confundir simular, actuar, comprender y sentir.',
      'Las cuatro preguntas de debate sirven como autoevaluación si las aplicas a un caso real.',
    ],
    commonError:
      'Estudiar el tema como una lista de definiciones sueltas. Su valor está en argumentar: por ejemplo, defender una postura desde Turing y criticarla desde Searle.',
    sourcePages: ['Tema 1.1 · pp. 47–48'],
    practiceQuestionIds: ['m1-5-repaso-q1', 'm1-5-repaso-q2', 'm1-5-repaso-q3'],
  },
]

/** Todas las lecciones del módulo 1.1, en orden. */
export const m1Lessons: Lesson[] = [m1Intro, ...m1Rest]
