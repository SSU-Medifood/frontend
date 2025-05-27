import '../styles/shared.css'
import '../styles/Login.css'
import '../styles/ForgotPW.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCheckEmail } from '../hooks/useCheckEmail'
import { useEmailAuth } from '../hooks/useEmailAuth'

function ForgotPW() {
    const navigate = useNavigate()

    /* 중복 확인 */
    const [email, setEmail] = useState("")
    const [emailErr, setEmailErr] = useState("")
    const [code, setCode] = useState("")        // 인증코드는 문자열(영어)
    const [codeErr, setCodeErr] = useState(" ")

    const { mutate: checkEmail } = useCheckEmail()
    const { requestAuthCode } = useEmailAuth()

    const handleEmailVerification = (e) => {
        e.preventDefault();
        setEmailErr(""); // 기존 에러 지우기
        setCodeErr("");

        if (!email.trim()) {
            setEmailErr("이메일을 입력해주세요.");
            return;
        }

        checkEmail(email, {
            onSuccess: (available) => {
                if (!available) {
                    // console.log("✅ 연결 성공: 응답 값:", available);
                    // 로컬 스토리지에 이메일 저장
                    localStorage.setItem("email", email);

                    // 인증 코드 요청
                    requestAuthCode(email);
                } else {
                    setEmailErr("가입되지 않은 이메일입니다.");
                }
            },
            onError: (error) => {
                setEmailErr("서버 오류가 발생했습니다.");
                // console.error("❌ 연결 실패: 서버가 죽었거나 주소가 틀림", error);
            }
        });
    }

    // 인증 코드 확인 함수
    const handleCodeVerification = () => {
        const storedCode = localStorage.getItem("authCode");
    
        if (storedCode !== code.trim()) {
            setCodeErr("인증번호가 일치하지 않습니다.");
            return false;
        }
        
        setCodeErr(" ");
        localStorage.removeItem("authCode");
        navigate('/reset-password');
        return true; // 인증 성공
    }

    return (
        <div className="shared-container">
            <div className="shared-header">
                <img 
                    src="/images/shared/arrow-back.svg"
                    alt="뒤로가기" 
                    className="shared-back"
                    onClick={() => navigate(-1)}
                />
                <h2 className="shared-title">비밀번호 재설정</h2>
            </div>

            <form className="forgot-PW-content" onSubmit={handleEmailVerification}>
                <label className="input-label">가입한 이메일을 입력해주세요</label>
                <input 
                    type="email" 
                    placeholder="이메일" 
                    className="input-field" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <div className="shared-wrapper">
                    <p className="error-text">{emailErr}</p>
                    <button className="verify-button">인증하기</button>
                    {/* <button className="resend-button">재전송</button> */}
                </div>

                <label className="input-label">인증번호</label>
                <input 
                    type="text" placeholder="인증번호 6자리" className="input-field" 
                    value={code} onChange={(e) => setCode(e.target.value)}
                />

                <p className="error-text">{codeErr}</p>
            </form>

            <button className="next-step-button" onClick={handleCodeVerification}>
                다음
            </button>
        </div>
    )
}

export default ForgotPW