import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './pages/Header/Header'
import Home from './pages/Home/Home'
import './main.css'
import HowWorks from './pages/HowWorks/HowWorks'
import Performance from './pages/Performance/Performance'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/>
    <Header />
    <HowWorks/>
    <Performance/>

  </StrictMode>,
)
