import '../styles/shared.css'
import '../styles/SignupComplete.css'
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
// import { useLoginUser } from '../hooks/useLoginUser'
// import { useUserHealthInfo } from '../hooks/useUserHealthInfo'
import { loginUser } from '../api/auth'
import { getUserHealthInfo } from '../api/user'

function SignupComplete() {
    const navigate = useNavigate()
    const isInitialRender = useRef(true)
    const [userInfo, setUserInfo] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!isInitialRender.current) return;

        const email = localStorage.getItem('email');
        const password = localStorage.getItem('password');

        if (!email || !password) {
            setError('이메일 또는 비밀번호가 없습니다.');
            setLoading(false);
            return;
        }

        // 로그인 후 → 유저 정보 요청
        const fetchUserData = async () => {
            try {
                const loginResult = await loginUser(email, password);
                const token = loginResult.token?.replace('Bearer ', '');

                if (!token) {
                    throw new Error('토큰이 없습니다.');
                }

                localStorage.setItem('token', token);

                const userData = await getUserHealthInfo();
                setUserInfo(userData);
            } catch (err) {
                console.error(err);
                setError('유저 정보를 불러오는 데 실패했습니다.');
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
        isInitialRender.current = false;
    }, []);

    if (loading) return
    if (error) return

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