# Filosofía de la inteligencia artificial

> Fuente primaria: Capítulo 1 — Tema 1.1 Filosofía de la Inteligencia Artificial.pdf. 50 páginas.

> Transcripción de texto extraído del material de clase, conservando la numeración de páginas. Las imágenes, diagramas y tablas visuales deben cotejarse con el PDF original. No se han añadido afirmaciones externas.


---

## Página 01

C A P Í T U L O  1   ·  I N T E L I G E N C I A A R T I F I C I A L
Filosofía de la
Inteligencia Artificial

Tema 1.1 · Definición, el test de Turing y la consciencia

Experiencia educativa Inteligencia Artificial · Ingeniería de Software

FACULTAD DE NEGOCIOS Y TECNOLOGÍAS


---

## Página 02

R U T A D E L A C L A S E
Agenda

         Introducción al capítulo. Por qué la IA es una disciplina transformadora y qué lugar ocupa en tu
  01
         formación como ingeniero de software.


              1.1.1 Definición y alcance. Los cuatro enfoques de Russell y Norvig, el agente racional y el continuo
  02
        que va de sistemas reactivos a la inteligencia artificial general.


             1.1.2 ¿Pueden pensar las máquinas? El Test de Turing de 1950 y la crítica de John Searle con su
  03
         Habitación China de 1980.


             1.1.3 Consciencia artificial. El problema difícil de Chalmers, el funcionalismo, el dualismo y sus
  04
          implicaciones éticas y legales.


         Tres disciplinas que se confunden. Diferencias, similitudes y relación entre Estadística, Ciencia de
  05
          datos e Inteligencia Artificial.

Tema 1.1 · Filosofía de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                    02 / 50


---

## Página 03

I N T R O D U C C I Ó N A L C A P Í T U L O  1
Una disciplina que transforma todos los sectores

La Inteligencia  Artificial constituye una de las disciplinas más transformadoras de la era contemporánea:

trasciende las fronteras de la Ciencia de la Computación e ingresa en prácticamente todos los sectores de la

actividad humana.

   «Desde su concepción teórica hasta su implementación práctica en sistemas que reconocen voz, conducen

   vehículos autónomos y diagnostican enfermedades, la IA representa el intento más ambicioso de la

   humanidad por crear entidades capaces de emular la cognición humana.»

En este capítulo veremos qué es la IA, de dónde viene y cuál es su estado actual.

Tema 1.1 · Filosofía de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                   03 / 50


---

## Página 04

I N T R O D U C C I Ó N A L C A P Í T U L O  1
La IA ya salió del laboratorio y opera en la vida diaria

    Reconocimiento de voz                 Vehículos autónomos                   Diagnóstico médico

Asistentes,   dictado   y   subtitulado    Waymo, uno de los mayores operadores    En 2023 la FDA de EE. UU. aprobó 223

automático convierten voz en texto y    de EE. UU., brinda más de 150,000 viajes     dispositivos médicos con IA, frente a

acciones en tiempo real.                 autónomos  por  semana;  el  robotaxi     solo 6 en 2015.

                                          Apollo Go de Baidu opera en  varias

                                         ciudades de China.

150,000+       223              109.1 mmd

Viajes autónomos semanales de Waymo    Dispositivos médicos con IA aprobados    Dólares de inversión privada en IA solo en EE.

(AI Index 2025).                           por la FDA en 2023; en 2015 fueron 6.        UU. durante 2024.


Fuente: Stanford HAI, AI Index Report 2025.

Tema 1.1 · Filosofía de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                      04 / 50


---

## Página 05

I N T R O D U C C I Ó N A L C A P Í T U L O  1
La adopción empresarial de IA se cuadruplicó en siete años

       80
                                                                                                                                        78.0
                                                            Cómo leer esta gráfica


                                                                                      Cada  barra  indica  el  porcentaje  de
       60
                                                  58.0                                                                organizaciones encuestadas que usan IA
                                                                                    56.0                                                                                                                       55.0
                                                                                     en al menos una función del negocio.
                                                                   50.0                               50.0
                                47.0                                                                            Tras un estancamiento  entre 2019 y

       40
                                                                                                 2022,  la  llegada de  la  IA  generativa

                                                                                           impulsó la adopción hasta 78 % en 2024.

       20
               20.0

                                                                                                   La IA ya es infraestructura de negocio, no

        0                                                                             un experimento.             2017.0           2018.0           2019.0           2020.0           2021.0           2022.0           2023.0           2024.0


Fuente: Stanford HAI, AI Index Report 2025, con datos de las encuestas McKinsey State of AI (2017–2024).


Tema 1.1 · Filosofía de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                    05 / 50


---

## Página 06

I N T R O D U C C I Ó N A L C A P Í T U L O  1
Para ti, la IA no es opcional: es parte del oficio

   «Para  el  estudiante de  ingeniería de  software, comprender  los

   fundamentos de la IA no es meramente un requisito académico, sino                        +34 %   una  necesidad  profesional en un mundo donde  los  sistemas
                                                                                   Crecimiento  proyectado   del  empleo  de    inteligentes están redefiniendo la manera en que interactuamos con
                                                                                                   científicos de datos en EE. UU. entre 2024 y
    la tecnología.»
                                                                                      2034:   la   cuarta   ocupación  de  mayor

                                                                                     crecimiento del país.
                                                                                                     Fuente: Oficina de Estadísticas Laborales de EE. UU.
                                                                                                                        (BLS), proyecciones 2024–2034.
    Antología de Inteligencia Artificial, capítulo 1 (UV, 2026).

    La construcción de software moderno requiere cada vez más  integrar                                                                                    La mitad de las organizaciones que usan IA
   búsqueda, optimización y aprendizaje automático: por eso esta experiencia       afirman que necesitarán más profesionales de

    es un pilar de tu formación.                                                    IA de los que tienen hoy (McKinsey, State of AI

                                                                                             2025).

Tema 1.1 · Filosofía de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                   06 / 50


---

## Página 07

