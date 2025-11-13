import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Informative from '../components/Informative'
import Blog from '../components/Blog'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Informative />
      <Testimonials />
      <Blog />
    </>
  )
}

export default Home
