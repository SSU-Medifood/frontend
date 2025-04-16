import './AlarmSelect.css'
import { useEffect } from 'react'

function AlarmSelect({ drugCount, alarmTimes, setAlarmTimes, setDrugCount }) {

    useEffect(() => {
        setAlarmTimes(prev => {
            // drugCount 만큼 빈 배열 생성
            const updatedTime = Array(drugCount).fill('');
            for (let i = 0; i < Math.min(prev.length, drugCount); i++) {
                updatedTime[i] = prev[i];
            }
            return updatedTime;
        });
    }, [drugCount])

    const handleTimeChange = (value, index) => {
        const updatedTime = [...alarmTimes];
        updatedTime[index] = value;
        setAlarmTimes(updatedTime);
    }

    const handleRemove = (index) => {
        const updatedTime = [...alarmTimes];
        updatedTime.splice(index, 1);                // 해당 인덱스를 배열에서 제거
        setAlarmTimes(updatedTime);
        setDrugCount(prev => Math.max(0, prev - 1)); // 투여 횟수도 감소 시키기
    }

    return (
        <div className="alarm-container">
            {alarmTimes.map((time, idx) => (
                <div className="alarm-wrapper" key={idx}>
                    <input
                        type="time"
                        className="time-picker"
                        value={time}
                        onChange={(e) => handleTimeChange(e.target.value, idx)}
                    />
                    <button
                        className="alarm-delete-button"
                        onClick={() => handleRemove(idx)}
                    >
                        <img src="/images/delete.svg" alt="삭제" className="delete-icon" />
                    </button>
                </div>
            ))}
        </div>
    )
}

export default AlarmSelect