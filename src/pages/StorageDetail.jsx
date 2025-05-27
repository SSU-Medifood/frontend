import '../styles/shared.css'
import '../styles/StorageDetail.css'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'

/* 보관함에 넣은 레시피 불러오는... */
import '../components/home/MenuGrid.css'
import MenuCard from '../components/home/MenuCard'
import miyukguk from '/images/food/miyukguk.jpg'
import omelet from '/images/food/omelet.png'
import galbijjim from '/images/food/galbijjim.jpg'

function StorageDetail() {
    const navigate = useNavigate()
    const { id } = useParams() // URL 파라미터에서 id 가져오기

    const storedRecipes = [
        { name: '미역국', image: miyukguk },
        { name: '오므라이스', image: omelet },
        { name: '매운 쇠고기 갈비찜', image: galbijjim },
        { name: '미역국', image: miyukguk },
        { name: '오므라이스', image: omelet },
        { name: '매운 쇠고기 갈비찜', image: galbijjim },
        { name: '미역국', image: miyukguk },
        { name: '오므라이스', image: omelet },
        { name: '매운 쇠고기 갈비찜', image: galbijjim },
        { name: '미역국', image: miyukguk },
        { name: '오므라이스', image: omelet },
        { name: '매운 쇠고기 갈비찜', image: galbijjim },
        { name: '미역국', image: miyukguk },
        { name: '오므라이스', image: omelet },
        { name: '매운 쇠고기 갈비찜', image: galbijjim },
        { name: '미역국', image: miyukguk },
        { name: '오므라이스', image: omelet },
        { name: '매운 쇠고기 갈비찜', image: galbijjim },
    ]
    
    return (
        <>
            <div className="storage-detail-container">
                <div className="storage-detail-header">
                    <img 
                        src="/images/shared/arrow-back.svg"
                        alt="뒤로가기"
                        className="shared-back"
                        onClick={() => navigate(-1)}
                    />
                    <p className="shared-title">당뇨에 좋은 한식 레시피 모음</p>
                    <button 
                        className="storage-detail-edit" 
                        onClick={() => navigate(`/storage/edit/${id}`, { state: { name: '당뇨에 좋은 한식 레시피 모음' } })}>
                        ✏️
                    </button>
                </div>

                <section className="menu-grid-section">
                    <div className="menu-grid">
                        {storedRecipes.map((item, idx) => (
                            <MenuCard key={idx} name={item.name} image={item.image} />
                        ))}
                    </div>
                </section>
            </div>

            <Navbar />
        </>
    )
}

export default StorageDetail
