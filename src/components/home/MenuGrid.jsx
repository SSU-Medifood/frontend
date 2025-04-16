import './MenuGrid.css'
import MenuCard from './MenuCard'
import miyukguk from '/images/food/miyukguk.jpg'
import omelet from '/images/food/omelet.png'
import galbijjim from '/images/food/galbijjim.jpg'

function MenuGrid() {

    const recommendFoods = [
        { name: '미역국', image: miyukguk },
        { name: '오므라이스', image: omelet },
        { name: '매운 쇠고기 갈비찜', image: galbijjim },
        { name: '미역국', image: miyukguk },
        { name: '오므라이스', image: omelet },
        { name: '매운 쇠고기 갈비찜', image: galbijjim },
    ]

    return (
        <section className="menu-grid-section">
            <p className="grid-title">임성은님에게 좋은 음식을 알려드릴게요.</p>
            <div className="menu-grid">
                {recommendFoods.map((item, idx) => (
                    <MenuCard key={idx} name={item.name} image={item.image} />
                ))}
            </div>
        </section>
    )
}

export default MenuGrid
