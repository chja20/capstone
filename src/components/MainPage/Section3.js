import React, { useEffect, useState } from 'react';
import './Section3.css'; // 스타일을 위한 CSS 파일 추가
import { useNavigate } from "react-router-dom"

const Section3 = ({ setCurrentSection }) => {
  const [isVisible, setIsVisible] = useState(false); // 화면에 나타났는지 여부
  const navigate = useNavigate();

  // IntersectionObserver를 사용하여 섹션이 화면에 나타날 때 애니메이션 실행
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // 섹션이 화면에 보일 때 애니메이션을 시작
        } else {
          setIsVisible(false); // 화면에서 벗어나면 애니메이션을 멈춤
        }
      },
      {
        threshold: 0.5, // 섹션의 50% 이상이 화면에 보일 때
      }
    );

    const section3 = document.querySelector('.section3');
    observer.observe(section3);

    return () => observer.disconnect(); // 컴포넌트가 언마운트될 때 observer 해제
  }, []);

  return (
    <section className={`section section3 ${isVisible ? 'fade-in' : ''}`}>
      <div className="content3">
        <div className="text-box">
        <h1>희망을 만나는 첫걸음,<br/> 보호소 지도</h1>
      <p>"가까운 보호소 정보를 확인하고 따뜻한 인연을 만들어보세요"</p>
    </div>
    </div>

    <button className="custom-button2" onClick={() => navigate("/map")}>
          보호소 지도
        </button>

    <div className="scroll-down">Scroll Down</div>
  </section> );
};
export default Section3;
