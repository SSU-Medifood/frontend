import { messaging } from './firebase';
import { getToken } from "firebase/messaging";

export const requestPermissionAndGetToken = async () => {
    try {
        const permission = await Notification.requestPermission();
        if (permission !== 'granted') {
            // console.log("알림 권한 거부됨");
            return null;
        }

        const token = await getToken(messaging, {
            vapidKey: "BDus0s0__c9KuwyJhZlACij_OtWLpBRdlSlMZvXwroG1XGyF1D7u8ZSQDHzDb1yxYWWkuzB5KaKeEcUZ538gVGg"
        });

        return token;
    } catch (error) {
        // console.error("푸시 토큰 요청 실패:", error);
        return null;
    }
};
