# Estado actual de la inteligencia artificial

> Fuente primaria: Capítulo 1 — Tema 1.3 Estado actual de la Inteligencia Artificial.pdf. 45 páginas.

> Transcripción de texto extraído del material de clase, conservando la numeración de páginas. Las imágenes, diagramas y tablas visuales deben cotejarse con el PDF original. No se han añadido afirmaciones externas.


---

## Página 01

C A P Í T U L O  1   · F U N D A M E N T O S Y P E R S P E C T I V A D E L A  I N T E L I G E N C I A A R T I F I C I A L
1.3 Estado actual de la inteligencia
                                                                                                                          L A  I A E N C I F R A S  · 2 0 2 6
artificial
                                                900 M
Modelos de lenguaje, IA generativa, aplicaciones contemporáneas y                           usuarios semanales de ChatGPT (mar. 2026)

tendencias — con los datos y cifras que un ingeniero de software debe

conocer en 2026.                                                    88 %

                                                                                                de las organizaciones ya usan IA en al menos una
                                                                                                                                                función

                                                     ×280

                                                                                                                  caída del costo de inferencia de un modelo nivel
        1.3.1 · Grandes Modelos de Lenguaje (LLMs)                                                                                                                                 GPT-3.5 (2022–2024)

       1.3.2 · IA generativa
                                                   2 Nobel       1.3.3 · Aplicaciones prácticas contemporáneas
                                                                                                    premios Nobel 2024 otorgados a investigación en
        1.3.4 · Tendencias y desafíos futuros                                                                                                                                     IA (Física y Química)

     Inteligencia Artificial · Ingeniería de Software · Facultad de Negocios y Tecnologías · Universidad Veracruzana                                                                     01 / 45


---

## Página 02

T E M A  1 . 3   · E S T A D O A C T U A L D E L A  I A
Ruta de la sesión

    1.3.1                                                                    1.3.2
  Grandes Modelos de Lenguaje (LLMs)                IA generativa
  Cómo funcionan, el panorama 2025–2026, capacidades               Texto, imagen, audio, video y código — y los debates sobre

   emergentes y límites reales.                                     derechos y autenticidad.

   1.3.3                                                                    1.3.4
  Aplicaciones prácticas contemporáneas              Tendencias y desafíos futuros
   Medicina, ciencia, transporte, finanzas, educación y la propia          Agentes, multimodalidad, regulación y los desafíos técnicos y

   ingeniería de software.                                                 sociales abiertos.

   A L F I N A L D E L A S E S I Ó N

   Cerramos con una infografía-mapamundi de las técnicas y algoritmos que sostienen la IA actual: de la

    regresión logística a los transformers y los modelos de difusión.

Tema 1.3 · Estado actual de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                02 / 45


---

## Página 03

T E M A  1 . 3   ·  I N T R O D U C C I Ó N
Una transformación sin precedentes

La IA vive una transformación sin precedentes, producto de la convergencia de tres fuerzas — avances algorítmicos,

capacidad computacional masiva y datos a escala global. El paradigma dominante es el aprendizaje profundo

basado en transformers, extendido ya a texto, visión, audio y sistemas multimodales.


   Algoritmos                      Cómputo                           Datos

    El transformer (2017) y sus derivados:       GPU/TPU  y   centros  de   datos        Corpus  de   billones  de  tokens

   autoatención,   entrenamiento   a         masivos;      el    cómputo    de          extraídos de la web, libros, código y

    escala, modelos de razonamiento y         entrenamiento de modelos punteros         contenido  multimodal; más  datos

   de difusión.                                  creció ~4–5× por año en la última          sintéticos generados por IA.

                                              década.

   Para el ingeniero de software: la IA ya no es un tema de laboratorio — es una capa más de la pila tecnológica, presente en

    editores de código, APIs, bases de datos y herramientas de prueba.


Fuente: Antología de Inteligencia Artificial, UV, sección 1.3; Stanford HAI, AI Index Report 2025.
Tema 1.3 · Estado actual de la IA · Ingeniería de Software · Universidad Veracruzana                                                                               03 / 45


---

## Página 04

T E M A  1 . 3   ·  I N T R O D U C C I Ó N
El paradigma dominante: transformers a escala

2017: el artículo que lo cambió todo                                                   > 90 %
Vaswani et al. publican «Attention is All You Need» (2017). El           de los modelos frontera notables de 2025 fueron
                                                                      producidos por la industria, no por la academia.mecanismo de autoatención permite procesar secuencias

completas en paralelo, sin recurrencia.                      →
                                   60   ~100 %
Ese diseño escaló: BERT y GPT (2018), GPT-3 (2020), ChatGPT
                                                                     avance en un solo año en SWE-bench Verified, referencia
(2022)… y hoy es la base de casi todo modelo puntero de               de resolución real de errores de software.

texto, imagen, audio y video.
                                       4 de 5
Este paradigma se expandió del lenguaje a visión, audio y                  estudiantes universitarios ya usan IA generativa de forma
                                                                                habitual (AI Index 2026).sistemas multimodales.

   Idea clave. La capacidad de la IA no se está estancando: se acelera y llega a más personas que nunca. Los benchmarks

    clásicos se agotan más rápido de lo que se crean.


Fuente: Stanford HAI, AI Index Report 2026; Vaswani et al. (2017); Antología IA-UV, 1.3.
Tema 1.3 · Estado actual de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                  04 / 45


---

## Página 05

T E M A  1 . 3 . 1
Grandes Modelos de Lenguaje (LLMs)

Los sistemas que aprenden del texto a escala de billones de palabras — y que hoy razonan, programan y operan

herramientas.

Qué son y cómo funcionan. Del token al transformer: preentrenamiento, ajuste y alineación.

El panorama actual. GPT-5, Claude, Gemini, Llama, DeepSeek y la generación de modelos de razonamiento.

Capacidades y límites. Lo que hacen sorprendentemente bien — y por qué siguen alucinando.

Comprender sus fundamentos teóricos es indispensable para evaluar críticamente sus salidas (Antología IA-UV, 1.3.1).

                                                                                                                                              05 / 45


---

## Página 06

T E M A  1 . 3 . 1   · L L M s
¿Qué es un Gran Modelo de Lenguaje?

  Un LLM es una red neuronal profunda —hoy casi siempre un transformer— entrenada para predecir el siguiente

   token sobre corpus de billones de palabras. De ese objetivo aparentemente simple emergen traducción, resumen,

   razonamiento y generación de código.


   Escala masiva                       Generalidad                             Interfaz en lenguaje natural

   Decenas o cientos de miles de millones     Un solo modelo realiza tareas muy           Se controlan con instrucciones

   de parámetros ajustables;                     diversas sin reentrenarse: redactar,            (prompts); el «prompt engineering» se

   entrenamiento en miles de GPU durante       traducir, clasificar, programar,                 volvió una habilidad técnica formal.

   semanas o meses.                            conversar.


Ejemplos citados por la antología (2023): GPT-4 (OpenAI), Gemini (Google), Claude (Anthropic) y LLaMA (Meta). Tres años

