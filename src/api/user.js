// api 함수 정의
import api from './api';

// 회원가입 요청
export const registerUser = async (userData) => {
    try {
        const response = await api.post('/login/join', userData);
        return response.data;
    } catch (error) {
        console.error("회원가입 요청 에러:", error);
        throw error;
    }
};

// 유저의 건강 정보 조회
export const getUserHealthInfo = async () => {
    try {
        const response = await api.get('/userInfo/get');
        return response.data.data;
    } catch (error) {
        console.error('유저 건강 정보 요청 에러:', error);
        throw new Error('유저 건강 정보를 불러오지 못했습니다.');
    }
};

// 유저 건강 정보 수정
export const patchUserHealthInfo = async (updatedData) => {
    try {
        const response = await api.patch('/userInfo/patch', updatedData);
        return response.data.data;
    } catch (error) {
        console.error('건강 정보 수정 실패:', error);
        throw new Error('건강 정보를 수정하지 못했습니다.');
    }
};

// 사용자 설정 조회 (푸시 알림, 마케팅 수신 동의)
export const getUserSettings = async () => {
    try {
        const response = await api.get('/user/get');
        return response.data.data;
    } catch (error) {
        console.error('설정 정보 요청 에러:', error);
        throw new Error('설정 정보를 불러오지 못했습니다.');
    }
};

// 사용자 설정 수정 (푸시 알림, 마케팅 수신 동의)
export const patchUserSettings = async (settings) => {
    const response = await api.patch('/user/patch', settings);
    return response.data.data;
};

// 회원 탈퇴
export const deleteUser = async () => {
    try {
        const response = await api.delete('/user/delete');
        return response.data;
    } catch (error) {
        console.error('회원 탈퇴 실패:', error);
        throw new Error('회원 탈퇴에 실패했습니다.');
    }
};