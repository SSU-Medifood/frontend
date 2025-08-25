import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // React Router
import { QueryClient, QueryClientProvider } from "@tanstack/react-query" // React Query
import { ReactQueryDevtools } from "@tanstack/react-query-devtools" // DevTools
import './index.css'
import App from './App.jsx'

// React Query Client 생성
const queryClient = new QueryClient()

const DEVICE_KEY = 'mefo_device_id';
(function bootstrapDeviceId() {
  try {
    let id = localStorage.getItem(DEVICE_KEY);
    if (!id) {
      id = (crypto?.randomUUID?.() ??
            `dev_${Date.now().toString(36)}_${Math.random().toString(36).slice(2)}`);
      localStorage.setItem(DEVICE_KEY, id);
      console.log('[Device] NEW ID:', id);
    } else {
      console.log('[Device] EXISTING ID:', id);
    }
  } catch (e) {
    console.error('[Device] localStorage error', e);
  }
})();

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