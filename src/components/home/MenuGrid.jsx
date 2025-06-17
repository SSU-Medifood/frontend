import './MenuGrid.css'
import MenuCard from './MenuCard'
import { useNavigate } from 'react-router-dom'
import { useRecommendMeal } from '../../hooks/useRecommendMeal'

function MenuGrid({name}) {
    const navigate = useNavigate()
    
    const { data: recommendFoods, isLoading, isError } = useRecommendMeal()
    
    if (isLoading) return
    if (isError || !recommendFoods) return

    return (
        <section className="menu-grid-section">
            <p className="grid-title">{name}님에게 좋은 음식을 알려드릴게요.</p>
            <div className="menu-grid">
                {recommendFoods.map((item) => (
                    <MenuCard key={item.recipeId} name={item.name} image={item.imageSmall} onClick={() => navigate(`/recipe/${item.recipeId}`)} />
                ))}
            </div>
        </section>
    )
}

export default MenuGrid
