import './FoodSuggest.css'
import FoodCard from './FoodCard'

function FoodSuggest() {

    const badFoods = [ '당도가 높은 음식', '가공식품', '과도한 포만감을 주는 음식', '알코올', ]
    const goodFoods = [ '통곡물', '채소', '해조류', '우엉', '과일', '계란', '닭고기', '우유', ]
  
    return (
        <section className="suggest-section">
            <p className="suggest-title">임성은님에게 맞는 음식 흑과 백</p>
            <div className="suggest-card-wrapper">
                <FoodCard type="bad" items={badFoods} />
                <FoodCard type="good" items={goodFoods} />
            </div>
        </section>
    )
  }
export default FoodSuggest