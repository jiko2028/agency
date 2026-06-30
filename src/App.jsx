import { Routes, Route } from 'react-router-dom'
import useLenis from './hooks/useLenis'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PageTransition from './components/PageTransition'
import CustomCursor from './components/CustomCursor'
import Home from './pages/Home'
import Services from './pages/Services'
import Works from './pages/Works'
import CaseStudy from './pages/CaseStudy'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  // Initialize Lenis smooth scroll + GSAP sync
  useLenis()

  return (
    <>
      <ScrollToTop />
      <CustomCursor />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/works" element={<Works />} />
            <Route path="/works/:slug" element={<CaseStudy />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </PageTransition>
      </main>
      <Footer />
    </>
  )
}

export default App
