/* 재료 css 그대로 갖다씀... */
import './RecipeIngredient.css'

function RecipeSauce({ sauce }) {

    return (
        <>
            <p className="ingredient-title">양념</p>
            
            <div className="ingredient-wrapper">
                <div className="ingredient-divider" />
                    <ul className="ingredient-list">
                        {sauce.map((item, idx) => (
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

export default RecipeSauce