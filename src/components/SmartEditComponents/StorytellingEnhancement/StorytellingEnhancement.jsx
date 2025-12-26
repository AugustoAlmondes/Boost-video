import { BsStars } from 'react-icons/bs';
import './storytellingenhancement.css';

export default function StorytellingEnhancement() {
    return (
        <>
                <h3 className='box-title'>Storytelling Enhancement</h3>
            <div className="box-storytelling-enhancement">

                <div className="enhancement-card">
                    <div className="enhancement-header">
                        <h4 className='box-subtitle'>Hook Optimization</h4>
                        <span className="label-box-ai"><BsStars/> AI Analyzing</span>
                    </div>
                    <p className="enhancement-sub">First 3 seconds optimized to capture attention:</p>
                    <div className="edit-box">
                        “Start with the product benefit instead of brand introduction”
                    </div>
                </div>

                <div className="enhancement-card">
                    <div className="enhancement-header">
                        <h4 className='box-subtitle'>Value Proposition</h4>
                        <span className="label-box">Suggested Edit</span>
                    </div>
                    <p className="enhancement-sub">Core message restructured:</p>
                    <div className="edit-box">
                        “Emphasize 50% time saving benefit with visual demonstration”
                    </div>
                </div>

                <div className="enhancement-card">
                    <div className="enhancement-header">
                        <h4 className='box-subtitle'>Call-to-Action</h4>
                        <span className="label-box">Suggested Edit</span>
                    </div>
                    <p className="enhancement-sub">Recommended CTA change:</p>
                    <div className="edit-box">
                        “Shop Now” → “Start Free Trial Today”
                    </div>
                </div>

                <div className="enhancement-buttons">
                    <button className="apply-changes">Apply Changes</button>
                </div>
            </div>

        </>
    );
}