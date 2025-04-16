import '../styles/shared.css'
import '../styles/Login.css'
import '../styles/HealthInfo.css'
import { useState } from "react"
import { useNavigate } from 'react-router-dom'

function HealthInfo2() {
    const navigate = useNavigate()

    const [gender, setGender] = useState("")
    const [height, setHeight] = useState("")
    const [weight, setWeight] = useState("")
    const [smoking, setSmoking] = useState("")
    const [drinking, setDrinking] = useState("")

    const isValid = gender && height && weight && smoking && drinking

    return (
        <div className="shared-container">
            <div className="shared-header">
                <img 
                    src="/images/shared/arrow-back.svg"
                    alt="뒤로가기"
                    className="shared-back"
                    onClick={() => navigate(-1)}
                />
                <h2 className="shared-title">건강 정보 입력하기 (2/3)</h2>
            </div>

            <form className="login-content">
                <label className="input-label">성별</label>
                <div className="button-group">
                    <button 
                        className={gender === "여자" ? "selected" : ""} 
                        onClick={(e) => { e.preventDefault(); setGender("여자"); }}
                    >
                        여자
                    </button>
                    <button 
                        className={gender === "남자" ? "selected" : ""} 
                        onClick={(e) => { e.preventDefault(); setGender("남자"); }}
                    >
                        남자
                    </button>
                </div>

                <label className="input-label">키</label>
                <div className="input-wrapper">
                    <input 
                        type="number" className="input-field" value={height}
                        onChange={(e) => setHeight(e.target.value)}
                    />
                    <span className="input-text">cm</span>
                </div>

                <label className="input-label">몸무게</label>
                <div className="input-wrapper">
                    <input 
                        type="number" className="input-field" value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                    />
                    <span className="input-text">kg</span>
                </div>

                <label className="input-label">흡연 여부</label>
                <div className="button-group">
                    <button 
                        className={smoking === "아니오" ? "selected" : ""} 
                        onClick={(e) => { e.preventDefault(); setSmoking("아니오"); }}
                    >
                        아니오
                    </button>
                    <button 
                        className={smoking === "예" ? "selected" : ""} 
                        onClick={(e) => { e.preventDefault(); setSmoking("예"); }}
                    >
                        예
                    </button>
                    <button 
                        className={smoking === "끊음" ? "selected" : ""} 
                        onClick={(e) => { e.preventDefault(); setSmoking("끊음"); }}
                    >
                        끊음
                    </button>
                </div>

                <label className="input-label">음주 횟수 (일주일)</label>
                <div className="button-group">
                    <button 
                        className={drinking === "0~1일" ? "selected" : ""} 
                        onClick={(e) => { e.preventDefault(); setDrinking("0~1일"); }}
                    >
                        0~1일
                    </button>
                    <button 
                        className={drinking === "1~2일" ? "selected" : ""} 
                        onClick={(e) => { e.preventDefault(); setDrinking("1~2일"); }}
                    >
                        1~2일
                    </button>
                    <button 
                        className={drinking === "3~4일" ? "selected" : ""} 
                        onClick={(e) => { e.preventDefault(); setDrinking("3~4일"); }}
                    >
                        3~4일
                    </button>
                    <button 
                        className={drinking === "5~7일" ? "selected" : ""} 
                        onClick={(e) => { e.preventDefault(); setDrinking("5~7일"); }}
                    >
                        5~7일
                    </button>
                </div>
            </form>

            <button 
                className={`next-step-button ${isValid ? "" : "disabled"}`} 
                disabled={!isValid} 
                onClick={() => navigate('/health-information3')}
            >
                다음
            </button>
        </div>
    )
}
  
export default HealthInfo2