import './RecipeIngredient.css'

function RecipeIngredient({ ingredients }) {

    return (
        <>
            <p className="ingredient-title">재료</p>
            
            <div className="ingredient-wrapper">
                <div className="ingredient-divider" />
                    <ul className="ingredient-list">
                        {ingredients.map((item, idx) => (
                            <li key={idx} className="ingredient-row">
                                <span className="ingredient-name">{item.name}</span>
                                <span className="ingredient-amount">{item.amount}</span>
                            </li>
                        ))}
                    </ul>
                <div className="ingredient-divider" />
            </div>
        </>
    )
}

export default RecipeIngredient