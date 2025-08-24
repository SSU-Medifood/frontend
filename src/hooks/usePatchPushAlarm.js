import { useMutation, useQueryClient } from '@tanstack/react-query';
import { patchPushAlarmDevice } from '../api/user';

export const usePatchPushAlarm = () => {
    const qc = useQueryClient();
    const deviceId = typeof window !== 'undefined' ? localStorage.getItem('mefo_device_id') : null;

    return useMutation({
        mutationFn: (fcmToken) => patchPushAlarmDevice(deviceId, fcmToken),
        onSuccess: () => {
            // 기기별 설정 캐시 새로고침
            qc.invalidateQueries({ queryKey: ['userSettings', deviceId] });
        },
        onError: (error) => {
            // console.error('❌ 푸시알림 설정 변경 실패:', error);
        },
    });
};