T E M A  1 . 1
Filosofía de la Inteligencia Artificial

Cuestiones sobre la naturaleza de la mente, la conciencia y la posibilidad de que las máquinas piensen — con

consecuencias directas en cómo diseñamos, implementamos y regulamos los sistemas de IA.

1.1.1 ¿Qué es exactamente la Inteligencia Artificial y hasta dónde llega?

1.1.2 ¿Pueden pensar las máquinas? El Test de Turing y la Habitación China.

1.1.3 ¿Podría una máquina ser consciente? Problemas filosóficos y sus implicaciones.

Estas preguntas orientan la lectura analítica y crítica que realizarás como parte del saber heurístico del curso.

                                                                                                                                                07 / 50


---

## Página 08

T E M A  1 . 1 . 1
Definición y alcance

Antes de programar sistemas inteligentes hay que responder una pregunta aparentemente simple: ¿qué

cuenta como inteligencia artificial?

Meta de la sección: que puedas dar una definición precisa de IA y situar cualquier sistema actual en el mapa de

la disciplina.

                                                                                                                                           08 / 50


---

## Página 09

T E M A  1 . 1 . 1   · D E F I N I C I Ó N Y A L C A N C E
La IA construye sistemas que hacen lo que requiere inteligencia
humana

La Inteligencia Artificial es el campo dedicado a crear sistemas computacionales capaces de

realizar tareas que normalmente requieren inteligencia humana.

Esas tareas incluyen

    Razonamiento lógico                              Reconocimiento de patrones visuales


    Aprendizaje a partir de la experiencia             Toma de decisiones en entornos complejos


   Comprensión del lenguaje natural

Fíjate en el «normalmente»: la frontera de la IA se mueve cada vez que una tarea se vuelve cotidiana.


Tema 1.1 · Filosofía de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                   09 / 50


---

## Página 10

T E M A  1 . 1 . 1   · D E F I N I C I Ó N Y A L C A N C E
Cuatro enfoques para definir la IA (Russell y Norvig, 2021)

                                                    SE MIDE CONTRA LO HUMANO

                    Pensar como humano                       Actuar como humano
                     Reproducir los procesos cognitivos de la         Que el comportamiento sea indistinguible del
                   mente humana. Se estudia con ciencia           de una persona. Se evalúa con el Test de
                        cognitiva y neurociencia computacional.            Turing.

   PENSAR                                                                                     ACTUAR

                    Pensar racionalmente                                                               Actuar racionalmente
                     Razonar con lógica irrefutable: inferencia                                                                                  Elegir la acción que maximiza el resultado
                       correcta a partir de premisas. Base de los                                                                       esperado. El enfoque del agente racional,
                       sistemas expertos.                                                               dominante hoy.

                                            SE MIDE CONTRA UN IDEAL DE RACIONALIDAD

Fuente: Russell y Norvig, Artificial Intelligence: A Modern Approach, 4ª ed., Pearson, 2021


Tema 1.1 · Filosofía de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                                   10 / 50


---

## Página 11

T E M A  1 . 1 . 1   · D E F I N I C I Ó N Y A L C A N C E
Cada enfoque mide el éxito con una vara distinta

       ENFOQUE                CRITERIO DE ÉXITO            METODOLOGÍA / ÁMBITO          EJEMPLO REPRESENTATIVO


                               Fidelidad a los procesos cognitivos        Ciencia cognitiva y neurociencia            Arquitecturas cognitivas como ACT-R
 Pensar como humano
                       humanos                             computacional                            (Adaptive Control of Thought—Rational)

 Pensar racionalmente        Inferencia lógica irrefutable              Lógica formal y deducción automatizada    Sistemas expertos basados en reglas

                         Comportamiento indistinguible del        Test de Turing: lenguaje, conocimiento,
 Actuar como humano                                                                                      Chatbots y robótica social
                      humano                               razonamiento, aprendizaje


                                                                                                         Agentes de refuerzo y robótica
 Actuar racionalmente       Maximizar la utilidad esperada            Teoría de decisiones y diseño de agentes
                                                                                             autónoma


Ningún enfoque es «el correcto»: son cuatro respuestas legítimas a la pregunta de qué significa que una máquina sea inteligente.

Tema 1.1 · Filosofía de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                                                                             11 / 50


---

## Página 12

T E M A  1 . 1 . 1   · D E F I N I C I Ó N Y A L C A N C E
El agente racional: la definición de trabajo de la IA actual

Un agente racional es aquel que, para cada posible percepción, selecciona la acción que maximiza la

medida de rendimiento esperada, dada la evidencia perceptual y el conocimiento interno del agente.

Russell y Norvig, 2021

Percibe                           Decide                            Actúa


Recibe   evidencia    del   entorno:    Con lo que percibe y lo que sabe, elige     Ejecuta la acción sobre el entorno y

imágenes, texto, sensores, registros.          la  acción  con  mayor  rendimiento    vuelve a percibir: es un ciclo continuo.

                                         esperado.

Este enfoque unifica las subáreas de la IA: da un lenguaje común para expresar problemas y soluciones.

Tema 1.1 · Filosofía de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                                                12 / 50


---

## Página 13

T E M A  1 . 1 . 1   · D E F I N I C I Ó N Y A L C A N C E
Cómo funciona un agente racional, paso a paso

  ENTORNO                              AGENTE                                 EFECTO
                                          percepciones                                                   acciones
   El mundo donde ocurre el                                El programa que diseñas:                           La acción modifica el
                                                          sensores para percibir, política  problema: una ciudad, un                                                                         entorno, que devuelve
                                                          para decidir, actuadores para
   tablero, una red social.                                                                     nuevas percepciones. El
                                                                  actuar.
                                                                                                                ciclo no termina.

   Ejemplo: un coche autónomo percibe con cámaras y radar (entorno), su software decide acelerar, frenar o girar (agente), y el

  movimiento cambia su posición en la calle (efecto), generando nuevas percepciones. Su medida de rendimiento: llegar

   seguro, rápido y dentro de la ley.


