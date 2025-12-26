// components/AnimatedNumber.jsx
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function AnimatedNumber({ end, duration = 3000 }) {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({ triggerOnce: true });

    useEffect(() => {
        if (!inView) return;

        let start = 0;
        const increment = end / (duration / 30);

        const interval = setInterval(() => {
            start += increment;
            if (start >= end) {
                clearInterval(interval);
                setCount(end);
            } else {
                setCount(Math.floor(start));
            }
        }, 30);

        return () => clearInterval(interval);
    }, [inView, end, duration]);

    return <span ref={ref}>{count}</span>;
}
