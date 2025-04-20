import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './main.css'
import Home from './pages/Home/Home'
import AdsFlow from './pages/AdsFlow/AdsFlow'
import Header from './components/Header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
    <Header />
      <Routes >
        <Route path="/home" element={<Home />} />
        <Route path="/adsflow" element={<AdsFlow />} />
      </Routes>
    </Router>
  </StrictMode>,
)
