import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './smarteditsummary.css';
import Video from '/videos/ads.mp4';
import { useNavigate } from 'react-router-dom';
import { MdOutlineLoop, MdWidthNormal } from "react-icons/md";
import { BsHouse, BsStars } from 'react-icons/bs';
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { FaArrowRight, FaCheck, FaLongArrowAltLeft } from 'react-icons/fa';
import { FiDownload } from "react-icons/fi";

export default function SmartEditSummary() {
    const navigate = useNavigate();

    return (
        <>
            {/* <Header /> */}
            <div className="summary-container">
                <div className="before-after">
                    <h3>Before vs After</h3>
                    <div className="videos-wrapper">
                        <div className="video-block">
                            <p> <MdWidthNormal size={15} /> Original Video</p>
                            <video src={Video} controls className="summary-video" />
                            <div className="score yellow">Performance Score <span>6.2</span></div>
                        </div>
                        <FaArrowRight style={{alignSelf: 'center'}} size={30} color='#e0e0e0'/>
                        <div className="video-block">
                            <p><BsStars /> AI Enhanced</p>
                            <video src={Video} controls className="summary-video" />
                            <div className="score green">Performance Score <span>8.9</span></div>
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

                        <div className="ctr-bar gray-background">
                            <ProgressBar label='Click-through Rate' value={73} max={100} />

                        </div>
                    </div>

                    <div className="platform-optimization gray-background">
                        <p>Platform Optimization</p>
                        <div className="platform-buttons">
                            <button className="platform"><FaCheck /> Instagram Ready</button>
                            <button className="platform"><FaCheck /> TikTok Ready</button>
                            <button className="platform"><FaCheck /> Facebook Ready</button>
                        </div>
                    </div>

                    <div className="enhancements-list gray-background">
                        <p>AI Enhancements</p>
                        <ul>
                            <li><FaCheck /> Optimized Storytelling Structure</li>
                            <li><FaCheck /> Enhanced Audio Quality</li>
                            <li><FaCheck /> Strategic Text Placement</li>
                        </ul>
                    </div>

                    <div className="actions">
                        <button onClick={() => navigate(-1)} className="back-btn"><FaLongArrowAltLeft  size={15}/> Back</button>
                        <button className="download-btn">< FiDownload  size={15}/> Download</button>
                        <button onClick={() => navigate('/adsflow')} className='new-project-btn'><MdOutlineLoop size={15}/> New Project</button>
                        <button className="home-btn" onClick={() => navigate('/')}><BsHouse  size={15}/> Go to Home</button>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
}
