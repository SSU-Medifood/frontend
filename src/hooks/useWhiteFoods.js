// hooks/useWhiteFoods.js
import { useQuery } from '@tanstack/react-query';
import { getWhiteFoods } from '../api/food';

export const useWhiteFoods = () => {
    return useQuery({
        queryKey: ['whiteFoods'],
        queryFn: getWhiteFoods,
        staleTime: 1000 * 60 * 60 * 24,
        cacheTime: 1000 * 60 * 60 * 24,
        retry: 1,
    });
};