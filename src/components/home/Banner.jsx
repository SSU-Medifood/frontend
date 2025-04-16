import "./Banner.css"
import { useState } from 'react'
import banner1 from '/images/home/banner1.jpg'
import banner2 from '/images/home/banner2.jpg'
import banner3 from '/images/home/banner3.jpg'
import prevIcon from '/images/home/banner-prev.svg'
import nextIcon from '/images/home/banner-next.svg'

const banners = [banner1, banner2, banner3]

function Banner() {
    const [curIndex, setCurIndex] = useState(0)

    const handlePrev = () => {
        setCurIndex((prev) => (prev - 1 + banners.length) % banners.length);
    }

    const handleNext = () => {
        setCurIndex((prev) => (prev + 1) % banners.length);
    }

    return (
        <div className="banner-wrapper">
            <div className="slider-wrapper"
                 style={{ transform: `translateX(-${curIndex * 100}%)` }}
            >
                {banners.map((banner, index) => (
                    <img className="slider-banner"
                         key={index}
                         src={banner}
                         alt={`banner-${index}`}
                    />
                ))}
            </div>

            <button className="banner-prev" onClick={handlePrev}>
                <img src={prevIcon} alt="prev-bt" />
            </button>
            <button className="banner-next" onClick={handleNext}>
                <img src={nextIcon} alt="next-bt" />
            </button>
        </div>
    )
}

export default Banner