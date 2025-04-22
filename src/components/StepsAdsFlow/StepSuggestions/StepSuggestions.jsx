import { FaEdit, FaMagic, FaPlay } from 'react-icons/fa';
import './stepsuggestions.css';
import { useRef, useState } from "react";

export default function StepSuggestions() {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [hookState, setHookState] = useState(false);
    const [CTAState, setCTAState] = useState(false);

    const togglePlay = () => {
        const video = videoRef.current;
        if (video.paused) {
            video.play();
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
    };

    return (
        <div className="step-suggestions-container">
            <h1 className="title">Optimization Suggestions</h1>

            <div className="container-preview-section">
                <div className="preview-section">
                    <div className="video-info-section">
                        <p className="subtitle-box">Creative Preview</p>

                        <div className="video-and-details">
                            <div className="video-preview-container">
                                <video
                                    ref={videoRef}
                                    className="video-mobile-preview"
                                    aria-label="Creative video preview"
                                    poster="/images/video-poster.png"
                                    playsInline
                                    muted
                                    onClick={togglePlay}
                                >
                                    <source src="/videos/ads.mp4" type="video/mp4" />
                                </video>

                                {!isPlaying && (
                                    <button className="custom-play-button" onClick={togglePlay}>
                                        <FaPlay />
                                    </button>
                                )}
                            </div>

                            <div className="video-meta-action">
                                <p style={{ fontSize: '1.2rem', fontWeight: '500', color: '#4b5563' }}>Video Information</p>
                                <div className="video-meta">
                                    <h3>Name: <span>ads.mp4</span></h3>
                                    <h3>Original Duration: <span>0:45</span></h3>
                                    <h3>File Name:  <span>ads.mp4</span></h3>
                                    <h3>Size: <span>4.2MB</span></h3>
                                    <h3>Type:<span> MP4</span></h3>
                                </div>

                                <div className="action-buttons-vertical">
                                    <div className="smart-edit-wrapper">
                                        <button className="smart-edit-button"><FaMagic /> Smart Edit</button>
                                        <span className="pro-badge">PRO</span>
                                    </div>
                                    <button className="manual-edit-button"><FaEdit /> Manual Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-hook-optimization">
                <p className="subtitle-box">Hook Optimization</p>
                {/* <div className="current-hook-area"> */}
                <div className={hookState ? "current-hook-area ads-active" : "current-hook-area"}
                    onClick={() => setHookState(!hookState)}
                >
                    <h4>Current Hook <span>First 3 seconds</span></h4>
                    <p>"Look for the perfect shampoo?</p>
                </div>
                {/* <div className="suggested-hook-area"> */}
                <div className={hookState ? "suggested-hook-area" : "suggested-hook-area ads-active"}
                    onClick={() => setHookState(!hookState)}
                >
                    <h4>Suggested Hook <span> 45% CTR</span></h4>
                    <p>"Transform your curls in just one whash!"</p>
                </div>
            </div>

            <div className="container-call-to-action">
                <p className='subtitle-box' >Call to action</p>
                <div className="call-actions-suggestions">
                    {/* <div className="shop-now-button"> */}
                    <div className={CTAState ? "shop-now-button" : "shop-now-button ads-active"}
                        onClick={() => setCTAState(!CTAState)}
                    >
                        <h4>Shop Now <span>+15% CTR</span></h4>
                        <p>Best for direct sales</p>
                    </div>

                    {/* <div className="try-risk-free-button"> */}
                    <div className={CTAState ? "try-risk-free-button ads-active" : "try-risk-free-button"}
                        onClick={() => setCTAState(!CTAState)}
                    >
                        <h4>Try Risk Free <span>+28% CTR</span></h4>
                        <p>Recommended for your audience</p>
                    </div>
                </div>
            </div>

            <div className="container-script-optmization">
                <p className="subtitle-box">Script Optimization</p>
                <textarea
                    className="script-caption-textarea"
                    placeholder="Enter your ad script or caption here"
                    // value={value}
                    // onChange={onChange}
                    rows={6}
                />

                <div className='container-botton-script-optmization'>
                    <p>Recommended length: 30-45 seconds</p>
                    <div className="smart-edit-wrapper">
                        <button className="smart-edit-button"><FaMagic />  Smart Edit</button>
                        <span className="pro-badge">PRO</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
