import React from "react";
import { motion, useInView } from "framer-motion";
import progestrol from "../../assets/mystery_product_proG_2.png";
import injection from "../../assets/mystery_product_glass_pros.png";
import Golden from "../../assets/mystery_product_glass_pcyj.png";
import "./style.css";

const FeaturedProducts = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="text-center py-10" ref={ref}>
      <motion.h2
        className="text-[#C4A968] text-2xl md:text-[50px] font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -50 }}
        transition={{ duration: 0.5 }}
      >
        World's 1<sup>st</sup> Peptide-Based Diabetes Product
      </motion.h2>
      <br />
      <motion.p
        className="text-[#C4A968] text-md md:text-[25px] italic font-bold mt-2"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Revolutionizing Healthcare Now With Innovative Solutions
      </motion.p>
      <br />
      <motion.p
        className="text-[#30BBF9] text-lg md:text-2xl mt-1"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -50 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Now Available in Pakistan
      </motion.p>
      <br /><br />
      <motion.p
        className="text-[#30BBF9] text-[18px] md:text-[19px] font-semibold mt-1"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -50 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        FEATURED PEPTIDE PRODUCTS
      </motion.p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
  {/* Product 1 */}
  <motion.div
    className="p-4"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
    transition={{ duration: 0.5, delay: 0.8 }}
  >
    <img
      src={injection}
      alt="Product 1"
      className="mx-auto product-image w-56 md:w-64 lg:w-96" 
    />
    <h3 className="text-[#30BBF9] text-xl font-semibold mt-4">Coming Soon</h3>
    <p className="text-gray-600 mt-2">Treat pain, Improve Joint Mobility</p>
  </motion.div>

  {/* Product 2 */}
  <motion.div
    className="p-4"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
    transition={{ duration: 0.5, delay: 1.0 }}
  >
    <img
      src={progestrol}
      alt="Product 2"
      className="mx-auto product-image w-56 md:w-64 lg:w-96" 
    />
    <h3 className="text-[#30BBF9] text-xl font-semibold mt-4">Coming Soon</h3>
    <p className="text-gray-600 mt-2">Reverse Insulin Resistance</p>
  </motion.div>

  {/* Product 3 */}
  <motion.div
    className="p-4"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
    transition={{ duration: 0.5, delay: 1.2 }}
  >
    <img
      src={Golden}
      alt="Product 3"
      className="mx-auto product-image w-56 md:w-64 lg:w-96" 
    />
    <h3 className="text-[#30BBF9] text-xl font-semibold mt-4">Coming Soon</h3>
    <p className="text-gray-600 mt-2">Instantly Repair Damaged Hair</p>
  </motion.div>
</div>

    </section>
  );
};

export default FeaturedProducts;
