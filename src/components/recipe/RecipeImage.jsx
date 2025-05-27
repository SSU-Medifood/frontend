import './RecipeImage.css'

function RecipeImage({ src, alt }) {
    
    return (
        <img
            src={src}
            alt={alt}
            className="recipe-image"
        />
      )
}

export default RecipeImage