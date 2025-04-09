import './footer.css';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="footer">
            <h2 className="footer-title">klike.ai</h2>
            <p className="footer-description">Raising your ads with intelligence and performance.</p>

            <div className="footer-grid">
                <div className="footer-column">
                    <h3>Product</h3>
                    <ul>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Case Studies</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3>Company</h3>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>

                <div className="footer-column socials">
                    <h3>Connect</h3>
                    <div className="footer-socials">
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaLinkedin /></a>
                        <a href="#"><FaEnvelope /></a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Kx  xlike. All rights reserved.</p>
            </div>
        </footer>
    );
}
