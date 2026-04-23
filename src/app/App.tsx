import './App.css'
import Nav from '../components/common/nav/Nav'
import { Contact } from '../features/contact/Contact'
import { About } from '../features/about/About'
import { Projects } from '../features/projects/Projects'
import Header from '../features/header/Header'
import { ThemeProvider } from '../hooks/ThemeContext/ThemeProvider'
import CanvasBackground from '../components/common/CanvasBackground/CanvasBackground'
import Footer from '../components/common/footer/Footer'
import Language from '../components/common/language/Language'
import "../translations/i18n"

function App() {
  return (
    <ThemeProvider>
      <Nav />
      <Header />
      <section className='main-section'>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </section>
      <div className='canvas-container'>
        <CanvasBackground />
      </div>
      <Language />
    </ThemeProvider>
  )
}

export default App
