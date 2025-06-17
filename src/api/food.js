import careApi from './careApi';

// 흑색 음식 추천
export const getBlackFoods = async () => {
    const response = await careApi.get('/recommend/black');
    return response.data.data;
};

// 백색 음식 추천
export const getWhiteFoods = async () => {
    const response = await careApi.get('/recommend/white');
    return response.data.data;
};

// 오늘의 식단 추천
export const getDailyMeal = async () => {
    const response = await careApi.get('/recipe/daily');
    return response.data.data;
};

// 사용자에게 좋은 음식 추천
export const getRecommendMeal = async () => {
    const response = await careApi.get('/recipe/recommend');
    return response.data.data;
}

// 더 많은 레시피 추천
export const getMoreRecipes = async (recipeId) => {
    const response = await careApi.get(`/recipe/more/${recipeId}`);
    return response.data.data;
}