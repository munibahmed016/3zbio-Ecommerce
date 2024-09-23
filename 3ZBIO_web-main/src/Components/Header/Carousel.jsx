import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Progestrol from "../../assets/new_coming_soon_slide--scaled.jpg";
import wideSlider from "../../assets/wide_slide-0-scaled.jpg";
import Teaser from "../../assets/wide_slide-1-scaled.jpg";
import CategoryList from "../CategoryList/CateGoryList";
import ChatbotWidget from "../ChatBot/ChatBot";
import './carol.css'

export function SimpleSlider() {
  const [showChatbot, setShowChatbot] = useState(false); // Chatbot state

  const settings = {
    dots: true,              
    infinite: true,
    speed: 500,       
    slidesToShow: 1,         
    autoplay: true,      
    autoplaySpeed: 4000,    
    responsive: [           
      {
        breakpoint: 1024,    
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,     
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,     
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
    <CategoryList/>
    <div className="slider-container relative z-[-1] overflow-hidden">
      <Slider {...settings}>
        <div>
          <img src={Progestrol} alt="Slide 1" className="slider-image" />
        </div>
        <div>
          <img src={wideSlider} alt="Slide 2" className="slider-image" />
        </div>
        <div>
          <img src={Teaser} alt="Slide 3" className="slider-image" />
        </div>
      </Slider>
    </div>
    </>
  );
}
