import React from 'react';
import 'remixicon/fonts/remixicon.css'; 
import { motion } from 'framer-motion';  // Import motion from framer-motion
import Zara from "../../assets/dr-zara.jpg";
import Shujra from "../../assets/dr_shujra.jpg";
import Sitwat from "../../assets/dr_sitwat.jpg";

const testimonials = [
  {
    quote: 'Love the simplicity',
    text: ' I am so happy with the product that I purchased from 3Zbio for diabetes, weight loss, and cholesterol. I highly recommend their products and their support team is wonderful!',
    name: 'Dr Zara Mahmood',
    title: 'Pharmacist',
    img: Zara,
  },
  {
    quote: 'Love the simplicity',
    text: ' I am so happy with the product that I purchased from 3Zbio for diabetes, weight loss, and cholesterol. I highly recommend their products and their support team is wonderful!',
    name: 'Dr. Noor Muhammad Shujrah',
    title: 'Clinical Therapeutic Nutritionist, Mendocino College , California U.S.A',
    img: Shujra, 
  },
  {
    quote: 'Love the simplicity',
    text: ' I am so happy with the product that I purchased from 3Zbio for diabetes, weight loss, and cholesterol. I highly recommend their products and their support team is wonderful!',
    name: 'Dr. Sitwat Azeem',
    title: 'Director & Chief Consultant (Infertility), Noor Hospital, Khi',
    img: Sitwat, 
  },
];

const TestimonialsSection = () => {
  return (
    <section className="max-w-screen-xl mx-auto p-6 text-center bg-white">
      <h2 className="text-teal-600 text-lg font-semibold">Testimonials</h2>
      <h1 className="relative text-3xl font-bold text-gray-800 mb-8">
        Recommended By Professionals
        <span className="absolute w-16 h-1 bg-teal-600 left-1/2 transform -translate-x-1/2 bottom-0"></span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}  // Animate from left or right
            animate={{ opacity: 1, x: 0 }}  // Bring it to the center
            transition={{ duration: 0.8, ease: "easeInOut", delay: index * 0.3 }}  // Smooth transition
            className="relative bg-white p-8 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:bg-teal-500 hover:text-white"
          >
            {/* Circle and quote icon */}
            <div className="absolute top-1 left-1 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#022636] rounded-full z-0 transition-all duration-1000 ease-in-out hover:w-96"></div>
            <span className="absolute top-1 left-1 text-5xl text-teal-500 z-10">
              <i className="ri-double-quotes-l"></i>
            </span>

            {/* Testimonial content */}
            <h4 className="text-lg font-semibold text-black mt-16 mb-4 z-10 transition-colors duration-300 ease-in-out">
              {testimonial.quote}
            </h4>
            <p className="text-black mb-6 z-10 transition-colors duration-300 ease-in-out">
              {testimonial.text}
            </p>

            {/* User avatar */}
            <img
              className="w-24 h-24 rounded-full border-4 border-teal-600 mx-auto mb-4 transition-all duration-300 ease-in-out z-10"
              src={testimonial.img}
              alt={testimonial.name}
            />
            <h5 className="text-black font-semibold z-10 transition-colors duration-300 ease-in-out">
              {testimonial.name}
            </h5>
            <h6 className="text-gray-600 z-10 transition-colors duration-300 ease-in-out">
              {testimonial.title}
            </h6>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
