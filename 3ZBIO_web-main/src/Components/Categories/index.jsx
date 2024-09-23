import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FoodSupplements from './FoodSupplements';
import TestingKits from './TestingKits';
import SkinCare from './SkinCare';
import HealthCare from './HealthCare';
import JointInjection from './JointInjection';
import MedicalDevice from './MedicalDevice';
import InstitutionalDevice from './InstitutionalDevice';

const Categories = () => {
  return (
    <>
    
      <Routes>
        <Route path="FoodSupplements" element={<FoodSupplements />} />
        <Route path="TestingKits" element={<TestingKits />} />
        <Route path='SkinCare' element={<SkinCare/>}/>
        <Route path='HealthCare' element={<HealthCare/>}/>
        <Route path='JointInjection' element={<JointInjection/>}/>
        <Route path='MedicalDevice' element={<MedicalDevice/>}/>
        <Route path='InstitutionalDevice' element={<InstitutionalDevice/>}/>
      </Routes>
    </>
  );
};

export default Categories;
