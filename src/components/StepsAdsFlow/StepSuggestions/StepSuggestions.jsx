import { FaPlay } from 'react-icons/fa';
import './stepsuggestions.css';
import { useRef, useState } from "react";

export default function StepSuggestions() {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

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
                        <p className="video-section-title">Creative Preview</p>

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
                                        <button className="smart-edit-button">Smart Edit</button>
                                        <span className="pro-badge">PRO</span>
                                    </div>
                                    <button className="manual-edit-button">Manual Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