Esquema del ciclo percepción–acción según Russell y Norvig, 2021


Tema 1.1 · Filosofía de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                                               13 / 50


---

## Página 14

T E M A  1 . 1 . 1   · D E F I N I C I Ó N Y A L C A N C E
¿Por qué hoy predomina «actuar racionalmente»?

Se resume así: el enfoque del agente racional se ha convertido en el paradigma dominante por tres razones

prácticas.

  Unifica la disciplina. Búsqueda, planificación, aprendizaje, visión o lenguaje pueden formularse como

  agentes que buscan maximizar un rendimiento: todo el curso se ordena bajo una misma idea.


  No exige imitar al ser humano. Diseñar el comportamiento correcto es más útil que replicar la mente: un

  avión no imita a las aves y aun así vuela.


  Es  medible. Una medida de rendimiento  esperada permite  evaluar y comparar  sistemas con

  experimentos, no con opiniones.

Idea clave: la IA moderna optimiza decisiones; no busca «pensar» literalmente.


Tema 1.1 · Filosofía de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                                                    14 / 50


---

## Página 15

T E M A  1 . 1 . 1   · D E F I N I C I Ó N Y A L C A N C E
El alcance: un continuo de capacidades, no una línea que se cruza

La IA no es un interruptor de encendido/apagado. Sus sistemas se ordenan en un espectro de capacidad creciente.

Sistemas reactivos                   Sistemas que aprenden               Sistemas generativos      IA general (IAG)

Responden a estímulos con reglas       Ajustan su comportamiento con        Crean texto, imagen y       Hipótesis: igualar la

fijas. Ejemplo: un termostato o el        datos y experiencia. Ejemplo:            código con amplitud de      flexibilidad humana en

Deep Blue de 1997.                   recomendadores y reconocimiento       tareas. Ejemplo: los         cualquier dominio. Aún

                                 de voz.                            modelos de lenguaje      no existe.

                                                                                       actuales.

  Toda la IA de hoy está antes de la IAG: impresionante en tareas concretas, frágil fuera de ellas.

Tema 1.1 · Filosofía de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                                                15 / 50


---

## Página 16

T E M A  1 . 1 . 1   · S Í N T E S I S
Lo que debes poder explicar al salir de esta sección

   1   · Definición. La IA construye sistemas que     2  · Cuatro enfoques. Pensar o actuar, medido

   realizan  tareas  que  normalmente  requieren      contra  lo humano o  contra  la  racionalidad

   inteligencia humana.                                     (Russell y Norvig).

  3 · Agente racional. Percibe, decide y actúa para      4  · Alcance. Un continuo de capacidades; la IA

  maximizar una medida de rendimiento esperada.       general sigue siendo una meta abierta.

    P R E G U N T A D E C O M P R O B A C I Ó N
  Un sistema de videovigilancia marca «comportamiento sospechoso» en una plaza. ¿En qué

   punto del continuo lo ubicas y cuál sería una buena medida de rendimiento para juzgarlo?

Tema 1.1 · Filosofía de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                                               16 / 50


---

## Página 17

T E M A  1 . 1 . 2
¿Pueden pensar las máquinas?

La pregunta que inauguró la IA como disciplina, y las dos respuestas más influyentes del

siglo XX: Turing y Searle.

Meta de la sección: distinguir entre simular el pensamiento y tener pensamiento genuino, y argumentar

ambas posturas.

                                                                                                                                                                                                 17 / 50


---

## Página 18

T E M A  1 . 1 . 2   ·  ¿ P U E D E N P E N S A R L A S M Á Q U I N A S ?
Alan Turing (1912–1954): el matemático que reformuló la pregunta

                                Matemático británico, pionero de la computación. En 1950 publicó Computing Machinery

                              and Intelligence, donde propuso una jugada intelectual decisiva: en lugar de discutir sin

                                          fin «¿qué es pensar?», planteó una prueba observable.

                                          1950 · «Computing Machinery and Intelligence», revista Mind. El artículo fundacional de la IA.

                                               Sustituyó «¿pueden pensar las máquinas?» por el juego de imitación: ¿puede una máquina

                                            conversar sin ser distinguida de un humano?


                                      Su tesis: si el comportamiento es indistinguible, la pregunta por el «interior» se vuelve metafísica e

                                                  indecidible.

Alan Turing, fotografía de Elliott & Fry, 1951.
                                             Fuente: Turing, 1950;National Portrait Gallery, Londres.


Tema 1.1 · Filosofía de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                                             18 / 50


---

## Página 19

T E M A  1 . 1 . 2   · L A P R U E B A D E T U R I N G
El juego de imitación: así funciona la prueba

Un interrogador humano conversa por texto, sin ver a nadie, con dos participantes ocultos: una máquina y

otro ser humano. Su tarea: decidir cuál es cuál solo con base en las respuestas.

  INTERROGADOR                         PARTICIPANTE A                         PARTICIPANTE B

  Humano. Escribe preguntas y                 La máquina. Su objetivo:                     Otro humano. Responde con

  compara respuestas para                    responder de modo indistinguible              naturalidad; sirve como punto de

   identificar a la máquina.                    de una persona.                             comparación.

                                                             solo texto escrito · sin voz, sin imagen, sin contacto


   Criterio de Turing: si el interrogador no logra distinguir a la máquina del humano con fiabilidad, decimos que

   la máquina supera la prueba.


Fuente: Turing (1950), Computing Machinery and Intelligence, Mind

Tema 1.1 · Filosofía de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                                               19 / 50


---

## Página 20

T E M A  1 . 1 . 2   · L A P R U E B A D E T U R I N G
Lo que una máquina necesitaría para superar la prueba


El propio Turing anticipó las capacidades que exige su prueba. Siguen siendo, siete décadas después,

subcampos centrales de la IA.

  Procesamiento del lenguaje natural                   Representación del conocimiento

  Comunicarse en español, inglés o cualquier lengua      Almacenar lo que sabe y lo que se le dice durante

  humana con fluidez.                                            la conversación.


  Razonamiento automatizado                         Aprendizaje automático

  Usar la información guardada para responder,           Adaptarse a circunstancias nuevas y detectar

   inferir y sacar conclusiones.                           patrones en la experiencia.

