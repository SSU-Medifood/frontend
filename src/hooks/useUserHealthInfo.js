import { useQuery } from '@tanstack/react-query';
import { getUserHealthInfo } from '../api/user';

// 유저의 건강 정보를 불러오는 hook
export const useUserHealthInfo = () => {
    return useQuery({
        queryKey: ['userHealthInfo'],
        queryFn: getUserHealthInfo,
        staleTime: 300000, // 5분 캐싱
        cacheTime: 600000, // 10분 캐싱
        retry: 1, // 실패 시 1번 재시도
    });
};