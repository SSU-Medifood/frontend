import '../styles/shared.css'
import '../styles/Setting.css'
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { usePatchPushAlarm } from '../hooks/usePatchPushAlarm'
import { usePatchMarketing } from '../hooks/usePatchMarketing'
import { useUserSettings } from '../hooks/useUserSettings'
import { useDeleteUser } from '../hooks/useDeleteUser'

import { requestPermissionAndGetToken } from '../notifications'
import { useDeleteFcmToken } from '../hooks/useDeleteFcmToken'
import { useDeleteAllFcmTokens } from '../hooks/useDeleteAllFcmTokens'

function Setting() {
    const navigate = useNavigate()
    const { data: userSettings, isLoading, isError } = useUserSettings()
    const { mutateAsync: setPushAlarmServer, isLoading: isPushMutating } = usePatchPushAlarm()
    const { mutateAsync: setMarketingServer, isLoading: isMktMutating } = usePatchMarketing()
    const { mutateAsync: deleteFcmToken } = useDeleteFcmToken()
    const { mutateAsync: deleteAllFcmTokens } = useDeleteAllFcmTokens()
    const { mutateAsync: deleteUser } = useDeleteUser()
    
    const [pushAlarm, setPushAlarm] = useState(false)
    const [marketing, setMarketing] = useState(false)

    // 사용자 설정 조회
    useEffect(() => {
        if (!userSettings) return
        setPushAlarm(prev => userSettings.pushAlarm ?? prev)
        setMarketing(prev => userSettings.marketing ?? prev)
    }, [userSettings])

    // 사용자 푸시 설정 수정
    const handlePushToggle = async (e) => {
        const next = e.target.checked;
        setPushAlarm(next);

        try {
            if (next) {
                const token = await requestPermissionAndGetToken()

                if (!token) {
                    setPushAlarm(false);
                    alert('알림 권한이 허용되지 않았거나 토큰 발급에 실패했습니다.');
                    return;
                }

                await setPushAlarmServer(token)
            } else {
                await setPushAlarmServer(null)
            }
        } catch (err) {
            console.error('푸시 알림 설정 변경 실패:', err)
            setPushAlarm((prev) => !prev)
            alert('푸시 알림 설정을 변경하지 못했습니다. 잠시 후 다시 시도해주세요.')
        }
    }

    // 사용자 마케팅 설정 수정
    const handleMarketingToggle = async (e) => {
        const next = e.target.checked;
        setMarketing(next);

        try {
            await setMarketingServer(next)
        } catch (err) {
            console.error('마케팅 동의 설정 변경 실패:', err)
            setMarketing((prev) => !prev)
            alert('마케팅 동의 설정을 변경하지 못했습니다. 잠시 후 다시 시도해주세요.')
        }
    };

    if (isLoading) return
    if (isError) return

    return (
        <div className="setting-container">
            <div className="setting-header">
                <img 
                    src="/images/shared/arrow-back.svg"
                    alt="뒤로가기" 
                    className="shared-back"
                    onClick={() => navigate(-1)}
                />
                <h2 className="setting-title">설정</h2>
            </div>

            <div className="setting-wrapper">
                <div className="setting-text">
                    <strong>푸시 알림</strong>
                    <p>흑백처방전에서 보내는 알림을 받을 수 있어요</p>
                </div>
                <label className="switch">
                    <input type="checkbox" checked={pushAlarm} disabled={isPushMutating} onChange={handlePushToggle} />
                    <span className="slider"></span>
                </label>
            </div>
            <div className="setting-divider" />

            <div className="setting-wrapper">
                <div className="setting-text">
                    <strong>마케팅 수신 동의</strong>
                    <p>신규 서비스 및 혜택 정보를 받을 수 있어요</p>
                </div>
                <label className="switch">
                    <input type="checkbox" checked={marketing} disabled={isMktMutating} onChange={handleMarketingToggle} />
                    <span className="slider"></span>
                </label>
            </div>
            <div className="setting-divider" />

            <div className="setting-wrapper">
                <div className="setting-text">
                    <strong>개인정보처리방침</strong>
                </div>
                <img src="/images/recipe/more-next.svg" alt=">" className="setting-next" onClick={() => navigate('/mypage/setting/privacy')}  />
            </div>
            <div className="setting-divider" />

            <div className="setting-wrapper">
                <div className="setting-text">
                    <strong>비밀번호 재설정</strong>
                </div>
                <img src="/images/recipe/more-next.svg" alt=">" className="setting-next" onClick={() => navigate('/forgot-password')} />
            </div>

            <div className="setting-footer">
                <span 
                    className="footer-link" 
                    onClick={async () => {
                        const confirmed = window.confirm('정말로 회원 탈퇴하시겠습니까?\n탈퇴 시 모든 정보가 삭제됩니다.')
                        if (!confirmed) return
                        try {
                            await deleteAllFcmTokens()
                        } catch { }
                        await deleteUser()
                    }}
                >
                    회원탈퇴
                </span>
                <span className="footer-divider">|</span>
                <span 
                    className="footer-link" 
                    onClick={async () => { 
                        try {
                            await deleteFcmToken()
                        } catch (err) {
                            console.error('FCM 토큰 삭제 실패:', err);
                        } finally {
                            localStorage.removeItem('token'); 
                            navigate('/login'); 
                        }
                }}>
                    로그아웃
                </span>
            </div>
        </div>
    )
}

export default Setting