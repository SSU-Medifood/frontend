import './RecipeMore.css'
import { useState } from 'react'
import RecipeCard from './RecipeCard'
import { useNavigate } from 'react-router-dom'
import { useMoreRecipes } from '../../hooks/useMoreRecipes'

function RecipeMore({ recipeId }) {
    const navigate = useNavigate()
    
    const [page, setPage] = useState(0)
    const { data: moreRecipes = [], isLoading, isError } = useMoreRecipes(recipeId)

    const handleLeft = () => { 
        if (page > 0) { setPage(page - 1); } 
    }
    const handleRight = () => {
        if (page < Math.floor(moreRecipes.length / 3) - 1) { setPage(page + 1); }
    }

    const sliceRecipes = moreRecipes.slice(page * 3, (page + 1) * 3)

    if (isLoading || isError) return

    return (
        <>
            <p className="more-title">더 많은 레시피</p>

            <div className="recipe-more-container">

                <button className="more-next left" onClick={handleLeft}>
                    <img src="/images/recipe/more-prev.svg" alt="prev-bt" />
                </button>

                <div className="more-cards-wrapper">
                    {sliceRecipes.map((item) => (
                        <RecipeCard key={item.recipeId} name={item.name} image={item.imageSmall} onClick={() => navigate(`/recipe/${item.recipeId}`)} />
                    ))}
                </div>

                <button className="more-next right" onClick={handleRight}>
                    <img src="/images/recipe/more-next.svg" alt="next-bt" />
                </button>
            </div>
        </>
    )
}

export default RecipeMore