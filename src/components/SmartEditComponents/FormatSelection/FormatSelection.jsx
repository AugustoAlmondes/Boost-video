import { BsStars } from 'react-icons/bs';
import './formatselection.css';
// import { useState } from 'react';

export default function FormatSelection({ squad, setSquad }) {	

    // const listDimentions = ['9:16', '1:1', '16:9'];

    return (
        <>
            <div className="box-format-selection">
                <h3 className='box-title'>Format Selection</h3>

                <div className="format-selection">
                    <h4 className='box-subtitle'>Recomended Format</h4>
                    <label className='label-box-ai'> <BsStars/> AI Suggested</label>

                    <p>Based on your content, we recommend vertical format (9:16) for optimal
                        performance on Instagram Reels and TikTok.</p>
                    <ul>
                        <li className={squad === 1 ? 'nine-sixteen active' : 'nine-sixteen'}
                            onClick={() => setSquad(1)}
                        > <div className='squad'/> <p>9:16</p></li>

                        <li className={squad === 2 ? 'one-one active' : 'one-one'}
                            onClick={() => setSquad(2)}
                        ><div className='squad' /> <p>1:1</p></li>

                        <li className={squad === 3 ? 'sixteen-nine active' : 'sixteen-nine'}
                            onClick={() => setSquad(3)}
                        ><div className='squad' /> <p>16:9</p></li>
                    </ul>
                </div>
            </div>
        </>
    );
}