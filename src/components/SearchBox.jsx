import "./SearchBox.css"
import { useState } from "react"
import plusIcon from "/images/signup/plus-g.svg"
import { useAllergyDrugs, useAllergyEtc, useDiseases } from "../hooks/useMedicalConditions"

function SearchBox({ type, placeholder, onSelect }) {
    const [isOpen, setIsOpen] = useState(false)
    const [query, setQuery] = useState("")

    // API 데이터 훅
    const { data: drugsData, isLoading: isLoadingDrugs } = useAllergyDrugs()
    const { data: etcData, isLoading: isLoadingEtc } = useAllergyEtc()
    const { data: diseasesData, isLoading: isLoadingDiseases } = useDiseases()

    // 데이터 분기 처리
    let data = []
    let fieldName = ""

    switch (type) {
        case "drug":
            data = drugsData || [];
            fieldName = "allergyDrug";
            break;
        case "other":
            data = etcData || [];
            fieldName = "allergyEtc";
            break;
        case "disease":
            data = diseasesData || [];
            fieldName = "disease";
            break;
        default:
            break;
    }

    const closeSearch = () => { setIsOpen(false); setQuery(""); }
    const handleSelect = (item) => { onSelect(item); closeSearch(); }

    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);
    
        if (value.trim() !== "") {
            setIsOpen(true); // 검색어가 있을 경우 모달 열기
        } else {
            setIsOpen(false); // 검색어가 없을 경우 모달 닫기
        }
    }

    // 입력된 query를 기준으로 필터링된 데이터
    const filteredData = data.filter((item) =>
        item[fieldName]?.toLowerCase().includes(query.toLowerCase())
    )

    return (
        <div className="search-box-container">
            <input
                type="text"
                className="search-box"
                placeholder={placeholder || "🔍 검색"}
                value={query}
                onChange={handleChange}
            />

            {isOpen && (
                <div className="search-modal">
                    <div className="search-content">
                        {filteredData.length > 0 ? (
                            filteredData.map((item) => (
                                <div 
                                    key={item.id} 
                                    className="search-item" 
                                    onClick={() => handleSelect(item)}
                                >
                                    {item[fieldName]}
                                    <img 
                                        src={plusIcon} 
                                        alt="추가" 
                                        className="add-icon" 
                                        onClick={() => handleSelect(item)} 
                                    />
                                </div>
                            ))
                        ) : (
                            <div className="no-results">검색 결과가 없습니다.</div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default SearchBox