import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Background blobs */}
      <div className="bg-blobs">
        <span className="blob-1" />
        <span className="blob-2" />
        <span className="blob-3" />
      </div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
