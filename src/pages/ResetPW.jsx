import '../styles/shared.css'
import '../styles/Login.css'
import '../styles/ForgotPW.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ResetPW() {
    const navigate = useNavigate()
    const [showPW, setShowPW] = useState(false)
    const [showConfirmPW, setShowConfirmPW] = useState(false)

    const [PW, setPW] = useState("")
    const [confirmPW, setConfirmPW] = useState("")
    const [ErrMsg, setErrMsg] = useState("")

    const handlePWChange = (e) => { setPW(e.target.value); }

    const handleConfirmPWChange = (e) => {
        setConfirmPW(e.target.value);
        if (e.target.value !== PW) { setErrMsg("비밀번호가 일치하지 않습니다."); }
        else { setErrMsg("");}
    }

    return (
        <div className="shared-container">
            <div className="shared-header">
                <h2 className="shared-title">비밀번호 재설정</h2>
            </div>

            <form className="forgot-PW-content">
                <label className="input-label">새로운 비밀번호를 입력해주세요</label>

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

                <div className="shared-wrapper">
                    <p className="error-text">영어+숫자 8자리 이상으로 입력해주세요.</p>
                </div>

                <label className="input-label">비밀번호 확인</label>

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
                        alt="비밀번호 토글" 
                        className="PW-toggle" 
                        onClick={() => setShowConfirmPW(!showConfirmPW)}
                    />
                </div>

                {ErrMsg && <p className="error-text">{ErrMsg}</p>}
            </form>

            <button className="next-step-button" onClick={() => navigate('/login')}>
                비밀번호 변경
            </button>
        </div>
    )
}
  
export default ResetPW
