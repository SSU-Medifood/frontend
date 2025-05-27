/* 약의 각 항목을 관리 */

import "../../styles/Medication.css"
import { useNavigate } from 'react-router-dom'
import { useDeleteMedicine } from '../../hooks/useDeleteMedicine'

function MedicationItem({ medication }) {
    const navigate = useNavigate()
    const deleteMedicine = useDeleteMedicine()

    const handleEdit = () => { navigate(`/medication/edit/${medication.id}`); }
    const handleDelete = () => { deleteMedicine.mutate(medication.id); }

    const formatAlarmTime = (timeStr) => {
        if (!timeStr) return "";

        const [hourStr, minute] = timeStr.split(":");
        const hour = parseInt(hourStr, 10);

        const period = hour < 12 ? "오전" : "오후";
        const formattedHour = hour % 12 === 0 ? 12 : hour % 12;

        return `${period} ${String(formattedHour).padStart(2, '0')}:${minute}`;
    }

    return (
        <div className="medication-item">
            <div className="medication-name-wrapper">
                <p className="medication-name">{medication.mediNickName}</p>
                <div className="medication-button-group">
                    <button className="medication-edit" onClick={handleEdit}>✏️</button>
                    <button className="medication-delete" onClick={handleDelete}>❌</button>
                </div>
            </div>

            <div className="medication-detail-wrapper">
                <p className="medication-detail">
                    {medication.mediPerOnce}
                </p>

                <p className="medication-detail">
                    1일 {medication.perDay}회
                </p>

                <p className="medication-detail">
                    {medication.mediDoseTime}
                </p>
                
                {medication.alarmTimes.map((timeObj, idx) => (
                    <div key={idx} className="medication-detail">
                        {formatAlarmTime(timeObj.alarmTime)}
                    </div>
                ))}
            </div>
        </div>
    )
  }
  
  export default MedicationItem
  