// MiniMap.js
import React, { useEffect } from "react";

const ModalMiniMap = ({ careLocation, carePlaceName }) => {
  useEffect(() => {
    const { kakao } = window;

    const container = document.getElementById("map"); // 지도가 표시될 div
    const options = {
      center: new kakao.maps.LatLng(37.5665, 126.978), // 기본 위치 (서울)
      level: 3, // 줌 레벨
    };

    const map = new kakao.maps.Map(container, options);

    // 주소로 좌표 변환
    const geocoder = new kakao.maps.services.Geocoder();

    geocoder.addressSearch(careLocation, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        map.setCenter(coords);

        // 마커 추가
        const marker = new kakao.maps.Marker({
          position: coords,
        });
        marker.setMap(map);

        // 인포윈도우 추가
        const infowindow = new kakao.maps.InfoWindow({
          content: `<div style="padding:0 3px;">${carePlaceName}</div>`, // 마커 위에 보여줄 내용
        });

        infowindow.open(map, marker); // 마커 위에 인포윈도우 띄우기
      }
    });
  }, [careLocation, carePlaceName]); // careLocation이 변경될 때마다 useEffect가 실행됨

  return (
    <div
      id="map"
      style={{ width: "100%", height: "100%", borderRadius: "10px" }} // 지도 크기 조정
    />
  );
};

export default ModalMiniMap;
