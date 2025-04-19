// src/pages/Login/Login.jsx
import './Login.css';
import { useState } from 'react';

export default function Login() {
  const [isSignUpActive, setIsSignUpActive] = useState(false);

  return (
    <>
      {/* Importa ícones FontAwesome CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      />

      <div className={`container ${isSignUpActive ? 'active' : ''}`} id="container">
        {/* Sign Up */}
        <div className="form-container sing-up">
          <form>
            <h1>Create Account</h1>
            <div className="social-icons">
              <a href="#" className="icons"><i className="fa-brands fa-google-plus-g"></i></a>
              <a href="#" className="icons"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="icons"><i className="fa-brands fa-github"></i></a>
              <a href="#" className="icons"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="button">Sign Up</button>
          </form>
        </div>

        {/* Sign In */}
        <div className="form-container sing-in">
          <form>
            <h1>Sign In</h1>
            <div className="social-icons">
              <a href="#" className="icons"><i className="fa-brands fa-google-plus-g"></i></a>
              <a href="#" className="icons"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="icons"><i className="fa-brands fa-github"></i></a>
              <a href="#" className="icons"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
            <span>or use your email password</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forget Your Password?</a>
            <button type="button">Sign In</button>
          </form>
        </div>

        {/* Toggle Panel */}
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome back!</h1>
              <p>Enter your personal details to use all of site features</p>
              <button className="hidden" onClick={() => setIsSignUpActive(false)}>Sign In</button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <p>Register with your personal details to use all of site features</p>
              <button className="hidden" onClick={() => setIsSignUpActive(true)}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
