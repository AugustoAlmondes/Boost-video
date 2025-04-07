import './style.css';
// import ImageHeader from '../../components/ImageHeader';
import { useState, useEffect } from 'react';

const images = [
    '/img/home2.png',
    '/img/home3.png',
    '/img/home4.png',
    '/img/home5.png'];

function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 8000); // muda a cada 8 segundos

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container-home">

            <div className="image-container">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        className={`fade-image ${index === currentIndex ? 'active' : ''}`}
                        alt={`slide-${index}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;