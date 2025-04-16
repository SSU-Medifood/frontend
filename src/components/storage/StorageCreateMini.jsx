import './StorageCreateMini.css'
import './StorageSelectMini.css'
import { useState } from 'react'

function StorageCreateMini({ onClose, onCreate }) {
    const [storageName, setStorageName] = useState("")

    const handleCreate = () => { onCreate(storageName); onClose(); }
    
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
