import './style.css';
import { useState, useEffect } from 'react';

const imagens = [
    '/img/home2.png',
    '/img/home3.png',
    '/img/home4.png',
    '/img/home5.png'];


export default function Home() {
    const [indexAtual, setIndexAtual] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setIndexAtual((prevIndex) => (prevIndex + 1) % imagens.length);
        }, 3000); // troca a cada 3s
        return () => clearInterval(intervalo);
    }, []);

    return (
        <div className="imagem-container">
            {imagens.map((src, i) => (
                <img
                    key={i}
                    src={src}
                    alt={`Imagem ${i}`}
                    className={`imagem ${i === indexAtual ? 'ativa' : ''}`}
                />
            ))}
        </div>
    );
}