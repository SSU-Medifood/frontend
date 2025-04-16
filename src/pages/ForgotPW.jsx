import '../styles/shared.css'
import '../styles/Login.css'
import '../styles/ForgotPW.css'
import { useNavigate } from 'react-router-dom'

function ForgotPW() {
    const navigate = useNavigate()

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

            <form className="forgot-PW-content">
                <label className="input-label">가입한 이메일을 입력해주세요</label>
                <input type="email" placeholder="이메일" className="input-field" />

                <div className="shared-wrapper">
                    <p className="error-text">가입하지 않은 이메일입니다.</p>
                    <button className="verify-button">인증하기</button>
                    {/* <button className="resend-button">재전송</button> */}
                </div>

                <label className="input-label">인증번호</label>
                {/* type을 text, tel, number중에 뭘로 가져갈지... */}
                <input type="text" placeholder="인증번호 6자리" className="input-field" />

                <p className="error-text">인증번호가 일치하지 않습니다.</p>
            </form>

            <button className="next-step-button" onClick={() => navigate('/reset-password')}>
                다음
            </button>
        </div>
    )
}

export default ForgotPW