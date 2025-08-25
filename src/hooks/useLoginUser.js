// hooks/useLoginUser.js
import { useMutation } from "@tanstack/react-query";
import { loginUser } from '../api/auth';
import { nanoid } from 'nanoid';

// 로그인 요청을 보내고, 받은 토큰을 로컬에 저장한다.
export const useLoginUser = () => {
    return useMutation({
        mutationFn: ({ email, password }) => loginUser(email, password),
        onSuccess: async (data) => {
            const { token } = data;

            if (token) {
                const pureToken = token.replace("Bearer ", "");
                localStorage.setItem('token', pureToken);
                // console.log('토큰 저장 완료:', pureToken);
            }

            // deviceId 생성
            try {
                let id = localStorage.getItem('mefo_device_id');
                if (!id) {
                    id = nanoid(24);
                    localStorage.setItem('mefo_device_id', id);
                }
            } catch { }
        },
        onError: (error) => {
            // console.error("로그인 실패:", error.message);
        },
    });
};