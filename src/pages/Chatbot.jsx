import '../styles/shared.css'
import '../styles/Chatbot.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Chatbot() {
    const navigate = useNavigate()

    // 챗봇 대화 내역을 담는 배열로 처음에는 인사가 나온다.
    const [messages, setMessages] = useState([
        { sender: 'bot', text: '안녕하세요! 무엇을 도와드릴까요?' }
    ])

    const [showSuggestions, setShowSuggestions] = useState(true)
    const suggestedQuestions = [
        "당뇨에는 무슨 음식이 좋을까?",
        "생리통에 좋은 음식 알려줘",
        "부담스럽지 않은 야식 추천해줘"
    ]

    // 사용자가 입력한 텍스트의 상태
    const [input, setInput] = useState('')

    // 추천 질문 클릭 핸들러
    const handleSuggestionClick = (question) => {
        const userMessage = { sender: 'user', text: question };
        const botReply = { sender: 'bot', text: `(${question})에 대한 임시 응답입니다.` };

        setMessages((prev) => [...prev, userMessage, botReply]);
        setShowSuggestions(false);
    }

    // 전송 버튼 또는 Enter 핸들러
    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage = { sender: 'user', text: input };
        const botReply = { sender: 'bot', text: `사용자 입력: ${input}` }; 

        setMessages((prev) => [...prev, userMessage, botReply]);
        setInput('');
        setShowSuggestions(false);
    }
    const handleKeyDown = (e) => { if (e.key === 'Enter') handleSend(); }

    return (
        <>
            <div className="chatbot-container">
                <div className="chatbot-header">
                    <img 
                        src="/images/shared/arrow-back.svg"
                        alt="뒤로가기" 
                        className="shared-back"
                        onClick={() => navigate(-1)}
                    />
                    <h2 className="chatbot-title">MEFO</h2>
                </div>

                {/* 대화창 */}
                <div className="chat-window">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`chat-message ${msg.sender}`}>
                            {msg.text}
                        </div>
                    ))}
                    {/* 추천 질문 박스 */}
                    {showSuggestions && (
                        <div className="suggestion-box">
                            {suggestedQuestions.map((q, idx) => (
                                <div
                                    key={idx}
                                    className="suggestion-item"
                                    onClick={() => handleSuggestionClick(q)}
                                >
                                    {q}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* 입력창 */}
                <div className="chat-input">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="무엇이든 물어보세요"
                    />
                    <button onClick={handleSend}>⬆</button>
                </div>
            </div>
            <Navbar />
        </>
    )
}

export default Chatbot