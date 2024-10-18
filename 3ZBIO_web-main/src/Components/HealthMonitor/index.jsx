import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BPChecker from "../../assets/multiflex_6in1.png";
import Acuteck from "../../assets/multigx_6in1-2.png";
import Red from "../../assets/ghe-2in1.jpg";
import Orange from "../../assets/guc-3in1.jpg";
import Blue from "../../assets/gke-2in1.jpg";
import Grey from "../../assets/gue-2in1.jpg";
import White from "../../assets/meters-2.png";
import Cholesterol from "../../assets/meters-1.png";
import { Link } from "react-router-dom";

const HealthMonitor = () => {
  const { ref: headingRef, inView: headingInView } = useInView({ triggerOnce: true });
  const { ref: paragraphRef, inView: paragraphInView } = useInView({ triggerOnce: true });
  const { ref: acuteckRef, inView: acuteckInView } = useInView({ triggerOnce: true });
  const { ref: bpCheckerRef, inView: bpCheckerInView } = useInView({ triggerOnce: true });
  const { ref: productGridRef, inView: productGridInView } = useInView({ triggerOnce: true });

  return (
    <div className="p-8">
      {/* Heading Section */}
      <motion.div 
        ref={headingRef}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: headingInView ? 1 : 0, y: headingInView ? 0 : -20 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl md:text-6xl font-bold mb-2">Track your Health with Ease</h1>
      </motion.div>

      <motion.div 
        ref={paragraphRef}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: paragraphInView ? 1 : 0, y: paragraphInView ? 0 : -20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center mb-8"
      >
        <p className="text-[20px] sm:text-3xl font-medium text-gray-500 mb-4 mt-6">Rapid, Reliable, Accurate, and Economical Monitors</p>
        <button className="bg-teal-500 text-white py-2 px-6 rounded-full hover:bg-teal-700 transition-colors duration-300">Learn More</button>
      </motion.div>

      {/* Chronic Disease Series Section */}
      <div className="text-center text-[#30BBF9] mt-12">
        <h3 className="text-2xl font-normal mb-6">Chronic Disease Series</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Product Cards */}
          <motion.div
            ref={acuteckRef}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: acuteckInView ? 1 : 0, x: acuteckInView ? 0 : -100 }}
            transition={{ duration: 0.5 }}
            className="group w-full sm:w-1/2 lg:w-[40.33%] transform hover:-translate-y-2 transition-transform duration-300"
          >
            <img
              src={Acuteck}
              alt="Multi 6 in 1 Multi-Monitoring System"
              className="w-full h-40 md:h-48 lg:h-64 object-contain"  
            />
            <Link to={"product/66e15b2ebbc360ed70bab93b"} className="bg-white border-2 border-teal-500 text-teal-500 font-semibold py-2 px-4 rounded-full hover:bg-teal-500 hover:text-white transition-colors duration-300 w-32 mt-4">Shop now</Link>
          </motion.div>

          <motion.div
            ref={bpCheckerRef}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: bpCheckerInView ? 1 : 0, x: bpCheckerInView ? 0 : 100 }}
            transition={{ duration: 0.5 }}
            className="group w-full sm:w-1/2 lg:w-[40.33%] transform hover:-translate-y-2 transition-transform duration-300"
          >
            <img
              src={BPChecker}
              alt="MultiFlex 6 in 1 with BP & Pulse Test"
              className="w-full h-40 md:h-48 lg:h-64 object-contain"            />
            <Link to={"product/66e15b2ebbc360ed70bab93b"} className="bg-white border-2 border-teal-500 text-teal-500 font-semibold py-2 px-4 rounded-full hover:bg-teal-500 hover:text-white transition-colors duration-300 w-32 mt-8">Shop now</Link>
          </motion.div>
        </div>
      </div>

      {/* Product Grid Section */}
      {/* <div className="flex flex-wrap justify-center gap-2 mt-12" ref={productGridRef}>
        {[
          { image: Red, alt: "3 in 1 - Blood Glucose, Uric Acid, and Total Cholesterol Monitor" },
          { image: Orange, alt: "2 in 1 - Blood Glucose and Hemoglobin Monitor" },
          { image: Blue, alt: "2 in 1 - Blood Glucose and β-Ketone Monitor" },
          { image: Grey, alt: "2 in 1 - Blood Glucose and Uric Acid Monitor" },
          { image: White, alt: "Portable Glycosylated Hemoglobin Analyzer HbA1C Monitor" },
          { image: Cholesterol, alt: "Cholesterol Monitoring System" },
        ].map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: productGridInView ? 1 : 0, y: productGridInView ? 0 : 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group w-full sm:w-1/2 lg:w-[15.76%] transform hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="overflow-hidden rounded-lg shadow-lg flex flex-col justify-between h-full p-1">
              <img
                src={product.image}
                alt={product.alt}
                className="w-full h-60 object-contain"
              />
              <p className="mt-4 font-semibold h-16 flex items-center justify-center">
                {product.alt}
              </p>
              <div className="flex justify-center mt-4">
                <button className="bg-white border-2 border-teal-500 text-teal-500 font-semibold py-2 px-4 rounded-full hover:bg-teal-500 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <span>Shop now</span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div> */}
      
    </div>
  );
};

export default HealthMonitor;
