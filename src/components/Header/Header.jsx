import useHeaderShrink from '../../hook/useHeaderShrink';
import './header.css';

export default function Header() {
    useHeaderShrink('.container-header', 30);
    return (
        <>
        <div className="container-header">
            <div className="logo-header">klike.ai</div>

            <div className="options-header">
                <ul>
                    <li>Features</li>
                    <li>Princing</li>
                    <li>Resources</li>
                </ul>
            </div>

            <div className="buttons-header">
                <button className='sign-up-button'>Sign up</button>
                <button className='get-started-button'>Get Started</button>
            </div>
            
        </div>
        </>
    );
}