import '../styles/shared.css'
import '../styles/StorageCreate.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useCreateStorage } from '../hooks/useCreateStorage'
import Navbar from '../components/Navbar'

function StorageCreate() {
    const navigate = useNavigate()
    const [storageName, setStorageName] = useState('')
    const createStorage = useCreateStorage()

    const handleCreate = () => {
        if (storageName.trim().length === 0) {
            alert('보관함 이름은 최소 한 글자 이상 입력해주세요');
            return;
        }
        createStorage.mutate(storageName, {
            onSuccess: () => {
                navigate('/storage')
            },
            onError: (err) => {
                // console.error('보관함 생성 실패:', err)
            }
        })
    }
    
    return (
        <>
            <div className="storage-create-container">
                <div className="storage-create-header">
                    <img 
                        src="/images/shared/arrow-back.svg"
                        alt="뒤로가기"
                        className="shared-back"
                        onClick={() => navigate('/storage')}
                    />
                    <p className="shared-title">새 보관함 만들기</p>
                    <button className="storage-create-done" onClick={handleCreate}>
                        완료
                    </button>
                </div>

                <div className="storage-create-box">
                    <input
                        type="text"
                        className="storage-create-input"
                        placeholder="보관함 이름은 최소 한 글자 이상 입력해주세요"
                        maxLength={25}
                        value={storageName}
                        onChange={(e) => setStorageName(e.target.value)}
                    />
                </div>
            </div>

            <Navbar />
        </>
    );
}

export default StorageCreate;
