# Historia de la inteligencia artificial

> Fuente primaria: Capítulo 1 — Tema 1.2 Historia de la Inteligencia Artificial.pdf. 57 páginas.

> Transcripción de texto extraído del material de clase, conservando la numeración de páginas. Las imágenes, diagramas y tablas visuales deben cotejarse con el PDF original. No se han añadido afirmaciones externas.


---

## Página 01

1950
                                                                                                                                                                 Test de Turing

C A P Í T U L O  1   ·  I N T E L I G E N C I A A R T I F I C I A L                                                                                                                 1956
                                                                                                                                         Dartmouth

                                                                                                                  1997Historia de la                                                                                                                               Deep Blue

                                                                                                           2012Inteligencia Artificial                                            AlexNet

Tema 1.2 · De los autómatas mitológicos a la era del Deep Learning                                                                                                   2022
                                                                                                                                        ChatGPT
Experiencia educativa Inteligencia Artificial · Ingeniería de Software · (UV, 2026).

UNIVERSIDAD VERACRUZANA  · FACULTAD DE NEGOCIOS Y TECNOLOGÍAS


---

## Página 02

T E M A  1 . 2   · H I S T O R I A D E L A  I A
Ruta del tema — cinco etapas, un mismo patrón

           Los orígenes                                                             El nacimiento formal (1950–1970)
1.2.1                                     1.2.2         De la Antigüedad a la era moderna: mitos, lógica y                      Turing, Dartmouth y los primeros programas que

              las primeras máquinas.                                            «razonaban».


           Los inviernos de la IA (1970–1980)                                      El resurgimiento (1990–2010)
1.2.3                                     1.2.4          Promesas incumplidas, recortes de fondos y la                       Aprendizaje automático, Big Data y la victoria de

            lección de los sistemas expertos.                              Deep Blue.


           La era del Deep Learning (2010–presente)                           Lecciones y línea de tiempo
1.2.5            AlexNet, AlphaGo, los grandes modelos de lenguaje               Qué debe aprender un ingeniero de software de                                               Cierre
           y la IA generativa.                                                     setenta años de historia.

   Cada sección cierra con una pregunta de comprobación: úsala para verificar que puedes explicar los hitos con tus propias palabras.

Tema 1.2 · Historia de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                    02 / 57


---

## Página 03

T E M A  1 . 2   · H I S T O R I A D E L A  I A
¿Por qué estudiar la historia de una disciplina tan joven?

                                                                  Entender el presente. Las arquitecturas que usas hoy (redes
     L A A N T Ó L O G Í A D E L C U R S O L O R E S U M E A S Í                       neuronales, transformers) son respuestas a problemas con

                                                                   décadas de historia.
   «La historia de la IA es un relato de
                                                                 Reconocer el patrón. La IA ha alternado euforia, decepción y
  ambición científica, avances                          renacimiento.  Quien  conoce  los  ciclos  evalúa  mejor  las

                                                                promesas nuevas.
   revolucionarios, expectativas
                                                                             Evitar errores ya cometidos. Sobreventa, expectativas irreales y
   desbordadas y resurgimientos                      subestimar el cómputo y los datos: errores documentados que

                                                                         se repiten.
   periódicos.»
                                                                               Criterio profesional. Un ingeniero que conoce los hitos sabe

                                                                  por qué existen las herramientas que usa y cuándo desconfiar

                                                              de ellas.

Tema 1.2 · Historia de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                   03 / 57


---

## Página 04

T E M A  1 . 2   · H I S T O R I A D E L A  I A
El patrón que se repite — euforia, invierno, resurgimiento

   1 · Euforia fundacional                2 · Invierno                          3 · Resurgimiento

  Un avance demuestra algo                  Las promesas no se cumplen a            Nuevos datos, más cómputo
          →           →
   «imposible». Los medios y los               tiempo. Los fondos se recortan,            y mejores algoritmos

   financiadores anticipan una                  los laboratorios cierran y «IA»              resuelven lo que frenó la

   inteligencia general inminente.              se vuelve mala palabra.                     etapa anterior. El ciclo

                                                                                                          reinicia.

     L E C T U R A P A R A  I N G E N I E R O S

    El ciclo ya ocurrió al menos dos veces (años 70 y finales de los 80). Pregunta práctica: ¿en qué fase estamos hoy

   y qué evidencia lo respalda?

Tema 1.2 · Historia de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                      04 / 57


---

## Página 05

T E M A  1 . 2 . 1
Los orígenes: de la Antigüedad a la era moderna


Mucho antes de existir las computadoras, la humanidad ya imaginaba seres artificiales con inteligencia — y los

filósofos ya preguntaban si el pensamiento podía describirse como un mecanismo.

El mito. Talos y los autómatas de Hefesto: la inteligencia artificial como fantasía ancestral.

La filosofía mecanicista. Descartes y el cuerpo como máquina: el pensamiento como proceso formalizable.

La lógica y la máquina. Boole, Babbage y Ada Lovelace: del razonamiento formal al cómputo programable.

La IA no nació en 1956 de la nada: heredó dos mil años de imaginación y dos siglos de formalización matemática.

                                                                                                                                              05 / 57


---

## Página 06

T E M A  1 . 2 . 1   · L O S O R Í G E N E S
El anhelo antiguo — máquinas con vida propia en el mito

   Talos, el guardián de bronce                            Los autómatas de Hefesto

  M I T O G R I E G O  · A R G O N A U T A S                         M I T O G R I E G O  · L A I L Í A D A

    Gigante de bronce forjado por Hefesto para proteger Creta:               El dios herrero construía sirvientes de oro con inteligencia y

    recorría  la  isla tres veces  al día y arrojaba piedras a los            voz (La Ilíada, canto XVIII), y trípodes que se movían solos

    invasores.                                                               hacia los banquetes de los dioses.

    Tenía una sola vena con icor — el «fluido vital» de los dioses —               El taller divino como primer «laboratorio de robótica» de la

    sellada con un clavo: su punto único de falla.                             imaginación occidental.

   Por qué importa: el mito ya contiene las preguntas de ingeniería actuales — autonomía (Talos opera sin supervisión), suministro de

    «energía/información» (el icor) y seguridad: Medea derrota a Talos explotando su único punto débil, como un ataque a un sistema

   moderno.


Fuente: Antología de IA (UV, 2026), 1.2.1; Adrienne Mayor, Gods and Robots (Princeton University Press, 2018).


Tema 1.2 · Historia de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                   06 / 57


---

## Página 07

T E M A  1 . 2 . 1   · L O S O R Í G E N E S
Del mito a la mecánica — dos milenios de autómatas

       ÉPOCA                ARTEFACTO / AUTOR                            QUÉ APORTÓ A LA IDEA DE IA


                                                                 Autómatas hidráulicos y de vapor «programables» con cuerdas y pesas: teatro mecánico
             s. I d. C.        Herón de Alejandría
                                                             que repetía secuencias.


                                                                          Libro de los mecanismos ingeniosos: autómatas musicales y sirvientes; la programación
         1206             Al-Jazarí
                                                      como levas intercambiables.


                                                                   Diseño de un «caballero robot» articulado con poleas: la anatomía humana pensada
            c. 1495         Leonardo da Vinci
                                                      como mecanismo replicable.


                                                                                    El pato mecánico que «comía y digería»; autómatas como demostración pública de que
          1739           Jacques de Vaucanson
                                                                                            la vida imita a la máquina.


                                                                  «Autómata» ajedrecista que derrotaba a nobles — era un fraude con un humano oculto.
          1770             El Turco Mecánico (von Kempelen)
                                                                     Primera lección: evalúa siempre al sistema.


Patrón común: cada generación usa su tecnología más avanzada (hidráulica, relojería, hoy chips) como metáfora y material para imitar la vida

y la mente.

Fuente: A. Mayor, Gods and Robots (2018); T. Standage, The Turk (2002).

Tema 1.2 · Historia de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                      07 / 57


---

## Página 08

T E M A  1 . 2 . 1   · L O S O R Í G E N E S
René Descartes (s. XVII) — el cuerpo como máquina

En plena revolución científica, Descartes propuso que el cuerpo
                                                                 D I S C U R S O D E L M É T O D O  ( 1 6 3 7 )
humano  es un mecanismo, comparable  a  los autómatas
                                                                                 Si hubiera máquinas con órganos y figura
hidráulicos que decoraban  los  jardines de su  época:  los
                                                           de un mono, no tendríamos medio de
movimientos y reflejos se explican por la disposición de sus
                                                                reconocer que no eran de la misma
órganos, como los de un reloj.
                                                                       naturaleza que esos animales…
