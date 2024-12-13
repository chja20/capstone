import React, { useState } from 'react';
import axios from 'axios';
import './styles/FAQ.css';

// 자주 묻는 질문 데이터
const FAQData = [
    { question: "유기동물은 어디에서 입양할 수 있나요?", answer: "유기동물은 지방자치단체 동물보호소, 사설 보호소, 또는 동물보호 단체에서 입양할 수 있습니다." },
    { question: "유기동물이 발견되었을 때 어떻게 해야 하나요?", answer: "동물과 본인의 안전을 우선으로 생각하고, 동물이 다치거나 위험한 상태라면 다가가지 않습니다." },
    { question: "유기동물 입양 전에 무엇을 준비해야 하나요?", answer: "가족 동의, 시간과 책임감, 생활 환경 점검, 재정 준비교육 계획 등이 필요합니다." },
    { question: "유기동물과의 생활에서 주의할 점은 무엇인가요?", answer: "유기동물 생활 중에는 적응 기간, 건강 관리, 행동 문제, 사랑과 관심 등이 주의사항입니다." },
];

// FAQ 컴포넌트
const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    // 질문 및 답변 토글
    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    // 챗봇 메시지 처리
    const handleSend = async () => {
        if (!input) return;

        setMessages((prev) => [...prev, { role: 'user', content: input }]);

        try {
            const response = await axios.post('http://localhost:5001/api/chat', {
                message: input,
            });
            setMessages((prev) => [
                ...prev,
                { role: 'bot', content: response.data.reply },
            ]);
        } catch (error) {
            console.error("Error communicating with the chatbot:", error);
            setMessages((prev) => [
                ...prev,
                { role: 'bot', content: "챗봇과 통신 중 문제가 발생했습니다." },
            ]);
        }

        setInput('');
    };

    return (
        <div className="faq-container">
            <h1 className="faq-header">고객센터</h1>
            <p className="faq-text">도움이 필요하신가요? 자주 묻는 질문을 확인해보세요.</p>

            <div className="faq-main">
                {/* 자주 묻는 질문 리스트 */}
                <div className="faq-list">
                    {FAQData.map((item, index) => (
                        <div key={index} className="faq-item">
                            <div
                                className="faq-question"
                                onClick={() => toggleAnswer(index)}
                            >
                                <h3>{item.question}</h3>
                                <span className="toggle-icon">
                                    {activeIndex === index ? '-' : '+'}
                                </span>
                            </div>
                            {activeIndex === index && (
                                <div className="faq-answer">
                                    <p>{item.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                
                    <div className="chat-container">
                        <div className="messages">
                            {messages.map((msg, index) => (
                                <div key={index} className={msg.role}>
                                    {msg.content}
                                </div>
                            ))}
                        </div>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="챗봇에 질문을 입력하세요..."
                        />
                        <button onClick={handleSend}>Send</button>
                    </div>
            
            </div>
        </div>
    );
};

export default FAQ;
