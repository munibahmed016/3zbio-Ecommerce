import { useEffect, useState } from 'react';
import home_banner from "../../assets/background_header.jpeg";
import test_mobile from "../../assets/test_mobile_slide.jpg";
import right_side from "../../assets/final.png";

export default function ProgsterolPage() {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getParallaxAmount = () => {
    return isMobile ? scrollY * -0.1 : scrollY * -0.2;
  };

  const parallaxStyle = {
    transform: `translate3d(0, ${getParallaxAmount()}px, 0)`,
    transition: 'transform 0.1s linear',
  };

  return (
    <div
      className="relative h-[70vh] w-full overflow-hidden bg-cover -z-0 bg-center flex items-start justify-start"
      style={{
        backgroundImage: `url(${isMobile ? test_mobile : home_banner})`,
      }}
    >
      <div
        className="relative z-10 max-w-lg md:mt-20 mx-4 md:mx-8 lg:mx-16 py-8 md:py-12 text-left"
        style={parallaxStyle}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
          ProGsterol Healthy Glucose Level With Deglusterol
        </h2>
        <p className="text-base md:text-lg text-black mt-4">
          ProGsterol's main ingredient Deglusterol is the world's first new dietary Ingredient (NDI) as a synthetic peptide approved by U.S FDA. 
        </p>
        <button className="mt-6 sm:w-auto bg-teal-500 hover:bg-teal-600 text-white px-6 md:px-8 py-3 rounded-lg font-medium transition-colors">
          Learn More
        </button>
      </div>

      {/* Right side image for medium screens and up */}
      <img
        src={right_side}
        alt="Right side illustration"
        className="hidden md:block absolute right-0 top-[-130px] h-[90vh] object-contain"
      />
    </div>
  );
}
