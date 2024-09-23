import React from 'react'
import { SimpleSlider } from './Header/Carousel'
import FeaturedProducts from './FeaturedProducts'
import HealthMonitor from './HealthMonitor'
import TestingKits from './TestingKits'
import PhoneNumber from './phone'
import Footer from './Footer'
import TestimonialComponent from './Testimonials'

const Home = () => {
  return (
    <>
    <SimpleSlider/>
    <FeaturedProducts/>
    <HealthMonitor/>
    <TestingKits/>
    <TestimonialComponent/>
    <PhoneNumber/>
    <Footer/>
    </>
  )
}

export default Home
