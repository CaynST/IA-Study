# Guía editorial y mapa de cobertura

Esta guía complementa los cuatro documentos `tema-*.md` extraídos de las diapositivas de clase. **No reemplaza la lectura de las fuentes.** Las páginas son 1-indexadas, tal como aparecen en los archivos. Cuando falte detalle, consultar la página de origen, no inventar. El PDF 1.5 es de formulación de problemas, no de implementación de algoritmos de búsqueda.

## Tema 1.1 — Filosofía de la inteligencia artificial (50 páginas)

- Introducción: impacto y contexto profesional, cifras de adopción fechadas.
- 1.1.1 Definición y alcance: definición de IA, razonamiento lógico, reconocimiento, aprendizaje, lenguaje natural, decisiones; cuatro enfoques de Russell y Norvig (pensar/actuar como humano; pensar/actuar racionalmente), agente racional (percepción, decisión, acción), alcance desde sistemas reactivos hasta IA general. Distinguir racionalidad de infalibilidad.
- 1.1.2 ¿Pueden pensar las máquinas?: Turing 1950, juego de imitación, límites del criterio conductual; Searle 1980, Habitación China, sintaxis y semántica, objeciones y matices. Distinguir comportamiento de comprensión.
- 1.1.3 Consciencia artificial: Chalmers, problema fácil/difícil, qualia, funcionalismo, dualismo, posibilidades y límites, implicaciones éticas y legales. No presentar tesis filosóficas como hechos comprobados.
- Estadística vs ciencia de datos vs IA: propósito, métodos, relación y ejemplos. No confundir IA con machine learning ni con análisis estadístico.
- Interactivos: matriz de enfoques, agentes, Turing, Habitación China, qualia y comparador de disciplinas.

## Tema 1.2 — Historia de la inteligencia artificial (57 páginas)

- 1.2.1 Orígenes: mitos de Talos y Hefesto; autómatas de Herón, Al-Jazarí, Leonardo, Vaucanson, Turco Mecánico; Descartes; lógica de Boole; Babbage y Ada Lovelace. Diferenciar antecedentes míticos, mecánicos y matemáticos.
- 1.2.2 Nacimiento formal (1950–1970): Turing; Dartmouth 1956; primeros programas de IA, optimismo fundacional y limitaciones.
- 1.2.3 Inviernos (1970–1980 y posteriores): expectativas, límites de cómputo y conocimiento, recortes; sistemas expertos y sus dificultades. Explicar causas, no solo memorizar fechas.
- 1.2.4 Resurgimiento (1990–2010): aprendizaje automático, datos, potencia de cómputo, Deep Blue 1997 y evolución hacia enfoques estadísticos.
- 1.2.5 Deep Learning (2010–presente): AlexNet 2012, AlphaGo, transformers y modelos de lenguaje, IA generativa y ChatGPT 2022. Verificar fechas y denominaciones en el MD de fuente.
- Lecciones del ciclo histórico: euforia, invierno y resurgimiento; línea de tiempo interactiva y preguntas de causa/efecto.

## Tema 1.3 — Estado actual de la inteligencia artificial (45 páginas)

- Introducción: convergencia algoritmos, cómputo y datos; transformer de Vaswani et al. (2017); cifras e informes 2025–2026 etiquetados con su fecha.
- 1.3.1 LLMs: definición, tokenización, embeddings, transformers, autoatención, preentrenamiento, fine-tuning, RLHF, inferencia probabilística, temperatura, ventana de contexto, capacidades, límites, alucinaciones y familias de modelos mencionadas en el material.
- 1.3.2 IA generativa: texto, imagen, audio, video y código; modelos y técnicas según diapositivas; cuestiones de autenticidad y derechos.
- 1.3.3 Aplicaciones contemporáneas: medicina, ciencia, transporte, finanzas, educación, ingeniería de software; beneficios y riesgos concretos.
- 1.3.4 Tendencias y desafíos: agentes, multimodalidad, regulación, seguridad, evaluación, sesgos, privacidad y desafíos sociales/técnicos según el material.
- Cierre: mapa de familias de técnicas y algoritmos, desde regresión logística hasta transformers y difusión. No presentar la descripción del ciclo de un LLM como si todos los modelos usaran exactamente el mismo entrenamiento.

## Tema 1.5 — Problemas computacionales y formulación (46 páginas)

Este tema tiene **once unidades obligatorias**; dedicarle ejercicios aplicados y explicaciones más profundas que a las fechas históricas.

- 1.5.1 Del problema real al problema computacional: situación inicial, meta, decisiones, limitaciones, criterios; problema vs instancia vs solución vs algoritmo vs representación; abstracción y modelado.
- 1.5.2 Elementos fundamentales: variables de decisión, dominios, restricciones, objetivos y condiciones de éxito; ejemplos de horarios, rutas, asignación y recursos.
- 1.5.3 Tipos de problemas: decisión, factibilidad, optimización, enumeración, conteo. Comparar la pregunta que responde cada tipo.
- 1.5.4 Soluciones y calidad: factible, no factible, óptima, suficientemente buena, óptimo local/global, criterio de calidad.
- 1.5.5 Espacios de búsqueda y representaciones: estados, acciones, transición, estado inicial, meta, grafos, árboles, matrices, tablas, conjuntos, explosión combinatoria.
- 1.5.6 Optimización combinatoria: combinaciones y función objetivo; problemas representativos del PDF.
- 1.5.7 Satisfacción de restricciones: CSP, variables/dominios/restricciones, asignaciones válidas.
- 1.5.8 Rutas, redes y caminos óptimos: grafos ponderados, costo, trayectorias y restricciones.
- 1.5.9 Búsqueda en lenguaje natural y recuperación de información: consulta, documentos, índices, relevancia y puntuación.
- 1.5.10 Selección del enfoque de resolución: búsqueda sistemática, heurística, local o poblacional; escoger por propiedades del problema, no por moda.
- 1.5.11 Taller integrador: producir una formulación completa antes de programar; actividad guiada y ejercicios de autoevaluación.

## Reglas para redacción y calidad

Cada lección: objetivo, explicación sencilla, vocabulario exacto del curso, ejemplo nuevo, error frecuente, mini práctica y referencia `Tema X, página Y`. Usar tablas para contrastes y diagramas solo cuando añadan valor. Priorizar precisión sobre marketing. No inventar una página, fecha o respuesta. Si una página extraída contiene tablas rotas, volver al PDF adjunto. Evitar usar imágenes de las diapositivas sin revisar permisos para publicación pública; crear diagramas originales. Atribuir el material de clase y fuentes citadas, sin presentar el sitio como oficial de la Universidad Veracruzana.
