import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { requestPermissionAndGetToken } from './notifications'
import { sendFcmTokenToBackend } from './api/user'
import { onMessage } from 'firebase/messaging'
import { messaging } from './firebase'

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
  
  useEffect(() => {
    const accessToken = localStorage.getItem('token'); // 로그인 여부 확인하는 로직
    if (!accessToken) return;

    requestPermissionAndGetToken().then(token => {
      if (token) {
        // console.log('FCM 토큰:', token);
        sendFcmTokenToBackend(token);
      }
    });

    // 포그라운드 메시지 수신 처리
    onMessage(messaging, (payload) => {
      // console.log('포그라운드 푸시:', payload);
      const { title, body } = payload.notification;

      if (Notification.permission === 'granted') {
        new Notification(title, { body });
      }
    });
  }, []);

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
