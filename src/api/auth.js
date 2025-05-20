// api 함수 정의
import api from './api';

// 이메일 중복 확인
export const checkEmailExists = async (email) => {
    const response = await api.post('/login', { email });
    return response.data.data.available; // true 가입 X, false 가입 O
};

// 이메일 인증
export const requestEmailAuth = async (email) => {
    const response = await api.post("/login/mail", { email });
    return response.data.data.authCode;
};

// 로그인
export const loginUser = async (email, password) => {
    try {
        const response = await api.post(
            "/login/login",
            { email, password },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        return response.data.data;
    } catch (error) {
        console.error("로그인 요청 에러:", error);
        throw new Error("로그인에 실패했습니다.");
    }
};

// 비밀번호 변경
export const resetPassword = async ({ email, password }) => {
    const response = await api.patch('/login/password', {
        email,
        password,
    });
    return response.data;
};