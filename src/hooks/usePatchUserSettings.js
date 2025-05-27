import { useMutation } from '@tanstack/react-query';
import { patchUserSettings } from '../api/user';

export const usePatchUserSettings = () => {
    return useMutation({
        mutationFn: patchUserSettings,
        onSuccess: (data) => {
            // console.log('✅ 설정 업데이트 성공:', data);
        },
        onError: (error) => {
            // console.error('❌ 설정 업데이트 실패:', error);
        },
    });
};