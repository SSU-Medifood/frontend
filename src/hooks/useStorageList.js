import { useQuery } from '@tanstack/react-query';
import { getStorageList } from '../api/storage';

export const useStorageList = () => {
    return useQuery({
        queryKey: ['storageList'],
        queryFn: getStorageList,
    });
};