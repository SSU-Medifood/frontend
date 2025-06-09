import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteStorage } from '../api/storage';

export const useDeleteStorage = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteStorage,
        onSuccess: () => {
            queryClient.invalidateQueries(['storageList']);
        },
    });
};