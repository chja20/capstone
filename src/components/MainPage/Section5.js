import React, { useEffect, useState } from 'react';
import './Section5.css'; // 스타일을 위한 CSS 파일 추가
import { useNavigate } from "react-router-dom"

const Section5 = ({ setCurrentSection }) => {
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

    const section5 = document.querySelector('.section5');
    observer.observe(section5);

    return () => observer.disconnect(); // 컴포넌트가 언마운트될 때 observer 해제
  }, []);

  return (
    <section className={`section section5 ${isVisible ? 'fade-in' : ''}`}>
      <div className="content5">
        <div className="text-box">
        <h1>FAQ & Chatbot</h1>
      <p>"궁금하신 사항을 챗봇을 통해 알려드려요."</p>
    </div>
    </div>
    <button className="custom-button4" onClick={() => navigate("/FAQ")}>
          질문 게시판
        </button>
    <div className="scroll-down">Scroll Down</div> {/* 화면 하단 중앙에 "scroll Down" 추가 */}
  </section> );


};
export default Section5;
