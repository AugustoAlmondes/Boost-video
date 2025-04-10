import './work.css';

export default function Work({ imageLink, title, color, description }) {
    return (
        <div className="work-card">
            <div className="work-icon">
                <img src={imageLink} alt={`${title} icon`} />
            </div>

            <div className="work-text">
                <h3 style={{ color }}>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}
