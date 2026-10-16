import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import type { Question } from '@/types/content'
import { QuizSet } from '@/components/QuizSet'
import { ProgressProvider } from '@/state/ProgressContext'

const booleanQuestion: Question = {
  id: 'test-bool',
  moduleId: '1.1',
  lessonId: 'm1-2-turing-searle',
  section: '1.1.2',
  type: 'boolean',
  difficulty: 'facil',
  prompt: 'El Test de Turing demuestra por sí solo que una máquina es consciente.',
  correct: false,
  explanation: 'La prueba mide imitación conversacional, no consciencia.',
  sourcePages: ['Tema 1.1 · p. 21'],
  origin: 'fuente',
}

const multipleQuestion: Question = {
  id: 'test-mc',
  moduleId: '1.5',
  lessonId: 'm5-3-tipos',
  section: '1.5.3',
  type: 'multiple',
  difficulty: 'facil',
  prompt: '¿Qué problema responde «¿existe una solución?»?',
  options: ['Optimización', 'Decisión', 'Conteo'],
  correct: [1],
  explanation: 'La salida es sí/no; la factibilidad además exhibe una solución.',
  sourcePages: ['Tema 1.5 · pp. 16–17'],
  origin: 'fuente',
}

const multiQuestion: Question = {
  id: 'test-multi',
  moduleId: '1.5',
  lessonId: 'm5-2-elementos',
  section: '1.5.2',
  type: 'multiple',
  multi: true,
  difficulty: 'media',
  prompt: '¿Cuáles de estas son restricciones duras?',
  options: ['Sin traslapes de horario', 'Evitar clases a las 7:00', 'Capacidad suficiente del aula'],
  correct: [0, 2],
  explanation: 'Las restricciones duras no pueden violarse; evitar clases temprano es una preferencia (blanda).',
  sourcePages: ['Tema 1.5 · p. 14'],
  origin: 'fuente',
}

function renderQuiz(questions: Question[]) {
  return render(
    <ProgressProvider>
      <QuizSet questions={questions} heading="Prueba" />
    </ProgressProvider>,
  )
}

describe('QuizSet', () => {
  it('muestra el resultado correcto tras responder bien (opción múltiple)', () => {
    renderQuiz([multipleQuestion])
    fireEvent.click(screen.getByLabelText(/Decisión/))
    fireEvent.click(screen.getByRole('button', { name: 'Comprobar' }))
    expect(screen.getByText('Correcto')).toBeInTheDocument()
  })

  it('marca incorrecto y muestra la respuesta correcta (verdadero/falso)', () => {
    renderQuiz([booleanQuestion])
    fireEvent.click(screen.getByLabelText('Verdadero'))
    fireEvent.click(screen.getByRole('button', { name: 'Comprobar' }))
    expect(screen.getByText('Incorrecto')).toBeInTheDocument()
    expect(screen.getByText(/Respuesta correcta:/)).toBeInTheDocument()
    expect(screen.getByText(/no consciencia/)).toBeInTheDocument()
  })

  it('marca la opción que falló sin listar todas las correctas (opción múltiple)', () => {
    renderQuiz([multiQuestion])
    fireEvent.click(screen.getByLabelText('Sin traslapes de horario'))
    fireEvent.click(screen.getByLabelText('Evitar clases a las 7:00'))
    fireEvent.click(screen.getByRole('button', { name: 'Comprobar' }))
    expect(screen.getByText(/Falló:/)).toBeInTheDocument()
    expect(screen.getByText('incorrecta')).toBeInTheDocument()
    expect(screen.getByText(/Faltó marcar:/)).toBeInTheDocument()
    // No debe volcar la lista de todas las respuestas correctas.
    expect(screen.queryByText(/Respuesta correcta:/)).not.toBeInTheDocument()
  })

  it('permite reintentar y limpia la corrección', () => {
    renderQuiz([booleanQuestion])
    fireEvent.click(screen.getByLabelText('Verdadero'))
    fireEvent.click(screen.getByRole('button', { name: 'Comprobar' }))
    fireEvent.click(screen.getByRole('button', { name: /Reintentar/ }))
    expect(screen.queryByText('Incorrecto')).not.toBeInTheDocument()
  })
})
