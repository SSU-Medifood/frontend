import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import './RecipeNutrition.css'

const COLORS = ['#FFEC8C', '#96D59B', '#FFBA8C', '#7FA6E6', '#ffb4a2']

function RecipeNutrition({ data }) {

    return (
        <div className="nutrition-wrapper">
            <ResponsiveContainer width={200} height={200}>
                <PieChart>
                    <Pie data={data} dataKey="value" nameKey="name"
                        outerRadius={80} innerRadius={50} paddingAngle={2}
                    >
                        {data.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>

            <div className="nutrition-info">
                {data.map((item, idx) => (
                    <div key={idx}>
                        <span
                            className="color-box"
                            style={{ backgroundColor: COLORS[idx] }}
                        ></span>
                        {item.value}% {item.name}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecipeNutrition