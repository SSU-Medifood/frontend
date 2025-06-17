import '../styles/shared.css'
import '../styles/Recipe.css'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useRecipeDetail } from '../hooks/useRecipeDetail'
import RecipeHeader from '../components/recipe/RecipeHeader'
import RecipeImage from '../components/recipe/RecipeImage'
import RecipeTitle from '../components/recipe/RecipeTitle'
import RecipeInfo from '../components/recipe/RecipeInfo'
import RecipeNutrition from '../components/recipe/RecipeNutrition'
import RecipeIngredient from '../components/recipe/RecipeIngredient'
// import RecipeSauce from '../components/recipe/RecipeSauce'
import RecipeStep from '../components/recipe/RecipeStep'
import RecipeMore from '../components/recipe/RecipeMore'
import Navbar from '../components/Navbar'
import StorageSelectMini from '../components/storage/StorageSelectMini'

function Recipe() {
    const navigate = useNavigate()
    const { id } = useParams()
    const { data, isLoading, isError } = useRecipeDetail(id)

    /* 보관함 모달 제어 */
    const [isStorageOpen, setIsStorageOpen] = useState(false)
    const handleStorageOpen = () => setIsStorageOpen(true)
    const handleStorageClose = () => setIsStorageOpen(false)

    if (isLoading) return
    if (isError) return

    const {
        menu,
        imageLarge,
        calories,
        amount,
        foodType,
        carbohydrate,
        protein,
        fat,
        sodium,
        ingredientResponses,
        instructionResponses
    } = data

    return (
        <>
            <div className={`recipe-container ${isStorageOpen ? 'dimmed' : ''}`}>
                <RecipeHeader 
                    title={`${menu} 레시피`} 
                    onBack={() => navigate(-1)} 
                    onStorage={handleStorageOpen} 
                    recipeId={id}
                    initialLike={data.like}
                />
                
                <RecipeImage src={imageLarge} alt={menu} />

                <RecipeTitle name={menu} />

                <div className="recipe-divider" />
                <RecipeInfo type={foodType} kcal={calories} servings={`${amount}인분`} />
                <div className="recipe-divider" />

                <RecipeNutrition data={[
                    { name: '탄수화물', value: carbohydrate },
                    { name: '단백질', value: protein },
                    { name: '지방', value: fat },
                    { name: '나트륨', value: sodium }
                ]} />
                <div className="recipe-divider" />

                <RecipeIngredient ingredients={ingredientResponses.map(i => ({ name: i.ingredientName, amount: i.capacity }))} />

                {/* <RecipeSauce sauce={sauce} /> */}

                <RecipeStep steps={instructionResponses.map(s => s.description)} />

                <RecipeMore recipeId={id} />
            </div>

            {isStorageOpen && <StorageSelectMini onClose={handleStorageClose} recipeId={id} />}

            <Navbar />
        </>
    )
}

export default Recipe