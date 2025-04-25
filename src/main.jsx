import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './main.css'
import Home from './pages/Home/Home'
import AdsFlow from './pages/AdsFlow/AdsFlow'
import Header from './components/Header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SmartEdit from './pages/SmartEdit/SmartEdit'
import Footer from './components/Footer/Footer'
import SmartEditSummary from './pages/SmartEditSummary/SmartEditSummary'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/adsflow" element={<AdsFlow />} />
        <Route path='/smartedit' element={<SmartEdit />} />
        <Route path='/summary' element={<SmartEditSummary />} />
      </Routes>
    </Router>
  </StrictMode>,
)
