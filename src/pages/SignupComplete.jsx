import '../styles/shared.css'
import '../styles/SignupComplete.css'
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { useLoginUser } from '../hooks/useLoginUser'
import { useUserHealthInfo } from '../hooks/useUserHealthInfo'

function SignupComplete() {
    const navigate = useNavigate()
    const loginUser = useLoginUser()
    const isInitialRender = useRef(true)
    const { data: userInfo, isLoading, isError } = useUserHealthInfo()

    // 페이지가 렌더링될 때, 토큰이 로컬에 저장됨
    useEffect(() => {
        if (!isInitialRender.current) return;
    
        const email = localStorage.getItem('email');
        const password = localStorage.getItem('password');
    
        if (email && password) {
            loginUser.mutate({ email, password });
        }
    
        isInitialRender.current = false; // 첫 렌더링 이후에는 요청을 더 이상 보내지 않음
    }, [loginUser])

    if (isLoading) {
        return <div>건강 정보를 불러오는 중입니다...</div>;
    }

    if (isError) {
        return <div>건강 정보를 불러오지 못했습니다.</div>;
    }

    return (
        <div className="signup-complete-container">
            <div className="clipboard-content">
                <img 
                    src="/images/signup/health-chart.png" 
                    alt="클립보드 배경" 
                    className="clipboard-image"
                />
                <h2 className="clipboard-title">{userInfo?.name}님의 건강 정보</h2>

                <div className="info-list">
                    <p><strong>생년월일</strong> <span className="user-info">{userInfo?.birth}</span></p>
                    <p><strong>성별</strong> <span className="user-info">{userInfo?.userSex}</span></p>
                    <p><strong>키</strong> <span className="user-info">{userInfo?.height} cm</span></p>
                    <p><strong>몸무게</strong> <span className="user-info">{userInfo?.weight} kg</span></p>
                    <p><strong>흡연 여부</strong> <span className="user-info">{userInfo?.userSmoke}</span></p>
                    <p><strong>음주 횟수</strong> <span className="user-info">{userInfo?.userDrink}</span></p>
                    
                    <p>
                        <strong>알레르기 (약물)</strong>
                        <span className="user-info">
                            {userInfo?.allergyDrugList?.length > 0 ? (
                                userInfo.allergyDrugList.map((drug, index) => (
                                    <span key={drug.id}>
                                        {drug.allergyDrug}
                                        {index < userInfo.allergyDrugList.length - 1 && ", "}
                                    </span>
                                ))
                            ) : (
                                <span>없음</span>
                            )}
                        </span>
                    </p>

                    <p>
                        <strong>알레르기 (약물 외)</strong>
                        <span className="user-info">
                            {userInfo?.allergyEtcList?.length > 0 ? (
                                userInfo.allergyEtcList.map((other, index) => (
                                    <span key={other.id}>
                                        {other.allergyEtc}
                                        {index < userInfo.allergyEtcList.length - 1 && ", "}
                                    </span>
                                ))
                            ) : (
                                <span>없음</span>
                            )}
                        </span>    
                    </p>


                    <p><strong>현재 앓고 있는 질환</strong>
                        <span className="user-info">
                            {userInfo?.diseaseList?.length > 0 ? (
                                userInfo.diseaseList.map((diseases, index) => (
                                    <span key={diseases.id}>
                                        {diseases.disease}
                                        {index < userInfo.diseaseList.length - 1 && ", "}
                                    </span>
                                ))
                            ) : (
                                <span>없음</span>
                            )}
                        </span>
                    </p>

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