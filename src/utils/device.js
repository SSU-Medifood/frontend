export function getOrCreateDeviceId() {
    const KEY = 'mefo_device_id';

    // localStorage에서 가져다 쓰기
    let id = localStorage.getItem(KEY);
    if (id) return id;

    // 없으면 새로 만들어서 저장
    if (window.crypto?.randomUUID) {
        id = crypto.randomUUID(); // 브라우저 지원 시
    } else {
        id = `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
    }

    localStorage.setItem(KEY, id);
    return id;
}