import '../styles/shared.css'
import '../styles/Medication.css'
import '../styles/MedicationRegister.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AlarmSelect from '../components/AlarmSelect'
import Navbar from '../components/Navbar'

function MedicationRegister() {
    const navigate = useNavigate()

    const [drugType, setDrugType] = useState('')
    const [drugName, setDrugName] = useState('')
    const [drugDose, setDrugDose] = useState('')
    const [drugTime, setDrugTime] = useState('')
    const [drugAlarm, setDrugAlarm] = useState('')
    const [drugCount, setDrugCount] = useState(0)
    const [alarmTimes, setAlarmTimes] = useState([])

    const handleComplete = () => { navigate('/medication'); }
  
    return (
        <>
            <div className="medication-container">
                <div className="medication-header">
                    <img
                        className="medication-back"
                        src="/images/shared/arrow-back.svg"
                        alt="뒤로가기"
                        onClick={() => navigate(-1)}
                    />
                    <p className="medication-title">복용약 등록하기</p>
                    <button 
                        className="medication-register-complete"
                        onClick={handleComplete}
                    >
                        완료
                    </button>
                </div>

                <p className="register-title">복용약을 등록해볼까요?</p>
                <p className="register-title-comment">복용중이신 약을 관리해드릴게요!</p>

                <div className="register-form-field">
                    <label className="register-form-label">약 종류</label>
                    <div className="register-input-wrapper">
                        <input
                            type="text"
                            placeholder="예시) 아세트 아미노펜, 타이레놀"
                            value={drugType}
                            onChange={(e) => setDrugType(e.target.value)}
                        />
                        {drugType && (
                            <button className="clear-button" onClick={() => setDrugType('')}>
                                ❌
                            </button>
                        )}
                    </div>
                    <div className="register-underline" />
                </div>

                <div className="register-form-field">
                    <label className="register-form-label">약 이름을 무엇으로 저장하시겠어요?</label>
                    <div className="register-input-wrapper">
                        <input
                            type="text"
                            placeholder="예시) 감기약"
                            value={drugName}
                            onChange={(e) => setDrugName(e.target.value)}
                        />
                        {drugName && (
                            <button className="clear-button" onClick={() => setDrugName('')}>
                                ❌
                            </button>
                        )}
                    </div>
                    <div className="register-underline" />
                </div>

                <div className="register-form-field">
                    <label className="register-form-label">1회 투여량</label>
                    <div className="register-button-group">
                        {['1회 1정', '1회 2정', '1회 3정', '기타'].map((option, idx) => (
                            <button
                                key={idx}
                                className={`register-button ${drugDose === option ? 'selected' : ''}`}
                                onClick={() => setDrugDose(option)}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="register-form-field">
                    <label className="register-form-label">언제 복용하시나요?</label>
                    <div className="register-button-group">
                        {['공복', '식전', '식간', '식후'].map((option, idx) => (
                            <button
                                key={idx}
                                className={`register-button ${drugTime === option ? 'selected' : ''}`}
                                onClick={() => setDrugTime(option)}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="register-form-field">
                    <label className="register-form-label">약 복용 알람을 제공 받으시겠어요?</label>
                    <div className="register-button-group">
                        {['네', '아니오'].map((option, idx) => (
                            <button
                                key={idx}
                                className={`register-button ${drugAlarm === option ? 'selected' : ''}`}
                                onClick={() => setDrugAlarm(option)}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="register-form-field">
                    <label className="register-form-label">일일 투여 횟수</label>
                    <div className="frequency-control">
                        <button className="circle-button" onClick={() => setDrugCount(Math.max(0, drugCount - 1))}>−</button>
                        <span className="drug-count">{drugCount} 회</span>
                        <button className="circle-button" onClick={() => setDrugCount(drugCount + 1)}>＋</button>
                    </div>
                </div>

                <div className="register-form-field">
                    <label className="register-form-label">알람 시간</label>
                    <AlarmSelect
                        drugCount={drugCount}
                        alarmTimes={alarmTimes}
                        setAlarmTimes={setAlarmTimes}
                        setDrugCount={setDrugCount}
                    />
                </div>
            </div>

            <Navbar />
        </>
    )
}
  
export default MedicationRegister