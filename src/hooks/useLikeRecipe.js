import { useMutation, useQueryClient } from '@tanstack/react-query';
import { likeRecipe, deleteLikeRecipe } from '../api/recipe';

export const useLikeRecipe = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ id, like }) => {
            return like ? await likeRecipe(id) : await deleteLikeRecipe(id);
        },
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['recipeDetail', variables.id] });
        },
        onError: (err) => {
            // console.error('찜/찜 해제 실패:', err);
        }
    });
};