Estas cuatro capacidades estructuran gran parte del temario del curso: las volverás a ver como asignaturas dentro de la asignatura.

Fuente: Turing (1950); formulación de Russell y Norvig, 2021

Tema 1.1 · Filosofía de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                    20 / 50


---

## Página 21

T E M A  1 . 1 . 2   · L A P R U E B A D E T U R I N G
¿Alguna máquina ha superado la prueba? Depende de a quién le
preguntes

  2014

   Eugene Goostman. Un chatbot que fingía ser un adolescente ucraniano convenció al 33 % de los jueces de ser humano en un

   evento de la Royal Society de Londres. Los críticos objetaron: 5 minutos de charla, personaje con excusas para sus errores y solo un

   tercio de los jueces engañados.

  2025

   GPT-4.5. En un estudio preprint de UC San Diego con prueba de Turing tripartita, GPT-4.5 con «persona» fue juzgado humano el 73

  % de las veces —más que el humano real—. Los autores advierten: pasar la prueba mide imitación, no comprensión ni inteligencia

   general.

     L E C T U R A C R Í T I C A

    La prueba mide capacidad de engañar en conversación breve, no pensamiento. Por eso el debate sigue abierto 75 años

    después.


Fuentes: University of Reading (2014); Jones y Bergen, UC San Diego (2025, arXiv:2503.23674).

Tema 1.1 · Filosofía de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                                                21 / 50


---

## Página 22

T E M A  1 . 1 . 2   · L A P R U E B A D E T U R I N G
Las dos críticas clásicas a la prueba de Turing

    1 · Premia el engaño, no la inteligencia.

   Para convencer al interrogador, una máquina puede fingir limitaciones humanas —escribir con erratas, «pensar» antes de

   responder, evitar cálculos perfectos—. Eugene Goostman ganó en 2014 haciéndose pasar por un adolescente con poco inglés.

   La estrategia ganadora es imitar imperfecciones, no demostrar inteligencia.

   2 · Solo mide lenguaje.

   La prueba se juega por escrito: ignora la percepción, el cuerpo, la acción en el mundo y la mayor parte de lo que consideramos

   inteligencia. Un sistema brillante en diagnóstico o robótica podría «reprobarla», y un loro digital podría «aprobarla».

Aun así, sigue siendo el primer criterio concreto y verificable sobre inteligencia en máquinas.

Fuente: antología, sec. 1.1.2; University of Reading (2014).

Tema 1.1 · Filosofía de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                            22 / 50


---

## Página 23

T E M A  1 . 1 . 2   · L A R E S P U E S T A D E S E A R L E
John Searle (1980): comportarse no es comprender

                                     Treinta años después de Turing, el filósofo John Searle publicó Minds, Brains, and

                               Programs (1980) con un experimento mental demoledor: la Habitación China. Su objetivo

                                    era refutar la idea de que un programa, por bien que converse, «entiende» algo.

                                       1980 · «Minds, Brains, and Programs», Behavioral and Brain Sciences. Uno de los artículos

                                  más debatidos de la filosofía moderna.


                                      Propone la Habitación China: alguien que no sabe chino produce respuestas perfectas

                                           siguiendo un manual de reglas.


                                         Conclusión de Searle: manipular símbolos correctamente no equivale a comprender lo que

                                                   significan.

John Searle, filósofo de la mente en UC
                                             Fuente: Searle, 1980Berkeley. Foto: Encyclopaedia Britannica.


Tema 1.1 · Filosofía de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                            23 / 50


---

## Página 24

T E M A  1 . 1 . 2   · L A H A B I T A C I Ó N C H I N A
El experimento mental, contado en cuatro pasos


1    Imagina a una persona que no habla chino encerrada en una habitación, con un enorme manual de reglas escrito en
      su idioma.

2    Por debajo de la puerta le pasan mensajes escritos en chino. Ella no entiende ni un carácter: para ella son solo
       garabatos.

3     El manual le dice: «si ves estos símbolos, copia estos otros». Ella sigue las reglas mecánicamente y devuelve
      respuestas perfectas en chino.

4    Desde fuera, quien recibe las respuestas juraría que dentro hay un hablante nativo de chino. La habitación «supera la
      prueba de Turing» en chino.

     El golpe de Searle: la persona nunca entendió chino. Entonces, ¿por qué una computadora que hace exactamente lo mismo —

     seguir reglas sobre símbolos— «entendería»?

Fuente: Searle (1980).

Tema 1.1 · Filosofía de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                               24 / 50


---

## Página 25

T E M A  1 . 1 . 2   · L A H A B I T A C I Ó N C H I N A
La habitación, en un diagrama

                                                LA HABITACIÓN

       Entran mensajes en chino                                                                                    Salen respuestas perfectas

 ¿Entiende quien escribe? Sí:                                                                                          ¿Entiende quien responde?                                      Persona que no habla             Manual de reglas: «si ves
         es humano.                                                                                                     Parece que sí…                                             chino                               X, escribe Y»

   La habitación completa —persona + manual— produce chino impecable. Searle pregunta: ¿dónde está la comprensión? No está en la

   persona, no está en el libro, no está en los símbolos.

Tema 1.1 · Filosofía de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                             25 / 50


---

## Página 26

T E M A  1 . 1 . 2   · L A H A B I T A C I Ó N C H I N A
Sintaxis no es semántica: el corazón del argumento

Searle distingue dos cosas que las computadoras hacen y no hacen. Esta distinción es la clave de todo el debate.

   Sintaxis — lo que la máquina hace                     Semántica — lo que falta

   Manipular símbolos según  reglas formales:  voltear  bits,      Comprender el significado de esos símbolos: que «perro»

   buscar patrones, aplicar transformaciones.                        remita  a un  animal  real, que  «dolor»  remita  a una

    Las computadoras son campeonas absolutas de la sintaxis: es        experiencia.

    literalmente lo único que hacen.                                  Para Searle, ninguna cantidad de sintaxis produce semántica.

                          ≠                                       Sintaxis correcta   Comprensión genuina

