import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // React Router
import { QueryClient, QueryClientProvider } from "@tanstack/react-query" // React Query
import { ReactQueryDevtools } from "@tanstack/react-query-devtools" // DevTools
import './index.css'
import App from './App.jsx'

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