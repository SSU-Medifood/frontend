import '../styles/shared.css'
import '../styles/Login.css'
import '../styles/ForgotPW.css'
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import TermsAgreement from "../components/TermsAgreement"

function HealthInfo() {
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [birth, setBirth] = useState("")
    const [email, setEmail] = useState("")
    const [code, setCode] = useState("")        // 인증코드는 문자열(영어어)
    const [agree, setAgree] = useState(false)

    const isValid = name.trim() !== "" && birth.length === 8 && email.trim() !== "" && code.trim() !== "" && agree

    return (
        <div className="shared-container">
            <div className="shared-header">
                <h2 className="shared-title">건강 정보 입력하기 (1/3)</h2>
            </div>

            <form className="forgot-PW-content">
                <label className="input-label">이름</label>
                <input 
                    type="text" placeholder="예) 홍길동" className="input-field" value={name} 
                    onChange={(e) => setName(e.target.value)}
                />

                <label className="input-label">생년월일 8자리</label>
                <input 
                    type="number" placeholder="예) YYYYMMDD" className="input-field" value={birth} 
                    onChange={(e) => { const value = e.target.value.slice(0, 8); setBirth(value); }}
                />

                <label className="input-label">이메일</label>
                <input 
                    type="email" placeholder="이메일" className="input-field" value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <div className="shared-wrapper">
                    <p className="error-text">가입하지 않은 이메일입니다.</p>
                    <button className="verify-button">인증하기</button>
                    {/* <button className="resend-button">재전송</button> */}
                </div>

                <label className="input-label">인증번호</label>
                <input 
                    type="text" placeholder="인증번호 6자리" className="input-field" value={code}
                    onChange={(e) => setCode(e.target.value)}
                />
                <p className="error-text">인증번호가 일치하지 않습니다.</p>
            </form>

            <TermsAgreement onAgree={setAgree} />

            <button 
                className={`next-step-button ${isValid ? "" : "disabled"}`} 
                disabled={!isValid} 
                onClick={() => navigate('/health-information2')}
            >
                다음
            </button>
            
        </div>
    )
}
  
export default HealthInfo