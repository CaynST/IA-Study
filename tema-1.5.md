# Problemas computacionales y formulación

> Fuente primaria: Capítulo 1.5 Problemas computacionales y formulación.pdf. 46 páginas.

> Transcripción de texto extraído del material de clase, conservando la numeración de páginas. Las imágenes, diagramas y tablas visuales deben cotejarse con el PDF original. No se han añadido afirmaciones externas.


---

## Página 01

I N T E L I G E N C I A A R T I F I C I A L   ·  I N G E N I E R Í A D E S O F T W A R E
Problemas computacionales y
formulación para búsqueda
de soluciones

Capítulo 1.5 · Septiembre 2026


---

## Página 02

O R I E N T A C I Ó N
Antes de elegir el algoritmo, hay que formular el problema


 Este capítulo se enfoca en definir qué es un problema computacional y cómo se formula para que un algoritmo de búsqueda

pueda resolverlo.

                                        CAPÍTULO 1.5
  CAPÍTULO 1                                                                   CAPÍTULO 2
                                              ¿Qué problema resolvemos y cómo se
   ¿Qué es la inteligencia artificial?                                                                ¿Con qué algoritmo se resuelve?
                                                     formula?
    Filosofía, historia y estado actual de la                                                              Búsquedas no informadas,
                                                         Decisiones, restricciones, objetivos,
    disciplina.                                                                                              informadas, locales y poblacionales.
                                                            tipos de problemas, espacios de

                                                búsqueda y representaciones.

I D E A C E N T R A L
«Los errores más frecuentes en algoritmos de búsqueda no son sintácticos: provienen de una formulación
incompleta del problema.»

Capítulo 1.5 · Problemas computacionales y formulación para búsqueda de soluciones                                                                                            2


---

## Página 03

O R I E N T A C I Ó N
Propósito general del capítulo


Que el estudiante identifique, describa y modele problemas reales susceptibles de resolverse mediante

algoritmos de búsqueda, distinguiendo con claridad los elementos que componen la formulación.

E L E S T U D I A N T E D I S T I N G U I R Á

01 · El problema del mundo real de su representación     04 · El tipo de espacio de búsqueda involucrado en el

computacional.                                        problema.

02 · Las decisiones que deben tomarse y las restricciones   05 · La diferencia entre una solución factible, una

que deben respetarse.                                    solución óptima y una solución suficientemente buena.

03 · La meta o condición de éxito y la función objetivo o

criterio de calidad.

Nota didáctica: en este capítulo no se programa. El objetivo es dominar el lenguaje del problema antes que el lenguaje de programación.

Capítulo 1.5 · Problemas computacionales y formulación para búsqueda de soluciones                                                                                           3


---

## Página 04

O R I E N T A C I Ó N
Resultados de aprendizaje: lo que podrás hacer al concluir


1. Diferenciar un problema computacional, una instancia,      6. Formular problemas  sencillos como espacios de
una solución y un algoritmo.                                     estados.
2. Identificar variables de decisión, dominios, restricciones       7. Distinguir entre soluciones factibles, óptimas, locales,
y objetivos en una situación sencilla.                             globales y no factibles.
3.   Distinguir  problemas  de   decisión,   factibilidad,      8. Identificar cuándo un problema puede resolverse con
optimización, enumeración y conteo.                       búsqueda sistemática, heurística, local o poblacional.
4.  Reconocer  las  principales  familias  de  problemas      9. Comprender que la elección del algoritmo depende
resolubles mediante búsqueda.                            de la formulación y de las propiedades del problema,
5.  Representar un  problema  mediante  tablas,  grafos,    no sólo del lenguaje de programación.
matrices, conjuntos o lenguaje natural estructurado.               10. Comunicar una formulación de forma precisa antes
                                                     de escribir código.

Capítulo 1.5 · Problemas computacionales y formulación para búsqueda de soluciones                                                                            4


---

## Página 05

O R I E N T A C I Ó N
Ruta del capítulo: once unidades en cuatro bloques

                                              1.5.1 Del problema real al problema computacional · 1.5.2 Elementos fundamentales · 1.5.3Bloque I
El lenguaje del problema          Tipos de problemas · 1.5.4 Soluciones, calidad y optimalidad

                                          1.5.5 Espacios de búsqueda y representaciones: estados, acciones, grafos, árboles, matrices yBloque II
Representación                   explosión combinatoria

                                          1.5.6 Optimización combinatoria · 1.5.7 Satisfacción de restricciones · 1.5.8 Rutas, redes yBloque III
Familias de problemas           caminos óptimos · 1.5.9 Búsqueda en lenguaje natural y recuperación de información

                                         1.5.10 Selección del enfoque de resolución · 1.5.11 Taller integrador: formular antes deBloque IV
Del problema al algoritmo        programar

Cada unidad produce una evidencia: fichas de modelado, tablas de variables, grafos de estados, formulaciones y una especificación final de
problema.

Capítulo 1.5 · Problemas computacionales y formulación para búsqueda de soluciones                                                                                             5


---

## Página 06

1 . 5 . 1   · D E L P R O B L E M A R E A L A L P R O B L E M A C O M P U T A C I O N A L
Un problema existe cuando hay una meta, decisiones y límites

                                                                          E J E M P L O G U I A D O
Presentamos un problema como una situación en la que existen, de
                                                          Una estudiante debe elegir cinco
forma simultánea, cinco elementos:
                                                                       materias optativas para el siguiente

                                                                          semestre.
  Un estado actual o situación inicial.
                                                                            Decisiones: qué materias inscribir.
  Una necesidad, meta o resultado deseado.
                                                                               Restricciones: sin horarios traslapados y
  Un conjunto de decisiones posibles.
                                                                 cumpliendo prerrequisitos.
   Limitaciones que impiden elegir cualquier alternativa.
                                                                               Preferencia: minimizar los días que
  Uno o varios criterios para evaluar las alternativas.
                                                                                     asiste a la universidad.

                                                                   Hay decisiones, restricciones y una

                                                                                       preferencia: existe un problema susceptible

                                                                      de formalizarse y, eventualmente, resolverse

                                                                     con búsqueda.

Capítulo 1.5 · Problemas computacionales y formulación para búsqueda de soluciones                                                                                           6


---

## Página 07

1 . 5 . 1   · D E L P R O B L E M A R E A L A L P R O B L E M A C O M P U T A C I O N A L
Modelar es conservar lo relevante y omitir lo irrelevante


El mundo real contiene demasiados detalles. Un modelo computacional conserva los elementos relevantes para el objetivo y

