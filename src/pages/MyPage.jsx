import '../styles/shared.css'
import '../styles/MyPage.css'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

function MyPage() {
    const navigate = useNavigate()

    const dummyUserData = {
        name: '홍길동',
        birth: '19990101',
        gender: '여성',
        height: 165.8,
        weight: 50,
        smoking: '비흡연',
        drinking: '주 0~1회',
        disease: ['허리디스크'],
        drugAllergy: [],
        otherAllergy: ['땅콩', '먼지', '털', '딸기'],
    }

    // 생년월일 보기 좋게 쪼개주는 함수
    const formatBirth = (birth) => {
        if (birth.length === 8) {
            return `${birth.slice(0, 4)} / ${birth.slice(4, 6)} / ${birth.slice(6, 8)}`;
        }
        return birth;
    }

    const handleSetting = () => { navigate(`/mypage/setting`); }
    const handleEdit = () => { navigate(`/mypage/edit1`); }

    return (
        <>
            <div className="mypage-container">
                <div className="mypage-header">
                        <p className="mypage-title">마이페이지</p>
                        <img
                            className="mypage-setting"
                            src="/images/setting.svg"
                            alt="설정"
                            onClick={handleSetting}
                        />
                </div>

                {/* 사용자의 건강 정보 */}
                <div className="mypage-health-header">
                    <p className="mypage-sub-title">
                        <strong>{dummyUserData.name}</strong>님의 건강 정보
                    </p>
                    <button className="mypage-edit" onClick={handleEdit}>✏️</button>
                </div>
                <div className="mypage-health-box">
                    <div className="mypage-health-row">
                        <span className="health-label">생년월일</span>
                        <span className="health-value">{formatBirth(dummyUserData.birth)}</span>
                    </div>
                    <div className="mypage-health-row">
                        <span className="health-label">성별</span>
                        <span className="health-value">{dummyUserData.gender}</span>
                    </div>
                    <div className="mypage-health-row">
                        <span className="health-label">키</span>
                        <span className="health-value">{dummyUserData.height}cm</span>
                    </div>
                    <div className="mypage-health-row">
                        <span className="health-label">몸무게</span>
                        <span className="health-value">{dummyUserData.weight}kg</span>
                    </div>
                </div>
                <div className="mypage-divider" />

                {/* 기호 습관 */}
                <div className="mypage-health-header">
                    <p className="mypage-sub-title">
                        <strong>기호 습관</strong>
                    </p>
                </div>
                <div className="mypage-health-box">
                    <div className="mypage-health-row">
                        <span className="health-label">흡연</span>
                        <span className="health-value">{dummyUserData.smoking}</span>
                    </div>
                    <div className="mypage-health-row">
                        <span className="health-label">음주</span>
                        <span className="health-value">{dummyUserData.drinking}</span>
                    </div>
                </div>
                <div className="mypage-divider" />

                {/* 보유 질환 */}
                <div className="mypage-health-header">
                    <p className="mypage-sub-title">
                        <strong>보유 질환</strong>
                    </p>
                </div>
                <div className="mypage-health-box">
                    <div className="mypage-health-row">
                        <span className="health-value">{dummyUserData.disease.join(', ') || '없음'}</span>
                    </div>
                </div>
                <div className="mypage-divider" />

                {/* 약물 알레르기 */}
                <div className="mypage-health-header">
                    <p className="mypage-sub-title">
                        <strong>약물 알레르기</strong>
                    </p>
                </div>
                <div className="mypage-health-box">
                    <div className="mypage-health-row">
                        <span className="health-value">{dummyUserData.drugAllergy.join(', ') || '없음'}</span>
                    </div>
                </div>
                <div className="mypage-divider" />

                {/* 약물 외 알레르기 */}
                <div className="mypage-health-header">
                    <p className="mypage-sub-title">
                        <strong>약물 외 알레르기</strong>
                    </p>
                </div>
                <div className="mypage-health-box" style={{ marginBottom: '95px' }}>
                    <div className="mypage-health-row">
                        <span className="health-value">{dummyUserData.otherAllergy.join(', ') || '없음'}</span>
                    </div>
                </div>
            </div>

            <Navbar />
        </>
    )
}
  
export default MyPage