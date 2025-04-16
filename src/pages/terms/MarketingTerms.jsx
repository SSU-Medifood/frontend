import '../../styles/shared.css'
import '../../components/TermsAgreement.css'
import { useNavigate } from 'react-router-dom'

function MarketingTerms() {
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
                <h2 className="shared-title">마케팅 활용 동의</h2>
            </div>
            <div className="term-text">
                <p> 
                    마케팅 정보 수신 여부 및 마케팅을 위한 개인정보 수집이용을 거부하실 수 있으며, 거부 시에도 MEFO 서비스를 이용하실 수 있으나, 동의를 거부한 경우 각종 소식 및 이벤트 참여에 제한이 있을 수 있습니다.
                </p>
                <p>
                    [ 서비스 소식, 이벤트 등 광고성 정보 안내 목적 ]<br />
                    - 수집항목: 선택)마케팅 수신 이메일 주소<br />
                    - 보유기간: 동의 철회 또는 회원탈퇴 시
                </p>
            </div>
        </div>
    )
}
  
export default MarketingTerms