La mente, en cambio, la reservó para una sustancia inmaterial
                                                                                       …pero ninguna podría usar el lenguaje ni razonar como
(res cogitans) — el famoso dualismo que ya exploramos en el                                                                                                     nosotros.
tema 1.1.3.

Su legado para la IA es ambiguo: legó la idea de que lo biológico
                                                                           Conexión con 1.1: Descartes anticipó un proto-Test
es mecanizable, pero también la duda de que la mente lo sea.                                                                         de Turing — usar el lenguaje como prueba de mente

                                                     — y el dualismo que la IA fuerte aún discute.

Fuente: Antología de IA (UV, 2026), 1.2.1; R. Descartes, Discurso del método (1637), parte V.


Tema 1.2 · Historia de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                  08 / 57


---

## Página 09

T E M A  1 . 2 . 1   · L O S O R Í G E N E S
George Boole (s. XIX) — el razonamiento convertido en álgebra

En The Laws of Thought (1854), el matemático autodidacta
                                                                                                                                    I D E A C E N T R A L
George Boole demostró que el razonamiento lógico puede
                                                                             Pensar = manipular símbolos según reglas.
expresarse con operaciones algebraicas sobre dos valores:                                                                                               Si el razonamiento es cálculo, una máquina puede
verdadero y falso.                                                                        realizarlo.

El álgebra booleana redujo inferencias («si A y B, entonces

C») a cálculo simbólico mecánico: reglas formales aplicables

sin interpretación humana.                                                                                   P A R A T U C A R R E R A

                                                                         Cada condicional if, cada consulta SQL y cada

LA CADENA QUE LLEGA HASTA HOY                                      compuerta AND/OR/NOT descienden del álgebra de
      →                        →                                                                                        Boole. La IA simbólica de los años 60–80 seBoole (1854)   Shannon (1937): circuitos eléctricos = lógica booleana
         →                                                                                construyó entera sobre esta base.compuertas lógicas   todos los chips que ejecutan IA hoy.

Fuente: Antología de IA (UV, 2026), 1.2.1; G. Boole, An Investigation of the Laws of Thought (1854).


Tema 1.2 · Historia de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                   09 / 57


---

## Página 10

T E M A  1 . 2 . 1   · L O S O R Í G E N E S
Charles Babbage — la Máquina Analítica (1837)

Tras sus calculadoras de diferencias, Babbage diseñó la Máquina Analítica: el primer diseño de computadora

programable de propósito general — un siglo antes de que la tecnología pudiera construirla.

SU ARQUITECTURA YA ERA LA DE HOY


   El molino (mill)                                El almacén (store)                            Tarjetas perforadas

  Unidad aritmética de engranes: la          Mil números de 50 dígitos en              Entrada de programas y datos, idea

  CPU mecánica.                        columnas de engranes: la               tomada del telar de Jacquard: el

                                      memoria.                                 software.

    Lección: separar hardware, memoria y programa es la decisión de arquitectura que hace posible toda la computación — y por tanto

     la IA. La máquina nunca se completó: el diseño superó a la manufactura de su época.

Fuente: Antología de IA (UV, 2026), 1.2.1; Science Museum de Londres, colección Babbage.


Tema 1.2 · Historia de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                                    10 / 57


---

## Página 11

T E M A  1 . 2 . 1   · L O S O R Í G E N E S
Ada Lovelace (1843) — la primera programadora y su visión

   El primer  algoritmo  publicado. En  sus  notas de  1843       La visión más  allá del número. Vio que  si  la máquina

   describió cómo la Máquina Analítica calcularía los números       manipulaba símbolos y no solo  cifras, podría componer

   de  Bernoulli —  considerado   el  primer  programa  de       música  o  procesar  cualquier  información:   la  semilla

   computadora de la historia.                                      conceptual del cómputo general.

   N O T A G D E L O V E L A C E  ( 1 8 4 3 ) — L A « O B J E C I Ó N D E L A D Y L O V E L A C E »

    «La Máquina Analítica no pretende crear nada. Puede hacer todo lo que sepamos ordenarle… pero no puede originar nada

    por sí misma.»

   Por qué la recordamos en un curso de IA: Alan Turing cita esta frase en su artículo de 1950 como «la objeción de Lady

   Lovelace» — la primera formulación del debate sobre si una máquina puede ser creativa o solo obediente. Hoy se reabre cada

   vez que un modelo generativo produce algo que nadie le escribió.


Fuente: A. Lovelace, Notas a la Máquina Analítica (1843); A. Turing, «Computing Machinery and Intelligence» (1950).


Tema 1.2 · Historia de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                                                                              11 / 57


---

## Página 12

T E M A  1 . 2 . 1   · L O S O R Í G E N E S
Del mito a la máquina — la prehistoria de la IA en cinco pasos

                                                               →
   Antigüedad                                               1837–1843                                              1950
Talos y los autómatas de                                            Babbage y Lovelace: cómputo                                              Turing abre la era formal
       Hefesto                                                            programable

                                    1637                                                     1854
                                      Descartes: el cuerpo como                                                     Boole: la lógica se vuelve
                                      máquina                                                                     álgebra


   Para 1950 ya existían los tres ingredientes conceptuales: el sueño (mitos y autómatas), el formalismo

    (lógica de Boole) y la máquina (diseño de Babbage). Solo faltaba la electrónica.

Tema 1.2 · Historia de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                                                12 / 57


---

## Página 13

T E M A  1 . 2 . 1   · S Í N T E S I S
Lo que debes poder explicar al salir de esta sección

    1 · El sueño es ancestral. Talos y los autómatas de Hefesto        2 · La filosofía preparó el terreno. Descartes planteó que lo

   muestran que la IA responde a un anhelo de milenios, no a        biológico es mecanizable — y la duda de que la mente lo

  una moda.                                                             sea.


   3 · La lógica se hizo cálculo. Boole convirtió el                  4 · La computadora se concibió en papel. Babbage y

   razonamiento en álgebra manipulable por máquinas; es la        Lovelace separaron hardware, memoria y programa

   base de los circuitos digitales.                                   sesenta años antes de la electrónica.

     P R E G U N T A D E C O M P R O B A C I Ó N

   Ada Lovelace dijo que la máquina «no puede originar nada». ¿La IA generativa actual la refuta o solo ejecuta lo que sus

    datos y arquitectura le ordenan? Defiende tu postura.

Tema 1.2 · Historia de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                                               13 / 57


---

## Página 14

T E M A  1 . 2 . 2
El nacimiento formal de la IA (1950–1970)

En dos décadas la IA pasó de ser una pregunta filosófica a un campo con nombre propio, laboratorios,

programas que demostraban teoremas — y promesas que no podría cumplir.

1950. Turing publica la pregunta fundacional: «¿pueden pensar las máquinas?»

1956. El taller de Dartmouth bautiza la disciplina: «Inteligencia Artificial».

1956–1970. Logic Theorist, el perceptrón, las damas de Samuel y ELIZA: la primera generación de programas.

La euforia de esta etapa — y sus predicciones incumplidas — explica directamente el invierno que vendría después.

                                                                                                                                                                                                   14 / 57


---

## Página 15

T E M A  1 . 2 . 2   · N A C I M I E N T O F O R M A L
1950 — Alan Turing convierte el mito en pregunta científica

En «Computing Machinery and  Intelligence»  (revista Mind,
                                                                                    E L A R R A N Q U E D E L A R T Í C U L O
octubre de 1950), Turing propuso sustituir la pregunta metafísica
                                                                           «I propose to consider the question,«¿pueden pensar las máquinas?» por un criterio operativo: el
juego de imitación, hoy Test de Turing (tema 1.1.2).                  “Can machines think?”»

El mismo Turing ya había sentado las bases teóricas: su máquina
                                                                Turing respondió además nueveuniversal (1936) definió formalmente qué es computable, y en
Bletchley  Park  había  visto  máquinas  resolver  problemas        objeciones, incluida la de Lady Lovelace, y

«intelectuales» a escala industrial.                                      predijo que para el año 2000 las

                                                          máquinas engañarían a un interrogador

                                                         promedio el 30 % de las veces tras cinco  1936             1950
   Máquina de Turing: define lo                   El juego de imitación como prueba           minutos.
   computable


Fuente: A. M. Turing, «Computing Machinery and Intelligence», Mind 59(236), 1950, pp. 433–460.


Tema 1.2 · Historia de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                                                 15 / 57


---

## Página 16

