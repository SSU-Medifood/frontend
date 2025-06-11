import { useQuery } from '@tanstack/react-query';
import { fetchSuggestedQuestions } from '../api/chat';

export const useSuggestedQuestions = () => {
    return useQuery({
        queryKey: ['suggestedQuestions'],
        queryFn: fetchSuggestedQuestions,
    });
};