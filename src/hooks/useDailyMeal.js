import { useQuery } from '@tanstack/react-query';
import { getDailyMeal } from '../api/food';

export const useDailyMeal = () => {
    return useQuery({
        queryKey: ['dailyMeal'],
        queryFn: getDailyMeal,
        staleTime: 1000 * 60 * 60 * 24,
        cacheTime: 1000 * 60 * 60 * 24,
        retry: 1,
    });
};