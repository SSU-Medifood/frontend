import { useMutation, useQueryClient } from '@tanstack/react-query';
import { patchMarketingSetting } from '../api/user';

export const usePatchMarketing = () => {
    const qc = useQueryClient();

    return useMutation({
        mutationFn: (marketing) => patchMarketingSetting(marketing),
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: ['userSettings'] });
        },
        onError: (error) => {
            // console.error('❌ 마케팅 동의 수정 실패:', error);
        },
    });
};