import { useState, useEffect, createContext } from 'react'
import './App.css'
import Nav from '../components/common/nav/Nav'
import { Contact } from '../features/contact/Contact'
import { About } from '../features/about/About'
import { Projects } from '../features/projects/Projects'
import Header from '../features/header/Header'
import { ThemeProvider } from '../hooks/ThemeContext/ThemeProvider'
import CanvasBackground from '../components/common/CanvasBackground/CanvasBackground'

function App() {
  return (
    <ThemeProvider>
      <Nav />
      <Header />
      <section className='main-section'>
        <About />
        <Projects />
        <Contact />
      </section>
      <div className='canvas-container'>
        <CanvasBackground />
      </div>
    </ThemeProvider>
  )
}

export default App
