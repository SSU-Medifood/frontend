import { useNavigate } from 'react-router-dom'

import "./Navbar.css"
import navHome from '/images/navbar/nav-home.svg'
import navMedication from '/images/navbar/nav-medication.svg'
import navMEFO from '/images/navbar/nav-mefo.svg'
import navStorage from '/images/navbar/nav-storage.svg'
import navMy from '/images/navbar/nav-my.svg'

function Navbar() {
  const navigate = useNavigate()

  const handleHomeClick = () => { navigate("/home"); }
  const handleMedicationClick = () => { navigate("/medication"); }
  const handleChatbotClick = () => { navigate("/mefo"); }
  const handleStorageClick = () => { navigate("/storage"); }
  const handleMyPageClick = () => { navigate("/mypage"); }

  return (
    <div className="navbar">

      <div className="nav-wrapper" style={{ top: '14%', left: '10%' }} onClick={handleHomeClick}>
        <img src={navHome} alt="홈" className="nav-home" />
        <span className="nav-label">홈</span>
      </div>

      <div className="nav-wrapper" style={{ top: '15%', left: '30%' }} onClick={handleMedicationClick}>
        <img src={navMedication} alt="mefo" className="nav-medication"/>
        <span className="nav-label">약 관리</span>
      </div>

      <img src={navMEFO} alt="mefo" className="nav-mefo" onClick={handleChatbotClick}/>

      <div className="nav-wrapper" style={{ top: '14%', left: '70%' }} onClick={handleStorageClick}>
        <img src={navStorage} alt="mefo" className="nav-storage"/>
        <span className="nav-label">보관함</span>
      </div>

      <div className="nav-wrapper" style={{ top: '8%', left: '90%' }} onClick={handleMyPageClick}>
        <img src={navMy} alt="mefo" className="nav-my"/>
        <span className="nav-label">마이</span>
      </div>

    </div>
  )
}

export default Navbar