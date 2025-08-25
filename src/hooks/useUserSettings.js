import { useQuery } from '@tanstack/react-query';
import { getUserSettings } from '../api/user';

export const useUserSettings = (opts = {}) => {
    
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    const isAuthed = !!token;
    const deviceId = typeof window !== 'undefined' ? localStorage.getItem('deviceId') : null;

    return useQuery({
        queryKey: ['userSettings', deviceId],
        queryFn: () => {
            if (!deviceId) throw new Error('no deviceId');
            return getUserSettings(deviceId);
        },
        enabled: isAuthed && !!deviceId && (opts.enabled ?? true),
        staleTime: 0,
        cacheTime: 600_000, // 10분 캐싱
        retry: 1, // 실패 시 1번 재시도
        refetchOnWindowFocus: false,
    });
};