import { FaEdit, FaMagic, FaPlay } from 'react-icons/fa';
import './stepsuggestions.css';
import { useRef, useState } from "react";

export default function StepSuggestions() {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [hookState, setHookState] = useState(0);
    const [CTAState, setCTAState] = useState(0);

    const [hookActive, setHookActive] = useState(false);
    const [CTAActive, setCTAActive] = useState(false);
    const [scriptActive, setScriptActive] = useState('');

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

    function handleChangeTextarea(event) {
        const value = event.target.value;
        setScriptActive(value);
    }

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

            <div className={hookActive ? "container-hook-optimization active" : "container-hook-optimization"}>
                <p className="subtitle-box">Hook Optimization</p>
                {/* <div className="current-hook-area"> */}
                <div className={hookState === 2 ? "current-hook-area ads-active" : "current-hook-area"}
                    onClick={() => {
                        setHookState(2)
                        setHookActive(true)
                    }}
                >
                    <h4>Current Hook <span>First 3 seconds</span></h4>
                    <p>"Look for the perfect shampoo?</p>
                </div>
                {/* <div className="suggested-hook-area"> */}
                <div className={hookState === 1 ? "suggested-hook-area ads-active" : "suggested-hook-area "}
                    onClick={() => {
                        setHookState(1)
                        setHookActive(true)
                    }}
                >
                    <h4>Suggested Hook <span> 45% CTR</span></h4>
                    <p>"Transform your curls in just one whash!"</p>
                </div>
            </div>

            <div className={CTAActive ? "container-call-to-action active" : "container-call-to-action"}>
                <p className='subtitle-box' >Call to action</p>
                <div className="call-actions-suggestions">
                    {/* <div className="shop-now-button"> */}
                    <div className={CTAState === 2 ? "shop-now-button ads-active" : "shop-now-button"}
                        onClick={() => {
                            setCTAState(2)
                            setCTAActive(true)
                        }}
                    >
                        <h4>Shop Now <span>+15% CTR</span></h4>
                        <p>Best for direct sales</p>
                    </div>

                    {/* <div className="try-risk-free-button"> */}
                    <div className={CTAState === 1 ? "try-risk-free-button ads-active" : "try-risk-free-button"}
                        onClick={() => {
                            setCTAState(1)
                            setCTAActive(true)
                        }}
                    >
                        <h4>Try Risk Free <span>+28% CTR</span></h4>
                        <p>Recommended for your audience</p>
                    </div>
                </div>
            </div>

            <div className={ scriptActive ? "container-script-optmization active" : "container-script-optmization"}>
                <p className="subtitle-box">Script Optimization</p>
                <textarea
                    className="script-caption-textarea"
                    placeholder="Enter your ad script or caption here"
                    // value={scriptValue}
                    onChange={handleChangeTextarea}
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
