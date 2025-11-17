import { MainPage } from '@/pages/main'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainPage />
  </StrictMode>,
)