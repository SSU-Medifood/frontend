import './FoodSuggest.css'
import goodIcon from '/images/home/good.svg'
import badIcon from '/images/home/bad.svg'

function FoodCard({ type, items }) {
    const isGood = type === 'good'
  
    /* type이 좋은 음식인지 나쁜 음식인지 구분해서 넣어주는 느낌? */
    return (
        <div className={`suggest-card ${isGood ? 'good' : 'bad'}`}>
            <p className="suggest-text">
                {items.join(', ')}
            </p>

            <img
                src={isGood ? goodIcon : badIcon}
                alt={isGood ? 'good-food' : 'bad-food'}
                className="suggest-icon"
            />
        </div>
    );
  }
  
export default FoodCard