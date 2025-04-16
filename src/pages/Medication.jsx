import '../styles/shared.css'
import '../styles/Medication.css'
import { useNavigate } from 'react-router-dom'
import MedicationList from '../components/medication/MedicationList'
import MedicationRecommend from '../components/medication/MedicationRecommend'
import Navbar from '../components/Navbar'

function Medication() {
    const navigate = useNavigate()
  
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
            <p className="medication-title">약 관리</p>
            <button 
              className="medication-register" 
              onClick={() => navigate('/medication/register')}
            >
              복용약 등록
            </button>
          </div>
                  
          <p className="medication-sub-title-1">현재 복용중인 약</p>
          <div className="medication-divider" />
          <MedicationList />
          <div className="medication-divider" />

          <p className="medication-sub-title-2">영양제 섭취 시간을 추천해드릴게요</p>
          <MedicationRecommend />
        </div>

        <Navbar />
      </>
    )
}
  
export default Medication