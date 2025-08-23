import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react'; 
import { getUserSettings } from '../api/user';
import { getOrCreateDeviceId } from '../utils/device'; // 기기 ID 유틸 불러오기

export const useUserSettings = (opts = {}) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    const isAuthed = !!token;
    const [deviceId, setDeviceId] = useState(null);

    useEffect(() => {
        if (!isAuthed) return;
        const id = getOrCreateDeviceId();
        setDeviceId(id);
    }, [isAuthed]);

    return useQuery({
        queryKey: ['userSettings', deviceId],
        queryFn: () => getUserSettings(deviceId),
        enabled: isAuthed && !!deviceId && (opts.enabled ?? true),
        staleTime: 0,
        cacheTime: 600_000, // 10분 캐싱
        retry: 1, // 실패 시 1번 재시도
        refetchOnWindowFocus: false,
    });
};