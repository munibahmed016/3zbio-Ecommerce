import React from 'react';
import CategoryList from '../Components/CategoryList/CateGoryList';
import { SimpleSlider } from '../Components/Header/BannerProduct';
import HorizontalCardProduct from '../Components/AllProducts/HorizontalCardsProducts';
import FeaturedProducts from '../Components/FeaturedProducts';
import HealthMonitor from '../Components/HealthMonitor';
import TestingKits from '../Components/TestingKits';
import TestimonialComponent from '../Components/Testimonials';
import PhoneNumber from '../Components/phone';
import Footer from '../Components/Footer';

const Home1 = () => {
  return (
    <div>
      <CategoryList/>
      <SimpleSlider/>
      <FeaturedProducts/>
      <HealthMonitor/>
      <HorizontalCardProduct category={"acuteck"} heading={"Acuteck"}/>
      <TestingKits/>
      {/* <HorizontalCardProduct category={"ecotest"} heading={"Ecotest"}/> */}
      <TestimonialComponent/>
    <PhoneNumber/>
    <Footer/>
    </div>
  );
}

export default Home1;
