import './RecipeMore.css'
import React, { useState } from 'react'
import RecipeCard from './RecipeCard'

function RecipeMore() {
    const [page, setPage] = useState(0)

    const moreRecipes = [
        { name: '미역국', image: '/images/food/miyukguk.jpg' },
        { name: '오므라이스', image: '/images/food/omelet.png' },
        { name: '미역국', image: '/images/food/miyukguk.jpg' },
        { name: '오므라이스', image: '/images/food/omelet.png' },
        { name: '미역국', image: '/images/food/miyukguk.jpg' },
        { name: '오므라이스', image: '/images/food/omelet.png' },
        { name: '미역국', image: '/images/food/miyukguk.jpg' },
        { name: '오므라이스', image: '/images/food/omelet.png' },
        { name: '미역국', image: '/images/food/miyukguk.jpg' }
    ]

    const handleLeft = () => { 
        if (page > 0) { setPage(page - 1); } 
    }
    const handleRight = () => {
        if (page < Math.floor(moreRecipes.length / 3) - 1) { setPage(page + 1); }
    }

    const sliceRecipes = moreRecipes.slice(page * 3, (page + 1) * 3)

    return (
        <>
            <p className="more-title">더 많은 레시피</p>

            <div className="recipe-more-container">

                <button className="more-next left" onClick={handleLeft}>
                    <img src="/images/recipe/more-prev.svg" alt="prev-bt" />
                </button>

                <div className="more-cards-wrapper">
                    {sliceRecipes.map((item, idx) => (
                        <RecipeCard key={idx} name={item.name} image={item.image} />
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