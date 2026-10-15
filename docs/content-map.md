# Mapa de cobertura del temario

Documento generado a partir de la lectura completa de `tema-1.1.md`, `tema-1.2.md`,
`tema-1.3.md`, `tema-1.5.md`, `GUIA-CONTENIDO.md` y `BANCO-PREGUNTAS.md`.

Cada sección y subsección del material queda asignada a **una lección con ID estable**.
Las marcas `## Página NN` de los MD son trazabilidad, no títulos de lección.

Leyenda de origen de referencias: **pp.** = páginas del material de clase del tema indicado.

---

## Módulo 1.1 — Filosofía de la inteligencia artificial (50 páginas)

| Sección / subtema | Páginas | Lección (ID) |
|---|---|---|
| Introducción: impacto, contexto profesional, cifras fechadas, IA como oficio | 1–6 | `m1-intro` |
| 1.1.1 Definición y alcance: definición de IA, cuatro enfoques de Russell y Norvig, agente racional, alcance y IAG | 8–16 | `m1-1-definicion` |
| 1.1.2 ¿Pueden pensar las máquinas?: Turing 1950, juego de imitación, límites; Searle 1980, Habitación China, sintaxis/semántica, IA débil/fuerte, réplicas | 17–29 | `m1-2-turing-searle` |
| 1.1.3 Consciencia artificial: Chalmers (problema fácil/difícil), qualia, funcionalismo, dualismo, implicaciones éticas/legales, caso LaMDA | 30–39 | `m1-3-consciencia` |
| Complemento: Estadística, Ciencia de Datos e IA — objeto, métodos, relación, tabla comparativa | 40–46 | `m1-4-disciplinas` |
| Cierre: cuatro preguntas de debate y mapa de repaso | 47–48 | `m1-5-repaso` |
| Fuentes del tema | 49 | (referencias dentro de lecciones) |

Interactivos asociados: `russell-matrix`, `agent-cycle`, `turing-test`, `chinese-room`,
`consciousness-compare`, `disciplines-comparator`.

---

## Módulo 1.2 — Historia de la inteligencia artificial (57 páginas)

| Sección / subtema | Páginas | Lección (ID) |
|---|---|---|
| Ruta del tema y patrón euforia → invierno → resurgimiento | 2–4 | `m2-intro` |
| 1.2.1 Orígenes: Talos y Hefesto, Herón, Al-Jazarí, Leonardo, Vaucanson, Turco Mecánico, Descartes, Boole, Babbage, Ada Lovelace | 5–13 | `m2-1-origenes` |
| 1.2.2 Nacimiento formal (1950–1970): Turing 1950, Dartmouth 1956, Logic Theorist, GPS, perceptrón, damas de Samuel, ELIZA, SHRDLU, optimismo desbordado | 14–24 | `m2-2-nacimiento` |
| 1.2.3 Inviernos: muros técnicos, informe Lighthill (1973), sistemas expertos (MYCIN, PROSPECTOR, XCON), segundo invierno 1987–1993 | 25–34 | `m2-3-inviernos` |
| 1.2.4 Resurgimiento (1990–2010): cambio de paradigma, Big Data (3 V), Deep Blue 1997, algoritmos clásicos de ML, industrialización | 35–42 | `m2-4-resurgimiento` |
| 1.2.5 Deep Learning (2010–presente): AlexNet 2012, ImageNet, AlphaGo 2016, Transformer 2017, carrera de escala LLM, ChatGPT 2022 y IA generativa, Ley de IA 2024 | 43–53 | `m2-5-deep-learning` |
| Cierre: cinco lecciones y línea de tiempo de hitos | 54–55 | `m2-6-repaso` |
| Fuentes del tema | 56–57 | (referencias dentro de lecciones) |

Interactivos asociados: `history-timeline`, `ai-cycle`.

---

## Módulo 1.3 — Estado actual de la inteligencia artificial (45 páginas)