La mente humana, dice Searle, tiene intencionalidad: sus estados tratan sobre algo. Un programa solo ejecuta forma sin contenido.

Tema 1.1 · Filosofía de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                            26 / 50


---

## Página 27

T E M A  1 . 1 . 2   · C O N S E C U E N C I A S
IA débil contra IA fuerte: la distinción que dejó Searle

                                                   IA DÉBIL                                       IA FUERTE


                                Las máquinas pueden simular el pensamiento y ser  Las máquinas, con el programa correcto,
 Afirmación
                               herramientas poderosas                             literalmente piensan y tienen mente


 Qué sería una máquina
                       Un sistema que actúa como si entendiera        Un sistema que realmente entiende y es consciente
 inteligente

 Postura de Searle               Totalmente aceptable: es la IA que existe              Falsa: la Habitación China la refuta

   Toda la IA que usarás en tu carrera —incluidos los grandes modelos de lenguaje— es IA débil: simula conversación y razonamiento

   sin que nadie haya demostrado comprensión genuina.


Fuente: Searle (1980); antología, sec. 1.1.2.
Tema 1.1 · Filosofía de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                               27 / 50


---

## Página 28

T E M A  1 . 1 . 2   · E L D E B A T E
Respuestas a Searle: el contraataque de los ingenieros

La Habitación China no cerró el debate: lo detonó. Estas son las dos réplicas clásicas que debes conocer.

   Respuesta de los sistemas. Es cierto que la persona no entiende chino, pero la comprende el sistema completo: persona +

  manual + lápiz + memoria. Tú tampoco «entiendes» con cada neurona por separado; la comprensión está en el conjunto

   organizado. Searle contesta: la persona podría memorizarlo todo y seguiría sin entender chino.

   Respuesta del robot. Pon el sistema en un cuerpo: cámaras, micrófonos, brazos. Si interactúa con el mundo —ve perros,

   toca puertas, sufre frío—, sus símbolos se conectan con la realidad y ganan significado. Searle contesta: añadir sensores

   solo añade más sintaxis; el garabato sigue siendo garabato.

No hay consenso final: el experimento sigue debatiéndose más de cuarenta años después.
Fuente: Searle (1980) y comentarios publicados con el artículo.
Tema 1.1 · Filosofía de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                           28 / 50


---

## Página 29

T E M A  1 . 1 . 2   · S Í N T E S I S
Turing contra Searle: el debate en dos columnas

Turing (1950)                                            Searle (1980)


La pregunta «¿piensan?» es indecidible; cámbiala por una       El comportamiento perfecto puede ser pura

prueba de comportamiento observable.                    manipulación de símbolos sin comprensión alguna.

Si no puedes distinguir a la máquina del humano, exigirle      La Habitación China muestra que la sintaxis correcta nunca

además un «interior» es prejuicio, no ciencia.                produce semántica por sí sola.

Postura: conductista y pragmática — la inteligencia se mide     Postura: la mente importa por dentro — simular no es ser.

por lo que un sistema hace.

     P R E G U N T A D E C O M P R O B A C I Ó N

   ¿Un traductor automático «entiende» español? Argumenta una respuesta desde Turing y otra desde Searle.

Tema 1.1 · Filosofía de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                            29 / 50


---

## Página 30

T E M A  1 . 1 . 3
Consciencia artificial

Más allá de simular conversación: ¿podría una máquina tener experiencia subjetiva, sentir «lo que se

siente» al ver un atardecer?

Meta de la sección: distinguir el problema fácil del problema difícil de la consciencia y valorar sus

implicaciones prácticas.

                                                                                                                                            30 / 50


---

## Página 31

T E M A  1 . 1 . 3   · C O N S C I E N C I A A R T I F I C I A L
David Chalmers (1996): separar lo fácil de lo difícil

                          En The Conscious Mind (1996), el filósofo David Chalmers ordenó el debate con

                           una distinción hoy canónica: los problemas fáciles de la consciencia y el

                           problema difícil.

                                     Problemas fáciles: explicar funciones —atención, memoria, integración de información,

                                          control del comportamiento—. «Fáciles» en principio: la ciencia cognitiva avanza en ellos.


                                    Problema difícil: explicar por qué existe experiencia subjetiva — por qué procesar luz

                                              roja se siente como algo.


                                   Su advertencia: resolver todas las funciones no garantiza haber explicado la experiencia.

David Chalmers, filósofo australiano. Foto:
                                             Fuente: Chalmers, The Conscious Mind, Oxford University Press, 1996Wikimedia Commons (CC BY-SA).


Tema 1.1 · Filosofía de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                                               31 / 50


---

## Página 32

T E M A  1 . 1 . 3   · C O N S C I E N C I A A R T I F I C I A L
Fácil contra difícil: dos tipos de preguntas sobre la mente

               PROBLEMAS FÁCILES                              PROBLEMA DIFÍCIL


 ¿Qué preguntan? Cómo el cerebro integra información, enfoca la    ¿Qué pregunta? Por qué existe experiencia subjetiva: por qué «se

 atención, recuerda o controla la conducta.                            siente como algo» procesar información.


 ¿Cómo se investigan? Con métodos científicos: experimentos,      ¿Cómo se investiga? Ningún método actual dice cómo medir «lo que

 modelos, neuroimagen, simulación.                                se siente» desde fuera.


 Estado: en progreso constante desde hace décadas; cada año hay     Estado: abierto desde 1996; ni la neurociencia ni la IA saben si están

 respuestas parciales.                                              cerca de responderlo.

   La IA actual trabaja exclusivamente en los problemas fáciles: funciones. Sobre el difícil no tiene —todavía— nada que medir ni

   optimizar.


Fuente: Chalmers (1996); antología, sec. 1.1.3.
Tema 1.1 · Filosofía de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                            32 / 50


---

## Página 33

