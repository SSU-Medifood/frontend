import '../styles/shared.css'
import '../styles/Storage.css' 
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Storage() {
    const navigate = useNavigate()

    const [storageList, setStorageList] = useState([
        { id: 1, name: '당뇨에 좋은 한식 레시피 모음' },
        { id: 2, name: '일식 레시피 모음' },
        { id: 3, name: '중식 레시피 모음' },
        { id: 4, name: '양식 레시피 모음' },
        { id: 5, name: '다이어트 식단' },
        { id: 6, name: '노화 방지 식단' },
        { id: 7, name: '관절에 좋은 음식' },
        { id: 8, name: '오늘 뭐먹지?' },
        { id: 9, name: '명절 레시피 모음' },
        { id: 10, name: '고기 반찬 레시피' },
        { id: 11, name: '당뇨에 좋은 한식 레시피 모음' },
        { id: 12, name: '일식 레시피 모음' },
        { id: 13, name: '중식 레시피 모음' },
        { id: 14, name: '양식 레시피 모음' },
        { id: 15, name: '다이어트 식단' },
        { id: 16, name: '노화 방지 식단' },
        { id: 17, name: '관절에 좋은 음식' },
        { id: 18, name: '오늘 뭐먹지?' },
        { id: 19, name: '명절 레시피 모음' },
        { id: 20, name: '고기 반찬 레시피' },
    ])

    return (
        <>
            <div className="storage-container">
                <div className="storage-header">
                    <img 
                        src="/images/shared/arrow-back.svg"
                        alt="뒤로가기"
                        className="shared-back"
                        onClick={() => navigate(-1)}
                    />
                    <p className="shared-title">보관함</p>
                </div>

                <div className="storage-list">
                    <button className="storage-item">
                        🍴 전체 보관함
                        <img src="/images/recipe/more-next.svg" alt="이동" className="storage-next-icon" />
                    </button>

                    {storageList.map((storage) => (
                        <button key={storage.id} className="storage-item" onClick={() => navigate(`/storage/${storage.id}`)}>
                            {storage.name}
                            <img src="/images/recipe/more-next.svg" alt="이동" className="storage-next-icon" />
                        </button>
                                
                    ))}
                </div>
            </div>

            <button className="storage-create-button" onClick={() => navigate('/storage/create')}>
                    <img src="/images/storage/storage-plus-w.svg" alt="추가" />
            </button>
            <Navbar />
        </>
    )
}
  
export default Storage