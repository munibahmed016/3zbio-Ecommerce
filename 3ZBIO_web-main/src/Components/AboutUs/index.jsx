import React from 'react'
import { Route, Routes } from 'react-router-dom'
import OurTeam from './OurTeam'

const AboutUs = () => {
  return (
    <>
        <Routes>
            <Route path="OurTeam" element={<OurTeam/>}/>
        </Routes>
    </>
  )
}

export default AboutUs
