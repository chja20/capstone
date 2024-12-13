import React from "react";
import "./Slider.css";

function Slider1(isActive) {
  return (
    <div className={`slider-page1 ${isActive ? "active" : ""}`}>
      <div className="slide-title">
        <p>유기동물을 입양하기 위한 가이드라인을 제시합니다.</p>
        <p>유기동물의 입양은 유기동물 보호소에서 이루어집니다.</p>
      </div>
      <div className="slide-innerContents">
        <p className="slider-contents-title">보호소의 역할</p>
        <div className="slider-contents">
          <div className="slider-contents-box">
            <p className="slider-bottomTitle">구조 및 보호</p>
            <p className="slider-bottomContent">
              길을 잃거나 유기된 동물을 구조하여 안전한 환경에서 보호
            </p>
          </div>
          <div className="slider-contents-box">
            <p className="slider-bottomTitle">건강관리</p>
            <p className="slider-bottomContent">
              동물의 건강 상태를 점검하고, 필요한 치료 및 예방 접종 진행
            </p>
          </div>
          <div className="slider-contents-box">
            <p className="slider-bottomTitle">사회화 훈련</p>
            <p className="slider-bottomContent">
              동물이 새로운 환경과 사람에게 적응할 수 있도록 기본적인 사회화
              훈련 제공
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Slider1;
