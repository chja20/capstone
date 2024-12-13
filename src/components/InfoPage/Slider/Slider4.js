import React from "react";
import "./Slider.css";

function Slider4(isActive) {
  return (
    <div className={`slider-page4 ${isActive ? "active" : ""}`}>
      <div className="slide-title4">
        <p>
          마지막으로, 유기동물을 입양하기 위한 유기동물 보호소의 기본적인 입양
          절차입니다.
        </p>
      </div>
      <div className="slide-container4">
        <div className="container4-contents">
          <div className="container4-contents-title">
            <p style={{ fontWeight: "bold" }}>STEP 1</p>
          </div>
          <div className="container4-contents-text">
            <p style={{ fontWeight: "bold" }}>입양 상담 신청</p>
            <p style={{ fontSize: "small" }}>
              보호소 웹사이트 또는 직접 방문을 통해 입양 상담 신청서를 작성한다.
              신청서에는 입양자의 환경 (주거 형태, 가족 구성원, 경제적 여건 등)
              과 반려동물 경험을 기록한다.
            </p>
          </div>
        </div>
        <div className="container4-contents">
          <div className="container4-contents-title">
            <p style={{ fontWeight: "bold" }}>STEP 2</p>
          </div>
          <div className="container4-contents-text">
            <p style={{ fontWeight: "bold" }}>상담 및 적합성 평가</p>
            <p style={{ fontSize: "small" }}>
              보호소 직원과의 상담을 진행한다. 신청자의 생활방식, 가족 구성원의
              동의 여부, 책임감 등을 확인한다. 필요시 보호소 직원이 가정을
              방문해 환경을 점검하기도 한다.
            </p>
          </div>
        </div>
        <div className="container4-contents">
          <div className="container4-contents-title">
            <p style={{ fontWeight: "bold" }}>STEP 3</p>
          </div>
          <div className="container4-contents-text">
            <p style={{ fontWeight: "bold" }}>보호소 내 가족 찾기</p>
            <p style={{ fontSize: "small" }}>
              입양자의 라이프스타일에 맞는 가족을 추천한다. 동물과의 첫 만남을
              통해 상호 호감을 확인한다.
            </p>
          </div>
        </div>
        <div className="container4-contents">
          <div className="container4-contents-title">
            <p style={{ fontWeight: "bold" }}>STEP 4</p>
          </div>
          <div className="container4-contents-text">
            <p style={{ fontWeight: "bold" }}>입양 확정</p>
            <p style={{ fontSize: "small" }}>
              입양 계약서 작성 (입양 조건, 책임 명시) 및 필요한 서류를 제출
              (신분증 등) 한다. 소정의 입양비를 납부한다. (보호소 운영비와 동물
              관리 비용 지원)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider4;
