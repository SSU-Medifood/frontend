import '../../styles/shared.css'
import '../../components/TermsAgreement.css'
import { useNavigate } from 'react-router-dom'

function ServiceTerms() {
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
                <h2 className="shared-title">서비스 이용 약관</h2>
            </div>
            <div className="term-text">
                <p>
                    제1조 (목적)<br />
                    본 약관은 MEFO(이하 '회사')이 제공하는 MEFO 서비스(이하 "MEFO" 혹은 "서비스"라 함)를 이용하는데 필요한 권리, 의무 및 책임사항, 이용 조건 및 절차 등 기본적인 사항을 규정하고 있습니다. 서비스를 이용하거나 서비스 회원으로 가입할 경우 여러분은 본 약관 및 관련 운영 정책을 확인하거나 동의하게 되므로, 조금만 시간을 내서 주의 깊게 읽어주시길 바랍니다.
                </p>
                <p>
                    제2조 (정의)<br />
                    본 약관에서 사용하는 용어의 정의는 다음과 같습니다.<br />
                    1."서비스"란 구현되는 단말기(PC, 휴대형단말기 등의 유무선 장치를 포함)와 상관없이 "이용자"가 이용할 수 있는 MEFO와 관련한 제반 서비스를 의미합니다.<br />
                    2."이용자"라 함은 "회사"에서 제공하는 서비스 또는 관련 제반 서비스를 이용하는 "회원"과 비회원을 말합니다.
                </p>
            </div>
        </div>
    )
}
  
export default ServiceTerms