T E M A  1 . 2 . 2   · N A C I M I E N T O F O R M A L
1956 — El taller de Dartmouth bautiza la disciplina

                             Agosto de 1955, solicitando fondos a la Fundación
 Propuesta                                                                                         E L N O M B R E D E L C A M P O                                Rockefeller
                                                                    «Artificial Intelligence» Fechas                         18 de junio – 17 de agosto de 1956 (8 semanas)

                                                                           John McCarthy acuñó el término en la propuesta
 Sede                      Dartmouth College, Hanover, Nuevo Hampshire (EE. UU.)
                                                                       de 1955 para distinguir el proyecto de la

                                                                                      cibernética de Wiener y de la teoría de autómatas.
 Convocantes                 McCarthy, Minsky, Rochester y Shannon
                                                                                               El nombre pegó — y con él, setenta años de
               ≈
                             10–20 investigadores: Newell, Simon, Samuel,                                                                              debate sobre qué tan «artificial» y qué tan Participantes
                                   Selfridge, Solomonoff…
                                                                                           «inteligente» es.
                                Rockefeller Foundation: USD 7,500 de los 13,500
 Financiamiento
                                  solicitados

Dartmouth no fue un congreso con resultados: fue el acta de nacimiento — definió el problema, reunió a la primera comunidad y fijó la

agenda de las décadas siguientes.

Fuente: J. McCarthy et al., «A Proposal for the Dartmouth Summer Research Project on AI» (1955).


Tema 1.2 · Historia de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                                               16 / 57


---

## Página 17

T E M A  1 . 2 . 2   · N A C I M I E N T O F O R M A L
Los cuatro convocantes de Dartmouth

   John McCarthy                                   Marvin Minsky
           →   →
   D A R T M O U T H  M I T    S T A N F O R D                      M I T A I L A B  ( C O F U N D A D O R )

   Acuñó «Inteligencia Artificial». Creó Lisp (1958), el lenguaje de             Pionero de redes neuronales tempranas y de la teoría de

     la IA simbólica, y el tiempo compartido. Premio Turing 1971.              marcos. Con Perceptrons (1969) enfrió — sin querer — la

                                                                               investigación conexionista. Premio Turing 1969.

   Nathaniel Rochester                                 Claude Shannon
                                                  →
      I B M                                                               B E L L L A B S  M I T

    Arquitecto jefe de la IBM 701, la primera computadora                   Padre de la teoría de la información (1948); en 1950 ya

     científica comercial de IBM — la máquina sobre la que corrió              publicaba cómo programar una máquina para jugar ajedrez.

     el programa de damas de Samuel.                                             El puente entre lógica, circuitos y comunicación.

Fuente: J. McCarthy et al., propuesta de Dartmouth (1955); biografías ACM A. M. Turing Award.


Tema 1.2 · Historia de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                                                   17 / 57


---

## Página 18

T E M A  1 . 2 . 2   · N A C I M I E N T O F O R M A L
La hipótesis fundamental de Dartmouth

     P R O P U E S T A D E D A R T M O U T H  ( 1 9 5 5 ) — C O N J E T U R A C E N T R A L

   «Cada aspecto del aprendizaje o cualquier otra característica de la inteligencia puede, en principio, describirse

    tan precisamente que se puede construir una máquina que lo simule.»

LO QUE LA CONJETURA AFIRMA — Y LO QUE NO

   Afirma: la inteligencia es formalizable — existe una          No afirma: que sea fácil ni inminente. La propuesta pedía

   descripción precisa (un algoritmo) de lo que hacemos al          «2 meses y 10 personas» para avanzar — la historia mostró

   aprender y razonar.                                     que el plazo real se mide en décadas.


Sigue siendo la apuesta de trabajo de todo el campo: cada sistema de IA es un intento de precisar — parcialmente — esa

descripción. Conecta con el funcionalismo del tema 1.1.3.

Fuente: J. McCarthy, M. Minsky, N. Rochester y C. Shannon, propuesta de Dartmouth (31 agosto 1955).


Tema 1.2 · Historia de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                                             18 / 57


---

## Página 19

T E M A  1 . 2 . 2   · N A C I M I E N T O F O R M A L
1956 — Logic Theorist, el primer programa de IA

Allen Newell y Herbert A. Simon (con J. C. Shaw) construyeron
en RAND  el Logic Theorist: un programa que demuestra   38 / 52
teoremas de lógica de los Principia Mathematica de Whitehead         Teoremas de los Principia demostrados automáticamente

y Russell.

Demostró 38 de los primeros 52 teoremas; para el teorema
                                                                                           L A  I D E A C L A V E
2.85 encontró una prueba más elegante que la de los autores.
                                                         No buscaba a fuerza bruta: usaba heurísticas — reglas
Se presentó en Dartmouth — era el único sistema funcional del                                                                                    prácticas inspiradas en cómo demuestran los
taller. Sus creadores lo llamaron «la primera máquina que                                                                    humanos. Nace la IA como búsqueda heurística.
piensa».

              →                                            →
Linaje directo: Logic Theorist   GPS (General Problem Solver, 1957), el intento de resolver cualquier problema formalizable    toda la

tradición de planificación y búsqueda que estudiarás en los subtemas de agentes inteligentes.


Fuente: A. Newell y H. Simon, «The Logic Theory Machine», IRE Trans. Inf. Theory (1956); N. Nilsson, The Quest for AI (2010).


Tema 1.2 · Historia de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                                               19 / 57


---

## Página 20

T E M A  1 . 2 . 2   · N A C I M I E N T O F O R M A L
Arthur Samuel y las damas — el nacimiento del «machine learning»

  1952                        1959                        1962

   Arthur Samuel (IBM) escribe un jugador          En su artículo acuña el término                       El programa derrota a Robert Nealey,

   de damas para la IBM 701: el primer             «machine learning»: programas que            campeón estatal de EE. UU. Primera

   programa que mejora con la experiencia.         aprenden sin ser programados                       victoria mediática de una máquina sobre

                                                     explícitamente para cada caso.                un experto.

   Cómo aprendía: jugaba miles de partidas contra sí mismo y ajustaba los pesos de su función de evaluación según el resultado — el

    ancestro directo del aprendizaje por refuerzo de AlphaGo, sesenta años después.

Nota: en algunos textos se menciona el «programa de ajedrez de Samuel»; en rigor, su juego eran las damas (checkers) — el ajedrez máquina-

era llegó con otros programas y culminó en Deep Blue (1.2.4).


Fuente: A. L. Samuel, «Some Studies in Machine Learning Using the Game of Checkers», IBM J. Res. Dev. (1959).


Tema 1.2 · Historia de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                    20 / 57


---

## Página 21

T E M A  1 . 2 . 2   · N A C I M I E N T O F O R M A L
1966 — ELIZA, el primer chatbot y su inquietante efecto

Joseph Weizenbaum (MIT) creó ELIZA, un programa que simulaba a
                                                                D I Á L O G O T Í P I C O  ( T R A D U C I D O )
un psicoterapeuta rogeriano (guión DOCTOR) con patrones de texto
                                                                                        Usuario: Los hombres son todos iguales.
y sustituciones — sin entender una sola palabra.
                                                                                   ELIZA: ¿En qué sentido?
Muchos usuarios conversaban horas y le atribuían empatía y                                                                                        Usuario: Siempre nos molestan por algo.
comprensión, incluso sabiendo que era un programa. Weizenbaum,          ELIZA: ¿Puede pensar en un ejemplo concreto?

                                                                                                  Refleja frases y convierte afirmaciones en preguntas.alarmado, se volvió crítico de la IA.
                                                                                Eso es todo.

    El «efecto ELIZA»: la tendencia humana a proyectar comprensión donde solo hay patrón. Es la advertencia ética más antigua de la IA

   conversacional — y sigue vigente cada vez que alguien atribuye conciencia a un modelo de lenguaje (recuerda el caso LaMDA del tema

     1.1.3).

Fuente: J. Weizenbaum, «ELIZA — A Computer Program…», Communications of the ACM 9(1), 1966.


Tema 1.2 · Historia de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                                                21 / 57


---

## Página 22

T E M A  1 . 2 . 2   · N A C I M I E N T O F O R M A L
La década del optimismo desbordado

    Herbert A. Simon · 1965                                       Marvin Minsky · 1967

   «En veinte años las máquinas serán capaces de hacer                «Dentro de una generación, el problema de crear

    cualquier trabajo que un hombre pueda hacer.»                      inteligencia artificial estará sustancialmente resuelto.»

    The Shape of Automation (1965)                                                    Computation: Finite and Infinite Machines (1967)

   Minsky fue aún más lejos en la revista Life (1970): «en tres a ocho años tendremos una máquina con la inteligencia general de un ser

   humano promedio». Ninguna de estas predicciones se cumplió en el plazo anunciado.

