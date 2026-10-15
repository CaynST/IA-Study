import { useEffect } from 'react'
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { HomePage } from '@/pages/HomePage'
import { ModulePage } from '@/pages/ModulePage'
import { LessonPage } from '@/pages/LessonPage'
import { PracticePage } from '@/pages/PracticePage'
import { ExamPage } from '@/pages/ExamPage'
import { ReviewPage } from '@/pages/ReviewPage'
import { GlossaryPage } from '@/pages/GlossaryPage'
import { ProgressPage } from '@/pages/ProgressPage'
import { SearchPage } from '@/pages/SearchPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { ProgressProvider } from '@/state/ProgressContext'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])
  return null
}

export function App() {
  return (
    <ProgressProvider>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/modulo/:moduleId" element={<ModulePage />} />
            <Route path="/leccion/:lessonId" element={<LessonPage />} />
            <Route path="/practica" element={<PracticePage />} />
            <Route path="/simulacro" element={<ExamPage />} />
            <Route path="/repaso" element={<ReviewPage />} />
            <Route path="/glosario" element={<GlossaryPage />} />
            <Route path="/progreso" element={<ProgressPage />} />
            <Route path="/buscar" element={<SearchPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </ProgressProvider>
  )
}
