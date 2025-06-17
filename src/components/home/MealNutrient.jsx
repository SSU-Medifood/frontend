import './MealNutrient.css'

function MealNutrient({ kcal, nutrients }) {

    return (
        <div className="nutrient-container">
            <div className="calorie-wrapper">
                <span className="calorie-emoji">🔥</span>
                <span className="calorie-text">{kcal}kcal</span>
                <span className="nutrient-text">* 단위(g)</span>
            </div>

            <div className="nutrient-bar-wrapper">
                {nutrients.map((n, idx) => (
                    <div key={idx} className="nutrient-segment"
                         style={{ width: `${n.value}%`, backgroundColor: n.color, }}
                    >
                        {n.display}
                    </div>
                ))}
            </div>

            <div className="nutrient-labels">
                {nutrients.map((n, idx) => (
                    <span key={idx} className="nutrient-label"
                          style={{ width: `${n.value}%` }}
                    >
                        {n.label}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default MealNutrient