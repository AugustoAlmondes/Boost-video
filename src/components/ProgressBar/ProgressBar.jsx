import './progressbar.css';

export default function ProgressBar(
    {
        label,
        value,
        max,
        complement = ""
    }
) {
    return (
        <>
            <div className="label-progress-bar">
                <div className="label-card-progress">
                    <label>{label}</label>
                    <h4>{value}{complement}</h4>
                </div>
                <progress className="progress-bar" value={value} max={max}
                style={{ backgroundColor: 'var(--red) !important' }}
                >{value}{complement}</progress>
            </div>
        </>
    );
}