Patrón a recordar: los éxitos en dominios acotados (teoremas, juegos, bloques) se extrapolaron sin evidencia a la inteligencia general. La

extrapolación indebida tiene un costo: credibilidad y financiamiento.

Fuente: H. Simon (1965); M. Minsky (1967); B. Darrach, «Meet Shaky», Life (noviembre 1970).


Tema 1.2 · Historia de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                             22 / 57


---

## Página 23

T E M A  1 . 2 . 2   · N A C I M I E N T O F O R M A L
La primera generación de programas de IA

 AÑO          SISTEMA                        AUTOR / SEDE                             QUÉ DEMOSTRÓ


                                                                                                           Demostración automática de teoremas con
 1956              Logic Theorist                               Newell, Shaw y Simon · RAND
                                                                                                                                 heurísticas

                                                                                                                Primera red neuronal entrenable: aprende a
 1957             Perceptrón                                Frank Rosenblatt · Cornell
                                                                                                                                               clasificar patrones

                                                                                                                  Resolución general de problemas por medios
 1957           GPS                                     Newell y Simon · RAND
                                                                                                               y fines

                                                                                                                    Aprendizaje por autojuego; vence a un
 1952–62         Programa de damas                         Arthur Samuel · IBM
                                                                                               campeón (1962)

                                                                                                               Conversación por patrones; efecto de
 1966            ELIZA                                    Joseph Weizenbaum · MIT
                                                                                                                proyección humana

                                                                                                                  Lenguaje natural en el «mundo de bloques» —
 1968–70        SHRDLU                                    Terry Winograd · MIT
                                                                                                               y sus límites


Dos linajes nacen aquí y coexisten hasta hoy: el simbólico (lógica y reglas) y el conexionista (redes neuronales del perceptrón).

Fuente: N. Nilsson, The Quest for Artificial Intelligence (Cambridge UP, 2010), caps. 4–13.

Tema 1.2 · Historia de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                            23 / 57


---

## Página 24

T E M A  1 . 2 . 2   · S Í N T E S I S
Lo que debes poder explicar al salir de esta sección

    1 · 1950, Turing. Convierte «¿pueden pensar las máquinas?» en         2 · 1956, Dartmouth. McCarthy acuña «Inteligencia Artificial» y el

   un criterio empírico: el juego de imitación.                                     taller fija la agenda: simular cada rasgo de la inteligencia.

   3 · Éxitos reales y acotados. Logic Theorist, GPS, damas de             4 · Promesas sin plazo realista. Simon y Minsky anticiparon la IA

   Samuel, perceptrón, ELIZA: dominios cerrados, reglas claras.             general «en una generación». La brecha entre promesa y entrega

                                                            sembró el invierno.

     P R E G U N T A D E C O M P R O B A C I Ó N

   ¿Qué tienen en común los éxitos de 1956–1970 que los hizo posibles, y por qué esos mismos rasgos hicieron fracasar la

    extrapolación a la inteligencia general?

Tema 1.2 · Historia de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                               24 / 57


---

## Página 25

T E M A  1 . 2 . 3
Los inviernos de la IA (1970–1980)

Cuando las promesas no llegaron, los fondos se secaron. Y sin embargo, en medio del hielo floreció una

industria: los sistemas expertos — que a su vez prepararon el segundo invierno.

Primer invierno. Limitaciones reales + expectativas irreales: el informe Lighthill (1973) y los recortes.

La vía de escape. Sistemas expertos: MYCIN, PROSPECTOR y XCON llevan la IA a la industria.

Segundo invierno. La fragilidad de las reglas y el colapso del mercado a finales de los 80.

«Invierno de la IA»: periodo de financiamiento reducido, desinterés público y estancamiento percibido tras una fase de euforia.

                                                                                                                                                             25 / 57


---

## Página 26

T E M A  1 . 2 . 3   · L O S  I N V I E R N O S
¿Por qué llegó el primer invierno? Tres muros técnicos

  01                    02                    03

  Cómputo y memoria                    Explosión combinatoria                Golpes al conexionismo
   insuficientes
   Las máquinas de los 60 tenían               Los métodos que funcionaban en            Perceptrons (Minsky y Papert, 1969)

   kilobytes de memoria. Problemas           «micromundos» (bloques, teoremas)        probó los límites de las redes de una

    triviales en teoría eran imposibles en         crecían exponencialmente y                capa (XOR). La investigación en

    la práctica.                                colapsaban ante problemas reales.           redes neuronales se detuvo por

                                                                                             años.

   Lección de ingeniería: la brecha entre «demostrable en teoría» y «ejecutable en producción» se llama escalabilidad.

    Ignorarla es el error recurrente de la IA — en los 60 y hoy.


Fuente: Antología de IA (UV, 2026), 1.2.3; M. Minsky y S. Papert, Perceptrons (MIT Press, 1969).


Tema 1.2 · Historia de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                            26 / 57


---

## Página 27

T E M A  1 . 2 . 3   · L O S  I N V I E R N O S
1973 — El informe Lighthill corta el financiamiento

El gobierno británico encargó al matemático Sir James Lighthill una

evaluación  independiente de  la  IA. Su  informe de  1973  fue
                                                                           E L M E C A N I S M O D E L  I N V I E R N O
demoledor:
                                                                                                                     1. Promesas públicas ambiciosas
   Los sistemas lograban resultados en problemas de juguete, pero
                                                                                        2. Evaluación externa escéptica   no escalaban al mundo real (la explosión combinatoria, en sus
                                                                                       3. Recorte de fondos públicos    palabras).

   Los  objetivos  generales anunciados —  traducción,  robótica,            4. Cierre de laboratorios

   comprensión del lenguaje — no se habían materializado.                                                                                         5. «IA» se vuelve una palabra tóxica
Consecuencia: el Reino Unido recortó drásticamente los fondos; en

EE. UU., DARPA endureció sus criterios y exigió resultados aplicados.

   Dato para la discusión: Lighthill no dijo que la IA fuera imposible — dijo que no escalaba con los métodos de la época. Tenía razón en

     el diagnóstico; los métodos cambiaron.

Fuente: J. Lighthill, «Artificial Intelligence: A General Survey», Science Research Council (Reino Unido, 1973).

Tema 1.2 · Historia de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                               27 / 57


---

## Página 28

T E M A  1 . 2 . 3   · L O S  I N V I E R N O S
El ciclo de financiamiento — esquema cualitativo

  Euforia                          Primer invierno               Boom experto                   Segundo
                        ≈
   1956–1969                                                 1974–1980                                1980–1987                           invierno         →          →          →
                                                                                                                                      1987–1993   Fondos abundantes, promesas                    Lighthill; DARPA exige                       Sistemas expertos venden
   enormes, poca rendición de                   aplicaciones; fondos básicos se                millones; Japón lanza el Quinta              Colapso del
   cuentas                                  evaporan                                 Generación (1982)                      mercado Lisp


                 ↺ …y el ciclo vuelve a empezar con el aprendizaje automático en los 90 (1.2.4)

QUÉ MUEVE EL PÉNDULO

   Demostraciones espectaculares (un juego ganado, un diagnóstico) abren la bolsa: gobiernos y empresas financian lo

    visible.

    Plazos incumplidos la cierran: los financiadores evalúan contra las promesas, no contra el avance real.

    Lección: la salud de un campo depende de calibrar expectativas — una habilidad de gestión, no solo de ciencia.


Fuente: esquema cualitativo basado en N. Nilsson, The Quest for AI (2010), y la Antología de IA (UV, 2026), 1.2.3.


Tema 1.2 · Historia de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                           28 / 57


---

## Página 29

T E M A  1 . 2 . 3   · L O S  I N V I E R N O S
Sistemas expertos — la IA se vuelve industria

La respuesta al invierno fue acotar el dominio: capturar el conocimiento de un especialista humano en reglas SI–ENTONCES y

dejar que un motor lo aplique. Edward Feigenbaum (Stanford) lo bautizó: la era de la ingeniería del conocimiento.

ARQUITECTURA CANÓNICA


   Base de conocimiento                      Motor de inferencia                       Recomendación
            →             →
   Reglas SI–ENTONCES extraídas de                    Encadena reglas (hacia adelante o atrás)                  Diagnóstico, configuración o
   expertos humanos (entrevistas largas y                  para derivar conclusiones a partir de los                 decisión — explicable regla por regla
   costosas)                                         hechos

   Dos decisiones de arquitectura que perviven: separar el conocimiento (datos/reglas) del mecanismo (motor) — principio que reaparece

   en bases de datos, motores de reglas de negocio (Drools) y sistemas de recomendación; y la explicabilidad: cada conclusión podía

    justificarse, algo que la IA actual aún intenta recuperar.


