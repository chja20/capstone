import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/MenuCategory.css";

function MenuCategory() {
  const navigate = useNavigate();

  return (
    <div className="MenuCategory">
      <button className="menu-button" onClick={() => navigate("/")}>
        메인
      </button>
      <button className="menu-button" onClick={() => navigate("/map")}>
        지도
      </button>
      <button className="menu-button" onClick={() => navigate("/Info")}>
        동물 정보
      </button>
      <button className="menu-button" onClick={() => navigate("/guide")}>
        가이드
      </button>
      <button className="menu-button" onClick={() => navigate("/test")}>
        테스트
      </button>
      <button className="menu-button" onClick={() => navigate("/FAQ")}>
        질문 게시판
      </button>
    </div>
  );
}

export default MenuCategory;
