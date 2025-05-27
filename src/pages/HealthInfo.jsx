import '../styles/shared.css'
import '../styles/Login.css'
import '../styles/ForgotPW.css'
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import TermsAgreement from "../components/TermsAgreement"
import { useEmailAuth } from "../hooks/useEmailAuth"

function HealthInfo() {
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [birth, setBirth] = useState("")
    const [email, setEmail] = useState("")
    const [code, setCode] = useState("")        // 인증코드는 문자열(영어)
    const [agree, setAgree] = useState(false)   // fetch할 때 marketing : true 이렇게 들어감

    const [emailErr, setEmailErr] = useState(" ")
    const [codeErr, setCodeErr] = useState(" ")

    const isValid = name.trim() !== "" && birth.length === 8 && email.trim() !== "" && code.trim() !== "" && agree

    const { requestAuthCode, isLoading } = useEmailAuth()

    // 이메일 인증 요청 함수
    const handleEmailVerification = (e) => {
        e.preventDefault();
        const storedEmail = localStorage.getItem("email");

        // 입력된 이메일과 저장된 이메일이 일치하는지 확인
        if (storedEmail !== email.trim()) { 
            setEmailErr("가입하지 않은 이메일입니다."); 
            return; // 이메일이 일치하지 않으면 API 요청을 보내지 않도록 한다.
        }

        setEmailErr(" "); // 에러 메시지 초기화
        requestAuthCode(email);
    }

    // 인증 코드 확인 함수
    const handleCodeVerification = () => {
        const storedCode = localStorage.getItem("authCode");
    
        if (storedCode !== code.trim()) {
            setCodeErr("인증번호가 일치하지 않습니다.");
            return false; // 인증 실패
        }
        
        setCodeErr(" ");
        return true; // 인증 성공
    }

    // 다음 버튼 클릭할 때 인증 코드 확인
    const handleNext = () => {
        const isCodeValid = handleCodeVerification();
    
        if (isCodeValid) {
            localStorage.setItem("name", name.trim());
            localStorage.setItem("birth", birth.trim());

            localStorage.removeItem("authCode");
            navigate('/health-information2');
        }
    };

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
                    {emailErr && <p className="error-text">{emailErr}</p>}
                    <button className="verify-button" onClick={handleEmailVerification}>인증하기</button>
                    {/* <button className="resend-button">재전송</button> */}
                </div>

                <label className="input-label">인증번호</label>
                <input 
                    type="text" placeholder="인증번호 6자리" className="input-field" value={code}
                    onChange={(e) => setCode(e.target.value)}
                />
                {codeErr && <p className="error-text">{codeErr}</p>}
            </form>

            <TermsAgreement onAgree={setAgree} />

            <button 
                className={`next-step-button ${isValid ? "" : "disabled"}`} 
                disabled={!isValid} 
                onClick={handleNext}
            >
                다음
            </button>
            
        </div>
    )
}
  
export default HealthInfo