import React from "react";
import "./Slider.css";

function Slider3(isActive) {
  return (
    <div className={`slider-page3 ${isActive ? "active" : ""}`}>
      <div className="slide-title3">
        <p>
          반려동물 입양을 계획할 때 필수적으로 생각해야 할 3가지의 조건과
          체크리스트가 있습니다.
        </p>
      </div>
      <div className="slide-container3">
        <div className="slide-container-left">
          <div className="left-contents-title">
            <p>입양을 위한 조건</p>
          </div>
          <div className="left-contents-text">
            <p style={{ fontWeight: "bold" }}>1. 가정환경 및 경제적 능력</p>
            <p>
              성인 (만 19세 이상) 으로, 안정된 거주지와 경제적 능력이 있어야
              합니다. <br />
              반려동물이 다칠 위험이 없는 환경이며, 동물이 자유롭게 움직이고 쉴
              수 있는 공간이 충분해야 합니다.
              <br />
              또한 사료, 예방접종, 건강검진 등의 기본적인 비용 발생에 대비한
              충분한 재정적 여유가 있어야 합니다.
            </p>
            <br />
            <p style={{ fontWeight: "bold" }}>2. 가족 구성원 간 동의</p>
            <p>
              모든 가족 구성원에 대한 반려동물 입양 동의와 반려동물에 대한
              이해가 필요합니다.
            </p>
            <br />
            <p style={{ fontWeight: "bold" }}>3. 생활 방식</p>
            <p>
              입양 후 반려동물을 돌볼 시간과 애정이 충분히 있어야 합니다.
              <br />
              반려동물과 충분한 시간을 함께할 수 있어야 합니다.
            </p>
          </div>
        </div>
        <div className="slide-container-right">
          <div className="right-contents-title">
            <p>개인 체크 리스트</p>
          </div>
          <div className="right-contents-text">
            <p>- 평생 책임질 수 있어야 합니다.</p>
            <br />
            <p>- 매일 산책 / 놀이를 시켜줄 시간적 여유가 충분해야 합니다.</p>
            <br />
            <p>
              - 반려동물을 책임질 수 있는 정도의 경제적인 여유가 필요합니다.
            </p>
            <br />
            <p>
              - 입양에 대해 함께 생활하는 가족 구성원과의 합의가 필요합니다.
            </p>
            <br />
            <p>- 기존에 키우던 반려동물이 있을 경우, 합사가 가능해야 합니다.</p>
            <br />
            <p>
              - 아픔이 있는 아이일 경우에도 인내심을 가지고 함께할 각오가
              필요합니다.
            </p>
            <br />
            <p>
              - 결혼 / 임신 / 유학 / 이민 등 반려동물 양육에 영향을 끼칠 수 있는
              일이
              <br />
              계획되어 있는지 생각합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider3;
