/* 약의 각 항목을 관리 */

import "../../styles/Medication.css"
import { useNavigate } from 'react-router-dom'

function MedicationItem({ medication, onDelete }) {
    const navigate = useNavigate()

    const handleEdit = () => { navigate(`/medication/edit/${medication.id}`); }

    return (
        <div className="medication-item">
            <div className="medication-name-wrapper">
                <p className="medication-name">{medication.drugName}</p>
                <div className="medication-button-group">
                    <button className="medication-edit" onClick={handleEdit}>✏️</button>
                    <button className="medication-delete" onClick={onDelete}>❌</button>
                </div>
            </div>

            <div className="medication-detail-wrapper">
                <p className="medication-detail">
                    1회 {medication.drugDose}정
                </p>

                <p className="medication-detail">
                    1일 {medication.drugCount}회
                </p>

                <p className="medication-detail">
                    {medication.drugTime}
                </p>
                
                {medication.alarmTimes.map((time, idx) => (
                    <div key={idx} className="medication-detail">
                        {time}
                    </div>
                ))}
            </div>
        </div>
    )
  }
  
  export default MedicationItem
  