import { useQuery } from '@tanstack/react-query';
import { getStorageRecipes } from '../api/storage';

export const useStorageRecipes = (storageId) => {
    return useQuery({
        queryKey: ['storageRecipes', storageId],
        queryFn: () => getStorageRecipes(storageId),
        enabled: !!storageId,
    });
};