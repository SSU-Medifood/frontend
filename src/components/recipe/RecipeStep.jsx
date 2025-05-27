import './RecipeStep.css'

function RecipeStep({ steps }) {

    return (
        <>
            <p className="step-title">조리순서</p>
            
            <div className="step-wrapper">
                <div className="step-divider" />
                    <ul className="step-list">
                        {steps.map((step, index) => (
                            <li key={index} className="step-item">
                                <span className="step-number">{index + 1}</span>
                                <span className="step-text">{step}</span>
                            </li>
                        ))}
                    </ul>
                <div className="step-divider" />
            </div>
        </>
    )
}

export default RecipeStep