después, todas esas familias siguen activas… en versiones varias generaciones adelante.

Fuente: Antología IA-UV, 1.3.1; documentación oficial de OpenAI, Anthropic, Google DeepMind y Meta.

Tema 1.3 · Estado actual de la IA · Ingeniería de Software · Universidad Veracruzana                                                                               06 / 45


---

## Página 07

T E M A  1 . 3 . 1   · L L M s
Cómo funciona un LLM: el ciclo de vida del modelo

 1 · Tokenización          2 · Preentrenamiento      3 · Ajuste y alineación      4 · Inferencia
 El texto se divide en tokens      El transformer aprende a       Fine-tuning con             En uso, el modelo genera texto

 (fragmentos de palabras);       predecir el siguiente token      instrucciones y RLHF          token a token de forma

 cada uno se convierte en       sobre corpus masivos; ajusta    (aprendizaje por refuerzo        probabilística: no «recupera»

un vector numérico            miles de millones de pesos     con retroalimentación          respuestas, las compone cada

 (embedding).                 por retropropagación.        humana) para seguir órdenes   vez.

                                                          y evitar respuestas dañinas.

                                                                                      RLHF (por sus siglas en inglés, Reinforcement Learning from Human Feedback


    P O R Q U É  I M P O R T A P A R A E L  I N G E N I E R O
    Saber que la salida es probabilística y por tokens explica las alucinaciones, la sensibilidad al prompt y la

    temperatura — y por qué nunca debe confiarse ciegamente en la respuesta.

Tema 1.3 · Estado actual de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                  07 / 45


---

## Página 08

T E M A  1 . 3 . 1   · L L M s
La ventana de contexto creció 500× en cinco años

     2000
                                                                                                                           2000.0
                                                             Qué significa

                                                                                      La ventana de contexto es la «memoria

     1500                                                                        de trabajo» del modelo: cuánto texto

                                                                            puede considerar a la vez.
                                                  ≈                                                                                                                           1 M de tokens   varios libros o un

     1000                                                                                         repositorio de código completo. Habilita                                                                                        1000.0
                                                                                                         análisis de bases de código, contratos y

                                                                                                 logs enteros.


      500
                                                   ≠                                                                          Más contexto   atención perfecta: el

                                                                                        rendimiento suele degradarse en
                                                       128.0                                               documentos muy largos («lost in the                       4.0
        0
              GPT-3 · 2020                    GPT-4 · 2023                    Gemini 1.5 · 2024                   Gemini 3 · 2025
                                                                                                  middle»).

Fuente: fichas técnicas de OpenAI (GPT-3/4) y Google (Gemini 1.5 Pro, Gemini 3); valores máximos anunciados.


Tema 1.3 · Estado actual de la IA · Ingeniería de Software · Universidad Veracruzana                                                                              08 / 45


---

## Página 09

T E M A  1 . 3 . 1   · L L M s
El panorama de modelos en 2025–2026

         Familia             Desarrollador              Acceso                     Rasgo distintivo              Nota para desarrolladores

                                                                               ≈900 M usuarios semanales de
 GPT-5.x               OpenAI              API / ChatGPT             Uso general, agentes y herramientas
                                                                                                    ChatGPT

                                                                                                           Claude Code, referente en
 Claude 4.x               Anthropic            API / Claude                  Codificación y trabajo de largo aliento
                                                                                                         programación

                                                                       Multimodal nativo, contexto de 1–2 M   Integrado a Android, Workspace
 Gemini 3               Google DeepMind     API / Gemini
                                                                           tokens                              y Cloud

                                                                                                             Base de cientos de derivados
 Llama 4               Meta                 Pesos abiertos                Despliegue propio y personalización
                                                                                                 open source

                                                                     Razonamiento a bajo costo; MoE       ~96 % más barato que o1 en
 DeepSeek R1/V3        DeepSeek (China)     Código abierto (MIT)
                                                                         671B/37B                                inferencia

                                                                   Modelos pequeños muy capaces (3–    Corren en hardware local o en el
 Qwen3 · Mistral          Alibaba · Mistral AI    Pesos abiertos
                                                                             32B)                               borde

El campo se mueve cada pocas semanas: lo importante no es memorizar versiones, sino evaluar modelos con benchmarks y pruebas propias

sobre tu caso de uso concreto.                                                        MoE (por sus siglas en inglés, Mixture of Experts o Mezcla de Expertos)

Fuente: sitios oficiales de cada laboratorio; comparativas sectoriales 2026 (Botpress, PromptLayer).
Tema 1.3 · Estado actual de la IA · Ingeniería de Software · Universidad Veracruzana                                                                               09 / 45


---

## Página 10

T E M A  1 . 3 . 1   · L L M s
Capacidades emergentes: no programadas, aparecieron con la escala

Destacan como emergentes  la cadena de pensamiento,  la traducción,  la generación de código y  la síntesis de

información: nadie las entrenó explícitamente; surgieron al escalar datos y parámetros.


  Cadena de pensamiento              Aprendizaje en contexto             Generación de código
   «Piensa paso a paso»: descompone          Aprende de ejemplos dados en el              Escribe, explica, depura y traduce

   problemas y mejora notablemente           propio prompt (few-shot), sin               código entre lenguajes; base de

   en matemáticas y lógica.                       actualizar sus pesos.                           Copilot, Claude Code y Codex.

  Traducción y multilingüismo           Síntesis y redacción                Uso de herramientas
   Traducción entre decenas de             Resume documentos largos, redacta         Llaman funciones, APIs, buscadores

   idiomas con calidad cercana a             en tonos y formatos especificados,           y ejecutores de código: la base de los

   servicios especializados.                      extrae datos estructurados.                  agentes (ver 1.3.4).

Fuente: Antología IA-UV, 1.3.1; Wei et al. (2022), «Emergent Abilities of Large Language Models».

Tema 1.3 · Estado actual de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                               10 / 45


---

## Página 11

T E M A  1 . 3 . 1   · L L M s
2024–2026: la era de los modelos de razonamiento

Una nueva escala de mejora: además de entrenar modelos más
                                                                     Benchmark (dificultad)           o3            R1
grandes, se  les entrena —con aprendizaje por refuerzo— a
                                                              AIME (matemática de concurso)         96.7 %           79.8 %
«pensar» más tiempo antes de responder (test-time compute).

                                                         GPQA Diamond (ciencia posgrado)       87.7 %            71.5 %OpenAI o1/o3, DeepSeek R1 (abierto, licencia MIT), Claude con

«extended thinking» y Gemini con «thinking mode» exploran     SWE-bench Verified (software                                                                                                                                                71.7 %           49.2 %
                                                                                                  real)
cadenas de razonamiento, verifican pasos y corrigen errores.
                                                                           Codeforces (rating programación)       2727          2029
DeepSeek R1 demostró que el razonamiento puede emerger de

RL puro, a una fracción del costo.                               MATH-500                  —             97.3 %

    E L C A S O D E E P S E E K  ( E N E R O 2 0 2 5 )
   Un laboratorio chino publicó con pesos y código abiertos un modelo MoE de 671B parámetros (37B activos por token),

    comparable a o1 y ~96 % más barato — cuestionando la idea de que la IA puntera era exclusiva de las big tech de EE. UU.

Fuente: OpenAI (resultados o3, 2025); DeepSeek-AI (artículo R1, Nature 2025); análisis comparativos 2025–2026.

Tema 1.3 · Estado actual de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                                                                       11 / 45


---

## Página 12

T E M A  1 . 3 . 1   · L L M s E N P R O G R A M A C I Ó N
La IA ya escribe software: el dato para ingenieros


 46 %              55 %             90 %

   del código de los usuarios activos de        más  rápido  completan  tareas  de        de  las empresas Fortune 100 usan

   GitHub  Copilot  ya  lo  genera   la          codificación los desarrolladores con         GitHub Copilot; +20 M de usuarios

   herramienta (61 % en Java).                       asistente de IA (estudio controlado).           acumulados (jul. 2025).

      10
                                                                                                                  9.6
                                                                         Lectura crítica
       8
                                                                 Más producción, más  responsabilidad:  el
       6                                                                         código generado requiere revisión, pruebas

       4                                                                  y comprensión.

                                                                              Los commits en GitHub crecieron ~25 % en
       2                         2.4
                                                                                 2025: la IA multiplica desarrolladores, no los

       0
                  Tiempo de ciclo de pull requests                                               Antes (días, referencia)                                                                                         sustituye (aún).

Fuente: GitHub/Microsoft (métricas Copilot 2025–2026); estudio controlado de productividad GitHub–MIT.

Tema 1.3 · Estado actual de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                                           12 / 45


---

## Página 13

T E M A  1 . 3 . 1   · A D O P C I Ó N
ChatGPT: la adopción masiva en cifras

                                                                                                                                  900.0
                                                                                       El ecosistema alrededor
      800
                                                                                                           800.0

                                                                                4 M de desarrolladores usan la API
                                                                                    700.0
                                                                             de OpenAI.
      600
                                                                               6 000 M de tokens por minuto

                                                              500.0                                                                                    procesados en la API.

      400                                                                                                       1 M+ de clientes empresariales pagan
                                       400.0
                                                                                  por OpenAI (2026).
                300.0


      200


                                                                                         La app de Gemini superó 750 M

                                                                                              usuarios mensuales (fin de 2025): la
        0
                     fin 2024                 feb 2025             mar 2025             ago 2025                 oct 2025             mar 2026
                                                                                                 carrera es global.

Fuente: OpenAI (DevDay oct. 2025; reporte de IA empresarial dic. 2025; comunicado mar. 2026); CNBC/Reuters.


Tema 1.3 · Estado actual de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                                          13 / 45


---

## Página 14

T E M A  1 . 3 . 1   · C O S T O S
La IA se vuelve más barata y accesible

                                 −30 % / año
                                                                          caída anual del costo de hardware; la eficiencia energética mejora × 280                                                                 ~40 % al año.
    caída del costo de  inferencia de un sistema con
                     →    rendimiento nivel GPT-3.5 entre nov. 2022 y oct. 2024,      8 %    1.7 %
    impulsada por modelos pequeños cada  vez más
                                                                             diferencia de rendimiento entre modelos abiertos y cerrados en
    capaces.                                                                      algunos benchmarks: los abiertos alcanzan a los propietarios.


Implicaciones prácticas:

   Un modelo de razonamiento útil ya corre en una GPU de consumo (destilados de 1.5B–70B parámetros).

    Estrategia recomendada en  la industria: enrutar peticiones simples a modelos baratos y reservar los grandes para

   razonamiento complejo (ahorros de 60–80 % en API).

    El costo dejó de ser la barrera: la barrera ahora es saber integrar, evaluar y gobernar estos sistemas.


Fuente: Stanford HAI, AI Index Report 2025 (cap. 1); estimaciones sectoriales de arquitectura de enrutamiento (McKinsey, 2025).

Tema 1.3 · Estado actual de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                                              14 / 45


---

## Página 15

T E M A  1 . 3 . 1   · L Í M I T E S
Limitaciones actuales de los LLMs

  Alucinaciones                                        Sesgos en los datos
   Generan  información  plausible  pero  incorrecta:  citas       Aprenden los sesgos del corpus de entrenamiento (género,

   inexistentes, APIs inventadas, datos fabricados. Mitigación:         cultura, idioma). Reproducen y amplifican estereotipos si no

   RAG,  verificación, modelos de razonamiento… pero no        se auditan.

   desaparece.

  Costos computacionales y ambientales                Conocimiento congelado y opacidad
   Entrenar un modelo frontera cuesta decenas o cientos de         El  conocimiento  termina  en  la  fecha  de  corte  del

   millones de USD y consume energía de escala urbana; la        entrenamiento; y el modelo no puede explicar de forma

   huella hídrica y de carbono de los centros de datos es un         fiable por qué produjo una salida (caja negra).

   debate abierto.


    P R E G U N T A D E C O M P R O B A C I Ó N
     Si un LLM afirma algo con total fluidez, ¿qué tan probable es que sea cierto? ¿Cómo lo verificarías?

Fuente: Antología IA-UV, 1.3.1 (alucinaciones, sesgos, costos); literatura sobre interpretabilidad de LLMs.

Tema 1.3 · Estado actual de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                                           15 / 45


---

## Página 16

T E M A  1 . 3 . 1   · R E S U M E N
1.3.1 en cinco ideas

     Un LLM es un transformer entrenado para predecir el siguiente token; la alineación (fine-tuning + RLHF) lo
01
       convierte en asistente útil.

        El panorama 2026 combina gigantes propietarios (GPT-5.x, Claude 4.x, Gemini 3) y abiertos muy competitivos
02
       (Llama 4, DeepSeek, Qwen3).

       Los modelos de razonamiento (o3, R1) agregan cómputo en tiempo de inferencia: piensan más antes de
03
      responder y dominan matemáticas, ciencia y código.

        El costo de inferencia cayó más de 280× en dos años y la adopción es masiva: ~900 M de usuarios semanales
04
       solo en ChatGPT.

       Alucinaciones, sesgos y opacidad persisten: comprender los fundamentos teóricos es requisito para evaluar sus
05
        salidas (Antología IA-UV).

Tema 1.3 · Estado actual de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                                          16 / 45


---

## Página 17

T E M A  1 . 3 . 2
IA generativa

Máquinas que crean: texto, imagen, audio, video y código sintéticos indistinguibles —o casi— de los producidos

por humanos.

Los motores de la creación. GAN, difusión y transformers generativos.

Todos los medios. Imagen (Midjourney, Stable Diffusion), audio (ElevenLabs), video (Sora, Veo) y código.

Los debates abiertos. Derechos de autor, autenticidad y el futuro del trabajo creativo.

La OCDE y la Ley de IA de la UE ya fijan directrices para esta tecnología (Antología IA-UV, 1.3.2).


                                                                                                                                                                                                  17 / 45


---

## Página 18

T E M A  1 . 3 . 2   ·  I A G E N E R A T I V A
De clasificar a crear: qué es la IA generativa

                                    IA discriminativa / predictiva                      IA generativa

                                 ¿Esto es spam o no? ¿Qué objeto hay en la
 Pregunta típica                                                                    Escribe, dibuja, compón, programa algo nuevo
                             imagen?

                                                                      Contenido original: texto, imagen, audio,
 Salida                            Etiquetas, probabilidades, números
                                                                                  video, código


Tres familias de arquitecturas detrás de la generación

  Transformers generativos          Modelos de difusión           GAN (precedente clave)
   GPT, Claude, Gemini: generan               Stable Diffusion, Midjourney, Veo:         Generador vs. discriminador
   texto (y cada vez más                     parten de ruido y lo refinan hasta           (Goodfellow, 2014); dominaron la
   modalidades) token a token.              obtener imagen o video.                      síntesis de imagen hasta 2021.

                             GAN (por sus siglas en inglés, Generative Adversarial Network, o Red Generativa
Fuente: Goodfellow et al. (2014; 2016); Antología IA-UV, 1.3.2.                                                                          Antagónica)

Tema 1.3 · Estado actual de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                                        18 / 45


---

## Página 19

T E M A  1 . 3 . 2   ·  I A G E N E R A T I V A
Cómo genera una imagen un modelo de difusión

   1 · Prompt                          2 · Ruido + refinado                   3 · Imagen final

    El texto se codifica en vectores                 Parte de ruido puro y lo «desruida»              Tras decenas de pasos de refinado           →            →
   que guiarán todo el proceso de               paso a paso, acercándose a                  emerge una imagen nueva, coherente
   generación.                               imágenes coherentes con el                   y de alta resolución.
                                             prompt.


                    →         →        →
            ▒▒▒▒▒▒▒▒  ▓▓▓▓░░▒▒  ▓▓▓▓▓░░    imagen nítida

    El mismo principio genera video y moléculas. Los modelos de video (Sora, Veo) aplican difusión en el tiempo; AlphaFold 3

   usa una red de difusión para ensamblar estructuras moleculares en 3D. Una sola idea matemática, tres industrias

    transformadas.

Fuente: Ho et al. (2020), «Denoising Diffusion Probabilistic Models»; Abramson et al. (2024, Nature), AlphaFold 3.

Tema 1.3 · Estado actual de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                                          19 / 45


---

## Página 20

T E M A  1 . 3 . 2   ·  I A G E N E R A T I V A
Imagen y audio: el estado del arte

Imagen                                         Audio y voz

Midjourney,  Stable  Diffusion,  DALL·E,  Imagen.  Generan    ElevenLabs clona voces y produce narración multilingüe; Suno

imágenes fotorrealistas o artísticas desde texto; Stable Diffusion    y Udio componen canciones completas con voz.

es abierto y corre en hardware local.                                   El  doblaje automático y  los  audiolibros  sintéticos ya son

Edición por instrucciones («quita el fondo», «envejece la foto»)    productos comerciales maduros.

ya es estándar en herramientas de diseño.

         Medio               Herramientas representativas                Uso típico                        Riesgo asociado


         Imagen           Midjourney, Stable Diffusion, DALL·E     Diseño, publicidad, prototipado       Deepfakes, estilo sin consentimiento


                                                                                                      Suplantación de voz, fraude
          Audio            ElevenLabs, Suno, Udio                  Doblaje, música, accesibilidad
                                                                                                               telefónico


Fuente: Antología IA-UV, 1.3.2 (Midjourney, Stable Diffusion, ElevenLabs); sitios oficiales de las herramientas.

Tema 1.3 · Estado actual de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                20 / 45


---

## Página 21

T E M A  1 . 3 . 2   ·  I A G E N E R A T I V A
Video generativo: de la demo al producto… y a la volatilidad

     Modelo           Lanzamiento                Capacidad distintiva                      Situación en 2026


                                                        Física realista y audio sincronizado; app social  App cerrada (abr. 2026); API en retirada
 Sora 2 (OpenAI)       Sep. 2025
                                         con «cameos»                    — muestra de la velocidad del mercado


                                            Video 1080p con audio nativo (diálogo,        Producto estable en Vertex AI, Gemini y
 Veo 3 / 3.1 (Google)   May. / oct. 2025
                                                        efectos); marca de agua SynthID            YouTube


En dos años el video sintético pasó por tres saltos

2024 · Sora 1 sorprende con clips coherentes de hasta un minuto (la antología lo cita como referencia).

2025 · Veo 3 agrega audio nativo sincronizado: diálogo y ambiente generados junto con la imagen.

2026 · Clips fotorrealistas con continuidad entre tomas; el costo por segundo cae y la detección se vuelve crítica.

Lección: en IA generativa, hasta los productos estrella pueden desaparecer en meses; diseña tus sistemas para poder cambiar de modelo.


Fuente: OpenAI (Sora 2, sep. 2025) y retiro del servicio (2026); Google DeepMind / Google Cloud (Veo 3 y 3.1, 2025).

Tema 1.3 · Estado actual de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                                           21 / 45


---

## Página 22

T E M A  1 . 3 . 2   ·  I A G E N E R A T I V A
La IA generativa dentro del ciclo de desarrollo de software

         Etapa                 Qué hace la IA generativa hoy                    Herramientas representativas

                        Propone arquitecturas, esquemas de BD y contratos de
                 Diseño                                                      ChatGPT, Claude, Gemini
                         API

                         Autocompleta funciones, genera módulos completos,
              Codificación                                                   GitHub Copilot, Claude Code, Codex, Cursor
                           traduce entre lenguajes

                        Genera casos de prueba, datos sintéticos y pruebas
                Pruebas                                                               Copilot, agentes de testing
                              unitarias

             Depuración  Explica errores, propone correcciones, revisa diffs        Claude Code, Codex, Copilot


         Documentación Redacta README, docstrings y notas de versión          Todas las anteriores

   Dato de contexto: en SWE-bench Verified —resolución de errores reales de repositorios de GitHub— los sistemas pasaron de

   ~60 % a ~100 % en un año (AI Index 2026). El rol del ingeniero se desplaza de escribir código a especificar, revisar y verificar.

Fuente: Stanford HAI, AI Index Report 2026; documentación de GitHub, Anthropic y OpenAI.

Tema 1.3 · Estado actual de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                        22 / 45


---

## Página 23

T E M A  1 . 3 . 2   · D E B A T E S
Derechos de autor, autenticidad y trabajo creativo

  ¿De quién es lo generado?             Autenticidad y deepfakes              El futuro del trabajo creativo


   Los modelos se entrenan con obras con      Contenido sintético indistinguible del      Se plantea el debate: ¿herramienta que

   copyright. Hay  litigios  abiertos  (The        real: desinformación  electoral, fraude      amplifica  al creativo o  sustituto que

  New York Times  vs. OpenAI,  entre     con voz clonada, imágenes íntimas no      devalúa su trabajo? La evidencia apunta

   otros)  y  acuerdos  millonarios  de      consentidas (ya prohibidas por  la UE      a transformación, no desaparición.

   licencia con medios y discográficas.         desde dic. 2026).

   M A R C O N O R M A T I V O Y A E N V I G O R
    La Ley de IA de la UE obliga desde ago. 2026 a etiquetar deepfakes y contenido sintético (art. 50). La OCDE

    publicó directrices sobre IA generativa, derechos de autor y transparencia que orientan las políticas nacionales.

                                                                                   OCDE (Organización para la Cooperación y el Desarrollo Económicos)

Para el ingeniero: si tu producto genera contenido, la trazabilidad (marcas de agua, metadatos C2PA/SynthID) deja de ser opcional.

Fuente: Antología IA-UV, 1.3.2; Reglamento (UE) 2024/1689, art. 50; directrices OCDE sobre IA.

Tema 1.3 · Estado actual de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                        23 / 45


---

## Página 24

T E M A  1 . 3 . 2   · R E S U M E N
1.3.2 en cuatro ideas

       La IA generativa crea contenido nuevo (texto, imagen, audio, video, código) en lugar de solo clasificar o predecir.01


       Los modelos de difusión dominan imagen y video (y hasta biología molecular); los transformers generativos
02      dominan texto y código.


      En software, la IA ya participa en todo el ciclo: diseño, codificación, pruebas, depuración y documentación — el
03
       ingeniero verifica.


       Copyright, deepfakes y trabajo creativo son debates legales y éticos activos; la UE ya exige etiquetar contenido04
        sintético (2026).

    Pregunta: ¿qué parte de tu flujo de desarrollo actual podría generarse con IA… y cuál no debería?

Tema 1.3 · Estado actual de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                           24 / 45


---

## Página 25

T E M A  1 . 3 . 3
Aplicaciones prácticas contemporáneas

La IA salió del laboratorio: diagnostica enfermedades, conduce taxis, predice proteínas y opera mercados

financieros.

Salud y ciencia. Diagnóstico por imagen, AlphaFold y dos premios Nobel 2024.

Transporte, finanzas, educación y agricultura. Robotaxis, trading algorítmico, tutores y drones.

El caso que más te toca. La IA aplicada a la propia ingeniería de software.

Cada aplicación citada aquí aparece en la antología — y cada una tiene cifras de despliegue real en 2025–2026.


                                                                                                                                                             25 / 45


---

## Página 26

T E M A  1 . 3 . 3   · S A L U D
Medicina: diagnóstico asistido por IA

                                                                           El frente clínico hoy    E S T U D I O D E C A S O   · N A T U R E 2 0 2 0

   Mamografías: la IA supera a los radiólogos
                                                                        Detección temprana en radiología,
   McKinney  et  al. (Google Health, Nature 2020) entrenaron un                                                                          dermatología y retinopatía diabética.
   sistema de deep  learning que  detectó cáncer de mama en                                                                            Cientos de dispositivos médicos con IA
   mamografías con menos falsos positivos y falsos negativos que los                                                                            autorizados por la FDA.
   radiólogos en los conjuntos de evaluación (EE. UU. y Reino Unido).                                                                      Descubrimiento de fármacos acelerado por
   La antología lo cita como hito de la IA aplicada a salud.                                                                  modelos generativos moleculares.

   Matiz profesional: «superar en un benchmark» no es lo mismo que «reemplazar en la clínica». La IA médica opera como

   segunda lectura: la decisión final y la responsabilidad siguen siendo humanas — y la regulación lo exige (alto riesgo en la Ley

   de IA europea).


Fuente: McKinney et al., «International evaluation of an AI system for breast cancer screening», Nature 577 (2020); Antología IA-UV, 1.3.3.

Tema 1.3 · Estado actual de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                        26 / 45


---

## Página 27

T E M A  1 . 3 . 3   · C I E N C I A
AlphaFold: la IA resuelve un problema de 50 años

   2020                    2021–2022                    2024                    Hoy

AlphaFold 2 (DeepMind)           Base de datos abierta con          AlphaFold 3 (Nature): predice      +2 M de investigadores en 190

predice estructuras 3D de          estructuras de ~200 M de            proteínas, ADN, ARN y              países lo usan: resistencia

proteínas con precisión            proteínas —casi todas las            ligandos con red de difusión;        antibiótica, enzimas que

experimental: resuelve el          conocidas—, gratis para la         Nobel de Química para            degradan plástico, diseño de

«problema del                       ciencia.                           Hassabis y Jumper.                fármacos.

plegamiento».


   P O R Q U É E S U N A N T E S Y U N D E S P U É S
    Determinar experimentalmente una estructura podía tomar años de laboratorio; AlphaFold la predice en minutos. El

     artículo de AlphaFold 2 es una de las publicaciones más citadas de la historia y la herramienta aceleró campos enteros

   de la biología.

Fuente: NobelPrize.org (comunicado Química 2024); Google DeepMind / Isomorphic Labs (AlphaFold 3, Nature 2024); Antología IA-UV, 1.3.3.

Tema 1.3 · Estado actual de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                          27 / 45


---

## Página 28

T E M A  1 . 3 . 3   · C I E N C I A
2024: la inteligencia artificial gana dos premios Nobel

   N O B E L D E F Í S I C A 2 0 2 4                              N O B E L D E Q U Í M I C A 2 0 2 4
   Hopfield y Hinton                                Baker · Hassabis · Jumper

   Por los fundamentos del aprendizaje automático con             Baker, por el diseño computacional de proteínas nuevas;

   redes neuronales artificiales: la red de Hopfield (1982) y            Hassabis y Jumper (Google DeepMind), por AlphaFold 2,

     la máquina de Boltzmann; Hinton es además figura          que predijo la estructura de las ~200 M de proteínas

    clave de la retropropagación (1986).                                conocidas.

    El premio a los cimientos teóricos de la IA.                             El premio a la aplicación científica de la IA.

   Señal histórica: la Academia sueca reconoció en un mismo año a la IA como ciencia básica (Física) y como instrumento

    científico (Química) — la consolidación definitiva del campo que Dartmouth imaginó en 1956.

Fuente: NobelPrize.org, comunicados de prensa Física y Química 2024 (oct. 2024).

Tema 1.3 · Estado actual de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                       28 / 45


---

## Página 29

T E M A  1 . 3 . 3   · T R A N S P O R T E
Vehículos autónomos: el robotaxi ya es un negocio


  > 500 000            14 ciudades         −94 %

    viajes pagados por semana de Waymo         de EE. UU. con servicio comercial sin         menos accidentes con lesiones graves

   (Alphabet) en 2026; objetivo: 1                 conductor (Phoenix, SF, LA, Austin,           o mortales que conductores humanos

   M/semana para fin de 2026.                      Atlanta, Miami…); expansión prevista a         en condiciones equivalentes (dato de

                                              Tokio y Londres.                         Waymo).

La antología menciona a Tesla y Waymo como referentes. La diferencia de enfoque es didáctica: Tesla apuesta por visión por

cámaras y aprendizaje extremo a extremo; Waymo combina LiDAR + radar + cámaras con mapas de alta definición. En 2025–

2026 la operación comercial real y a escala la lidera Waymo, mientras Tesla inició su servicio de robotaxi en Austin.

      Percepción multimodal             Planificación y control          Mapas HD y simulación             Seguridad validada


 LiDAR, radar, cámaras             Redes neuronales + reglas           Millones de km simulados          Métricas públicas vs. humanos

Fuente: Waymo (blog oficial y datos de seguridad, 2025–2026); CNBC; Antología IA-UV, 1.3.3.

Tema 1.3 · Estado actual de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                        29 / 45


---

## Página 30

T E M A  1 . 3 . 3   · F I N A N Z A S
Finanzas: donde la IA opera en milisegundos

  Trading de alta frecuencia                                Detección de fraude

   Algoritmos que ejecutan millones de transacciones por segundo       Modelos de anomalías evalúan cada tarjeta o transferencia en

    (antología). Aprendizaje por refuerzo y modelos  predictivos        tiempo real: bloquean operaciones sospechosas en milisegundos,

   deciden en microsegundos; el humano define estrategia y límites       con umbrales ajustados para minimizar falsos positivos.

   de riesgo.

   Scoring y crédito                                  LLMs en la operación bancaria

   Evaluación crediticia con cientos de variables. Caso de alto riesgo         Asistentes  internos  para   analistas,  resumen  de  reportes

   en la Ley de IA de la UE: exige supervisión humana, explicabilidad         regulatorios,  atención   al   cliente  y  revisión  documental

   y auditoría de sesgos.                                              (KYC/AML). Morgan Stanley y JPMorgan ya despliegan asistentes

                                                                            propios.


    L E C C I Ó N D E A R Q U I T E C T U R A

   En finanzas, la IA se despliega con redundancia, monitoreo y «kill switches»: un modelo sin control de riesgo es un
    pasivo, no un activo.


Fuente: Antología IA-UV, 1.3.3; Reglamento (UE) 2024/1689, Anexo III (crédito = alto riesgo).

Tema 1.3 · Estado actual de la IA · Ingeniería de Software · Universidad Veracruzana                                                                               30 / 45


---

## Página 31

T E M A  1 . 3 . 3   · E D U C A C I Ó N Y A G R I C U L T U R A
Educación y agricultura: la IA en el aula y en el campo

   Educación: tutores inteligentes                                                         Agricultura: drones y visión

                                                            Se citan los drones con IA: monitorean cultivos con visión
 Se destaca los tutores inteligentes: sistemas que adaptan
                                                                computacional, detectan plagas y estrés hídrico antes que el
  ritmo, ejercicios y retroalimentación a cada estudiante.
                                                                    ojo humano.
 Hoy: Khanmigo (Khan Academy), ChatGPT «modo estudio»,
                                                                      Agricultura de precisión: riego y  fertilizante planta por
 Gemini for Education. Y el dato del AI Index 2026: 4 de cada
                                                                        planta, con ahorros de agua y agroquímicos de dos dígitos.
 5 universitarios ya usan IA generativa.
                                                               Sensores + modelos en  el borde (edge  AI) operan sin
 Reto docente: integrarla sin que sustituya el aprendizaje —
                                                                  conectividad en zonas rurales.
 diseñar evaluaciones a prueba de copia.

   Patrón común: en ambos sectores la IA funciona como amplificador del experto (docente, agrónomo), no como reemplazo —

   y el valor está en la personalización a escala.

Fuente: Antología IA-UV, 1.3.3 (tutores inteligentes, drones); Stanford HAI, AI Index Report 2026.

Tema 1.3 · Estado actual de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                                          31 / 45


---

## Página 32

T E M A  1 . 3 . 3   ·  I N G E N I E R Í A D E S O F T W A R E
La IA aplicada a la propia ingeniería de software

El sector que construye la IA es también el que más la adopta: los asistentes de código pasaron de autocompletado a

agentes que ejecutan tareas completas en repositorios reales.

    100
                                                                                                            99.0
                                                Cómo leer la gráfica

     80                                                         SWE-bench Verified mide si un sistema resuelve
                                                                 72.0                                       errores  reales de proyectos open source de

     60
                                                                            GitHub.

                                                                   Según el AI Index 2026, el mejor resultado pasó
     40             43.0
                                                                   de ~60 % a casi 100 % en un año (los valores

                                                                             exactos por año varían por sistema y fecha).     20

                                                                                   Implicación: las tareas rutinarias de programación

      0                    2024.0                                   2025.0                                   2026.0             se automatizan primero; crecen  la demanda de
                                                                                        arquitectura, revisión y criterio.


                                →
Fuente: Stanford HAI, AI Index Report 2026 (SWE-bench Verified 60 %   ~100 %); OpenAI/Anthropic (agentes de código).

Tema 1.3 · Estado actual de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                        32 / 45


---

## Página 33

T E M A  1 . 3 . 3   · P A N O R A M A
Mapa de aplicaciones por sector

       Sector                   Aplicación emblemática                  Técnicas dominantes             Madurez en 2026

                   Detección de cáncer en imágenes (McKinney
 Salud                                                 CNN, visión profunda         En clínica como segunda lectura
                   2020)

 Ciencia             AlphaFold: estructura de ~200 M de proteínas   Transformers + difusión        Estándar mundial; Nobel 2024


 Transporte         Robotaxis Waymo: >500 mil viajes/semana     Percepción multimodal, RL     Comercial en 14 ciudades


 Finanzas           Trading de alta frecuencia, antifraude            Series temporales, anomalías    Operación crítica consolidada


 Educación          Tutores inteligentes adaptativos             LLMs + modelos del estudiante  Adopción masiva estudiantil


 Agricultura        Drones con visión para cultivo de precisión     Visión + edge AI               Expansión comercial

Patrón: donde hay datos abundantes y métricas claras, la IA ya opera en producción.


Fuente: Antología IA-UV, 1.3.3; fuentes sectoriales citadas en las diapositivas anteriores.

Tema 1.3 · Estado actual de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                       33 / 45


---

## Página 34

T E M A  1 . 3 . 3   · R E S U M E N
1.3.3 en cuatro ideas

      La IA ya opera en producción en salud, ciencia, transporte, finanzas, educación y agricultura — con cifras
01
      de despliegue medibles.

      AlphaFold y los Nobel 2024 muestran el techo: la IA como instrumento de descubrimiento científico, no
02
       solo de productividad.

        El patrón de éxito es «amplificar al experto»: segunda lectura médica, conductor de respaldo, analista con
03
        asistente.

       Para ustedes el frente más cercano es el propio: los agentes de código ya resuelven la mayoría de los04
       errores del benchmark de referencia — el valor profesional migra a diseño, revisión y criterio.

Tema 1.3 · Estado actual de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                          34 / 45


---

## Página 35

T E M A  1 . 3 . 4
Tendencias y desafíos futuros

Hacia dónde va la tecnología — agentes, multimodalidad, nuevas arquitecturas — y qué problemas técnicos,

legales y sociales siguen abiertos.

La tendencia del momento. Agentes de IA: de responder a actuar.

Fronteras técnicas. Multimodalidad, cómputo neuromórfico y cuántico, y el debate sobre la AGI.

Los desafíos. Explicabilidad, sesgos, privacidad, seguridad y empleo — y la regulación que ya llegó.

Goldman Sachs (2023) estima que la IA generativa podría afectar ~300 millones de puestos de trabajo (Antología IA-UV, 1.3.4).

                                                                                                                                                            35 / 45


---

## Página 36

T E M A  1 . 3 . 4   · T E N D E N C I A S
Agentes de IA: de responder preguntas a ejecutar tareas

El ciclo básico de un agente


   1 · Percibir                   2 · Planificar                  3 · Actuar                     4 · Evaluar          →          →          →
  Lee el objetivo y el estado:          Descompone la tarea en             Llama herramientas: ejecutar           Verifica el resultado y
   archivos, web, correo.                pasos (razonamiento).                 código, buscar, escribir                 repite el ciclo si falla.
                                                                                   archivos.

Ejemplos en producción (2025–2026)

   Código: Claude Code, Codex y Copilot Workspace modifican repositorios, corren pruebas y abren pull requests.

    Investigación: «Deep Research» de OpenAI y Gemini navegan y sintetizan reportes con fuentes.

    Oficina: Claude Cowork y agentes en ChatGPT ejecutan flujos de trabajo de varios pasos con aplicaciones externas.

   Diseño responsable: un agente con acceso a herramientas multiplica el impacto de cada error o ataque (inyección de

   prompts). Sandbox, permisos mínimos y confirmación humana en acciones irreversibles.


Fuente: OpenAI (o3 con herramientas, 2025; Deep Research); Anthropic (Claude Code); CNBC/Reuters (feb. 2026).
Tema 1.3 · Estado actual de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                       36 / 45


---

## Página 37

T E M A  1 . 3 . 4   · T E N D E N C I A S
Fronteras técnicas: qué viene después del transformer

       Tendencia                         Qué es                                      Estado en 2026


                                                                               Ya es estándar en los modelos punteros (Gemini,
 IA multimodal          Un solo modelo entiende y genera texto, imagen, audio y video
                                                                                     GPT, Claude)


                           Chips inspirados en el cerebro: neuronas y sinapsis en silicio,     Investigación avanzada (Intel Loihi, SpiNNaker);
 Cómputo neuromórfico
                       consumo mínimo                                           nichos de edge


                                                                                          Experimental; casos de demostración, sin ventaja
 Computación cuántica + IA  Acelerar optimización y simulación molecular con qubits
                                                                                                práctica general


                           Sistema con competencia humana amplia en la mayoría de      Sin consenso: algunos laboratorios la dan por
 AGI (IA general)
                               tareas cognitivas                                               cercana; otros, por décadas

   Se listan estas cuatro fronteras (multimodal, neuromórfica, cuántica, AGI) como agenda abierta de la década.

Fuente: Antología IA-UV, 1.3.4; estado de la técnica reportado por los laboratorios citados (2025–2026).
Tema 1.3 · Estado actual de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                          37 / 45


---

## Página 38

T E M A  1 . 3 . 4   · R E G U L A C I Ó N
La Ley de IA de la UE: el primer marco integral del mundo

ago. 2024                 feb. 2025                ago. 2025                ago. 2026              2027–2028

Entrada en vigor del         Prácticas prohibidas        Obligaciones para modelos  Aplicación general:         Normas de alto riesgo

Reglamento (UE)           (puntuación social,        de IA de uso general (GPAI) y transparencia (art. 50),       (reformadas por el «Ómnibus

2024/1689.                manipulación) y obligación gobernanza europea.       etiquetado de contenido       Digital», 2026): dic. 2027 y ago.

                       de alfabetización en IA.                                    sintético y régimen          2028.

                                                                                sancionador.
Clasificación por niveles de riesgo

       →                                                                         Sanciones: hasta 35 M € o 7 % de la  Inaceptable   prohibido
                                                                                            facturación global por prácticas
      →
  Alto riesgo   requisitos estrictos (salud, empleo, crédito)
                                                                                             prohibidas; 15 M € o 3 % por otras
            →                                                                                               obligaciones.  Transparencia limitada   chatbots y deepfakes etiquetados
                                                                                            Aplica también a proveedores fuera de la        →
  Riesgo mínimo   sin reglas nuevas (filtros de spam, videojuegos)
                                                                   UE cuyos sistemas se usen dentro.

Fuente: Comisión Europea, Reglamento (UE) 2024/1689 y calendario oficial de aplicación (2024–2028).
Tema 1.3 · Estado actual de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                      38 / 45


---

## Página 39

T E M A  1 . 3 . 4   · D E S A F Í O S T É C N I C O S
Desafíos técnicos abiertos

   Explicabilidad                       Seguridad adversaria                  Privacidad

   Modelos de caja negra: no podemos            Entradas manipuladas para engañar al          Los modelos pueden memorizar datos

   reconstruir por qué decidieron. La             modelo: inyección de prompts en            de entrenamiento (incluidos

   interpretabilidad mecanicista intenta            agentes, ejemplos adversarios en                personales). Respuestas técnicas:

    «abrir» las redes; la regulación de alto             visión. La defensa es un área activa y            privacidad diferencial, aprendizaje

   riesgo ya exige explicaciones.                    sin solución completa.                         federado, borrado de datos.


El costo físico de la escala

Los centros de datos de IA consumen electricidad de escala urbana: las grandes tecnológicas anunciaron inversiones conjuntas del

orden de cientos de miles de millones de USD en infraestructura (320 000 M USD solo Amazon, Meta, Microsoft y Google), y la

demanda eléctrica de los centros de datos se ha vuelto un tema de política energética.

Contrapeso: la eficiencia energética del hardware mejora ~40 % al año (AI Index 2025) y los modelos pequeños desplazan cargas de

trabajo.


Fuente: Antología IA-UV, 1.3.4; Stanford HAI, AI Index 2025; reportes corporativos de inversión en infraestructura (2025).

Tema 1.3 · Estado actual de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                       39 / 45


---

## Página 40

T E M A  1 . 3 . 4   · D E S A F Í O S S O C I A L E S
Empleo, sesgos y percepción pública

                                    ≠                                                         «Expuesto»      «eliminado».  La  evidencia  histórica:  la

                                                                tecnología transforma tareas más rápido que profesiones. En 300 millones
                                                                  software, los commits crecieron 25 % en 2025 —  la IA  puestos de trabajo en el mundo expuestos a
                                                                  multiplica al desarrollador que sabe usarla.  automatización parcial por IA generativa (Goldman Sachs,
  2023, citado en la antología).                                 La brecha real es de habilidades, no de máquinas contra

                                                      humanos.

La percepción pública se divide por regiones (% que ve la IA más beneficiosa que dañina)


            80             83.0                                                                       80.0                                                                                                                 77.0

            60


            40
                                                                                                                                                            39.0                                                                                                                                                                                                      36.0

            20


             0
                          China                                    Indonesia                                      Tailandia                               EE. UU.                               Países Bajos

Fuente: Stanford HAI, AI Index Report 2025 (encuesta global Ipsos); Goldman Sachs (2023) vía Antología IA-UV, 1.3.4.

Tema 1.3 · Estado actual de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                  40 / 45


---

## Página 41

T E M A  1 . 3 . 4   · C I E R R E P R O F E S I O N A L
Lo que un ingeniero de software debe saber en 2026

      Fundamentos antes que frameworks: tokens, contexto, probabilidad, alucinación — para evaluar salidas y diseñar
01
       salvaguardas (la antología lo subraya).

       Patrones de integración: prompts, RAG, llamada a herramientas (function calling), evaluación con benchmarks propios y
02
      enrutamiento entre modelos por costo/complejidad.

      Seguridad específica de IA: inyección de prompts, fuga de datos, alucinación de dependencias; sandbox y permisos
03
      mínimos para agentes.

      Cumplimiento: si tu sistema usa IA y llega a usuarios, la Ley de IA (UE) ya te asigna obligaciones: alfabetización,
04
       transparencia y etiquetado de contenido sintético.

        Criterio de adopción: el mercado cambia cada mes (hasta Sora 2 se retiró en 7 meses); abstrae el modelo detrás de
05
        interfaces para no casarte con un proveedor.

    P R E G U N T A D E C O M P R O B A C I Ó N
    ¿Cuáles de estas cinco competencias ya dominas, y cuál será tu plan para las demás?

Tema 1.3 · Estado actual de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                                              41 / 45


---

## Página 42

T E M A  1 . 3 . 4   · R E S U M E N
1.3.4 en cuatro ideas

      Los agentes son la tendencia dominante: LLMs que planifican, usan herramientas y verifican sus propios
01
       resultados en ciclos.

      Multimodalidad consolidada; neuromórfica, cuántica y AGI permanecen como fronteras abiertas de la
02
       década.

      La regulación ya llegó: la Ley de IA de la UE se aplica por fases desde 2024, con aplicación general en agosto
03
      de 2026.

      Los desafíos — explicabilidad, sesgos, privacidad, seguridad y empleo — no se resuelven solos: son parte del
04
       trabajo de ingeniería, no un apéndice ético opcional.

Tema 1.3 · Estado actual de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                           42 / 45


---

## Página 43

I N F O G R A F Í A   · P A N O R A M A 2 0 2 6
Mapa de técnicas y algoritmos de la IA

          IA SIMBÓLICA (CLÁSICA)                  APRENDIZAJE AUTOMÁTICO                  APRENDIZAJE PROFUNDO


 Búsqueda y optimización    Lógica y sistemas             Supervisado · regresión,     Ensambles · Random       CNN · visión,               Transformers · LLMs,
    · A*, minimax               expertos · MYCIN            SVM, árboles                  Forest, XGBoost                diagnóstico por imagen      multimodal


  Planificación · STRIPS,       Representación ·           No supervisado · k-         Por refuerzo · Q-              Difusión · imagen, video,    MoE + RL ·
  robótica                      ontologías, grafos             means, PCA                   learning, RLHF                AlphaFold 3                razonamiento (R1, o3)


Vive dentro de sistemas híbridos, juegos y verificación        Sigue ganando en datos tabulares, fraude y scoring             El paradigma dominante: transformers + difusión + RL a
formal.                                                             crediticio.                                                         escala.

CAPA DE SISTEMAS 2025–2026 — lo que se construye sobre esas técnicas


  RAG · recuperación + generación          Agentes · planificación +                    Destilación · modelos pequeños            Test-time compute · pensar más al
  con fuentes                              herramientas + memoria                que heredan del grande                  responder

Cómo leer el mapa: ninguna rama desapareció — la IA actual combina las tres. Los sistemas punteros de 2026 son híbridos: transformers entrenados con RL,

difusión para medios continuos, y componentes clásicos (búsqueda, verificación) rodeando al modelo.

Tema 1.3 · Estado actual de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                          43 / 45


---

## Página 44

T E M A  1 . 3   · F U E N T E S
Referencias y fuentes

Base del curso                                                         Ciencia y aplicaciones

    Antología de  Inteligencia  Artificial,  Universidad  Veracruzana,       McKinney et al. (2020), Nature 577: evaluación internacional de IA

   sección 1.3 y sus referencias (Vaswani et al. 2017; Goodfellow et al.        en mamografías.

    2016; LeCun et al. 2015; Nilsson 2010; Marcus & Davis 2019).                 NobelPrize.org  (oct. 2024): Física (Hopfield, Hinton) y Química

Datos y adopción                                                                 (Baker, Hassabis, Jumper); Google DeepMind / Isomorphic Labs,

   Stanford HAI, AI Index Report 2025 (costos ×280, optimismo        AlphaFold 3 (Nature, 2024).

    global) y 2026 (adopción 88 %, SWE-bench, 4 de 5 estudiantes).         Waymo (2025–2026): >500 mil viajes semanales, 14 ciudades, datos

   OpenAI, The State of Enterprise AI 2025 y comunicados (800 M        de seguridad (−94 %).

    usuarios semanales, oct. 2025; 900 M y 50 M de suscriptores, mar.     Modelos y regulación

   2026; 1 M de clientes empresariales).                               OpenAI o3 (2025) y DeepSeek-AI R1 (Nature, 2025): benchmarks

   GitHub/Microsoft: métricas de Copilot (20 M usuarios, 90 %        AIME, GPQA, SWE-bench.

   Fortune 100, ~46 % del código; +55 % de velocidad).                     Comisión Europea, Reglamento (UE) 2024/1689 y calendario oficial

                                                                 de aplicación; OCDE, directrices de IA generativa; Goldman Sachs

                                                                                    (2023), ~300 M de empleos expuestos.

Todas las cifras externas fueron contrastadas con fuentes públicas en septiembre de 2026; el campo evoluciona rápido: verifica antes de citar.

Tema 1.3 · Estado actual de la IA · Ingeniería de Software · Universidad Veracruzana                                                                                             44 / 45


---

## Página 45

C I E R R E D E L T E M A  1 . 3
La IA actual no es un destino: es el punto de partida
de su práctica profesional.

Modelos que razonan, máquinas que crean, sistemas que operan en el mundo real — y desafíos que necesitan ingenieros con

fundamentos sólidos y criterio ético.

Siguiente tema: Capítulo 2 · Técnicas y enfoques de la inteligencia artificial.

Inteligencia Artificial · Ingeniería de Software · Facultad de Negocios y Tecnologías · Universidad Veracruzana                                                                   45 / 45
