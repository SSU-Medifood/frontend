import './RecipeMore.css'

function RecipeCard({ name, image }) {
    return (
        <div className="more-card-wrapper">
            <div className="more-card">
                <img src={image} alt={name} className="more-image" />
                <p className="more-name">{name}</p>
            </div>
        </div>
    )
  }
  
export default RecipeCard