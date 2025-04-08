import './style.css';
import { FaCheck } from "react-icons/fa";

export default function PerformanceVideo() {
    return (
        <>
            <div className="video-container">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="video-bg"
                    aria-label="Background demo video of AI ad performance tool">
                    <source src="/videos/video.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                </video>
                <div className="video-overlay" />
                <div className="overlay-content">
                    <h1>See Your Ad Performance Before
                        Publishing</h1>
                    <p>Our AI analyzes your creative and provides detailed insights on potential
                        performance across different platforms.</p>
                    <ul>
                        <li>
                            <p><FaCheck />
                                Engagement rate prediction</p>
                        </li>
                        <li>
                            <p><FaCheck />
                                Click-through rate analysis creative</p>
                        </li>
                        <li>
                            <p><FaCheck />
                                Platform-specific optimization tips</p>
                        </li>
                    </ul>
                    
                </div>
                <div className="video-fadeout"></div>
            </div>

            <section className="container-redy-optimize">
                <h2>Ready to Optimize Your Ad Performance?</h2>
                <p>Join thousands of creators and businesses using klike to improve their advertising results</p>

                <button>Start Free Trial</button>
            </section>
        </>
    );
}