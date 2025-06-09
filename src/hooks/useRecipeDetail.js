import { useQuery } from '@tanstack/react-query';
import { getRecipeDetail } from '../api/recipe';

export const useRecipeDetail = (id) => {
    return useQuery({
        queryKey: ['recipeDetail', id],
        queryFn: () => getRecipeDetail(id),
        enabled: !!id,
    });
};