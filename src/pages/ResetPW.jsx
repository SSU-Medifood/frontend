import '../styles/shared.css'
import '../styles/Login.css'
import '../styles/ForgotPW.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useResetPassword } from '../hooks/useResetPassword'

function ResetPW() {
    const navigate = useNavigate()
    
    const [showPW, setShowPW] = useState(false)
    const [showConfirmPW, setShowConfirmPW] = useState(false)

    const [PW, setPW] = useState("")
    const [confirmPW, setConfirmPW] = useState("")
    const [PWErr, setPWErr] = useState("")

    const handlePWChange = (e) => { 
        const newPW = e.target.value;
        setPW(newPW);
    }

    const handleConfirmPWChange = (e) => {
        setConfirmPW(e.target.value);
        if (e.target.value !== PW) { setPWErr("비밀번호가 일치하지 않습니다."); }
        else { setPWErr("");}
    }

    const resetPassword = useResetPassword()

    const handleSubmit = () => {
        const email = localStorage.getItem('email');

        resetPassword.mutate(
            { email, password: PW },
            {
                onSuccess: () => {
                    localStorage.removeItem('email'); // 사용 후 정리
                    navigate('/login');
                },
                onError: () => {
                    alert("비밀번호 변경에 실패했습니다.");
                }
            }
        );
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

                {/* <div className="shared-wrapper">
                    <p className="error-text">영어+숫자 8자리 이상으로 입력해주세요.</p>
                </div> */}

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

                {PWErr && <p className="error-text">{PWErr}</p>}
            </form>

            <button className="next-step-button" onClick={handleSubmit}>
                비밀번호 변경
            </button>
        </div>
    )
}
  
export default ResetPW
