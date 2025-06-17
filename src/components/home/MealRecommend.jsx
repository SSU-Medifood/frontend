/* 아침/점심/저녁과 영양 정보를 여기서 합산하여 처리 */
import "./MealRecommend.css"
import MealCard from './MealCard'
import MealNutrient from './MealNutrient'
import { useNavigate } from 'react-router-dom'
import { useDailyMeal } from '../../hooks/useDailyMeal'

function MealRecommend({name}) {
  const navigate = useNavigate()

  const { data, isLoading, isError } = useDailyMeal()
  
  if (isLoading) return
  if (isError || !data) return

  const { breakfast, lunch, dinner } = data

  // 나트륨 mg > g 변환
  const sodiumTotalG = (breakfast.sodium + lunch.sodium + dinner.sodium) / 1000

  const rawNutrients = [
    { label: '탄수화물', amount: breakfast.carbohydrate + lunch.carbohydrate + dinner.carbohydrate, color: '#82C586' },
    { label: '단백질', amount: breakfast.protein + lunch.protein + dinner.protein, color: '#96D59B' },
    { label: '지방', amount: breakfast.fat + lunch.fat + dinner.fat, color: '#ACE3B0' },
    { label: '나트륨', amount: sodiumTotalG, color: '#C6EBC9' },
  ]

  const totalGram = rawNutrients.reduce((sum, item) => sum + item.amount, 0)

  const nutrients = rawNutrients.map(item => ({
      ...item,
      value: Math.round((item.amount / totalGram) * 100), // 막대 너비용 비율
      display: `${item.label === '나트륨' ? item.amount.toFixed(1) : item.amount}`,
  }))

  const kcal = breakfast.calories + lunch.calories + dinner.calories

  return (
    <section className="recommend-section">
      <p className="recommend-title">{name}님에게 오늘의 식단을 추천드려요.</p>
      <div className="meal-cards">
        <MealCard time="아침" name={breakfast.name} image={breakfast.imageSmall} onClick={() => navigate(`/recipe/${breakfast.recipeId}`)} />
        <MealCard time="점심" name={lunch.name} image={lunch.imageSmall} onClick={() => navigate(`/recipe/${lunch.recipeId}`)} />
        <MealCard time="저녁" name={dinner.name} image={dinner.imageSmall} onClick={() => navigate(`/recipe/${dinner.recipeId}`)} />
      </div>
      <MealNutrient kcal={kcal} nutrients={nutrients} />
    </section>
  )
}

export default MealRecommend