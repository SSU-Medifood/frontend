import { useMutation } from '@tanstack/react-query';
import { deleteAllFcmTokensFromBackend } from '../api/user';

export const useDeleteAllFcmTokens = () => {
    return useMutation({
        mutationFn: () => deleteAllFcmTokensFromBackend(),
        onError: (err) => {
            console.error('모든 FCM 토큰 삭제 실패:', err);
        },
        retry: 1,
    });
};