omite, temporalmente, los irrelevantes.

             Elemento del mundo real                                      Posible modelo computacional

 Calles de una ciudad                                     Grafo: intersecciones como nodos y calles como aristas

 Salones, docentes y horarios                              Variables, dominios y restricciones

 Productos, capacidad y presupuesto                    Objetos con peso, valor y límite de capacidad

 Palabras de una consulta web                         Términos, documentos, índices y puntuaciones

 Tareas de un proyecto                                   Actividades, precedencias, recursos y fechas

 Tablero de ajedrez                                       Estados, movimientos legales y condición de victoria


  Modelar no es programar. Antes de implementar BFS, DFS, A*, hill climbing o un algoritmo genético, debe existir una
  formulación clara del problema.

Capítulo 1.5 · Problemas computacionales y formulación para búsqueda de soluciones                                                                                                7


---

## Página 08

1 . 5 . 1   · D E L P R O B L E M A R E A L A L P R O B L E M A C O M P U T A C I O N A L
Problema, instancia, solución, algoritmo y representación

                                                                    E J E M P L O C O N R U T A S

   Problema. La familia general de situaciones a resolver.                Concepto                 Ejemplo
    Instancia. Un caso específico del problema, con datos
                                                                                           Encontrar la ruta de menor costo
                                                                 Problema
    concretos.                                                                                 entre dos ubicaciones

    Solución. Respuesta válida para esa instancia.                                                        Ir de Xalapa a Veracruz con costos
                                                                              Instancia
                                                                                            concretos de carreteras
   Algoritmo. Procedimiento para hallar una solución.
                                                                                          Secuencia de ciudades o   Representación. Estructura de datos usada para expresar         Solución
                                                                                                  intersecciones
    el problema y sus soluciones.
                                                                      Algoritmo            BFS, Dijkstra, A* o una heurística


                                                                      Representación      Grafo ponderado


                                                                                      El mismo problema general (ruta de menor costo) admite
                                                             muchas  instancias;  cada  instancia  puede  tener  varias
                                                                               soluciones, y varios algoritmos pueden encontrarlas.

Capítulo 1.5 · Problemas computacionales y formulación para búsqueda de soluciones                                                                                        8


---

## Página 09

1 . 5 . 1   · A C T I V I D A D E N E Q U I P O S
Práctica: pensar en problemas, todavía sin algoritmos

C I N C O  S I T U A C I O N E S                               P O R C A D A  S I T U A C I Ó N , R E S P O N D A N

A. Repartir paquetes en una ciudad.                                  1. ¿Cuál es el problema?

B. Elaborar el horario de clases de un grupo.                2. ¿Qué información se necesita?

C. Resolver un Sudoku.                                         3. ¿Qué decisiones deben tomarse?

D. Buscar un documento en una colección.                  4. ¿Qué condiciones no pueden violarse?

E. Organizar las tareas de un proyecto.                       5. ¿Cómo sabrían que una solución es buena?

Regla de la actividad: no se deben mencionar algoritmos todavía. El objetivo es formar pensamiento de modelado.

Capítulo 1.5 · Problemas computacionales y formulación para búsqueda de soluciones                                                                                           9


---

## Página 10

1 . 5 . 2   · E L E M E N T O S F U N D A M E N T A L E S D E U N P R O B L E M A
Seis elementos forman el lenguaje común de todo el curso


Esta unidad es el núcleo conceptual del capítulo: proporciona el vocabulario que usarán todas las unidades posteriores.

  Datos de entrada                Variables de decisión          Dominios                        Restricciones
  Describen la instancia            Aquello que el algoritmo          Valores permitidos para          Condiciones que toda
  concreta a resolver.            debe elegir o construir.          cada variable.                    solución válida debe
                                                                                                      cumplir.

                  Objetivo y función objetivo                      Solución
              Qué se quiere mejorar y cómo se mide la             El resultado: candidata, factible, óptima o no
                   calidad de una solución.                               factible (unidad 1.5.4).

Cómo leerlo: con los datos se describen las variables y sus dominios; las restricciones delimitan lo válido; el objetivo indica

qué se considera mejor. De esa interacción surge la solución.

Capítulo 1.5 · Problemas computacionales y formulación para búsqueda de soluciones                                                                                                  10


---

## Página 11

1 . 5 . 2   · E L E M E N T O S F U N D A M E N T A L E S D E U N P R O B L E M A
Los datos de entrada describen la instancia concreta

Todo lo que se conoce del caso particular que se va a resolver es un dato de entrada. Puede adoptar muchas formas:

                                                          E J E M P L O
   Números y listas
                                               En una asignación de desarrolladores a tareas, la entrada puede   Textos y tablas
                                                             ser una matriz donde cada valor representa el costo o tiempo
   Imágenes y coordenadas
                                                 de asignar al desarrollador a la tarea .
   Redes o grafos                                                       La misma idea se repite en otros problemas:
                                →    Reglas y preferencias                                                           Rutas   tabla de distancias.
                                 →
    Costos, tiempos o probabilidades                         Mochila    lista de pesos y valores.
                                  →
                                                           Horarios   disponibilidad y capacidades.    Restricciones ya conocidas

Pregunta de verificación: si cambian los datos de entrada, ¿cambia el problema o sólo la instancia? (Cambia la instancia; el problema
general permanece.)


Capítulo 1.5 · Problemas computacionales y formulación para búsqueda de soluciones                                                                                                                                           11


---

## Página 12

1 . 5 . 2   · E L E M E N T O S F U N D A M E N T A L E S D E U N P R O B L E M A
Las variables de decisión son aquello que se debe elegir


Representan lo que el algoritmo debe elegir, construir o modificar para producir una solución.

                                                                                     E J E M P L O  F O R M A L  S E N C I L L O

          Problema                         Variable de decisión                      Para la mochila 0/1, cada objeto se

                                                                                   representa con una variable binaria:                                    Materia, docente y aula asignados a cada
 Horario académico
                               bloque

 Mochila                              Si cada objeto se incluye o no


 Ruta de reparto                Orden en que se visitan los clientes

                                                                                                  Esta expresión se introduce de manera
 Sudoku                          Valor colocado en cada celda vacía
                                                                                                                  intuitiva: todavía no se requieren
                                                                                       conocimientos formales de programación TSP                           Permutación u orden de visita de las ciudades
                                                                                                                      lineal. Lo importante es reconocer que una
                            Documentos seleccionados y ordenados por                                                                                             decisión puede escribirse como una Recuperación de información
                                    relevancia
                                                                                                     variable.

Capítulo 1.5 · Problemas computacionales y formulación para búsqueda de soluciones                                                                                                              12


---

## Página 13

1 . 5 . 2   · E L E M E N T O S F U N D A M E N T A L E S D E U N P R O B L E M A
El dominio es el conjunto de valores permitidos


Cada variable de decisión tiene un dominio: el conjunto de valores que puede tomar. Definirlo con precisión acota el

