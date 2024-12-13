// src/App.js
import React, { useState } from 'react';
import './styles/TestPage.css';
import Modal from './Modal';

function TestPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [petType, setPetType] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [recommendations, setRecommendation] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const initialQuestion = {
    question: "키우고 싶은 반려동물의 종류는?",
    options: ["강아지", "고양이"],
  };

  const dogQuestions = [
    {
      question: "강아지를 키운다면 어떤 크기의 강아지를 원하시나요?",
      options: ["소형견", "중형견", "대형견", "상관 없음"],
    },
    {
      question: "강아지의 활동량은 얼마나 중요하신가요?",
      options: ["매우 중요", "보통", "상관 없음"],
    },
    {
      question: "가족 구성원 수는?",
      options: ["1인", "2인", "3인", "4인 이상"],
    },
    {
      question: "현재 거주지의 형태는?",
      options: ["아파트/빌라", "오피스텔/단독주택", "실외 및 상업공간"],
    },
    {
      question: "반려견을 키워본 경험은?",
      options: ["있다.", "없다."],
    },
    {
      question: "하루에 반려견이 혼자있는 시간은?",
      options: ["2시간 이하", "2~6시간", "6시간 이상"],
    },
    {
      question: "반려견의 털빠짐이 걱정 되시나요",
      options: ["걱정된다.", "걱정되지 않는다."],
    },
    {
      question: "원하는 반려견의 털색은?",
      options: ["흰색", "검정색", "황색", "상관 없음"],
    },
    {
      question: "원하는 반려동물의 성격은?",
      options: ["활발하고 밝은 아이", "얌전하고 독립적인 아이"],
    },
    {
      question: "반려견을 키우고 싶은 이유는?",
      options: ["동물을 좋아해서", "외로워서", "아이가 키우고 싶어해서", "정서적 지원을 위해서"],
    },
  ];

  const catQuestions = [
    {
      question: "가족 구성원 수는?",
      options: ["1인", "2인", "3인", "4인 이상"],
    },
    {
      question: "현재 거주지의 형태는?",
      options: ["아파트/빌라", "오피스텔/단독주택", "실외 및 상업공간"],
    },
    {
      question: "반려묘를 키워본 경험은?",
      options: ["있다.", "없다."],
    },
    {
      question: "하루에 반려묘가 혼자있는 시간은?",
      options: ["2시간 이하", "2~6시간", "6시간 이상"],
    },
    {
      question: "반려묘의 털빠짐이 걱정 되시나요",
      options: ["걱정된다.", "걱정되지 않는다."],
    },
    {
      question: "원하는 반려묘의 털색은?",
      options: ["흰색", "검정색", "황색", "상관 없음"],
    },
    {
      question: "원하는 반려동물의 성격은?",
      options: ["활발하고 밝은 아이", "얌전하고 독립적인 아이"],
    },
    {
      question: "집에 고양이가 뛰어놀 수 있는 공간이 충분한가요?",
      options: ["넓은 공간이 있다.", "적당한 공간이 있다.", "좁은 공간에서 생활한다."],
    },
    {
      question: "본인 또는 가족 중에 고양이 알레르기가 있는 사람이 있나요?",
      options: ["있다.", "없다."],
    },
    {
      question: "반려묘을 키우고 싶은 이유는?",
      options: ["동물을 좋아해서", "외로워서", "아이가 키우고 싶어해서", "정서적 지원을 위해서"],
    },
  ];

  const getCurrentQuestions = () => {
    if (petType === "강아지") return dogQuestions;
    else if (petType === "고양이") return catQuestions;
    return [];
  };

  const handleOptionClick = (option) => {
    if (currentQuestion === 0 && !petType) {
      setPetType(option);
      setCurrentQuestion(1);
    } else {
      const questions = getCurrentQuestions();
      setAnswers([...answers, option]); 
      if (currentQuestion < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        generateRecommendations();
      }
    }
  };

  const petData = {
    "비숑 프리제": { name: "비숑 프리제", image: "https://images.mypetlife.co.kr/content/uploads/2017/12/09160633/Dognews-1-780x470.jpg" },
    "토이 푸들": { name: "토이 푸들", image: "https://image.kmib.co.kr/online_image/2022/1023/2022102113444970898_1666327489_0017592082.jpg" },
    "포메라니안": { name: "포메라니안", image: "https://i.namu.wiki/i/7IJj6iEgr4a41vfl5vOyUGtHAoC2ZQZABnuNua26JeAXjThMcrjJuul8E0CWmAfVB_m_8e535REXuU47IxU2Cg.webp" },
    "말티즈": { name: "말티즈", image: "https://yt3.googleusercontent.com/b_9EipIlhBtnwKayzvdjm8uUuRMte0qhUif5WpazM-EvmTmNEhR6u2UPvnRDjSwvw6-I1INO9Q=s900-c-k-c0x00ffffff-no-rj" },
    "시츄": { name: "시츄", image: "https://cdn.imweb.me/upload/S2022072526fea20386fa4/78b8b4a628495.png" },
    "치와와": { name: "치와와", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ4qOxryeNBlVYubpRT2vTJkfP8pqZoCR6ew&s" },
    "보더 콜리": { name: "보더 콜리", image: "https://images.mypetlife.co.kr/content/uploads/2023/11/27170717/AdobeStock_306960579-scaled.jpeg" },
    "코커 스패니얼": { name: "코커 스패니얼", image: "https://blog.kakaocdn.net/dn/p8FsQ/btrinBBQ5lz/wyX0DcW5bzpUPqx1ZqToPk/img.jpg" },
    "셰퍼드": { name: "셰퍼드", image: "https://img.segye.com/content/image/2017/07/31/20170731513009.jpg" },
    "불독": { name: "불독", image: "https://www.dailyonehealth.com/news/photo/202407/3317_4684_140.jpg" },
    "비글": { name: "비글", image: "https://cdn.royalcanin-weshare-online.io/Sz997XoBRYZmsWpc6reF/v3/bp-lot-2-beagle-couleur-activity" },
    "슈나우저": { name: "슈나우저", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSGE5ILrAxBgmQTi-kEnniv6AqnZiVDd02_A&s" },
    "래브라도 리트리버": { name: "래브라도 리트리버", image: "https://res.heraldm.com/content/image/2015/05/11/20150511001274_0.jpg" },
    "골든 리트리버": { name: "골든 리트리버", image: "https://blog.malcang.com/wp-content/uploads/2024/05/Golden_Retriever_Features_742e159d-6dee-44bf-830b-91bfba568f56.png.jpeg" },
    "그레이트 데인": { name: "그레이트 데인", image: "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/4arX/image/6LOxEmYD8iUPePoHXkiTTOZuEFU.jpg" },
    "세인트 버나드": { name: "세인트 버나드", image: "https://mblogthumb-phinf.pstatic.net/MjAyMzA0MjVfNjAg/MDAxNjgyNDAwNjQxMTE2.ISxKsuPIb7b3KCKXMYmxHcLmyEoJB5X4LEiK5ZdhhVkg.T9924nJUC64m9u-mNbSuKdQBsAGX-gVapOLfQzXewWQg.JPEG.skyuiop77/IMB_eUcUKt.jpg?type=w800" },
    "아키타": { name: "아키타", image: "https://i.namu.wiki/i/_wJjBrhIbPeeYbFJ3Un5zemLMM1JOeDWvFjOiFFfKX28JWyB195fyYDqae0-pWB2Ao5axUGt9GuQzrV8sbulwQ.webp" },
    "프렌치 불독": { name: "프렌치 불독", image: "https://i.namu.wiki/i/yRpa1qv1lcI2PhefBPYGaBHxCReUOFUHDdeRLrsRHYIWFwE48dgw0BJo2xrWkolVNl3t3Wwp42ncivXRXLytdA.webp" },
    "푸들": { name: "푸들", image: "https://images.mypetlife.co.kr/content/uploads/2022/08/10153702/steven-van-elk-1OnbCf7AOdY-unsplash-scaled.jpg" },
    "벵갈": { name: "벵갈", image: "https://cdn.royalcanin-weshare-online.io/BlZa8XoBBKJuub5qOro1/v5/bp-lot-2-bengal-couleur-activity" },
    "아비시니안": { name: "아비시니안", image: "https://i.namu.wiki/i/iRocsGh4ASP-ldZ16hqd4XNdAT6yxI5C6ZgmIcV9drEmMb_7ZnlEEsOnSpf4p_5a7wGh-RRXDnWMqLggG2LwsA.webp" },
    "시암": { name: "시암", image: "https://i.namu.wiki/i/AVziolKe4XieglDAPF-JKKsN6hlIyROKD4zpU4PwPihwm4hQicp8ICrfr1T4xdubdhH57DuMjGNKikGPC3bVEg.webp" },
    "스핑크스": { name: "스핑크스", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Cat_-_Sphynx._img_078.jpg/250px-Cat_-_Sphynx._img_078.jpg" },
    "러시안 블루": { name: "러시안 블루", image: "https://i.namu.wiki/i/bK2MNpkNE_rxpbqv8mdQq1hHGMv2YT6Rv16PXpf1xbdMn5vQLLrxFF-P46JgSvqPv-DfUkF1FyrCNXBA29sdhw.webp" },
    "브리티시 숏헤어": { name: "브리티시 숏헤어", image: "https://cdn.animaltoc.com/news/photo/202311/421_2075_4447.jpg" },
    "페르시안": { name: "페르시안", image: "https://mblogthumb-phinf.pstatic.net/MjAyMzA0MjlfMTI5/MDAxNjgyNjk5Nzk2MDcx.sv0I78d9i4e6h19xrQl_xlhwfIRzkGZ2NIlnttre4Hwg.HDfxHP0olRWN0OYRjBPUPP7ZDnL80ovVT3E1-R_Ds7Ag.JPEG.hj12165445/%ED%8E%98%EB%A5%B4%EC%8B%9C%EC%95%88%EA%B3%A0%EC%96%91%EC%9D%B4.jpg?type=w800" },
    "랙돌": { name: "랙돌", image: "https://modo-phinf.pstatic.net/20200726_272/1595757533947Min0r_JPEG/mosaIKROGc.jpeg?type=w1100" },
    "메인쿤": { name: "메인쿤", image: "https://img.danawa.com/images/descFiles/6/248/5247832_0iDLQIgVHv_1674003613416.jpeg" },
    "코니시 렉스": { name: "코니시 렉스", image: "https://media.istockphoto.com/id/510071000/ko/%EC%82%AC%EC%A7%84/%EB%91%90-%EC%BD%94%EB%8B%88%EC%8B%9C-rex-%EA%B3%A0%EC%96%91%EC%9D%B4-7-%EA%B0%9C%EC%9B%94-%ED%9C%B4%EC%8B%9D.jpg?s=1024x1024&w=is&k=20&c=gl80GfgIKH3NrPhfaIU3QG03x1gnhpNp22hh6qmGK4g=" },
    "스코티시 폴드": { name: "스코티시 폴드", image: "https://blog.malcang.com/wp-content/uploads/2024/02/1-1.png" },
    "노르웨이 숲": { name: "노르웨이 숲", image: "https://img.freepik.com/premium-photo/norwegian-forest-cat_87557-24692.jpg" }
  };

  const generateRecommendations = () => {

    let recommendationName = "";

    if (petType === "강아지") {
      if (answers.includes("소형견")) {
        if (answers.includes("활발하고 밝은 아이")) {
          if (answers.includes("2시간 이하")) recommendationName = "비숑 프리제";
          else if (answers.includes("6시간 이상")) recommendationName = "토이 푸들";
          else recommendationName = "포메라니안";
        } else if (answers.includes("얌전하고 독립적인 아이")) {
          if (answers.includes("아파트/빌라")) recommendationName = "말티즈";
          else recommendationName = "시츄";
        } else {
          recommendationName = "치와와";
        }
      }

      if (answers.includes("중형견")) {
        if (answers.includes("활동량 중요")) {
          if (answers.includes("4인 이상")) recommendationName = "보더 콜리";
          else if (answers.includes("1인")) recommendationName = "코커 스패니얼";
          else recommendationName = "셰퍼드";
        } else if (answers.includes("얌전하고 독립적인 아이")) {
          if (answers.includes("2~6시간")) recommendationName = "불독";
          else recommendationName = "비글";
        } else {
          recommendationName = "슈나우저";
        }
      }

      if (answers.includes("대형견")) {
        if (answers.includes("활발하고 밝은 아이")) {
          if (answers.includes("단독주택")) recommendationName = "래브라도 리트리버";
          else if (answers.includes("상관 없음")) recommendationName = "골든 리트리버";
        } else if (answers.includes("얌전하고 독립적인 아이")) {
          if (answers.includes("6시간 이상")) recommendationName = "그레이트 데인";
          else recommendationName = "세인트 버나드";
        } else {
          recommendationName = "아키타";
        }
      }

      if (answers.includes("1인") && recommendationName === "") {
        recommendationName = "프렌치 불독";
      } else if (answers.includes("4인 이상") && recommendationName === "") {
        recommendationName = "래브라도 리트리버";
      }

      if (answers.includes("털빠짐 걱정된다.") && recommendationName === "") {
        recommendationName = "푸들";
      }
    }

    if (petType === "고양이") {
      if (answers.includes("활발하고 밝은 아이")) {
        if (answers.includes("넓은 공간이 있다.")) {
          if (answers.includes("2시간 이하")) recommendationName = "벵갈";
          else recommendationName = "아비시니안";
        } else if (answers.includes("적당한 공간이 있다.")) {
          recommendationName = "시암";
        } else {
          recommendationName = "스핑크스";
        }
      } else if (answers.includes("얌전하고 독립적인 아이")) {
        if (answers.includes("좁은 공간에서 생활한다.") && answers.includes("없다.")) {
          recommendationName = "러시안 블루";
        } else if (answers.includes("적당한 공간이 있다.") && answers.includes("아파트/빌라")) {
          recommendationName = "브리티시 숏헤어";
        } else {
          recommendationName = "페르시안";
        }
      }

      if (answers.includes("6시간 이상") && recommendationName === "") {
        recommendationName = "랙돌";
      } else if (answers.includes("2시간 이하") && recommendationName === "") {
        recommendationName = "메인쿤";
      }

      if (answers.includes("털빠짐 걱정된다.") && recommendationName === "") {
        recommendationName = "코니시 렉스";
      }

   
      if (answers.includes("1인") && recommendationName === "") {
        recommendationName = "스코티시 폴드";
      } else if (answers.includes("4인 이상") && recommendationName === "") {
        recommendationName = "노르웨이 숲";
      }
    }


    setRecommendation(petData[recommendationName]);
    setShowModal(true); 
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setPetType(null);
    setAnswers([]);
    setRecommendation(null);
    setShowModal(false);
  };
  return (
    <div className="PetContainer">
      <header className="PetHeader">
        <div className="PetLogo">로고</div>
      </header>

      <div className="PetContent">
        <div className="PetIconWrapper">
          <div className="PetIconCircle">
            <img
              src="https://cdn-icons-png.flaticon.com/512/8817/8817973.png"
              alt="Icon"
              className="PetIconImage"
            />
          </div>
        </div>

        <div className="PetQuestionBox">
          <div className="PetProgressIndicator">
            {petType === null
              ? "나에게 맞는 애완동물은 어떤걸까??"
              : `${currentQuestion} / ${getCurrentQuestions().length}`}
          </div>

          <div className="PetQuestionText">
            {currentQuestion === 0 && !petType
              ? initialQuestion.question
              : getCurrentQuestions()[currentQuestion - 1]?.question}
          </div>

          <div className="PetOptionsContainer">
            {currentQuestion === 0 && !petType
              ? initialQuestion.options.map((option, index) => (
                <button
                  key={index}
                  className="PetOptionButton"
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </button>
              ))
              : getCurrentQuestions()[currentQuestion - 1]?.options.map(
                (option, index) => (
                  <button
                    key={index}
                    className="PetOptionButton"
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </button>
                )
              )}
          </div>
        </div>

        {showModal && (
          <Modal
            recommendation={recommendations}
            onClose={closeModal}
            onRestart={handleRestart}
          />
        )}
      </div>
    </div>

  );
}

export default TestPage;

