// React Query 훅 정의
import { useMutation } from '@tanstack/react-query';
import { checkEmailExists } from '../api/auth';

export const useCheckEmail = () => {
    return useMutation({
        mutationFn: checkEmailExists,
    });
};