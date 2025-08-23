import { useMutation, useQueryClient } from '@tanstack/react-query';
import { patchPushAlarmDevice } from '../api/user';
import { getOrCreateDeviceId } from '../utils/device';

export const usePatchPushAlarm = () => {
    const qc = useQueryClient();
    const deviceId = getOrCreateDeviceId();

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