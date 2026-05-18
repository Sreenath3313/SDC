import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DepartmentPage from './pages/DepartmentPage'
import AllDepartmentsPage from './pages/AllDepartmentsPage'
import MessageFromHead from './pages/MessageFromHead'
import { useReveal } from './hooks/useReveal'

function ScrollToTop() {
  const { pathname } = useLocation()
  useReveal(pathname)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function DepartmentPageRoute() {
  const { slug } = useParams()
  return <DepartmentPage key={slug} />
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/departments" element={<AllDepartmentsPage />} />
        <Route path="/department/:slug/*" element={<DepartmentPageRoute />} />
        <Route path="/message-from-head" element={<MessageFromHead />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
