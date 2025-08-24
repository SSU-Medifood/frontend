// export function getOrCreateDeviceId() {
//     const KEY = 'mefo_device_id';

//     // localStorage에서 가져다 쓰기
//     // let id = localStorage.getItem(KEY);
//     // if (id) return id;
//     let id = 1;

//     // 없으면 새로 만들어서 저장
//     // if (window.crypto?.randomUUID) {
//     //     id = crypto.randomUUID(); // 브라우저 지원 시
//     // } else {
//     //     id = `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
//     // }

//     // // 시간 + 난수로 새 ID 생성
//     // const now = Date.now().toString(36);    
//     // const rand = Math.random().toString(36).substring(2, 11); 
//     // const id = `dev-${now}-${rand}`;               

//     localStorage.setItem(KEY, id);
//     return id;
// }