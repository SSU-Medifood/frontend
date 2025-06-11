import '../styles/shared.css'
import '../styles/Storage.css' 
import { useNavigate } from 'react-router-dom'
import { useStorageList } from '../hooks/useStorageList'
import Navbar from '../components/Navbar'

function Storage() {
    const navigate = useNavigate()
    const { data: storageList, isLoading, isError } = useStorageList()

    if (isLoading) return
    if (isError) return

    const fullStorage = { id: 'all', name: '전체 보관함' }
    const otherStorages = storageList.filter((s) => s.name !== '전체 보관함')

    return (
        <>
            <div className="storage-container">
                <div className="storage-header">
                    <img 
                        src="/images/shared/arrow-back.svg"
                        alt="뒤로가기"
                        className="shared-back"
                        onClick={() => navigate('/home')}
                    />
                    <p className="shared-title">보관함</p>
                </div>

                <div className="storage-list">
                    <button className="storage-item" onClick={() => navigate(`/storage/${fullStorage.id}`, {
                        state: { name: fullStorage.name } 
                    })}>
                        🍴 {fullStorage.name}
                        <img src="/images/recipe/more-next.svg" alt="이동" className="storage-next-icon" />
                    </button>

                    {otherStorages.map((storage) => (
                        <button key={storage.id} className="storage-item" onClick={() => navigate(`/storage/${storage.id}`, { 
                            state: { name: storage.name } 
                        })}>
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