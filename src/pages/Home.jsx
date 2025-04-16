import '../styles/shared.css'
import '../styles/Home.css'
import logo from '/images/logo/logo.svg'
import symbol from '/images/logo/logo-symbol.svg'
import Banner from '../components/home/Banner'
import MealRecommend from '../components/home/MealRecommend'
import FoodSuggest from '../components/home/FoodSuggest'
import MenuGrid from '../components/home/MenuGrid'
import Navbar from '../components/Navbar'

function Home() {
    return (
        <>
            <div className="home-container">
                <img src={logo} alt="home-logo" className="home-logo" />

                <div className="home-greeting-wrapper">
                  <img src={symbol} alt="home-symbol" className="home-symbol" />
                  <p className="home-greeting-text"> 약은 잊지 않고 드셨나요? 오늘도 건강한 하루 보내세요! </p>
                </div>
                <Banner />
                
                <MealRecommend />
                <div className="section-divider" />

                <FoodSuggest />
                <div className="section-divider" />

                <MenuGrid />
            </div>

            <Navbar />
        </>
    )
}
  
export default Home