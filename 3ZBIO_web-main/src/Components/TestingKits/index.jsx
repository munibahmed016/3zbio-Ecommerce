import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ChickenGuniya from "../../assets/strep-a.jpg";
import Dengue from "../../assets/hep-b-combo1.jpg";
import Typoid from "../../assets/hep-b-surface-antigen1.jpg";
import Malaria from "../../assets/mycoplasma-pneu.jpg";
import Fertility from "../../assets/Testing-kits_03.png";
import Infactious from "../../assets/Testing-kits_03-02.png";
import Allergen from "../../assets/Testing-kits_03-03.png";
import DrugAbuse from "../../assets/Testing-kits_03-04.png";
import HorizontalCardsProducts from "../AllProducts/HorizontalCardsProducts";

const TestingKits = () => {
  const { ref: headingRef, inView: headingInView } = useInView({ triggerOnce: true });
  const { ref: productGridRef, inView: productGridInView } = useInView({ triggerOnce: true });

  return (
    <div className="p-8">
      {/* Heading Section */}
      <motion.div
        ref={headingRef}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: headingInView ? 1 : 0, y: headingInView ? 0 : -50 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl md:text-6xl mt-14 font-bold mb-4">Convenient Testing Kits</h1>
      </motion.div>

      <motion.div
        ref={productGridRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: productGridInView ? 1 : 0, y: productGridInView ? 0 : 50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap mt-8 justify-center gap-8"
      >
        {/* Fertility Tests */}
        <div className="max-w-xs text-center">
        <motion.img
        src={Fertility}
        alt="Fertility Tests"
        className="w-full h-80 object-cover cursor-pointer mb-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: productGridInView ? 1 : 0, y: productGridInView ? 0 : 50 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        whileHover={{ opacity: 0.6 }}
      />
      
          <h4 className="font-semibold mb-2">Fertility Tests</h4>
          <button
            type="submit"
            className="bg-white border-2 border-teal-500 text-teal-500 font-semibold py-2 px-4 rounded-full hover:bg-teal-500 hover:text-white transition-colors duration-300 w-full mt-2"
          >
            Shop now
          </button>
        </div>

        {/* Infectious Disease Tests */}
        <div className="max-w-xs text-center">
          <motion.img
            src={Infactious}
            alt="Infectious Disease Tests"
            className="w-full h-80 cursor-pointer hover:opacity-70 object-cover mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: productGridInView ? 1 : 0, y: productGridInView ? 0 : 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ opacity: 0.6 }}
          />
          <h4 className="font-semibold mb-2">Infectious Disease Tests</h4>
          <button className="bg-white border-2 border-teal-500 text-teal-500 font-semibold py-2 px-4 rounded-full hover:bg-teal-500 hover:text-white transition-colors duration-300 w-full mt-2">
            Shop now
          </button>
        </div>

        {/* Allergen Tests */}
        <div className="max-w-xs text-center">
          <motion.img
            src={Allergen}
            alt="Allergen Tests"
            className="w-full h-80 cursor-pointer hover:opacity-70 object-cover mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: productGridInView ? 1 : 0, y: productGridInView ? 0 : 50 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ opacity: 0.6 }}
          />
          <h4 className="font-semibold mb-2">Allergen Tests</h4>
          <button className="bg-white border-2 border-teal-500 text-teal-500 font-semibold py-2 px-4 rounded-full hover:bg-teal-500 hover:text-white transition-colors duration-300 w-full mt-2">
            Shop now
          </button>
        </div>

        {/* Drug of Abuse Tests */}
        <div className="max-w-xs text-center">
          <motion.img
            src={DrugAbuse}
            alt="Drug of Abuse Tests"
            className="w-full h-80 cursor-pointer hover:opacity-70 object-cover mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: productGridInView ? 1 : 0, y: productGridInView ? 0 : 50 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ opacity: 0.6 }}
          />
          <h4 className="font-semibold mb-2">Drug of Abuse Tests</h4>
          <button className="bg-white border-2 border-teal-500 text-teal-500 font-semibold py-2 px-4 rounded-full hover:bg-teal-500 hover:text-white transition-colors duration-300 w-full mt-2">
            Shop now
          </button>
        </div>
      </motion.div>

      {/* Featured Products Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: headingInView ? 1 : 0, y: headingInView ? 0 : -50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center mt-12"
      >
        <h3 className="text-xl text-[#30BBF9] font-normal mb-2">Featured Products</h3>
        <p className="text-3xl font-medium mb-8">Our Best-Selling Testing Kits</p>
        {/* <div className="flex flex-wrap justify-center gap-8"> */}
          {/* Product Cards */}
          {/* {[
            { image: ChickenGuniya, title: "Chikungunya IgG And IgM Rapid Test" },
            { image: Dengue, title: "Dengue IgG and IgM and NS1 Combo Test" },
            { image: Malaria, title: "Malaria Pf and Pan Rapid Test" },
            { image: Typoid, title: "Typhoid Rapid Test" }
          ].map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: productGridInView ? 1 : 0, y: productGridInView ? 0 : 50 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              className="group max-w-xs hover:shadow-xl transition-shadow duration-300 relative"
            >
              <img src={product.image} alt={product.title} className="w-full h-60 object-cover mb-4" />
              <p className="font-semibold mb-2">{product.title}</p>
              <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center">
                  <button className="bg-teal-500 text-white py-2 px-4 rounded-full m-1">Shop Now</button>
                  <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded-full m-1">View</button>
                  <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded-full m-1">View Description</button>
                  <div className="mt-2 text-yellow-500">{"★".repeat(5)}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div> */}
              <HorizontalCardsProducts category={"ecotest"} heading={"Ecotest"}/>

      </motion.div>
    </div>
  );
};

export default TestingKits;
