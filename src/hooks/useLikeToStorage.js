import { useMutation, useQueryClient } from '@tanstack/react-query';
import { patchLikeToStorage } from '../api/recipe';

export const useLikeToStorage = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ recipeId, storageId }) =>
            patchLikeToStorage({ recipeId, storageId }),

        onSuccess: (_, { storageId }) => {
            queryClient.invalidateQueries({ queryKey: ['storageRecipes', storageId] });
        }
    });
};