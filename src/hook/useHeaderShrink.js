import { useEffect } from 'react';

export default function useHeaderShrink(selector = '.container-header', scrollOffset = 10) {
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector(selector);
            if (!header) return;

            if (window.scrollY > scrollOffset) {
                header.classList.add('shrink');
            } else {
                header.classList.remove('shrink');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [selector, scrollOffset]);
}