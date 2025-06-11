import careApi from './careApi';

// 추천 질문 3개 가져오기
export const fetchSuggestedQuestions = async () => {
    const response = await careApi.get('/chat/examples');
    return response.data.data;
};