Fuente: Antología de IA (UV, 2026), 1.2.3; P. Jackson, Introduction to Expert Systems (Addison-Wesley, 1998).


Tema 1.2 · Historia de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                            29 / 57


---

## Página 30

T E M A  1 . 2 . 3   · L O S  I N V I E R N O S
MYCIN (Stanford, años 70) — el sistema experto emblemático

Tesis doctoral de Edward Shortliffe (dirigida por Bruce Buchanan):
                                                                  U N A R E G L A D E M Y C I N  ( A D A P T A D A )
diagnosticaba infecciones sanguíneas (bacteriemia y meningitis) y

recomendaba antibióticos con dosis.                                           SI la infección es bacteriemia

   ~600 reglas SI–ENTONCES escritas en Lisp, con factores de      Y el cultivo es gram-negativo

    certeza para razonar con incertidumbre médica.                   Y el paciente es inmunodeprimido

   En evaluaciones alcanzó un desempeño comparable  al de      ENTONCES sugerir gentamicina (certeza 0.7)

    especialistas en enfermedades infecciosas.
                                                                       Cada regla lleva un factor de certeza que el motor
   Nunca se usó clínicamente: responsabilidad legal, integración                                                                           combina.
    hospitalaria y la ética de delegar decisiones lo frenaron.

   Doble lección para ingenieros:  la precisión técnica no basta para  el despliegue (regulación, responsabilidad, integración); y  la

   incertidumbre es un ciudadano de primera clase — MYCIN ya la modelaba explícitamente medio siglo antes de que habláramos de

   «confianza» en modelos.


Fuente: E. Shortliffe, Computer-Based Medical Consultations: MYCIN (Elsevier, 1976); B. Buchanan y E. Shortliffe (1984).


Tema 1.2 · Historia de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                   30 / 57


---

## Página 31

T E M A  1 . 2 . 3   · L O S  I N V I E R N O S
PROSPECTOR y XCON — cuando la IA empezó a generar dinero

  PROSPECTOR (SRI, 1978)                      XCON / R1 (DEC, 1980)

    E X P L O R A C I Ó N G E O L Ó G I C A                                       C O N F I G U R A C I Ó N D E C O M P U T A D O R A S

    Evaluaba la probabilidad de yacimientos minerales a partir de            Desarrollado  por  John  McDermott  (CMU)  para  Digital

    datos geológicos, usando redes de inferencia con reglas de           Equipment: configuraba pedidos de sistemas VAX eligiendo

    expertos.                                                      componentes compatibles.

    Predijo con éxito un depósito de molibdeno en Mount Tolman             Escrito en OPS5; creció de ~750 reglas a más de 10 000 y

    (Washington) — la prueba de que el conocimiento embotellado            ahorró a DEC decenas de millones de dólares al año.

     valía dinero.

     E L B O O M

    Con casos como estos, a mediados de los 80 la industria de sistemas expertos movía cientos de millones de dólares y Japón

    respondió con el megaproyecto de Quinta Generación (1982): la IA volvía a ser estratégica.


Fuente: R. Duda et al., PROSPECTOR (SRI, 1978); J. McDermott, «R1: The Formative Years», AI Magazine (1981).


Tema 1.2 · Historia de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                                               31 / 57


---

## Página 32

T E M A  1 . 2 . 3   · L O S  I N V I E R N O S
¿Por qué los sistemas expertos se agotaron?

   El cuello de botella del conocimiento. Cada regla debía            Fragilidad. Fuera de su dominio estrecho fallaban sin red

   extraerse entrevistando expertos: meses de trabajo por          de seguridad ni sentido común: el sistema «no sabe que no

   dominio, imposible de escalar a miles de reglas                    sabe».

   coherentes.

   Mantenimiento insostenible. Con miles de reglas, cada          Costo de plataforma. Dependían de estaciones Lisp caras y

  cambio rompía otras (interacciones imprevisibles). XCON          especializadas; cuando las PC baratas las igualaron en

   necesitaba un equipo permanente solo para actualizarla.          potencia, el negocio colapsó.

     E L P A R A L E L O A C T U A L

    Sustituye «reglas extraídas a mano» por «prompts afinados a mano»: ¿qué fragilidades de los sistemas expertos reaparecen en

     las aplicaciones actuales sobre LLM?


Fuente: Antología de IA (UV, 2026), 1.2.3; D. Crevier, AI: The Tumultuous History (Basic Books, 1993).


Tema 1.2 · Historia de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                            32 / 57


---

## Página 33

T E M A  1 . 2 . 3   · L O S  I N V I E R N O S
1987–1993 — El segundo invierno

A finales de los 80 el mercado de las máquinas Lisp (estaciones
                                                                                           L A P A R A D O J A D E L  I N V I E R N O
dedicadas de Symbolics y LMI) se desplomó: las PC de Apple e IBM,
                                                                     En  el  «frío»  se hizo  el  trabajo que preparó  la
más baratas, ofrecían potencia comparable.
                                                                                   primavera:
Cientos de empresas de  sistemas expertos cerraron o fueron
                                                                                     Rumelhart,  Hinton  y  Williams  popularizan
absorbidas; el proyecto japonés de Quinta Generación terminó en                                                                                 backpropagation (1986).
1992 sin cumplir sus metas espectaculares.                                        La IA se vuelve más estadística y formal.

Los fondos volvieron a secarse y «IA» volvió a ser una etiqueta que los            Los agentes y  la robótica de comportamiento

                                                                                       replantean el campo.investigadores evitaban — muchos se refugiaron bajo nombres como

«sistemas inteligentes» o «minería de datos».


    Lectura histórica: los inviernos no detienen la ciencia — la disciplinan. El segundo invierno eliminó la sobreventa y dejó a los

    investigadores serios trabajando en los métodos que explotarían en 2012.

Fuente: Antología de IA (UV, 2026), 1.2.3; N. Nilsson, The Quest for AI (2010), cap. 23.


Tema 1.2 · Historia de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                           33 / 57


---

## Página 34

T E M A  1 . 2 . 3   · S Í N T E S I S
Lo que debes poder explicar al salir de esta sección

   1 · Causas del primer invierno. Cómputo insuficiente,        2 · Lighthill (1973). Una evaluación externa escéptica

   explosión combinatoria y límites del perceptrón — más        bastó para recortar fondos: la credibilidad es

  promesas infladas que amplificaron la caída.                    infraestructura del campo.

  3 · Sistemas expertos. Conocimiento en reglas + motor        4 · Segundo invierno. Fragilidad, mantenimiento y

  de inferencia: primer negocio real de la IA (MYCIN,            plataformas caras; el colapso de 1987–1993 depuró el

  PROSPECTOR, XCON).                              campo hacia métodos estadísticos.

     P R E G U N T A D E C O M P R O B A C I Ó N

     Si mañana una auditoría tipo Lighthill evaluara las promesas actuales de la IA generativa contra sus resultados

    medibles, ¿qué conclusiones crees que emitiría y con qué evidencia?

Tema 1.2 · Historia de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                               34 / 57


---

## Página 35

T E M A  1 . 2 . 4

El resurgimiento: aprendizaje automático y Big Data (1990–2010)


Internet inundó el mundo de datos digitales y la estadística reemplazó a las reglas escritas a mano. La

IA dejó de programarse: empezó a entrenarse.

Cambio de paradigma. De «escribe el conocimiento» a «aprende de los datos».

1997. Deep Blue derrota a Kasparov: el hito simbólico de la era.

La caja de herramientas. SVM, Random Forest, Gradient Boosting y backpropagation maduran y llegan a la industria.


Esta etapa convirtió el «machine learning» de Samuel en la columna vertebral del software comercial.

                                                                                                                                                            35 / 57


---

## Página 36

T E M A  1 . 2 . 4   · E L R E S U R G I M I E N T O
El cambio de paradigma — de las reglas a los datos

   Antes · IA simbólica (1956–1990)                           Después · Aprendizaje automático (1990→)

        El experto humano escribe las reglas                            El algoritmo induce patrones de ejemplos

        El conocimiento es explícito y verificable                        El conocimiento es estadístico, en los pesos

        Frágil fuera del dominio; no mejora solo                      Generaliza mejor; mejora con más datos

       Costo: entrevistar expertos, mantener reglas                   Costo: recolectar datos, cómputo, validación

