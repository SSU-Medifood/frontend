import '../styles/shared.css'
import '../styles/Setting.css'
import { useNavigate } from 'react-router-dom'

function Setting() {
    const navigate = useNavigate()

    return (
        <div className="setting-container">
            <div className="setting-header">
                <img 
                    src="/images/shared/arrow-back.svg"
                    alt="뒤로가기" 
                    className="shared-back"
                    onClick={() => navigate(-1)}
                />
                <h2 className="setting-title">설정</h2>
            </div>

            <div className="setting-wrapper">
                <div className="setting-text">
                    <strong>푸시 알림</strong>
                    <p>흑백처방전에서 보내는 알림을 받을 수 있어요</p>
                </div>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                </label>
            </div>
            <div className="setting-divider" />

            <div className="setting-wrapper">
                <div className="setting-text">
                    <strong>마케팅 수신 동의</strong>
                    <p>신규 서비스 및 혜택 정보를 받을 수 있어요</p>
                </div>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                </label>
            </div>
            <div className="setting-divider" />

            <div className="setting-wrapper">
                <div className="setting-text">
                    <strong>개인정보처리방침</strong>
                </div>
                <img src="/images/recipe/more-next.svg" alt=">" className="setting-next" onClick={() => navigate('/mypage/setting/privacy')}  />
            </div>
            <div className="setting-divider" />

            <div className="setting-wrapper">
                <div className="setting-text">
                    <strong>비밀번호 재설정</strong>
                </div>
                <img src="/images/recipe/more-next.svg" alt=">" className="setting-next" onClick={() => navigate('/forgot-password')} />
            </div>

            <div className="setting-footer">
                <span className="footer-link" onClick={() => navigate('/')}>회원탈퇴</span>
                <span className="footer-divider">|</span>
                <span className="footer-link" onClick={() => navigate('/login')}>로그아웃</span>
            </div>
        </div>
    )
}

export default Setting