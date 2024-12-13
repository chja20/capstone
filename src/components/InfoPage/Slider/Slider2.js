import React from "react";
import "./Slider.css";

function Slider2(isActive) {
  return (
    <div className={`slider-page2 ${isActive ? "active" : ""}`}>
      <div className="slide-title2">
        <p>보호소는 5가지의 운영과정을 가지고 있습니다.</p>
      </div>
      <div>
        <div className="slide-container2">
          <div className="contents1">
            <div className="circle-title">
              <p className="contents-title">입양 연결</p>
            </div>
            <div className="contentsBox">
              <p className="contentsBox-text">
                적합한 가정을 찾아 동물의 새로운 시작을 돕는 역할 수행
              </p>
            </div>
          </div>
          <div className="contents2">
            <div className="circle-title">
              <p className="contents-title">
                동물 구조
                <br />및 입소
              </p>
            </div>
            <div className="contentsBox">
              <p className="contentsBox-text">
                동물이 보호소로 들어오면 건강검진과 행동 평가를 진행
              </p>
            </div>
          </div>
          <div className="contents1">
            <div className="circle-title">
              <p className="contents-title">개별 관리</p>
            </div>
            <div className="contentsBox">
              <p className="contentsBox-text">
                각 동물의 상태에 따라 격리, 치료, 사회화 훈련 등 맞춤형 관리
                제공
              </p>
            </div>
          </div>
          <div className="contents2">
            <div className="circle-title">
              <p className="contents-title">입양 준비</p>
            </div>
            <div className="contentsBox">
              <p className="contentsBox-text">
                동물의 프로필 작성 (사진, 성격, 건강 상태 등) 및 입양 가능 상태
                확인
              </p>
            </div>
          </div>
          <div className="contents1">
            <div className="circle-title">
              <p className="contents-title">사후 관리</p>
            </div>
            <div className="contentsBox">
              <p className="contentsBox-text">
                입양된 동물의 적응 상황 확인 및 입양자와 지속적인 소통
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider2;
