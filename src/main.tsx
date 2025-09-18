import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId="700767625762-uke74itdmrhhkcmalesb61ri1ae9b6g5.apps.googleusercontent.com">
    <App />
   </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
