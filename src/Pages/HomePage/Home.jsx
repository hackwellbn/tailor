import React from 'react'
import Hero from './layouts/Hero/Hero'
import Counter from '../../Components/Counter/Counter'
import Difference from './layouts/Difference/Difference'
import Services from './layouts/Services/Services'
import Testimonials from './layouts/Testimonials/Testimonials'
import Experience from './layouts/Experience/Experience'
import Projects from './layouts/Projects/Projects'
import Advanced from './layouts/Advanced/Advanced'
const Home = () => {
  return (
    <div>
      <Hero />
      <Advanced />
      <Experience />
      <Projects />
      <Counter />
      <Services />
      <Difference />
      <Testimonials />
    </div>
  )
}

export default Home