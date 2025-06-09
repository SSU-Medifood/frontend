import { useMutation, useQueryClient } from '@tanstack/react-query';
import { patchStorage } from '../api/storage';

export const usePatchStorage = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: patchStorage,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['storageList'] });
        },
    });
};