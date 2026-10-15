# Instrucciones para OpenCode — Plataforma estática de estudio de IA

Construye **de principio a fin** un sitio web didáctico en español (México) para estudiar un examen universitario de Inteligencia Artificial. Debe poder publicarse directamente en **GitHub Pages** como sitio 100% estático. El repositorio tendrá adjuntos los archivos `tema-1.1.md`, `tema-1.2.md`, `tema-1.3.md`, `tema-1.5.md`, `GUIA-CONTENIDO.md` y `BANCO-PREGUNTAS.md`. LÉELOS TODOS; son la fuente primaria y la especificación pedagógica. El objetivo no es mostrar PDFs ni volcados de diapositivas, sino **convertir todo el temario en lecciones originales, claras, rigurosas e interactivas**, sin perder cobertura.

## Reglas innegociables

1. No uses backend, autenticación, base de datos remota, LLM en producción, llamadas a APIs, cuentas, analytics ni servicios que requieran claves. Todo debe funcionar tras `npm run build` y cargarse desde `/nombre-repo/` en GitHub Pages.
2. Stack: Vite + React + TypeScript + Tailwind CSS. React Router solo si se configura correctamente `basename` para Pages; preferible `HashRouter` para evitar 404 al recargar rutas. Usa dependencias pequeñas y justificadas. Iconos Lucide; diagramas preferentemente SVG/CSS nativo. Compatible con móviles.
3. El contenido de los cuatro MD de temas procede de texto extraído página por página de los PDF de clase. Las marcas `## Página NN` sirven para trazabilidad; **no son títulos de lecciones**. Reorganiza en lecciones pedagógicas según la guía, preservando autores, conceptos, fechas y distinciones del material. No reproduzcas literalmente grandes pasajes: explica con redacción propia, ejemplos nuevos y atribución a la fuente. Las gráficas y tablas deben verificarse contra PDF original cuando estén disponibles; si solo hay texto, no inventes elementos gráficos faltantes.
4. Cobertura obligatoria: **TODAS las secciones 1.1, 1.2, 1.3 y 1.5**. No omitas la segunda mitad de los documentos ni reduzcas 1.5 a un glosario. Cada subtema debe incluir explicación, ejemplo guiado, resumen, 3–6 preguntas de práctica y referencias a páginas del material.
5. Separa afirmaciones respaldadas por el PDF de ampliaciones didácticas creadas para ayudar a entender. Las cifras del PDF 1.3 son una fotografía temporal de 2025–2026, **no datos en tiempo real**. Nunca hagas afirmaciones como «actualmente el modelo X es el mejor» sin fuente y fecha.
6. Preguntas: correctas, verificables, no ambiguas, distractores plausibles, explicación de por qué la respuesta es correcta, tema/subtema, dificultad y página(s) de origen. No fabriques citas. Los ejercicios originales se marcan como «Ejercicio didáctico».
7. El usuario debe poder aprender sin tener los PDFs abiertos. No dejes lecciones como placeholders ni textos genéricos del tipo «contenido próximamente».

## Diseño y experiencia

Diseño elegante tipo plataforma educativa: fondo claro/oscuro, acento verde esmeralda y azul profundo, tipografía legible, tarjetas, barra de progreso, sidebar por capítulos y buscador local. Inicio con 4 módulos, progreso, «continuar donde lo dejé», temas débiles y botón «Simulacro». Navegación con teclado, contraste accesible, foco visible, soporte `prefers-reduced-motion`.

- **Lecciones**: objetivos de aprendizaje, lectura por bloques, términos resaltados, ejemplos progresivos, «error común», mini-evaluación de 3–6 preguntas y cierre con lo imprescindible.
- **Modo práctica**: opción múltiple, verdadero/falso y clasificación; corrección inmediata opcional; explicaciones al responder; reintento y revisión de errores.
- **Simulacro**: seleccionar 10/20/30 preguntas, todo el curso o tema, mezclar preguntas y opciones, navegación anterior/siguiente, resumen con puntuación, corrección y páginas fuente. No repetir pregunta en el mismo intento. No mostrar soluciones hasta entregar el examen.
- **Revisión espaciada simple**: preguntas falladas y favoritas; sin algoritmo de repetición complejo.
- **Persistencia**: `localStorage` con clave versionada y manejo de errores; guardar lecciones completadas, últimos accesos, historial de simulacros y fallos. Botón para exportar/importar progreso JSON y borrar datos locales.
- **Accesibilidad**: semantic HTML, ARIA donde corresponda, indicadores textuales además de color, sin componentes que dependan solo del hover.

## Interactivos indispensables

1. **Tema 1.1**: matriz de los cuatro enfoques de Russell y Norvig, ciclo percibir–decidir–actuar, simulación conceptual del Test de Turing, secuencia de la Habitación China y tarjetas comparativas Chalmers/qualia/funcionalismo/dualismo.
2. **Tema 1.2**: línea de tiempo filtrable con hitos y fechas, agrupación por períodos, explicación interactiva del ciclo euforia → invierno → resurgimiento.
3. **Tema 1.3**: flujo tokenización → embeddings → preentrenamiento → ajuste/alineación → inferencia; ilustración de atención y ventana de contexto sin pretender ejecutar un transformer real; comparador de IA discriminativa/generativa y casos de uso.
4. **Tema 1.5**: constructor de formulación (situación → decisiones/variables → dominios → restricciones → meta/función objetivo → representación); grafo interactivo pequeño con nodos/aristas y comparación de rutas; simulador de restricciones y soluciones factibles/no factibles/óptimas; ejercicios sobre tipos de problemas y espacios de búsqueda. Los ejemplos deben estar resueltos correctamente.

## Arquitectura recomendada

`src/content/lessons/*.ts` o `.json` para contenido estructurado; `src/content/questions/*.ts` o `.json` para banco de preguntas; componentes reutilizables `LessonRenderer`, `Quiz`, `Exam`, `Progress`, `Glossary`, `Timeline`, `GraphExplorer`, `FormulationLab`. Tipos TypeScript estrictos. Datos locales estáticos importados en build; no parsear PDFs en el navegador. Cada lección y pregunta con IDs estables.

Esquema mínimo de lección: `{id, moduleId, title, learningObjectives, blocks, keyTerms, recap, sourcePages, practiceQuestionIds}`. Esquema mínimo de pregunta: `{id, moduleId, lessonId, type, difficulty, prompt, options, correctAnswer, explanation, sourcePages}`. Valida en build la unicidad de IDs, que las preguntas apunten a lecciones existentes, opciones correctas y cobertura de secciones.

## Proceso de trabajo profesional

1. Inspecciona los archivos fuente y genera `docs/content-map.md` con cada sección/subsección de los cuatro temas, las páginas relevantes y el ID de lección; ninguna debe quedar sin asignar.
2. Diseña y documenta arquitectura y decisiones en `docs/architecture.md`.
3. Implementa UI y contenidos por módulo, sin dejar TODOs en el resultado. Usa los MD extraídos como referencia, pero redacta lecciones originales y ejercicios correctos.
4. Crea **al menos 80 preguntas revisadas** distribuidas proporcionalmente entre los cuatro módulos (especialmente ejercicios aplicados de 1.5), además de los ejemplos iniciales de `BANCO-PREGUNTAS.md`. Comprueba automáticamente las respuestas y la existencia de explicaciones.
5. Implementa pruebas para calificación, mezcla de preguntas, persistencia y lógica de los ejercicios; prueba `npm run build` y corrige fallos.
6. Configura `.github/workflows/deploy.yml` con despliegue automático a GitHub Pages mediante GitHub Actions, `permissions: contents: read` y `pages: write`, `id-token: write`, `actions/configure-pages`, `actions/upload-pages-artifact`, `actions/deploy-pages`; el build debe usar el `base` adecuado, por ejemplo `base: process.env.GITHUB_PAGES ? '/'+repo+'/' : '/'` o equivalente configurable por variable `VITE_BASE_PATH`. Documenta cómo activar Pages > Build and deployment > GitHub Actions. Evita fijar el nombre del repositorio en código.
7. README con instalación local, `npm run dev`, `npm run build`, publicación y cómo editar contenido/preguntas.
8. Haz commits pequeños y descriptivos por avance; documenta cambios relevantes. Pregunta únicamente por decisiones bloqueantes. Prioriza completar una versión utilizable y verificable.

## Criterios de aceptación

- Todos los módulos completos y accesibles desde el índice.
- Ninguna página o pregunta vacía; nada de lorem ipsum.
- Mínimo 80 preguntas con explicación y referencia verificable, más ejercicios interactivos.
- Simulacro y guardado local funcionando; importación/exportación opcional si hay limitaciones, pero documentar cualquier omisión.
- Responsive, accesible y sin errores de TypeScript/build.
- Deploy probado para subruta de GitHub Pages, sin backend.
- Informe final: rutas implementadas, número de lecciones y preguntas, cobertura de la guía, pruebas ejecutadas y pasos exactos para publicar.

**Comienza leyendo los seis archivos adjuntos, crea el mapa de cobertura y después implementa el sitio completo.**
