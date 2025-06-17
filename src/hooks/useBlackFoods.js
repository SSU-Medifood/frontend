// hooks/useBlackFoods.js
import { useQuery } from '@tanstack/react-query';
import { getBlackFoods } from '../api/food';

export const useBlackFoods = () => {
    return useQuery({
        queryKey: ['blackFoods'],
        queryFn: getBlackFoods,
        staleTime: 1000 * 60 * 60 * 24,
        cacheTime: 1000 * 60 * 60 * 24,
        retry: 1,
    });
};