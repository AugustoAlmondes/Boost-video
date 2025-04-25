import React from "react";
import "./finalreport.css";
import { FiDownload } from "react-icons/fi";
import { VscGraphLine } from "react-icons/vsc";
import { FaCheckCircle, FaMagic } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import ProgressBar from '../../../ProgressBar/ProgressBar.jsx'
// import ProgressBar from "../../ProgressBar/ProgressBar";

const FinalReport = () => {
    return (
        <div className="final-report-container">
            <h1 className="final-title">Final Report</h1>

            <div className="score-header">
                <div className="score-top-section">
                    <div className="score-label">
                        <div className="score-icon">
                            <VscGraphLine />
                        </div>
                        <h3>Perfomance Score:</h3>
                        <p>87</p>
                    </div>

                    <div className="socre-button-download">
                        <button><FiDownload /> Download PDF</button>
                    </div>
                </div>

                <div className="score-bottom-section gray-background">
                    <ul className="section-labels-tag">
                        <li>
                            <div className="tag-label">Plataform:</div>
                            <div className="tag-score">TikTok</div>
                        </li>
                        <li>
                            <div className="tag-label">Industry:</div>
                            <div className="tag-score">Beauty & Care</div>
                        </li>
                        <li>
                            <div className="tag-label">Objective:</div>
                            <div className="tag-score">Sales</div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="analysis-section">
                <h2>Performance Analysis</h2>

                <div className="analysis-label">
                    <p>Your Score:</p>
                    <h3>87</h3>
                </div>
                <div className="overall-score">
                    <div className="score-bar">
                        <ProgressBar
                            value={87}
                            max={100}
                            timeout={500}
                        />
                    </div>
                </div>

                <div className="sub-scores gray-background">
                    <div className="score-box">
                        <div className="top-score-box">
                            <p>Visual Appeal</p>
                        </div>
                        <div className="bottom-score-box">
                            92/100
                            <FaArrowTrendUp />
                        </div>
                    </div>
                    <div className="score-box">

                        <div className="top-score-box">
                            <p>Brand Consistency</p>
                        </div>
                        <div className="bottom-score-box">
                            85/100
                            <FaArrowTrendUp />
                        </div>
                    </div>
                </div>
            </div>

            <div className="summary-section">
                <h2>Optimization Summary</h2>
                <ul>
                    <li className="gray-background">
                        <span className="icon-check-summary">
                            <FaCheckCircle />
                        </span>
                        <span>
                            <h4>Hook Optimization</h4>
                            <p>Changed to "Transform your curls in just one wash!"</p>
                        </span>

                    </li>
                    <li className="gray-background">
                        <span className="icon-check-summary">
                            <FaCheckCircle />
                        </span>
                        <span>
                            <h4>CTA Enhancement</h4>
                            <p>Updated to "Try Risk-Free" for better conversion</p>
                        </span>
                    </li>
                </ul>
            </div>
{/* 
            <div className="next-steps-section">
                <h2>Next Steps</h2>
                <button className="smart-edit-button"><FaMagic /> Smart Edit <span className="pro-badge">PRO</span></button>
                <button className="secondary-button">⟳ Run Another Analysis</button>
            </div> */}
        </div>
    );
};

export default FinalReport;
