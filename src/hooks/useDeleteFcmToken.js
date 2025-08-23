import { useMutation } from '@tanstack/react-query';
import { deleteFcmTokenFromBackend } from '../api/user';
import { getOrCreateDeviceId } from '../utils/device';

export const useDeleteFcmToken = () => {
    const deviceId = getOrCreateDeviceId();

    return useMutation({
        mutationFn: () => deleteFcmTokenFromBackend(deviceId),
        onError: (err) => {
            console.error('FCM 토큰 삭제 실패:', err);
        },
    });
};