| Sección / subtema | Páginas | Lección (ID) |
|---|---|---|
| Introducción: convergencia algoritmos + cómputo + datos, transformers a escala | 3–4 | `m3-intro` |
| 1.3.1 Grandes Modelos de Lenguaje: definición, ciclo de vida (tokenización, preentrenamiento, ajuste/alineación, inferencia), ventana de contexto, panorama de modelos, capacidades emergentes, modelos de razonamiento, adopción, costos, límites (alucinaciones, sesgos, costos, opacidad) | 5–16 | `m3-1-llms` |
| 1.3.2 IA generativa: discriminativa vs generativa, arquitecturas (transformers generativos, difusión, GAN), imagen, audio, video, código en el ciclo de desarrollo, derechos de autor y autenticidad | 17–24 | `m3-2-generativa` |
| 1.3.3 Aplicaciones prácticas: medicina, ciencia (AlphaFold, Nobel 2024), transporte, finanzas, educación y agricultura, ingeniería de software | 25–34 | `m3-3-aplicaciones` |
| 1.3.4 Tendencias y desafíos: agentes, fronteras técnicas (multimodal, neuromórfica, cuántica, AGI), regulación (Ley de IA UE), desafíos técnicos y sociales, competencias del ingeniero | 35–42 | `m3-4-tendencias` |
| Cierre: mapa de técnicas y algoritmos (IA simbólica, ML, deep learning, capa de sistemas) | 43 | `m3-5-mapa-tecnicas` |
| Fuentes del tema | 44–45 | (referencias dentro de lecciones) |

Interactivos asociados: `token-pipeline`, `attention-context`, `generative-comparator`.

---

## Módulo 1.5 — Problemas computacionales y formulación (46 páginas)

Once unidades obligatorias, cada una con su propia lección.

| Sección | Tema | Páginas | Lección (ID) |
|---|---|---|---|
| 1.5.1 | Del problema real al problema computacional: cinco elementos, modelar, problema/instancia/solución/algoritmo/representación | 6–9 | `m5-1-del-problema-real` |
| 1.5.2 | Elementos fundamentales: datos de entrada, variables de decisión, dominios, restricciones duras/blandas, función objetivo | 10–15 | `m5-2-elementos` |
| 1.5.3 | Tipos de problemas: decisión, factibilidad, optimización, enumeración, conteo, ranking | 16–18 | `m5-3-tipos` |
| 1.5.4 | Soluciones y calidad: candidata, factible, óptima, subóptima, exacta/aproximada/heurística/metaheurística, óptimo local/global | 19–21 | `m5-4-soluciones` |
| 1.5.5 | Espacios de búsqueda y representaciones: estados, acciones, inicio/meta, grafo/árbol/matriz/lista/texto, explosión combinatoria | 22–25 | `m5-5-espacios` |
| 1.5.6 | Optimización combinatoria: características, mochila 0/1, TSP, asignación, secuenciación | 26–30 | `m5-6-combinatoria` |
| 1.5.7 | Satisfacción de restricciones (CSP): variables/dominios/restricciones, coloreo de mapas, Sudoku, n-reinas, horarios | 31–34 | `m5-7-csp` |
| 1.5.8 | Rutas, redes y caminos óptimos: grafo ponderado, costo de caminos, ruta más corta, BFS/Dijkstra/A* | 35–37 | `m5-8-rutas` |
| 1.5.9 | Búsqueda en lenguaje natural y recuperación de información: búsqueda literal, consulta/corpus/índice/relevancia/ranking, búsqueda semántica | 38–40 | `m5-9-ir` |
| 1.5.10 | Selección del enfoque de resolución: diez preguntas de diagnóstico y mapa de decisión | 41–42 | `m5-10-eleccion` |
| 1.5.11 | Taller integrador: especificación completa sin escribir código, ejercicios propuestos, errores frecuentes | 43–45 | `m5-11-taller` |
| — | Referencias del tema | 46 | (referencias dentro de lecciones) |

Interactivos asociados: `formulation-builder`, `graph-explorer`, `constraint-simulator`,
`problem-type-sorter`, `search-space-explorer`.

---

## Cobertura de páginas respecto al material original

| Tema | Páginas del PDF | Lecciones | Cobertura |
|---|---|---|---|
| 1.1 | 50 | 6 | 200/200 ítems de página asignados |
| 1.2 | 57 | 7 | 57/57 |
| 1.3 | 45 | 6 | 45/45 |
| 1.5 | 46 | 11 | 46/46 |

Ninguna subsección de `GUIA-CONTENIDO.md` queda sin lección.

## Preguntas semilla de `BANCO-PREGUNTAS.md`

Las 24 preguntas semilla están integradas al banco con ID propio (`seed-1` … `seed-24`)
y se distribuyen así: 7 de 1.1, 4 de 1.2, 5 de 1.3 y 8 de 1.5, todas con explicación y
referencia a páginas identificadas. Además, cada módulo aporta sus propias preguntas
con ID `<lessonId>-q<n>`.
