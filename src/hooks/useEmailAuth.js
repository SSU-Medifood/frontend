// React Query 훅 정의
import { useMutation } from '@tanstack/react-query';
import { requestEmailAuth } from '../api/auth';

export const useEmailAuth = () => {
    const mutation = useMutation({
        mutationFn: requestEmailAuth,
        onSuccess: (authCode) => {
            // console.log("인증 코드 요청 성공:", authCode);
            localStorage.setItem("authCode", authCode);
        },
        onError: (error) => {
            // console.error("인증 코드 요청 실패:", error);
        },
    });

    return {
        requestAuthCode: mutation.mutate,
        isLoading: mutation.isLoading,
        isError: mutation.isError,
        error: mutation.error,
        data: mutation.data, // authCode만 저장됨
    };
};