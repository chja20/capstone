import React from "react";
import "./styles/AnimalCardModal.css";
import ModalMiniMap from "./ModalMiniMap";

function AnimalCardModal({ animal, closeModal }) {
  return (
    <div>
      <div className="modal-background">
        <div className="modal-contents-first">
          <button className="close-button" onClick={closeModal}>
            닫기
          </button>
          <div className="modal-contents-second">
            <div className="modal-left-minimap">
              <p className="modal-title">▶ 보호소 위치</p>
              <div className="shelter-map">
                <ModalMiniMap
                  careLocation={animal.careAddr}
                  carePlaceName={animal.careNm}
                />
              </div>
            </div>
            <div className="modal-right-infobox">
              <p className="modal-title">▶ 세부 정보</p>
              <div className="modal-info-contents">
                <table className="modal-info-table">
                  <tbody>
                    <tr>
                      <th className="table-start">품종명</th>
                      <td>{animal.kindCd}</td>
                    </tr>
                    <tr>
                      <th>성별</th>
                      <td>{animal.sexCd}</td>
                    </tr>
                    <tr>
                      <th>나이</th>
                      <td>{animal.age}</td>
                    </tr>
                    <tr>
                      <th>색상</th>
                      <td>{animal.colorCd}</td>
                    </tr>
                    <tr>
                      <th>체중</th>
                      <td>{animal.weight}</td>
                    </tr>
                    <tr>
                      <th>특징</th>
                      <td>{animal.specialMark}</td>
                    </tr>
                    <tr>
                      <th>접수일</th>
                      <td>{animal.happenDt}</td>
                    </tr>
                    <tr>
                      <th>발견 장소</th>
                      <td>{animal.happenPlace}</td>
                    </tr>
                    <tr>
                      <th>보호소명</th>
                      <td>{animal.careNm}</td>
                    </tr>
                    <tr>
                      <th>보호소 주소</th>
                      <td>{animal.careAddr}</td>
                    </tr>
                    <tr>
                      <th className="table-end">전화번호</th>
                      <td>{animal.careTel}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AnimalCardModal;
