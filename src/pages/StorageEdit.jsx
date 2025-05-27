import '../styles/shared.css'
import '../styles/StorageCreate.css'
import { useState } from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'

function StorageEdit() {
    const navigate = useNavigate()
    const { id } = useParams()

    const location = useLocation()
    const [storageName, setStorageName] = useState(location.state?.name || '')
    
    return (
        <>
            <div className="storage-create-container">
                <div className="storage-create-header">
                    <img 
                        src="/images/shared/arrow-back.svg"
                        alt="뒤로가기"
                        className="shared-back"
                        onClick={() => navigate(-1)}
                    />
                    <p className="shared-title">보관함 수정하기</p>
                    <button 
                        className="storage-create-done" 
                        disabled={storageName.trim().length < 1} // 한 글자 이상 입력
                        onClick={() => navigate(`/storage/${id}`)}
                    >
                        저장하기
                    </button>
                </div>

                <div className="storage-create-box">
                    <input
                        type="text"
                        className="storage-create-input"
                        value={storageName}
                        onChange={(e) => setStorageName(e.target.value)}
                        placeholder="보관함 이름은 최소 한 글자 이상 입력해주세요"
                        maxLength={25}
                    />
                </div>

                <button 
                        className="storage-delete-button"
                        onClick={() => {
                            const confirmDelete = window.confirm("보관함을 삭제할까요?\n보관함 내 모든 레시피가 삭제됩니다.");
                            if (confirmDelete) { navigate('/storage'); }
                        }}
                    >
                        보관함 삭제하기
                </button>
            </div>

            <Navbar />
        </>
    )
}

export default StorageEdit