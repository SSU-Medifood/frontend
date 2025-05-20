import '../styles/shared.css'
import '../styles/Login.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLoginUser } from '../hooks/useLoginUser'
import logo from '/images/logo/logo-black.svg'

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPW, setShowPW] = useState(false)
    const loginUser = useLoginUser()

    const handleLogin = (e) => {
        e.preventDefault();

        loginUser.mutate({ email, password }, {
            onSuccess: () => {
                navigate('/home');
        },
        onError: () => {
            alert('로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.');
        }
        });
    }

    return (
        <div className="shared-container">
            <img src={logo} alt="logo-black" className="login-logo" />

            <form className="login-content" onSubmit={handleLogin}>
                <input type="email" placeholder="이메일" className="input-field" 
                       value={email} onChange={(e) => setEmail(e.target.value)} required
                />
                <div className="PW-content">
                    <input 
                        type={showPW ? 'text' : 'password'} 
                        placeholder="비밀번호" 
                        className="input-field"
                        value={password} onChange={(e) => setPassword(e.target.value)} required
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
                <button className="login-button" type="submit">
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