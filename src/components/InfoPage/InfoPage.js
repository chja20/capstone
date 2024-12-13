import React from "react";
import "./styles/InfoPage.css";
import AnimalCardList from "./AnimalCardList";

function InfoPage() {
  return (
    <div className="InfoPage">
      <header>
        <div className="header-box">
          <div className="web-title">유기동물 종합정보시스템</div>
        </div>
      </header>
      <main>
        <section className="section-first">
          <div className="section-title">
            <h2 className="section-title-text">
              동물 보호시설 - 보호 동물 조회
            </h2>
          </div>
          <AnimalCardList />
        </section>
        <section className="section-second">
          <div className="web-info-box">
            <p className="web-info-box-text">
              ※ 공고의 유기동물에 대해 궁금한 점이 있다면 상세정보를 참고하시고
              해당 시군구 및 동물보호센터로 문의하시기 바랍니다.{" "}
            </p>
            <p className="web-info-box-text">
              ※ 동물보호센터 및 동물병원의 근무시간은 09:00 ~ 18:00이므로
              문의전화는 근무시간에만 가능합니다.
            </p>
            <p className="web-info-box-text">
              ※ 해당 공고는 공공데이터포털의 국가동물보호정보시스템 구조동물
              조회 서비스 API를 사용하고 있음을 밝힙니다.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
export default InfoPage;
