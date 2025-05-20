import '../styles/shared.css'
import '../styles/MyPage.css'
import { useNavigate } from 'react-router-dom'
import { useUserHealthInfo } from '../hooks/useUserHealthInfo'
import Navbar from '../components/Navbar'

function MyPage() {
    const navigate = useNavigate()
    const { data: userInfo, isLoading, isError } = useUserHealthInfo()

    // 생년월일 보기 좋게 쪼개주는 함수
    const formatBirth = (birth) => {
        if (birth.length === 8) {
            return `${birth.slice(0, 4)} / ${birth.slice(4, 6)} / ${birth.slice(6, 8)}`;
        }
        return birth;
    }

    const handleSetting = () => { navigate(`/mypage/setting`); }
    const handleEdit = () => { navigate(`/mypage/edit1`); }

    if (isLoading) return <div>정보를 불러오는 중입니다...</div>;
    if (isError || !userInfo) return <div>사용자 정보를 불러올 수 없습니다.</div>;

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
                        <strong>{userInfo?.name}</strong>님의 건강 정보
                    </p>
                    <button className="mypage-edit" onClick={handleEdit}>✏️</button>
                </div>
                <div className="mypage-health-box">
                    <div className="mypage-health-row">
                        <span className="health-label">생년월일</span>
                        <span className="health-value">{formatBirth(userInfo?.birth)}</span>
                    </div>
                    <div className="mypage-health-row">
                        <span className="health-label">성별</span>
                        <span className="health-value">{userInfo?.userSex}</span>
                    </div>
                    <div className="mypage-health-row">
                        <span className="health-label">키</span>
                        <span className="health-value">{userInfo?.height}cm</span>
                    </div>
                    <div className="mypage-health-row">
                        <span className="health-label">몸무게</span>
                        <span className="health-value">{userInfo?.weight}kg</span>
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
                        <span className="health-value">{userInfo?.userSmoke}</span>
                    </div>
                    <div className="mypage-health-row">
                        <span className="health-label">음주</span>
                        <span className="health-value">{userInfo?.userDrink}</span>
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
                        <span className="health-value">
                            {userInfo?.diseaseList?.length > 0 
                                ? userInfo.diseaseList.map(d => d.disease).join(', ')
                            : '없음'}
                        </span>
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
                        <span className="health-value">
                            {userInfo.allergyDrugList?.length > 0
                                ? userInfo.allergyDrugList.map(a => a.allergyDrug).join(', ')
                            : '없음'}
                        </span>
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
                        <span className="health-value">
                            {userInfo.allergyEtcList?.length > 0
                                ? userInfo.allergyEtcList.map(a => a.allergyEtc).join(', ')
                            : '없음'}
                        </span>
                    </div>
                </div>
            </div>

            <Navbar />
        </>
    )
}
  
export default MyPage