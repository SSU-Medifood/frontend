import { useQuery } from '@tanstack/react-query';
import { getMoreRecipes } from '../api/food';

export const useMoreRecipes = (recipeId) => {
    return useQuery({
        queryKey: ['moreRecipes', recipeId],
        queryFn: () => getMoreRecipes(recipeId),
    });
};