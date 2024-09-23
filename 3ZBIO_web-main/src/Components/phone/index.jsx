import React from 'react';
import { motion, useInView } from 'framer-motion';
import Logo from "../../assets/3z_bio.svg";

const PhoneNumber = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleLogoClick = () => {
    window.location.reload();
  };

  const handlePhoneClick = () => {
    const confirmCall = window.confirm('Do you want to call 021-111-326-111?');
    if (confirmCall) {
      window.location.href = 'tel:021111326111';
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-2" ref={ref}>
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -50 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-normal mb-4 text-slate-700">
          Find the product that's <span className="font-semibold text-slate-800">right for you</span>
          <br />
          We're <span className="font-semibold text-slate-800">happy</span> to help!
        </h1>
        <p className="text-lg font-normal text-slate-800">
          Contact our health experts today!
        </p>
      </motion.div>
      
      <motion.button 
        onClick={handlePhoneClick}
        className="text-3xl md:text-4xl font-bold text-slate-700 text-center hover:no-underline mb-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        (021) 111-326-111
      </motion.button>

      <motion.img 
        src={Logo} 
        alt="3Z Bio Logo" 
        className="w-24 md:w-52 cursor-pointer"
        onClick={handleLogoClick} 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      />
    </div>
  );
}

export default PhoneNumber;
