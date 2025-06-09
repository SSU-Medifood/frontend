import { useMutation } from '@tanstack/react-query';
import { createStorage } from '../api/storage';

export const useCreateStorage = () => {
    return useMutation({
        mutationFn: createStorage,
    });
};