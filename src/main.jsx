import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './pages/Header/Header'
import Home from './pages/Home/Home'
import './main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/>
    <Header />

  </StrictMode>,
)
