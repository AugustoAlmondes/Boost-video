import './scriptcaptioninput.css';

export default function ScriptCaptionInput({ value, onChange }) {
    return (
        <>
            <div className="script-caption-container"
                style={value ? { borderColor: 'var(--blue)', transition:'.2s' } : {}}
            >
                <h3>Script / Caption</h3>
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