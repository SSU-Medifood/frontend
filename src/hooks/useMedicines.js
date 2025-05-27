import { useQuery } from '@tanstack/react-query';
import { fetchMedicines } from '../api/medicine';

export const useMedicines = () => {
    return useQuery({
        queryKey: ['medicines'],
        queryFn: fetchMedicines,
    });
};