import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Nav from './components/Nav'
import ScrollManager from './components/ScrollManager'
import CaseStudy from './pages/CaseStudy'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <div className="min-h-screen bg-paper">
      <ScrollManager />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
