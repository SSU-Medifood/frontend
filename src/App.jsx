import { Routes, Route } from 'react-router-dom'

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

import Storage from './pages/Storage'
import StorageCreate from './pages/StorageCreate'
import StorageDetail from './pages/StorageDetail'
import StorageEdit from './pages/StorageEdit'

import MyPage from './pages/MyPage'
import MyPageEdit1 from './pages/MyPageEdit1'
import MyPageEdit2 from './pages/MyPageEdit2'

import Setting from './pages/Setting'
import PrivacyPolicy from './pages/PrivacyPolicy'

function App() {

  return (
    <>

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
    </>
  )
}

export default App
