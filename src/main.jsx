import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './main.css'
import Home from './pages/Home/Home'
import AdsFlow from './pages/AdsFlow/AdsFlow'
import Header from './components/Header/Header'
import Login from './pages/Login/Login';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Login />
     {/*  <Home/> */}
    {/*  <AdsFlow /> */}
  </StrictMode>,
)
