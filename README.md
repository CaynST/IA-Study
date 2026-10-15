# Estudio de IA — plataforma estática de estudio

Sitio 100 % estático (sin backend, sin cuentas, sin llamadas a APIs) para estudiar el
curso universitario de **Inteligencia Artificial**. Convierte los cuatro temas del
capítulo 1 en lecciones originales, ejercicios interactivos, banco de preguntas con
explicación y un modo simulacro.

- **Stack:** Vite + React + TypeScript estricto + Tailwind CSS.
- **Rutas:** `HashRouter` (evita 404 al recargar en GitHub Pages).
- **Datos:** contenido estático en `src/content/` importado en build.
- **Persistencia:** `localStorage` con clave versionada, exportar/importar JSON.
- **Mapa de cobertura:** [`docs/content-map.md`](docs/content-map.md).
- **Arquitectura:** [`docs/architecture.md`](docs/architecture.md).

## Requisitos

- Node.js 20 o superior.
- npm.

## Uso local

```bash
npm install
npm run dev        # servidor de desarrollo (http://localhost:5173)
```

## Comandos

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo con recarga en caliente. |
| `npm run build` | Valida el contenido, comprueba tipos y genera `dist/`. |
| `npm run preview` | Sirve localmente el resultado de `dist/`. |
| `npm test` | Ejecuta todas las pruebas (calificación, mezcla, persistencia, validación). |
| `npm run validate` | Solo la validación del contenido. |
| `npm run typecheck` | Solo la comprobación de tipos. |

`npm run build` ejecuta la **validación de contenido** antes de compilar: falla si hay
IDs duplicados, preguntas que apuntan a lecciones inexistentes, opciones inconsistentes,
faltan explicaciones/referencias, una sección obligatoria sin lección o hay menos de 80
preguntas.

## Estructura

```
src/
  content/
    modules.ts          metadatos de los 4 módulos
    lessons/            m1.ts, m2.ts, m3.ts, m4.ts (+ índice)
    questions/          qm1..qm4.ts, seeds.ts (+ índice)
    glossary.ts         glosario derivado de los términos clave
    timeline.ts         hitos del módulo 1.2
    validate.ts         validación usada en build y en pruebas
  components/           Layout, LessonBlocks, Quiz, QuizSet, Exam, Figures, interactivos
  pages/                Inicio, Módulo, Lección, Práctica, Simulacro, Repaso, Glosario, Progreso, Buscar
  lib/                  lógica pura (quiz, exam, progressLogic, search)
  state/                progreso en localStorage + contexto de React
```

## Cómo editar contenido

### Añadir o editar una lección

1. Abre el archivo del módulo (`src/content/lessons/m1.ts` … `m4.ts`).
2. Añade un objeto `Lesson` respetando los tipos de `src/types/content.ts`:
   `{ id, moduleId, section, title, learningObjectives, estimatedMinutes, blocks, keyTerms, recap, commonError?, sourcePages, practiceQuestionIds }`.
3. Usa bloques (`paragraph`, `list`, `table`, `callout`, `example`, `interactive`, `figure`…).
   En el texto puedes usar `**negrita**`, `` `código` `` y `[términos]`.
4. Las ampliaciones que no provienen del material de clase van en un `callout` con
   `variant: 'didactic'`.
5. Enlaza sus preguntas en `practiceQuestionIds` (mínimo 3).

Consulta la guía de autoría: [`docs/content-authoring.md`](docs/content-authoring.md).

### Añadir o editar preguntas

1. Abre `src/content/questions/qm1.ts` … `qm4.ts` (o `seeds.ts`).
2. Usa el esquema `Question` de `src/types/content.ts`. Tipos: `multiple`, `boolean`,
   `classification`.
3. Cada pregunta necesita `explanation`, `sourcePages`, `difficulty` y `origin`
   (`fuente` si está respaldada por el material, `didactico` si es un ejercicio propio).
4. Usa IDs estables con el formato `<lessonId>-q<n>` y referéncialos desde la lección.

Tras editar, ejecuta `npm run build` (o `npm run validate`) para verificar.

### Añadir un interactivo

1. Crea el componente en `src/components/interactive/widgets/`.
2. Regístralo en `src/components/interactive/Interactive.tsx`.
3. Añade su identificador a la unión `InteractiveId` en `src/types/content.ts`.
4. Referéncialo desde una lección con un bloque `{ type: 'interactive', component: '<id>' }`.

## Pruebas

```bash
npm test
```

Cubren: calificación de los tres tipos de pregunta, mezcla determinista de preguntas y
opciones, construcción y reparto del simulacro, persistencia (guardar/cargar/versionar/
importar/exportar), lógica de progreso (temas débiles, recomendación, estadísticas) y la
validación del contenido.

## Publicar en GitHub Pages

1. Sube el repositorio a GitHub.
2. Ve a **Settings → Pages → Build and deployment → Source** y elige
   **GitHub Actions**.
3. El workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) se ejecuta
   en cada push a `main`/`master`: valida, prueba, compila y publica.
4. El build usa `VITE_BASE_PATH=/<nombre-del-repo>/` (calculado por el workflow), de modo
   que los assets cargan desde la subruta de Pages. **No hay que fijar el nombre del
   repositorio en el código.**
5. La URL queda como `https://<usuario>.github.io/<repo>/`.

Para probar la subruta en local (este repositorio se publica en `/IA-Study/`):

```bash
VITE_BASE_PATH=/IA-Study/ npm run build
npm run preview
```

Con el repositorio llamado `IA-Study`, la URL final queda
`https://<usuario>.github.io/IA-Study/`. El workflow toma el nombre del repositorio
automáticamente (`github.event.repository.name`), así que si lo renombras no hay que
editar archivos.

## Datos y atribución

Contenido redactado a partir de los documentos de clase (`tema-1.1.md` … `tema-1.5.md`),
respetando autores, conceptos, fechas y distinciones del material. Las afirmaciones del
material se referencian con `Tema X · pp. Y`; las ampliaciones explicativas se marcan como
**ampliación didáctica**. Las cifras del módulo 1.3 son una **fotografía 2025–2026** y no
datos en tiempo real. Este sitio es un recurso de estudio independiente y no una
publicación oficial de la universidad.
