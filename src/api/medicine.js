import api from './api';

// 복용약 등록하기
export const createMedicine = async (medicineData) => {
    const response = await api.post('/medicine/create', medicineData);
    return response.data.data;
};

// 복용약 정보 불러오기
export const fetchMedicines = async () => {
    const response = await api.get('/medicine/get');
    return response.data.data;
};

// 복용약 삭제하기 
export const deleteMedicine = async (id) => {
    const response = await api.delete(`/medicine/delete/${id}`);
    return response.data;
};

// 복용약 수정하기 
export const patchMedicine = async ({ id, data }) => {
    const response = await api.patch(`/medicine/patch/${id}`, data);
    return response.data.data;
};