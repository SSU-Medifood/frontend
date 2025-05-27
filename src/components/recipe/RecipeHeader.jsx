import './RecipeHeader.css'
import { useState } from 'react'

function RecipeHeader({ title, onBack, onStorage }) {
    const [isStored, setIsStored] = useState(false)

    const handleStorageClick = () => {
        if (!isStored) { // 처음 클릭할 때만 모달 열어주기
            if (onStorage) onStorage();
        }
        setIsStored(prev => !prev);
    }
    
    return (
        <div className="recipe-header">
            <img
                src="/images/shared/arrow-back.svg"
                alt="뒤로가기"
                className="recipe-back"
                onClick={onBack}
            />
            <p className="recipe-title">{title}</p>
            <img
                className="storage-icon"
                src={isStored ? "/images/storage/storage-r.svg" : "/images/storage/storage-b.svg"}
                alt="보관함"
                onClick={handleStorageClick}
            />
        </div>
    )
}

export default RecipeHeader