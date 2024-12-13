import React, { useState } from "react";
import "./styles/AnimalCard.css";
import AnimalCardModal from "./AnimalCardModal";

function AnimalCard({ animal }) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="AnimalCard">
      <div className="animal-card-open-modal" onClick={openModal}>
        <div className="animal-img">
          <div className="animal-top-date">
            <p className="animal-top-date-text">{animal.happenDt}</p>
          </div>
          <img className="animal-img-modal" src={animal.filename} alt="Img" />
        </div>
        <div className="mini-info">
          <p className="mini-info-box">
            <span className="mini-info-title">품종명</span>
            <span className="mini-info-text">{animal.kindCd}</span>
          </p>
          <p className="mini-info-box">
            <span className="mini-info-title">성별</span>
            <span className="mini-info-text">{animal.sexCd}</span>
          </p>
          <p className="mini-info-box">
            <span className="mini-info-title">발견 장소</span>
            <span className="mini-info-text">{animal.happenPlace}</span>
          </p>
          <p className="mini-info-box">
            <span className="mini-info-title">특징</span>
            <span className="mini-info-text">{animal.specialMark}</span>
          </p>
        </div>
      </div>
      {showModal && <AnimalCardModal animal={animal} closeModal={closeModal} />}
    </div>
  );
}

export default AnimalCard;
