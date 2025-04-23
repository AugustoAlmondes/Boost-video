import './smartedit.css';
import Footer from '../../components/Footer/Footer';
import Video from '../../../public/videos/ads.mp4';
import { useEffect } from 'react';
import { MdArrowBackIosNew } from "react-icons/md";

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

                <div className="resizer" ><MdArrowBackIosNew size={20}/></div>
                <div className="box-right-side">
                    <div className="box-format-selection">
                        <h3 className='box-title'>Format Selection</h3>

                        <div className="format-selection">
                            <h4 className='box-subtitle'>Recomended Format</h4>
                            <button>AI Suggested</button>

                            <p>Based on your content, we recommend vertical format (9:16) for optimal
                            performance on Instagram Reels and TikTok.</p>
                            <ul>
                                <li className='nine-sixteen'></li>
                                <li className='one-one'></li>
                                <li className='sixteen-nine'></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}