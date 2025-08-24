// device.js
const DEVICE_KEY = 'mefo_device_id';
let inMemoryId = null; // 최후의 안전망

function genId() {
    try {
        if (typeof crypto !== 'undefined' && crypto.randomUUID) {
            return crypto.randomUUID();
        }
        const arr = new Uint32Array(4);
        if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
            crypto.getRandomValues(arr);
            return `dev_${Array.from(arr).map(n => n.toString(16)).join('')}`;
        }
    } catch {}
    return `dev_${Date.now().toString(36)}_${Math.random().toString(36).slice(2)}`;
}

function setCookie(name, value, days = 3650) {
    try {
        const expires = new Date(Date.now() + days*24*60*60*1000).toUTCString();
        const secure = (typeof location !== 'undefined' && location.protocol === 'https:') ? '; secure' : '';
        document.cookie =
            `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; samesite=Lax${secure}`;
    } catch {}
}

function getCookie(name) {
    try {
        const m = document.cookie.match(
            new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + '=([^;]*)')
        );
        return m ? decodeURIComponent(m[1]) : null;
    } catch {
        return null;
    }
}

export function getOrCreateDeviceId() {
    if (inMemoryId) return inMemoryId;
    if (typeof window === 'undefined') return null;

    // 1. localStorage 확인
    try {
        const existing = window.localStorage.getItem(DEVICE_KEY);
        if (existing) { inMemoryId = existing; return existing; }
    } catch {}

    // 2. 쿠키 확인
    const fromCookie = getCookie(DEVICE_KEY);
    if (fromCookie) {
        inMemoryId = fromCookie;
        try { localStorage.setItem(DEVICE_KEY, fromCookie); } catch {}
        return fromCookie;
    }

    // 3. 새 ID 생성
    const id = genId();
    let saved = false;
    try {
        window.localStorage.setItem(DEVICE_KEY, id);
        const readBack = window.localStorage.getItem(DEVICE_KEY);
        if (readBack === id) saved = true;
    } catch {}

    if (!saved) {
        setCookie(DEVICE_KEY, id);
    } else {
        setCookie(DEVICE_KEY, id);
    }

    inMemoryId = id;
    return id;
}