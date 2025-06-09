import '../styles/shared.css'
import '../styles/Setting.css'
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { usePatchUserSettings } from '../hooks/usePatchUserSettings'
import { useUserSettings } from '../hooks/useUserSettings'
import { useDeleteUser } from '../hooks/useDeleteUser'

import { requestPermissionAndGetToken } from '../notifications'
import { sendFcmTokenToBackend, deleteFcmTokenFromBackend } from '../api/user'

function Setting() {
    const navigate = useNavigate()
    const { data: userSettings, isLoading, isError } = useUserSettings()
    const { mutate: updateSettings } = usePatchUserSettings()
    const { mutate: deleteUser } = useDeleteUser()
    
    const [pushAlarm, setPushAlarm] = useState(false)
    const [marketing, setMarketing] = useState(false)

    // 사용자 설정 조회
    useEffect(() => {
        if (userSettings) {
            setPushAlarm(userSettings.pushAlarm)
            setMarketing(userSettings.marketing)
        }
    }, [userSettings])

    // 사용자 설정 수정
    const handleToggle = async (type) => {
        const newSettings = {
            pushAlarm: type === 'push' ? !pushAlarm : pushAlarm,
            marketing: type === 'marketing' ? !marketing : marketing,
        };
        updateSettings(newSettings);

        if (type === 'push') {
            const newValue = !pushAlarm
            setPushAlarm(newValue)

            if (newValue) {
                const token = await requestPermissionAndGetToken()
                if (token) {
                    await sendFcmTokenToBackend(token)
                }
            } else {
                await deleteFcmTokenFromBackend()
            }
        }

        if (type === 'marketing') setMarketing(!marketing);
    }

    if (isLoading) return <div>불러오는 중...</div>
    if (isError) return <div>설정 정보를 불러올 수 없습니다.</div>

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
                    <input type="checkbox" checked={pushAlarm} onChange={() => handleToggle('push')} />
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
                    <input type="checkbox" checked={marketing} onChange={() => handleToggle('marketing')} />
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
                <span className="footer-link" onClick={() => deleteUser()}>회원탈퇴</span>
                <span className="footer-divider">|</span>
                <span className="footer-link" onClick={() => { 
                    deleteFcmTokenFromBackend(); localStorage.removeItem('token'); navigate('/login'); 
                }}>
                    로그아웃
                </span>
            </div>
        </div>
    )
}

export default Setting