import '../styles/shared.css'
import '../styles/Login.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '/images/logo/logo-black.svg'

function Login() {
    const navigate = useNavigate()
    const [showPW, setShowPW] = useState(false)

    return (
        <div className="shared-container">
            <img src={logo} alt="logo-black" className="login-logo" />

            <form className="login-content">
                <input type="email" placeholder="이메일" className="input-field" />
                <div className="PW-content">
                    <input 
                        type={showPW ? 'text' : 'password'} 
                        placeholder="비밀번호" 
                        className="input-field"
                    />
                    <img
                        src={showPW ? "/images/login/eye-on.svg" : "/images/login/eye-off.svg"} 
                        alt="비밀번호 토글" 
                        className="PW-toggle"
                        onClick={() => setShowPW(!showPW)}
                    />
                </div>
                <p className="PW-forgot" onClick={() => navigate('/forgot-password')}>
                    비밀번호를 잊으셨나요?
                </p>
                <button className="login-button" onClick={() => navigate('/home')}>
                    로그인
                </button>
            </form>

            <p className="login-signup-text">
                계정이 없으신가요? <span className="login-signup-link" onClick={() => navigate('/signup')}>가입하기</span>
            </p>
        </div>
    )
}
  
export default Login