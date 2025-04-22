import React from "react";
import "./finalreport.css";
import { FiDownload } from "react-icons/fi";
import { VscGraphLine } from "react-icons/vsc";
import { FaCheckCircle, FaMagic } from "react-icons/fa";


const FinalReport = () => {
    return (
        <div className="final-report-container">
            <h1 className="final-title">Final Report</h1>

            <div className="score-header">
                <div className="score-main">
                    <div className="score-info">
                        <div className="score-icon">
                            <VscGraphLine />
                        </div>
                        <p className="score-label"> Performance Score: <span>87</span></p>
                    </div>
                    <span className="score-date">Generated on March 15, 2025</span>
                </div>
                <button className="download-pdf-button">
                    <FiDownload /> Download PDF
                </button>

                <div className="tags-info">
                    <div className="tag">Platform: <span>TikTok</span></div>
                    <div className="tag">Industry: <span>Beauty & Care</span></div>
                    <div className="tag">Objective: <span>Sales</span></div>
                </div>
            </div>

            <div className="analysis-section">
                <h2>Performance Analysis</h2>
                <div className="overall-score">
                    <div className="score-bar">
                        <div className="score-fill" style={{ width: "87%" }}></div>
                    </div>
                    <span className="score-value">87/100</span>
                </div>

                <div className="sub-scores">
                    <div className="score-box">
                        <p>Visual Appeal</p>
                        <strong>92/100</strong>
                    </div>
                    <div className="score-box">
                        <p>Brand Consistency</p>
                        <strong>85/100</strong>
                    </div>
                </div>
            </div>

            <div className="summary-section">
                <h2>Optimization Summary</h2>
                <ul>
                    <li className="gray-background">
                    <FaCheckCircle /> <strong>Hook Optimization:</strong> <br /> Changed to "Transform your curls in just one wash!"
                    </li>
                    <li className="gray-background">
                    <FaCheckCircle /> <strong>CTA Enhancement:</strong> <br /> Updated to "Try Risk-Free" for better conversion
                    </li>
                </ul>
            </div>

            <div className="next-steps-section">
                <h2>Next Steps</h2>
                <button className="smart-edit-button"><FaMagic /> Smart Edit <span className="pro-badge">PRO</span></button>
                <button className="secondary-button">⟳ Run Another Analysis</button>
            </div>
        </div>
    );
};

export default FinalReport;
