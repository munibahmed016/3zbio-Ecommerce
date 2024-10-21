import React from 'react';
import Fertility from "../../assets/Testing-kits_03.png";
import Infactious from "../../assets/Testing-kits_03-02.png";
import Allergen from "../../assets/Testing-kits_03-03.png";
import DrugAbuse from "../../assets/Testing-kits_03-04.png";
import VerticalCardProduct from './VerticalCardsProducts';
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";



const TestingKits = () => {
  const { ref: headingRef, inView: headingInView } = useInView({ triggerOnce: true });
  const { ref: productGridRef, inView: productGridInView } = useInView({ triggerOnce: true });
  return (
    <div className="flex flex-col min-h-screen justify-between mt-10 items-center text-center">
     <motion.div
        ref={headingRef}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: headingInView ? 1 : 0, y: headingInView ? 0 : -50 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-2xl md:text-3xl lg:text-6xl mt-8 md:mt-14 font-bold mb-4">Convenient Testing Kits</h1>
      </motion.div>

      <motion.div
        ref={productGridRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: productGridInView ? 1 : 0, y: productGridInView ? 0 : 50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-4 md:gap-8 mt-8"
      >
        {/* Fertility Tests */}
        <div className="text-center bg-pink-50 rounded-lg p-4 md:max-w-xs">
          <motion.img
            src={Fertility}
            alt="Fertility Tests"
            className="w-full h-32 sm:h-48 md:h-80 object-contain md:object-cover cursor-pointer mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: productGridInView ? 1 : 0, y: productGridInView ? 0 : 50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05, opacity: 0.6 }}
          />
          <h4 className="font-semibold mb-2 text-sm sm:text-base md:text-lg">Fertility Tests</h4>
          <button
            type="button"
            className="bg-white border-2 border-pink-500 text-pink-500 font-semibold py-1 px-2 sm:py-2 sm:px-4 rounded-full hover:bg-pink-500 hover:text-white transition-colors duration-300 w-full mt-2 text-xs sm:text-sm"
          >
            Shop now
          </button>
        </div>

        {/* Infectious Disease Tests */}
        <div className="text-center bg-yellow-50 rounded-lg p-4 md:max-w-xs">
          <motion.img
            src={Infactious}
            alt="Infectious Disease Tests"
            className="w-full h-32 sm:h-48 md:h-80 object-contain md:object-cover cursor-pointer mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: productGridInView ? 1 : 0, y: productGridInView ? 0 : 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05, opacity: 0.6 }}
          />
          <h4 className="font-semibold mb-2 text-sm sm:text-base md:text-lg">Infectious Disease Tests</h4>
          <button
            type="button"
            className="bg-white border-2 border-yellow-500 text-yellow-500 font-semibold py-1 px-2 sm:py-2 sm:px-4 rounded-full hover:bg-yellow-500 hover:text-white transition-colors duration-300 w-full mt-2 text-xs sm:text-sm"
          >
            Shop now
          </button>
        </div>

        {/* Allergen Tests */}
        <div className="text-center bg-green-50 rounded-lg p-4 md:max-w-xs">
          <motion.img
            src={Allergen}
            alt="Allergen Tests"
            className="w-full h-32 sm:h-48 md:h-80 object-contain md:object-cover cursor-pointer mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: productGridInView ? 1 : 0, y: productGridInView ? 0 : 50 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.05, opacity: 0.6 }}
          />
          <h4 className="font-semibold mb-2 text-sm sm:text-base md:text-lg">Allergen Tests</h4>
          <button
            type="button"
            className="bg-white border-2 border-green-500 text-green-500 font-semibold py-1 px-2 sm:py-2 sm:px-4 rounded-full hover:bg-green-500 hover:text-white transition-colors duration-300 w-full mt-2 text-xs sm:text-sm"
          >
            Shop now
          </button>
        </div>

        {/* Drug of Abuse Tests */}
        <div className="text-center bg-blue-50 rounded-lg p-4 md:max-w-xs">
          <motion.img
            src={DrugAbuse}
            alt="Drug of Abuse Tests"
            className="w-full h-32 sm:h-48 md:h-80 object-contain md:object-cover cursor-pointer mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: productGridInView ? 1 : 0, y: productGridInView ? 0 : 50 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05, opacity: 0.6 }}
          />
          <h4 className="font-semibold mb-2 text-sm sm:text-base md:text-lg">Drug of Abuse Tests</h4>
          <button
            type="button"
            className="bg-white border-2 border-blue-500 text-blue-500 font-semibold py-1 px-2 sm:py-2 sm:px-4 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300 w-full mt-2 text-xs sm:text-sm"
          >
            Shop now
          </button>
        </div>
      </motion.div>

      <VerticalCardProduct category={"ecotest"} heading={"Ecotest"}/>
  </div>
  )
}

export default TestingKits