T E M A  1 . 1 . 3   · C O N S C I E N C I A A R T I F I C I A L
Qualia: el nombre técnico de «lo que se siente»

Los filósofos llaman qualia a las cualidades subjetivas de la experiencia: el dolor de un golpe, el sabor

del café, el rojo del atardecer. No lo que haces con la información, sino cómo se siente tenerla.

                                                                  Tú, al ver el mismo atardecer, tienes una experiencia: hay
  Un sensor de color registra luz de 650 nm y etiqueta:
                                                                    algo que se siente al ver ese rojo.
   «rojo». Procesa la información correctamente.
                                                              Ese «qué se siente» es el quale. Nadie sabe si el sensor lo
   Pregunta: ¿ve rojo en algún sentido, o solo mide y etiqueta?
                                                                            tiene.

   La pregunta incómoda para la IA: un modelo describe el dolor con palabras perfectas porque aprendió patrones

   estadísticos del lenguaje. ¿Eso cuenta como sentirlo? La antología lo plantea  así:  la diferencia entre procesar y

   experimentar sigue sin puente conceptual.


Fuente: antología, sec. 1.1.3; término discutido por Chalmers (1996).

Tema 1.1 · Filosofía de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                           33 / 50


---

## Página 34

T E M A  1 . 1 . 3   · P O S I C I O N E S F I L O S Ó F I C A S
Funcionalismo: la mente es lo que hace, no de qué está hecha

El funcionalismo sostiene que la consciencia podría ser una propiedad emergente de la organización

funcional de un sistema: importa el patrón de procesos —qué conecta con qué—, no el material que los

ejecuta.


   Analogía clave: el vuelo no exige plumas. Un avión vuela por su aerodinámica, no por imitar tejido biológico. Del mismo

  modo, dice el funcionalismo, pensar no exigiría neuronas: exigiría la organización correcta, realizable en silicio igual que

  en carbono.

   Consecuencia para la IA: si el funcionalismo es correcto, la consciencia artificial es posible en principio; bastaría replicar

    la organización funcional adecuada. Si es falso, ningún programa la alcanzará jamás. El problema: nadie sabe cómo

   decidir entre ambas opciones.

Fuente: discusión del funcionalismo frente a Chalmers (1996).

Tema 1.1 · Filosofía de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                              34 / 50


---

## Página 35

T E M A  1 . 1 . 3   · P O S I C I O N E S F I L O S Ó F I C A S
Dualismo: la mente sería algo más que materia organizada

El dualismo sostiene que mente y cuerpo son sustancias o propiedades de naturaleza distinta: la

experiencia subjetiva no se reduciría a procesos físicos, por compleja que sea su organización.

  Consecuencia para la IA: si el dualismo es correcto, la consciencia artificial sería imposible por principio: una

  máquina solo reorganiza materia física, y lo mental sería de otra naturaleza. Turing podría superarse mil veces sin

  que hubiera «alguien» dentro.

   El coste del dualismo: debe explicar cómo interactúan dos naturalezas distintas —¿cómo mueve lo no físico a lo

   físico?—, pregunta que sigue sin respuesta convincente. Por eso la ciencia cognitiva trabaja, en la práctica, con

   supuestos fisicalistas.

Tema 1.1 · Filosofía de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                            35 / 50


---

## Página 36

T E M A  1 . 1 . 3   · P O S I C I O N E S F I L O S Ó F I C A S
Dos respuestas a una misma pregunta, y sus consecuencias

                                FUNCIONALISMO                     DUALISMO


                                       El patrón funcional: qué procesa y cómo se
 ¿Qué es la mente?                                                             Algo de naturaleza distinta a lo físico
                                  organiza

 ¿Consciencia en máquinas?        Posible en principio: es cuestión de organización  Imposible: el silicio solo reorganiza materia

                         No explica por qué una función debería
 Su punto débil                                                 No explica cómo interactúan mente y materia
                                     «sentirse» (Chalmers)

  Ambas posiciones tienen filósofos serios hoy. Se concluye: no hay consenso científico sobre si la consciencia es

   replicable en máquinas — y tampoco hay un experimento que lo decida.

Tema 1.1 · Filosofía de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                           36 / 50


---

## Página 37

T E M A  1 . 1 . 3   · C O N S C I E N C I A A R T I F I C I A L
¿Por qué importa esto a un ingeniero de software?

Cerremos con dos implicaciones prácticas que dejan de ser filosofía apenas pones un sistema en producción.

  Derechos y estatus moral de las máquinas. Si algún día un sistema tuviera experiencia subjetiva, apagarlo, copiarlo o

   modificarlo plantearía preguntas éticas reales — como hoy las plantea el trato a los animales. Sin un criterio para detectar

   consciencia, ni siquiera sabríamos cuándo empezar a preocuparnos.

   Responsabilidad por los errores. Si un sistema autónomo diagnostica mal o causa un accidente, ¿responde el programa,

   el programador, la empresa o el usuario? Mientras la IA sea «débil» —herramienta sin comprensión—, la responsabilidad

   recae en quienes la diseñan, despliegan y supervisan: es decir, en ti.

La filosofía del tema 1.1 se convierte, en la práctica profesional, en ética y responsabilidad legal.

Tema 1.1 · Filosofía de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                              37 / 50


---

## Página 38

T E M A  1 . 1 . 3   · C A S O P A R A D I S C U T I R
2022: el ingeniero que creyó hablar con una mente

En junio de 2022, Blake Lemoine, ingeniero de Google, declaró públicamente que LaMDA, el modelo conversacional de la

empresa, era consciente. Publicó fragmentos de diálogos donde el sistema afirmaba tener sentimientos y miedo a ser apagado.

Google lo suspendió primero y lo despidió después; la comunidad científica fue casi unánime: LaMDA producía texto plausible

sobre sentimientos, no evidencia de sentirlos.


