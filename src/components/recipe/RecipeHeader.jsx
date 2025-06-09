import './RecipeHeader.css'
import { useState } from 'react'
import { useLikeRecipe } from '../../hooks/useLikeRecipe'

function RecipeHeader({ title, onBack, onStorage, recipeId, initialLike }) {
    const [isStored, setIsStored] = useState(initialLike)
    const likeMutation = useLikeRecipe()

    const handleStorageClick = () => {
        if (!isStored && onStorage) {
            onStorage();
        }
        likeMutation.mutate(
            { id: recipeId, like: !isStored },
            {
                onSuccess: () => {
                    setIsStored(prev => !prev);
                },
                onError: (err) => {
                    // console.error("찜 처리 실패:", err);
                }
            }
        );
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