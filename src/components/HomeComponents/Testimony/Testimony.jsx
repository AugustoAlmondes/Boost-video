import { FaLongArrowAltRight } from 'react-icons/fa';
import './testimony.css';
import { motion as MOTION } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Testimony() {
    const depoimentos = [
        {
            nome: "Mariana Costa",
            cargo: "CMO - Creative agency",
            texto: "The platform's performance analysis helped us triple our campaign engagement. I recommend strongly!",
            imagem: "/img/fernanda.jpeg"
        },
        {
            nome: "Carlos Silva",
            cargo: "Growth Hacker - StartupX",
            texto: "Seeing performance before launching the campaign made us save time and money. Indispensable tool.",
            imagem: "/img/carlos.jpeg"
        },
        {
            nome: "Fernanda Lima",
            cargo: "Social Media - MarcaZ",
            texto: "The interface is intuitive and insights are powerful. Best media investment we made this year!",
            imagem: "/img/mariana.jpeg"
        }
    ];

    return (
        <>
            <section className="depoimentos-container">
                <MOTION.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Trusted by Content Creators
                </MOTION.h2>

                <div className="cards-wrapper">
                    {depoimentos.map((d, i) => (
                        <MOTION.div
                            className="card-depoimento"
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <img src={d.imagem} alt={d.nome} className="avatar" />
                            <p className="texto">“{d.texto}”</p>
                            <p className="nome">{d.nome}</p>
                            <p className="cargo">{d.cargo}</p>
                        </MOTION.div>
                    ))}
                </div>
                <div className="use-cases-cta">
                    <h3>Start now creating video that really work</h3>
                    <Link to="/adsflow">
                        <button>Test for free </button>
                    </Link>
                </div>
            </section>
        </>
    );
}
