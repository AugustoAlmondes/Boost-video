import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './pages/Header/Header'
import Home from './pages/Home/Home'
import './main.css'
import HowWorks from './pages/HowWorks/HowWorks'
import PerformanceVideo from './pages/PerformanceVideo/PerformanceVideo'
import Testimony from './pages/Testimony/Testimony'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/>
    <Header />
    <HowWorks/>
    <PerformanceVideo/>
    <Testimony/>

  </StrictMode>,
)
