import '../../styles/shared.css'
import '../../components/TermsAgreement.css'
import { useNavigate } from 'react-router-dom'

function PrivacyTerms() {
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
                <h2 className="shared-title">개인정보 수집/이용 동의</h2>
            </div>
            <div className="term-text">
                <p>
                    주식회사 MEFO는 MEFO 서비스 이용자의 개인정보를 중요시하며, 「개인정보보호법」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」등 관련 법규에 의거하여 서비스 이용자의 회원가입 시 아래와 같이 개인정보를 수집 및 이용합니다.
                    
                </p>
                <p>
                    [ 회원가입 및 관리 및 간편로그인 목적 ]<br />
                    - 수집항목: 필수)이메일, CI, DI, 성명, 생년월일, 성별<br />
                    - 보유기간: 회원탈퇴 시
                </p>
            </div>
        </div>
    )
}
  
export default PrivacyTerms