espacio de búsqueda.

                    Variable                                              Dominio


 Variable binaria (incluir o no un objeto)                 {0,1}


 Día de clase                                                        {𝑙𝑢𝑛𝑒𝑠, 𝑚𝑎𝑟𝑡𝑒𝑠, ..., 𝑣𝑖𝑒𝑟𝑛𝑒𝑠}


 Color de un mapa                                                 {𝑟𝑜𝑗𝑜, 𝑣𝑒𝑟𝑑𝑒, 𝑎𝑧𝑢𝑙}


 Posición de una reina en un tablero de columnas     {1,2,...,𝑛}


 Documento recuperado                        Conjunto de documentos almacenados en una colección

Idea clave: un dominio mal definido produce soluciones absurdas (una materia asignada a un día inexistente) o un espacio de

búsqueda innecesariamente grande.


Capítulo 1.5 · Problemas computacionales y formulación para búsqueda de soluciones                                                                                                             13


---

## Página 14

1 . 5 . 2   · E L E M E N T O S F U N D A M E N T A L E S D E U N P R O B L E M A
Restricciones duras no se negocian; las blandas expresan preferencias


Una restricción es una condición que una solución debe cumplir para considerarse válida. Conviene distinguir dos clases:


           Tipo                              Significado                                  Ejemplo

 Restricción dura        No puede violarse                        Dos materias no pueden ocupar el mismo horario


 Restricción blanda         Idealmente se cumple, pero puede negociarse   Se prefiere no tener clases a las 7:00 a.m.

E J E M P L O S D E R E S T R I C C I O N E S

   Capacidad máxima de un vehículo.                       Dos países vecinos no deben compartir color.

    Presupuesto.                                       Una palabra debe aparecer en el documento para ser

   Un docente no puede impartir dos grupos                      coincidencia exacta.

   simultáneamente.                                   Una tarea no puede comenzar antes de que termine su

   Cada ciudad debe visitarse una sola vez.                       predecesora.

Capítulo 1.5 · Problemas computacionales y formulación para búsqueda de soluciones                                                                                                                  14


---

## Página 15

1 . 5 . 2   · E L E M E N T O S F U N D A M E N T A L E S D E U N P R O B L E M A
La función objetivo dice qué significa «mejor»


 Algunos problemas sólo requieren una solución válida; otros requieren        E J E M P L O : M O C H I L A 0 / 1

 elegir la mejor entre muchas soluciones válidas. La función objetivo

 expresa ese criterio.


E J E M P L O S D E O B J E T I V O S

   Minimizar tiempo                 Maximizar utilidad

   Minimizar costo                  Maximizar cobertura

   Minimizar distancia               Maximizar relevancia

   Reducir conflictos                   Equilibrar carga de trabajo

                                                                                 La finalidad no es hacer

                                                                                demostraciones matemáticas, sino

                                                                                    expresar explícitamente qué se quiere

                                                                              mejorar y qué límites existen.

 Capítulo 1.5 · Problemas computacionales y formulación para búsqueda de soluciones                                                                                                               15


---

## Página 16

1 . 5 . 3   · T I P O S D E P R O B L E M A S C O M P U T A C I O N A L E S
No todo problema busca «el camino más corto»: seis tipos de salida


Antes de buscar, hay que saber qué forma tiene la respuesta esperada. Cada tipo de problema responde una pregunta distinta.


      Tipo de problema                Pregunta que responde                            Ejemplo


 Decisión                           ¿Existe solución? (sí / no)                       ¿Hay un camino entre dos nodos de una red?


 Factibilidad                      ¿Cuál es una solución válida?                    Generar un horario de exámenes sin traslapes


 Optimización                    ¿Cuál es la mejor solución?                      Ruta de menor distancia


 Enumeración                    ¿Cuáles son todas las soluciones?                     Listar todas las rutas entre dos nodos


 Conteo                         ¿Cuántas soluciones existen?                    ¿Cuántos horarios factibles hay?


 Ranking / recuperación          ¿En qué orden conviene mostrarlas?             Ordenar páginas web para una consulta


Clasificar el problema es el primer paso del diagnóstico

Capítulo 1.5 · Problemas computacionales y formulación para búsqueda de soluciones                                                                                                             16


---

## Página 17

1 . 5 . 3   · T I P O S D E P R O B L E M A S C O M P U T A C I O N A L E S
Decisión y factibilidad: ¿existe? ¿puedes darme una?


Problemas de decisión                        Problemas de factibilidad
La salida es «sí» o «no».                                      Buscan al menos una solución que cumpla todas las restricciones,
                                                                          sin necesidad de que sea la mejor.

    ¿Existe un camino entre dos nodos de una red?                Generar un horario de exámenes sin traslapes.

    ¿Es posible aprobar todas las materias respetando               Resolver un Sudoku.

    horarios y prerrequisitos?                                    Colorear un mapa con tres colores sin que países

    ¿Existe una asignación de aulas sin conflictos?                  vecinos compartan color.

   ¿Puede una mochila alcanzar al menos cierto valor sin          Colocar ocho reinas sin que se ataquen.

   exceder la capacidad?                                        Asignar proyectos respetando capacidades y

                                                                         requisitos.

Contraste clave: la decisión pregunta por la existencia; la factibilidad exige exhibir una solución que cumpla las reglas.

Capítulo 1.5 · Problemas computacionales y formulación para búsqueda de soluciones                                                                                                                 17


---

## Página 18

1 . 5 . 3   · T I P O S D E P R O B L E M A S C O M P U T A C I O N A L E S
Optimización, enumeración, conteo y ranking


Optimización                                   Conteo
Buscan la mejor solución según una función objetivo.            Buscan determinar cuántas soluciones existen.

   Ruta de menor distancia; horario con mínimos huecos.            ¿Cuántas maneras hay de asignar cinco tareas a cinco

    Distribución de paquetes de menor costo.                        personas?

    Selección de funcionalidades con máximo valor y                ¿Cuántos caminos hay entre dos ubicaciones?

   tiempo limitado.                                              ¿Cuántas soluciones tiene el problema de las ocho reinas?

Enumeración                                   Ranking o recuperación
Buscan generar todas las soluciones posibles o válidas.           Buscan ordenar alternativas según una medida de calidad o

    Listar todas las rutas posibles entre dos nodos.                  relevancia.

   Todas las combinaciones de materias optativas.                 Ordenar páginas web para una consulta.

   Enumerar todas las soluciones de un Sudoku.                 Recomendar películas según preferencias.

                                                                              Clasificar currícula según coincidencia con una vacante.

Capítulo 1.5 · Problemas computacionales y formulación para búsqueda de soluciones                                                                                                           18


---

## Página 19

