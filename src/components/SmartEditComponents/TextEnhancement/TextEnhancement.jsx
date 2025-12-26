import { BsStars } from 'react-icons/bs';
import { FiRefreshCw } from 'react-icons/fi';
import { MdOutlineFormatAlignLeft, MdOutlineFormatAlignCenter, MdOutlineFormatAlignRight } from 'react-icons/md';
import './textenhancement.css';
import {  AiOutlineSafety } from "react-icons/ai";
import { useState } from 'react';
import {  FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

export default function TextEnhancement() {

    const [audioSelected, setAudioSelected] = useState([]);
    const [formatAlign, setFormatAlign] = useState(1);
    return (
        <>
            <h3 className='box-title'>Text Enhancement</h3>
            <div className="box-text-enhancement">

                <div className="enhancement-block">
                    <div className="enhancement-header">
                        <h4 className='box-subtitle'>Subtitles</h4>
                        <span className="label-box-ai"> <BsStars /> AI Generated</span>
                    </div>
                    <div className="subtitles-list">
                        <div className="refresh-button">
                            <p>
                                Generated from audio
                            </p>
                            <button>
                                <FiRefreshCw /> Regenerate
                            </button>
                        </div>
                        <p className={audioSelected.includes(1) ? "audio-generated active gray-background" : "audio-generated gray-background"}
                            onClick={() => {
                                !(audioSelected.includes(1)) ?
                                    setAudioSelected([...audioSelected, 1]) :
                                    setAudioSelected(audioSelected.filter(item => item !== 1))
                            }}

                        ><span>0:00 - 0:03</span>Welcome to our product...</p>
                        <p className={audioSelected.includes(2) ? "audio-generated active gray-background" : "audio-generated gray-background"}
                            onClick={() => {
                                !(audioSelected.includes(2)) ?
                                    setAudioSelected([...audioSelected, 2]) :
                                    setAudioSelected(audioSelected.filter(item => item !== 2))
                            }}
                        ><span>0:03 - 0:06</span>Let me show you how it works...</p>
                        <p className={audioSelected.includes(3) ? "audio-generated active gray-background" : "audio-generated gray-background"}
                            onClick={() => {
                                !(audioSelected.includes(3)) ?
                                    setAudioSelected([...audioSelected, 3]) :
                                    setAudioSelected(audioSelected.filter(item => item !== 3))
                            }}
                        ><span>0:06 - 0:12</span>Thank you for watching</p>
                        <p className={audioSelected.includes(4) ? "audio-generated active gray-background" : "audio-generated gray-background"}
                            onClick={() => {
                                !(audioSelected.includes(4)) ?
                                    setAudioSelected([...audioSelected, 4]) :
                                    setAudioSelected(audioSelected.filter(item => item !== 4))
                            }}
                        ><span>0:12 - 0:15</span>Thanks for watching our video</p>
                    </div>
                </div>

                <div className="enhancement-block">
                    <div className="enhancement-header">
                        <h4 className='box-subtitle'>Text Overlay</h4>
                        <span className="label-box">Customize</span>
                    </div>
                    <div className="text-overlay gray-background">
                        <label>Call to Action</label>
                        <div className="cta-input">
                            <input type="text" placeholder="Shop Now" />
                            <div className="align-icons">
                                <MdOutlineFormatAlignLeft
                                    onClick={() => {
                                        setFormatAlign(1);
                                    }}
                                    className={formatAlign === 1 ? "align-icon active" : "align-icon"}
                                />
                                <MdOutlineFormatAlignCenter
                                    onClick={() => {
                                        setFormatAlign(2);
                                    }}
                                    className={formatAlign === 2 ? "align-icon active" : "align-icon"}
                                />
                                <MdOutlineFormatAlignRight 
                                    onClick={() => {
                                        setFormatAlign(3);
                                    }}
                                    className={formatAlign === 3 ? "align-icon active" : "align-icon"}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="enhancement-block">
                    <div className="enhancement-header">
                        <h4 className='box-subtitle'>Safe Zone</h4>
                        <span className="label-box">Auto-Adjust</span>
                    </div>
                    <div className="safe-zone gray-background">
                        <p><AiOutlineSafety color='green'/> All text elements are within platform safe zones</p>
                        <div className="platforms">
                            <span><FaInstagram /> Instagram</span>
                            <span> <FaTiktok /> TikTok</span>
                            <span><FaYoutube /> YouTube</span>
                            <span><FaFacebook /> Facebook</span>
                        </div>
                    </div>
                    <div className="enhancement-footer">
                        <button className="cancel-changes">Cancel</button>
                        <button className="apply-changes">Apply Changes</button>
                    </div>
                </div>
            </div>
        </>
    );
}
