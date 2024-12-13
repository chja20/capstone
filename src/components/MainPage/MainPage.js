import React, { useState, useEffect } from "react";
import "./MainPage.css";
import Menu from "./Menu"; // 메뉴바 컴포넌트 가져오기
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";

function MainPage() {
  const [currentSection, setCurrentSection] = useState(0); // 처음에는 0으로 설정

  // 휠 이벤트 핸들러
  const handleScroll = (event) => {
    const { deltaY } = event;

    if (deltaY > 0 && currentSection < 5) {
      setCurrentSection((prevSection) => prevSection + 1);
    } else if (deltaY < 0 && currentSection > 0) {
      setCurrentSection((prevSection) => prevSection - 1);
    }
  };

  // currentSection 상태 변경에 따라 스크롤 이동
  useEffect(() => {
    window.scrollTo({
      top: window.innerHeight * currentSection,
      behavior: "smooth",
    });
  }, [currentSection]);

  // 휠 이벤트 리스너 추가 및 제거
  useEffect(() => {
    const handleWheel = (event) => handleScroll(event);
    window.addEventListener("wheel", handleWheel);
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [currentSection]); // currentSection 의존성

  return (
    <div className="App">
      {/* 메뉴바 */}
      <Menu
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />

      {/* 섹션 */}
      <Section1 setCurrentSection={setCurrentSection} />
      <Section2 setCurrentSection={setCurrentSection} />
      <Section3 setCurrentSection={setCurrentSection} />
      <Section4 setCurrentSection={setCurrentSection} />
      <Section5 setCurrentSection={setCurrentSection} />
      <Section6 setCurrentSection={setCurrentSection} />
    </div>
  );
}

export default MainPage;
