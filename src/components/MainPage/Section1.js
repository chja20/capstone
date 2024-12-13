import React, { useEffect, useState } from 'react';
import './Section1.css'; // 스타일을 위한 CSS 파일 추가

const Section1 = ({ setCurrentSection }) => {
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

    const section1 = document.querySelector('.section1');
    observer.observe(section1);

    return () => observer.disconnect(); // 컴포넌트가 언마운트될 때 observer 해제
  }, []);



  return (
    <section className={`section section1 ${isVisible ? 'fade-in' : ''}`}>
      <div className="content1">
        <div className="text-box">
          <h1>반려곁에</h1>
          <p>
            "잃어버린 가족을 다시 만날 수 있는 
            희망의 공간, 새로운 가족을 기다리며 
            따듯한 인연을 찾는 유기동물들의 
            쉼터입니다"
          </p>
        </div>
      </div>
      <div className="scroll-down">Scroll Down</div>
    </section>
  );
};

export default Section1;
