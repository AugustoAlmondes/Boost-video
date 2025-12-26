import './cardperformance.css';
import "../../index.css";
import { useState, useEffect } from 'react';
import { motion as MOTION } from 'framer-motion';

export default function CardPerformance({ icon, title, extension, color, description, delay, timeout }) {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        const end = Number(title);
        const duration = 1000;
        const startTime = performance.now();

        const animate = (currentTime) => {
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const currentVal = (progress * end).toFixed(2);
            setTimeout(() => {
                setDisplayValue(currentVal);
            },timeout);
                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
        };
        requestAnimationFrame(animate);
    }, [title, timeout]);

    return (
        <MOTION.div className="card-performance "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{delay: delay, duration: 0.6 }}
            viewport={{ once: true }}
        >
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
        </MOTION.div>
    );
}
