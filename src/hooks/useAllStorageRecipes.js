import { useQuery } from '@tanstack/react-query';
import { getAllStorageRecipes } from '../api/storage';

export const useAllStorageRecipes = () => {
    return useQuery({
        queryKey: ['storageAllRecipes'],
        queryFn: getAllStorageRecipes,
    });
};