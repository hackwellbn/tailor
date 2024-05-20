import React from 'react'
import Hero from './layouts/Hero/Hero'
import Counter from '../../Components/Counter/Counter'
import Difference from './layouts/Difference/Difference'
import Services from './layouts/Services/Services'
import Testimonials from './layouts/Testimonials/Testimonials'
const Home = () => {
  return (
    <div>
      <Hero />
      <Counter />
      <Services />
      <Difference />
      <Testimonials />
    </div>
  )
}

export default Home