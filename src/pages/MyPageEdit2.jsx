import '../styles/shared.css'
import '../styles/Login.css'
import '../styles/HealthInfo.css'
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { useQueryClient } from '@tanstack/react-query'
import deleteIcon from "/images/signup/item-delete.svg"
import SearchBox from '../components/SearchBox'
import { useUserHealthInfo } from '../hooks/useUserHealthInfo'
import { usePatchUserHealthInfo } from '../hooks/usePatchUserHealthInfo'

function MyPageEdit2() {
    const navigate = useNavigate()
    const queryClient = useQueryClient()

    const { data: userInfo, isLoading, isError } = useUserHealthInfo()
    const updateUser = usePatchUserHealthInfo()

    const [userData, setUserData] = useState(null)
    const [allergy, setAllergy] = useState("")
    const [drugAllergy, setDrugAllergy] = useState([])
    const [otherAllergy, setOtherAllergy] = useState([])
    const [disease, setDisease] = useState([])

    useEffect(() => {
        if (userInfo) {
            const editedUserData = {
                userSex: localStorage.getItem("userSex") || userInfo.userSex,
                height: parseFloat(localStorage.getItem("height")) || userInfo.height,
                weight: parseFloat(localStorage.getItem("weight")) || userInfo.weight,
                userSmoke: localStorage.getItem("userSmoke") || userInfo.userSmoke,
                userDrink: localStorage.getItem("userDrink") || userInfo.userDrink,
            };
            setUserData(editedUserData);

            setAllergy(userInfo.allergy ? "예" : "아니오");
            setDrugAllergy(
                userInfo.allergyDrugList.length > 0 ? userInfo.allergyDrugList : ["없음"]
            );
            setOtherAllergy(
                userInfo.allergyEtcList.length > 0 ? userInfo.allergyEtcList : ["없음"]
            );
            setDisease(
                userInfo.diseaseList.length > 0 ? userInfo.diseaseList : ["없음"]
            );
        }
    }, [userInfo])

    // "없음" 버튼 클릭 시 배열을 비워줌
    const handleNoSelect = (setFunction) => { setFunction(["없음"]); }

    // 항목 추가 함수
    const addItem = (setFunction, items, newItem) => {
        const isNoneSelected = items.length === 1 && items[0] === "없음";
        const isExist = items.some((item) => item.id === newItem.id);

        if (isNoneSelected) { setFunction([newItem]); } 
        else if (!isExist) { setFunction([...items, newItem]); }
    }

    // 항목 삭제 함수
    const removeItem = (setFunction, items, targetItem) => {
        const updatedItems = items.filter((item) => item.id !== targetItem.id);

        if (updatedItems.length === 0) { setFunction(["없음"]); } 
        else { setFunction(updatedItems); }
    }

    // 데이터 가공 함수
    const formatDataForApi = () => {
        return {
            ...userData,
            allergy: allergy === "예",
            allergyDrugs: drugAllergy[0] === "없음" ? [] : drugAllergy.map(item => item.id),
            allergyEtcs: otherAllergy[0] === "없음" ? [] : otherAllergy.map(item => item.id),
            diseases: disease[0] === "없음" ? [] : disease.map(item => item.id)
        };
    }

    const handleSubmit = () => {
        const payload = formatDataForApi();
        // console.log("전송 데이터:", payload);

        updateUser.mutate(payload, {
            onSuccess: () => {
                // 캐시 무효화 후 다시 GET 요청 보내기
                queryClient.invalidateQueries({ queryKey: ['userHealthInfo'] })

                const token = localStorage.getItem("token");
                localStorage.clear();
                if (token) {
                    localStorage.setItem("token", token);
                }

                navigate('/mypage');
            }
        });
    }

    const isValid = allergy != ""

    if (isLoading) {
        return <div>건강 정보를 불러오는 중입니다...</div>;
    }

    if (isError) {
        return <div>건강 정보를 불러오지 못했습니다.</div>;
    }


    return (
        <div className="shared-container">
            <div className="shared-header">
                <img 
                    src="/images/shared/arrow-back.svg"
                    alt="뒤로가기"
                    className="shared-back"
                    onClick={() => navigate(-1)}
                />
                <h2 className="shared-title">건강 정보 수정하기 (2/2)</h2>
            </div>

            <form className="login-content">
                <label className="input-label">알레르기 유무</label>
                <div className="button-group">
                    <button 
                        className={allergy === "아니오" ? "selected" : ""} 
                        onClick={(e) => {
                            e.preventDefault();
                            setAllergy("아니오");
                            handleNoSelect(setDrugAllergy);
                            handleNoSelect(setOtherAllergy);
                            handleNoSelect(setDisease);
                        }}
                    >
                        아니오
                    </button>
                    <button 
                        className={allergy === "예" ? "selected" : ""} 
                        onClick={(e) => { e.preventDefault(); setAllergy("예"); }}
                    >
                        예
                    </button>
                </div>

                <label className="input-label">알레르기 종류(약물)</label>
                <div className="button-group">
                    <button 
                        className={drugAllergy.includes("없음") ? "selected" : ""}
                        onClick={(e) => { e.preventDefault(); handleNoSelect(setDrugAllergy); }}
                    >
                        없음
                    </button>
                </div>
                <div className="selected-items">
                    {drugAllergy.filter((item) => item !== "없음").map((item, index) => (
                        <div key={item.id || index} className="item-chip">
                            {item.allergyDrug}
                            <img 
                                src={deleteIcon} 
                                alt="아이템 삭제" 
                                className="delete-icon" 
                                onClick={() => removeItem(setDrugAllergy, drugAllergy, item)}
                            />
                        </div>
                    ))}
                </div>
                <SearchBox 
                    type="drug" 
                    placeholder="🔍 검색" 
                    onSelect={(item) => addItem(setDrugAllergy, drugAllergy, item)} 
                />

                <label className="input-label">알레르기 종류(약물 외)</label>
                <div className="button-group">
                    <button 
                        className={otherAllergy.includes("없음") ? "selected" : ""}
                        onClick={(e) => { e.preventDefault(); handleNoSelect(setOtherAllergy); }}
                    >
                        없음
                    </button>
                </div>
                <div className="selected-items">
                    {otherAllergy.filter((item) => item !== "없음").map((item, index) => (
                        <div key={item.id || index} className="item-chip">
                            {item.allergyEtc}
                            <img 
                                src={deleteIcon} 
                                alt="아이템 삭제" 
                                className="delete-icon" 
                                onClick={() => removeItem(setOtherAllergy, otherAllergy, item)}
                            />
                        </div>
                    ))}
                </div>
                <SearchBox 
                    type="other" 
                    placeholder="🔍 검색" 
                    onSelect={(item) => addItem(setOtherAllergy, otherAllergy, item)} 
                />

                <label className="input-label">현재 앓고 있는 질환</label>
                <div className="button-group">
                    <button 
                        className={disease.includes("없음") ? "selected" : ""} 
                        onClick={(e) => { e.preventDefault(); handleNoSelect(setDisease); }}
                    >
                        없음
                    </button>
                </div>
                <div className="selected-items">
                    {disease.filter((item) => item !== "없음").map((item, index) => (
                        <div key={item.id || index} className="item-chip">
                            {item.disease}
                            <img 
                                src={deleteIcon} 
                                alt="아이템 삭제" 
                                className="delete-icon" 
                                onClick={() => removeItem(setDisease, disease, item)}
                            />
                        </div>
                    ))}
                </div>
                <SearchBox 
                    type="disease" 
                    placeholder="🔍 검색" 
                    onSelect={(item) => addItem(setDisease, disease, item)} 
                />
            </form>

            <button 
                className={`next-step-button ${isValid ? "" : "disabled"}`} 
                disabled={!isValid} 
                onClick={handleSubmit}
            >
                완료
            </button>
        </div>
    )
}
  
export default MyPageEdit2