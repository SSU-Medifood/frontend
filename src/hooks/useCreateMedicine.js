import { useMutation } from '@tanstack/react-query';
import { createMedicine } from '../api/medicine';

export const useCreateMedicine = () => {
    return useMutation({
        mutationFn: createMedicine,
    });
};