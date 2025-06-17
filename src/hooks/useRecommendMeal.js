import { useQuery } from '@tanstack/react-query';
import { getRecommendMeal } from '../api/food';

export const useRecommendMeal = () => {
    return useQuery({
        queryKey: ['recommendMeal'],
        queryFn: getRecommendMeal,
        staleTime: 600000,
        cacheTime: 900000,
        retry: 1,
    });
};