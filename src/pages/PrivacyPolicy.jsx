import '../styles/shared.css'
import '../components/TermsAgreement.css'
import { useNavigate } from 'react-router-dom'

function PrivacyPolicy() {
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
                <h2 className="shared-title">개인정보처리방침</h2>
            </div>
            <div className="term-text">
                <p> 
                    MEFO는 고객님들의 소중한 개인정보 보호를 위해 아래와 같은 방침을 수행하고 있습니다.
                </p>
                <p>
                    1. 개인정보의 처리 목적<br />
                    (주)솦프트콘 ('www.medifood.com'이하 'MEFO')은 다음의 목적을 위하여 개인정보를 처리하고 있으며, 다음 목적 이외의 용도로는 이용하지 않습니다.<br />
                    - 고객 가입의사 확인, 고객에 대한 서비스 제공에 따른 본인 식별.인증, 회원자격 유지.관리 등
                </p>
                <p>
                    2. 개인정보의 처리 및 보유 기간<br />
                    ① 'MEFO'는 정보주체로부터 개인정보를 수집할 때 동의 받은 개인정보 보유․이용기간 또는 법령에 따른 개인정보 보유․이용기간 내에서 개인정보를 처리․보유합니다.<br />
                    ② 구체적인 개인정보 처리 및 보유 기간은 다음과 같습니다.<br />
                    - 고객 가입 및 관리 : 회원가입 및 관리<br />
                    - 보유 기간 : 회원 탈퇴 시, 즉시 삭제
                </p>
            </div>
        </div>
    )
}
  
export default PrivacyPolicy