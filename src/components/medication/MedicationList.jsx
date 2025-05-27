/* 복용약 리스트 관리 */

import "../../styles/Medication.css"
import MedicationItem from './MedicationItem'
import { useMedicines } from '../../hooks/useMedicines'

function MedicationList() {
    const { data: medications, isLoading, isError } = useMedicines()

    if (isLoading) return <div>로딩 중...</div>
    if (isError) return <div>오류가 발생했습니다.</div>

    return (
        <div className="medication-list">
            {medications.map((medi) => (
                <MedicationItem key={medi.id} medication={medi} />
            ))}
        </div>
    )
}

export default MedicationList