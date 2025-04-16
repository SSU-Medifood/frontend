import '../styles/shared.css'
import '../styles/Login.css'
import '../styles/HealthInfo.css'
import { useState } from "react"
import { useNavigate } from 'react-router-dom'

function HealthInfo3() {
    const navigate = useNavigate()

    const [allergy, setAllergy] = useState("")
    const [drugAllergy, setDrugAllergy] = useState("")
    const [otherAllergy, setOtherAllergy] = useState("")
    const [disease, setDisease] = useState("")

    const handleNoAllergy = (e) => {
        e.preventDefault();
        setAllergy("아니오");
        setDrugAllergy("없음");
        setOtherAllergy("없음");
        setDisease("없음");
    }

    const isValid = allergy != ""

    return (
        <div className="shared-container">
            <div className="shared-header">
                <img 
                    src="/images/shared/arrow-back.svg"
                    alt="뒤로가기"
                    className="shared-back"
                    onClick={() => navigate(-1)}
                />
                <h2 className="shared-title">건강 정보 입력하기 (3/3)</h2>
            </div>

            <form className="login-content">
                <label className="input-label">알레르기 유무</label>
                <div className="button-group">
                    <button 
                        className={allergy === "아니오" ? "selected" : ""} 
                        onClick={handleNoAllergy}
                    >
                        아니오
                    </button>
                    <button 
                        className={allergy === "예" ? "selected" : ""} 
                        onClick={(e) => { e.preventDefault(); setAllergy("예"); }}
                    >
                        예
                    </button>
                </div>

                <label className="input-label">알레르기 종류(약물)</label>
                <div className="button-group">
                    <button 
                        className={drugAllergy === "없음" ? "selected" : ""} 
                        onClick={(e) => { e.preventDefault(); setDrugAllergy("없음"); }}
                    >
                        없음
                    </button>
                </div>
                <input type="text" className="search-box" placeholder="🔍 검색" disabled />

                <label className="input-label">알레르기 종류(약물 외)</label>
                <div className="button-group">
                    <button 
                        className={otherAllergy === "없음" ? "selected" : ""} 
                        onClick={(e) => { e.preventDefault(); setOtherAllergy("없음"); }}
                    >
                        없음
                    </button>
                </div>
                <input type="text" className="search-box" placeholder="🔍 검색" disabled />

                <label className="input-label">현재 앓고 있는 질환</label>
                <div className="button-group">
                    <button 
                        className={disease === "없음" ? "selected" : ""} 
                        onClick={(e) => { e.preventDefault(); setDisease("없음"); }}
                    >
                        없음
                    </button>
                </div>
                <input type="text" className="search-box" placeholder="🔍 검색" disabled />
            </form>

            <button 
                className={`next-step-button ${isValid ? "" : "disabled"}`} 
                disabled={!isValid} 
                onClick={() => navigate('/signup/complete')}
            >
                완료
            </button>
        </div>
    )
}
  
export default HealthInfo3