import './StorageSelectMini.css'
import { useState } from 'react'
import { useStorageList } from '../../hooks/useStorageList'
import { useLikeToStorage } from '../../hooks/useLikeToStorage'
import StorageCreateMini from './StorageCreateMini'

function StorageSelectMini({ onClose, recipeId }) {
    const [showCreateModal, setShowCreateModal] = useState(false)
    const { data: storageList, isLoading, isError } = useStorageList()
    const likeToStorage = useLikeToStorage()

    const handleSelectStorage = (storageId) => {
        likeToStorage.mutate(
            { recipeId, storageId },
            {
                onSuccess: () => {
                    onClose()
                }
            }
        )
    }

    if (isLoading) return <p>불러오는 중...</p>
    if (isError) return <p>보관함을 불러오는 데 실패했습니다.</p>

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
                            {storageList
                                .filter((storage) => storage.name !== '전체 보관함') 
                                .map((storage) => (
                                    <button key={storage.id} className="storage-modal-item" onClick={() => handleSelectStorage(storage.id)}>
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
                />
            )}
        </>
    )
}

export default StorageSelectMini
