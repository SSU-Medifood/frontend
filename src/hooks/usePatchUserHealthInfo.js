import { useMutation } from '@tanstack/react-query';
import { patchUserHealthInfo } from '../api/user';

export const usePatchUserHealthInfo = () => {
    return useMutation({
        mutationFn: patchUserHealthInfo,
        onSuccess: () => {
            // console.log('✅ 사용자 건강 정보 수정 성공');
        },
        onError: (error) => {
            // console.error('❌ 사용자 건강 정보 수정 실패:', error);
        },
    });
};