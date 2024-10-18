import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Progestrol from "../../assets/new_coming_soon_slide--scaled.jpg";
import wideSlider from "../../assets/wide_slide-0-scaled.jpg";
import Teaser from "../../assets/wide_slide-1-scaled.jpg";
import Smp from "../../assets/smp.jpg"; // Small screen image 1
import SmT from "../../assets/admin-ajax.jpg"; // Small screen image 2
import Teas from "../../assets/teaser_slider_1-1.jpg"; // Small screen image 3
import ChatbotWidget from "../ChatBot/ChatBot";
import { FaComments, FaTimes } from 'react-icons/fa';
import './carol.css';

export function SimpleSlider() {
    const [showChatbot, setShowChatbot] = useState(false);
    const [showBmiCalculator, setShowBmiCalculator] = useState(false);
    const [showIrCalculator, setShowIrCalculator] = useState(false);
    const [buttonsVisible, setButtonsVisible] = useState(true);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Track mobile state
    let previousScrollY = window.scrollY;

    const handleToggleChatbot = () => {
        setShowChatbot(prev => !prev);
    };

    const handleToggleBmiCalculator = () => {
        setShowBmiCalculator(prev => !prev);
        setShowIrCalculator(false); // Hide IR calculator when opening BMI
    };

    const handleToggleIrCalculator = () => {
        setShowIrCalculator(prev => !prev);
        setShowBmiCalculator(false); // Hide BMI calculator when opening IR
    };

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (isMobile) {
            if (currentScrollY > previousScrollY) {
                setButtonsVisible(false); // Hide buttons on scroll down
            } else {
                setButtonsVisible(true); // Show buttons on scroll up
            }
        }
        previousScrollY = currentScrollY;
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [isMobile]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1, // Always show one slide at a time
        slidesToScroll: 1,
    };

    const images = isMobile
        ? [Smp, SmT, Teas] // Use small screen images for mobile
        : [Progestrol, wideSlider, Teaser]; // Use large screen images for larger devices

    return (
        <>
            <div className="slider-container relative z-[-1] overflow-hidden">
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index}>
                            <img src={image} alt={`Slide ${index + 1}`} className="slider-image" />
                        </div>
                    ))}
                </Slider>
            </div>

            <div className={`chatbot-toggle-container ${buttonsVisible ? 'visible' : 'hidden'}`}>
                <button className="chatbot-toggle-button" onClick={handleToggleChatbot} style={{ display: showChatbot ? 'none' : 'flex' }}>
                    <FaComments /> Chat With Doctor
                </button>

                {showChatbot && (
                    <div className="chatbot-container">
                        <ChatbotWidget />
                        <button className="chatbot-close-button" onClick={handleToggleChatbot}>
                            <FaTimes />
                        </button>
                    </div>
                )}

                <button className="calculator-button" onClick={handleToggleBmiCalculator}>
                    <span className="calculator-icon">🏋️</span> BMI Calculator
                </button>
                <button className="calculator-button" onClick={handleToggleIrCalculator}>
                    <span className="calculator-icon">💉</span> IR Calculator 
                </button>
            </div>

            {showBmiCalculator && (
                <div className="popup-container">
                    <div className="popup-header">
                        <h3>BMI Calculator</h3>
                        <button className="popup-close-button" onClick={handleToggleBmiCalculator}>
                            <FaTimes />
                        </button>
                    </div>
                    <iframe
                        src="https://bmi-checker-two.vercel.app/"
                        className="popup-iframe"
                        scrolling="yes">
                    </iframe>
                </div>
            )}

            {showIrCalculator && (
                <div className="popup-container">
                    <div className="popup-header">
                        <h3>IR Calculator</h3>
                        <button className="popup-close-button" onClick={handleToggleIrCalculator}>
                            <FaTimes />
                        </button>
                    </div>
                    <iframe src="https://insuline-resistance-cal.vercel.app/" className="popup-iframe"></iframe>
                </div>
            )}
        </>
    );
}
