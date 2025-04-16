/* 복용약 리스트 관리 */

import "../../styles/Medication.css"
import { useState } from 'react'
import MedicationItem from './MedicationItem'

const medications = [
    {
        id: 1,
        drugName: '당뇨약',
        drugDose: 2,
        drugCount: 3,
        drugTime: '식후',
        alarmTimes: ['오전 08:00', '오후 01:00', '오후 06:00'],
    },
    {
        id: 2,
        drugName: '오메가3',
        drugDose: 1,
        drugCount: 1,
        drugTime: '식후',
        alarmTimes: [],
    },
    {
        id:3,
        drugName: '루테인',
        drugDose: 1,
        drugCount: 1,
        drugTime: '공복',
        alarmTimes: ['오전 09:00'],
    },
]

function MedicationList() {
    const [updateMedications, setUpdateMedications] = useState(medications)

    const handleDelete = (id) => {
        setUpdateMedications(prev => prev.filter(medi => medi.id !== id));
    }

    return (
        <div className="medication-list">
            {updateMedications.map((medi) => (
                <MedicationItem 
                    key={medi.id} 
                    medication={medi} 
                    onDelete={() => handleDelete(medi.id)} 
                />
            ))}
        </div>
    )
}

export default MedicationList