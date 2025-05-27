import { useMutation, useQueryClient } from '@tanstack/react-query';
import { patchMedicine } from '../api/medicine';

export const usePatchMedicine = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: patchMedicine,
        onSuccess: () => {
            // 수정 성공 시 캐시된 약 목록 갱신
            queryClient.invalidateQueries(['medicines']);
        },
    });
};