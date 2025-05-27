import "./MedicationRecommend.css"

function MedicationRecommend() {

    const morningItems = [
        { label: "비타민B", desc: "오전 식전 또는 식후 복용", subDesc: "* 밤에는 수면 방해로 인해 복용을 권하지 않음" },
        { label: "철분제", desc: "공복 복용이 좋지만 복부 불편감이 있다면 식후 복용", subDesc: "" },
        { label: "유산균", desc: "아침 식전 복용", subDesc: "* 제품마다 상이할 수 있음" },
        { label: "홍삼", desc: "오전 식전 추천", subDesc: "" },
        { label: "코엔자임 Q10", desc: "아침 식간 또는 식후", subDesc: "" },
    ]

    const lunchItems = [
        { label: "비타민B", desc: "점심식사 이후 졸릴 때 추가 복용 가능", subDesc: "" },
        { label: "오메가3", desc: "지방이 들어있는 음식을 섭취한 이후 복용", subDesc: "* 밤에는 소화 불량, 속쓰림 등 위산 역류 증상 때문에 복용을 권하지 않음" },
        { label: "비타민 A, D, E, K", desc: "지방이 많이 들어간 식사 후 복용하면 흡수가 잘됨", subDesc: "* 비타민D는 수면 방해로 인해 밤에는 복용을 권하지 않음" },
        { label: "코엔자임 Q10", desc: "점심 식간 또는 식후", subDesc: "" },
    ]

    const eveningItems = [
        { label: "마그네슘", desc: "수면에 도움을 줄 수 있어 저녁 식후 또는 잠들기 전 복용 추천", subDesc: "" },
        { label: "칼슘", desc: "근육 신경의 안정을 도와 숙면에 도움이 되기 때문에 저녁 식후 복용 추천", subDesc: "* 마그네슘과 병용시에는 1시간 이상 간격으로 복용 필요" },
        { label: "유산균", desc: "잠들기 전 섭취 가능", subDesc: "" },
    ]

    const recommendList = (title, items) => (
        <div className="recommend-wrapper">
            <p className="recommend-time">{title}</p>

            <div className="recommend-box">
                <ul>
                    {items.map((item, idx) => (
                        <li key={idx}>
                            <div className="recommend-label">
                                <strong>✅ {item.label}</strong>
                            </div>
                            <p className="recommend-desc">{item.desc}</p>
                            <p className="recommend-subDesc">{item.subDesc}</p>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )

    return (
        <div className="recommend-container">
            <div className="recommend-list">
                {recommendList("아침", morningItems)}
                {recommendList("점심", lunchItems)}
                {recommendList("저녁", eveningItems)}
            </div>
            <p className="recommend-supplementary">
                <strong>✅ 시간 제약 없이 복용 가능한 영양제</strong><br />
                비타민C, 종합비타민, 쏘팔메토, 콜린&이노시톨
            </p>
        </div>
    )
}

export default MedicationRecommend
