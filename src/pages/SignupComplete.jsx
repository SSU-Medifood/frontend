import '../styles/shared.css'
import '../styles/SignupComplete.css'
import { useNavigate } from 'react-router-dom'

function SignupComplete() {
    const navigate = useNavigate()

    return (
        <div className="signup-complete-container">
            <div className="clipboard-content">
                <img 
                    src="/images/signup/health-chart.png" 
                    alt="클립보드 배경" 
                    className="clipboard-image"
                />
                <h2 className="clipboard-title">홍길동님의 건강 정보</h2>

                <div className="info-list">
                    <p><strong>생년월일</strong> <span className="user-info">2003 / 00 / 00</span></p>
                    <p><strong>성별</strong> <span className="user-info">여자</span></p>
                    <p><strong>키</strong> <span className="user-info">165.8 cm</span></p>
                    <p><strong>몸무게</strong> <span className="user-info">50 kg</span></p>
                    <p><strong>흡연 여부</strong> <span className="user-info">아니오</span></p>
                    <p><strong>음주 횟수</strong> <span className="user-info">주 0~1회</span></p>
                    <p><strong>알레르기 (약물)</strong> <span className="user-info">없음</span></p>
                    <p><strong>알레르기 (약물 외)</strong> <span className="user-info">땅콩, 먼지, 털, 딸기</span></p>
                    <p><strong>현재 앓고 있는 질환</strong> <span className="user-info">허리디스크</span></p>
                </div>
            </div>

            <button className="signup-complete-start" onClick={() => navigate('/home')}>
                <img 
                    src="/images/logo/logo-black.svg" 
                    className="signup-complete-logo"
                />
                시작하기
            </button>
        </div>
    )
}
  
export default SignupComplete