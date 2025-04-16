import '../styles/shared.css'
import '../styles/StorageCreate.css'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

function StorageCreate() {
    const navigate = useNavigate()
    
    return (
        <>
            <div className="storage-create-container">
                <div className="storage-create-header">
                    <img 
                        src="/images/shared/arrow-back.svg"
                        alt="뒤로가기"
                        className="shared-back"
                        onClick={() => navigate(-1)}
                    />
                    <p className="shared-title">새 보관함 만들기</p>
                    <button className="storage-create-done" onClick={() => navigate('/storage')}>
                        완료
                    </button>
                </div>

                <div className="storage-create-box">
                    <input
                        type="text"
                        className="storage-create-input"
                        placeholder="보관함 이름은 최소 한 글자 이상 입력해주세요"
                        maxLength={25}
                    />
                </div>
            </div>

            <Navbar />
        </>
    );
}

export default StorageCreate;