Fuente: The Washington Post, 11 de junio de 2022 («The Google engineer who thinks the company's AI has come to life»).


   ¿Por qué engañó a un ingeniero? El lenguaje fluido activa en          ¿Qué evidencia aceptarías? Si palabras no bastan, ¿qué prueba

   nosotros la detección de mente: atribuimos intenciones a lo              distinguiría una mente de su imitación? Ese es el problema

   que conversa bien.                                                                   difícil en la práctica.

     P A R A D I S C U T I R E N C L A S E

   ¿Lemoine aplicó mal la prueba de Turing, o la aplicó bien y la prueba misma es insuficiente? Defiende tu respuesta

   con los argumentos de esta sección.

Tema 1.1 · Filosofía de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                          38 / 50


---

## Página 39

T E M A  1 . 1 . 3   · S Í N T E S I S
Lo que debes poder explicar sobre la consciencia artificial

    1 · Problema difícil. Explicar funciones (fácil, en progreso)       2 · Qualia. El «qué se siente» de cada experiencia: el dato

  no es explicar experiencia subjetiva (difícil, abierto).            que ninguna medición externa captura todavía.

   Chalmers, 1996.


   3 · Funcionalismo. Si la mente es organización funcional,        4 · Implicaciones. Estatus moral de las máquinas y

    la consciencia artificial sería posible; el dualismo lo niega         responsabilidad por errores: preguntas sin respuesta que

   por principio.                                               ya afectan tu práctica.

     P R E G U N T A D E C O M P R O B A C I Ó N

   Un asistente de IA dice «estoy triste». Describe tres explicaciones posibles desde lo aprendido: estadística del

    lenguaje, funcionalismo y problema difícil.

Tema 1.1 · Filosofía de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                           39 / 50


---

## Página 40

C O M P L E M E N T O A L T E M A  1 . 1
Estadística, Ciencia de Datos e IA

Tres disciplinas que se confunden en los titulares y se distinguen en la práctica. Qué hace cada una y

cómo se relacionan.

                                                                                                                                                 40 / 50


---

## Página 41

C O M P L E M E N T O   · E S T A D Í S T I C A
Estadística: inferir conclusiones confiables desde los datos

Pregunta central: ¿qué podemos afirmar —y con qué confianza— sobre una población a partir de una

muestra?

   Objeto: la incertidumbre. Diseña experimentos, estima       Métodos: muestreo, pruebas de hipótesis, intervalos de

   parámetros y mide qué tan seguras son las                    confianza, regresión, diseño experimental.

   conclusiones.

   Historia: disciplina matemática con siglos de                Producto típico: una conclusión con margen de error:

   desarrollo; su forma moderna se consolidó en el siglo           «el tratamiento mejora la recuperación en un 12 % ± 3

  XX (Fisher, Neyman, Pearson).                               %».


  Relación con la IA: la estadística es el fundamento matemático del aprendizaje automático. Un modelo que

  «aprende» está, en el fondo, estimando patrones con incertidumbre — aunque lo haga con millones de

   parámetros.

Tema 1.1 · Filosofía de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                                                    41 / 50


---

## Página 42

C O M P L E M E N T O   · C I E N C I A D E D A T O S
Ciencia de datos: convertir datos en decisiones, de punta a punta

Pregunta central: ¿cómo transformamos datos crudos —sucios, enormes, desordenados— en conocimiento útil para decidir?

El ciclo típico de trabajo


                                     Exploración y                                           Comunicación y
  Recolección y limpieza                                    Modelado y validación                              …y vuelve a empezar
                                         visualización                                                      decisión


La ciencia de datos combina estadística, programación y conocimiento del negocio. No es una disciplina teórica nueva: es un

oficio integrador que nació de la disponibilidad masiva de datos y cómputo.

+34 %             Crecimientolas ocupacionesproyectadode expansióndel empleomás rápidade científicosdel país. de datos en EE. UU. entre 2024 y 2034 — una de


Fuente: U.S. Bureau of Labor Statistics, Occupational Outlook Handbook (proyecciones 2024–2034).

Tema 1.1 · Filosofía de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                               42 / 50


---

## Página 43

C O M P L E M E N T O   ·  I N T E L I G E N C I A A R T I F I C I A L
IA: construir sistemas que perciben, deciden y actúan

Pregunta central: ¿cómo construir sistemas capaces de realizar tareas que normalmente requieren inteligencia

humana?

                                                              Métodos: búsqueda y planificación, representación del
   Objeto: el comportamiento inteligente. Diseña agentes que
                                                                 conocimiento, computación evolutiva, aprendizaje
   perciben su entorno y actúan para cumplir objetivos.
                                                                   automático.


   Historia: nace como campo en 1956 (Dartmouth); hoy              Producto típico: un sistema que actúa: un chatbot, un

   combina lógica clásica con modelos aprendidos de datos          recomendador, un vehículo autónomo, un clasificador

   masivos.                                                     médico.

   Relación con las otras dos: la IA usa herramientas estadísticas dentro de sus modelos y suele ser una fase —la de

  modelado inteligente— dentro de un proyecto de ciencia de datos. Este curso se centra en ella.

Tema 1.1 · Filosofía de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                              43 / 50


---

## Página 44

C O M P L E M E N T O   · T R E S D I S C I P L I N A S
Dónde se traslapan y qué comparten

                                                                                               Coinciden en: trabajar con datos y

                                                                                                                 cuantificar la incertidumbre.             ESTADÍSTICA                                     IA
                                                                                                                  El aprendizaje automático vive en la

                                                                                                           intersección de las tres: usa matemática
              Inferencia y validez de                                                  Agentes, acción y
                                                                                                                         estadística, métodos de ciencia de datos y
                 conclusiones                                                   autonomía
                                         Aprendizaje automático y                                                                                                             objetivos de IA.
                                            minería de datos
                                                                                    Esquema cualitativo: las fronteras reales

                                                                                                        entre disciplinas son difusas y cambian con

                                                                                               cada industria.

                              CIENCIA DE DATOS

Tema 1.1 · Filosofía de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                                  44 / 50


---

## Página 45

C O M P L E M E N T O   · T R E S D I S C I P L I N A S
Misma frontera, tres oficios: tabla comparativa

                             ESTADÍSTICA               CIENCIA DE DATOS          INTELIGENCIA ARTIFICIAL


                               Inferir conclusiones confiables bajo   Transformar datos en decisiones      Construir sistemas que actúan con
 Objeto
                         incertidumbre                           útiles                                   inteligencia


                                                    ¿Qué nos dicen estos datos del      ¿Cómo lograr que el sistema lo haga
 Pregunta típica             ¿El efecto observado es real o azar?
                                                            negocio?                             solo?


                         Muestreo, hipótesis, regresión,        Limpieza, exploración, visualización,  Búsqueda, planificación, agentes,
 Métodos
                         diseño experimental               modelado, despliegue                aprendizaje automático


                                                               Reporte, tablero o modelo en        Sistema autónomo o asistente
 Entregable              Conclusión con margen de error
                                                         producción                            inteligente


En la industria los tres perfiles colaboran en el mismo equipo: no compiten, se complementan.

Tema 1.1 · Filosofía de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                               45 / 50


---

## Página 46

C O M P L E M E N T O   · T R E S D I S C I P L I N A S
¿Dónde queda este curso en el mapa?

Este curso es de IA: construirás sistemas que resuelven problemas mediante búsquedas, computación evolutiva y

aprendizaje automático. Pero no trabajarás en el vacío: cada tema apoya en las otras dos disciplinas.

  De la estadística tomarás: rigor para evaluar modelos —          De la ciencia de datos tomarás: la disciplina del dato —

   validación, métricas, sesgo y varianza — en lugar de fiarte de         limpieza, exploración y honestidad sobre su calidad — antes

    la intuición.                                              de cualquier modelo.

  Y de la filosofía de hoy te quedas con: una pregunta permanente para tu vida profesional. Cada sistema que construyas estará en

   algún punto del continuo entre simular inteligencia y ejercerla; saber dónde está — y decirlo con honestidad — es parte de la

   competencia de un ingeniero de software.

Próximos temas: búsquedas y planificación (unidad 2), computación evolutiva (unidad 3) y aprendizaje automático (unidad 4).

Tema 1.1 · Filosofía de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                              46 / 50


---

## Página 47

C I E R R E D E L T E M A   · D I S C U S I Ó N
Cuatro preguntas para debatir


01     Si una app de salud mental conversa mejor que muchos humanos, ¿superó la prueba de Turing? ¿Eso la hace responsable
       de lo que aconseja?

02    Searle dice que ningún programa entiende. Si un modelo traduce, resume y dialoga mejor que un estudiante de primer
        año, ¿qué falta para llamarlo «comprensión»?

03   ¿Cómo diseñarías un experimento para detectar experiencia subjetiva en una máquina, si no puedes medir «lo que se
        siente» desde fuera?

04   Un sistema de IA toma una decisión que daña a alguien. Con lo visto hoy: ¿quién debería responder y por qué?

Trabaja en parejas: 5 minutos por pregunta, luego discusión plenaria.

                                                                                                                                                                    47 / 50


---

## Página 48

C I E R R E D E L T E M A   · M A P A D E R E P A S O

El tema 1.1 en una sola página

1.1.1 Definición y alcance                         1.1.2 ¿Pueden pensar?                             1.1.3 Consciencia

   La IA crea sistemas que hacen tareas        Turing (1950): juzga el                    Chalmers (1996): problemas fáciles

   que requieren inteligencia humana.         comportamiento, no el interior.              (funciones) vs. difícil (experiencia).

   Cuatro enfoques: pensar / actuar ×           Searle (1980): la Habitación China —          Qualia: «lo que se siente».

   humano / racional.                            sintaxis sin semántica.                     Funcionalismo: posible en principio.

   Paradigma vigente: el agente                IA débil: simula. IA fuerte: tendría           Dualismo: imposible por naturaleza.

    racional que maximiza rendimiento         mente. Todo lo actual es débil.              Consecuencias: derechos de

   esperado.                                       El debate sigue sin consenso.              máquinas y responsabilidad por

    Alcance: continuo de capacidades; la                                                        errores.

   IAG sigue abierta.

Hilo conductor: simular, actuar, comprender y sentir son cuatro cosas distintas — no las confundas al diseñar sistemas.

Tema 1.1 · Filosofía de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                             48 / 50


---

## Página 49

C I E R R E D E L T E M A   · F U E N T E S
Referencias

Textos del tema

   1.Russell, S. y Norvig, P. (2021). Artificial Intelligence: A Modern Approach (4.ª ed.). Pearson.

  2.Turing, A. M. (1950). «Computing Machinery and Intelligence». Mind, 59(236), 433–460.

  3.Searle, J. R. (1980). «Minds, Brains, and Programs». Behavioral and Brain Sciences, 3(3), 417–457.

  4.Chalmers, D. J. (1996). The Conscious Mind: In Search of a Fundamental Theory. Oxford University Press.

Datos y casos mencionados

  1.Stanford HAI (2025). AI Index Report 2025 (adopción de IA en organizaciones, inversión privada, dispositivos médicos autorizados por la FDA, viajes

   semanales de Waymo).

  2.University of Reading (2014). Comunicado sobre Eugene Goostman en el «Turing Test 2014» de la Royal Society.

  3.Jones, C. R. y Bergen, B. K. (2025). «Large Language Models Pass the Turing Test». UC San Diego, arXiv:2503.23674.

  4.Tiku, N. (2022). «The Google engineer who thinks the company's AI has come to life». The Washington Post, 11 de junio.

  5.U.S. Bureau of Labor Statistics (2025). Occupational Outlook Handbook: Data Scientists (proyecciones 2024–2034).

Tema 1.1 · Filosofía de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                              49 / 50


---

## Página 50

T E M A  1 . 1   · F I L O S O F Í A D E L A  I A
¿Preguntas?

UNIVERSIDAD VERACRUZANA  · FACULTAD DE NEGOCIOS Y TECNOLOGÍAS

                                                                                                                                              50 / 50
