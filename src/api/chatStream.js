const API_CARE_BASE_URL = import.meta.env.VITE_API_CARE_BASE_URL;

export const streamChatResponse = async (question, onChunk) => {
    const token = localStorage.getItem('token');

    const response = await fetch(`${API_CARE_BASE_URL}/chat/stream`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'text/event-stream',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ question }),
    });

    if (!response.body) throw new Error('ReadableStream을 지원하지 않는 환경입니다.');

    const reader = response.body.getReader();
    const decoder = new TextDecoder('utf-8');
    let done = false;

    while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        const chunk = decoder.decode(value);

        // 'data: ' 제거 후 onChunk 호출
        chunk
            .split('\n')
            .filter(line => line.startsWith('data: '))
            .forEach(line => {
                const text = line.replace(/^data: /, '');
                if (text !== '[DONE]') {
                    onChunk(text);
                }
            });
    }
};