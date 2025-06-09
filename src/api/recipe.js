import api from './api';

// 레시피 상세 내용 불러오기
export const getRecipeDetail = async (id) => {
    const response = await api.get(`/recipe/${id}`);
    return response.data.data;
};

// 전체 보관함에 레시피 찜하기
export const likeRecipe = async (id) => {
    const response = await api.post(`/userRecipe/like/${id}`);
    return response.data.data;
};

// 찜 취소하기
export const deleteLikeRecipe = async (id) => {
    const response = await api.delete(`/userRecipe/unlike/${id}`);
    return response.data.data;
};

// 특정 보관함에 레시피 찜하기
export const patchLikeToStorage = async ({ recipeId, storageId }) => {
    const response = await api.patch(`/userRecipe/like/${recipeId}/${storageId}`);
    return response.data.data;
};