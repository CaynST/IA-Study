# Guía de autoría de contenido

Instrucciones para quien redacta lecciones y preguntas. El contenido es **original**,
en español de México, y se apoya en los MD extraídos de las diapositivas
(`tema-1.1.md` … `tema-1.5.md`).

## Reglas

1. **No copiar** grandes pasajes del material. Explicar con redacción propia, ejemplos
   nuevos y atribución (`Fuente: Tema X · pp. Y`).
2. **Cobertura total**: cada subtema indicado en `docs/content-map.md` debe aparecer.
3. Marcar con una `CalloutBlock` de variante `didactic` cualquier ampliación que **no**
   esté en el material de clase.
4. Toda cifra debe llevar fecha y fuente; las cifras de 1.3 son de 2025–2026 (fotografía
   temporal, no dato en vivo). Nunca decir «el mejor modelo actual» sin fuente y fecha.
5. Cada lección: objetivos, bloques de lectura, términos clave, ejemplo guiado, error
   común, cierre con lo imprescindible y referencias de páginas.
6. Las preguntas deben ser correctas, no ambiguas y con explicación. Los ejercicios que
   no provienen del material se marcan `origin: 'didactico'`.

## Sintaxis de texto en bloques

En `paragraph`, `list.items`, `callout.text`, `table.rows` y `example.text` se permite:

- `**negrita**`
- `` `código` ``
- `[término]` marca un término clave (se resalta)

## Esquema de lección

```ts
import type { Lesson } from '@/types/content'

export const m1Lessons: Lesson[] = [
  {
    id: 'm1-intro',
    moduleId: '1.1',
    section: 'Introducción',
    title: '…',
    subtitle: '…',
    learningObjectives: ['…', '…'],
    estimatedMinutes: 8,
    blocks: [ /* ver tipos en src/types/content.ts */ ],
    keyTerms: [{ term: '…', definition: '…' }],
    recap: ['…', '…'],
    commonError: '…',
    sourcePages: ['Tema 1.1 · pp. 1–6'],
    practiceQuestionIds: ['m1-intro-q1', 'm1-intro-q2', 'm1-intro-q3'],
  },
]
```

## Esquema de pregunta

```ts
// Opción múltiple (una o varias correctas)
{ id, moduleId, lessonId, section, type: 'multiple', difficulty: 'facil',
  prompt, options: [...], correct: [0], explanation, sourcePages, origin: 'fuente' }

// Verdadero / falso
{ …, type: 'boolean', correct: true, … }

// Clasificación
{ …, type: 'classification', categories: ['A','B','C'],
  items: [{ text: '…', category: 'A' }, …], … }
```

Reglas de las preguntas:
- 3–6 por lección, todas presentes en `practiceQuestionIds`.
- Distractores plausibles, sin trampas de redacción.
- La explicación justifica la respuesta correcta (no repite la opción).
- `sourcePages` con la referencia al material, o `['Ejercicio didáctico']` si es propio.
- `difficulty`: `facil | media | dificil`.

## IDs

- Lección: `m<bloque>-<slug>`, p. ej. `m5-7-csp`.
- Pregunta: `<lessonId>-q<n>`, p. ej. `m5-7-csp-q3`.
- Únicos en todo el sitio (los valida `validateContent`).
