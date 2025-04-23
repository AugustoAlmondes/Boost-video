import './scriptcaptioninput.css';
import '../../pages/AdsFlow/adsflow.css';

export default function ScriptCaptionInput({ value, onChange }) {
    return (
        <>
            <div className={value ? "script-caption-container active" : "script-caption-container"}>
                <h3 className="subtitle-box">Script / Caption</h3>
                <textarea
                    className="script-caption-textarea"
                    placeholder="Enter your ad script or caption here"
                    value={value}
                    onChange={onChange}
                    rows={6}
                />
            </div>
        </>
    );
}