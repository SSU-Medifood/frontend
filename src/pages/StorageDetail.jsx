import '../styles/shared.css'
import '../styles/StorageDetail.css'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import { useAllStorageRecipes } from '../hooks/useAllStorageRecipes'
import { useStorageRecipes } from '../hooks/useStorageRecipes'
import Navbar from '../components/Navbar'

/* 보관함에 넣은 레시피 불러오는... */
import '../components/home/MenuGrid.css'
import MenuCard from '../components/home/MenuCard'

function StorageDetail() {
    const navigate = useNavigate()
    const { id } = useParams() // URL 파라미터에서 id 가져오기
    const location = useLocation()
    const storageName = location.state?.name || ''

    const isAllStorage = storageName === '전체 보관함'
    const { data: storedRecipes = [], isLoading, isError } 
        = isAllStorage ? useAllStorageRecipes() : useStorageRecipes(id)

    // const storedRecipes = [
    //     { name: '미역국', image: miyukguk },
    //     { name: '오므라이스', image: omelet },
    //     { name: '매운 쇠고기 갈비찜', image: galbijjim },
    // ]
    
    return (
        <>
            <div className="storage-detail-container">
                <div className="storage-detail-header">
                    <img 
                        src="/images/shared/arrow-back.svg"
                        alt="뒤로가기"
                        className="shared-back"
                        onClick={() => navigate('/storage')}
                    />
                    <p className="shared-title">{storageName}</p>
                    {storageName !== '전체 보관함' && (
                        <button 
                            className="storage-detail-edit" 
                            onClick={() => navigate(`/storage/edit/${id}`, { state: { name: storageName } })}>
                            ✏️
                        </button>
                    )}
                </div>

                <section className="menu-grid-section">
                    <div className="menu-grid">
                        {storedRecipes.map((item) => (
                            <MenuCard key={item.recipeId} name={item.name} image={item.imageSmall} />
                        ))}
                    </div>
                </section>
            </div>

            <Navbar />
        </>
    )
}

export default StorageDetail
