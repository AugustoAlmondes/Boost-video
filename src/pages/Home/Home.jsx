import './style.css';
import { IoIosArrowDown } from "react-icons/io";
import { useState, useEffect } from 'react';

const images = [
    '/img/home3.png',
    '/img/home2.png',
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

            <div className="text-area">
                <h1>Create <br />
                    High-Performance <br />
                    Ads with AI</h1>

                <p>
                    Optimize your social media advertising with AI-powered creative analysis and performance prediction
                </p>

                <div className="buttons-home">
                    <div className="try-for-free-button">
                        <button>
                            Try For Free
                        </button>
                    </div>

                    <div className="watch-demo-button">
                        <button>
                            Watch Demo
                        </button>
                    </div>
                </div>
            </div>


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

            <IoIosArrowDown className="arrow-down" />
        </div>
    );
}

export default Home;