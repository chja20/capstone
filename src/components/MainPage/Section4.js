import React, { useEffect, useState } from 'react';
import './Section4.css'; // 스타일을 위한 CSS 파일 추가
import { useNavigate } from "react-router-dom"

const Section4 = ({ setCurrentSection }) => {
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

    const section4 = document.querySelector('.section4');
    observer.observe(section4);

    return () => observer.disconnect(); // 컴포넌트가 언마운트될 때 observer 해제
  }, []);

  return (
    <section className={`section section4 ${isVisible ? 'fade-in' : ''}`}>
      <div className="content4">
        <div className="text-box">
        <h1>추천 동물 TEST</h1>
      <p>"나에게 딱 맞는 반려동물은? 간단한 테스트로 알아보세요."</p>
    </div>
    </div>
    <button className="custom-button3" onClick={() => navigate("/test")}>
          동물 테스트
        </button>
    <div className="scroll-down">Scroll Down</div> {/* 화면 하단 중앙에 "scroll Down" 추가 */}
  </section>);

};
export default Section4;
