import '../styles/shared.css'
import '../styles/Landing.css'
import { useNavigate } from 'react-router-dom'
import logo from '/images/logo/logo.svg'

function Landing() {
    const navigate = useNavigate()

    return (
        <div className="landing-container">
            <button className="landing-login" onClick={() => navigate('/login')}>
                Log in
            </button>
            <div className="landing-content">
                <img src={logo} alt="logo" className="landing-logo" />
                <p className="landing-text">
                    <strong>MEFO</strong>에 가입하고 지금 바로<br />
                    나만의 건강 비서를 만들어보세요.
                </p>
                <button className="landing-signup" onClick={() => navigate('/signup')}>
                    Get Started
                </button>
            </div>
        </div>
    )
}

export default Landing