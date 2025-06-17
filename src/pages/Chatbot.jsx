import ReactMarkdown from 'react-markdown'
import '../styles/shared.css'
import '../styles/Chatbot.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSuggestedQuestions } from '../hooks/useSuggestedQuestions'
import { streamChatResponse } from '../api/chatStream'
import Navbar from '../components/Navbar'

function Chatbot() {
    const navigate = useNavigate()

    // 챗봇 대화 내역을 담는 배열로 처음에는 인사가 나온다.
    const [messages, setMessages] = useState([
        { sender: 'bot', text: '안녕하세요! 무엇을 도와드릴까요?' }
    ])

    const [showSuggestions, setShowSuggestions] = useState(true)
    const { data: suggestedQuestions = [], isLoading, isError } = useSuggestedQuestions()

    // 사용자가 입력한 텍스트의 상태
    const [input, setInput] = useState('')
    
    // 스트리밍 중 상태
    const [isStreaming, setIsStreaming] = useState(false)

    // 추천 질문 클릭 핸들러
    const handleSuggestionClick = (question) => {
        if (isStreaming) return

        const userMessage = { sender: 'user', text: question }
        setMessages(prev => [...prev, userMessage])
        setShowSuggestions(false)
        setInput('')

        handleStreamResponse(question)
    }

    // 스트리밍 챗 응답 처리 함수
    const handleStreamResponse = async (question) => {
        setIsStreaming(true)

        let botMessage = { sender: 'bot', text: '' }
        setMessages(prev => [...prev, botMessage]) // 빈 봇 메시지 추가

        const onChunk = (text) => {
            const chunk = text.trim() === '' ? '\n' : text // 빈 text는 줄바꿈으로 간주
            botMessage.text += chunk
            setMessages(prev => {
                const newMessages = [...prev]
                newMessages[newMessages.length - 1] = { ...botMessage }
                return newMessages
            })
        }

        try {
            await streamChatResponse(question, onChunk)
        } catch (e) {
            onChunk('\n[오류 발생]')
        }

        setIsStreaming(false)
    }

    // 전송 버튼 또는 Enter 핸들러
    const handleSend = () => {
        if (!input.trim() || isStreaming) return

        const userMessage = { sender: 'user', text: input }
        setMessages(prev => [...prev, userMessage])
        setShowSuggestions(false)

        handleStreamResponse(input)
        setInput('')
    }

    const handleKeyDown = (e) => { if (e.key === 'Enter') handleSend() }

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
                            {msg.sender === 'bot' ? (
                                <ReactMarkdown>{msg.text}</ReactMarkdown>
                            ) : (
                                msg.text
                            )}
                        </div>
                    ))}
                    {/* 추천 질문 박스 */}
                    {showSuggestions && (
                        <div className="suggestion-box">
                            {suggestedQuestions.map((q) => (
                                <div
                                    key={q.id}
                                    className="suggestion-item"
                                    onClick={() => handleSuggestionClick(q.question)}
                                >
                                    {q.question}
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
                        disabled={isStreaming}
                    />
                    <button onClick={handleSend} disabled={isStreaming}>⬆</button>
                </div>
            </div>
            <Navbar />
        </>
    )
}

export default Chatbot