import React, { useState, useEffect } from "react";
import "./styles/AnimalCardList.css";
import AnimalCard from "./AnimalCard";
import Pagination from "./Pagination";
import InfoFilter from "./InfoFilter";
import axios from "axios";

function AnimalCardList() {
  const [animals, setAnimals] = useState([]); // 전체 동물 데이터
  const [regions, setRegions] = useState([{ value: "", label: "전체" }]); // 지역 목록
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [selectedRegion, setSelectedRegion] = useState(""); // 선택한 지역 코드
  const [selectedType, setSelectedType] = useState(""); // 선택한 동물 축종 코드
  const [loading, setLoading] = useState(true); // 로딩 상태 추가

  const cardsPerPage = 12; // 한 페이지에 표시할 카드 수
  const totalPages = 10;

  const types = [
    { value: "", label: "전체 분류" },
    { value: "417000", label: "개" },
    { value: "422400", label: "고양이" },
    { value: "429900", label: "기타" },
  ];

  // API에서 시도 목록 가져오기
  const fetchRegions = async () => {
    try {
      const response = await axios.get(
        "http://apis.data.go.kr/1543061/abandonmentPublicSrvc/sido?serviceKey=Kuw7qz9iFZ7XGYZCYQEom6OIemqiDnE3X81FZwzJKlapn9l7WVSxtn9vlw75ae0pwIaGOZ2bc%2FepKIRAJ%2BJQPA%3D%3D",
        {
          params: {
            _type: "json",
          },
        }
      );
      console.log("지역 데이터 호출:", response.data);
      const regionData = response.data.response.body.items.item;
      return regionData.map((region) => ({
        value: region.orgCd,
        label: region.orgdownNm,
      }));
    } catch (error) {
      console.error("Error fetching regions:", error);
      return [];
    }
  };

  // 초기 렌더링 시 지역 목록 가져오기 (한 번만 호출)
  useEffect(() => {
    const loadRegions = async () => {
      const regionOptions = await fetchRegions();
      setRegions([{ value: "", label: "전체 지역" }, ...regionOptions]);
    };

    loadRegions();
  }, []); // 최초 렌더링 시 한 번만 실행

  // 동물 데이터 API 호출 (지역이나 축종 변경 시 호출)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // 데이터 요청 시작 시 로딩 상태 true
      try {
        const response = await axios.get(
          "http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?serviceKey=Kuw7qz9iFZ7XGYZCYQEom6OIemqiDnE3X81FZwzJKlapn9l7WVSxtn9vlw75ae0pwIaGOZ2bc%2FepKIRAJ%2BJQPA%3D%3D",
          {
            params: {
              numOfRows: cardsPerPage * totalPages,
              _type: "json",
              upr_cd: selectedRegion, // 선택 지역
              upkind: selectedType, // 선택 축종
            },
          }
        );
        console.log("동물 데이터 호출:", response.data);

        // 동물 데이터
        if (
          response.data &&
          response.data.response &&
          response.data.response.body &&
          response.data.response.body.items
        ) {
          const animals = response.data.response.body.items.item || [];
          setAnimals(animals);
        } else {
          console.error("Unexpected response structure:", response.data);
          setAnimals([]);
        }
      } catch (error) {
        console.error("Error fetching animals:", error);
      } finally {
        setLoading(false); //데이터 로드 완료 후 로딩상태 끝
      }
    };

    fetchData();
  }, [selectedRegion, selectedType]); // selectedRegion 또는 selectedType이 변경될 때마다 호출

  // 페이지 계산
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = animals.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <div>
      <InfoFilter
        regions={regions}
        types={types}
        onRegionChange={(region) => {
          setSelectedRegion(region);
          setCurrentPage(1); // 지역 변경 시 첫 페이지로 이동
        }}
        onTypeChange={(type) => {
          setSelectedType(type);
          setCurrentPage(1); // 축종 변경 시 첫 페이지로 이동
        }}
      />
      {loading ? (
        <div className="loading-message">로딩 중...</div>
      ) : (
        <>
          <div className="animal-card-list">
            {currentCards.map((animal, index) => (
              <AnimalCard key={index} animal={animal} />
            ))}
          </div>
          <Pagination
            cardsPerPage={cardsPerPage}
            totalCards={animals.length}
            paginate={setCurrentPage}
            currentPage={currentPage}
          />
        </>
      )}
    </div>
  );
}

export default AnimalCardList;
