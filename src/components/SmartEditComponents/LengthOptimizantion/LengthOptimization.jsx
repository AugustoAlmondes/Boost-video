import { FaScissors } from 'react-icons/fa6';
import ProgressBar from '../../ProgressBar/ProgressBar';
import './lengthoptimization.css';

export default function LengthOptimization({ suggestion, setSuggestion }) {
    return (
        <>
        <div className="box-length-optimization">
                        <h3 className='box-title'>Length Optimization</h3>

                        <div className="length-optimization">
                            <div className="box-current-duration">
                                <h4 className='box-subtitle'>Current Duration</h4>
                                <div className="progress-bar-duration gray-background">
                                    <ProgressBar
                                        label="Current Duration"
                                        value={70}
                                        max={120}
                                        complement=" seconds"
                                    />
                                    <p className="recomended-length">
                                        Recommended length for Instagram Reels: 30 seconds
                                    </p>
                                </div>
                            </div>

                            <div className="box-ai-suggestions">
                                <h4>AI Suggestions</h4>
                                <label className='label-box'> Auto Trim</label>

                                <div className={suggestion.includes(1) ? "suggestion active" : "suggestion"}
                                    onClick={() => {
                                        !(suggestion.includes(1)) ?
                                            setSuggestion([...suggestion, 1]) :
                                            setSuggestion(suggestion.filter(item => item !== 1))
                                    }}
                                >
                                    <h4><FaScissors /> Remove product showcase (0:45 - 1:15)</h4>
                                    <p>Redundant information that slows down the pace</p>
                                </div>

                                <div className={suggestion.includes(2) ? "suggestion active" : "suggestion"}
                                    onClick={() => {
                                        !(suggestion.includes(2)) ?
                                            setSuggestion([...suggestion, 2]) :
                                            setSuggestion(suggestion.filter(item => item !== 2))
                                    }}
                                >
                                    <h4><FaScissors /> Trim ending (1:30 - 1:45)</h4>
                                    <p>Logo animation can be shortened</p>
                                </div>

                                <div className={suggestion.includes(3) ? "suggestion active" : "suggestion"}
                                    onClick={() => {
                                        !(suggestion.includes(3)) ?
                                            setSuggestion([...suggestion, 3]) :
                                            setSuggestion(suggestion.filter(item => item !== 3))
                                    }}
                                >
                                    <h4><FaScissors /> Trim ending (1:30 - 1:45)</h4>
                                    <p>Logo animation can be shortened</p>
                                </div>

                                <div className="buttons-suggestions">
                                    <button className='cancel-changes'
                                        onClick={() => setSuggestion([])}
                                    >Cancel Selections</button>
                                    <button className='apply-changes' >Apply Changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
        </>
    );
}