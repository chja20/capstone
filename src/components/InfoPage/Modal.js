// src/Modal.js
import React from 'react';
import './styles/Modal.css';

function Modal({ onClose, onRestart, recommendation }) {
  if (!recommendation) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>나에게 맞는 동물은??</h2>
        <div style={{ margin: '20px 0', borderBottom: '1px solid #ddd', width: '100%' }}></div>
        <img
          src={recommendation.image}
          alt={recommendation.name}
          className="recommendation-image"
        />
        <p class = "names"> {recommendation.name}</p>
        
        <button className="close-button1" onClick={onClose}>닫기</button>
        <button className="restart-button1" onClick={onRestart}>다시하기</button>
      </div>
    </div>
  );
}

export default Modal;
