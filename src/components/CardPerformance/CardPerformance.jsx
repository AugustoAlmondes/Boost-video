import './cardperformance.css';
import "../../index.css";
export default function CardPerformance({ icon, title, color, description }) {
    return (
        <>
            <div className="card-performance"
            >
                <div className="icon-card-performance"
                    style={{ backgroundColor: `var(--light${color})` }}
                >
                    {icon}
                </div>
                <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </>
    );
}