1 . 5 . 4   · S O L U C I O N E S , C A L I D A D Y O P T I M A L I D A D
De candidata a óptima: tres filtros sobre las soluciones

                                                          Solución candidata. Cualquier alternativa propuesta, aunque
                         Soluciones candidatas
                                                    aún no se verifique si cumple las restricciones.

                                                                                            Ej.: un horario que asigna una materia a cada grupo, pero
                          Soluciones factibles
                                                           podría contener conflictos de aula o docente.


                                                          Solución factible. Cumple todas las restricciones duras.

                                                                                            Ej.: una ruta que visita todos los destinos requeridos y no

                          Soluciones óptimas                                                       excede la capacidad del vehículo.


                                                          Solución óptima. Factible y con el mejor valor posible de la

                                                          función objetivo.

                                                                       Si se minimiza costo, es la de menor costo; si se maximiza

                                                                        utilidad, la de mayor utilidad.

Capítulo 1.5 · Problemas computacionales y formulación para búsqueda de soluciones                                                                                                             19


---

## Página 20

1 . 5 . 4   · S O L U C I O N E S , C A L I D A D Y O P T I M A L I D A D
Subóptima, exacta, aproximada: el vocabulario de la calidad


Solución subóptima
Es una solución válida, pero no la mejor conocida o posible. Este concepto es esencial antes de estudiar búsqueda voraz, hill

climbing, recocido simulado, búsqueda tabú y algoritmos genéticos: esas técnicas pueden producir soluciones muy buenas sin

garantizar siempre la solución óptima.

C U A T R O  F O R M A S D E B U S C A R

Método exacto. Busca garantizar una solución óptima.

Método aproximado. Encuentra una solución de calidad aceptable con menor esfuerzo computacional.

Heurística. Regla práctica o estimación que guía la búsqueda.

Metaheurística. Estrategia general para explorar espacios grandes: recocido simulado, búsqueda tabú, algoritmos genéticos.

Conexión con el capítulo 2: las búsquedas no informadas, informadas, ramificación y poda pertenecen a enfoques con garantías; las

estrategias locales y poblacionales intercambian la garantía de optimalidad por eficiencia en espacios grandes.

Capítulo 1.5 · Problemas computacionales y formulación para búsqueda de soluciones                                                                                  20


---

## Página 21

1 . 5 . 4   · S O L U C I O N E S , C A L I D A D Y O P T I M A L I D A D
 Óptimo local y óptimo global: el paisaje de soluciones


  Imagina el espacio de soluciones como un paisaje con montañas y valles, donde la altura es la calidad de la solución.

                                                                         Óptimo local. El mejor punto de una zona

                                                                                            cercana.                                                            Óptimo global
                                                                                  el mejor de todo el espacio
                                                                         Óptimo global. El mejor punto de todo el

                                                                                        espacio de soluciones.


                        Óptimo local                                                      Ejemplo. Al organizar un horario, mover
                            el mejor de la zona cercana
                                                                            una  materia puede  mejorar  el  horarioCalidad
                                                                                                        actual, pero impedir una reorganización

                                                                      más amplia que daría un resultado mucho

                                                                                         mejor.


                                                                                             Este fenómeno prepara la comprensión de

                                                                                                                          hill climbing, recocido simulado y búsqueda
                                                         Espacio de soluciones
                                                                                     tabú (capítulo 2).

   Capítulo 1.5 · Problemas computacionales y formulación para búsqueda de soluciones                                                                                                              21


---

## Página 22

1 . 5 . 5   · E S P A C I O S D E B Ú S Q U E D A Y R E P R E S E N T A C I O N E S
El espacio de búsqueda es el universo de alternativas a explorar


Espacio de búsqueda. El conjunto de todas las soluciones, configuraciones o estados que podrían explorarse para resolver

un problema. Ej.: con cinco materias y cinco franjas posibles, el espacio contiene todas las combinaciones de asignación,

aunque muchas sean inválidas.

Estado. Una configuración parcial o completa del                     L E C T U R A  I N T U I T I V A

problema.                                                      Buscar una solución es recorrer el espacio de búsqueda:

                                                                            partir de un estado, explorar configuraciones vecinas y
¿ Q U É E S U N E S T A D O E N . . . ?
                                                                    evaluar si cumplen las restricciones y el objetivo.
    Laberinto: posición actual del agente.
                                                               La formulación del problema define  el tamaño y  la
    8-puzzle: disposición de las fichas.
                                                         forma de ese espacio; el algoritmo sólo decide cómo
    Horario: materias ya asignadas.
                                                                        recorrerlo.
    TSP: ciudades visitadas y ciudad actual.

   Recuperación de información: consulta procesada y

   documentos candidatos.

TSP: Traveling salesman problem


Capítulo 1.5 · Problemas computacionales y formulación para búsqueda de soluciones                                                                                           22


---

## Página 23

1 . 5 . 5   · E S P A C I O S D E B Ú S Q U E D A Y R E P R E S E N T A C I O N E S
Las acciones transforman estados; la búsqueda va del inicio a la meta

                             acción                                    acción
      Estado inicial                     Estados intermedios                     Estado meta

 configuración de partida              configuraciones parciales                   satisface el objetivo

A C C I O N E S U O P E R A D O R E S : E J E M P L O S                           I N I C I O Y M E T A E N D O S P R O B L E M A S

   Moverse arriba, abajo, izquierda o derecha en un laberinto.
                                                                    Rutas. Estado inicial: ubicación del origen. Estado meta:
   Intercambiar dos ciudades en una ruta.
                                                                             llegar al destino.
   Asignar una materia a un bloque de horario.
                                                           Sudoku. Estado inicial: tablero parcialmente lleno.   Colocar una reina en la siguiente columna.
                                                                Estado meta: tablero completo que cumple las reglas.   Agregar o eliminar un objeto de una mochila.

    Sustituir un término por un sinónimo en una consulta.

Capítulo 1.5 · Problemas computacionales y formulación para búsqueda de soluciones                                                                                          23


---

## Página 24

1 . 5 . 5   · E S P A C I O S D E B Ú S Q U E D A Y R E P R E S E N T A C I O N E S
La representación adecuada hace visible la estructura del problema


Cinco representaciones cubren la mayoría de los problemas del curso. Elegir bien simplifica la búsqueda; elegir mal la

complica.

      Representación                    Cuándo usarla                                 Ejemplo

                                                             Mapa de carreteras, red social, dependencias
 Grafo                       Existen entidades y relaciones o trayectorias
                                                                    de tareas

                           La solución se construye mediante decisiones        Árbol de decisiones, juego, combinaciones
 Árbol
                            secuenciales                                  de objetos

                                                                         Sudoku, matriz de distancias, asignación de
 Matriz                 Hay costos, distancias, compatibilidades o celdas
                                                                                     tareas


 Lista o permutación        Importa el orden de los elementos                  Ruta del viajante, orden de tareas


 Cadena de texto           Se buscan patrones o coincidencias lingüísticas       Consultas, documentos, palabras clave


