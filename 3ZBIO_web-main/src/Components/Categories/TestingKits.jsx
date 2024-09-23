import React from 'react';
import Footer from '../Footer';
import Fertility from "../../assets/Testing-kits_03.png";
import Infactious from "../../assets/Testing-kits_03-02.png";
import Allergen from "../../assets/Testing-kits_03-03.png";
import DrugAbuse from "../../assets/Testing-kits_03-04.png";
import VerticalCardProduct from './VerticalCardsProducts';


const TestingKits = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between mt-10 items-center text-center">
    <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Convenient Testing Kits</h1>
        <div className="flex flex-wrap justify-center mt-10 gap-8">
          {/* Fertility Tests */}
          <div className="max-w-xs text-center">
            <img src={Fertility} alt="Fertility Tests" className="w-full h-80 object-cover mb-4" />
            <h4 className="font-semibold mb-2">Fertility Tests</h4>
            <button  type='submit' className="bg-white border-2 border-teal-500 text-teal-500 font-semibold py-2 px-4 rounded-full hover:bg-teal-500 hover:text-white transition-colors duration-300 w-full mt-2"
            >Shop now</button>
          </div>

          {/* Infectious Disease Tests */}
          <div className="max-w-xs text-center">
            <img src={Infactious} alt="Infectious Disease Tests" className="w-full h-80 object-cover mb-4" />
            <h4 className="font-semibold mb-2">Infectious Disease Tests</h4>
            <button className="bg-white border-2 border-teal-500 text-teal-500 font-semibold py-2 px-4 rounded-full hover:bg-teal-500 hover:text-white transition-colors duration-300 w-full mt-2">Shop now</button>
          </div>

          {/* Allergen Tests */}
          <div className="max-w-xs text-center">
            <img src={Allergen} alt="Allergen Tests" className="w-full h-80 object-cover mb-4" />
            <h4 className="font-semibold mb-2">Allergen Tests</h4>
            <button className="bg-white border-2 border-teal-500 text-teal-500 font-semibold py-2 px-4 rounded-full hover:bg-teal-500 hover:text-white transition-colors duration-300 w-full mt-2">Shop now</button>
          </div>

          {/* Drug of Abuse Tests */}
          <div className="max-w-xs text-center">
            <img src={DrugAbuse} alt="Drug of Abuse Tests" className="w-full h-80 object-cover mb-4" />
            <h4 className="font-semibold mb-2">Drug of Abuse Tests</h4>
            <button className="bg-white border-2 border-teal-500 text-teal-500 font-semibold py-2 px-4 rounded-full hover:bg-teal-500 hover:text-white transition-colors duration-300 w-full mt-2">Shop now</button>
          </div>
        </div>
      </div>
      <VerticalCardProduct category={"ecotest"} heading={"Ecotest"}/>
    <Footer />
  </div>
  )
}

export default TestingKits
