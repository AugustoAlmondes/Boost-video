import './cardperformance.css';
import "../../index.css";
import { useState, useEffect } from 'react';

export default function CardPerformance({ icon, title, extension, color, description }) {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        const end = Number(title);
        const duration = 2000;
        const startTime = performance.now();

        const animate = (currentTime) => {
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const currentVal = (progress * end).toFixed(2);
            setDisplayValue(currentVal);
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        
        requestAnimationFrame(animate);
    }, [title]);

    return (
        <div className="card-performance ">
            <div
                className="icon-card-performance "
                style={{ backgroundColor: `var(--light${color})` }}
            >
                {icon}
            </div>
            <div>
                <h3>{displayValue}{extension}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}
