import { useState } from 'react';
import './header.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import useHeaderShrink from '../../hook/useHeaderShrink';
import { Link } from 'react-router-dom';

export default function Header() {
    const [menuAberto, setMenuAberto] = useState(false);

    useHeaderShrink('.container-header', 100, menuAberto);

    const handleFecharMenu = () => setMenuAberto(false);

    return (
        <header className={`container-header ${menuAberto ? 'menu-aberto' : ''}`}>

            <div className="logo-header exit">
                <Link to="/home"
                style={{color: 'white'}}
                >klike</Link>
                {/* klike */}
            </div>

            <div className={`menu-mobile-container ${menuAberto ? 'ativo' : ''}`}>
                <div className="logo-header in">
                    <Link to="/home"
                    style={{color: 'white'}}
                    >klike</Link></div>
                <nav className="options-header">
                    <ul>
                        <Link to="/home" onClick={handleFecharMenu}
                        style={{color: 'white'}}
                        >
                            <li>
                                Home
                            </li>
                        </Link>
                        <li onClick={handleFecharMenu}>Product</li>
                        <li onClick={handleFecharMenu}>Pricing</li>
                        <li onClick={handleFecharMenu}>Contact</li>
                    </ul>
                </nav>

                <div className="buttons-header">
                    <button className="sign-up-button">Sign up</button>
                    <button className="get-started-button">Get Started</button>
                </div>
            </div>

            <button
                className="menu-button"
                onClick={() => setMenuAberto(prev => !prev)}
                aria-label="Menu"
            >
                {menuAberto ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
        </header>
    );
}