DOS MOTORES DEL CAMBIO

   Internet y la digitalización. La web convirtió                 Madurez estadística. El campo adoptó rigor experimental:

   transacciones, textos e imágenes en datos masivos y             conjuntos de entrenamiento y prueba, validación cruzada,

   baratos — el combustible que faltaba.                           métricas comparables.


Fuente: Antología de IA (UV, 2026), 1.2.4; T. Mitchell, Machine Learning (McGraw-Hill, 1997).


Tema 1.2 · Historia de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                           36 / 57


---

## Página 37

T E M A  1 . 2 . 4   · E L R E S U R G I M I E N T O
Datos y cómputo — la curva que se aceleró


 ≈
    2 años              3.4 meses           ×300 000

    Duplicación del cómputo de                        Duplicación del cómputo en los mayores            Crecimiento total del cómputo por
   entrenamiento antes de 2012 (ritmo de la            entrenamientos entre 2012 y 2018                   entrenamiento, 2012–2018
    ley de Moore)

BIG DATA: LAS TRES V QUE DEBES SABER DEFINIR


        V                              SIGNIFICADO                                 POR QUÉ HABILITÓ AL ML


      Volumen        Terabytes a petabytes de registros                                 Suficientes ejemplos para entrenar sin escribir reglas


       Velocidad        Datos en flujo continuo (clics, sensores)                       Modelos que se actualizan y evalúan en línea


       Variedad         Texto, imagen, audio, logs, video                                      El ML deja de ser solo tablas: visión, lenguaje, voz


Fuente: D. Amodei y D. Hernández, «AI and Compute», OpenAI (mayo 2018); D. Laney, «3D Data Management», META Group (2001).


Tema 1.2 · Historia de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                              37 / 57


---

## Página 38

T E M A  1 . 2 . 4   · E L R E S U R G I M I E N T O
1997 — Deep Blue vence a Kasparov

El 11 de mayo de 1997, Deep Blue (IBM) ganó el match de revancha
contra Gari Kaspárov, campeón mundial de ajedrez: 3.5 – 2.5 en seis     3.5 – 2.5

partidas.                                                             Marcador final del match de 1997 (Nueva York)

Era una supercomputadora con 480 chips de ajedrez dedicados:

evaluaba ~200 millones de posiciones por segundo con búsqueda

en profundidad más ajustes hechos a mano por grandes maestros.                              200 M / s
Kaspárov había ganado el primer match en 1996 (4–2). La revancha                                                                               Posiciones de ajedrez evaluadas por segundo
fue el momento en que el público aceptó que una máquina podía

superar al mejor humano en un juego de «intelecto puro».


   Matices que un ingeniero debe conocer: Deep Blue no «aprendía» — era fuerza bruta especializada más ingeniería de dominio. Su victoria

   demostró el poder del cómputo masivo, pero el ajedrez es un mundo cerrado y perfecto: generalizar el triunfo era otro problema. IBM

   desmanteló el proyecto poco después.


Fuente: M. Campbell, A. J. Hoane y F. Hsu, «Deep Blue», Artificial Intelligence 134 (2002), pp. 57–83.


Tema 1.2 · Historia de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                          38 / 57


---

## Página 39

T E M A  1 . 2 . 4   · E L R E S U R G I M I E N T O
Qué significó realmente la victoria de Deep Blue

    El valor simbólico                                                 El valor técnico

    El ajedrez era, desde 1950, el «drosofila de la IA»: el          Demostró  que  búsqueda  masiva  +  hardware

   banco  de  pruebas  donde  Shannon  y  Turing            especializado + conocimiento de dominio derrotan

   imaginaron el pensamiento máquina. Ganarlo cerró              la intuición humana en espacios bien definidos. No

   una promesa de casi medio siglo.                           demostró aprendizaje ni comprensión.

     E L C O N T R A S T E Q U E A N U N C I A L O S I G U I E N T E
                           →
    1997 · Deep Blue gana con reglas afinadas por humanos   2016 · AlphaGo ganará en Go con aprendizaje. La

    distancia entre ambos es el tema 1.2.5 entero.


Kaspárov mismo lo reformuló después: el futuro no era humano vs. máquina, sino humano con máquina — los «centauros» del ajedrez avanzado.


Fuente: M. Campbell et al., «Deep Blue» (2002); G. Kasparov, Deep Thinking (2017).

Tema 1.2 · Historia de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                           39 / 57


---

## Página 40

T E M A  1 . 2 . 4   · E L R E S U R G I M I E N T O

La caja de herramientas madura — algoritmos clásicos de ML

    AÑO            ALGORITMO               AUTORES / REFERENCIA            IDEA QUE DEBES RECORDAR

                                                                                                    Gradiente eficiente para entrenar redes
     1986      Backpropagation (difusión)            Rumelhart, Hinton y Williams
                                                                                                   multicapa

               Máquinas de vectores de soporte                                                     Separar clases con el margen máximo; truco
     1995                                            Cortes y Vapnik
               (SVM)                                                                                   del kernel

                                                                                                Convoluciones + backprop en un problema
     1998      LeNet (convolucional)               LeCun et al. — dígitos manuscritos
                                                                                                                     real (cheques)

                                                                                          Ensamble de árboles: la varianza se
    2001     Random Forest                     Leo Breiman
                                                                                          promedia fuera

                                                                                          Ensamble secuencial: cada árbol corrige al
    2001      Gradient Boosting                   Jerome Friedman
                                                                                                             anterior

    Estos algoritmos siguen vivos: en datos tabulares, XGBoost y Random Forest compiten — y a menudo ganan — contra redes neuronales.

Fuente: Antología de IA (UV, 2026), 1.2.4; artículos originales citados en cada fila.

Tema 1.2 · Historia de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                      40 / 57


---

## Página 41

T E M A  1 . 2 . 4   · E L R E S U R G I M I E N T O
El ML entra a la industria — los que ya usabas en 2010

   Buscadores web. PageRank (Google, 1998) ordena la web         Filtros de spam. Clasificadores bayesianos (finales de los

  con la estructura de enlaces; después, señales aprendidas.        90) aprenden del correo de millones de usuarios.


   Recomendación. El Netflix Prize (2006–2009) popularizó       Reconocimiento de patrones. Bancos y tarjetas adoptan

    el filtrado colaborativo: USD 1 M al equipo que mejorara 10      modelos de  anomalías  entrenados con  transacciones

  % su sistema.                                                          históricas.

   Reconocimiento de voz. Modelos ocultos de Markov y       Traducción estadística. Google Translate (2006) traduce

   luego redes profundas llevan la voz a los teléfonos (Siri,       por  probabilidades  sobre  enormes  corpus,  no  por

    2011).                                                            gramáticas.

    La IA sobrevivió al invierno volviéndose invisible: entró por la puerta trasera del software que usas todos los días.

Fuente: Antología de IA (UV, 2026), 1.2.4; documentación histórica de Netflix Prize y Google.

Tema 1.2 · Historia de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                                                    41 / 57


---

## Página 42

T E M A  1 . 2 . 4   · S Í N T E S I S
Lo que debes poder explicar al salir de esta sección

   1 Cambio de paradigma. De reglas escritas por expertos                                                     2 Deep Blue (1997). Fuerza bruta especializada vence al
   a patrones inducidos de datos: la IA se entrena, no se                                                  campeón mundial: hito simbólico, no aprendizaje.
   programa.

  3 La  caja de herramientas. Backpropagation, SVM,      4   Industrialización   silenciosa.  Búsqueda,  spam,

  Random Forest y Gradient Boosting maduran con rigor      recomendación   y   fraude:    el  ML   se   vuelve

   estadístico.                                                     infraestructura cotidiana.

     P R E G U N T A D E C O M P R O B A C I Ó N

   Toma un sistema que conozcas (recomendador, filtro de spam): ¿qué datos usa, qué algoritmo clásico le quedaría y

   qué fallaría si los datos dejaran de representar el presente?

Tema 1.2 · Historia de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                               42 / 57


---

## Página 43

T E M A  1 . 2 . 5
La era del Deep Learning (2010–presente)

Redes neuronales profundas + GPU + datos masivos: la combinación que rompió todos los récords y llevó la IA

del laboratorio a la vida cotidiana de mil millones de personas.

2012. AlexNet arrasa en ImageNet: el «momento Big Bang» del aprendizaje profundo.

2016–2017. AlphaGo asombra al mundo y nace la arquitectura Transformer.

2020–presente. LLM a escala, IA generativa masiva y la primera regulación integral: la Ley de IA europea.

Es la etapa en la que trabajarás profesionalmente: conocer sus fundamentos es conocer tu herramienta.

                                                                                                                                                               43 / 57


---

## Página 44

