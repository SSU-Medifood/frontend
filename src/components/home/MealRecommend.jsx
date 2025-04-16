/* 아침/점심/저녁과 영양 정보를 여기서 합산하여 처리 */

import "./MealRecommend.css"
import MealCard from './MealCard'
import MealNutrient from './MealNutrient'
import miyukguk from '/images/food/miyukguk.jpg'
import omelet from '/images/food/omelet.png'
import galbijjim from '/images/food/galbijjim.jpg'

function MealRecommend() {

  const totalNutrients = {
    nutrients: [
      { label: '탄수화물', value: 260, color: '#82C586' },
      { label: '단백질', value: 90, color: '#96D59B' },
      { label: '지방', value: 70, color: '#ACE3B0' },
      { label: '나트륨', value: 2.3, color: '#C6EBC9' },
      { label: '당', value: 50, color: '#E1F6E3' },
    ]
  }

  // kcal 계산 함수 (나트륨은 보통 계산 안하니까 뺌)
  const calKcal = (nutrients) =>
    nutrients.reduce((sum, n) => {
      switch (n.label) {
        case '탄수화물':
        case '단백질':
          return sum + n.value * 4;
        case '지방':
          return sum + n.value * 9;
        case '당':
          return sum + n.value * 4;
        default:
          return sum;
      }
    }, 0)

  totalNutrients.kcal = Math.round(calKcal(totalNutrients.nutrients))

  return (
    <section className="recommend-section">
      <p className="recommend-title">임성은님에게 오늘의 식단을 추천드려요.</p>
      <div className="meal-cards">
        <MealCard time="아침" name="미역국" image={miyukguk} />
        <MealCard time="점심" name="오므라이스" image={omelet} />
        <MealCard time="저녁" name="매운 쇠고기 갈비찜" image={galbijjim} />
      </div>
      <MealNutrient kcal={totalNutrients.kcal} nutrients={totalNutrients.nutrients} />
    </section>
  )
}

export default MealRecommend