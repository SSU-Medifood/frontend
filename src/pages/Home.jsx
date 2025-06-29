import '../styles/shared.css'
import '../styles/Home.css'
import { useUserHealthInfo } from '../hooks/useUserHealthInfo'
import logo from '/images/logo/logo.svg'
import symbol from '/images/logo/logo-symbol.svg'
import Banner from '../components/home/Banner'
import MealRecommend from '../components/home/MealRecommend'
import FoodSuggest from '../components/home/FoodSuggest'
import MenuGrid from '../components/home/MenuGrid'
import Navbar from '../components/Navbar'

function Home() {
    const { data: userInfo, isLoading, isError } = useUserHealthInfo()

    if (isLoading) return
    if (isError || !userInfo) return

    return (
        <>
            <div className="home-container">
                <img src={logo} alt="home-logo" className="home-logo" />

                <div className="home-greeting-wrapper">
                  <img src={symbol} alt="home-symbol" className="home-symbol" />
                  <p className="home-greeting-text"> 약은 잊지 않고 드셨나요? 오늘도 건강한 하루 보내세요! </p>
                </div>
                <Banner />
                
                <MealRecommend name={userInfo.name} />
                <div className="section-divider" />

                <FoodSuggest name={userInfo.name} />
                <div className="section-divider" />

                <MenuGrid name={userInfo.name} />
            </div>

            <Navbar />
        </>
    )
}
  
export default Home