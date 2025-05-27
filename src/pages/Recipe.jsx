import '../styles/shared.css'
import '../styles/Recipe.css'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import RecipeHeader from '../components/recipe/RecipeHeader'
import RecipeImage from '../components/recipe/RecipeImage'
import RecipeTitle from '../components/recipe/RecipeTitle'
import RecipeInfo from '../components/recipe/RecipeInfo'
import RecipeNutrition from '../components/recipe/RecipeNutrition'
import RecipeIngredient from '../components/recipe/RecipeIngredient'
import RecipeSauce from '../components/recipe/RecipeSauce'
import RecipeStep from '../components/recipe/RecipeStep'
import RecipeMore from '../components/recipe/RecipeMore'
import Navbar from '../components/Navbar'

/* 보관함 관련 컴포넌트 */
import StorageSelectMini from '../components/storage/StorageSelectMini'

function Recipe() {
    const navigate = useNavigate()

    const { id } = useParams() // URL 파라미터에서 id 가져오기 (현재 id:galbijjim)
    const nutritionData = [
        { name: '탄수화물', value: 69 },
        { name: '단백질', value: 11 },
        { name: '지방', value: 7 },
        { name: '나트륨', value: 8 },
        { name: '당', value: 5 }
    ]

    const ingredients = [
        { name: '쇠갈비', amount: '1.5kg' },
        { name: '감자', amount: '3개' },
        { name: '소주', amount: '1/2컵' },
        { name: '월계수잎', amount: '3장' },
        { name: '은행', amount: '15알' },
        { name: '대파', amount: '1/3대' }
    ]

    const sauce = [
        { name: '간장', amount: '5큰술' },
        { name: '국간장', amount: '2큰술' },
        { name: '고춧가루', amount: '5큰술' },
        { name: '다진마늘', amount: '2큰술' },
        { name: '물엿', amount: '3큰술' },
        { name: '통깨', amount: '2작은술' },
        { name: '후춧가루', amount: '1작은술' },
        { name: '배', amount: '1/4쪽' },
        { name: '바나나', amount: '1개' },
        { name: '토마토', amount: '1개' }
    ]
      
    const steps = [
        '갈비가 잠길 정도로 찬물을 붓고 반나절 이상 핏물을 빼주세요.',
        '양념장을 만들어 냉장고에서 숙성시켜주세요.',
        '핏물이 빠진 갈비에 물 10컵, 소주, 월계수잎을 넣고 1시간 삶아주세요.',
        '삶은 갈비는 건지고 국물은 기름을 제거해둡니다.',
        '감자는 껍질을 벗긴 후 냄비에 갈비가 잠길 정도의 물을 붓고 10분간 삶아주세요.',
        '냄비에 삶은 갈비와 감자, 양념장, 기름을 제거한 갈비 삶은 국물을 넣고 중간불에 졸여주세요. 너무 졸이지 않도록 주의해주세요.'
    ]

    /* 보관함 모달 제어 */
    const [isStorageOpen, setIsStorageOpen] = useState(false)
    const handleStorageOpen = () => setIsStorageOpen(true)
    const handleStorageClose = () => setIsStorageOpen(false)

    return (
        <>
            <div className={`recipe-container ${isStorageOpen ? 'dimmed' : ''}`}>
                <RecipeHeader title="매운 쇠고기 갈비찜 레시피" onBack={() => navigate(-1)} onStorage={handleStorageOpen} />
                
                <RecipeImage src="/images/food/galbijjim.jpg" alt="매운 쇠고기 갈비찜" />

                <RecipeTitle name="매운 쇠고기 갈비찜" />

                <div className="recipe-divider" />
                <RecipeInfo time="50분 이내" kcal={298} servings="4인분" />
                <div className="recipe-divider" />

                <RecipeNutrition data={nutritionData} />
                <div className="recipe-divider" />

                <RecipeIngredient ingredients={ingredients} />

                <RecipeSauce sauce={sauce} />

                <RecipeStep steps={steps} />

                <RecipeMore />

                {/* <p>레시피 ID: {id}</p> */}
            </div>

            {isStorageOpen && <StorageSelectMini onClose={handleStorageClose} />}

            <Navbar />
        </>
    )
}

export default Recipe