Verificación: ¿la representación captura todas las decisiones y restricciones del problema sin arrastrar detalles irrelevantes?

Capítulo 1.5 · Problemas computacionales y formulación para búsqueda de soluciones                                                                                             24


---

## Página 25

1 . 5 . 5   · E S P A C I O S D E B Ú S Q U E D A Y R E P R E S E N T A C I O N E S
La explosión combinatoria hace inviable revisar todo


Las alternativas crecen de forma acelerada: con 10 ciudades hay 10! órdenes posibles; con 20 objetos que se pueden tomar o dejar,

2^20 combinaciones; en ajedrez, las posiciones crecen rápidamente con cada movimiento.


                                                             No es necesario profundizar todavía en

                                                                                complejidad computacional; basta observar

                                                                           por qué no siempre se puede revisar todo

                                                                                                     el espacio.

                                                                     Cuando la fuerza bruta deja de ser viable

                                                                              aparecen los protagonistas del capítulo 2:

                                                                                   algoritmos  de  búsqueda,  heurísticas  y

                                                                                      metaheurísticas.

                                                                                           Actividad: calcula a mano , y y compara los

                                                                             órdenes de magnitud.

Capítulo 1.5 · Problemas computacionales y formulación para búsqueda de soluciones                                                                                           25


---

## Página 26

1 . 5 . 6   · P R O B L E M A S D E O P T I M I Z A C I Ó N C O M B I N A T O R I A
Optimización combinatoria: elegir lo mejor entre combinaciones discretas


Estudia problemas en los que se debe elegir la mejor alternativa dentro de un conjunto discreto —y usualmente muy

grande— de combinaciones, órdenes, asignaciones o subconjuntos.

C A R A C T E R Í S T I C A S T Í P I C A S                               C U A T R O P R O B L E M A S C L Á S I C O S

    Variables discretas: sí/no, entero, color, ciudad, tarea o
                                                              Mochila 0/1. Seleccionar objetos.    posición.
                                                                      Viajante de comercio (TSP). Secuenciar visitas.    Restricciones explícitas.
                                                                     Asignación. Emparejar personas y tareas.   Una función objetivo que se desea minimizar o maximizar.
                                                                 Secuenciación de tareas. Ordenar trabajos en   Espacio de soluciones de crecimiento combinatorio.
                                                                    recursos limitados.   Frecuentemente,  dificultad para encontrar  la  solución

   óptima en tiempos razonables.

Capítulo 1.5 · Problemas computacionales y formulación para búsqueda de soluciones                                                                                          26


---

## Página 27

1 . 5 . 6   · P R O B L E M A S D E O P T I M I Z A C I Ó N C O M B I N A T O R I A
La mochila 0/1: máximo valor sin rebasar la capacidad


Una mochila de capacidad limitada y un conjunto de objetos con peso y valor. Se desea seleccionar los objetos de mayor

valor total sin rebasar la capacidad (5 kg).

      Objeto          Peso       Valor             T R E S V E R E D I C T O S  S O B R E U N A M I S M A  S E L E C C I Ó N

 Laptop              3 kg         9

                                      No factible: laptop + cámara + batería = 7 kg, excede los 5 kg. Cámara              2 kg         6
                                                           Factible: batería + botiquín + libro = 5 kg, valor total 12.
 Libro                        1 kg         3
                                                Óptima: laptop + cámara = 5 kg, valor total 15, el máximo posible.
 Batería               2 kg         5

 Botiquín             2 kg         4


                                                      Conexión con ingeniería de software: seleccionar las funcionalidades de la primera

                                                              versión de un producto, donde cada una tiene costo de desarrollo y valor para el

                                                                 usuario.

Capítulo 1.5 · Problemas computacionales y formulación para búsqueda de soluciones                                                                                             27


---

## Página 28

1 . 5 . 6   · P R O B L E M A S D E O P T I M I Z A C I Ó N C O M B I N A T O R I A
El viajante de comercio: una ruta es una permutación de ciudades


Un vendedor debe visitar varias ciudades y regresar al origen, minimizando la distancia total recorrida.

C O N C E P T O S Q U E  I N T R O D U C E                                                                   Matriz de
                                                            A       B      C     D
                                                                          distancias
 La ruta es una permutación de ciudades.
                                                     A       —         12        9         15
 Las distancias se organizan en una matriz.
                                                             B            12     —        7        10  Restricción: visitar cada ciudad una sola vez.

  Objetivo: minimizar distancia o costo.                                                       C          9        7     —       8
  El número de rutas crece de forma factorial.
                                                 D            15        10       8     —


                                                                          Matriz ilustrativa de cuatro ciudades: rutas posibles.


Aplicaciones cercanas: planeación de entregas, rutas de soporte técnico, recorridos de recolección de residuos, inspección de

infraestructura y secuenciación de pruebas de software.

Capítulo 1.5 · Problemas computacionales y formulación para búsqueda de soluciones                                                                                         28


---

## Página 29

1 . 5 . 6   · P R O B L E M A S D E O P T I M I Z A C I Ó N C O M B I N A T O R I A
Asignación: cada persona, exactamente una tarea


Asignar personas a tareas minimizando el tiempo o costo total: cada persona realiza exactamente una tarea y cada tarea

se asigna a una sola persona.

                                                            P R E G U N T A S G U Í A
  Desarrollador /                Base de
                      Interfaz               Pruebas                                                             1.¿Qué significa una solución en este problema?    módulo                     datos
                                                         2.¿Qué restricciones se deben respetar?
      Ana            4 h        8 h        6 h
                                                         3.¿Qué se busca minimizar?

      Bruno          7 h        3 h        5 h                                                     4.¿Cómo representaría la solución?

                                                     5.¿Cómo cambia el problema si un desarrollador puede
       Carla           5 h        6 h         4 h
                                                                          realizar más de una tarea?

           →         →
Explorando a mano: Ana   interfaz (4 h), Bruno   base
         →
de datos (3 h), Carla   pruebas (4 h) suman 11 h, la mejor

asignación posible de las alternativas.

Capítulo 1.5 · Problemas computacionales y formulación para búsqueda de soluciones                                                                                          29


---

## Página 30

1 . 5 . 6   · P R O B L E M A S D E O P T I M I Z A C I Ó N C O M B I N A T O R I A
Secuenciación de tareas: ordenar trabajos sobre recursos limitados


Organizar tareas en máquinas, personas o recursos limitados para minimizar el tiempo total, los retrasos o los costos.

E J E M P L O S                                              C O N C E P T O S E S E N C I A L E S

   Asignación de tareas de un sprint a desarrolladores.
                                                       Tiempo de procesamiento: duración de cada tarea.
    Planificación de pruebas de software.
                                                                 Recurso: quién o qué la ejecuta.
   Uso de laboratorios universitarios.
                                                            Fecha límite: cuándo debe estar lista.
   Programación de procesos en CPU.
                                                          Dependencia o precedencia: qué tarea debe terminar
   Turnos de soporte técnico.
                                                                          antes.

                                                       Tiempo de terminación: cuándo concluye el

                                                                    conjunto.

                                                                  Cuello de botella: el recurso que limita el avance.

Capítulo 1.5 · Problemas computacionales y formulación para búsqueda de soluciones                                                                                  30


---

## Página 31

1 . 5 . 7   · P R O B L E M A S D E S A T I S F A C C I Ó N D E R E S T R I C C I O N E S
Un CSP: asignar valores a variables sin violar restricciones


Un problema de satisfacción de restricciones (CSP) consiste en asignar valores a variables de modo que todas las restricciones se

cumplan. A diferencia de la optimización, no se busca «la mejor» solución: se busca una solución válida; después puede

agregarse una función objetivo.
                                                                                     CSP (Constraint Satisfaction Problem o Problema de Satisfacción de Restricciones)


                       Variables                             Dominios                                 Restricciones

                qué se debe asignar                          valores permitidos                       condiciones a cumplir

                                                          Solución: asignación válida

                                                      todas las restricciones satisfechas

La formulación mínima de un CSP son esas tres piezas. Coloreo de mapas, Sudoku, -reinas y horarios son instancias de esta familia.

Capítulo 1.5 · Problemas computacionales y formulación para búsqueda de soluciones                                                                                                             31


---

## Página 32

1 . 5 . 7   · P R O B L E M A S D E S A T I S F A C C I Ó N D E R E S T R I C C I O N E S
Coloreo de mapas: vecinos nunca comparten color


Colorear regiones de un mapa de forma que dos regiones vecinas no compartan            E S Q U E M A : G R A F O C O L O R E A D O

color.


      Elemento                           Interpretación

 Variables             Regiones o nodos

 Dominio              Colores disponibles

 Restricción            Regiones adyacentes deben tener distinto color

 Solución              Asignación de color válida


                                                                                        Cuatro  regiones; como  A, B  y C sonEn ingeniería de software: asignación de frecuencias en redes inalámbricas,
                                                                             mutuamente  vecinas,  hacen   falta  tres
distribución de turnos incompatibles, registro de variables en compiladores y
                                                                                                     colores;  los nodos  conectados  siempre
planificación de exámenes sin traslapes.                                                                                           reciben colores distintos.

Capítulo 1.5 · Problemas computacionales y formulación para búsqueda de soluciones                                                                                          32


---

## Página 33

1 . 5 . 7   · P R O B L E M A S D E S A T I S F A C C I Ó N D E R E S T R I C C I O N E S
Sudoku y n-reinas: dos CSP que todos pueden razonar

Sudoku
Completar un tablero de de modo que cada fila, columna      Problema de las n reinas

y subcuadro  contenga  los números  del  1  al 9  sin
                                                             Colocar reinas en un tablero de ajedrez de sin que dos
repetición.
                                                                 reinas se ataquen: ni en la misma fila, ni en la misma
Variables: celdas vacías.
                                                          columna, ni en la misma diagonal.
Dominio: valores posibles del 1 al 9.
                                                                     Variables: posición de cada reina (dominio por columna).Restricciones: no repetición por fila, columna y subcuadro.
                                                                      Restricciones: sin ataques mutuos.Estado parcial: tablero incompleto.
                                                              Meta: tablero con las reinas colocadas.Meta: tablero completo y consistente.

Es un ejemplo ideal: todos lo conocen y sus elementos se            Puente al capítulo 2: este problema conecta de forma natural
                                                            con backtracking, búsqueda local y algoritmos genéticos.identifican con facilidad.

Capítulo 1.5 · Problemas computacionales y formulación para búsqueda de soluciones                                                                                          33


---

## Página 34

1 . 5 . 7   · P R O B L E M A S D E S A T I S F A C C I Ó N D E R E S T R I C C I O N E S
Horarios universitarios: un CSP con restricciones duras y blandas


Asignar materias, grupos, docentes, aulas y horarios sin conflictos, cumpliendo capacidad y disponibilidad.

        Componente                                         Ejemplo

 Variables                         Horario de cada grupo

 Dominios                        Bloques de horario y aulas disponibles

 Restricciones duras                Sin traslapes; aula con capacidad suficiente; docente disponible

 Restricciones blandas                Evitar horarios nocturnos; minimizar huecos; equilibrar carga docente

 Objetivo opcional                 Minimizar conflictos o preferencias incumplidas


  Primero se busca factibilidad (cumplir las restricciones duras); después, si se agrega una función objetivo, el mismo

  modelo se convierte en un problema de optimización.

Capítulo 1.5 · Problemas computacionales y formulación para búsqueda de soluciones                                                                                             34


---

## Página 35

1 . 5 . 8   · R U T A S , R E D E S Y C A M I N O S Ó P T I M O S
Una red se modela como un grafo: nodos y conexiones


Una red se representa mediante un grafo:                                             E S Q U E M A : G R A F O P O N D E R A D O

   nodos — ubicaciones, tareas o entidades.

    aristas — rutas, dependencias o relaciones.

Si las conexiones tienen distancia, tiempo, costo o capacidad, es un grafo

ponderado.


      Término                             Definición

 Camino               Secuencia de nodos conectados

 Costo de un camino   Suma de los pesos de las aristas

 Ruta               Camino que representa un recorrido con propósito                                                                                   Los números sobre las aristas son los
                                                                                           pesos: costo, tiempo o distancia de cada Ciclo               Camino que comienza y termina en el mismo nodo
                                                                                       conexión.
 Conectividad           Posibilidad de llegar de un nodo a otro

Capítulo 1.5 · Problemas computacionales y formulación para búsqueda de soluciones                                                                                           35


---

## Página 36

1 . 5 . 8   · R U T A S , R E D E S Y C A M I N O S Ó P T I M O S
Tres rutas factibles de A a D, pero sólo una es óptima

                                                                          V E R E D I C T O
                                                                        A→B→D: 12 min — factible
                                                                       A→E→F→D: 15 min — factible
                                                                      A→C→D: 9 min — óptima

                                                                                                ¿Y si se busca minimizar

                                                                                                                  peajes, evitar tráfico o

                                                                                                   atender varios clientes? El

                                                                                          problema evoluciona hacia

                                                                                                    optimización

                                                                                                      combinatoria.

Los tres caminos son factibles porque sus conexiones existen; sólo A→C→D es óptimo respecto al tiempo.

Capítulo 1.5 · Problemas computacionales y formulación para búsqueda de soluciones                                                                                          36


---

## Página 37

1 . 5 . 8   · R U T A S , R E D E S Y C A M I N O S Ó P T I M O S
La ruta más corta no siempre se busca de la misma manera


Encontrar un camino entre un origen y un destino con costo total mínimo. El enfoque correcto depende de las

propiedades del grafo:

                           Situación                                         Enfoque conceptual

 Todas las aristas tienen el mismo costo                          Buscar el menor número de pasos (BFS)

 Las aristas tienen distintos costos positivos                       Buscar el menor costo acumulado (Dijkstra)

 Existe estimación de distancia al destino                         Usar una guía heurística (A*)

 Se deben visitar varios destinos                               Se convierte en un problema más complejo, como TSP o VRP

Así se entiende por qué BFS es adecuado en grafos sin pesos, mientras que A* combina el costo acumulado con una

estimación heurística del costo restante.
                                                                                                                                                                   BFS: Breadth-First Search
A P L I C A C I O N E S

Navegación GPS · ruteo de paquetes en redes de computadoras · rutas de reparto · evacuación en edificios · movimientos en

robótica · dependencias entre módulos de software · rutas críticas en proyectos.


Capítulo 1.5 · Problemas computacionales y formulación para búsqueda de soluciones                                                                                            37


---

## Página 38

1 . 5 . 9   · B Ú S Q U E D A E N L E N G U A J E N A T U R A L Y R E C U P E R A C I Ó N D E  I N F O R M A C I Ó N
Buscar en texto también es explorar alternativas


La búsqueda no es sólo laberintos, mapas o grafos: el software cotidiano resuelve problemas de búsqueda sobre texto,

documentos y conocimiento. Búsqueda literal: dado un texto y una palabra o patrón, localizar todas las apariciones.


E J E M P L O S                                   D I S T I N C I O N E S  I M P O R T A N T E S

                                                             Coincidencia exacta — el texto aparece tal cual.
 Buscar una palabra en un archivo.
                                                             Coincidencia parcial — sólo una parte coincide.
 Localizar una variable en un proyecto de código.
                                                        Mayúsculas y minúsculas — ¿«Error» y «error» son lo mismo?
 Detectar una cadena dentro de registros de un sistema.
                                                      Búsqueda de prefijos — «optimi…» encuentra «optimizar»,
 Encontrar palabras prohibidas en comentarios.
                                                                 «optimización».

                                                            Expresiones regulares — patrones con estructura flexible.

Capítulo 1.5 · Problemas computacionales y formulación para búsqueda de soluciones                                                                     38


---

## Página 39

1 . 5 . 9   · B Ú S Q U E D A E N L E N G U A J E N A T U R A L Y R E C U P E R A C I Ó N D E  I N F O R M A C I Ó N
Recuperación de información: de la consulta al ranking


Ejemplo. Consulta: «algoritmos de búsqueda en inteligencia artificial». Colección: apuntes, artículos, páginas web o

documentos PDF. Resultado esperado: documentos ordenados de mayor a menor relevancia.


                     Componente                                 Descripción

              Consulta                               Palabras, pregunta o frase ingresada por el usuario

             Corpus                             Colección de documentos disponibles

               Índice                                Estructura que facilita localizar términos

            Documento candidato             Documento que contiene términos relacionados

              Relevancia                       Medida de utilidad del documento para una consulta

             Ranking                          Ordenamiento de resultados según relevancia


Aquí el «espacio de búsqueda» es la colección de documentos, y la «solución» es una lista ordenada, no un camino.

Capítulo 1.5 · Problemas computacionales y formulación para búsqueda de soluciones                                                                                          39


---

## Página 40

1 . 5 . 9   · B Ú S Q U E D A E N L E N G U A J E N A T U R A L Y R E C U P E R A C I Ó N D E  I N F O R M A C I Ó N
La búsqueda semántica entiende la intención, no sólo las palabras


Una búsqueda semántica intenta recuperar documentos que expresan una idea relacionada, aunque no usen
                                          →
exactamente  las mismas palabras. Consulta: «cómo reducir  el tiempo de entrega»    documento relevante:

«optimización de rutas de distribución».


C A S O : B U S C A D O R D E  I N C I D E N C I A S                P R E G U N T A S G U Í A

Una empresa tiene miles de reportes de errores. Un          1.¿Cuál es la consulta?

desarrollador escribe «la aplicación se cierra al guardar».          2.¿Cuál es el espacio de búsqueda?

El sistema debe recuperar tickets relacionados, incluso si        3.¿Qué hace que un ticket sea relevante?

usan   términos  como   «crash»,   «fallo»,   «termina       4.¿Cómo ordenarías los resultados?

inesperadamente» o «error al persistir datos».                   5.¿Una coincidencia exacta siempre es la

                                                          mejor respuesta?

Este tema conecta la recuperación de información con representación de conocimiento y, más adelante, con aprendizaje automático.


Capítulo 1.5 · Problemas computacionales y formulación para búsqueda de soluciones                                                                  40


---

## Página 41

1 . 5 . 1 0   · C Ó M O E L E G I R E L E N F O Q U E D E R E S O L U C I Ó N
Diez preguntas de diagnóstico antes de elegir un algoritmo

  1.¿Se requiere una respuesta sí/no, una solución válida, todas las soluciones o la mejor solución?

  2.¿Las decisiones son discretas, continuas o mixtas?

  3.¿Existen restricciones duras y blandas?

  4.¿El problema puede representarse como un grafo, una matriz, una secuencia o una asignación?

  5.¿Se conoce el estado inicial?

  6.¿Se puede identificar claramente el estado meta?

  7.¿Se necesita la solución óptima o basta una solución suficientemente buena?

  8.¿El espacio de soluciones es pequeño o crece explosivamente?

  9.¿Hay información adicional que permita estimar qué alternativas son más prometedoras?

 10.¿Se tiene límite de tiempo, memoria o recursos de cómputo?

Capítulo 1.5 · Problemas computacionales y formulación para búsqueda de soluciones                                                                                                                  41


---

## Página 42

1 . 5 . 1 0   · C Ó M O E L E G I R E L E N F O Q U E D E R E S O L U C I Ó N
Mapa de decisión: de la forma del problema a la familia de algoritmos


Este mapa conecta cada característica del problema con el enfoque que se estudiará en el capítulo 2.


                      Característica del problema                            Enfoque que se estudiará después

 Se desea explorar niveles y obtener el menor número de pasos        Búsqueda primero en amplitud (BFS)

 Se desea explorar profundamente usando poca memoria            Búsqueda primero en profundidad (DFS)

 Se cuenta con una estimación de cercanía a la meta                 Búsqueda heurística o A*

 Se requiere una solución factible con muchas restricciones            Backtracking y búsqueda en CSP

 Se busca una solución óptima en un espacio combinatorio moderado   Ramificación y poda

 El espacio es demasiado grande y basta una solución de alta calidad      Hill climbing, recocido simulado o búsqueda tabú

 Se desea explorar muchas soluciones simultáneamente               Algoritmos genéticos y búsquedas poblacionales