T E M A  1 . 2 . 5   · D E E P L E A R N I N G
2012 — AlexNet y el «momento Big Bang»


En  el concurso ImageNet (ILSVRC ImageNet Large Scale Visual

Recognition Challenge  ) — clasificar 1.2 millones de imágenes en
                                                                     P O R Q U É G A N Ó — L A F Ó R M U L A
1000 categorías — AlexNet, de Alex Krizhevsky, Ilya Sutskever y
                                                                     Profundidad — 8 capas aprenden
Geoffrey Hinton (Universidad de Toronto), redujo el error top-5 a                  →
                                                                                  jerarquías de rasgos (bordes   texturas
15.3 %, cuando el segundo lugar quedó en 26.2 %.              →
                                                                                          objetos).
Una red neuronal convolucional de 8 capas y 60 millones de
                                                       GPU — el entrenamiento masivo se vuelve
parámetros, entrenada en dos GPU de consumo (NVIDIA GTX 580)
                                                                                 asequible.
durante cinco o seis días.
                                                                       Datos — ImageNet: millones de imágenes
El margen  fue  tan grande que  la comunidad de  visión por
                                                                             etiquetadas (proyecto de Fei-Fei Li, 2009).
computadora adoptó el deep learning de forma casi inmediata.


   Dato histórico: Hinton había defendido las redes neuronales desde los años 80, atravesando ambos inviernos. En 2018 recibió el Premio

   Turing con LeCun y Bengio, y en 2024 el Nobel de Física. La perseverancia en una idea «derrotada» redefinió el campo.

Fuente: A. Krizhevsky, I. Sutskever y G. Hinton, «ImageNet Classification with Deep CNNs», NeurIPS (2012).


Tema 1.2 · Historia de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                                  44 / 57


---

## Página 45

T E M A  1 . 2 . 5   · D E E P L E A R N I N G
ImageNet 2010–2015 — la caída del error lo dice todo

       30
                   28.2                                                    Cómo leer esta gráfica

       25                                     25.7
                                                                          Cada barra es el error top-5 del
                                                                              ganador de ILSVRC (ImageNet Large
       20
                                                                                       Scale Visual Recognition Challenge)
                                                                                 ese año.
       15
                                                                            15.3                                         2010–2011 mejoraban ~2 puntos al
                                                                              año con métodos clásicos; AlexNet

       10
                                                                                           bajó 10 puntos de golpe.


                                                                                                              6.7
        5
                                                                                     En 2015, ResNet (3.6 %) ya supera la
                                                                                                                                            3.6
                                                                                                            referencia humana estimada (~5.1 %) en

        0                                                                                                         esta tarea.                2010                      2011                  2012 AlexNet             2014 GoogLeNet             2015 ResNet


Fuente: resultados ILSVRC 2010–2015; O. Russakovsky et al., «ImageNet Large Scale Visual Recognition Challenge», IJCV (2015).


Tema 1.2 · Historia de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                                45 / 57


---

## Página 46

T E M A  1 . 2 . 5   · D E E P L E A R N I N G
Los tres ingredientes de la revolución profunda

 A                    B                   C

  Datos                         Cómputo                            Algoritmos

   ImageNet (14 M de imágenes                Las GPU, diseñadas para                   Backpropagation madura + mejoras

   etiquetadas), corpus web,                   videojuegos, resultaron perfectas             prácticas: ReLU, dropout, mejores

   Wikipedia: conjuntos masivos y            para álgebra lineal masiva:                    inicializaciones — hicieron

   etiquetados listos para entrenar y           multiplicaron por decenas la               entrenables las redes profundas.

   comparar.                                velocidad de entrenamiento.

   Ninguna de las tres era nueva en 2012: lo nuevo fue su coincidencia a escala. Lección: vigila las convergencias, no

    solo los inventos.


Fuente: Y. LeCun, Y. Bengio y G. Hinton, «Deep Learning», Nature 521 (2015), pp. 436–444.


Tema 1.2 · Historia de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                               46 / 57


---

## Página 47

T E M A  1 . 2 . 5   · D E E P L E A R N I N G
2016 — AlphaGo y la jugada que nadie esperaba

El Go fue durante décadas  el juego «inabordable»: su árbol de
                                                                                                                                            J U G A D A 3 7  · S E G U N D A P A R T I D A
búsqueda supera  al del ajedrez por órdenes de magnitud y  la
                                                              AlphaGo colocó una piedra en una posiciónintuición domina sobre el cálculo.
                                                             que los comentaristas juzgaron un error:En marzo de 2016, AlphaGo (DeepMind) venció 4–1 a Lee Sedol, 18
                                                                   estimaban probabilidad de 1 en 10 000 deveces  campeón  mundial,  en  Seúl,  ante  200  millones  de
                                                             que un humano la jugara.espectadores.
Combinaba redes profundas + búsqueda de árbol de Montecarlo +       Fue decisiva. Los profesionales la llamaron
autojuego: aprendió de partidas humanas y luego jugando contra sí       «no humana», hermosa y creativa.

mismo.

    El epílogo que importa: en la cuarta partida, Lee Sedol ganó con la jugada 78 — «el toque de Dios». Luego AlphaGo Zero (2017) aprendió

   solo con autojuego, sin datos humanos, y superó a su predecesor. La pregunta de Lovelace («¿puede una máquina originar algo?») dejó de

   ser retórica.


Fuente: D. Silver et al., «Mastering the Game of Go…», Nature 529 (2016); DeepMind, alphago.deepmind.com.


Tema 1.2 · Historia de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                                  47 / 57


---

## Página 48

T E M A  1 . 2 . 5   · D E E P L E A R N I N G
2017 — «Attention is all you need»: nace el Transformer

Ocho investigadores de Google (Vaswani et  al.) propusieron
                                                                       E L L I N A J E Q U E S I G U I Ó
una arquitectura para traducción que eliminaba la recurrencia:
                                                                    2018 · BERT (Google) y GPT-1 (OpenAI)
en lugar de procesar palabra por palabra, el mecanismo de
                                                                    2019 · GPT-2: 1 500 M parámetros
atención compara todas las palabras entre sí, en paralelo.                                                             2020 · GPT-3: 175 000 M
Consecuencias: entrenamiento masivamente paralelo en GPU,      2022→ · ChatGPT, GPT-4, Claude, Gemini…
contexto  largo  (cada  token  «atiende»  a  los  demás)  y         Casi todo LLM actual es un Transformer

escalabilidad — más datos y más capas siguen mejorando el        entrenado para predecir el siguiente token.

modelo.

    Para tu biblioteca: es uno de los artículos más citados del siglo XXI. El título es deliberadamente provocador: la atención sustituye a la

    recurrencia y la convolución como mecanismo central.

Fuente: A. Vaswani et al., «Attention Is All You Need», NeurIPS (2017).


Tema 1.2 · Historia de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                             48 / 57


---

## Página 49

T E M A  1 . 2 . 5   · D E E P L E A R N I N G
La carrera de escala — los LLM crecen mil veces en dos años

                                                                                                                          175.0         Cómo leer esta gráfica


      150
                                                                                    Parámetros de la familia GPT (miles

                                                                             de millones): de 0.117 a 175 — ×1500

                                                                             en dos años.

      100                                                                  Con     la    escala    aparecieron

                                                                                    capacidades  emergentes:  traducir,

                                                                                     resumir    o    programar     sin

                                                                                    entrenamiento específico.
       50


                                                                                               2023:  GPT-4  añade  multimodalidad;

                                                                                            surgen  Claude,  Gemini  y  modelos
                                                                                1.5                           0.1
        0
                  GPT-1 (2018)                                GPT-2 (2019)                                GPT-3 (2020)              abiertos como Llama.


Fuente: T. Brown et al., «Language Models are Few-Shot Learners» (GPT-3), NeurIPS (2020); OpenAI (2018–2023).


Tema 1.2 · Historia de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                               49 / 57


---

## Página 50

T E M A  1 . 2 . 5   · D E E P L E A R N I N G
ChatGPT — la adopción más rápida de la historia del software

       30
                                                                                                                              30.0
                                                            Cómo leer esta gráfica


       25
                                                                         Meses que tardó cada servicio en

                                                                                                    llegar a 100 millones de usuarios
       20
                                                                                          activos mensuales.

                                                                          ChatGPT se lanzó el 30 de
       15
                                                                           noviembre de 2022 y cruzó la

                                                                         marca en enero de 2023.
       10

                                                                                9.0

        5
                                                                                      UBS: «no recordamos un crecimiento

                           2.0                                                           más rápido en una aplicación de
        0
                   ChatGPT                                            TikTok                                          Instagram                                                                                                    internet de consumo».


