import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SitioWeb } from './SitioWeb'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SitioWeb />
  </StrictMode>,
)
