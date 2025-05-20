// api 함수 정의
import api from './api';

// 알레르기 (약물) 목록 불러오기
export const fetchAllergyDrugs = async () => {
    const response = await api.get("/login/allergyDrug/show");
    return response.data.data;
};

// 알레르기 (약물 외) 목록 불러오기
export const fetchAllergyEtc = async () => {
    const response = await api.get("/login/allergyEtc/show");
    return response.data.data;
};

// 질병 목록 불러오기
export const fetchDiseases = async () => {
    const response = await api.get("/login/disease/show");
    return response.data.data;
};