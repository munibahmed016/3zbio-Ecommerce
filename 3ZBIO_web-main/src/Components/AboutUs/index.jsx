import React from 'react'
import { Route, Routes } from 'react-router-dom'
import OurTeam from './OurTeam'
import About from './AboutUs'

const AboutUs = () => {
  return (
    <>
        <Routes>
        <Route path="about-us" element={<About />} />
        <Route path="our-team" element={<OurTeam />} />
        </Routes>
    </>
  )
}

export default AboutUs
