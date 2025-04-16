import '../../styles/shared.css'
import '../../components/TermsAgreement.css'
import { useNavigate } from 'react-router-dom'

function SensitiveTerms() {
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
                <h2 className="shared-title">민감정보 수집/이용 동의</h2>
            </div>
            <div className="term-text">
                <p>
                    주식회사 MEFO는 서비스 이용자의 개인정보를 중요시하며, 「개인정보보호법」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」등 관련 법규에 의거하여 아래의 서비스 이용 시 민감정보를 수집 및 이용합니다.
                </p>
                <p>
                    [ 복용 알림, 맞춤정보 제공, 통계데이터 활용 목적 ]<br />
                    - 수집항목: 선택)질환코드, 복용 정보(투약량, 투여횟수, 투약일수)<br />
                    - 보유기간: 회원탈퇴 시
                </p>
                <p>
                    ※위의 민감정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다. 그러나 동의를 거부할 경우 복용 관리 및 알림 서비스 이용이 불가합니다.
                </p>
            </div>
        </div>
    )
}
  
export default SensitiveTerms