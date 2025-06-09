import '../styles/shared.css'
import '../styles/StorageCreate.css'
import { useState } from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import { usePatchStorage } from '../hooks/usePatchStorage'
import { useDeleteStorage } from '../hooks/useDeleteStorage'
import Navbar from '../components/Navbar'

function StorageEdit() {
    const navigate = useNavigate()
    const { id } = useParams()

    const location = useLocation()
    const [storageName, setStorageName] = useState(location.state?.name || '')
    const patchStorage = usePatchStorage()
    const deleteStorage = useDeleteStorage()

    const handlePatch = () => {
        if (storageName.trim().length < 1) return

        patchStorage.mutate(
            { id, name: storageName },
            {
                onSuccess: () => {
                    navigate(`/storage/${id}`, { state: { name: storageName } })
                },
                onError: (err) => {
                    console.error('보관함 수정 실패:', err)
                }
            }
        )
    }

    const handleDelete = () => {
        const confirmDelete = window.confirm("보관함을 삭제할까요?\n보관함 내 모든 레시피가 삭제됩니다.");
        if (confirmDelete) {
            deleteStorage.mutate(id, {
                onSuccess: () => navigate('/storage'),
            });
        }
    };
    
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
                        onClick={handlePatch}
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

                <button className="storage-delete-button" onClick={handleDelete}>
                        보관함 삭제하기
                </button>
            </div>

            <Navbar />
        </>
    )
}

export default StorageEdit