Fuente: UBS, con datos de Similarweb (febrero 2023); Reuters, «ChatGPT sets record…» (2 feb. 2023).


Tema 1.2 · Historia de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                    50 / 57


---

## Página 51

T E M A  1 . 2 . 5   · D E E P L E A R N I N G
2022 — La IA generativa sale del laboratorio

   Texto                             Imagen                              Código

  ChatGPT (nov. 2022) convierte el        DALL·E 2, Midjourney y Stable          GitHub Copilot (2021–2022),

  LLM en producto conversacional;         Diffusion (2022): modelos de            sobre modelos de OpenAI,

  GPT-4 (2023) añade                       difusión que crean imágenes            autocompleta funciones

   razonamiento avanzado y              desde una descripción en                completas: la IA entra al IDE del

   multimodalidad.                         lenguaje natural.                          ingeniero.

     E L D E B A T E A B I E R T O

    ¿Estos sistemas «entienden» o solo recombinan patrones? Es la Habitación China de Searle (tema 1.1.2) con millones

   de usuarios — y la respuesta decide cómo los regulamos y en qué tareas confiamos en ellos.

Fuente: Antología de IA (UV, 2026), 1.2.5; OpenAI (2022–2023); R. Rombach et al., Stable Diffusion / LDM (CVPR 2022).


Tema 1.2 · Historia de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                                                 51 / 57


---

## Página 52

T E M A  1 . 2 . 5   · D E E P L E A R N I N G
2024 — La IA entra a la era de la regulación

El impacto masivo trajo la respuesta institucional: la Ley de IA de
                                                                          P I R Á M I D E D E R I E S G O  ( A I A C T )
la Unión Europea (Reglamento 2024/1689), primera regulación

integral del mundo, aprobada en 2024 con aplicación escalonada    ▲ Inaceptable — prohibido

                                     ▲desde 2025.                                                                    Alto riesgo — obligaciones estrictas
                                     ▲Su  enfoque  es  basado  en   riesgo:  prácticas  prohibidas          Limitado — deberes de transparencia
                                     ▲                                                             Mínimo — sin nuevas obligaciones(manipulación, vigilancia biométrica masiva), alto riesgo regulado
                                                                               Multas: hasta 35 M EUR o 7 % de la facturación(salud,  empleo,   justicia),  riesgo  limitado  (transparencia  en
                                                                                       global.chatbots) y mínimo (libre).


   Por qué te toca: el cumplimiento se implementa en software — registros de datos, trazabilidad, documentación de modelos,

   evaluación de sesgos. El ingeniero de IA de 2026 diseña pensando en regulación, como ya lo hace con seguridad o privacidad. (El

   tema 1.3 retoma la ética y la gobernanza.)


Fuente: Reglamento (UE) 2024/1689 del Parlamento Europeo y del Consejo, DOUE (12 julio 2024).


Tema 1.2 · Historia de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                             52 / 57


---

## Página 53

T E M A  1 . 2 . 5   · S Í N T E S I S
Lo que debes poder explicar al salir de esta sección

   1 · AlexNet (2012). Red convolucional + GPU +             2 · AlphaGo (2016). Aprendizaje por refuerzo y

  ImageNet: el punto de inflexión que instaló el deep         autojuego superan la intuición humana en Go — con

   learning.                                                 jugadas «creativas».

  3 · Transformer (2017). La atención habilitó los LLM:        4 · Regulación (2024). La Ley de IA europea inaugura

  GPT-3, ChatGPT y la IA generativa masiva de 2022 en          la gobernanza por niveles de riesgo: la IA ya es asunto

   adelante.                                          de Estado.

     P R E G U N T A D E C O M P R O B A C I Ó N

   Compara el ciclo actual (euforia por la IA generativa, inversión récord) con 1956–1973: ¿qué es

    estructuralmente distinto esta vez — datos, cómputo, productos reales — y qué riesgos de invierno persisten?

Tema 1.2 · Historia de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                             53 / 57


---

## Página 54

T E M A  1 . 2   · C I E R R E
Cinco lecciones de setenta años para tu práctica profesional

   1  · Calibra las expectativas. Las predicciones de Simon y Minsky fallaron por décadas; evalúa capacidades

   medibles, no promesas — y documenta los límites de lo que construyes.

  2 · Los datos y el cómputo mandan. Cada resurgimiento vino de más datos (Internet, ImageNet) y más cómputo

   (GPU): el rendimiento de un sistema de IA es inseparable de su infraestructura.

  3  · Las ideas «derrotadas» regresan. Las redes neuronales fueron desechadas dos veces y hoy dominan. No

  confundas «no funciona aún» con «no funciona nunca».

  4 · El despliegue es el problema difícil. MYCIN era preciso y nunca se usó en clínica: regulación, responsabilidad e

   integración pesan tanto como la precisión del modelo.

  5 · La ética y la ley son parte del diseño. Del efecto ELIZA al AI Act: cada generación redescubre que la IA opera

  sobre personas. Diseña pensando en ellas desde el primer commit.

Tema 1.2 · Historia de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                                54 / 57


---

## Página 55

T E M A  1 . 2   · S Í N T E S I S V I S U A L
 Línea de tiempo — los hitos del tema en una vista

    1950                     1966                     1997                    2016                  2020               2023–24
Turing: el juego de                 ELIZA, el primer              Deep Blue vence a             AlphaGo vence a Lee             GPT-3: 175 mil M de             GPT-4, Gemini,
    imitación                         chatbot                       Kaspárov                         Sedol                       parámetros                   Claude; AI Act

                 1956                    1980                    2012                    2017                  2022
               Dartmouth: nace el             Boom de los                  AlexNet: el Big Bang                     El paper del                ChatGPT y DALL·E 2
                 campo                      sistemas expertos                  profundo                     Transformer

    Observa la aceleración: 62 años separan Turing de AlexNet; solo doce separan AlexNet del AI Act. Cada

    etapa comprimió la anterior — y la tuya se escribe ahora.


  Fuente: síntesis de la Antología de IA (UV, 2026), tabla de hitos de la sección 1.2.


 Tema 1.2 · Historia de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                              55 / 57


---

## Página 56

T E M A  1 . 2   · R E F E R E N C I A S
Fuentes del tema

Base del curso                                                               Inviernos y sistemas expertos

· Universidad Veracruzana (2026). Antología de Inteligencia Artificial, sección             · Lighthill, J. (1973). Artificial Intelligence: A General Survey. Science Research

1.2.                                                                              Council, Reino Unido.

Historia general                                                                                                                                     · Shortliffe, E. (1976). Computer-Based Medical Consultations: MYCIN. Elsevier.

· Nilsson, N. (2010). The Quest for Artificial Intelligence. Cambridge University            · Minsky, M. y Papert, S. (1969). Perceptrons. MIT Press.

Press.                                                                   Resurgimiento y deep learning

· Boden, M. (2016). AI: Its Nature and Future. Oxford University Press.                              · Campbell, M., Hoane, A. J. y Hsu, F. (2002). «Deep Blue». Artificial Intelligence 134.

· Mayor, A. (2018). Gods and Robots. Princeton University Press.                                         · Krizhevsky, A., Sutskever, I. y Hinton, G. (2012). «ImageNet Classification with

Nacimiento del campo                                             Deep CNNs». NeurIPS.

· Turing, A. M. (1950). «Computing Machinery and Intelligence». Mind 59(236).             · Silver, D. et al. (2016). «Mastering the Game of Go…». Nature 529.

· McCarthy, J., Minsky, M., Rochester, N. y Shannon, C. (1955). A Proposal for                  · Vaswani, A. et al. (2017). «Attention Is All You Need». NeurIPS.

the Dartmouth Summer Research Project on AI.                                                                       · Brown, T. et al. (2020). «Language Models are Few-Shot Learners» (GPT-3).

· Samuel, A. L. (1959). «Some Studies in Machine Learning Using the Game of       NeurIPS.

Checkers». IBM J. Res. Dev.                                                                                                                 · Unión Europea (2024). Reglamento (UE) 2024/1689 — Ley de IA.

Cifras de adopción y cómputo: UBS/Similarweb (2023); OpenAI, «AI and Compute» (2018).

Tema 1.2 · Historia de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                             56 / 57


---

## Página 57

T E M A  1 . 2   · C I E R R E

La historia de la IA no es un museo:
es el manual de advertencias del presente.

Setenta años de ciclos enseñan lo mismo: las ideas correctas llegan cuando los datos, el cómputo y los

algoritmos maduran juntos — y las promesas sin evidencia siempre cobran su factura.

                                                                                                                                                                 57 / 57
