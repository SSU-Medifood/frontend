import '../styles/shared.css'
import '../styles/Login.css'
import '../styles/Signup.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '/images/logo/logo-black.svg'
import check from '/images/signup/check.svg'
import { useCheckEmail } from '../hooks/useCheckEmail'

function Signup() {
    const navigate = useNavigate()

    /* 중복 확인 */
    const [isChecked, setIsChecked] = useState(false)
    const [email, setEmail] = useState("")
    const [showPWFields, setShowPWFields] = useState(false)

    const { mutate: checkEmail, isLoading } = useCheckEmail()
    const [emailErr, setEmailErr] = useState("")

    const handleCheckEmail = (e) => {
        e.preventDefault();
        setEmailErr(""); // 기존 에러 지우기

        if (!email.trim()) {
            setEmailErr("이메일을 입력해주세요.");
            return;
        }

        checkEmail(email, {
            onSuccess: (available) => {
              if (available) {
                setIsChecked(true);
                setShowPWFields(true);
                console.log("✅ 연결 성공: 응답 값:", available);
              } else {
                setEmailErr("이미 가입된 이메일입니다.");
              }
            },
            onError: (error) => {
              setEmailErr("서버 오류가 발생했습니다.");
              console.error("❌ 연결 실패: 서버가 죽었거나 주소가 틀림", error);
            }
        });
    }

    /* 비밀번호 보기, 확인 */
    const [showPW, setShowPW] = useState(false)
    const [showConfirmPW, setShowConfirmPW] = useState(false)

    const [PW, setPW] = useState("")
    const [confirmPW, setConfirmPW] = useState("")
    const [PWErr, setPWErr] = useState("")

    const handlePWChange = (e) => { setPW(e.target.value); }

    const handleConfirmPWChange = (e) => {
        setConfirmPW(e.target.value);
        if (e.target.value !== PW) { setPWErr("비밀번호가 일치하지 않습니다."); }
        else { setPWErr("");}
    }

    return (
        <div className="shared-container">
            <img src={logo} alt="logo-black" className="signup-logo" />
            <p className="signup-text">건강 관리를 시작하려면 가입하세요.</p>

            {!showPWFields ? (
                <form className="login-content" onSubmit={handleCheckEmail}>
                    <div className="PW-content">
                        <input 
                            type="email" 
                            placeholder="이메일" 
                            className="input-field"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <img 
                            src={check} 
                            alt="중복확인" 
                            className={`valid-check ${isChecked ? 'show' : ''}`}
                        />
                    </div>

                    <div className="shared-wrapper">
                        <p className="error-text">{emailErr ? emailErr : ""}</p>
                        <button type="submit" className="valid-button">중복확인</button>
                    </div>
                </form>
            ) : (
                <form className="login-content">
                    <div className="PW-content">
                        <input type="email" className="input-field" value={email} readOnly />
                        <img 
                            src={check} 
                            alt="중복확인" 
                            className={`valid-check ${isChecked ? 'show' : ''}`}
                        />
                    </div>

                    <div className="PW-content">
                        <input
                            type={showPW? 'text' : 'password'}
                            placeholder="비밀번호"
                            className="input-field"
                            value={PW}
                            onChange={handlePWChange}
                        />
                        <img 
                            src={showPW ? "/images/login/eye-on.svg" : "/images/login/eye-off.svg"} 
                            alt="비밀번호 토글" 
                            className="PW-toggle" 
                            onClick={() => setShowPW(!showPW)}
                        />
                    </div>

                    {/* <div className="shared-wrapper">
                        <p className="error-text">영어+숫자 8자리 이상으로 입력해주세요.</p>
                    </div> */}

                    <div className="PW-content">
                        <input
                            type={showConfirmPW? 'text' : 'password'}
                            placeholder="비밀번호 확인"
                            className="input-field"
                            value={confirmPW}
                            onChange={handleConfirmPWChange}
                        />
                        <img 
                            src={showConfirmPW ? "/images/login/eye-on.svg" : "/images/login/eye-off.svg"} 
                            alt="비밀번호 확인 토글" 
                            className="PW-toggle" 
                            onClick={() => setShowConfirmPW(!showConfirmPW)}
                        />
                    </div>

                    {PWErr && <p className="error-text">{PWErr}</p>}

                    <button className="login-button" onClick={() => navigate('/health-information1')}>가입하기</button>
                </form>
            )}

            <p className="login-signup-text">
                계정이 있으신가요? <span className="login-signup-link" onClick={() => navigate('/login')}>로그인</span>
            </p>
        </div>
    )
}
  
export default Signup