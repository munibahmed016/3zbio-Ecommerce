import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Acuteck from './Acuteck'
import EcoTest from './EcoTest'

const Brands = () => {
  return (
    <>
        <Routes>
            <Route path='Acuteck' element={<Acuteck/>}/>
            <Route path='ecotest' element={<EcoTest/>}/>
        </Routes>
    </>
  )
}

export default Brands
