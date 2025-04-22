import './progressbar.css';
import { useEffect, useState } from 'react';

export default function ProgressBar({ label, value, max, complement = "", animation = true }) {
    const [displayValue, setDisplayValue] = useState(animation ? 0 : value);
    const [animatedProgress, setAnimatedProgress] = useState(animation ? 0 : value);

    useEffect(() => {
        if (!animation) {
            setDisplayValue(value);
            setAnimatedProgress(value);
            return;
        }

        const duration = 3000;
        const startTime = performance.now();

        const animate = (currentTime) => {
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const currentVal = parseFloat((progress * value).toFixed(2));
            setDisplayValue(currentVal);
            setAnimatedProgress(currentVal);
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [value, animation]);

    return (
        <div className="label-progress-bar">
            <div className="label-card-progress">
                <label>{label}</label>
                <h4>{displayValue.toFixed(2)}{complement}</h4>
            </div>
            <progress
                className="progress-bar"
                value={animatedProgress}
                max={max}
                style={{ backgroundColor: 'var(--red)' }}
            >
                {displayValue.toFixed(2)}{complement}
            </progress>
        </div>
    );
}
