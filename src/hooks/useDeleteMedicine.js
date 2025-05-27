import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteMedicine } from '../api/medicine';

export const useDeleteMedicine = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteMedicine,
        onSuccess: () => {
            // 삭제 성공 시 캐시된 약 목록 갱신
            queryClient.invalidateQueries(['medicines']);
        },
    });
};