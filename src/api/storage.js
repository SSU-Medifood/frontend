import api from './api';

// 보관함 목록 불러오기
export const getStorageList = async () => {
    const response = await api.get('/storage/get');
    return response.data.data;
};

// 보관함 생성하기 
export const createStorage = async (name) => {
    const response = await api.post('/storage/create', { name });
    return response.data.data;
};

// 보관함 이름 수정하기 
export const patchStorage = async ({ id, name }) => {
    const response = await api.patch(`/storage/patch/${id}`, { name });
    return response.data.data;
};

// 보관함 삭제하기
export const deleteStorage = async (id) => {
    const response = await api.delete(`/storage/delete/${id}`);
    return response.data;
};

// 전체 보관함 레시피 불러오기
export const getAllStorageRecipes = async () => {
    const response = await api.get('/storage/getAll');
    return response.data.data;
}

// 특정 보관함 레시피 불러오기
export const getStorageRecipes = async (storageId) => {
    const response = await api.get(`/storage/get/${storageId}`);
    return response.data.data;
};