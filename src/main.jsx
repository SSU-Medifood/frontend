import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // React Router
import { QueryClient, QueryClientProvider } from "@tanstack/react-query" // React Query
import { ReactQueryDevtools } from "@tanstack/react-query-devtools" // DevTools
import './index.css'
import App from './App.jsx'
import { nanoid } from 'nanoid'

const DEVICE_KEY = 'mefo_device_id'
try {
  const newId = nanoid(24)
  localStorage.setItem(DEVICE_KEY, newId)
  console.log('[Device] NEW nanoid stored:', newId)
} catch (e) {
  console.error('[Device] storage error:', e)
}

// React Query Client 생성
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
)