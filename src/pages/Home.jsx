import '../styles/shared.css'
import '../styles/Home.css'
import { useEffect } from 'react'
import { useUserHealthInfo } from '../hooks/useUserHealthInfo'
import logo from '/images/logo/logo.svg'
import symbol from '/images/logo/logo-symbol.svg'
import Banner from '../components/home/Banner'
import MealRecommend from '../components/home/MealRecommend'
import FoodSuggest from '../components/home/FoodSuggest'
import MenuGrid from '../components/home/MenuGrid'
import Navbar from '../components/Navbar'

const DEVICE_KEY = 'mefo_device_id'

function generateDeviceId() {
    if (typeof window !== 'undefined' && window.crypto && window.crypto.randomUUID) {
        return window.crypto.randomUUID()
    }
    // 폴백: 시간 + 랜덤을 섞은 26자 정도의 문자열
    const rnd = Math.random().toString(36).slice(2)
    const t = Date.now().toString(36)
    return `dev_${t}_${rnd}`
}

function ensureDeviceId() {
    if (typeof window === 'undefined') return null
    try {
        let id = localStorage.getItem(DEVICE_KEY)
        if (!id) {
            id = generateDeviceId()
            localStorage.setItem(DEVICE_KEY, id)
        }
        return id
    } catch {
        // 프라이빗 모드/스토리지 제한 등 예외 무시
        return null
    }
}

function Home() {
    useEffect(() => { ensureDeviceId() }, [])

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