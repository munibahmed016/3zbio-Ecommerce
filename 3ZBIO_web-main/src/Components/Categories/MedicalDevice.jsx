import React from 'react';
import BPChecker from "../../assets/multiflex_6in1.png";
import Acuteck from "../../assets/multigx_6in1-2.png";
import VerticalCardProduct from './VerticalCardsProducts';

const MedicalDevice = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between items-center text-center bg-slate-100">
    <div className="p-8">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Track your Health with Ease</h1>
        <p className="text-lg mb-4">Rapid, Reliable, Accurate, and Economical Monitors</p>
        <button className="bg-teal-500 text-white py-2 px-6 rounded-full hover:bg-teal-700 transition-colors duration-300">Learn More</button>
      </div>

      {/* Chronic Disease Series Section */}
      <div className="text-center mt-12">
        <h3 className="text-2xl font-bold mb-6">Chronic Disease Series</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Product Cards */}
          {[
            {
              image: Acuteck,
              alt: "Multi 6 in 1 Multi-Monitoring System"
            },
            {
              image: BPChecker,
              alt: "MultiFlex 6 in 1 with BP & Pulse Test"
            }
          ].map((product, index) => (
            <div
              key={index}
              className="group w-full sm:w-1/2 lg:w-1/2 transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="overflow-hidden rounded-lg shadow-">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-auto object-contain"
                />
                <button className="bg-white border-2 border-teal-500 text-teal-500 font-semibold py-2 px-4 rounded-full hover:bg-teal-500 hover:text-white transition-colors duration-300 w-32 mt-4">Shop now</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Grid Section */}
      {/* <div className="text-center mt-12">
      </div> */}
    </div>
        <VerticalCardProduct category={"acuteck"} heading={"Acuteck"}/>
  </div>
  );
}

export default MedicalDevice