Idea de cierre: la elección del algoritmo depende de la formulación y de las propiedades del problema, no del lenguaje de programación.

Capítulo 1.5 · Problemas computacionales y formulación para búsqueda de soluciones                                                                                             42


---

## Página 43

1 . 5 . 1 1   · T A L L E R  I N T E G R A D O R : F O R M U L A R A N T E S D E P R O G R A M A R
Especificación de un problema completo, sin escribir código


Una empresa debe asignar cinco desarrolladores a ocho historias de usuario. Cada historia tiene esfuerzo estimado, prioridad, fecha límite y

dependencias; cada desarrollador tiene habilidades y una capacidad máxima de horas por sprint. Se busca una asignación factible que maximice el valor

de negocio y minimice el retraso.

                 Elemento                                                          Respuesta esperada

  Nombre del problema                        Asignación de historias de usuario a desarrolladores

  Tipo de problema                           Optimización combinatoria con restricciones

  Datos de entrada                                  Historias, prioridades, estimaciones, habilidades, capacidad, dependencias

  Variables de decisión                          Desarrollador asignado y sprint de ejecución de cada historia

  Dominio de variables                          Desarrolladores y sprints disponibles

  Restricciones duras                           Capacidad, dependencias, compatibilidad de habilidades

  Restricciones blandas                           Equilibrar carga, respetar preferencias, reducir cambios de contexto

  Función objetivo                           Maximizar valor entregado y minimizar retraso

  Representación                              Tabla de asignación, grafo de dependencias y matriz de habilidades

  Solución factible                        Cumple capacidades y dependencias

  Solución óptima                           Maximiza valor bajo las restricciones

  Posible estrategia                          Búsqueda con restricciones, heurística o metaheurística

  Criterios de evaluación                            Factibilidad, valor total, retraso, equilibrio de carga


Capítulo 1.5 · Problemas computacionales y formulación para búsqueda de soluciones                                                                                             43


---

## Página 44

C I E R R E   · E J E R C I C I O S P R O P U E S T O S
Seis ejercicios para consolidar la formulación

1.  Clasificación  de  problemas.  Clasifica  como  decisión,       4.  Grafo de  rutas. Con un mapa  simplificado de  la

factibilidad,  optimización,  enumeración,  conteo o  ranking:      universidad: representa ubicaciones como nodos, caminos

conexión entre dos computadoras; horario de exámenes sin    como  aristas, asigna tiempos, identifica rutas factibles y

traslapes; distribución de paquetes de menor costo; todas las     determina la de menor tiempo; explica qué cambia con

contraseñas de cuatro caracteres; cuántos caminos hay entre dos      calles bloqueadas o tiempos variables.

nodos; documentos por relevancia.                                         5. Formulación de un Sudoku. Para un Sudoku de , describe

2. Variables, dominios y restricciones. Para un horario semanal      variables, dominio, restricciones, estado inicial, estado meta,

de tres materias, identifica variables, dominios, restricciones     espacio de búsqueda aproximado y una estrategia adecuada.

duras, blandas y un posible objetivo.                                       6. Búsqueda documental. Diseña un buscador para los

3. Mochila aplicada a software. Con 40 horas disponibles y seis     documentos de una  materia:  corpus,  cinco  consultas,

funcionalidades (registro 8 h/valor 9; inicio de sesión 6/8; perfil      criterio de relevancia, limitaciones de la coincidencia exacta

10/6; reportes 16/10; notificaciones 12/7; panel 18/8), formula     y tratamiento de sinónimos y errores ortográficos.

variables, restricción, objetivo, dos soluciones factibles, una no

factible y la mejor manual.

Capítulo 1.5 · Problemas computacionales y formulación para búsqueda de soluciones                                                                                                44


---

## Página 45

C I E R R E   · R E P A S O
Aprender por contraste y evitar los errores frecuentes

                                                                            E R R O R E S  F R E C U E N T E S A L
              Contraste                       Pregunta clave                                                                                  F O R M U L A R

                                 ¿Cumple las reglas o además es la
 Solución factible / óptima                                           No definir con precisión el estado.                                    mejor?
                                                              No distinguir entre restricciones y
                                   ¿Puede violarse o sólo es una
 Restricción dura / blanda                                        preferencia?                                       objetivo.
                                                                               Confundir ruta más corta con ruta de                                       ¿Sólo importa si existe o cuál es la
 Decisión / optimización
                                    mejor?                                                                   menor costo.

                                                              No especificar qué constituye una meta. Grafo no ponderado / ponderado      ¿Todas las acciones cuestan igual?
                                                                                                Elegir una representación inadecuada.
 Búsqueda exacta / aproximada         ¿Se necesita garantía o rapidez?                                                                               Usar búsqueda exhaustiva cuando el

                                                                                    espacio es inmanejable.                                    ¿Mejoró cerca o es realmente lo
 Óptimo local / global
                                    mejor?                                          Intentar optimizar sin definir una

                                                                                 función objetivo. Coincidencia literal / relevancia       ¿Mismas palabras o responde a la
 semántica                             intención?

Capítulo 1.5 · Problemas computacionales y formulación para búsqueda de soluciones                                                                                              45


---

## Página 46

R E F E R E N C I A S
Fuentes y lecturas recomendadas

Espacios de estados, formulación de problemas y búsqueda
Russell, S. y Norvig, P. (2021). Artificial Intelligence: A Modern Approach (4.ª ed.), Pearson, cap. 3. pearson.com


Algoritmos, grafos, caminos mínimos y NP-completitud
Cormen, T., Leiserson, C., Rivest, R. y Stein, C. (2022). Introduction to Algorithms (4.ª ed.), MIT Press. mitpress.mit.edu
Garey, M. R. y Johnson, D. S. (1979). Computers and Intractability: A Guide to the Theory of NP-Completeness, W. H.
Freeman. dblp.org


Optimización combinatoria y metaheurísticas
Talbi, E.-G. (2009). Metaheuristics: From Design to Implementation, Wiley. onlinelibrary.wiley.com


Recuperación de información y búsqueda en texto
Manning, C., Raghavan, P. y Schütze, H. (2008). Introduction to Information Retrieval, Cambridge University Press.
nlp.stanford.edu/IR-book (versión en línea gratuita)

Capítulo 1.5 · Problemas computacionales y formulación para búsqueda de soluciones                                                                                             46
