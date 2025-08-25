import { useQuery } from '@tanstack/react-query';
import { getUuid } from '../api/user';

// uuid를 불러오는 hook
export const useUuid = () => {
    return useQuery({
        queryKey: ['uuid'],
        queryFn: getUuid,
        staleTime: 300000, // 5분 캐싱
        cacheTime: 600000, // 10분 캐싱
        retry: 1, // 실패 시 1번 재시도
    });
};