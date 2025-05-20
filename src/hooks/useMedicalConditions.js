// React Query 훅 정의
import { useQuery } from '@tanstack/react-query';
import { fetchAllergyDrugs, fetchAllergyEtc, fetchDiseases } from '../api/medicalConditions';

// 알레르기 (약물) 목록 조회
export const useAllergyDrugs = () => {
    return useQuery({
        queryKey: ["allergyDrugs"],
        queryFn: fetchAllergyDrugs,
        staleTime: 300000, // 5분 캐싱
        cacheTime: 600000, // 10분 캐싱
        onError: (error) => {
            console.error("약물 알레르기 데이터 불러오기 실패:", error);
        },
    });
};

// 알레르기 (약물 외) 목록 조회
export const useAllergyEtc = () => {
    return useQuery({
        queryKey: ["allergyEtc"],
        queryFn: fetchAllergyEtc,
        staleTime: 300000,
        cacheTime: 600000,
        onError: (error) => {
            console.error("기타 알레르기 데이터 불러오기 실패:", error);
        },
    });
};

// 질병 목록 조회
export const useDiseases = () => {
    return useQuery({
        queryKey: ["diseases"],
        queryFn: fetchDiseases,
        staleTime: 300000,
        cacheTime: 600000,
        onError: (error) => {
            console.error("질환 데이터 불러오기 실패:", error);
        },
    });
};