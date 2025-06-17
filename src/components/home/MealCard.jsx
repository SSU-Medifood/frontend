import './MealCard.css'

function MealCard({ time, name, image, onClick }) {

    return (
        <div className="meal-card-wrapper" onClick={onClick}>
            <span className="meal-time">{time}</span>
            <div className="meal-card">
                <img src={image} alt={name} className="meal-image" />
                <p className="meal-name">{name}</p>
            </div>
        </div>
    )
}

export default MealCard