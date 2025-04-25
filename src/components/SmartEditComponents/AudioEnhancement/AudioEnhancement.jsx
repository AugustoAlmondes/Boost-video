import { motion as MOTION } from "framer-motion";
import { FaPlay, FaBell, FaBolt, FaMusic, FaRandom } from "react-icons/fa";
import { MdGraphicEq } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { BsStars } from "react-icons/bs";
import "./audioEnhancement.css";


const listTracks = [
    { title: "Upbeat Corporate", description: "Recommended for your content" },
    { title: "Motivational Pop", description: "Alternative option", },
]

export default function AudioEnhancement({ track, setTrack }) {
    return (
        <>

            <h2 className="box-title">Audio Enhancement</h2>
            <MOTION.div
                className="audio-enhancement"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >

                {/* Voice Over */}
                <div className="card-audio">
                    <div className="card-content-audio">
                        <div className="card-header">
                            <h4 className="card-title">Voice Over</h4>
                            <span className="label-box-ai"> <BsStars /> AI Generated</span>
                        </div>
                        <div className="card-audio-info gray-background">

                            <p className="enhancement-sub">Generated from your voice</p>

                            <button className="link-button">
                                <FaRandom style={{ marginRight: 6 }} /> Regenerate
                            </button>
                            <div className="icon-text-audio">
                                <MdGraphicEq />
                                <span>Waveform visualization</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Background Music */}
                <div className="card-audio">
                    <div className="card-content-audio">
                        <div className="card-header">
                            <h4 className="card-title">Background Music</h4>
                            <button className="label-box">Select Track</button>
                        </div>

                        {listTracks.map((tck, idx) => (
                            <div key={idx} className={track === idx ? "track active gray-background" : "track gray-background"}
                                onClick={() => setTrack(idx)}
                            >
                                <div className="track-info">
                                    <FaPlay className="icon-muted" />
                                    <div>
                                        <p className="track-title">{tck.title}</p>
                                        <p className="track-desc">{tck.description}</p>
                                    </div>
                                </div>
                                <div className="track-percentage">60%</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sound Effects */}
                <div className="card">
                    <div className="card-content">
                        <div className="card-header">
                            <h4 className="card-title">Sound Effects</h4>
                            <span className="optional-text">Optional</span>
                        </div>
                        <div className="sound-buttons">
                            <button className="outline-button icon-button"><FaBell /> Notification</button>
                            <button className="outline-button icon-button"><FaBolt /> Impact</button>
                            <button className="outline-button icon-button"><FaMusic /> Transition</button>
                            <button className="ghost-button icon-button"><FiPlus /> Add More</button>
                        </div>
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="enhancement-buttons">
                    <button className="apply-changes">Apply Changs</button>
                </div>
            </MOTION.div>
        </>
    );

}