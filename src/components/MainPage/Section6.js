import React, { useEffect, useState } from 'react';
import './Section6.css'; // 스타일을 위한 CSS 파일 추가
import { useNavigate } from "react-router-dom"

const Section6 = ({ setCurrentSection }) => {
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

    const section6 = document.querySelector('.section6');
    observer.observe(section6);

    return () => observer.disconnect(); // 컴포넌트가 언마운트될 때 observer 해제
  }, []);

  return (
    <section className={`section section6 ${isVisible ? 'fade-in' : ''}`}>
      <div className="content6">
        <div className="text-box">
        <h1>입양 가이드 </h1>
      <p>"입양의 방법과 입양전 점검사항을 알려 드려요."</p>
    </div>
    </div>

    <button className="custom-button5" onClick={() => navigate("/guide")}>
          입양 가이드
        </button>

    <div className="scroll-down">Scroll Down</div> {/* 화면 하단 중앙에 "scroll Down" 추가 */}
  </section> );


};
export default Section6;
