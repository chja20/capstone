import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"
import './Section2.css'; // 스타일을 위한 CSS 파일 추가

const Section2 = ({ setCurrentSection }) => {
  const [isVisible, setIsVisible] = useState(false); // 화면에 나타났는지 여부

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

    const section2 = document.querySelector('.section2');
    observer.observe(section2);

    return () => observer.disconnect(); // 컴포넌트가 언마운트될 때 observer 해제
  }, []);
  const navigate = useNavigate();

  return (
    <section className={`section section2 ${isVisible ? 'fade-in' : ''}`}>
      <div className="content2">
        <div className="text-box">
        <h1>다양한 친구들을 만나보세요.</h1>
      <p>"유기동물에게 따뜻한 보금자리를 찾아주는 소중한 연결의 공간입니다."</p>
    </div>
    </div>
    <button className="custom-button1" onClick={() => navigate("/Info")}>
          동물 정보 게시판
        </button>
    <div className="scroll-down">Scroll Down</div> {/* 화면 하단 중앙에 "scroll Down" 추가 */}
  </section>  );
};

export default Section2;
