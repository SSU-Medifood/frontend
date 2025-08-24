import { useMutation } from '@tanstack/react-query';
import { deleteFcmTokenFromBackend } from '../api/user';

export const useDeleteFcmToken = () => {
    const deviceId = typeof window !== 'undefined' ? localStorage.getItem('mefo_device_id') : null;

    return useMutation({
        mutationFn: () => deleteFcmTokenFromBackend(deviceId),
        onError: (err) => {
            console.error('FCM 토큰 삭제 실패:', err);
        },
    });
};