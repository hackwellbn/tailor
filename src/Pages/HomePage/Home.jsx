import React from 'react'
import Hero from './layouts/Hero/Hero'
import Counter from '../../Components/Counter/Counter'
import Difference from './layouts/Difference/Difference'
import Services from './layouts/Services/Services'
import Testimonials from './layouts/Testimonials/Testimonials'
import Experience from './layouts/Experience/Experience'
import Projects from './layouts/Projects/Projects'
import Advanced from './layouts/Advanced/Advanced'
import About from './layouts/About/About'
import Portfolio from './layouts/Portfolio/Portfolio'
import Collaborators from './layouts/Collaborators/Collaborators'
const Home = () => {
  return (
    <div>
      <Hero />
      <Advanced />
      <Experience />
      <Difference />
      <Projects />
      <Counter />
      <About />
      <Services />
      <Portfolio />
      <Collaborators />
      <Testimonials />
    </div>
  )
}

export default Home