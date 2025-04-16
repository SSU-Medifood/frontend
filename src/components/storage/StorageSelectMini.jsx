import './StorageSelectMini.css'
import { useState } from 'react'
import StorageCreateMini from './StorageCreateMini'

function StorageSelectMini({ onClose }) {
    const [showCreateModal, setShowCreateModal] = useState(false)

    const [storageList, setStorageList] = useState([
        { id: 1, name: '당뇨에 좋은 한식 레시피 모음' },
        { id: 2, name: '일식 레시피 모음' },
        { id: 3, name: '중식 레시피 모음' },
        { id: 4, name: '양식 레시피 모음' },
        { id: 5, name: '다이어트 식단' },
        { id: 6, name: '노화 방지 식단' },
        { id: 7, name: '관절에 좋은 음식' },
        { id: 8, name: '오늘 뭐먹지?' },
        { id: 9, name: '명절 레시피 모음' },
        { id: 10, name: '고기 반찬 레시피' },
    ])

    // "완료"누르면 보관함 리스트에 추가해주는 핸들러 함수 
    const handleCreate = (newName) => {
        if (!newName.trim()) return; // 아무것도 입력하지 않으면 그냥 return

        const newStorage = { id: Date.now(), name: newName };  // 임시 ID

        setStorageList(prev => [...prev, newStorage]); // 새 배열로 만들어주기
        setShowCreateModal(false);
    }

    return (
        <>
            <div className="storage-modal-container" onClick={onClose}>
                <div className="storage-modal" onClick={(e) => e.stopPropagation()}>
                    <div className="storage-modal-header">
                        <p className="storage-modal-title">보관함 선택</p>
                        <img
                            className="storage-modal-close"
                            src="/images/storage/storage-cancel.svg"
                            alt="닫기"
                            onClick={onClose}
                        />
                    </div>

                    <div className="storage-modal-list">
                        <button className="storage-modal-add" onClick={() => setShowCreateModal(true)}>
                            <img className="storage-modal-add-icon" src="/images/storage/storage-plus.svg"/>
                            새 보관함 추가
                        </button>

                        <div className="storage-modal-list-scroll">
                            {storageList.map((storage) => (
                                <button key={storage.id} className="storage-modal-item">
                                    {storage.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {showCreateModal && (
                <StorageCreateMini 
                    onClose={() => setShowCreateModal(false)}
                    onCreate={handleCreate}
                />
            )}
        </>
    )
}

export default StorageSelectMini
