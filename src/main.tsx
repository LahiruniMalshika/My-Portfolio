import emailjs from '@emailjs/browser'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { emailjs as emailjsConfig } from './data/content'
import './styles/index.css'

emailjs.init(emailjsConfig.publicKey)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
