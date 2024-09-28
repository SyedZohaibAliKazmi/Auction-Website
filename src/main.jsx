import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { LoadingProvider } from './Context/Loading-Context/LoadingContext.jsx';
import './index.css'
import AuthContextProvider from './Context/AuthContext/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
    <LoadingProvider>
    <App />
    </LoadingProvider>
    </AuthContextProvider>
  </StrictMode>,
)
