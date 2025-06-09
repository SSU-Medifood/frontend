import './RecipeInfo.css'

function RecipeInfo({ type, kcal, servings }) {

    return (
        <div className="recipe-info">
            <div className="recipe-info-text">
                <span className="recipe-info-icon">🍽️</span>
                <span>{type}</span>
            </div>
            <div className="recipe-info-text">
                <span className="recipe-info-icon">🔥</span>
                <span>{kcal} kcal</span>
            </div>
            <div className="recipe-info-text">
                <span className="recipe-info-icon">👥</span>
                <span>{servings}</span>
            </div>
        </div>
    )
}

export default RecipeInfo