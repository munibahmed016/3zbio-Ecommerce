import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Acuteck from './Acuteck'

const Brands = () => {
  return (
    <>
        <Routes>
            <Route path='Acuteck' element={<Acuteck/>}/>
        </Routes>
    </>
  )
}

export default Brands
