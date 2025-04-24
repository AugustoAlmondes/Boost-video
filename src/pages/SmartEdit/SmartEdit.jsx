import './smartedit.css';
import Video from '/videos/ads.mp4';
import { useEffect } from 'react';
import { MdArrowBackIosNew } from "react-icons/md";
import { useState } from 'react';
import FormatSelection from '../../components/SmartEditComponents/FormatSelection/FormatSelection';
import LengthOptimization from '../../components/SmartEditComponents/LengthOptimizantion/LengthOptimization';
import StorytellingEnhancement from '../../components/SmartEditComponents/StorytellingEnhancement/StorytellingEnhancement';
import AudioEnhancement from '../../components/SmartEditComponents/AudioEnhancement/AudioEnhancement';
import TextEnhancement from '../../components/SmartEditComponents/TextEnhancement/TextEnhancement';
import SmartEditSummary from '../SmartEditSummary/SmartEditSummary';
import { BsArrowRight } from 'react-icons/bs';
import { FaLongArrowAltRight } from 'react-icons/fa';

export default function SmartEdit() {
    useEffect(() => {
        const resizer = document.querySelector('.resizer');
        const right = document.querySelector('.box-right-side');
        // const left = document.querySelector('.box-left-side');

        let x = 0;
        let rightWidth = 0;

        const mouseDownHandler = function (e) {
            x = e.clientX;
            rightWidth = right.getBoundingClientRect().width;

            document.addEventListener('mousemove', mouseMoveHandler);
            document.addEventListener('mouseup', mouseUpHandler);
        };

        const mouseMoveHandler = function (e) {
            const dx = e.clientX - x;
            const newRightWidth = rightWidth - dx;

            if (newRightWidth >= 300 && newRightWidth <= 1000) {
                right.style.width = `${newRightWidth}px`;
            }
        };

        const mouseUpHandler = function () {
            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseup', mouseUpHandler);
        };

        resizer.addEventListener('mousedown', mouseDownHandler);

        return () => {
            resizer.removeEventListener('mousedown', mouseDownHandler);
        };
    }, []);

    const [squad, setSquad] = useState(1);
    const [suggestion, setSuggestion] = useState([]);
    const [track, setTrack] = useState(1);

    return (

        <>
            <div className="container-smartedit">
                <div className="box-left-side">
                    <div className="video-preview-box">
                        <h3>Video Preview</h3>
                        <video
                            src={Video}
                            controls
                            className="video-preview"
                        ></video>
                    </div>
                </div>

                <div className="resizer" ><MdArrowBackIosNew size={20} /></div>
                <div className="box-right-side">

                    <FormatSelection squad={squad} setSquad={setSquad} />

                    <LengthOptimization suggestion={suggestion} setSuggestion={setSuggestion} />

                    <StorytellingEnhancement />

                    <AudioEnhancement track={track} setTrack={setTrack} />

                    <TextEnhancement />

                    <button className='button-finish'>Finish Edition <FaLongArrowAltRight size={20}/> </button>
                </div>

            </div >
        </>
    );
}