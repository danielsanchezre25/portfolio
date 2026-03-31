import { useState } from 'react'
import './App.css'
import Nav from '../components/common/nav/Nav'
import { Contact } from '../features/contact/Contact'
import { About } from '../features/about/About'
import { Projects } from '../features/projects/Projects'
import Header from '../features/header/Header'

function App() {
  return (
    <>
      <Nav />
      <section className='main-section'>
        <div className='about-section'>
          <Header />
        </div>
        <div>  
          <About />
          <Projects />
        </div>
      </section>
    </>
  )
}

export default App
