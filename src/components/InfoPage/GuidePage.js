import React, { useState } from "react";
import Slider from "react-slick";
import "./styles/GuidePage.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider2 from "./Slider/Slider2";
import Slider3 from "./Slider/Slider3";
import Slider4 from "./Slider/Slider4";
import Slider1 from "./Slider/Slider1";

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", zIndex: 1 }}
      onClick={onClick}
    >
      <IoIosArrowBack size={30} color="#3e6f35" />
    </div>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", zIndex: 1, marginRight: 10 }}
      onClick={onClick}
    >
      <IoIosArrowForward size={30} color="#3e6f35" />
    </div>
  );
};

function GuidePage() {
  const [currentSlide, setCurrentSlide] = useState(0); //현재 슬라이드

  const settings = {
    dots: true,
    // arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    afterChange: (newIndex) => setCurrentSlide(newIndex), // 슬라이드 업데이트
  };

  return (
    <div className="GuidePage">
      <h2 className="guidePage-title">유기동물 입양 가이드</h2>
      <div className="slider-container">
        <Slider {...settings}>
          <div className={`slider-page ${currentSlide === 0 ? "active" : ""}`}>
            <Slider1 isActive={currentSlide === 0} />
          </div>
          <div className={`slider-page ${currentSlide === 1 ? "active" : ""}`}>
            <Slider2 isActive={currentSlide === 1} />
          </div>
          <div className={`slider-page ${currentSlide === 2 ? "active" : ""}`}>
            <Slider3 isActive={currentSlide === 2} />
          </div>
          <div className={`slider-page ${currentSlide === 3 ? "active" : ""}`}>
            <Slider4 isActive={currentSlide === 3} />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default GuidePage;
