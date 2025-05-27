import { useQuery } from '@tanstack/react-query';
import { getUserSettings } from '../api/user';

export const useUserSettings = () => {
    return useQuery({
        queryKey: ['userSettings'],
        queryFn: getUserSettings,
        staleTime: 0, // 5분
        cacheTime: 600000, // 10분 캐싱
        retry: 1, // 실패 시 1번 재시도
    });
};