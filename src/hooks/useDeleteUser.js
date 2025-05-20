import { useMutation } from '@tanstack/react-query';
import { deleteUser } from '../api/user';
import { useNavigate } from 'react-router-dom';

export const useDeleteUser = () => {
    const navigate = useNavigate();
    
    return useMutation({
        mutationFn: deleteUser,
        onSuccess: () => {
            localStorage.removeItem('token');
            navigate('/');
        },
        onError: (error) => {
            console.error('회원 탈퇴 실패:', error);
        },
    });
};