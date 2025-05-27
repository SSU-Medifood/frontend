import "./TermsAgreement.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import check from "/images/signup/check.svg"
import uncheck from "/images/signup/uncheck.svg"
import next from "/images/shared/next.svg"

function TermsAgreement({ onAgree }) {
    const navigate = useNavigate()

    const [terms, setTerms] = useState([
        { id: 1, text: "서비스 이용 약관", required: true, checked: false, link: "/terms/service" },
        { id: 2, text: "개인정보 수집/이용 동의", required: true, checked: false, link: "/terms/privacy" },
        { id: 3, text: "민감정보 수집/이용 동의", required: true, checked: false, link: "/terms/sensitive" },
        { id: 4, text: "마케팅 활용 동의", required: false, checked: false, link: "/terms/marketing" },
    ])
    const [agreeAll, setAgreeAll] = useState(false)

    const handleCheck = (id) => {
        // 체크 상태 변경
        const updatedTerms = terms.map(term => 
            term.id === id ? { ...term, checked: !term.checked } : term
        );
        setTerms(updatedTerms);

        // 필수 체크 확인
        const requiredChecked = updatedTerms
            .filter(term => term.required)
            .every(term => term.checked);
        
        // 마케팅 동의 여부 저장
        const marketingTerm = updatedTerms.find(term => term.id === 4);
        localStorage.setItem("marketing", marketingTerm.checked ? "true" : "false");
        
        setAgreeAll(requiredChecked && updatedTerms.every(term => term.checked));

        onAgree(requiredChecked);
    }

    // "모두 동의" 버튼
    const handleAgreeAll = () => {
        const newAgreeAll = !agreeAll;
        setAgreeAll(newAgreeAll);

        // 체크 상태 변경
        const updatedTerms = terms.map((term) => ({
            ...term,
            checked: newAgreeAll,
        }));
        setTerms(updatedTerms);

        // 마케팅 동의 여부 저장
        const marketingTerm = updatedTerms.find(term => term.id === 4);
        localStorage.setItem("marketing", marketingTerm.checked ? "true" : "false");


        onAgree(newAgreeAll);
    }

    // 페이지 이동 (약관 클릭 시)
    const handleNavigate = (link) => {
        navigate(link);
    }

    return (
        <div className="term-container">
            {terms.map(term => (
                <div key={term.id} className="term-content">
                    <div className="term-header">
                        <img 
                            src={term.checked ? check : uncheck}
                            alt="term-check" 
                            className="term-check" 
                            onClick={() => handleCheck(term.id)}
                        />
                        <span onClick={() => handleNavigate(term.link)}>
                            {term.required ? "[필수] " : "[선택] "}{term.text}
                        </span>
                        <img
                            src={next} 
                            alt="detail-term" 
                            className="term-next"
                            onClick={() => handleNavigate(term.link)}
                        />
                    </div>
                </div>
            ))}

            <div className="term-agree-all" onClick={handleAgreeAll}>
                <img src={agreeAll ? check : uncheck} alt="전체 동의" className="term-check" />
                <span>모든 약관에 동의합니다.</span>
            </div>
        </div>
    )
}

export default TermsAgreement