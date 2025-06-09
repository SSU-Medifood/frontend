import './StorageCreateMini.css'
import './StorageSelectMini.css'
import { useState } from 'react'
import { useCreateStorage } from '../../hooks/useCreateStorage'
import { useQueryClient } from '@tanstack/react-query'

function StorageCreateMini({ onClose }) {
    const [storageName, setStorageName] = useState('')
    const createStorage = useCreateStorage()
    const queryClient = useQueryClient()

    const handleCreate = () => {
        if (storageName.trim().length === 0) {
            alert('보관함 이름은 최소 한 글자 이상 입력해주세요');
            return;
        }
        createStorage.mutate(storageName, {
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ['storageList'] })
                onClose()
            },
            onError: (err) => {
                // console.error('보관함 생성 실패:', err)
            }
        })
    }
    
    return (
        <div className="storage-create-modal-container" onClick={onClose}>
            <div className="storage-modal" onClick={(e) => e.stopPropagation()}>
                <div className="storage-create-modal-header">
                    <img
                        className="storage-create-modal-close"
                        src="/images/storage/storage-cancel.svg"
                        alt="닫기"
                        onClick={onClose}
                    />
                    <p className="storage-modal-title">새 보관함 만들기</p>
                    <button className="storage-create-modal-done" onClick={handleCreate} >
                        완료
                    </button>
                </div>
                <div className="storage-create-divider" />

                <div className="storage-create-modal-box">
                    <input
                        type="text"
                        className="storage-create-modal-input"
                        value={storageName}
                        onChange={(e) => setStorageName(e.target.value)}
                        placeholder="보관함 이름은 최소 한 글자 이상 입력해주세요"
                        maxLength={25}
                    />
                </div>
            </div>
        </div>
    )
}

export default StorageCreateMini
