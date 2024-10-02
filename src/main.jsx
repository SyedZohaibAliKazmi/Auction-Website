import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { LoadingProvider } from './Context/Loading-Context/LoadingContext.jsx';
import './index.css'
import AuthContextProvider from './Context/AuthContext/AuthContext.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <QueryClientProvider client={queryClient}>
    <AuthContextProvider>
    <LoadingProvider>
    <App />
    </LoadingProvider>
    </AuthContextProvider>
    </QueryClientProvider>
  </StrictMode>,
)
