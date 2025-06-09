import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import './RecipeNutrition.css'

const COLORS = ['#FFEC8C', '#96D59B', '#FFBA8C', '#7FA6E6', '#ffb4a2']

const DAILY_STANDARD = {
    탄수화물: 130, // g
    단백질: 55,    // g
    지방: 70,      // g
    나트륨: 2000   // mg
}

function RecipeNutrition({ data }) {
    // 퍼센트 계산 후 1% 미만은 3%로 고정
    const nutritionData = data.map(item => {
        const base = DAILY_STANDARD[item.name];
        const percent = Math.round((item.value / base) * 100);
        return {
            ...item,
            value: percent < 1 ? 3 : percent,
            display: `${percent}`
        };
    })

    return (
        <div className="nutrition-wrapper">
            <ResponsiveContainer width={200} height={200}>
                <PieChart>
                    <Pie data={nutritionData} dataKey="value" nameKey="name"
                        outerRadius={80} innerRadius={50} paddingAngle={2}
                    >
                        {data.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>

            <div className="nutrition-info">
                {nutritionData.map((item, idx) => (
                    <div key={idx}>
                        <span
                            className="color-box"
                            style={{ backgroundColor: COLORS[idx] }}
                        ></span>
                        {item.display}% {item.name}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecipeNutrition