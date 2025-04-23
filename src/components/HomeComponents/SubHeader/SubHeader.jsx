import './subheader.css';
import '../../../index.css';
import { IoIosArrowDown } from "react-icons/io";
import { useState, useEffect } from 'react';
import { motion as MOTION } from 'framer-motion';
import {Link} from 'react-router-dom';

// const images = [
//     '/img/home3.png',
//     '/img/home2.png',
//     '/img/home4.png',
//     '/img/home5.png'
// ];

const images = [
    '/img/home3.2.png',
    '/img/home3.png',
    '/img/home3.1.png',
    '/img/home3.3.png',
];


const currentColor = [
    'blue',
    'yellow',
    'red',
    'green'
]


const fadeVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};

export default function SubHeader() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const[currentIndexImage, setCurrentIndexImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {

            setCurrentIndexImage((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );

            setTimeout(() => {
                setCurrentIndex((prevIndex) =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                );
            },500)
        }, 7000);
        return () => clearInterval(interval);
    }, []);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentIndexImage((prevIndex) =>
    //             prevIndex === images.length - 1 ? 0 : prevIndex + 1
    //         );
    //     }, 6800);
    //     return () => clearInterval(interval);
    // }, []);

    return (
        <div className="container-home">
            <MOTION.div
                className="text-area"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeVariants}
            >
                <h1>
                    Build High-Impact <br />
                    <span
                        style={{
                            background: `linear-gradient(to right, var(--light${currentColor[currentIndex]}), var(--${currentColor[currentIndex]}))`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}

                    >Ads</span> in Seconds <br />

                    <span 
                    style={{
                        background: `linear-gradient(to right, var(--light${currentColor[currentIndex]}), var(--${currentColor[currentIndex]}))`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}
                    >with AI</span>
                </h1>

                <p>
                    Unlock the full potential of your social media campaigns with AI-driven creative insights and performance prediction for smarter, more effective advertising.
                </p>

                {/* <span className="pro-version-text"
                    style={{
                        background: `linear-gradient(to right, white 60%, var(--verylight${currentColor[currentIndex]}))`,
                        transition: '1s ease-in-out',
                        color: `var(--${currentColor[currentIndex]})`
                    }}
                >
                    Use the PRO version for the best performance
                </span> */}

                <div className="buttons-home">
                    <span>Get start</span>
                    <MOTION.div className="watch-demo-button" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link to="/adsflow">
                        <button>
                            Watch Demo
                        </button>
                        </Link>
                    </MOTION.div>
                    <span>or</span>
                    <MOTION.div className="try-for-free-button" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <button>
                            Try For Free
                        </button>
                    </MOTION.div>
                </div>
            </MOTION.div>

            <div className="image-container">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        className={`fade-image ${index === currentIndexImage ? 'active' : ''}`}
                        alt={`slide-${index}`}
                    />
                ))}
            </div>
            <div className="image-overlay"></div>

            <MOTION.div
                className="arrow-down"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <IoIosArrowDown size={40} />
            </MOTION.div>
        </div>
    );
}