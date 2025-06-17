import './FoodSuggest.css'
import FoodCard from './FoodCard'
import { useBlackFoods } from '../../hooks/useBlackFoods'
import { useWhiteFoods } from '../../hooks/useWhiteFoods'

function FoodSuggest({name}) {

    const { data: blackFoods, isLoading: blackLoading, isError: blackError } = useBlackFoods()
    const { data: whiteFoods, isLoading: whiteLoading, isError: whiteError } = useWhiteFoods()
  
    if (blackLoading || whiteLoading) return
    if (blackError || whiteError) return

    return (
        <section className="suggest-section">
            <p className="suggest-title">{name}님에게 맞는 음식 흑과 백</p>
            <div className="suggest-card-wrapper">
                <FoodCard type="bad" items={blackFoods} />
                <FoodCard type="good" items={whiteFoods} />
            </div>
        </section>
    )
  }
export default FoodSuggest