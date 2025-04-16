import './MealNutrient.css'

function MealNutrient({ kcal, nutrients }) {

    // 총 영양소 합계 - 나중에 api에서 필요하면 사용
    // const total = nutrients.reduce((sum, n) => sum + n.value, 0);

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
                         style={{ flex: n.value, backgroundColor: n.color, }}
                    >
                        {n.value}
                    </div>
                ))}
            </div>

            <div className="nutrient-labels">
                {nutrients.map((n, idx) => (
                    <span key={idx} className="nutrient-label"
                          style={{ flex: n.value }}
                    >
                        {n.label}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default MealNutrient