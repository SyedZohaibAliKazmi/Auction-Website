import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { LoadingProvider } from './Context/Loading-Context/LoadingContext.jsx';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoadingProvider>
    <App />
    </LoadingProvider>
  </StrictMode>,
)
