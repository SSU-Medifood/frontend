// api 함수 정의
import api from './api';

// 이메일 중복 확인 요청
export const checkEmailExists = async (email) => {
    const response = await api.post('/login', { email });
    return response.data.data.available; // true 가입 X, false 가입 O
};