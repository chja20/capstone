import React, { useEffect, useState, useRef } from 'react';

function App() {
  const [keyword, setKeyword] = useState("");
  const mapRef = useRef(null);
  const psRef = useRef(null);
  const infowindowRef = useRef(null);
  const markersRef = useRef([]);
  const categories = [
    { name: "유기견 보호소", keyword: "유기견 보호소" },
    { name: "동물 병원", keyword: "동물 병원" },
    { name: "애견 동반 카페", keyword: "애견 카페" },
    { name: "펫 용품 샵", keyword: "펫 용품 샵" },
  ];

  useEffect(() => {
    const loadKakaoMap = () => {
      if (window.kakao && window.kakao.maps) {
        const mapContainer = document.getElementById('map');
        const mapOption = {
          center: new window.kakao.maps.LatLng(37.566826, 126.9786567),
          level: 3,
        };

        mapRef.current = new window.kakao.maps.Map(mapContainer, mapOption);
        psRef.current = new window.kakao.maps.services.Places();
        infowindowRef.current = new window.kakao.maps.InfoWindow({ zIndex: 1 });
      } else {
        console.error("Kakao Maps API를 로드할 수 없습니다.");
      }
    };

    loadKakaoMap();
  }, []);

  const searchPlaces = (keywordToSearch) => {
    if (!keywordToSearch.trim()) {
      alert("검색어를 입력해주세요!");
      return;
    }

    markersRef.current.forEach(marker => marker.setMap(null));
    markersRef.current = [];
    document.getElementById('place-list').innerHTML = '';

    searchMoreResults(keywordToSearch, 1);
  };

  const searchMoreResults = (keywordToSearch, page) => {
    const options = { page };
    psRef.current.keywordSearch(keywordToSearch, (data, status, pagination) => {
      if (status === window.kakao.maps.services.Status.OK) {
        displayPlaces(data);

        if (pagination.hasNextPage && page < 5) {
          searchMoreResults(keywordToSearch, pagination.currentPage + 1);
        }
      } else if (status === window.kakao.maps.services.Status.ZERO_RESULT && page === 1) {
        alert("검색 결과가 없습니다.");
      } else if (status !== window.kakao.maps.services.Status.OK) {
        alert("검색 중 오류가 발생했습니다.");
      }
    }, options);
  };

  const displayPlaces = (places) => {
    const bounds = new window.kakao.maps.LatLngBounds();
    const placeList = document.getElementById('place-list');

    places.forEach((place) => {
      const placePosition = new window.kakao.maps.LatLng(place.y, place.x);
      const marker = new window.kakao.maps.Marker({
        position: placePosition,
        map: mapRef.current,
      });

      window.kakao.maps.event.addListener(marker, 'click', () => {
        const content = ` 
          <div style="width:200px;text-align:center;">
            <h4>${place.place_name}</h4>
            <div>전화번호: ${place.phone || '정보 없음'}</div>
            <div>주소: ${place.address_name || '정보 없음'}</div>
            <div>카테고리: ${place.category_name || '정보 없음'}</div>
          </div>`;
        infowindowRef.current.setContent(content);
        infowindowRef.current.open(mapRef.current, marker);
      });

      const li = document.createElement('li');
      li.className = 'place-item';
      li.style = { marginBottom: '15px' }; // Add space between cards
      li.innerHTML = `
        <div class="place-card" style="border: 1px solid #ddd; padding: 15px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); background-color: #fff; transition: transform 0.3s ease;">
          <div class="place-title" style="font-weight: bold; font-size: 1.2em; color: #3e6f35;">${place.place_name}</div>
          <div class="place-address" style="margin-top: 8px; color: #333;">주소: ${place.address_name || '정보 없음'}</div>
          <div class="place-phone" style="margin-top: 8px; color: #333;">전화번호: ${place.phone || '정보 없음'}</div>
          <div class="place-category" style="margin-top: 8px; color: #3e6f35;">카테고리: ${place.category_name || '정보 없음'}</div>
        </div>
      `;

      li.onclick = () => {
        mapRef.current.setCenter(placePosition);
        mapRef.current.setLevel(3);
      };

      placeList.appendChild(li);
      markersRef.current.push(marker);
      bounds.extend(placePosition);
    });

    mapRef.current.setBounds(bounds);
  };

  const displayCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const currentPosition = new window.kakao.maps.LatLng(latitude, longitude);

          const marker = new window.kakao.maps.Marker({
            position: currentPosition,
            map: mapRef.current,
            title: '현재 위치',
          });

          mapRef.current.setCenter(currentPosition);
          markersRef.current.push(marker);
        },
        (error) => {
          console.error("현재 위치를 가져올 수 없습니다:", error);
        }
      );
    } else {
      alert("GPS를 지원하지 않는 브라우저입니다.");
    }
  };

  const handlePetShopCategoryClick = () => {
    const petShopKeyword = "펫 용품 샵";  
    searchPlaces(petShopKeyword);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ width: '30%', padding: '20px', overflowY: 'auto', borderRight: '1px solid #ddd' }}>
        <div id="search_wrap" style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input
            type="text"
            id="keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="검색할 장소를 입력하세요"
            style={{
              height: '35px',
              width: '51%',
              marginRight: '10px',
              paddingLeft: '10px',
              border: '1px solid #3e6f35',
              borderRadius: '5px',
            }}
          />
          <button 
            onClick={() => searchPlaces(keyword)} 
            style={{
              height: '40px',
              width: '80px',
              backgroundColor: '#3e6f35',
              color: '#fff',
              borderRadius: '5px',
              fontWeight: 'bold',
            }}
          >
            검색
          </button>
          <button 
            onClick={displayCurrentLocation} 
            style={{
              height: '40px',
              width: '100px',
              backgroundColor: '#3e6f35',
              color: '#fff',
              borderRadius: '5px',
              fontWeight: 'bold',
            }}
          >
            현재 위치
          </button>
        </div>

        <div
          id="category-buttons"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '20px',
          }}
        >
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={category.name === "펫 용품 샵" ? handlePetShopCategoryClick : () => searchPlaces(category.keyword)}
              style={{
                padding: '10px 20px',
                backgroundColor: '#c7e5c2',
                color: '#4d4d4d',
                border: '1px solid #3e6f35',
                borderRadius: '5px',
                fontWeight: 'bold',
                textAlign: 'center',
                width: '45%',
              }}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div
          id="place-list"
          style={{
           
            padding: '15px',
            borderRadius: '5px',
            maxHeight: '670px',
            overflowY: 'auto',
          
          }}
        ></div>
      </div>
      <div id="map" style={{ width: '70%', height: '100%' }} />
    </div>
  );
}

export default App
