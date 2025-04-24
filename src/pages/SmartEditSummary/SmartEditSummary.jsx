import './smarteditsummary.css';
import Video from '/videos/ads.mp4';
import { useNavigate } from 'react-router-dom';

export default function SmartEditSummary() {
    const navigate = useNavigate();

    return (
        <div className="summary-container">
            <div className="before-after">
                <h2>Before vs After</h2>
                <div className="videos-wrapper">
                    <div className="video-block">
                        <p>Original Video</p>
                        <video src={Video} controls className="summary-video" />
                        <div className="score light">Performance Score <strong>6.2</strong></div>
                    </div>
                    <div className="video-block">
                        <p>AI Enhanced</p>
                        <video src={Video} controls className="summary-video" />
                        <div className="score dark">Performance Score <strong>8.9</strong></div>
                    </div>
                </div>
            </div>

            <div className="analysis-box">
                <h2>Performance Analysis</h2>

                <div className="engagement-prediction">
                    <div className="label-row">
                        <span>Engagement Prediction</span>
                        <span className="boost">+43%</span>
                    </div>
                    <div className="ctr-bar">
                        <span>Click-through Rate</span>
                        <div className="bar">
                            <div className="progress" style={{ width: '70%' }}></div>
                            <span className="percentage">3.8%</span>
                        </div>
                    </div>
                </div>

                <div className="platform-optimization">
                    <p>Platform Optimization</p>
                    <div className="platform-buttons">
                        <button className="platform active">Instagram Ready</button>
                        <button className="platform">TikTok Ready</button>
                    </div>
                </div>

                <div className="enhancements-list">
                    <p>AI Enhancements</p>
                    <ul>
                        <li>✓ Optimized Storytelling Structure</li>
                        <li>✓ Enhanced Audio Quality</li>
                        <li>✓ Strategic Text Placement</li>
                    </ul>
                </div>

                <div className="actions">
                    <button onClick={() => navigate(-1)} className="back-btn">Back</button>
                    <button className="download-btn">Download</button>
                </div>
            </div>
        </div>
    );
}
