import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CvPage from './pages/CvPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cv" element={<CvPage />} />
    </Routes>
  )
}