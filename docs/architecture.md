# Arquitectura y decisiones técnicas

## Objetivo

Sitio 100 % estático, en español (México), para estudiar el examen de Inteligencia
Artificial. Debe publicarse en GitHub Pages, cargarse desde una subruta
`/nombre-repo/` y funcionar sin backend, cuentas, analytics ni claves.

## Stack

| Pieza | Elección | Por qué |
|---|---|---|
| Build | Vite 5 | rápido, salida estática, `base` configurable |
| UI | React 18 + TypeScript estricto | tipado del contenido y de los componentes |
| Estilos | Tailwind CSS 3 | utilidades, tema claro/oscuro, sin CSS pesado a mano |
| Rutas | React Router `HashRouter` | evita 404 al recargar rutas en Pages |
| Iconos | `lucide-react` | árbol de iconos SVG, sin dependencias de red |
| Diagramas | SVG/CSS propios | sin librerías gráficas pesadas |
| Pruebas | Vitest + Testing Library | calificación, mezcla, persistencia, validación |

Se evitan dependencias grandes (por ejemplo librerías de gráficas o de markdown);
el contenido es estructurado y los diagramas son componentes.

## Rutas (HashRouter)

| Ruta | Vista |
|---|---|
| `/` | Inicio: 4 módulos, progreso, continuar, temas débiles, simulacro |
| `/modulo/:moduleId` | Índice del módulo: lecciones y su estado |
| `/leccion/:lessonId` | Lección (LessonRenderer + interactivos + mini-evaluación) |
| `/practica` | Práctica por tema, con corrección inmediata opcional |
| `/simulacro` | Configuración y ejecución del simulacro |
| `/repaso` | Repaso espaciado simple: falladas y favoritas |
| `/glosario` | Glosario por módulo |
| `/progreso` | Progreso, historial, exportar/importar/borrar |
| `/buscar` | Buscador local (lecciones, términos y preguntas) |
| `*` | 404 con enlaces de recuperación |

## Contenido

`src/content/` contiene datos estáticos TypeScript importados en build:

```
src/content/
  modules.ts            meta de los 4 módulos
  lessons/index.ts      agrega m1..m4
  questions/index.ts    agrega qm1..qm4
  glossary.ts           glosario derivado + entradas propias
  timeline.ts           hitos de 1.2
  validate.ts           valida IDs, referencias, cobertura
  validate.test.ts      prueba de validación
```

Cada lección usa el esquema:

```ts
{ id, moduleId, section, title, learningObjectives, estimatedMinutes,
  blocks, keyTerms, recap, commonError?, sourcePages, practiceQuestionIds }
```

Cada pregunta usa:

```ts
{ id, moduleId, lessonId, section, type, difficulty, prompt,
  options | categories/items | correct, explanation, sourcePages, origin, tags? }
```

`type` ∈ `multiple | boolean | classification`. `origin` ∈ `fuente | didactico`
separa lo respaldado por el material de «Ejercicio didáctico».

### Validación en build

`vite.config.ts` ejecuta `validateContent()` en `buildStart`. Falla el build si:

- hay IDs de lección o pregunta duplicados;
- una pregunta apunta a una lección inexistente o a otro módulo;
- las opciones/correct de una pregunta son inconsistentes;
- falta explicación o referencia de páginas;
- una sección obligatoria no tiene lección;
- una `practiceQuestionId` no existe.

La misma función se prueba en `src/content/validate.test.ts`.

## Estado y persistencia

`src/state/progress.ts` implementa un almacén sobre `localStorage` con:

- clave versionada `ia-study:progress:v1` (migración/ignorado si la versión difiere);
- lectura/escritura envueltas en `try/catch` (modo privado, cuota llena);
- datos: lecciones completadas, último acceso por lección, historial de simulacros,
  aciertos/fallos por pregunta, favoritas, ajustes de práctica;
- exportar/importar JSON y borrar datos locales.

`ProgressProvider` expone el estado a React vía contexto. Los datos guardados se
mezclan con el banco para calcular «temas débiles» y «continuar donde lo dejé».

## Lógica pura (testeable sin DOM)

- `src/lib/quiz.ts`: calificación de preguntas de los tres tipos, normalización de
  respuestas y mezcla con semilla.
- `src/lib/exam.ts`: construcción del simulacro (selección por tema, cuotas,
  10/20/30, sin repetir pregunta, opciones mezcladas).
- `src/lib/progressLogic.ts`: estadísticas, temas débiles, siguiente lección.

Se prueban en `src/lib/*.test.ts`.

## Accesibilidad

HTML semántico (`nav`, `main`, `aside`, `header`, `ol/ul`), `aria-*` en widgets,
foco visible, indicadores textuales (además de color) en aciertos/errores,
`prefers-reduced-motion` respetado (animaciones desactivadas), navegación completa
por teclado y sin dependencia de hover.

## Despliegue

`.github/workflows/deploy.yml` compila con `VITE_BASE_PATH=/${{ github.event.repository.name }}/`,
sube el artefacto con `actions/upload-pages-artifact` y publica con
`actions/deploy-pages`. `permissions: contentos: read, pages: write, id-token: write`.

## Fuentes del contenido

Las lecciones son redacción propia basada en los MD extraídos de las diapositivas.
Cuando una afirmación proviene del material se marca con la referencia
`Tema X · pp. Y`; las ampliaciones explicativas no presentes en el material se
marcan como **ampliación didáctica**. Las cifras de 1.3 son una fotografía
2025–2026 fechada, no datos en tiempo real.
