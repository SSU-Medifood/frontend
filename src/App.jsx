import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { getOrCreateDeviceId } from './utils/device'
import { requestPermissionAndGetToken } from './notifications'
import { onMessage, isSupported } from 'firebase/messaging'
import { messaging } from './firebase'

import { useUserSettings } from './hooks/useUserSettings'
import { usePatchPushAlarm } from './hooks/usePatchPushAlarm'

import Landing from './pages/Landing'
import Login from './pages/Login'
import Signup from './pages/Signup'
import HealthInfo from './pages/HealthInfo'
import HealthInfo2 from './pages/HealthInfo2'
import HealthInfo3 from './pages/HealthInfo3'
import SignupComplete from './pages/SignupComplete'
import ServiceTerms from './pages/terms/ServiceTerms'
import PrivacyTerms from './pages/terms/PrivacyTerms'
import SensitiveTerms from './pages/terms/SensitiveTerms'
import MarketingTerms from './pages/terms/MarketingTerms'
import ForgotPW from './pages/ForgotPW'
import ResetPW from './pages/ResetPW'

import Home from './pages/Home'
import Recipe from './pages/Recipe'

import Medication from './pages/Medication'
import MedicationRegister from './pages/MedicationRegister'
import MedicationEdit from './pages/MedicationEdit'

import Chatbot from './pages/Chatbot'

import Storage from './pages/Storage'
import StorageCreate from './pages/StorageCreate'
import StorageDetail from './pages/StorageDetail'
import StorageEdit from './pages/StorageEdit'

import MyPage from './pages/MyPage'
import MyPageEdit1 from './pages/MyPageEdit1'
import MyPageEdit2 from './pages/MyPageEdit2'

import Setting from './pages/Setting'
import PrivacyPolicy from './pages/PrivacyPolicy'

const queryClient = new QueryClient()

function App() {
  const { data: userSettings } = useUserSettings()
  const { mutateAsync: setPushAlarmServer } = usePatchPushAlarm()

  useEffect(() => {
      const token = localStorage.getItem('token')
      if (!token) return
      const id = getOrCreateDeviceId()
      if (id) console.log('[App] ensured deviceId:', id)
  }, [])

  useEffect(() => {
    (async () => {
      const supported = await isSupported().catch(() => false)
      if (!supported || !messaging) return

    // 포그라운드 메시지 수신 처리
      onMessage(messaging, (payload) => {
        const { title, body } = payload?.notification ?? {}
        if (!title) return
        if (Notification.permission === 'granted') {
          new Notification(title, { body })
        }
      })
    })()
  }, [])

  // 알림이 켜져 있다면 최신 토큰을 확보해 서버에 업서트
  useEffect(() => {
    (async () => {
      if (!userSettings?.pushAlarm) return;
      const token = await requestPermissionAndGetToken();
      if (!token) return;
      try {
        await setPushAlarmServer(token); // 서버에 최신 토큰 저장(업서트)
        console.log('[FCM] token synced from App:', token);
      } catch (e) {
        console.error('[FCM] token sync failed:', e);
      }
    })();
  }, [userSettings, setPushAlarmServer]);

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/health-information1" element={<HealthInfo />} />
        <Route path="/health-information2" element={<HealthInfo2 />} />
        <Route path="/health-information3" element={<HealthInfo3 />} />
        <Route path="/signup/complete" element={<SignupComplete />} />
        <Route path="/terms/service" element={<ServiceTerms />} />
        <Route path="/terms/privacy" element={<PrivacyTerms />} />
        <Route path="/terms/sensitive" element={<SensitiveTerms />} />
        <Route path="/terms/marketing" element={<MarketingTerms />} />
        <Route path="/forgot-password" element={<ForgotPW />} />
        <Route path="/reset-password" element={<ResetPW />} />

        <Route path="/home" element={<Home />} />
        <Route path="/recipe/:id" element={<Recipe />} />

        <Route path="/medication" element={<Medication />} />
        <Route path="/medication/register" element={<MedicationRegister />} />
        <Route path="/medication/edit/:id" element={<MedicationEdit />} />

        <Route path="/mefo" element={<Chatbot />} />

        <Route path="/storage" element={<Storage />} />
        <Route path="/storage/create" element={<StorageCreate />} />
        <Route path="/storage/:id" element={<StorageDetail />} />
        <Route path="/storage/edit/:id" element={<StorageEdit />} />

        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypage/edit1" element={<MyPageEdit1 />} />
        <Route path="/mypage/edit2" element={<MyPageEdit2 />} />

        <Route path="/mypage/setting" element={<Setting />} />
        <Route path="/mypage/setting/privacy" element={<PrivacyPolicy />} />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
